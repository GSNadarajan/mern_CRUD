import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './Users';
import CreateUser from './CreateUser';
import Update from './Update';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Users />}></Route>
       <Route path='/create' element={<CreateUser />}></Route>
       <Route path='/update' element={<Update />}></Route>
     </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
