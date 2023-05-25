import { useState } from "react";
import styles from "../styles/login.module.scss";
import logoDell from "../Assets/Dell.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import userService from "../services/userService";

const Login = (props) => {
    const cookies = new Cookies();

    const [ typePass, setTypePass ] = useState("password");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ alreadySSO, setAlreadySSO ] = useState(false);

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
        userService.auth(email, password).then((response) => {
            console.log(response)
            if(response.status === 200){
                cookies.set('token', response.data.access_token, { path: '/' })
                navigate("/feed/contents")
            } else {
                toast.error("Email ou senha incorretos")
            }
        }).catch((error) => {
            console.log(error)
            toast.error("Email ou senha incorretos")
        })
        // axios.post("http://localhost:3001/v1/user/auth", {
        //     email: email,
        //     password: password
        // }).then((response) => {
        //     console.log(response)
        //     if(response.status === 200){
        //         cookies.set('token', response.data.access_token, { path: '/' })
        //         navigate("/feed/contents")
        //     } else {
        //         toast.error("Email ou senha incorretos")
        //     }
        // }).catch((error) => {
        //     console.log(error)
        //     toast.error("Email ou senha incorretos")
        // })
    }



  return (
    <>
      <div className={styles.bodyLogin}>
        <div className={styles.logoDell}>
            <img src={logoDell} alt="logo" />
        </div>

        { alreadySSO ?
            <>
                <div className={styles.inputsLogin}>
                    <input type="text" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
                </div>

                <div className={styles.inputsLoginPassWord}>
                    <input type={typePass} placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
                    {
                        typePass === "password" ?
                        <i onClick={() => {verifyPass()}} class="fa-regular fa-circle fa-2x"/>
                        :
                        <i onClick={() => {verifyPass()}} class="fa-solid fa-circle fa-2x"/>
                    }
                </div>

                <div className={styles.btnLogin}>
                    <button onClick={() => {submit()}}>Entrar</button>
                </div>
            </> : 
            <>
                <div className={styles.btnSSO}>
                    <button onClick={() => {setAlreadySSO(true)}}>Entrar com Dell</button>
                </div>
            </>
        }
        <ToastContainer style={{ fontSize: "14pt" }}/>
      </div>
    </>
  )
}

export default Login;