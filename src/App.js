
import './App.css';
import React from 'react';
import FullName from "./profile/components/FullName";
import Header from "./profile/components/Header";
import Bio from "./profile/components/Bio";
import Profession from "./profile/components/Profession";



  function App() {
    const handleEvent = () => {
      alert(`${this.props.FullName}`);
    };
    return(
      <>
      <header id="home">
      <Header/>
      </header>
      <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
      <h1>Self-Profile </h1>
        <FullName firstName="Khouloud" lastName="Hamdouni">
        <p>Glad to know you</p>
        </FullName>
        <br/>
        <div style={{border:"black double",  marginTop:"20px",}} id="about">
        <Bio FullName="Khouloud" Age="28" Gender="Female" Interests="Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping"  />
        </div>
        <br/>
        <div id="profession"><Profession/></div>
       
      <div >
        <button onClick={() => alert('THis is khouloud Hamdouni Profil')}>Click me</button>
      </div>
        
        </body>
       </>
    );
  }
  export default App;