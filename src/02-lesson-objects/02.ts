type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: 'Parviz',
    age: 29,
    isActive: false,
    address: {
        streetTitle: 'Kuprina 43',
        city: {
            title: 'Moscow',
            countryTitle: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'REACT'
        },
    ]
}