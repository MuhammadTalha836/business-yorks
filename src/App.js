
import React,{ useEffect , useState }  from 'react';
import AOS from 'aos';
import HomeSection from './New/components/HomeSection';
import NavBar from './New/components/NavBar';
import Gallery from './New/components/Gallery';
import Utility from './New/components/Utility';
import Department from './New/components/Department';
import ContactUS from './New/components/ContactUS';
import Cards from './New/components/Cards';
import HeaderName from './New/components/HeaderName';
function App() {


  //for page animations 
  const [windowDim,SetwindowDim] = useState({width: window.innerWidth, Height: window.innerHeight});

  const detectSize =()=>{
    SetwindowDim({width: window.innerWidth, Height: window.innerHeight});
  }
  
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.addEventListener('resize', detectSize)
    };
  }, [windowDim]);


  useEffect(() => {
    AOS.init({
      duration : 2000
    }); 
  },);

 

  return (
      <div>
      <NavBar/>
      <HomeSection/>
      <Utility/>
      <Cards/>
      <HeaderName/>
      <Department/>
      <Gallery/>
      <ContactUS/>
      </div>
  );
}

export default App;