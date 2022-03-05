import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validation } from "./validation";
import { note } from "./toastify";
import styles from "./SignUp.module.css";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changehandler = ({ target }) => {
       
            setData({ ...data, [target.name]: target.value });
    
    };

    const blurHandler = ({ target }) => {
        setTouched({ ...touched, [target.name]: true });
    };

    useEffect(() => {
        setErrors(validation(data,'login'));
    }, [data, touched]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            note("Signed up seccussfully", "success");
        } else {
            setTouched({
                email: true,
                password: true,
               
            });
            note("Failed to sign up", "error");
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h1 className={styles.header}>Login</h1>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={
                            errors.email && touched.email
                                ? styles.uncompleted
                                : styles.formInput
                        }
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
                        className={
                            errors.password && touched.password
                                ? styles.uncompleted
                                : styles.formInput
                        }
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
                <div className={styles.formButtons}>
                    <a href="#">Sign Up</a>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
