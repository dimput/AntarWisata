import React , { Component } from 'react';
import {Icon} from 'antd';

class Footers extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ marginTop: 220, textAlign: "center" }}>
                    <div style={{ fontSize: "50px", color: "blue", marginBottom: "20px" }}>
                        <Icon type="car" theme="filled" />
                    </div>
                    <div>
                        <div style={{ width: 350, margin: "0 auto" }}>
                            <hr />
                        </div>
                        <h3 style={{ fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", backgroundColor: "#FFF", width: "230px", margin: "0 auto", marginTop: "-20px" }}>About Antar Wisata</h3>
                        <div style={{ fontSize: "30px",width:"80%",margin:"0 auto",marginTop: "35px" }}>
                            Antar Wisata adalah sebuah aplikasi yang membantu perjalananmu berwisata di daerah Yogyakarta.
                        </div>
                        <div style={{ width:"80%",margin:"0 auto", marginTop: "35px", marginBottom: "200px", fontSize: "16px"}}>
                            Menikmati perjalanan dengan modal transportasi berpaket, anti riber, harga sesuai dompet.
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default Footers;