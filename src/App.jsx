import React from 'react'
import "./Components/Services/MainContent.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Our_service from './Components/Services/Our_service'
import SucessPage from './Components/SucessPage'
function App() {

  return (
    <BrowserRouter> 
       <Routes>
          <Route path="/Our_service" element={<Our_service/>} component={Our_service} />
          <Route path="/SucessPage" element={<SucessPage/>} component={SucessPage} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
