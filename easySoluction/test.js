const multiplesEasySoluction = require('./index')

test('multiplesEasySoluction is defined', () => {
  expect(multiplesEasySoluction).toBeDefined()
})

test('Calling multiplesEasySoluction', () => {
  multiplesEasySoluction()

  expect(console.log.mock.calls.length).toEqual(100)
})

test('Calling multiplesEasySoluction with some correct values', () => {
  multiplesEasySoluction()

  expect(console.log.mock.calls[0][0]).toEqual(1)
  expect(console.log.mock.calls[1][0]).toEqual(2)
  expect(console.log.mock.calls[2][0]).toEqual('Linio')
  expect(console.log.mock.calls[3][0]).toEqual(4)
  expect(console.log.mock.calls[4][0]).toEqual('IT')
  expect(console.log.mock.calls[5][0]).toEqual('Linio')
  expect(console.log.mock.calls[6][0]).toEqual(7)
  expect(console.log.mock.calls[7][0]).toEqual(8)
  expect(console.log.mock.calls[8][0]).toEqual('Linio')
  expect(console.log.mock.calls[9][0]).toEqual('IT')
  expect(console.log.mock.calls[10][0]).toEqual(11)
  expect(console.log.mock.calls[11][0]).toEqual('Linio')
  expect(console.log.mock.calls[12][0]).toEqual(13)
  expect(console.log.mock.calls[13][0]).toEqual(14)
  expect(console.log.mock.calls[14][0]).toEqual('Linianos')
})

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => { })
})

afterEach(() => {
  console.log.mockRestore()
})
