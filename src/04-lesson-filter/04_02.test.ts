import {CityType} from "../02-lesson-objects/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                id: 2,
                buildedAt: 2010,
                repaired: true,
                address: {number: 101, street: {title: 'Black street'}}
            },
            {
                id: 3,
                buildedAt: 2000,
                repaired: false,
                address: {number: 102, street: {title: 'Bronx'}}
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'White street');

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(2);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})