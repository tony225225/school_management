import Home from './Home';
import About from './About';
import {useNavigate,Route,Routes} from 'react-router-dom'
import Login from './Login';
import Banner from './Banner';
import { useState } from 'react';
import Register from './Register';
import Bus from './Bus';
import Busservice from './Busservice';
import Libary from './Libary';
import Canteen from './Canteen';
import Contact from './Contact';
import Adminhome from './Admin/Adminhome';
import AdminLibrary from './Admin/AdminLibrary';

function App() {
  const navigate = useNavigate()
  const [id,setId] = useState("");
  const aboutto=()=>{
    navigate('/About')
  }
  const logon=()=>{
    navigate('/Login')
  }
  const hto=()=>{
    navigate('/')
  }
  const hme=()=>{
    navigate('/')
    
  }
  const nw=(uid)=>{
     setId(uid)
    navigate('/Banner')
    
  }
  const libra=()=>{
    navigate('/Libary')
  }
  const sgnout=()=>{
    navigate('/')
  }
  const goto=()=>{
    navigate('/Register')
  }
  const busto=()=>{
    navigate('/Bus')
  }
  const busbook=()=>{
    navigate('/Booking')
  }
  const ex=()=>{
    navigate('/AdminHome')
  }
  const ct=()=>{
    navigate('/Canteen')
  }
  const ctc=()=>{
navigate('/Contact')
  }
  const adlib=()=>{
    navigate('/AdminLibrary')
  }
  console.log(id)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home  att={aboutto}   logininto ={logon} hometo={hto} contactto={ctc}/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login  hometo={hto} att={aboutto} homeinto={hme} lg={nw} ad={ex}/>}/>
        <Route path='/Banner' element={<Banner uid={id} lb={libra} signout={sgnout} profile={goto} rt={busto} canto={ct}/>}/>
        <Route path='/Register' element={<Register uid={id}/>}/>
        <Route path='/Bus' element={<Bus serviceto={busbook} uid={id}/>}/>
        <Route path='/Booking' element={<Busservice/>}/>
        <Route path='/Libary' element={<Libary/>}/>
        <Route path='/Canteen' element={<Canteen uid={id}/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='/AdminHome' element={<Adminhome libto={adlib}/>}/>
        <Route path='/AdminLibrary' element={<AdminLibrary/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
