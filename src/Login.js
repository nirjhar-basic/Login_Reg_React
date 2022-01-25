import React, { useState } from "react";

const Login =()=>{
    const [userLogin,setUserLogin]=useState({
       
        email:"",
        password:"",
       })
       const [error,setError]=useState({  
    
       email:"",
       password:"",});
   
     const handleInput=(e)=>{
           const name=e.target.name;
           const value=e.target.value;
           setUserLogin({...userLogin,[name]:value})    
       }
   
   const handleValidation=()=>{
       let isFormValid=true;
      
     if(!userLogin.email){
         isFormValid=false;
         error.email='Cannot be empty'
     }
     if(typeof userLogin.email !==undefined){
         if(!userLogin.email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
             isFormValid=false
             error.email="Please enter valid email"
         }
     }
   
     if(!userLogin.password){
         error.password='Cannot be empty'
     }
     setError({...error})
     setTimeout(()=>{
       setError({})
   },3000)
     return isFormValid;
         
   }
   const onSubmit=(e)=>{
       e.preventDefault();
       if(handleValidation()){
           alert("formSubmiteed")
         
       }
       else{
           alert("formNot")
       }
   
   }
       return (
           <form style={{padding:'30px'}} onSubmit={onSubmit}>
   
           <h3>Log in</h3>
           
           <div className="form-group">
               <label>Email</label>
               <input type="email" name='email' className="form-control" placeholder="Enter email" value={userLogin.email} onChange={handleInput}/>
               <span style={{color:"red"}}>{error.email}</span>
           </div>
   
           <div className="form-group">
               <label>Password</label>
               <input type="password" name='password' className="form-control" placeholder="Enter password" value={userLogin.password} onChange={handleInput}/>
               <span style={{color:"red"}}>{error.password}</span>
           </div>
   
          
   
           <button type="submit" className="btn btn-dark btn-lg btn-block" style={{marginTop:'5px'}}>Login</button>
           
       </form>
       )

}
export default Login;