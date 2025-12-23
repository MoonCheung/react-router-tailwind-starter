import React, { Suspense } from 'react';
import { useParams, type LoaderFunctionArgs } from 'react-router';

// 组件映射表：key 是 URL 参数，value 是懒加载组件
const componentMap = {
  button: React.lazy(() => import('./sandbox.button')),
  typography: React.lazy(() => import('./sandbox.typography')),
  breadcrumb: React.lazy(() => import('./sandbox.breadcrumb')),
  card: React.lazy(() => import('./sandbox.card')),
  tooltip: React.lazy(() => import('./sandbox.tooltip')),
  textarea: React.lazy(() => import('./sandbox.textarea')),
  toast: React.lazy(() => import('./sandbox.toast')),
  dialog: React.lazy(() => import('./sandbox.dialog')),
  modal: React.lazy(() => import('./sandbox.modal'))
  // ... 加 100 个都没问题，只需一行
} as const

type ComponentKey = keyof typeof componentMap;

export async function loader({ params }: LoaderFunctionArgs) {
  const page = params.page;
  
  // 根据页面名称加载对应的 loader
  switch (page) {
    case 'modal': {
      const { getModalData } = await import('./loaders/modal.server');
      return await getModalData();
    }
    // 其他页面没有服务端数据
    default:
      return null;
  }
}

export default function DynamicPage() {
  const { page } = useParams<{ page: string }>()

  const isValidComponent = (key: string): key is ComponentKey => {
    return key in componentMap;
  };

  if (!page || !isValidComponent(page)) {
    return <div>组件不存在 (404)</div>;
  }

  const Component = componentMap[page];

  return (
    <Suspense fallback={<div>加载中...</div>}>
      <Component />
    </Suspense>
  )
}