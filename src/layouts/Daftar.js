import React , { Component } from 'react';
import { signUp } from '../store/actions/authActions'
import { Form, Icon, Input, Button, Checkbox, Row } from 'antd';
import { connect } from 'react-redux'


class Daftar extends Component {
    state = {  }
    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.signUp(values);
      }
    });
  };
    render() {
        const { getFieldDecorator } = this.props.form;

        return ( 
            <div style={{ backgroundImage: "linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)", minHeight: "85vh" }}>
                <Row>
                    <div style={{ backgroundColor: "white", width: "400px", height: "400px", margin: "0px auto", marginTop: "100px", borderRadius: "2%" }}>
                        <h3 style={{ fontWeight: "900", fontSize: "26px", textAlign: "center", padding: "20px", textTransform: "uppercase", letterSpacing:"2px"}}>
                            Daftar
                        </h3>
                        <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: "300px",margin:"0px auto" }}>
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your email!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Email"
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
                                {getFieldDecorator('confpassword', {
                                    rules: [{ required: true, message: 'Password is not Same' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Confirm Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('agree', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                })(<Checkbox>Setuju dengan Kebijakan dan Peraturan</Checkbox>)}
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%",letterSpacing:"2px",textTransform:"uppercase",fontWeight:"700",backgroundImage:"linear-gradient(45deg, rgba(72,44,191,1) 0%, rgba(106,198,240,1)100%)"}}>
                                    Daftar
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Row>
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (creds) => dispatch(signUp(creds))
    }
  }

const DaftarForm = Form.create({ name: 'normal_login' })(Daftar);
export default connect(null,mapDispatchToProps)(DaftarForm)