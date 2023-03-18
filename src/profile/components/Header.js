import React, { Component } from 'react'
class  Header extends Component {
    render() { 
        const mystyle = {
        fontFamily: 'Roboto Condensed',textTransform: "uppercase",backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",borderRadius: "15px",borderStyle: "hidden",padding: "18px", textAlign: "center",width: "auto",
        position: "sticky",top:"0",zIndex: "1", 
        };


        return ( 
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">About</a></li>
            <li><a href="#contact">Contact</a></li>
            
          </ul>

            
            
        )
    }
}

export default Header;

