import {UserType} from "./09_01";
const increaseAge = (u: UserType) => {
    u.age++
}
test('reference type test', () => {

    const user: UserType = {
        name: 'Parviz',
        age: 29,
        address: {
            title: 'Moscow'
        }
    };
    increaseAge(user)

    expect(user.age).toBe(30)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})
test('reference type test2', () => {

    const user: UserType = {
        name: 'Parviz',
        age: 29,
        address: {
            title: 'Moscow'
        }
    };

    const user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = 'France'

    expect(user.address.title).toBe('France')

})
test('array test', () => {

    const users = [
        {
            name: 'Parviz',
            age: 29
        },
        {
            name: 'Nisso',
            age: 28
        }

    ];

    const admins = users

    admins.push({name: 'Latif', age: 4})

    expect(users[2]).toEqual({name: 'Latif', age: 4})
});
test('value type test', () => {
    const usersCount = 100;
    let adminsCount = usersCount

    adminsCount++

    expect(usersCount).toBe(100)
});
test('reference type array test', () => {
    const address = {title: 'Dushanbe'}
    const user: UserType = {
        name: 'Parviz',
        age: 29,
        address: address
    };
    const user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }
    const users = [user, user2, {name: 'Katya', age: 26, address: address}]
    const admins = [user, user2]

    admins[0].name = 'Veezy'

    expect(users[0].name).toBe('Veezy')
    expect(user.name).toBe('Veezy')
})

test('sort array test', () => {
    const letters = ['a', 'd', 'z', 'y', 'e']

    letters.sort()

    expect(letters).toEqual(['a', 'd', 'e', 'y', 'z'])
})