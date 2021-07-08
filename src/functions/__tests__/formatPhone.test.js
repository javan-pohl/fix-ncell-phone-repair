import formatPhone from '../formatPhone'

const testNum = '3034216499'
const testResult = '(303)421-6499'
test('3034216499 should be converted into string "(303)"', () => {
  expect(formatPhone(testNum)).toBe(testResult)
})
