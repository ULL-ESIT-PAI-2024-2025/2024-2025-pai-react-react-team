
import './App.css'
import ListComponent from './list_component_with_props'

function App() {

  return (
    <>
      <ListComponent title="My List" items={['Item 1', 'Item 2', 'Item 3']} />
      <ListComponent title="Fruits" items={['Apple', 'Orange', 'Strawberry']} />
    </>
  )
}

export default App
