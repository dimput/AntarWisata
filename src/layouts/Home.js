import React, { Component } from 'react';
import { Icon, Button, Row, Col} from 'antd';
import Mobile from './img/mobile-screen.png';
// import MalioboroStreet from './img/malioboro.jpg';
import 'react-multi-carousel/lib/styles.css';
import Client from './Client';
import Header from './Header';
import About from './About';
import Progress from './Progress';
import Progress2 from './Progress2';
import Progress3 from './Progress3';
import Feature from './Feature';
import Aplikasi from './Aplikasi';
import DownloadApp from './DownloadApp'; 
import ContactUs from './ContactUs';
import Subscribe from './Subscribe';
import Faq from './css/Faq';
class Home extends Component {
    state = {}
    render() {
        return (
            <div tyle={{ backgroundColor: "#fff" }}>
                <Header />
                <About />
                <Progress />
                <Progress2 />
                <Feature />
                <Client />
                <Aplikasi />
                <Progress3 />
                <DownloadApp/>
                <Faq/>
                <Subscribe/>
                <ContactUs/>
             </div>
        );
    }
}

export default Home;