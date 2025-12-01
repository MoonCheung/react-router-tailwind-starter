import React, { Suspense } from 'react';
import { useParams } from 'react-router';

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
  modal: React.lazy(() => import('./sandbox.modal')),
  // ... 加 100 个都没问题，只需一行
} as const

export default function DynamicPage() {
  const { page } = useParams<{ page: string }>()
  const Component = componentMap[page as keyof typeof componentMap]

  return (
    <Suspense fallback={<div>加载中...</div>}>
      {Component ? <Component /> : <div>组件不存在（404）</div>}
    </Suspense>
  )
}