import { useSelector } from 'react-redux';
import { NavBar } from '../../components/navbar'; 
import './style.css';

export function Home() {
    return(
        <>
        <NavBar/>
        <h1>{useSelector(state => state.usuarioEmail)}</h1>
        <h1>{useSelector(state => state.usuarioLogado) ? 'logado' : 'não logado'}</h1>
        </>
    );
}