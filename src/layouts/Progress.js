import React , { Component } from 'react';
import {Button ,Row, Col} from 'antd';
import wisatapng from './img/Search.png';
import MalioboroStreet from './img/malioboro.jpg';
import Mobile from './img/mobile-screen.png';


class Progress extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ backgroundColor: "#f5f6fe", minHeight: 570 }}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={12} xl={11} style={{ paddingLeft: "100px", paddingTop: "120px", paddingRight: "50px" }}>
                            <div style={{ fontSize: "18px", fontWeight: "700px" }}>
                                YUK WISATA !
            </div>
                            <div style={{ margin: "30px auto", fontSize: "40px" }}>
                                Berwisata Dengan Kami 
            </div>
                            <div style={{ fontSize: "16px", fontWeight: "300px", lineHeight: "35px" }}>
                                Antar Wisata memudahkanmu untuk mengisi liburan di Yogyakarta, kunjungi berbagai destinasi wisata yang kamu inginkan tanpa memikirkan transportasi dan biaya yang mahal.                   
            </div>
                            <div style={{ marginTop: "50px" }}>
                                <Button size='large' style={{ textTransform: "uppercase", display: "absolute", borderRadius: "50px", letterSpacing: "2px", padding: "20px 40px", height: "auto", backgroundColor: "rgba(72,44,191,1)", color: "#fff", border: "none", fontWeight: "bold", fontSize: "14px" }}>
                                    Learn More
              </Button>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={8} xl={13}
                            style={{
                                backgroundColor: "red",
                                height: "570px",
                                backgroundImage: "url(" + MalioboroStreet + ")",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}>
                            <div style={{ height: "100%", width: "100%", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", opacity: 0.8 }}>
                            </div>
                            <Row>
                                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                    <div style={{ width: 400, marginLeft: "70px" }}>
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
                                                <img alt="" src={wisatapng} style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            
         );
    }
}
 
export default Progress;