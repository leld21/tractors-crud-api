export interface Controller<T> {
  handle: () => Promise<T>;
}
