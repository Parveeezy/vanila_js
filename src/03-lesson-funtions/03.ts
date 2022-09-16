import {student, StudentType} from "../02-lesson-objects/02";
import {CityType, governmentBuildingType, HouseType} from '../02-lesson-objects/02_02'

const sum = (a: number, b: number) => {
    return a + b;
}


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true
}

export function doesStudentLiveIn(student: StudentType, city: string) {
    return student.address.city.title === city
}

export const addMoneyToBudget = (governmentBuilding: governmentBuildingType, budget: number) => {
    return governmentBuilding.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}


export const toFireStaff = (governmentBuilding: governmentBuildingType, staff: number) => {
    return governmentBuilding.staffCount -= staff;
}

export const toHireStaff = (governmentBuilding: governmentBuildingType, staff: number) => {
    return governmentBuilding.staffCount += staff;
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens! I want you be happy! All ${city.citizensNumber}`
}