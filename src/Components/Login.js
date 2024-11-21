import React from "react";
import '../Assets/Styles/Login.css';
import {  Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginState } from './Actions/Action';



const Login = (props) => {
    const navigate = useNavigate();
    // const login = [];
    let obj = {};
    const onchangeHandler = (event,type) => {
        if(type === "email"){
            obj["email"] = event.target.value
        }
        else if(type === "password"){
            obj["password"] = event.target.value
        }
        // login.push(obj)
        console.log(obj)
        // obj = {};

    }
    const onloginHandler = () => {
        
        const getData = localStorage.getItem('userData');
        const Data = JSON.parse(getData);
        console.log(Data)
        Data && Data.find(
            (item) => {
                if(item.Email === obj.email && item.Password === obj.password){
                    alert("login success")
                    navigate("/") 
                    props.loginState(item)
                }
                else{
                    alert("Invalid credentials");
                }
                return false;
            }
        )
    }
    return (
        <section className="login-sec">
            <div className="left-container">
                <form>
                    <h1>Welcome back to TakeIt</h1>
                    <label className="username" for="uname">Username</label>
                    <input className="login-input" type="text" id="uname" onChange={(event) => {onchangeHandler(event,"email")}}/>
                    <label className="password" for="psw">Password</label>
                    <input className="login-input" type="password" id="psw"  onChange={(event) => {onchangeHandler(event,"password")}} />
                    <div className="chk-box-prnt">
                        <div className = "chk-remember">
                            <input id="checkbox" type="checkbox" className="input-chk-box" />
                            <label for="checkbox" className="chk-label">Remember me</label>
                        </div>
                        <Link to="" className = "forget-psw">Forgot password?</Link><br />
                    </div>
                    {/* <div style={{display:"flex",justifyContent:"center"}}> */}
                    <button type="button" className="signin-btn" onClick={() => {onloginHandler()}}>Login</button>
                    {/* </div> */}
                </form>
            </div>
            <div className="right-container">rsghsrh</div>
        </section>

    )
}


const mapStateToProps = (state) => {
    console.log("state",state)
    return {
        signup: state.cartReducer.signup
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginState
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Login);