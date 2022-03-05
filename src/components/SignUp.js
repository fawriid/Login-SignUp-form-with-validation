import React, { useState,useEffect } from 'react';
import { validation } from './validation';

const SignUp = () => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted:false
    })

    const [errors , setErrors] = useState ({})

    const changehandler = ({ target }) => {
        if (target.name === 'isAccepted') {
            setData({...data, [target.name] : target.checked})
        } else {
            setData({...data, [target.name]: target.value})
        }
    }

    useEffect(() => {
        setErrors(validation(data))
        console.log(errors);
    },[data])

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label>Userame</label>
                    <input type="text" name="username" value={data.username} onChange={changehandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={data.email} onChange={changehandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password} onChange={changehandler} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changehandler} />
                </div>
                <div>
                    <label>I accept all the regulation of privacy and policy </label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changehandler} />
                </div>
            </form>
        </div>
    );
};

export default SignUp;