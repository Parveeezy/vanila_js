type StreetType = {
    title: string
}
type AddressType = {
    number?: number
    street: StreetType
}
type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}


type governmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingType>
    citizensNumber: number
}