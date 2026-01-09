import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = { 
  schema: 'tools/graphql-codegen/schema.graphql',
  overwrite: true,
  documents: ['app/**/*.tsx', 'app/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  hooks: { afterAllFileWrite: ['biome check --write'] },
  generates: {
    './app/.server/lib/graphql/@generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        // 添加这个配置，使用不同的导入方式
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
        // 或者完全禁用 fragment masking
        // fragmentMasking: false
      },
      config: {
        // 使用具体的导入路径
        importDocumentNodeExternallyFrom: '@graphql-typed-document-node/core/dist/index.js',
        // 或者使用 gql-tag-operations
        useTypeImports: true,
      },
    }
  },
}

export default config;