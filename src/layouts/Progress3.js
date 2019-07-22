import React , { Component } from 'react';
import {Button ,Row, Col, Icon} from 'antd';
import detailpng from './img/detail.png';
import Mobile from './img/mobile-screen.png';

class Feature extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ minHeight: 570, marginBottom: "150px" }}>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ paddingLeft: "100px", paddingTop: "120px", paddingRight: "50px" }}>
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



                <Col md={12} style={{ paddingTop: "120px" }}>
                    <Row>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8} >
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))" ,borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" , margin:"0px auto"}}>
                                    <Icon type="rocket" style={{color:"#5e88fc"}}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#8790AF",fontWeight:"bold"}}>Fast & Powerful </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px", margin:"0px auto" }}>
                                    <Icon type="paper-clip" style={{color:"#5e88fc"}} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#8790AF" , fontWeight:"bold"}}>Fast & Powerful </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))" ,  borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px"  , margin:"0px auto"  }}>
                                    <Icon type="cloud-upload" style={{color:"#5e88fc"}} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#fff",fontWeight:"bold"}}>Fast & Powerful </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Col>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </div>
            
       
         );
    }
}
 
export default Feature;