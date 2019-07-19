

import React , { Component } from 'react';
import {Avatar,Row } from 'antd';
import Maspanjul from './img/maspanjul.PNG';
import Dimput from './img/dimput.jpeg';
import Carousel from 'react-multi-carousel';

class Feature extends Component {
    state = {  }
    render() { 
        return ( 
          
       
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
                                <Avatar src="https://scontent-sin2-1.cdninstagram.com/vp/d47b66a9ca16e774b3833a3f401a355c/5DC9F13B/t51.2885-19/s320x320/49663048_2388353378151304_3957485335864147968_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_cat=104" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Muh Catur Putra</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div>
                            <div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://scontent-sin2-1.cdninstagram.com/vp/8a02ef82c0356e5e87ba5c8ab3843613/5DB3C500/t51.2885-19/s320x320/10890789_1686984951538669_1514833387_a.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_cat=101" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Dimas Saragihsitio</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div>
                            <div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://scontent-sin2-1.cdninstagram.com/vp/9c91ae009f06a76c6cc45bf606904380/5DB9BB65/t51.2885-15/sh0.08/e35/p640x640/59535441_2415699905386003_477437286519901663_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_cat=107" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Evelin Kharisma Sari</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div><div style={{ padding: "20px 30px" }}>
                                <Avatar src={Maspanjul} style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Zulfa Kurniawan Shafyanta</h3></div>
                                    <div><i>Art Dirrector</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div><div style={{ padding: "20px 30px" }}>
                                <Avatar src={Dimput} style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Dimas Putra</h3></div>
                                    <div><i>Back End</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div><div style={{ padding: "20px 30px" }}>
                                <Avatar src="https://scontent-sin2-1.cdninstagram.com/vp/0296659797ddae4946dfc7df3ce23262/5DAE17AE/t51.2885-19/s320x320/62144651_393952937874705_8214271605258321920_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_cat=109" style={{ backgroundColor: "#FFF", boxShadow: "0 0 10px 0 rgba(0,0,0,.1)", marginLeft: "30px", height: "80px", width: "80px", border: "6px solid white" }} />
                                <div style={{ backgroundColor: "#FFF", marginTop: "-40px", paddingTop: "50px", paddingLeft: "35px", paddingBottom: "20px", boxShadow: "0 0 30px -5px rgba(0,0,0,.1)" }}>
                                    <div><h3>Mutiara Fitri </h3></div>
                                    <div><i>Front End</i></div>
                                    <div style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.</div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>

            
         );
    }
}
 
export default Feature;