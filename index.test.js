const { capitalize, reverse, calculator } = require('./index');
const analyzeArray = require("./analyzeArray");
const caesarCipher = require("./caesarCypher");

test('capitalize "hello"', () => {
    expect(capitalize("hello")).toMatch("Hello");
})

test('capitalize "world"', () => {
    expect(capitalize("world")).toMatch("World");
})

test('reverse "hello"', () => {
    expect(reverse("hello")).toMatch("olleh");
})

test('reverse "world"', () => {
    expect(reverse("world")).toMatch("dlrow");
})

test('calculate add 2 + 5', () => {
    expect(calculator.add(2, 5)).toBe(7);
})

test('calculate add a + b', () => {
    expect(calculator.add("a", "b")).toBe("invalid arguments");
})

test('calculate subtract 5 - 2', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
})

test('calculate subract 2 - 5', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
})

test('calculate multiply 2 * 5', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
})

test('calculate multipy 5 * (-2)', () => {
    expect(calculator.multiply(5, -2)).toBe(-10);
})

test('calculate divide 5 / 2', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
})

test('calculate divide 5 / 3', () => {
    expect(calculator.divide(5, 3)).toBe(1.667);
})

test('caeserCipher "hello" by 1', () => {
    expect(caesarCipher("hello", 1)).toMatch("ifmmp")
})

test('caeserCipher "xyz" by 3', () => {
    expect(caesarCipher("xyz", 3)).toMatch("abc")
})

test('caeserCipher "HeLLo" by 3', () => {
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr")
})

test('caeserCipher "Hello, World!" by 3', () => {
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!")
})

test('analyze Array [1,8,3,4,2,6]', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})