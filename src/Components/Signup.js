import React, {useState} from "react";
import "../Assets/Styles/SignUp.css";
import { Link } from "react-router-dom";
// import Signupimg from "../Assets/Images/shopping-apps.jpg";
import { connect } from "react-redux";
// import { loginState, onsignup } from "./Actions/Action";
import { bindActionCreators } from "redux";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
const SignUp = (props) => {

    const signup = [];
    const checkData = [];
    // let obj = {};
    var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phnoregex = /^[0-9]{10}$/;

    // const [name,setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");



    const [form, setForm] = useState(
        {
            // Name: "",
            // Email: "",
            // Phno: "",
            // Password: "",
            // ConfirmPassword: ""
        }
    );
    const signupHandler = (event, type) => {
        if (type === "Name") {
            form.name = event.target.value;
            // setForm({ ...form, Name: event.target.value }); 
            // signup.push(obj);
            return;
        }
        else if (type === "Email") {
            form.email = event.target.value;
        //    setForm({...form, Email:event.target.value});
            return;
        }
        else if (type === "Phno") {
            form.phno = event.target.value;
            // setForm({...form, Phno:event.target.value});
            return;
        }
        else if (type === "Password") {
            form.Password = event.target.value;
            // setForm({...form, Password:event.target.value});
            return;
        }
        else if (type === "ConfirmPassword") {
            form.ConfirmPassword = event.target.value;
            // setForm({...form, ConfirmPassword:event.target.value});
            // signup.push(obj);
            return;
        }
    }
    const onsignup = () => {
        if (Object.keys(form).length === 5) {
            if (form.Password === form.ConfirmPassword) {
                delete form.ConfirmPassword;
                console.log("Passwords match");
                if (emailregex.test(form.Email)) {
                    console.log("Email is valid");
                }
                else {
                    alert("Email is invalid");
                }
                if (phnoregex.test(form.Phno)) {
                    console.log("Phno is valid");
                }
                else {
                    alert("Phno is invalid");
                }
                if (passwordregex.test(form.Password)) {
                    console.log("Password is valid");
                    signup.push(form);
                    console.log("is valid")
                    console.log(signup);
                    localStorage.setItem('userData',JSON.stringify(signup));

                // getdata = localStorage.getItem('userdata');

                // data = JSON.parse(getdata);
                    // obj = {};
                    console.log(form);
                   setForm({});
                    console.log(form);
                    // const {Name, Email, Phno, Password} = form;
                    // axios.post("http://localhost:8800/details",
                    //     {Name:form.Name,Email_id:form.Email,Phone:form.Phno,Password:form.Password})
                    //     .then(() => {console.log("Success")})
                    // alert("Signup Successfull");
                }
                else {
                    alert("Password is invalid");
                }
            }
            else {
                alert("Incorrect confirm password");
            }
        }
        else {
            alert("Please fill all the fields");
            return;
        }
    }
    // console.log(obj);
    console.log(signup);

    // const signupHandler = (event,type) => {
    //     if(type === "Name"){
    //         setName(event.target.value);
    //     }
    //     else if(type === "Email"){
    //         setEmail(event.target.value);
    //     }
    //     else if(type === "Phno"){
    //         setPhone(event.target.value);
    //     }
    //     else if(type === "Password"){
    //         setPassword(event.target.value);
    //     }
    //     else if(type === "ConfirmPassword"){
    //         setConfirmPassword(event.target.value);
    //     }
    // }
    
    // const userid = 1;
    
    // const onsignup = (event) => {
        
    //     // if(!name ||!email ||!phone ||!password){
    //         //     alert("Please fill all the fields");
    //         //     return;
    //     // }
    //     console.log("Please fill all the fields");
    //     console.log(name, email, phone, password,confirmPassword)
    //     //  if(name !== ""){
    //     //     alert("pls enter valid name");
    //     // }
    //     // else if(email !== ""){
    //     //     alert("pls enter valid email");
    //     // }
    //     // else if(phone !== ""){
    //     //     alert("pls enter valid phone");
    //     // }
    //     // else if(password !== ""){
    //     //     alert("pls enter valid password");
    //     // }
    //     if(password === confirmPassword){
    //         console.log(password, "is equal to",confirmPassword);
    //         alert("Password and confirm password are same");
    //         // axios.post("http://localhost:8800/details",{
    //         //     userid: userid,
    //         //     name:name,
    //         //     email: email,
    //         //     phone: phone,
    //         //     password: password,
    //         //     // Confirm_Password: confirmPassword
    //         // }).then(() => console.log("Success"))
    //     }
    //     else{
    //         alert("pls enter all the fields");
    //     }

        // setName(event.name.value="");
        // setEmail(event.target.value="");
        // setPhone(event.target.value="");
        // setPassword(event.target.value="");
        // setConfirmPassword(event.target.value="");

    // }
    return <>
        <section className="signup-container">
            <div className="signup-form">
                <form className="left-form">
                    <h3>Create an Account</h3>
                    <input type="text" placeholder="Username" onChange={(event) => { signupHandler(event, "Name") }} />
                    <input type="email" placeholder="Enter Email" onChange={(event) => { signupHandler(event, "Email") }} />
                    <input type="text" placeholder="Enter your mobile number" onChange={(event) => { signupHandler(event, "Phno") }} />
                    <input type="password" placeholder="Password" onChange={(event) => { signupHandler(event, "Password") }} />
                    <input type="password" placeholder="Confirm Password" onChange={(event) => { signupHandler(event, "ConfirmPassword") }} />
                    <button type="button" className="signup-btn" onClick={() => { onsignup() }}>Sign Up</button>
                    <div className="or">
                        <div className="left-or"></div>
                        <div style={{marginBottom:"5px",fontSize:"16px"}}>or</div>
                        <div className="right-or"></div>
                    </div>
                    <button type="button" className="l-w-g-btn" onClick={() => {}}><FcGoogle className="FcGoogle" />Signup with Google</button>
                    <button type="button" className="l-w-f-btn" onClick={() => {}}><FaSquareFacebook className="FaSquareFacebook"/>Signup with Facebook</button>
                    <div className="m-g-f"><button><FcGoogle className="FcGoogle" /></button><button><FaSquareFacebook className="FaSquareFacebook"/></button></div>
                    {/* <p>Already have an account? <Link to="/Login">LOGIN HERE</Link></p> */}
                </form >
                <div className="right-content">
                    <h1 style={{color:"#fff"}}>Come join us!</h1>
                    <p style={{color:"#fff",fontSize:"16px",lineHeight:"1.5",width: "265px",textAlign:"justify"}}>We are so excited to have you here.If you haven't already,crete an account to get access to exclusive offers,rewards and discounts.</p>
                    <p>Already have an account? <Link to="/Login">LOGIN HERE</Link></p>
                <p>By signing up, you agree to our <Link href="#">Terms & Conditions</Link></p>
                </div>
            </div>
        </section>
    </>
}

const mapStateToProps = (state) => {
    console.log("state",state)
    return {
        // signup: state.signup
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // on
    },dispatch)
  } 

export default connect(mapStateToProps,mapDispatchToProps) (SignUp);