import React , { Component } from 'react';
import { Input } from 'antd';
import Bg from './img/subscribe-bg.jpg';
const { Search } = Input;

// import Mobile from './img/mobile-screen.png';

class Subscribe extends Component {
    state = {  }
    render() { 
        return ( 
          
            <div style={{ minHeight: 500, backgroundImage: 'url(' + Bg + ')', backgroundRepeat: "no-repeat", paddingTop: "150px" }}>
            <div style={{ maxWidth: "500px", height: "250px", backgroundColor: "#fff", paddingTop: "70px", margin: "0 auto", borderRadius: "10px", marginBottom: "100px" }}>
                <div style={{ width: "80%", margin: " 0 auto" }}>
                    <h1 style={{ textAlign: "center", color: " #5e88fc" }}>  Subscribe for More Features</h1>
                    <Search
                        placeholder="input search text"
                        border="2px solid #5e88fc"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </div>
            </div>
            </div>
            
            
         );
    }
}
 
export default Subscribe;