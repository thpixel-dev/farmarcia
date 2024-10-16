import { useState } from 'react'
import './App.css'
import Farmacia from './pages/farmacia';
 function App() {
  
  const [page, setPage] = useState('home'); 
 
   const renderPage = (Home) => {
     switch (page) {
       case 'home':
         return <Farmacia />
     }
   }
}

 export default App;
 