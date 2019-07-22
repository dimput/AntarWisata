import React , { Component } from 'react';
import {Button,Row, Col} from 'antd';
import MalioboroStreet from './img/malioboro.jpg';
import './css/progress2.css';

class Progress2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ minHeight: 570, marginBottom: "100px",marginTop:"250px" }}>
            <Row>
                <Col xs={0} sm={0} md={10} lg={12} xl={12}
                    style={{
                        backgroundColor: "red",
                        height: "570px",
                        backgroundImage: "url(" + MalioboroStreet + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                    <div style={{ height: "100%", width: "100%", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", opacity: 0.8 }}>
                    </div>
                </Col>
                <Col className="progress2" xs={24} sm={24} md={14} lg={12} xl={11} style={{ paddingLeft: "100px", paddingRight: "50px" }}>
                    <div style={{ fontSize: "18px", fontWeight: "700px" }}>
                        OUR PROGRESS
            </div>
                    <div style={{ margin: "30px auto", fontSize: "40px" }}>
                        Antar Wisata
            </div>
                    <div style={{ fontSize: "16px", fontWeight: "300px", lineHeight: "35px" }}>
                        Dibuat oleh anak magang yang masi banyak perlu untuk belajar dan banyak kekurangan disana sini. Menghasilkan suatu dedikasi yaitu Aplikasi Antar Wisata. yang di buat untuk memudahkan wisatawan berkeliling Jogja.
            </div>
                    <div style={{ marginTop: "50px" }}>
                        <Button size='large' style={{ textTransform: "uppercase", display: "absolute", borderRadius: "50px", letterSpacing: "2px", padding: "20px 40px", height: "auto", backgroundColor: "rgba(72,44,191,1)", color: "#fff", border: "none", fontWeight: "bold", fontSize: "14px" }}>
                            Learn More.
            </Button>
                    </div>
                </Col>
            </Row>
            </div>
            
         );
    }
}
 
export default Progress2;