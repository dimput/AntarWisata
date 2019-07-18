import React , { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row } from 'antd';
import {Link} from 'react-router-dom';  

class Login extends Component {
    state = {  }
    render() {
        const { getFieldDecorator } = this.props.form;

        return ( 
            <div style={{ backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", minHeight: "85vh" }}>
                <Row>
                    <div style={{ backgroundColor: "white", width: "400px", height: "400px", margin: "0px auto", marginTop: "100px", borderRadius: "2%" }}>
                        <h3 style={{ fontWeight: "900", fontSize: "26px", textAlign: "center", padding: "20px", textTransform: "uppercase", letterSpacing:"2px"}}>
                            Login
                        </h3>
                        <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: "300px",margin:"0px auto" }}>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="/daftar" style={{float:"right"}}>
                                    Forgot password
                                </a>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%",letterSpacing:"2px",textTransform:"uppercase",fontWeight:"700",backgroundImage:"linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)"}}>
                                    Login
                                </Button>
                                <br/>
                                <div style={{textAlign:"center"}}>Or</div>
                                <div style={{textAlign:"center"}}>
                                    <Link to="/daftar">
                                        <a href="/daftar">register now!</a>
                                    </Link>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </Row>
            </div>
         );
    }
}
const DaftarForm = Form.create({ name: 'normal_login' })(Login);
export default DaftarForm;