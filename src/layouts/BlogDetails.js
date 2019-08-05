

import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import Maspanjul from './img/maspanjul.PNG';
import Dimput from './img/dimput.jpeg';
import Carousel from 'react-multi-carousel';
import axios from 'axios'

class BlogDetails extends Component {
    state = {}
    componentDidMount() {
        axios
            .get("https://antarwisata-1dd73.firebaseio.com/blogs/" + this.props.match.params.id + ".json")
            .then(response => {
                const data = Object.values(response.data);
                this.setState({ personku: response.data });
            });
    }
    getKontent() {
        if (this.state.personku) {
            return this.state.personku.konten
        }
    }
    getJudul() {
        if (this.state.personku) {
            return this.state.personku.judul
        }
    }
    getImage() {
        if (this.state.personku) {
            return this.state.personku.image
        }
    }
    getAuthor(){
        if (this.state.personku) {
            return this.state.personku.author
        }
    }
    getDate(){
        if (this.state.personku) {
            return this.state.personku.date
        }
    }
    render() {
        return (


            <div style={{ paddingTop: "70px", marginBottom: "100px" }}>
                <div style={{ backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", width: "100%", height: 80, position: "absolute", top: "0px" }}></div>
                <div style={{ width: "80%", margin: "0 auto",marginBottom:"100px", borderRadius:"10px", paddingTop:"50px",boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",paddingBottom:"50px"}}>
                    <div style={{ fontSize: "42px", fontWeight: "900",padding:"0 50px" }} dangerouslySetInnerHTML={{ __html: this.getJudul() }}></div>
                    <br />
                    <Row style={{padding:"0 50px"}}>
                        <Col lg={12}>
                            <div style={{ fontSize: "20px"}}>Author : <i>{this.getAuthor()}</i></div>
                        </Col>
                        <Col lg={12}>
                            <div style={{ fontSize: "20px"}}>Publish : <i>{this.getDate()}</i></div>
                        </Col>
                    </Row>
                    <br/>
                    <img src={this.getImage()} width="100%" height="400px" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", zIndex: -99 }}></img>
                    <div style={{padding:"0 50px",paddingTop:"70px"}} dangerouslySetInnerHTML={{ __html: this.getKontent() }}>
                    </div>
                </div>
                <div style={{ width: 270, margin: "0 auto", color: "black" }}>
                    <hr />
                </div>
                <h3 style={{ fontWeight: "700", letterSpacing: "1px", color: "#000", textTransform: "uppercase", backgroundColor: "#fff", width: "180px", margin: "0 auto", marginTop: "-20px", textAlign: "center" }}>
                    {this.props.match.params.id}
                </h3>
                <div style={{ marginTop: "20px", marginBottom: "50px", fontSize: "30px", textAlign: "center" }}>
                    <Row>
                        Ini Nih ! Yang Seru di Jogja
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
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <img src="https://backpackerjakarta.com/wp-content/uploads/2017/03/malioboro-3.jpg" width="100%" height="220px" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "-20px", zIndex: -99 }}></img>
                            </div>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <div><h3>Malioboro </h3></div>
                                <div><i>jl. Malioboro</i></div>
                                <div style={{ marginTop: "10px" }}><p>Jalan Malioboro adalah nama salah satu kawasan jalan dari tiga jalan di Kota Yogyakarta yang membentang dari Tugu Yogyakarta hingga ke perempatan Kantor Pos Yogyakarta. Merupakan poros Garis Imajiner Kraton Yogyakarta</p></div>
                            </div>
                        </div>
                        <div style={{ padding: "20px 30px" }}>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <img src="https://bonvoyagejogja.com/wp-content/uploads/2017/06/1460618570.png" width="100%" height="220px" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "-20px" }}></img>
                            </div>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <div><h3>Candi Prambanan</h3></div>
                                <div><i>Jl. Raya Solo - Yogyakarta No.16, Kranggan</i></div>
                                <div style={{ marginTop: "10px" }}><p>Candi Prambanan atau Candi Roro Jonggrang.  dipersembahkan untuk Trimurti, tiga dewa utama Hindu yaitu Brahma dewa pencipta, Wishnu dewa pemelihara, dan Siwa dewa pemusnah. </p></div>
                            </div>
                        </div>
                        <div style={{ padding: "20px 30px" }}>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <img src="https://pix10.agoda.net/geo/city/14018/1_14018_02.jpg?s=1920x822" width="100%" height="220px" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "-20px" }}></img>
                            </div>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <div><h3>Candi Borobudur</h3></div>
                                <div><i>Jl. Badrawati, Kw. Candi Borobudur, Borobudur</i></div>
                                <div style={{ marginTop: "10px" }}><p>Borobudur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, dan 40 km di sebelah barat laut Yogyakarta.</p></div>
                            </div>
                        </div>
                        <div style={{ padding: "20px 30px" }}>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <img src="https://images5.alphacoders.com/596/thumb-1920-596051.jpg" width="100%" height="220px" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "-20px" }}></img>
                            </div>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <div><h3>Wisata Taman Sari </h3></div>
                                <div><i> Patehan, Kecamatan Kraton,</i></div>
                                <div style={{ marginTop: "10px" }}><p>Taman Sari Yogyakarta atau Taman Sari Keraton Yogyakarta adalah situs bekas taman atau kebun istana Keraton Ngayogyakarta Hadiningrat, yang dapat dibandingkan dengan Kebun Raya Bogor sebagai kebun Istana Bogor. </p></div>
                            </div>
                        </div>
                        <div style={{ padding: "20px 30px" }}>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <img src="https://jogjacar.com/wp-content/uploads/2018/10/Tebing-Breksi-sumber-ig-joko_lsn.jpg" width="100%" height="220px" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "-20px" }}></img>
                            </div>
                            <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                <div><h3>Tebing Breksi</h3></div>
                                <div><i>Desa Sambirejo, Prambanan, Sleman</i></div>
                                <div style={{ marginTop: "10px" }}><p>Tebing Breksi merupakan tempat wisata yang berada di wilayah Kabupaten Sleman. Lokasinya berada di sebelah kidul Candi Prambanan dan berdekatan dengan Candi Ijo serta Kompleks Keraton Boko.</p></div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>


        );
    }
}

export default BlogDetails;