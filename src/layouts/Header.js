

import React , { Component } from 'react';
import './css/header.css';
import { Button, Row , Col } from 'antd';
import homepng from './img/home.png';
import Mobile from './img/mobile-screen.png';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="isi" style={{ fontSize: "50px", backgroundColor: "black", height: 800, backgroundImage: "url('http://borobudurpark.com/wp-content/uploads/2017/02/borobudur1-1024x683.jpg')", backgroundSize: "cover" }}>
                <div style={{ width: "100%", height: "100%", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", opacity: 0.8 }}>
                </div>
                <div style={{ position: "absolute", zIndex: "2", top: "150px", width: "100%" }}>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={0} xl={10}>
                            <div style={{ float: "right", width: 400 }}>
                                <div style={{
                                    backgroundImage: 'url(' + Mobile + ')',
                                    backgroundRepeat: "no-repeat",
                                    minHeight: 800,
                                    paddingTop: 80,
                                    paddingLeft: 25,
                                    filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))"
                                }}>
                                    <div style={{ backgroundColor: "green", width: 323, height: 570, overflow: "hidden" }}>
                                        <img alt="" src={homepng} style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={20} md={20} lg={20} xl={12}>
                            <div style={{ color: "#FFF", marginLeft: 50 }} className="content-header">
                                <div className="title-header">
                                    Dapatkan Pengalaman Wisata terbaikmu dengan AntarWisata
                                </div>
                                <div style={{ fontSize: "18px", marginTop: "35px" }}>
                                    Temukan surga surga tersembunyi yang tersebar di Daerah Istimewa Yogyakarta. Buatlah pengalaman baru anda di tempat yang belum pernah anda kunjungi. Mulai perjalanan anda sekarang!.
                                </div>
                                <Button shape="round" icon="download" size="large" style={{ fontWeight: 700, color: "blue", textTransform: "uppercase", letterSpacing: "3px", fontSize: "14px" }}>
                                    Download App
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                </div >

         );
    }
}
 
export default Header;