import React,{useState} from 'react';
// import { useHistory } from "react-router-dom";


const Register=()=>{
    // const history = useHistory();
    const [userRegistration,setUserRegistration]=useState({
     userName:"",
     contact:"",
     email:"",
     password:"",
    })
    const [error,setError]=useState({  
    userName:"",
    contact:"",
    email:"",
    password:"",});

  const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserRegistration({...userRegistration,[name]:value})    
    }

const handleValidation=()=>{
    let isFormValid=true;
   
  if(!userRegistration.userName){
      isFormValid=false;
      error.userName="Cannot be empty"
     
  }
  if(!userRegistration.contact){
      isFormValid=false;
      error.contact='Cannot be empty'
      
  }
  if(typeof userRegistration.contact !==undefined){
      if(!userRegistration.contact.match(/@"^[0-9]{10}$"/)){
          error.contact='10 digits only'
      }
  }
  if(!userRegistration.email){
      isFormValid=false;
      error.email='Cannot be empty'
  }
  if(typeof userRegistration.email !==undefined){
      if(!userRegistration.email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
          isFormValid=false
          error.email="Please enter valid email"
      }
  }

  if(!userRegistration.password){
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
        alert("formSubmiteed" +userRegistration.userName+" "+userRegistration.contact+" "+userRegistration.email+" "+userRegistration.password)
      
    }
    else{
        alert("formNot")
    }

}
    return (
        <form style={{padding:'30px'}} onSubmit={onSubmit}>

        <h3>Log in</h3>
        <div className="form-group">
            <label>Name</label>
            <input type="text" name='userName' className="form-control" placeholder="Enter name" value={userRegistration.userName} onChange={handleInput}/>
            <span style={{color:"red"}}>{error.userName}</span>
        </div>
        <div className="form-group">
            <label>Contact No</label>
            <input type="text" name="contact"  className="form-control" placeholder="Enter contact number" value={userRegistration.contact} onChange={handleInput}/>
            <span style={{color:"red"}}>{error.contact}</span>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" name='email' className="form-control" placeholder="Enter email" value={userRegistration.email} onChange={handleInput}/>
            <span style={{color:"red"}}>{error.email}</span>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" name='password' className="form-control" placeholder="Enter password" value={userRegistration.password} onChange={handleInput}/>
            <span style={{color:"red"}}>{error.password}</span>
        </div>

       

        <button type="submit" className="btn btn-dark btn-lg btn-block" style={{marginTop:'5px'}}>Register</button>
        <p className="forgot-password text-right">
            Already have a account<a href="login"> Login?</a>
        </p>
    </form>
    )
}

export default Register;