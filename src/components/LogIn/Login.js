import React, { useState } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import './login.css';
import avatar from '../../assets/avatar.png';


 
 function Login (){
     
     const [username,setUsername] = useState("");
     const [password,setPassword] = useState("");
     function handleSubmit(event){
        event.preventDefault();
     }
     function postUser(username,password){
         window.location.reload();
        console.log(100000);
        const user = {
            username:username,
            password:password
        }
        axios.post('http://localhost:4000/posts', user )
        .then(res=>{
            console.log(user);
        })
     }

     
     
    return(
        <body>
            <div className='imgcontainer'>
                <img className="resize" src={avatar} alt= "Logo" ></img>
            </div>
            <div className="container">
                <form onSubmit= {handleSubmit}>
                    <myInput/>
                    <label className="uname"><b>Username or Email</b></label><br/>
                    <input type='text' value={username} name='username' placeholder='Enter your username/email' onFocus="this.placeholder=''" onInput={(e)=>setUsername(e.target.value)} ></input><br/>
                    <label className="uname"><b>Password</b></label><br/>
                    <input type='password' value={password} name = 'password' placeholder='Enter your password' onFocus="this.placeholder=''" onInput={(e)=>setPassword(e.target.value)} onSubmit="this.placeholder=''"></input><br/>
                    <button className='btn'  type="button" onClick={()=>postUser(username,password) }>
                        Login
                    </button>
                </form>
            </div>
            

        </body>
    )
}
export default Login;
