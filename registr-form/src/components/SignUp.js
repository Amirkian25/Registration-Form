import React ,{useEffect, useState} from 'react';
import {valiDate} from "./validate";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';

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
        setErrors(valiDate(data , "signup"))
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
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input 
                    className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                    type="text" 
                    name='name' 
                    value={data.name} 
                    onChange={changHandler} 
                    onFocus={tochHandler} />
                    {errors.name && touched.name &&  <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                    className={(errors.confirmpassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput} 
                    type="password" 
                    name='confirmPassword' 
                    value={data.confirmPassword} 
                    onChange={changHandler} 
                    onFocus={tochHandler} />
                    {errors.confirmpassword  && touched.confirmPassword &&   <span>{errors.confirmpassword}</span>}
                </div>
               
                <div className={styles.formField}>
                    <div className={styles.checkboxContainer}>
                    <label> I accet terms of privacy policy</label>
                    <input 
                    type="checkbox" 
                    name='isAccepted' 
                    value={data.isAccepted} 
                    onChange={changHandler} 
                    onFocus={tochHandler} />
                    </div>
                    {errors.isAccepted && touched.isAccepted &&  <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type='submit'>Sign up</button>
                </div>
                
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;