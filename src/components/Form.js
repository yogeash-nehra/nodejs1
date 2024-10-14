import {useState} from "react";


function Form(props) {
    const [username: string, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function usernameHandler(e):void{
        setUsername(e.target.value);
    }

    function passwordHandler(e):void {
        setPassword(e.target.value);
    }

    return(
        <div>
            <input name={'username'}
                   type={'text'}
                   placeholder={'Username'}
                   onChange={usernameHandler}
            />
            <p>Username: {username}</p>

            <input name={'password'}
            type={'password'}
            placeholder={'Password'}
            onChange={passwordHandler}/>
            <p>Password: {password}</p>

        </div>
    )

}

export default Form;