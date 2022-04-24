import React from "react";
import Header from './Header'
import Content from './Content'
import Total from './Total'
const App = () => {
    const course = 'Half stack application development'
    const part1 = {
        name : 'Fundementals of React',
        exercises : 10
    }
    const part2 = {
        name : 'useing props to passing data',
        exercises : 7
    }
    const part3 = {
        name : 'state of a component',
        exercises : 14
    }
    return(
        <div>
            <Header name={course} />
            <Content part={part1.name} exercise={part1.exercises} />
            <Content part={part2.name} exercise={part2.exercises} />
            <Content part={part3.name} exercise={part3.exercises} />
            <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
        </div>
)
}
export default App