import React , {userState, useState} from 'react';

const UserForm= (props) =>{
    const [firstname,setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname,setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email,setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password,setPassword] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [cpassword,setCpassword] = useState("");
    const [cpasswordError,setCpasswordError] = useState("");


    const createUser =(e) =>{
        e.preventDefault();
        const newUser = { firstname,lastname,email,password,cpassword};
    }

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length >= 2) {
            setFirstnameError("");
        }
         else if(e.target.value.length < 3) {
            setFirstnameError("Title must be 3 characters or longerthat field must be at least 2 characters.!");
        
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameError("that field must be at least 2 characters.");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError("the field must be at least 5 characters.");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 2) {
            setPasswordError("at least 8 characters.");
        }
    }
    // const handleCpassowrd = (e) => {
    //     setCpassword(e.target.value);
    //     if(e.target.value.length < 2) {
    //         setCpasswordError("at least 8 characters.");
    //     }
    // }
    const handleCpassowrd = (e) => {
        setCpassword(e.target.value);
        if(cpassword==password) {
            setFirstnameError("");
        }
         else if(cpassword!==password) {
            setCpasswordError("passwords must be matched");
        
        }
    }
    


    return(

        <form onSubmit={createUser}>
       <div>
                <label>firstname: </label>
                <input type="text" onChange={ handleFirstname } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Lastname: </label>
                <input type="text" onChange={ handleLastname } />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>  
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>CONFIRM PASSWORD: </label>
                <input type="text" onChange={ handleCpassowrd } />
                {
                    cpasswordError ?
                    <p style={{color:'red'}}>{ cpasswordError }</p> :
                    ''
                }
            </div>
        </form>
        
    )

}


export default UserForm;