import React , { Component } from 'react';
import {Button ,Row, Col, Icon} from 'antd';
import detailpng from './img/detail.png';
import Mobile from './img/mobile-screen.png';

class Feature extends Component {
    state = {  }
    render() { 
        return ( 
          
        <div style={{ backgroundColor: "#5e87fc", height: "835px", padding: "0 120px", color: "#fff", paddingTop: "120px" }}>   
            <div style={{ width: 250, margin: "0 auto" }}>
                <hr />
            </div>
            <h3 style={{ fontWeight: "700", letterSpacing: "1px", color: "#fff", textTransform: "uppercase", backgroundColor: "#5e87fc", width: "120px", margin: "0 auto", marginTop: "-20px", textAlign: "center" }}>
                Features
            </h3>
            <div style={{ marginTop: "20px", marginBottom: "50px", fontSize: "30px", textAlign: "center" }}>
                <Row>
                    Powerful Features As Always
            </Row>
            </div>
            <Row style={{ marginTop: "100px" }}>
                <Col md={8}>
                    <Row>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" }}>
                                    <Icon type="rocket" style={{color:"#5e88fc"}}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#fff",fontWeight:"bold"}}>Fast & Powerful </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" }}>
                                    <Icon type="paper-clip" style={{color:"#5e88fc"}} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#fff" , fontWeight:"bold"}}>Fast & Powerful </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" }}>
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
                <Col xs={0} md={8} style={{ textAlign: "center" }}>
                    <Row style={{ width: 300, margin: "0 auto" }}>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            <div style={{ width: 300 }}>
                                <div style={{
                                    backgroundImage: 'url(' + Mobile + ')',
                                    backgroundRepeat: "no-repeat",
                                    minHeight: 610,
                                    backgroundSize: 300,
                                    paddingTop: 80,
                                    paddingLeft: 20,
                                    filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))"
                                }}>
                                    <div style={{ backgroundColor: "green", width: 260, height: 450, overflow: "hidden" }}>
                                        <img alt="" src={detailpng} style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={8} >
                    <Row>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={12} >
                                <h2 style={{color:"#fff", fontWeight:"bold"}}>Fast & Powerful </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Col>
                            <Col span={8} style={{float:"right"}}> 
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%" , textAlign: "center", fontSize: "25px", paddingTop: "17px"}}>
                                    <Icon type="bell" style={{color:"#5e88fc"}}/>
                                </div>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8} style={{float:"right"}}>
                                <div style={{ width: "70px", height: "70px", backgroundColor:"#fff", borderRadius: "100%" , textAlign: "center", fontSize: "25px", paddingTop: "17px"}}>
                                    <Icon type="laptop" style={{color:"#5e88fc"}}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#fff", fontWeight:"bold"}}>Fast & Powerful </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}> 
                            <Col span={8} style={{float:"right"}}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" }}>
                                    <Icon type="tool" style={{color:"#5e88fc"}}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#fff", fontWeight:"bold"}}>Fast & Powerful </h2>
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


