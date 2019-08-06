

import React , { Component } from 'react';
import {Avatar,Row } from 'antd';
import Maspanjul from './img/maspanjul.PNG';
import Dimput from './img/dimput.jpeg';
import Carousel from 'react-multi-carousel';

class Client extends Component {
    state = {  }
    render() { 
        return ( 
          
       
<div style={{ marginTop: "200px", marginBottom: "100px" }}>
                    <div style={{ width: 270, margin: "0 auto", color: "black" }}>
                        <hr />
                    </div>
                    <h3 style={{ fontWeight: "700", letterSpacing: "1px", color: "#000", textTransform: "uppercase", backgroundColor: "#fff", width: "180px", margin: "0 auto", marginTop: "-20px", textAlign: "center" }}>
                        PENDIRI
                    </h3>
                    <div style={{ marginTop: "20px", marginBottom: "50px", fontSize: "30px", textAlign: "center" }}>
                        <Row>
                           Ini Nih Orang-Orang dibalik AntarWisata
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
                                <Avatar src="https://scontent-sin2-2.cdninstagram.com/vp/835946fc3588a1d19179650a9a439312/5DE5A2DD/t51.2885-15/e35/66711090_642895416221135_4983495138450309453_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=111" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Azis Nur Ridwan</h3></div>
                                    <div><i>App Front End</i></div>
                                    <div style={{ marginTop: "10px" }}> Tugasnya Mas Ajis itu adalah membuat tampilan yang menarik untuk aplikasi yang kalian jalankan.</div>
                                </div>
                            </div>
                            <div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://scontent-sin2-2.cdninstagram.com/vp/b98aef1d5e3aff74cd549ece2e82a511/5DD2AAC2/t51.2885-19/s150x150/60457485_1053349771524832_2767316491886919680_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=104" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Rona Saputra</h3></div>
                                    <div><i>App Back End</i></div>
                                    <div style={{ marginTop: "10px" }}>Om Rona bertugas untuk mensingkronkan aplikai yang berjalan dan dapat digunkan seperti saat ini.</div>
                                </div>
                            </div>
                            <div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://scontent-sin2-2.cdninstagram.com/vp/c3e03524b6ee3f588e34765fdb08470e/5DEA1BBF/t51.2885-15/sh0.08/e35/s640x640/67142561_114964846493983_1086219052937242843_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=107" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Siti Zulfiani Khoirunnisa</h3></div>
                                    <div><i> Sosial Media Marketing </i></div>
                                    <div style={{ marginTop: "10px" }}> Kalo Mba Zulfi ,Bertugas menjadi admin instagram, yang mempromosikan Antar Wisata, di Follow Ya !</div>
                                </div>
                            </div><div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://scontent-sin2-2.cdninstagram.com/vp/71fbe275737e0bf10c2aaad0376e051f/5DE4938B/t51.2885-19/s150x150/56171761_386447801942028_1062951504647815168_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=100" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Ester Prenatalia Adi</h3></div>
                                    <div><i>Sosial Media Marketing </i></div>
                                    <div style={{ marginTop: "10px" }}>Tugasnya Ester ini mempercantik tampilan feed, mempromosikan wisata yang dapat kalian lihat di instagram</div>
                                </div>
                            </div><div style={{ padding: "20px 30px" }}>
                                <Avatar src={Dimput} style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Dimas Putra</h3></div>
                                    <div><i>Back End</i></div>
                                    <div style={{ marginTop: "10px" }}>Mas dimas , merupakan otak dari pengerjaan bagian belakang webiste yang sedang kalian lihat ini</div>
                                </div>
                            </div><div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://scontent-sin2-1.cdninstagram.com/vp/0296659797ddae4946dfc7df3ce23262/5DAE17AE/t51.2885-19/s320x320/62144651_393952937874705_8214271605258321920_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_cat=109" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Mutiara Fitri </h3></div>
                                    <div><i>Front End</i></div>
                                    <div style={{ marginTop: "10px" }}>Mba Mutiara tugasnya membuat tampilan website menjadi semenarik mungkin untuk kalian lihat.</div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>

            
         );
    }
}
 
export default Client;