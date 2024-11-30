import React, {useEffect, useState} from "react";
import '../Assets/Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginState, userData } from './Actions/Action';
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";




const Login = (props) => {
    const navigate = useNavigate();
    
    // const [getData,setGetData] = useState([localStorage.getItem('userData')]);
    const [Data,setData] = useState(JSON.parse(localStorage.getItem('userData')));
    // useEffect(() => {
    //     setGetData(localStorage.getItem('userData'));
    //     setData(JSON.parse(getData));
    // },[]);
    // const login = [];
    let obj = {};
    const onchangeHandler = (event, type) => {
        if (type === "email") {
            obj["email"] = event.target.value
        }
        else if (type === "password") {
            obj["password"] = event.target.value
        }
        // login.push(obj)
        console.log(obj)
        // obj = {};

    }
    const onloginHandler = () => {
        
        const myfunc = Data && Data.filter((item) => {
                return ((item.Email === obj.email || item.Phone === obj.email) && item.Password === obj.password); 
                
            })
            console.log("myfunc",myfunc);
            props.userData(myfunc);
        return (myfunc.length !== 0 ? (navigate("/")): alert("Invalid credentials"));
    }
    console.log(Data)
    return (
        <section className="login-container">
            <div className="login-form">
                <form className="left-form">
                    <h1>Welcome back to TakeIt</h1>
                    <label className="username">Username</label><br />
                    <input className="login-input" type="text" id="uname" onChange={(event) => { onchangeHandler(event, "email") }} /><br />
                    <label className="password">Password</label><br />
                    <input className="login-input" type="password" id="psw" onChange={(event) => { onchangeHandler(event, "password") }} /><br />
                    <div className="chk-box-prnt">
                        <div className="chk-remember">
                            <input id="checkbox" type="checkbox" className="input-chk-box" />
                            <label className="chk-label">Remember me</label>
                        </div>
                        <Link to="/Login" className="forget-psw">Forgot password?</Link>
                    </div>
                    <button type="button" className="login-btn" onClick={() => { onloginHandler() }}>Login</button>
                    <div className="or">
                        <div className="left-or"></div>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>or</div>
                        <div className="right-or"></div>
                    </div>
                    <button type="button" className="l-w-g-btn" onClick={() => { }}><FcGoogle className="FcGoogle" />Signup with Google</button>
                    <button type="button" className="l-w-f-btn" onClick={() => { }}><FaSquareFacebook className="FaSquareFacebook" />Signup with Facebook</button>
                    <div className="m-g-f"><button><FcGoogle className="FcGoogle" /></button><button><FaSquareFacebook className="FaSquareFacebook" /></button></div>
                </form>
                <div className="right-content">
                    <h1 style={{ color: "#fff" }}>Welcome back!</h1>
                    <p style={{ color: "#fff", fontSize: "16px", lineHeight: "1.5", width: "265px", textAlign: "justify" }}>Welcome back! We are so happy to have you here.It's great to see you again. We hope you had a safe and enjoyable time away.</p>
                    <p>No Account yet?
                        <Link to="/Signup">Signup</Link>
                        {/* <button type="button" onClick={(event) => { event.preventDefault();navigate("/Signup")}}>signup</button> */}
                    </p>
                </div>
            </div>
        </section>

    )
}


const mapStateToProps = (state) => {
    console.log("state", state)
    return {
        login: state.cartReducer.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginState,userData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);