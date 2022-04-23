import react from "react";
import Header from './Header'

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
            <p>{part1}  {exercises1}</p>
            <p>{part2}  {exercises2}</p>
            <p>{part3}  {exercises3}</p>
            <p> the number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
)
}
export default App