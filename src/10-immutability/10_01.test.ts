import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBook,
    updateCompanyTitle, updateCompanyTitle2,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Parviz',
        hair: 30,
        address: {
            city: 'Dushanbe'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    user = awesomeUser;

    expect(user.hair).toBe(15)
    expect(awesomeUser.hair).toBe(15)
    expect(awesomeUser.address).toBe(user.address)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Parviz',
        hair: 30,
        address: {
            city: 'Dushanbe',
            house: 19
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Dubai')

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Dubai');
})
test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Parviz',
        hair: 30,
        address: {
            city: 'Dushanbe',
            house: 19
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedUserLaptop = upgradeLaptop(user, 'Macbook')

    expect(upgradedUserLaptop.laptop.title).toBe('Macbook');
    expect(user.laptop.title).not.toBe(upgradedUserLaptop.laptop.title);
})
test('user with books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Parviz',
        hair: 30,
        address: {
            city: 'Dushanbe',
            house: 19
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', "JS", 'REACT', 'ANGULAR']
    }

    const userCopy = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).not.toBe(userCopy.address);
    expect(userCopy.address.house).toBe(99);
})
test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Parviz',
        hair: 30,
        address: {
            city: 'Dushanbe',
            house: 19
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', "JS", 'REACT', 'ANGULAR']
    }

    const userCopy = addNewBooksToUser(user, 'ts');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[4]).toBe('ts');
    expect(userCopy.books.length).toBe(5);
})
test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Parviz',
        hair: 30,
        address: {
            city: 'Dushanbe',
            house: 19
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', 'HTML', "JS", 'REACT']
    }

    const userCopy = updateBook(user, 'JS', 'TS');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('TS');
})
test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Parviz',
        hair: 30,
        address: {
            city: 'Dushanbe',
            house: 19
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', 'HTML', "JS", 'REACT']
    }

    const userCopy = removeBook(user, 'JS');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('REACT');
})

test('companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Parviz',
        hair: 30,
        address: {
            city: 'Dushanbe',
            house: 19
        },
        laptop: {title: 'Macbook'},
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'Fly'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'Google') as UserWithLaptopType & WithCompaniesType;

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Google')
})

test('update company', () => {
    let companies = {
        'Parviz': [{id: 1, title: 'Epam'},
            {id: 2, title: 'Fly'}],
        'Nisso': [{id: 1, title: 'NGS'}]
    }

    const copy = updateCompanyTitle2(companies, 'Nisso', 1, 'Sberbank')

    expect(copy['Nisso']).not.toBe(companies['Nisso'])
    expect(copy['Parviz']).toBe(companies['Parviz'])
    expect(copy['Nisso'][0].title).toBe('Sberbank')
})