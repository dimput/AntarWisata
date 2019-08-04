import React , { Component } from 'react';
import {Button ,Row, Col, Icon} from 'antd';
// import detailpng from './img/detail.png';
// import Mobile from './img/mobile-screen.png';

class Feature extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ minHeight: 570, marginBottom: "150px" }}>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ paddingLeft: "100px", paddingTop: "120px", paddingRight: "50px" }}>
                                <div style={{ fontSize: "18px", fontWeight: "700px" }}>
                                    Visi - Misi
                </div>
                                <div style={{ margin: "30px auto", fontSize: "40px" }}>
                                   Aplikasi Antar Wisata
                </div>
                                <div style={{ fontSize: "16px", fontWeight: "300px", lineHeight: "35px" }}>
                                Aplikasi wisata yang menemanimu berkunjung tanpa ribet, terjangkau dan pastinya terpercaya. Memberikan pengalaman 
                                beriwisata yang tak terlupakan selayaknya Yogyakarta.
                </div>
                                
                </Col>



                <Col md={12} style={{ paddingTop: "120px" }}>
                    <Row>
                        <Col span={24} style={{margin:"25px 0px"}}>
                            <Col span={8} >
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))" ,borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" , margin:"0px auto"}}>
                                    <Icon type="heart"  style={{color:"#5e88fc"}}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#8790AF",fontWeight:"bold"}}>Menciptakan Solusi</h2>
                                <p>Memberikan solusi berwisata yang nyaman dan terpercaya. Supaya para wisatawan dapat terbantu.</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px 0px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px", margin:"0px auto" }}>
                                <Icon type="team" style={{color:"#5e88fc"}} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#8790AF" , fontWeight:"bold"}}>Kualitas Berwisata yang Optimal</h2>
                                <p> Membantu wisatawan mencapai kualitas berwisata yang maksimal tanpa ribet, harga terjangkau dan modern.</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px 0px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px", margin:"0px auto" }}>
                                <Icon type="transaction" style={{color:"#5e88fc"}} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 style={{color:"#8790AF" , fontWeight:"bold"}}>Menciptakan Lapangan Pekerjaan</h2>
                                <p> Menciptakan lapangan pekerjaan dan bermanfaat bagi seluruh lapisan masyarakat.</p>
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