import React , { Component } from 'react';
import {Layout ,Row, Col, Icon} from 'antd';
const { Footer  } = Layout;

class Footers extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Footer style={{ textAlign: 'center', borderTop: "2px solid Blue" }}>
                    <Row>
                        <Col span={12} style={{ textAlign: "left", fontSize: '16px', color: "#8790af" }}>
                            Antar Wisata ©2019 | <br />
                            <span>Made with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by Antar Wisata</span>
                        </Col>
                        <Col span={12} style={{ fontSize: '16px', color: "#8790af" }}>
                            <Row type="flex" justify="end" >
                                <Col span={4}>Kontak Kami</Col>
                                <Col span={3}>Layanan</Col>
                                <Col span={3}>Blog</Col>
                                <Col span={3}>FAQ</Col>
                                <Col span={4}>Kontak Kami</Col>

                            </Row>
                        </Col>
                    </Row>
                </Footer>
            </div>
         );
    }
}
 
export default Footers;