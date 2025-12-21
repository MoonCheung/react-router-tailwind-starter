/**
 * 用于实现单例模式的函数
 * 使用指定的名称和工厂函数在全局范围内生成一个值
 *
 * @param name 单例名称
 * @param valueFactory 用于生成值的工厂函数
 * @returns 生成的单例值
 */
export const singleton = <T>(
  name: string,
  valueFactory: () => T,
): T => {
  const globalForSingletons = global as typeof global & {
    __singletons?: Record<string, unknown>;
  }

  globalForSingletons.__singletons ??= {};
  if (!(name in globalForSingletons.__singletons)) {
    globalForSingletons.__singletons[name] = valueFactory();
  }

  return globalForSingletons.__singletons[name] as T;
}
