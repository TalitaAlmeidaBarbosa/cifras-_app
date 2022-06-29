import React, { Component } from 'react';
import axios from 'axios';
import './Genero.css';
import Main from '../Template/Main';
import Lupa from '../../Assets/Template/lupa.png'
import Header from '../Template/Header';

const title = "Encontre seu Gênero";

const urlAPI = "http://localhost:5001/api/genero";
const initialState = {
    genero: { idGenero: 0, nomeGenero: '', qtdDeCifras: 0 },
    lista: [],
    pesquisa: '',
    valorPesquisa: ''
}

export default class Genero extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    limpar() {
        this.setState({ genero: initialState.genero });
    }

    etListaAtualizada(genero, add = true) {
        const lista = this.state.lista.filter(a => a.id !== genero.idGenero);
        if (add) lista.unshift(genero);
        return lista;
    }

    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const genero = { ...this.state.genero };
        //usar o atributo NAME do input identificar o campo a ser atualizado
        genero[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ genero });
    }

    carregar(genero) {
        this.setState({ genero })
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
                            <th className="tabTituloCantor">Gênero</th>
                            <th className="tabTituloqtd">Quantidade de Cifras</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.lista.filter((a) => a.nomeGenero.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(this.state.pesquisa.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())).map(
                            (genero) =>
                                <tr key={genero.idGenero}>
                                    <td>{genero.nomeGenero}</td>
                                    <td>{genero.qtdDeCifras}</td>
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