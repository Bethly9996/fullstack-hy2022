const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Bethly'
  const age  = 23;

  return  (
    <div>
      <h1>Greetings</h1>
      <Hello name='Dorcas' age={12 + 10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App;
