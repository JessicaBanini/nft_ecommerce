import React from 'react'
import './App.css';
import './Navbar.js';
import Navbar from './Navbar.js';
import Mainpage from './Mainpage.js';
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
import Quarnix from './images/Cyndor.png';
import Prickilies from './images/Prickilies.png';
import Chicken from './images/Chicken.png';
import Fox from './images/Fox.png';
import FuzzySlim from './images/FuzzySlim.png';
import Midnightsnack from './images/Midnightsnack.png';
import Footer from './Footer.js';
// import './images';


function App() {
  const images = [
    { name: "Dirk", src: Dirk, price: 139  },
    { name: "Furry Felix", src: FurryFelix, price: 99  },
    { name: "Lion", src: Lion, price: 36  },
    { name: "Thralia", src: Thralia, price: 29  },
    { name: "Alligator", src: Alligator, price: 36  },
    { name: "Duck", src: Duck, price: 49  },
    { name: "Monkey", src: Monkey, price: 29  },
    { name: "Garnox", src: Garnox, price: 99 },
    { name: "Code Red", src: CodeRed, price: 69  },
    { name: "Pink Panther", src: PinkPanther, price: 89 },
    { name: "Sour Blop", src: Sourblop, price: 99  },
    { name: "Pernox", src: Pernox, price: 199 },
    { name: "All Tickles", src: AllTickles, price: 78  },
    { name: "Skarleix", src: Skarleix, price: 109  },
    { name: "Bear", src: Bear, price: 59  },
    { name: "Nightmare Fuel", src: NightmareFuel, price: 28  },
    { name: "Yalk", src: Yalk, price: 199 },
    { name: "Panda", src: Panda, price: 79  },
    { name: "Tiger", src: Tiger, price: 49 },
    { name: "Cyndor", src: Cyndor, price: 39  },
    { name: "Rainbow Bryan", src: RainbowBryan, price: 13  },
    { name: "Cheetah", src: Cheetah, price: 55  },
    { name: "Vextral", src: Vextral, price: 87  },
    { name: "Gorilla", src: Gorilla, price: 23 },
    { name: "Quarnix", src: Quarnix, price: 40 },
    { name: "Prickilies", src: Prickilies, price: 12 },
    { name: "Chicken", src: Chicken, price: 99  },
    { name: "Fox", src: Fox, price: 150 },
    { name: "Fuzzy Slim", src: FuzzySlim, price: 280 },
    { name: "Midnight Snack", src: Midnightsnack, price: 250 },
    // { name: "CodeRed", src: CodeRed, price: 300 }
  ];
  return (
    <>

    <Navbar/>
    <Mainpage/>
    <div className="nft-container">

    {images.map((image, index) => (
        <Image key={index} name={image.name} src={image.src} price={image.price} 
         />
      ))}
      </div>
      <Footer/>
    </>
    
  )
}

export default App