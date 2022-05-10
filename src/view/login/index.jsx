import { useCallback, useState } from 'react';
import './style.css';
import { auth } from '../../config/firebase';
import { Link, Navigate } from 'react-router-dom';
import { NavBar } from '../../components/navbar';
import { useSelector, useDispatch } from 'react-redux'
import { FaRegGrinWink } from 'react-icons/fa';

export function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLogged, setIsLogged] = useState('');

    const dispatch = useDispatch();

    const logar = useCallback(async () => {
        try {
            const aut = await auth.signInWithEmailAndPassword(email, password);
            setTimeout(() => {
                dispatch({ type: 'LOG_IN', usuarioEmail: email })
            }, 3000)
            setIsLogged('sucess')
        } catch(e) {
            setIsLogged('fail')
        }
    
    },[email, password])

    return (
        <>
        <NavBar />
        <div className="login-content d-flex align-items-center">
            {/* no lugar do redirect, usar o navigate */}
            { useSelector(state => state.usuarioLogado) ? <Navigate to='/'/> : null } 
        
            <main className="form-signin mx-auto text-center">
                <form>
                    <FaRegGrinWink color='white' fontSize='100px' />
                    <h1 className="h3 mb-3 fw-normal text-white fw-bold">LOGIN</h1>

                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control my-2" id="floatingInput" placeholder="E-mail" />
                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />

                    <button onClick={logar} className="w-100 btn btn-lg btn-login" type="button">Logar</button>

                    <div className='text-white msg-login text-center my-3'>
                        { isLogged === 'sucess' && <span><strong>WoW!</strong> Você está conectado! &#128526; </span> }
                        { isLogged === 'fail' &&  <span><strong>Ops!</strong> Verifique se usuário e senha estão corretos! &#128546; </span> }    
                    </div>

                    <div className='login-options mt-3'>
                        <Link to="/recovery-password" className='mx-2'>Recuperar senha</Link>
                        <span className='text-white'>&#9733;</span>
                        <Link to='newuser' className='mx-2'>Quero me cadastrar</Link>
                    </div>

                    <p className="mt-5 mb-3 text-muted">&copy; Carlos Dev</p>
                </form>
            </main>
        </div>
        </>
    )
}