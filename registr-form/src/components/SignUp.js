import React ,{useEffect, useState} from 'react';
import {valiDate} from "./validate"

const SignUp = () => {
    const [data , setData]=useState({
        name : "",
        email : "",
        password : "",
        confirmPassword: "",
        isAccepted : false
    }) 
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})
    const tochHandler = (event) =>{
        setTouched({...touched ,[event.target.name]: true})
    }
    const changHandler = event => {
        if(event.target.name === 'isAccepted'){
            setData({ ...data , [event.target.name] : event.target.checked})
        }else { 
            setData({ ...data , [event.target.name] : event.target.value})
        }

    }
    useEffect(() => {
        setErrors(valiDate(data))
    },[data , touched])
    const submitHandler = (event) => {
        event.preventDefault();
        if(! Object.keys(errors).length){

        }else{
            setTouched({
                name : true,
                email : true,
                password : true,
                confirmPassword: true,
                isAccepted : true
            })
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Sign Up</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' value={data.name} onChange={changHandler} onFocus={tochHandler} />
                    {errors.name && touched.name &&  <span>{errors.name}</span>}
                <div>
                <div>
                    <label>Email</label>
                    <input type="email" name='email' value={data.email} onChange={changHandler} onFocus={tochHandler} />
                    {errors.email && touched.email &&  <span>{errors.email}</span>}
                </div>
                    <label>Password</label>
                    <input type="password" name='password' value={data.password} onChange={changHandler} onFocus={tochHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={changHandler} onFocus={tochHandler} />
                    {errors.confirmpassword  && touched.confirmPassword &&   <span>{errors.confirmpassword}</span>}
                </div>
               
                <div>
                    <label> I accet terms of privacy policy</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changHandler} onFocus={tochHandler} />
                    {errors.isAccepted && touched.isAccepted &&  <span>{errors.isAccepted}</span>}
                </div>
                <div>
                    <a href="#">Login</a>
                    <button type='submit'>Sign up</button>
                </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;