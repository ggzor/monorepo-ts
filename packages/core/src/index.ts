import { Maybe, None, Some } from './utils/Maybe'

export function divide(num: number, den: number): Maybe<number> {
  if (den === 0) return None

  return Some(num / den)
}
