import React, {useEffect, useState} from "react";
import "../Assets/Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
const SignUp = (props) => {

    const navigate = useNavigate();
    // const [count,setCount] = useState(1);

    var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phnoregex = /^[0-9]{10}$/;
    
    
    // var getdata;
    // var data;
    // console.log(data,getdata);
    // getdata = localStorage.getItem('userData');
    // data = JSON.parse(getdata);
    const [signup, setSignup] = useState([]);
    const [data,setData] = useState();
    const [userData,setUserData] = useState();
    // const [check,setCheck] = useState([]);


    let [form, setForm] = useState(
        {
            Name: "",
            Email: "",
            Phone: "",  
            Password: "",
            ConfirmPassword: ""
        }
    );

    useEffect(() => {
        setData(() => (JSON.parse(localStorage.getItem('userData'))));
    },[signup]);
        console.log("data::",data);
        
    const signupHandler = (event) => {
        setForm((prevForm)=>({ ...prevForm, [event.target.name]: event.target.value })); 
    }
    const onsignup = () => {
        if (Object.keys(form).length === 5) {
            if (form.Password === form.ConfirmPassword) {
                delete form.ConfirmPassword;
                // if (!emailregex.test(form.Email)) {
                //     alert("Email is invalid");
                // }
                // else if (!phnoregex.test(form.Phone)) {
                //     alert("Phno is invalid");
                // }
                // else
                if (passwordregex.test(form.Password)){
                     const check = data && data.find((item) => {
                         return form.Email === item.Email || form.Phone === item.Phone;
                         }
                     );
                     if (check) {
                        alert("Email or Phone already exists");
                    }
                    else{
                    setSignup((prevSignUp)=>{
                        prevSignUp = [...prevSignUp, form];
                        localStorage.setItem('userData',JSON.stringify(prevSignUp));
                        // alert("Signup Success");
                        // navigate("/Login");
                        return [...prevSignUp];
                    });
                    setForm(() => ({
                        Name: "",
                        Email: "",
                        Phone: "",
                        Password: "",
                        ConfirmPassword: ""
                    }));
                    // navigate("/Login");
                }
                // if (!check){
                //     navigate("/Login");
                // }
                    console.log("data::",data);
                    // form = {};
                    // if (check) {
                    //     alert("Email or Phone already exists");
                    //     // data.pop();
                    // }
                    // else {
                    //     alert("Signup success");
                    //     // navigate("/Login");
                    //     setForm(() => ({
                    //         Name: "",
                    //         Email: "",
                    //         Phone: "",
                    //         Password: "",
                    //         ConfirmPassword: ""
                    //     }));
                    // }
                    console.log("form:::",form);
                    console.log("check",check);
                    console.log("boolean.check.length",Boolean(check));


                    // if(check){
                    //     alert("Email or Phone already exists");
                    // }
                    // else{
                    //     alert("signup success");
                    //     return navigate("/Login");
                    // }

                    // return check ? alert("Email or Phone already exists") : navigate("/Login");
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
        }
        // return check ? (alert("Email or Phone already exists")) : navigate("/Login");
    }
    console.log("form:::::",form)
    console.log("signup:::",signup)
    console.log("data:::",data)
    console.log("data:::",JSON.parse(localStorage.getItem('userData')));
    
    return <>
        <section className="signup-container">
            <div className="signup-form">
                <form className="left-form">
                    <h3>Create an Account</h3>
                    <input name="Name" type="text" value={form.Name} placeholder="Username" onChange={signupHandler} />
                    <input name="Email" type="email" value={form.Email} placeholder="Enter Email" onChange={signupHandler} />
                    <input name="Phone" type="text" value={form.Phone} placeholder="Enter your mobile number" onChange={signupHandler} />
                    <input name="Password" type="password" value={form.Password} placeholder="Password" onChange={signupHandler} />
                    <input name="ConfirmPassword" type="password" value={form.ConfirmPassword} placeholder="Confirm Password" onChange={signupHandler} />
                    <button type="button" className="signup-btn" onClick={onsignup}>Sign Up</button>
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
                    <p style={{fontSize:"16px"}}>Already have an account? <Link to="/Login">LOGIN HERE</Link></p>
                {/* <p>By signing up, you agree to our <Link href="#">Terms & Conditions</Link></p> */}
                </div>
            </div>
        </section>
    </>
}
const mapStateToProps = (state) => {
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




    // const [name,setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");


    // const signupHandler = (event) => {
    //     const { name, value } = event.target;
    // setForm({
    //   ...form,
    //   [name]: value  // Update the specific field based on the name
    // });
        
    // }

// if (type === "Name") {
        //     // form.Name = event.target.value;
        //     setForm({ ...form, [event.target.Name]: event.target.value }); 
        //     return;
        // }
        // else if (type === "Email") {
        //     // form.Email = event.target.value;
        //     setForm({ ...form, [event.target.Email]: event.target.value }); 
        //     return;
        // }
        // else if (type === "Phone") {
        //     // form.Phone = event.target.value;
        //     setForm({ ...form, [event.target.Phone]: event.target.value });
        //     return;
        // }
        // else if (type === "Password") {
        //     // form.Password = event.target.value;
        //     setForm({...form, [event.target.Password]: event.target.value });
        //     return;
        // }
        // else if (type === "ConfirmPassword") {
        //     // form.ConfirmPassword = event.target.value;
        //     setForm({...form, [event.target.ConfirmPassword]: event.target.value });
        //     return;
        // }

// const signupHandler = (event, type) => {
//     if (type === "Name") {
//         setName(event.target.value);
//     }
//     else if (type === "Email") {
//         setEmail(event.target.value);
//     }
//     else if (type === "Phno") {
//         setPhone(event.target.value);
//     }
//     else if (type === "Password") {
//         setPassword(event.target.value);
//     }
//     else if (type === "ConfirmPassword") {
//         setConfirmPassword(event.target.value);
//     }
// }




                    // for(let i of data){
                //     if(i.Email === form.Email || i.Phone === form.Phone){
                //             alert("Email or Phone already exists");
                //             signup.pop();
                //             return;    
                //     }
                //     else{
                //         console.log("Email and Phone are unique");
                //         Navigate("./Login.js");
                //     }
                // }
                
                
                //     data && data.filter((item) => {
                    //             if (item.Email === form.Email || item.Phone === form.Phone) {
            //                 alert("Email or Phone already exists");
            //                 console.log("item.email",item.Email)
            //                 signup.pop();
            //         }
            //         else{
            //             Navigate("./Login.js");
            //         }
            //         return data;
            //     }
            // )