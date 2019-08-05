import React , { Component } from 'react';
import {Button,Row, Col} from 'antd';
import MalioboroStreet from './img/malioboro.jpg';
import vidio from './img/vidio.mp4';
import cover from './img/cover.jpeg';
import './css/progress2.css';
import "../../node_modules/video-react/dist/video-react.css"; 
import { Player } from 'video-react';

class Progress2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="isiprog" style={{ minHeight: 570, marginBottom: "100px"}}>
            <Row>
                <Col xs={0} sm={0} md={10} lg={12} xl={12}
                    style={{
                        backgroundColor: "red",
                        height: "570px",
                        backgroundImage: "url(" + MalioboroStreet + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                    <div style={{ height: "100%", width: "100%", backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", opacity: 0.9 }}>
                            <div style={{ height: "500px", width: "500px", paddingTop:"150px" , margin:"0px auto" }}>
                            <Player
                            playsInline
                            poster={cover}
                            src={vidio}
                            />
                            </div>   

                    </div>

                </Col>
                <Col className="progress2" xs={24} sm={24} md={14} lg={12} xl={11}>
                    <div style={{ fontSize: "18px", fontWeight: "700px" }}>
                        APA ITU ?
                    </div>
                    <div style={{ margin: "30px auto", fontSize: "40px" }}>
                        Antar Wisata
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: "300px", lineHeight: "35px" }}>
                   Aplikasi yang membantu para wisatawan untuk mendapatkan transportasi dengan mudah dan terjangkau.
                    Memiliki model penawaran berpaket untuk membantu wisatawan mengelilingi Daerah Istimewa Yogyakarta tanpa perlu ribet berganti
                    moda transportasi. Menyediakan informasi wisata lengkap dan terpercaya.
   
                    </div>
                    
                </Col>
            </Row>
            </div>
            
         );
    }
}
 
export default Progress2;