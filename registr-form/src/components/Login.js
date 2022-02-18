import React ,{useEffect, useState} from 'react';
import {valiDate} from "./validate";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SignUp.module.css";
import { Link } from 'react-router-dom';

const Login = () => {
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
        setErrors(valiDate(data , "login"))
    },[data , touched])



    const submitHandler = (event) => {
        event.preventDefault();
        if(! Object.keys(errors).length){
            notify("You signed in successfully" , "success")
        }else{
            notify("Invalid data!" , "error")
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
    <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={submitHandler}>
            <h2 className={styles.header}>Login</h2>
           
            <div className={styles.formField}>
                <label>Email</label>
                <input
                className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput} 
                type="email" 
                name='email' 
                value={data.email} 
                onChange={changHandler} 
                onFocus={tochHandler} />
                {errors.email && touched.email &&  <span>{errors.email}</span>}
            </div>
            <div className={styles.formField}>
                <label>Password</label>
                <input
                className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput} 
                type="password" 
                name='password' 
                value={data.password} 
                onChange={changHandler} 
                onFocus={tochHandler} />
                {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            
           
            
            <div className={styles.formButtons}>
                <Link to="/signUp">Sign Up</Link>
                <button type='submit'>Login</button>
            </div>
            
        </form>
        <ToastContainer />
    </div>
);
   
};

export default Login;