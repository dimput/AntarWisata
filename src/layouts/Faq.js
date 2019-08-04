
import React , { Component } from 'react';
import {Button ,Row, Col, Collapse, Icon} from 'antd';
const { Panel } = Collapse;
// import detailpng from './img/detail.png';
// import Mobile from './img/mobile-screen.png';

class Faq extends Component {
    state = {  }
    render() { 
        return ( 
          
            <div style={{ marginTop: "200px", marginBottom: "50px" }}>
            <div style={{ width: 270, margin: "0 auto", color: "black" }}>
                <hr />
            </div>
           
            <h3 style={{ fontWeight: "700", letterSpacing: "1px", color: "#000", textTransform: "uppercase", backgroundColor: "#fff", width: "180px", margin: "0 auto", marginTop: "-20px", textAlign: "center" }}>
                FAQ
            </h3>
            <div style={{ marginTop: "20px", marginBottom: "50px", fontSize: "30px", textAlign: "center" }}>
                        <Row>
                            Pertanyaan Mengenai Antar Wisata
          </Row>
                    </div>
        
            <div style={{ padding: "0 50px", paddingTop: "50px" }}>
            <Row>
            <Col span={20} offset={2} style={{ marginBottom: "150px" }}>
                <Col span={12}>
                    <Collapse accordion>
                        <Panel header="Cara Pemesan di Antar Wisata " key="1">
                            <p>Untuk pemesanan, kamu harus login dulu ke aplikasi, lalu pilih wisata tujuan yang ingin kamu datangi. checkout dan tunggu admin kami menghubungi mu.</p>
                        </Panel>
                        <Panel header="Batas waktu konfirmasi pemesanan" key="2">
                            <p>admin kami akan segera memproses pesanan kamu, di tunggu ya </p>
                        </Panel>
                        <Panel header="Kustom paket wisata" key="3">
                            <p>Untuk saat ini, kami baru menyediakan paket paket wisata yang tidak kalah menarik tentunya.</p>
                        </Panel>
                    </Collapse>
                </Col>
                <Col span={12}>
                    <Collapse accordion>
                        <Panel header="Pembatalan pemesanan" key="1">
                            <p> nah untuk pembatalan pemesanan, bisa langsung diskusi ke admin ya</p>
                        </Panel>
                        <Panel header="Bergabung menjadi investor rental" key="2">
                            <p> jika ingin mendaftarkan rentalan kamu, bisa langsung masuk ke website dan pilih datar, nanti cs kita akan survey ke tempatmu </p>
                        </Panel>
                        <Panel header=" Mendaftar sebagai pengguna baru" key="3">
                            <p>tinggal download aplikasi Antar Wisata di PlayStore lalu, mendatar dengan nomor hp atau email, dan login deh. </p>
                        </Panel>
                    </Collapse>
                </Col>
            </Col>
            </Row>
            </div>
            </div>
            
            
         );
    }
}
 
export default Faq;