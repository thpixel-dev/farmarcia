import { useState } from 'react'
import './App.css'
import HomePage from './pages/farmacia';
 function App() {
  
  const [page, setPage] = useState('home'); 
 
   const renderPage = () => {
     switch (page) {
       case 'home':
         return <HomePage />;
       case 'about':
         return <AboutPage />;
       default:
         return <HomePage />;
     }
   };
 
   return (
     <div>
       <main>
         {renderPage()} {}
       </main>
     </div>
   );
 }
 
 export default App;
 

