const Part = ({ name, exercises }) => <div>{name} {exercises}</div>
const Header = ({ text }) => <h2>{text}</h2>

const Sum = ({ parts }) => {
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div><strong>total of {sum} exercise</strong></div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) =>
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
      )}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Sum parts={course.parts} />
    </div>
  )
}

export default Course