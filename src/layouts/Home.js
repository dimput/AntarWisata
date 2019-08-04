import React, { Component } from 'react';
import { Icon, Button, Row, Col} from 'antd';
import Mobile from './img/mobile-screen.png';
// import MalioboroStreet from './img/malioboro.jpg';
import 'react-multi-carousel/lib/styles.css';
import Client from './Client';
import Header from './Header';
import About from './About';
import YukWisata from './YukWisata';
import Intro from './Intro';
import VisiMisi from './Visi-misi';
import Feature from './Feature';
import Aplikasi from './Aplikasi';
import DownloadApp from './DownloadApp'; 
import ContactUs from './ContactUs';
import Subscribe from './Subscribe';
import Faq from './Faq';
import Blog  from './Blog';
class Home extends Component {
    state = {}
    render() {
        return (
            <div tyle={{ backgroundColor: "#fff" }}>
                <Header />
                <About />
                <YukWisata />
                <Intro />
                <VisiMisi />
                <Feature />
                {/* <Aplikasi /> */}
                <Blog />
                <DownloadApp/>
                <Faq/>
                <Client />
                <Subscribe/>
                <ContactUs/>
             </div>
        );
    }
}

export default Home;