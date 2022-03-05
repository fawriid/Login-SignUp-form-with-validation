import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import { validation } from './validation';
import {note} from './toastify'


const SignUp = () => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted:false
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    const changehandler = ({ target }) => {
        if (target.name === 'isAccepted') {
            setData({...data, [target.name] : target.checked})
        } else {
            setData({...data, [target.name]: target.value})
        }
    }

    const blurHandler = ({target}) => {
        setTouched({ ...touched, [target.name]: true })
    }

    useEffect(() => {
        setErrors(validation(data))
    },[data, touched])



    const submitHandler = (e) => {
        e.preventDefault()
        if (!Object.keys(errors).length) {
            note('Signed up seccussfully','success')
        } else {
            setTouched({username: true,email:true, password:true,confirmPassword:true,isAccepted:true})
            note('Failed to sign up', 'error')
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Userame</label>
                    <input
                        type="text"
                        name="username"
                        value={data.username}
                        onChange={changehandler}
                        onBlur={blurHandler}
                    />
                    {errors.username && touched.username && (
                        <span>{errors.username}</span>
                    )}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={changehandler}
                        onBlur={blurHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={changehandler}
                        onBlur={blurHandler}
                    />
                    {errors.password && touched.password && (
                        <span>{errors.password}</span>
                    )}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changehandler}
                        onBlur={blurHandler}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <span>{errors.confirmPassword}</span>
                    )}
                </div>
                <div>
                    <label>I accept all the regulation of privacy and policy </label>
                    <input
                        type="checkbox"
                        name="isAccepted"
                        value={data.isAccepted}
                        onChange={changehandler}
                        onBlur={blurHandler}
                    />
                    {errors.isAccepted && touched.isAccepted && (
                        <span>{errors.isAccepted}</span>
                    )}
                </div>
                <div>
                    <button>
                        <a href="#">Login</a>
                    </button>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;