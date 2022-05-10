import { useCallback, useState } from 'react'
// import firebase from '../../config/firebase';
import { auth } from '../../config/firebase'
import 'firebase/compat/auth';
import './style.css';
import { NavBar } from '../../components/navbar';

export function NewUser() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [finalyProcess, setFinalyProcess] = useState();
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const register = useCallback(async () => {
        setFinalyProcess(null);
        setLoading(true)

        if (!email || !password) {
            setFinalyProcess('erro')
            setMsg('Você precisa informar o e-mail e senha para realizar o cadastro!')
            setLoading(false);
            return;
        }

        try {
            const register = await auth.createUserWithEmailAndPassword(email, password);
            setFinalyProcess('sucess')
            setLoading(false)
        } catch (e) {
            setFinalyProcess('erro')
            // alert(e.message)
            switch (e.message) {
                case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                    setMsg('A senha deve ter pelo menos 6 caracteres');
                    break;
                case 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).':
                    setMsg('Este e-mail já está sendo utilizado por outro usuário!');
                    break;
                case 'Firebase: The email address is badly formatted. (auth/invalid-email).':
                    setMsg('O formato do seu e-mail é inválido!');
                    break;
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                    break;
            }
            setLoading(false)
        }

    }, [email, password])

    return (
        <>
        <NavBar />
        <div className='form-new-user'>
            <form className='text-center form-login mx-auto mt-5'>

                <h1 className='h3 mb-3 text-black fw-bold'>Cadastro</h1>

                <input onChange={(e) => { setEmail(e.target.value) }} type="email" className='form-control my-2' placeholder='E-mail' />
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" className='form-control my-2' placeholder='Senha' />

                {
                    loading
                    ?
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <button onClick={register} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>CADASTRAR</button>
                }
                

                <div className='text-black msg-login text-center my-3'>
                    {finalyProcess === 'sucess' && <span><strong>SHOW!</strong> Cadastro realizado com sucesso! &#128526; </span>}
                    {finalyProcess === 'erro' && <span><strong>Opa!</strong> {msg} &#128546; </span>}
                </div>

            </form>
        </div>
        </>
    );
}