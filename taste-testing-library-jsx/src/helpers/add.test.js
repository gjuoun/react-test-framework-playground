import { add } from './add'

test('it shoud add two numbers', () => {
  const result = add(1, 2)
  expect(result).toBe(3)
})
