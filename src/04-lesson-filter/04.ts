export type CourseType = {
    title: string
    price: number
}

const ages = [10, 25, 34, 44, 90, 100];

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

const cheapPredicate = (courses: CourseType) => {
    return courses.price < 160
}


const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]