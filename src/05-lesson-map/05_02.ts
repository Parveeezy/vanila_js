import {governmentBuildingType, HouseType} from "../02-lesson-objects/02_02";

export const getStreetsTitlesOfGovernmentBuildings =
    (buildings: Array<governmentBuildingType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {

    let callbackfn = (h: HouseType) => {
        return `Hello guys from ${h.address.street.title}`;
    };
    const newArray = houses.map(callbackfn);
    return newArray
}