import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilteredImages from './FilteredImages';
import './App.css';
import './Navbar.js';
import Success from './Success.js';
import Navbar from './Navbar.js';
import Mainpage from './Mainpage.js';
import License from './License.js';
import Image from './Image.js';
import Dirk from './images/Dirk.png';
import FurryFelix from './images/FurryFelix.png';
import Lion from './images/Lion.png';
import Thralia from './images/Thralia.png';
import Alligator from './images/Alligator.png';
import Duck from './images/Duck.png';
import Monkey from './images/Monkey.png';
import Garnox from './images/Garnox.png';
import CodeRed from './images/CodeRed.png';
import PinkPanther from './images/PinkPanther.png';
import Sourblop from './images/Sourblop.png';
import Pernox from './images/Pernox.png';
import AllTickles from './images/All Tickles.png';
import Skarleix from './images/Skairleix.png';
import Bear from './images/Bear.png';
import NightmareFuel from './images/NightmareFuel.png';
import Yalk from './images/Yalk.png';
import Panda from './images/Panda.png';
import Tiger from './images/Tiger.png';
import Cyndor from './images/Cyndor.png';
import RainbowBryan from './images/RainbowBryan.png';
import Cheetah from './images/Cheetah.png';
import Vextral from './images/Vextral.png';
import Gorilla from './images/Gorilla.png';
import Quarnix from './images/Quarnix.png';
import Prickilies from './images/Prickilies.png';
import Chicken from './images/Chicken.png';
import Fox from './images/Fox.png';
import FuzzySlim from './images/FuzzySlim.png';
import Midnightsnack from './images/Midnightsnack.png';
import Footer from './Footer.js';
import { type } from '@testing-library/user-event/dist/type/index.js';
import SignIn from './SignIn.js';
import Membership from './Membership.js';



function App() {
  const images = [
    { id:1,
      name: "Dirk", 
      src: Dirk, 
      price: 139,
      type: 'alien',
      description:''  },

    { id:2,
      name: "Furry Felix", 
      src: FurryFelix, 
      price: 99 ,
      type:'monster'
     },

    { id:3,
      name: "Lion", 
      src: Lion, 
      price: 36,
      type:'animal'  },
    { 
      id:4,
      name: "Thralia", 
      src: Thralia, 
      price: 29,
      type: 'alien'  },

    { id:5,
      name: "Alligator", 
      src: Alligator, 
      price: 36 ,
      type: 'animal' },

    { id:6,
      name: "Duck", 
      src: Duck, 
      price: 49,
      type: 'animal'  },

    { id:7,
      name: "Monkey", 
      src: Monkey, 
      price: 29 ,
      type: 'animal' },

    { id:8,
      name: "Garnox", 
      src: Garnox, 
      price: 99,
      type: 'alien'  },

    { id:9,
      name: "Code Red", 
      src: CodeRed, 
      price: 69,
      type: 'alien'  },

    { id:10,
      name: "Pink Panther", 
      src: PinkPanther, 
      price: 89,
      type: 'monster'  },

    { id:11,
      name: "Sour Blop", 
      src: Sourblop, 
      price: 99,
      type: 'monster'  },

    { id:12,
      name: "Pernox", 
      src: Pernox, 
      price: 199,
      type: 'alien'  },

    { id:13,
      name: "All Tickles", 
      src: AllTickles, 
      price: 78,
      type: 'monster'  },

    { id:14,
      name: "Skarleix", 
      src: Skarleix, 
      price: 109 ,
      type: 'alien'  },

    { id:15,
      name: "Bear", 
      src: Bear, 
      price: 59,
      type:'animal'  },

    { id:16,
      name: "Nightmare Fuel", 
      src: NightmareFuel, 
      price: 28,
      type: 'monster'  },

    { id:17,
      name: "Yalk", 
      src: Yalk, 
      price: 199,
      type: 'animal'  },

    { id:18,
      name: "Panda", 
      src: Panda, 
      price: 79,
      type:'animal' },

    { id:19,
      name: "Tiger", 
      src: Tiger, 
      price: 49,
      type:'animal' },

    { id:20,
      name: "Cyndor", 
      src: Cyndor, 
      price: 39,
      type:'alien'  },

    { id:21,
      name: "Rainbow Bryan", 
      src: RainbowBryan, 
      price: 13,
      type:'monster'  },

    { id:22,
      name: "Cheetah", 
      src: Cheetah, 
      price: 55,
      type:'animal'  },

    { id:23,
      name: "Vextral", 
      src: Vextral, 
      price: 87,
      type:'alien'  },

    { id:24,
      name: "Gorilla", 
      src: Gorilla, 
      price: 23,
      type:'animal'  },

    { id:25,
      name: "Quarnix", 
      src: Quarnix, 
      price: 40,
      type: 'alien' },

    { id:26,
      name: "Prickilies", 
      src: Prickilies, 
      price: 12,
      type: 'monster' },

    { id:27,
      name: "Chicken", 
      src: Chicken, 
      price: 99,
      type: 'animal' },

    { id:28,
      name: "Fox", 
      src: Fox, 
      price: 150,
      type: 'animal' },

    { id:29,
      name: "Fuzzy Slim", 
      src: FuzzySlim, 
      price: 280,
      type: 'monster' },

    { id:30,
      name: "Midnight Snack", 
      src: Midnightsnack, 
      price: 250,
      type: 'monster' },
    
  ];
  return (
    <>

    <Navbar />
    {/* <Mainpage/> */}
      <Routes>
        
      <Route path="/" element={<FilteredImages images={images} />} />
      <Route path="/license" element={<License/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/membership" element={<Membership/>} />



        <Route path="/images/:type" element={<FilteredImages images={images} />} />
      </Routes>
      <Footer />
    </>
      
    
    
    
  )
}

export default App