import React , {userState, useState} from 'react';
const  UserForm = (props) =>{
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("");  



const createUser =(e) =>{
    e.preventDefault();
    const newUser = { firstname,lastname,email,password,cpassword};
}
return(
    <>
    <form onSubmit={createUser}>
        <div>
            <label>Firstname     </label>
            <input type="text" onChange={(e) =>setFirstname(e.target.value)}></input>
        </div>
        <div>
        <label>Lastname </label>
            <input type="text" onChange={(e) =>setLastname(e.target.value)}></input>
        </div>    
        <div>
        <label>Email </label>
            <input type="text" onChange={(e) =>setEmail(e.target.value)}></input>
        </div>
        <div>
        <label>password</label>
        <input type="password" onChange={(e) =>setPassword(e.target.value)}></input>
        </div>
        <div>
        <label>confirm password</label>
        <input type="password" onChange={(e) =>setCpassword(e.target.value)}></input>
        </div>
    </form>
    <p>name: {firstname} {lastname}</p>
    <p>Email: {email}</p>
    <p>password:*****</p>
    </>
)
}
export default UserForm;