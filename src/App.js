import logo from './logo.svg';
import { Blog, Features, whatGTP3, Possibility, Footer, Header  } from "./containers";
import { Article, Brand, CTA, Feature, Navbar } from "./components";
import './App.css'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
function App() {
  return (
    <div className='App'>
     <div className='gradient__bg'>
     <Navbar />
     <Header />
     </div>
     <Brand />
     <WhatGPT3 />
     <Features />
     <Possibility/>
     <CTA />
     <Blog />
    <Footer />
   
    </div>
  );
}

export default App;
