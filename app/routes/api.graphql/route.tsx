import type { Route } from './+types/route';
import { createYoga } from 'graphql-yoga';
import { schema } from '~/.server/lib/graphql/schema';
import { getSession } from '~/sessions.server';

// NOTE: createYoga 创建的实例将作为单子使用
const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  context: async (ctx) => {
    // 检索已登录的用户
    const session = await getSession(ctx.request.headers.get('Cookie'));
    const user = session.get('user');
    return { ...ctx, user }
  }
})

export const loader = async ({ request, context }: Route.LoaderArgs) => {
  const response = await yoga.handleRequest(request, context);
  return new Response(response.body, response);
}

export const action = async ({ request, context }: Route.ActionArgs) => {
  const response = await yoga.handleRequest(request, context);
  return new Response(response.body, response);
}