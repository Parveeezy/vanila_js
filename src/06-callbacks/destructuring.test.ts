import {ManType} from "./06-destructuring";


let props: ManType;

beforeEach(() => {
    props = {
        name: "Parviz",
        age: 29,
        lessons: [{title: 'TS'}, {title: 'React'}],
        address: {
            street: {
                title: 'Pulodi street'
            }
        }
    }
})

test('', () => {
    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(29)
    expect(lessons.length).toBe(2);
    expect(title).toBe('Pulodi street')
})

test('', () => {
    const [l1, l2] = props.lessons

    expect(l1.title).toBe('TS')
    expect(l2.title).toBe('React')
})