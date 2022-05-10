import { useCallback, useState } from 'react';
import './style.css';
import { auth } from '../../config/firebase';
import { Link } from 'react-router-dom';
import { NavBar } from '../../components/navbar';

export function RecoveryPassword() {
    
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    const recoveryPassword = useCallback(async(e) => {
        try {
            const aut = await auth.sendPasswordResetEmail(email)
            setMsg('Enviamos um link no seu email para você redefinir sua senha.')
        } catch {
            setMsg('Verifique se o email está correto.')
        }
    },[])
    
    return(
        <>
            <NavBar />
            <div className='form-cadastro'>
                <form className='text-center form-login mx-auto mt-5'>
                    <h1 className='mb-4 fw-bold'>Recuperar senha</h1>
                    <input type="email" className='form-control my-2' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}} />

                    <div className='msg my-4 text-center'>
                        <span>{msg}</span>
                    </div>

                    <button onClick={(e) => recoveryPassword(e)} type='button' className='btn btn-lg btn-block btn-enviar' >Recuperar senha</button>
                </form>
            </div>
        </>
    );
}