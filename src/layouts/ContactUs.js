
import React , { Component } from 'react';
import {Button ,Row, Col, Icon} from 'antd';
// import detailpng from './img/detail.png';
// import Mobile from './img/mobile-screen.png';

class ContactUs extends Component {
    state = {  }
    render() { 
        return ( 
          
            <div style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div style={{ width: 270, margin: "0 auto", color: "black" }}>
                <hr />
            </div>
            <h3 style={{ fontWeight: "700", letterSpacing: "1px", color: "#000", textTransform: "uppercase", backgroundColor: "#fff", width: "180px", margin: "0 auto", marginTop: "-20px", textAlign: "center" }}>
                CONTACT US
            </h3>
            <div style={{ marginTop: "20px", marginBottom: "50px", fontSize: "30px", textAlign: "center" }}>
                <Row>
                    Find Us By Bellow Details
            </Row>
            </div>
            
            <Row>
                {/* <Col span={20} offset={2} style={{ marginBottom: "150px" }}> */}
                <Col md={8}>
                    <div style={{ width: "75px", paddingTop: "3px", margin: "0px auto", height: "75px", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", borderRadius: " 100px", textAlign: "center", border: "2px solid #fff" }}>
                        <div style={{ border: "2px solid #fff", width: "65px", height: "65px", margin: "0px auto", borderRadius: "100%" }}>
                            <Icon type="home" style={{ fontSize: "20px", paddingTop: "22px", color: "white" }} />
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: " 30px", padding: "0 20px" }}>
                        <p>Jl. Amerta VI, Jombor Lor, <br /> Sinduadi, Kec. Mlati, Kabupaten Sleman, Yogyakarta</p>
                    </div>
                </Col>
                <Col md={8}>
                    <div style={{ width: "75px", paddingTop: "3px", margin: "0px auto", height: "75px", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", borderRadius: " 100px", textAlign: "center", border: "2px solid #fff" }}>
                        <div style={{ border: "2px solid #fff", width: "65px", height: "65px", margin: "0px auto", borderRadius: "100%" }}>
                            <Icon type="phone" style={{ fontSize: "20px", paddingTop: "22px", color: "white" }} />
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: " 30px" }}>
                        <p>085274262088 <br /> 083821174711</p>
                    </div>
                </Col>
                <Col md={8}>
                    <div style={{ width: "75px", paddingTop: "3px", margin: "0px auto", height: "75px", backgroundImage: "linear-gradient(45deg,rgba(72,44,191,1) 0%,rgba(106,198,240,1) 100%)", textAlign: "center", borderRadius: " 100px", border: "2px solid #fff" }}>
                        <div style={{ border: "2px solid #fff", width: "65px", height: "65px", margin: "0px auto", borderRadius: "100%" }}>
                            <Icon type="mail" style={{ fontSize: "20px", paddingTop: "22px", color: "white" }} />
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: " 30px" }}>
                        <p>wisata.antar@gmail.com <br /> antarajayk@gmail.com</p>
                    </div>
                </Col>
                {/* </Col>  */}
            </Row>
            </div>
             
            
         );
    }
}
 
export default ContactUs;