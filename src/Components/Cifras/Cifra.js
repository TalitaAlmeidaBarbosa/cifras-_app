import React, { Component } from 'react';
import axios from 'axios';
import './Cifra.css';
import Main from '../Template/Main';
import Lupa from '../../Assets/Template/lupa.png'
import { Link } from 'react-router-dom';
import Header from '../Template/Header';

const title = "Encontre sua Cifra";

const urlAPI = "http://localhost:5001/api/cifra";
const initialState = {
    cifra: { idCifra: 0, idCantor: 0, idGenero: 0, nomeMusica: '', letraEAcordes: '' },
    lista: [],
    pesquisa: '',
    valorPesquisa: ''
}

export default class Cifra extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    limpar() {
        this.setState({ cifra: initialState.cifra });
    }

    etListaAtualizada(cifra, add = true) {
        const lista = this.state.lista.filter(a => a.id !== cifra.idCifra);
        if (add) lista.unshift(cifra);
        return lista;
    }

    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const cifra = { ...this.state.cifra };
        //usar o atributo NAME do input identificar o campo a ser atualizado
        cifra[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ cifra });
    }

    carregar(cifra) {
        this.setState({ cifra })
    }

    pesquisar() {
        this.setState({ pesquisa: this.state.valorPesquisa })
    }

    renderPesquisa(props) {
        return (
            <div className="caixa">
                <input type="search" value={this.state.valorPesquisa} onChange={(evento) => this.setState({ valorPesquisa: evento.target.value })} id="texto" placeholder='Pesquisar'></input>
                <img src={Lupa} className="btn" onClick={() => this.pesquisar()}></img>
            </div>
        )
    }

    renderTable() {
        return (
            <div className="tituloListagem">
                <table className="listaCantor" id="tblListaCantor">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloCantor">Nome da Música</th>
                            <th className="tabTituloqtd">Letras e Acordes</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.lista.filter((a) => a.nomeMusica.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(this.state.pesquisa.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())).map(
                            (cifra) =>
                                <tr key={cifra.idCifra}>
                                    <td><Link to="/Musica">{cifra.nomeMusica}</Link></td>
                                    <td>{cifra.letraEAcordes}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div className="conteudo">
                <Main title={title}>
                    {this.renderPesquisa()}
                    {this.renderTable()}
                </Main>
            </div>

        )
    }
}