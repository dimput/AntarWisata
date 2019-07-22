import React, { Component } from 'react';
import { Icon, Button, Row, Col, Collapse, Input } from 'antd';
import Mobile from './img/mobile-screen.png';
// import MalioboroStreet from './img/malioboro.jpg';
import PlayStoreIcon from './img/hehe.png';
import splashpng from './img/splash.png';
import 'react-multi-carousel/lib/styles.css';
import Bg from './img/subscribe-bg.jpg';
import Client from './Client';
import Header from './Header';
import About from './About';
import Progress from './Progress';
import Progress2 from './Progress2';
import Progress3 from './Progress3';
import Feature from './Feature';
import Aplikasi from './Aplikasi';
const { Panel } = Collapse;
const { Search } = Input;

class Home extends Component {
    state = {}
    render() {
        return (
            <div tyle={{ backgroundColor: "#fff" }}>           
      <Header/>
      <About/>
      <Progress/>
      <Progress2/>
      <Feature/>
      <Client/>
      <Aplikasi/>
      <Progress3/>
                <div style={{ backgroundColor: "#f5f6fe", minHeight: 570, backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", color: "white" }}>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}
                            style={{
                                height: "570px"
                            }}>
                            <div style={{ height: "100%", width: "100%" }}>
                            </div>
                            <Row>
                                <Col xs={2} sm={4} md={6} lg={8} xl={24}>
                                    <div style={{ float: "right", width: 400 }}>
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
                                                <img alt="" src={splashpng} style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12} style={{ paddingLeft: "100px", paddingTop: "120px", paddingRight: "50px" }}>
                            <div style={{ margin: "30px auto", fontSize: "40px" }}>
                                Download The App
            </div>
                            <div style={{ fontSize: "16px", fontWeight: "300px", lineHeight: "35px" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.
            </div>
                            <div style={{ marginTop: "50px" }}>
                                <Button size='large' style={{ textTransform: "uppercase", display: "absolute", borderRadius: "10px", letterSpacing: "2px", padding: "20px 40px", height: "auto", backgroundColor: "#fff", color: "rgba(72,44,191,1)", border: "none", fontWeight: "bold", fontSize: "14px" }}>
                                    <img src={PlayStoreIcon} width="30" style={{ marginRight: "15px" }} alt="" />
                                    play store
              </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
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
                <div style={{ minHeight: 500, backgroundImage: 'url(' + Bg + ')', backgroundRepeat: "no-repeat", paddingTop: "150px" }}>
                    <div style={{ maxWidth: "500px", height: "250px", backgroundColor: "#fff", paddingTop: "70px" , margin: "0 auto", borderRadius: "10px", marginBottom: "100px" }}>
                        <div style={{ width: "80%", margin: " 0 auto"}}>
                            <h1 style={{ textAlign: "center", color: " #5e88fc" }}>  Subscribe for More Features</h1>
                            <Search
                                placeholder="input search text"
                                border="2px solid #5e88fc"
                                enterButton="Search"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                        </div>
                    </div>
                </div>
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
                            <div style={{ textAlign: "center", marginTop: " 30px",padding:"0 20px" }}>
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

            </div>
        );
    }
}

export default Home;