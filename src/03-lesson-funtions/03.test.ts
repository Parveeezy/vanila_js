import {StudentType} from "../02-lesson-objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
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
})


test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()

})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('student lives in the city?', () => {

    let res1 = doesStudentLiveIn(student, 'Moscow')
    let res2 = doesStudentLiveIn(student, 'Dushanbe')

    expect(res1).toBe(true)
    expect(res2).toBe(false)
})