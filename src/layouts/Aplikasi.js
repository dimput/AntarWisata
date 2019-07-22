import React, { Component } from 'react';
import { Button, Row, Col} from 'antd';
// import home from './img/home1.jpeg';
// import home2 from './img/home2.jpeg';
// import home3 from './img/home3.jpeg';
// import Carousel from 'react-multi-carousel';
import Mobile from './img/mobile-screen.png';

class Feature extends Component {
    state = {}
    render() {
        return (

            <div style={{ backgroundColor: "#5e87fc", minHeight: 570, paddingTop: "100px", paddingBottom: "50px", color: "white" }}>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={11}
                        style={{
                            color: "white",
                            height: "570px"
                        }}>
                        <div style={{ height: "100%", width: "100%", opacity: 0.8 }}>
                        </div>
                        <Row>
                            <Col xs={2} sm={4} md={6} lg={8} xl={24}>
                                <div style={{ float: "right", width: 250, marginTop: "70px" }}>
                                    <div style={{
                                        backgroundImage: 'url(' + Mobile + ')',
                                        backgroundRepeat: "no-repeat",
                                        minHeight: 510,
                                        paddingTop: 60,
                                        paddingRight: 20,
                                        backgroundSize: 250,
                                        marginTop: "-650px",
                                        filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))"
                                    }}>
                                        <div style={{ width: 1250, height: 380, float: "right" }}>

                                           


                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={13} style={{ paddingLeft: "50px", paddingTop: "120px", paddingRight: "50px" }}>
                        <div style={{ fontSize: "18px", fontWeight: "700px" }}>
                            OUR PROGRESS
        </div>
                        <div style={{ margin: "30px auto", fontSize: "40px" }}>
                            Grat Application Ever
        </div>
                        <div style={{ fontSize: "16px", fontWeight: "300px", lineHeight: "35px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.
        </div>
                        <div style={{ marginTop: "50px" }}>
                            <Button size='large' style={{ textTransform: "uppercase", display: "absolute", borderRadius: "50px", letterSpacing: "2px", padding: "20px 40px", height: "auto", backgroundColor: "rgba(72,44,191,1)", color: "#fff", border: "none", fontWeight: "bold", fontSize: "14px" }}>
                                Learn More
        </Button>
                        </div>
                    </Col>
                </Row>
            </div>


        );
    }
}

export default Feature;