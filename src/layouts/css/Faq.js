
import React , { Component } from 'react';
import {Button ,Row, Col, Collapse, Icon} from 'antd';
const { Panel } = Collapse;
// import detailpng from './img/detail.png';
// import Mobile from './img/mobile-screen.png';

class Faq extends Component {
    state = {  }
    render() { 
        return ( 
          
            <div style={{ marginTop: "200px", marginBottom: "100px" }}>
            <div style={{ width: 270, margin: "0 auto", color: "black" }}>
                <hr />
            </div>
            <h3 style={{ fontWeight: "700", letterSpacing: "1px", color: "#000", textTransform: "uppercase", backgroundColor: "#fff", width: "180px", margin: "0 auto", marginTop: "-20px", textAlign: "center" }}>
                FAQ
            </h3>
            <div style={{ marginTop: "20px", marginBottom: "50px", fontSize: "30px", textAlign: "center" }}>
                <Row>
                    Frequently Asked Questions
            </Row>
            </div>
            <Col span={20} offset={2} style={{ marginBottom: "150px" }}>
                <Col span={12}>
                    <Collapse accordion>
                        <Panel header="Bagaimana cara mendaftar menjadi driver Antar Wisata?" key="1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </Panel>
                        <Panel header="Cara menggunakan paket wisata di Antar Wisata" key="2">
                            <p>Pertanyaan pertama</p>
                        </Panel>
                        <Panel header="Pergi wisata dengan antar wisata dapat diskon ga?" key="3">
                            <p>Pertanyaan pertama</p>
                        </Panel>
                    </Collapse>
                </Col>
                <Col span={12}>
                    <Collapse accordion>
                        <Panel header="Cara jadi mitra gampang ga si?" key="1">
                            <p>Pertanyaan pertama</p>
                        </Panel>
                        <Panel header="Kenapa Harus berwisata dengan AntarWisata?" key="2">
                            <p>Pertanyaan pertama</p>
                        </Panel>
                        <Panel header="Trip bareng temen seharian bisa ga ya?" key="3">
                            <p>Pertanyaan pertama</p>
                        </Panel>
                    </Collapse>
                </Col>
            </Col>
            <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            
            
         );
    }
}
 
export default Faq;