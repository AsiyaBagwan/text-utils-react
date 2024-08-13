
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';


function App() {
  const [mode,setmode]=useState('dark')
  const toggleMode=()=>
  {
if(mode==='light')
{
  setmode('dark')
}
else
{
  setmode('light')
}
  }
  return (
    <>
  


{ <Navbar  title ="TextUtils" mode={mode} toggleMode={toggleMode}/>}

<div className="container my-3">
<TextForm heading="Enter the text to analyse"/>
{/* <About/> */}
</div>



   </>
  );
}

export default App;
