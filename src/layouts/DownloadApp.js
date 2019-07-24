import React , { Component } from 'react';
import {Button ,Row, Col, Icon} from 'antd';
import PlayStoreIcon from './img/hehe.png';
import splashpng from './img/splash.png';
import detailpng from './img/detail.png';
import Mobile from './img/mobile-screen.png';
import './css/downloadapp.css';

class downloadApp extends Component {
    state = {  }
    render() { 
        return ( 
          
            <div style={{ backgroundColor: "#f5f6fe", minHeight: 570, backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", color: "white",paddingBottom:"50px" }}>
                <Row>
                    <Col xs={0} sm={4} md={6} lg={8} xl={10}
                        style={{
                            height: "570px"
                        }}>
                        <div style={{ height: "100%", width: "100%" }}>
                        </div>
                        <Row>
                            <Col xs={0} sm={4} md={6} lg={8} xl={24}>
                                <div style={{ float: "right", width: 400 }}>
                                    <div style={{
                                        backgroundImage: 'url(' + Mobile + ')',
                                        backgroundRepeat: "no-repeat",
                                        minHeight: 800,
                                        paddingTop: 80,
                                        paddingLeft: 25,
                                        marginTop: "-650px",
                                        filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))"
                                    }}>
                                        <div style={{ backgroundColor: "green", width: 323, height: 570, overflow: "hidden" }}>
                                            <img alt="" src={splashpng} style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={8} xl={12} className="download">
                        <div style={{ margin: "30px auto", fontSize: "40px" }}>
                            Download The App
                </div>
                        <div style={{ fontSize: "16px", fontWeight: "300px", lineHeight: "35px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.
                </div>
                        <div style={{ marginTop: "50px" }}>
                            <Button size='large' style={{ textTransform: "uppercase", display: "absolute", borderRadius: "10px", letterSpacing: "2px", padding: "20px 40px", height: "auto", backgroundColor: "#fff", color: "rgba(72,44,191,1)", border: "none", fontWeight: "bold", fontSize: "14px" }}>
                                <img src={PlayStoreIcon} width="30" style={{ marginRight: "15px" }} alt="" />
                                play store
                            </Button>
                        </div>
                    </Col>
                </Row>
                </div>

         );
    }
}
 
export default downloadApp;