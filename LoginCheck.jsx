
function LoginCheck(Logged){

const LoggedIn =   
<div className="LoggedIn"> 
<p> You are logged in !</p>
</div> 

const NotLoggedIn =         <div className="NotLoggedIn"> 
<p>You are not logged in !</p>
</div>

    return(
<>
        {Logged.isLoggedIn ? LoggedIn : NotLoggedIn }
</>
    );
}

export default LoginCheck