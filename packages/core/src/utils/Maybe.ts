export type None = { kind: 'None' }
export type Some<T> = { kind: 'Some'; value: T }
export type Maybe<T> = Some<T> | None

export const None: None = { kind: 'None' }
export function Some<T>(value: T): Some<T> {
  return { kind: 'Some', value }
}
