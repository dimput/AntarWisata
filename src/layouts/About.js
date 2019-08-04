import React , { Component } from 'react';
import {Icon} from 'antd';
import './css/about.css';

class Footers extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="about" style={{ marginTop: 220, textAlign: "center" }}>
                    <div style={{ fontSize: "50px", color: "blue", marginBottom: "20px" }}>
                        <Icon type="car" theme="filled" />
                    </div>
                    <div>
                        <div style={{ width: 350, margin: "0 auto" }}>
                            <hr />
                        </div>
                        <h3 style={{ fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", backgroundColor: "#FFF", width: "230px", margin: "0 auto", marginTop: "-20px" }}>About Antar Wisata</h3>
                        <div style={{ fontSize: "30px",width:"80%",margin:"0 auto",marginTop: "35px" }}>
                        Aplikasi yang dapat mengubah perjalananmu di kota Yogyakarta menjadi perjalanan istimewa. 
                        </div>
                        <div style={{ width:"80%",margin:"0 auto", marginTop: "35px", marginBottom: "200px", fontSize: "16px"}}>
                        Pesan kendaraan dengan mudah, driver akan mengantar sampai tempat tujuan.
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default Footers;