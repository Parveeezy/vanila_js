export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = { id: number, title: string };
export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export const makeHairStyle = (u: UserType, power: number) => {
    const copy = {
        ...u, hair: u.hair / power
    }
    return copy
};
export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {
        ...u,
        address: {...u.address, city: city}
    }
    // copy.address = {...copy.address, city: city}
}
export const upgradeLaptop = (u: UserWithLaptopType, title: string) => {
    return {
        ...u,
        laptop: {...u.laptop, title: title}
    }
}
export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}
export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, newBooks: string) => {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
}
export const updateBook = (u: UserWithLaptopType & UserWithBooksType, currentBook: string, newBooks: string) => ({
    ...u,
    books: u.books.map(b => b === currentBook ? newBooks : b)
})
export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => ({
    ...u,
    books: u.books.filter(b => b !== bookForDelete)
})

export const updateCompanyTitle = (user: UserWithLaptopType & WithCompaniesType,
                                   companyId: number,
                                   newTitle: string) => {
    const copy: WithCompaniesType = {
        ...user,
        companies: user.companies.map(c => c.id === companyId
            ? {...c, title: newTitle}
            : c)
    }
    return copy
}

export const updateCompanyTitle2 =
    (companies: { [key: string]: Array<CompanyType> },
     userName: string,
     companyId: number,
     newTitle: string) => {
        let companyCopy = {...companies}
        companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
            ? {...c, title: newTitle}
            : c)
        return companyCopy
    }