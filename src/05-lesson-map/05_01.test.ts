import {createGreeatingMessage, ManType} from "./05_01";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {id: 1, name: 'Parviz', age: 29},
        {id: 2, name: 'Nisso', age: 28},
        {id: 3, name: 'Parisa', age: 7},
        {id: 4, name: 'Latif', age: 4}
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreeatingMessage(people)

    expect(messages.length).toBe(4);
    expect(messages[0]).toBe(`Hello Parviz, welcome to Tajikistan`);
    expect(messages[1]).toBe(`Hello Nisso, welcome to Tajikistan`);
    expect(messages[2]).toBe(`Hello Parisa, welcome to Tajikistan`);
    expect(messages[3]).toBe(`Hello Latif, welcome to Tajikistan`);
})