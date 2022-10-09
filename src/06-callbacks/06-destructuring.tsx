import React, {useState} from "react";

type LessonsType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const {title, man: {name}} = props;

    const [message, setMessage] = useState<string>('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
        </div>
    )
}