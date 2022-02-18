export const valiDate = (data , type) =>{
    const errors ={};
    
    if(!data.email){
        errors.email = "Email is required"

    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email ="Email address is invalid"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password ="Password is required"
    } else if(data.password.length < 6){
        errors.password ="Password need to be 6 character or more"

    }else{
        delete errors.password
    }
   
   
    if(type === "signup"){
        if(!data.name.trim()){
            errors.name = "Name is required"
    
        }else{
            delete errors.name
        }
        if(!data.confirmPassword){
            errors.confirmpassword = "Confrim the Password"
    
        }else if (data.confirmPassword !== data.password){
            errors.confirmpassword = "Password do not match"
    
    
        }else{
            delete errors.confirmpassword
        }
        
        if(!data.isAccepted){
            errors.isAccepted ="Accept our regulations"
    
        }else{
            delete errors.isAccepted
        }

    }
  
    return errors
}