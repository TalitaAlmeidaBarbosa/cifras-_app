import React, { Component } from 'react';
import axios from 'axios';
import './Musica.css';
import Main from '../Template/Main';
import Lupa from '../../Assets/Template/lupa.png'
import Header from '../Template/Header';

const title = "Encontre sua Música";

const urlAPI = "http://localhost:5001/api/musica";
const initialState = {
    artista: { idCantor: 0, nomeCantor: '', qtdDeCifras: 0 },
    lista: [],
    pesquisa: '',
    valorPesquisa: ''
}

export default class Artista extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    limpar() {
        this.setState({ curso: initialState.artista });
    }

    etListaAtualizada(artista, add = true) {
        const lista = this.state.lista.filter(a => a.id !== artista.idCantor);
        if (add) lista.unshift(artista);
        return lista;
    }

    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const artista = { ...this.state.artista };
        //usar o atributo NAME do input identificar o campo a ser atualizado
        artista[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ artista });
    }

    carregar(artista) {
        this.setState({ artista })
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
                            <th className="tabTituloCantor">Cantor</th>
                            <th className="tabTituloqtd">Quantidade de Cifras</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.lista.filter((a) => a.nomeCantor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(this.state.pesquisa.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())).map(
                            (artista) =>
                                <tr key={artista.idCantor}>
                                    <td>{artista.nomeCantor}</td>
                                    <td>{artista.qtdDeCifras}</td>
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