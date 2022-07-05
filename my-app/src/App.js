import logo from './logo.svg';
import React,{Suspense} from 'react';
import './App.css';
import Navigate from './Navigate';
//import Header from './Component/Header/Header'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
//const Header = React.lazy(()=>import("./Dashbord/Header"))
const Header = React.lazy(()=>import("./Component/Header/Header"))


  


function App() {
  const  npo = localStorage.getItem("msg");
  var obj = JSON.parse(npo);
    console.log('ddd', obj)
  return (
    <div className="App">
      <Suspense  fallback={<ReactLoading type='spin' color='black' height={25} width={37}/>
      }>
     
       <ToastContainer/>
   
      
 {   obj?<Header/>:<Navigate/>
  
 }
 </Suspense>
    </div>
    
  );
}

export default App;










