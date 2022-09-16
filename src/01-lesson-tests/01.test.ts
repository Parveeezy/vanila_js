import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {
    const t1 = sum(a, b)
    const t2 = sum(b, c)

    expect(t1).toBe(3)
    expect(t2).toBe(5)
})

test('mult should be correct', () => {
    const t1 = mult(a, b)
    const t2 = mult(b, c)

    expect(t1).toBe(2)
    expect(t2).toBe(6)
})


test('splitting into words should be correct', () => {
    //data задаем первоначальные данные
    const s1 = 'Hello my friend!'
    const s2 = 'JS - the best programming language.'

    //action какие действия нужно проделать
    //тут будет тестироваться функиця splitIntoWords с данными s1 и s2
    const result1 = splitIntoWords(s1);
    const result2 = splitIntoWords(s2);


    //Ожижаемый результат
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})