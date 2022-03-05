import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import { validation } from './validation';
import { note } from './toastify'
import styles from './SignUp.module.css'


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
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h1 className={styles.header}>Sign Up</h1>
                <div className={styles.formField}>
                    <label>Userame</label>
                    <input
                        className={(errors.username && touched.username) ? styles.uncompleted : styles.formInput}
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
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={changehandler}
                        onBlur={blurHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
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
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
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
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accept all the regulation of privacy and policy </label>
                        <input
                            
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changehandler}
                            onBlur={blurHandler}
                        />
                    </div>
                    {errors.isAccepted && touched.isAccepted && (
                        <span>{errors.isAccepted}</span>
                    )}
                </div>
                <div className={styles.formButtons}>
                    <a href="#">Login</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;