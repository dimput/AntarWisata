import React , { Component } from 'react';
import {Row, Col, Icon} from 'antd';
import detailpng from './img/detail.png';
import Mobile from './img/mobile-screen.png';
import './css/feature.css';

class Feature extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="feature" style={{ backgroundColor: "#5e87fc", color: "#fff"}}>   
            <div style={{ width: 250, margin: "0 auto" }}>
                <hr />
            </div>
            <h3 style={{ fontWeight: "700", letterSpacing: "1px", color: "#fff", textTransform: "uppercase", backgroundColor: "#5e87fc", width: "120px", margin: "0 auto", marginTop: "-20px", textAlign: "center" }}>
                FITUR
            </h3>
            <div style={{ marginTop: "20px", marginBottom: "50px", fontSize: "30px", textAlign: "center" }}>
                <Row>
                    Keunggulan Antar Wisata
            </Row>
            </div>
            <Row style={{ marginTop: "100px" }}>
                <Col md={12} lg={12} xl={8}>
                    <Row>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" }}>
                                    <Icon type="rocket" style={{color:"#5e88fc"}}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2  className="title-feature"style={{color:"#fff",fontWeight:"bold"}}>Kemudahan Berwisata</h2>
                                <p>Pemesanan dilakukan dengan menggunakan aplikasi</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" }}>
                                    <Icon type="paper-clip" style={{color:"#5e88fc"}} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2  className="title-feature"style={{color:"#fff" , fontWeight:"bold"}}>Aman dan Terpercaya </h2>
                                <p>Driver dan kendaraan yang terpilih telah lolos uji kelayakan</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={8}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" }}>
                                    <Icon type="cloud-upload" style={{color:"#5e88fc"}} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2  className="title-feature"style={{color:"#fff",fontWeight:"bold"}}>Mudah Diakses </h2>
                                <p>Pemesan dapat dilakukan dimana saja dan kapan saja </p>
                            </Col>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} md={0} lg={0} xl={8} style={{ textAlign: "center" }}>
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
                <Col md={12} lg={12} xl={8} >
                    <Row>
                        <Col span={24} style={{margin:"25px"}}>
                            <Col span={12} >
                                <h2  className="title-feature"style={{color:"#fff", fontWeight:"bold"}}> Harga Terjangkau  </h2>
                                <p>Penawaran paket yang menarik, pas untuk menghemat pengeluaran 
	selama berwisata.</p>
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
                                <h2 className="title-feature" style={{color:"#fff", fontWeight:"bold"}}>Info Wisata UpToDate </h2>
                                <p>Tersedia informasi lengkap destinasi wisata terbaru dan terpercaya</p>
                            </Col>
                        </Col>
                        <Col span={24} style={{margin:"25px"}}> 
                            <Col span={8} style={{float:"right"}}>
                                <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "100%", textAlign: "center", fontSize: "25px", paddingTop: "17px" }}>
                                    <Icon type="tool" style={{color:"#5e88fc"}}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <h2 className="title-feature" style={{color:"#fff", fontWeight:"bold"}}> Paket Hemat Wisata</h2>
                                <p>Terdapat rekomendasi wisata dalam paket dengan harga yang menarik</p>
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


