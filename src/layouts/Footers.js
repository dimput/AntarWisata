import React , { Component } from 'react';
import {Layout ,Row, Col} from 'antd';
import './css/footer.css';
const { Footer  } = Layout;

class Footers extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Footer style={{ textAlign: 'center', borderTop: "2px solid Blue" }}>
                    <Row>
                        <Col md={12} style={{ fontSize: '16px', color: "#8790af" }} className="copyright">
                            Antar Wisata ©2019 <br />
                            {/* <span>Made with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by Antar Wisata</span> */}
                        </Col>
                        <ul className="footer-list">
                            <li>Tentang Kami</li>
                            <li>Layanan</li>
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Kontak Kami</li>
                        </ul>
                    </Row>
                </Footer>
            </div>
         );
    }
}
 
export default Footers;