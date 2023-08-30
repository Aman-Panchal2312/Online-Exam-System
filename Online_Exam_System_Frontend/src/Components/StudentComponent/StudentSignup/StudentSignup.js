

import { NavLink, useHistory } from "react-router-dom";

import axios from "axios";
import { useState } from "react";

import swal from 'sweetalert';


import style from "./StudentSignup.module.css";

import baseUrl from "../../baseUrl";


function StudentSignup() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });

    function onTextFieldChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }


    const [password, setPassword] = useState("");

    function handlePassword(e) {
        setPassword(e.target.value);
    }


    let history = useHistory();

    async function handleSignup() {
        // console.log(userData);
        // console.log(password);

        //  var uname = userData.name;
        var uemail = userData.email;
        var upassword = userData.password;

        var regx = /^([a-zA-Z0-9\._]+)@(([a-z])+)\.([a-z]+)?$/
        var regx2 = /^[A-Za-z]\w{5,15}$/
        if (regx.test(uemail)) {
            if (regx2.test(upassword)) {
                // alert("Valid Email Id");
                if (userData.password === password) {
                    await axios.post(`${baseUrl}/user`, userData);
                    alert("Your account has created");

                    history.push("/StudentLogin");
                }else alert("password did not match");
            }else{
                swal("Please enter a valid Password", "Enter Password Of 5 - 15 Length With Combination Of Number & Character ", "error");
            }


        } else swal("Please enter a valid email", "Ex:- abc123@gmail.com", "error");


    }

    

    return (
        <div id={style.container}>

            <div id={style.formHeading}>
                <h1>Student Signup</h1>
                <p>Please complete the form below to register with us</p>
            </div>

            <div id={style.nameBox}>
                <label htmlFor="name">Name
                    <input onChange={(e) => onTextFieldChange(e)}
                        type="text" name="name" required />
                </label>
            </div>


            <div id={style.emailBox}>
                <label htmlFor="email"> Email
                    <input onChange={(e) => onTextFieldChange(e)}
                        type="text" name="email" required />
                </label>
            </div>

            <div id={style.passwordBox}>
                <label htmlFor="password"> Password
                    <input onChange={(e) => onTextFieldChange(e)}
                        type="password" name="password" required />
                </label>
            </div>


            <div id={style.confirmPasswordBox}>
                <label htmlFor="confirmPassword">Confirm Password
                    <input onChange={(e) => handlePassword(e)}
                        type="password" name="confirmPassword" required />
                </label>
            </div>


            {/* <button id={style.signup} onclick="signup()">Sign Up</button> */}
            <button id={style.signup} onClick={handleSignup} >Sign Up</button>


            <div id={style.login}>
                Have a Account?  <NavLink exact to="/StudentLogin"> Log in</NavLink>
            </div>


        </div>
    );
}

export default StudentSignup;