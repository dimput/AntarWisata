import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Button, Col } from 'antd';
import './css/aw.css';
const { Header } = Layout;

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header style={{ backgroundColor: "rgba(192,192,192,0.0)",position:"fixed", top:"0", height: "80px", width: "100%", position: "absolute", zIndex: 2 }} className="hide-mobile">
                    {/* Logo */}
                    <Col xs={24} sm={17} xl={5}style={{ textAlign: "center" }}>
                        <Link to='.'>
                            <div className="logo" style={{ lineHeight: '74px', float: "left", color: "white", fontSize: "30px" }}>
                                <div style={{ fontSize: "28px", float: "left", marginRight: "20px" }}>
                                    <Icon type="car" theme="filled" />
                                </div>
                                <div style={{ float: "left", fontWeight: 300 }}>
                                    Antar
                        </div>
                                <div style={{ float: "left", fontWeight: 700, marginRight: "20px" }}>
                                    Wisata
                        </div>
                            </div>
                        </Link>
                    </Col>
                    {/* End Logo */}
                    <Col xs={0} md={0} lg={0} xl={12}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            style={{ lineHeight: '74px', backgroundColor: "rgba(192,192,192,0.0)", float: "left" }}
                            className="hide-mobile"
                        >
                            <Menu.Item key="1" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>Tentang Kami</Menu.Item>
                            <Menu.Item key="2" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>Layanan</Menu.Item>
                            <Menu.Item key="3" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}><Link to="/blog">Blog</Link></Menu.Item>
                            <Menu.Item key="4" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>FAQ</Menu.Item>
                            <Menu.Item key="5" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>Kontak Kami</Menu.Item>
                        </Menu>
                    </Col>
                    <Col xs={0} sm={7}>
                        <Link to="../login">
                            <Button size='large' style={{ float: "right", display: "absolute", top: "15px", borderRadius: "50px", padding: "10px 30px", height: "auto", backgroundColor: "rgba(255,255,255,0.4)", color: "rgba(255,255,255,1)", border: "none", fontWeight: "bold", fontSize: "20px" }}>
                                Daftar Driver
                    </Button>
                        </Link>
                    </Col>
                </Header>
            </div>
        );
    }
}

export default Navbar;