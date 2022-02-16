import React ,{useState} from 'react';

const SignUp = () => {
    const [data , setData]=useState({
        name : "",
        email : "",
        password : "",
        confirmPassword: "",
        isAccepted : false
    })
    const changHandler = event=>{
        if(event.target.name === 'isAccepted'){
            setData({ ...data , [event.target.name] : event.target.checked})
        }else { 
            setData({ ...data , [event.target.name] : event.target.value})
        }

    }
    return (
        <div>
            <form>
                <h2>Sign Up</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' value={data.name} onChange={changHandler} />
                <div>
                <div>
                    <label>Email</label>
                    <input type="email" name='name' value={data.email} onChange={changHandler} />
                </div>
                    <label>Password</label>
                    <input type="password" name='password' value={data.password} onChange={changHandler} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={changHandler} />
                </div>
               
                <div>
                    <label> I accet terms of privacy policy</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changHandler} />
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