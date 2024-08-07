import { Router,Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Router>
        <Route path="/" element={<Layout />}></Route>
      </Router>
    </>
  )
}

export default App
