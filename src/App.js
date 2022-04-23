import react from "react";
import Header from './Header'
import Content from './Content'
import Total from './Total'
const App = () => {
    const course = 'Half stack application development'
    const part1 = 'Fundementals of React'
    const exercises1 = 10
    const part2 = 'useing props to passing data'
    const exercises2 = 7
    const part3 = 'state of a component'
    const exercises3 = 14 
    return(
        <div>
            <Header name={course} />
            <Content part={part1} exercise={exercises1} />
            <Content part={part2} exercise={exercises2} />
            <Content part={part3} exercise={exercises3} />
            <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
        </div>
)
}
export default App