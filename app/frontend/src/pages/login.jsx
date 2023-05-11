import { useEffect, useState } from "react";
import styles from "../styles/login.module.scss";
import logoDell from "../Assets/Dell.png";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [ typePass, setTypePass ] = useState("password");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    const verifyPass = () => {
        if(typePass === "password"){
            setTypePass("text");
        }else{
            setTypePass("password");
        }
    }

    const submit = () => {
        console.log(email, password)
        if(email === "admin" && password === "admin"){
            navigate("/feedProject")
        } else {
            window.alert("Email ou senha incorretos")
        }
    }



  return (
    <>
      <div className={styles.bodyLogin}>
        <div className={styles.logoDell}>
            <img src={logoDell}></img>
        </div>

        <div className={styles.inputsLogin}>
            <input type="text" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
        </div>

        <div className={styles.inputsLoginPassWord}>
            <input type={typePass} placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
            <i onClick={() => {verifyPass()}} class="fa-regular fa-circle fa-2x"/>
        </div>

        <div className={styles.btnLogin}>
            <button onClick={() => {submit()}}>Entrar</button>
        </div>
      </div>
    </>
  )
}

export default Login;