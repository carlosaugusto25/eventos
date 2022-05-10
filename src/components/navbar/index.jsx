import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegGrinWink } from 'react-icons/fa';
import './style.css';

export function NavBar() {

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">
            {/* <span className="navbar-brand text-white fw-bold ms-3">Eventos</span> */}
            <FaRegGrinWink color='white' fontSize='30px' style={{marginLeft: '12px', marginRight: '6px'}} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#navbarToggleExternalContent' aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-mobile navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/'>Início</Link>
                    </li>

                    {
                        useSelector(state => state.usuarioLogado)
                            ?
                            <>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to='/register-event'>Publicar evento</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to=''>Meus eventos</Link></li>
                                <li className="nav-item"><button className="nav-link active button-logout" aria-current="page" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</button></li>
                            </>
                            :
                            <>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to='/newuser'>Cadastrar</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to='/login'>Login</Link></li>
                            </>
                    }

                </ul>
            </div>
        </nav>
    );
}