import { ClientError, GraphQLClient } from 'graphql-request';
import { env } from '~/config/env';

export const initializeClient = async (
  request: Request | undefined = undefined,
) => {
  const headers: Record<string, string> = {};

  if (request) {
    try {
      // 有选择地仅添加某些重要标头
      const selectHeaders = [
        // 注意：需要 Cookie 才能获取 GraphQL 服务器上的用户信息
        'cookie',
      ];

      for (const headerName of selectHeaders) {
        const headerValue = request.headers.get(headerName);
        if (headerValue) {
          headers[headerName] = headerValue;
        }
      }
    } catch (error) {
      console.error('An error occurred while retrieving headers:', error);
    }
  }

  // GraphQLClient 初始化
  const client = new GraphQLClient(env.API_GQL_URL, {
    fetch: fetch,
    headers: {
      // 注意：如果未指定 Content-Type，将出现 GqphQL 语法错误。
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  return client;
};

/**
 * 从“ClientError”实例中提取原始错误消息。
 *
 * @param error -用于提取原始错误消息的“ClientError”实例。
 * @returns 如果存在则返回原始错误消息，否则返回“null”。
 */
export const getOriginalErrorMessage = (error: ClientError): string | null => {
  if (error instanceof ClientError) {
    const originalError = error.response?.errors?.[0]?.extensions
      ?.originalError as { message: string } | undefined;

    if (originalError?.message) {
      return originalError.message;
    }
  }
  return null;
};
