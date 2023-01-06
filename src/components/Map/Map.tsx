import React from 'react';


type StudentType = {
    id: number
    name: string
    age: number
}

type StudentsType = {
    students: StudentType[]
}

const Map = (props: StudentsType) => {
    return (
        <ul>
            {props.students.map((student, index) => {
                return (
                    <li key={student.id}>
                        <span>{student.name} </span>
                        <span>age: {student.age}</span>
                    </li>
                )
            })}
        </ul>
    );
};

export default Map;