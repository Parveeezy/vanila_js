export type ManType = {
    id: number
    name: string
    age: number
}

const people: Array<ManType> = [
    {id: 1, name: 'Parviz', age: 29},
    {id: 2, name: 'Nisso', age: 28},
    {id: 3, name: 'Parisa', age: 7},
    {id: 4, name: 'Latif', age: 4},
]

const transformator = (man: ManType) => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})

const devs1 = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Parviz', lastName: 'Shirinov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Nisso', lastName: 'Shirinova'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Parisa', lastName: 'Shirinova'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Latif', lastName: 'Shirinov'
    },
]

let devs2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2]),
    transformator(people[3])
]

const devs3 = people.map(transformator)
const devs4 = people.map((man: ManType) => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

const messages = people.map(man =>
    `Hello ${man.name.split(' ')[0]}, welcome to Tajikistan`
)

export const createGreeatingMessage = (people: ManType[]) => {
   return  people.map(man =>
        `Hello ${man.name.split(' ')[0]}, welcome to Tajikistan`
    )
}