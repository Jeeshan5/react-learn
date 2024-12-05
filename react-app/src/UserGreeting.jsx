function UserGreeting(props){
    
const welcome=<h2 className="welcome">Welcome {props.username}</h2>
const loginprompt= <h2 className="invalid">Invalid user</h2>


return(props.isLoggedIn ?welcome: loginprompt);
   
  
}

export default UserGreeting