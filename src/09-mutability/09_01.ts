export type UserType = {
    name: string
    age: number
    address: {title: string}
}

const user: UserType = {
    name: 'Parviz',
    age: 29,
    address: {
        title: 'Moscow'
    }
};

const increaseAge = (user: UserType) => {
    user.age++
}