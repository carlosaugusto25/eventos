import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import './style.css';
import { Link } from "react-router-dom";
import { NavBar } from "../../components/navbar";

export function RegisterEvent() {
    
    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const [usuarioEmail, setUsuarioEmail] = useState();

    
    const cadastrar = useCallback(async (e) => {

    },[])
    
    return (
        <>
            <NavBar />
            <div className="col-12">
                <div className="row">
                    <h3 className="mx-auto fw-bold">Novo evento</h3>
                </div>

                <form >
                    <div className="form-group">
                        <label>Título:</label>
                        <input type='text' className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Tipo do evento:</label>
                        <select className="form-control">
                            <option disabled selected value>-- Selecione um tipo --</option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Descrição do evento:</label>
                        <textarea className="form-control" rows='3' />
                    </div>

                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input type='date' className="form-control" />
                        </div>

                        <div className="col-6">
                            <label>Hora:</label>
                            <input type='time' className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Upload de foto:</label>
                        <input type='file' className="form-control" />
                    </div>

                    <button type="button" onClick={(e) => cadastrar(e)} className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" >Publicar evento</button>
                </form>

                <div className='msg-login text-center mt-2'>
                    {msgTipo === 'sucess' && <span><strong>Muito bom!</strong> Evento publicado! &#128526; </span>}
                    {msgTipo === 'fail' && <span><strong>Ops!</strong> Não foi possível publicar o evento! &#128546; </span>}
                </div>
            </div>
        </>
    )
}