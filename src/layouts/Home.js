import React, { Component } from 'react';
import { Avatar, Icon, Button, Row, Col, Collapse, Input } from 'antd';
import Mobile from './img/mobile-screen.png';
import PlayStoreIcon from './img/hehe.png';
import homepng from './img/home.png';
import splashpng from './img/splash.png';
import detailpng from './img/detail.png';
import wisatapng from './img/wisata.png';
import MalioboroStreet from './img/malioboro.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Bg from './img/subscribe-bg.jpg';
const { Panel } = Collapse;
const { Search } = Input;

class Home extends Component {
    state = {}
    render() {
        return (
            <div tyle={{ backgroundColor: "#fff" }}>

                <div className="isi" style={{ fontSize: "50px", backgroundColor: "black", height: 800, backgroundImage: "url('http://borobudurpark.com/wp-content/uploads/2017/02/borobudur1-1024x683.jpg')", backgroundSize: "cover" }}>
                    <div style={{ width: "100%", height: "100%", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", opacity: 0.8 }}>
                    </div>
                    <div style={{ position: "absolute", zIndex: "2", top: "150px", width: "100%" }}>
                        <Row>
                            <Col xs={0} sm={0} md={0} lg={0} xl={10}>
                                <div style={{ float: "right", width: 400 }}>
                                    <div style={{
                                        backgroundImage: 'url(' + Mobile + ')',
                                        backgroundRepeat: "no-repeat",
                                        minHeight: 800,
                                        paddingTop: 80,
                                        paddingLeft: 25,
                                        filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))"
                                    }}>
                                        <div style={{ backgroundColor: "green", width: 323, height: 570, overflow: "hidden" }}>
                                            <img alt="" src={homepng} style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={20} md={20} lg={20} xl={12}>
                                <div style={{ color: "#FFF", marginTop: 100, marginLeft: 50 }}>
                                    <div style={{ fontSize: "54px" }}>
                                        Dapatkan Pengalaman Wisata terbaikmu dengan AntarWisata
                                    </div>
                                    <div style={{ fontSize: "18px", marginTop: "35px" }}>
                                        Temukan surga surga tersembunyi yang tersebar di Daerah Istimewa Yogyakarta. Buatlah pengalaman baru anda di tempat yang belum pernah anda kunjungi. Mulai perjalanan anda sekarang!.
                                    </div>
                                    <Button shape="round" icon="download" size="large" style={{ fontWeight: 700, color: "blue", textTransform: "uppercase", letterSpacing: "3px", fontSize: "14px" }}>
                                        Download App
                </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div >
                <div style={{ marginTop: 220, textAlign: "center" }}>
                    <div style={{ fontSize: "50px", color: "blue", marginBottom: "20px" }}>
                        <Icon type="car" theme="filled" />
                    </div>
                    <div>
                        <div style={{ width: 350, margin: "0 auto" }}>
                            <hr />
                        </div>
                        <h3 style={{ fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", backgroundColor: "#FFF", width: "230px", margin: "0 auto", marginTop: "-20px" }}>About Antar Wisata</h3>
                        <div style={{ marginTop: "35px", padding: "0 230px", fontSize: "30px" }}>
                            Antar Wisata adalah sebuah aplikasi yang membantu perjalananmu berwisata di daerah Yogyakarta.
                        </div>
                        <div style={{ marginTop: "35px", marginBottom: "200px", fontSize: "16px", padding: "0 230px" }}>
                            Menikmati perjalanan dengan modal transportasi berpaket, anti riber, harga sesuai dompet.
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#f5f6fe", minHeight: 570 }}>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={11} style={{ paddingLeft: "100px", paddingTop: "120px", paddingRight: "50px" }}>
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
                        <Col xs={2} sm={4} md={6} lg={8} xl={13}
                            style={{
                                backgroundColor: "red",
                                height: "570px",
                                backgroundImage: "url(" + MalioboroStreet + ")",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}>
                            <div style={{ height: "100%", width: "100%", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", opacity: 0.8 }}>
                            </div>
                            <Row>
                                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                    <div style={{ width: 400, marginLeft: "70px" }}>
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
                                                <img alt="" src={wisatapng} style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div style={{ minHeight: 570, marginTop: "250px", marginBottom: "100px" }}>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={12}
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
                        <Col xs={2} sm={4} md={6} lg={8} xl={11} style={{ paddingLeft: "100px", paddingTop: "120px", paddingRight: "50px" }}>
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
                        <Col md={8} style={{ textAlign: "center" }}>
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
                <div style={{ marginTop: "200px", marginBottom: "100px" }}>
                    <div style={{ width: 270, margin: "0 auto", color: "black" }}>
                        <hr />
                    </div>
                    <h3 style={{ fontWeight: "700", letterSpacing: "1px", color: "#000", textTransform: "uppercase", backgroundColor: "#fff", width: "180px", margin: "0 auto", marginTop: "-20px", textAlign: "center" }}>
                        TESTIMONIALS
        </h3>
                    <div style={{ marginTop: "20px", marginBottom: "50px", fontSize: "30px", textAlign: "center" }}>
                        <Row>
                            Our Client Loves US
          </Row>
                    </div>
                    <div style={{ padding: "0 50px", paddingTop: "50px" }}>
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            containerClass="container-with-dots"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 3,
                                    paritialVisibilityGutter: 40
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1,
                                    paritialVisibilityGutter: 30
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 2,
                                    paritialVisibilityGutter: 30
                                }
                            }}
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            <div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Dimas Putra</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div>
                            <div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Dimas Putra</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div>
                            <div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Dimas Putra</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div><div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Dimas Putra</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div><div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Dimas Putra</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
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
                                            paddingLeft: 20,
                                            backgroundSize: 250,
                                            marginTop: "-650px",
                                            filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))"
                                        }}>
                                            <div style={{ backgroundColor: "green", width: 210, minHeight: 380 }}>
                                                hehe
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
                <div style={{ minHeight: 570, marginBottom: "150px" }}>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={11} style={{ paddingLeft: "100px", paddingTop: "120px", paddingRight: "50px" }}>
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
                        <Col xs={2} sm={4} md={6} lg={8} xl={13}
                            style={{
                                height: "570px",
                            }}>
                        </Col>
                    </Row>
                </div>
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
                                <Panel header="Third faq question goes here?" key="2">
                                    <p>Pertanyaan pertama</p>
                                </Panel>
                                <Panel header="Why more question goes here?" key="3">
                                    <p>Pertanyaan pertama</p>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Col>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                </div>
                <div style={{ minHeight: 500, backgroundImage: 'url(' + Bg + ')', backgroundRepeat: "no-repeat", paddingTop: "150px" }}>
                    <div style={{ width: "500px", height: "250px", backgroundColor: "#fff", margin: "0 auto", borderRadius: "10px", marginBottom: "100px" }}>
                        <div style={{ width: "400px", margin: " 0 auto", paddingTop: "70px" }}>
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
                        <Col span={8}>
                            <div style={{ width: "75px", paddingTop: "3px", margin: "0px auto", height: "75px", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", borderRadius: " 100px", textAlign: "center", border: "2px solid #fff" }}>
                                <div style={{ border: "2px solid #fff", width: "65px", height: "65px", margin: "0px auto", borderRadius: "100%" }}>
                                    <Icon type="home" style={{ fontSize: "20px", paddingTop: "22px", color: "white" }} />
                                </div>
                            </div>
                            <div style={{ textAlign: "center", marginTop: " 30px" }}>
                                <p>Jl. Amerta VI, Jombor Lor, <br /> Sinduadi, Kec. Mlati, Kabupaten Sleman, Yogyakarta</p>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ width: "75px", paddingTop: "3px", margin: "0px auto", height: "75px", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", borderRadius: " 100px", textAlign: "center", border: "2px solid #fff" }}>
                                <div style={{ border: "2px solid #fff", width: "65px", height: "65px", margin: "0px auto", borderRadius: "100%" }}>
                                    <Icon type="phone" style={{ fontSize: "20px", paddingTop: "22px", color: "white" }} />
                                </div>
                            </div>
                            <div style={{ textAlign: "center", marginTop: " 30px" }}>
                                <p>085274262088 <br /> 083821174711</p>
                            </div>
                        </Col>
                        <Col span={8}>
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