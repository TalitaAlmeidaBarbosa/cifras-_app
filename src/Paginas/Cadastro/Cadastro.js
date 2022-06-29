import React, { Component } from "react";
import axios from 'axios';
import './Cadastro.css';
import Main from '../../Components/Template/Main';

const title = "Login";

const urlAPI = "http://localhost:5000/api/login";
const initialState = {
    login: { id: 0, email: '', senha: ''},
    lista: []
}

export default class Login extends
    Component {

        state = { ...initialState}

        componentDidMount() {
            axios(urlAPI).then(resp => {
                this.setState({ lista: resp.data })
            })
        }

        limpar() {
            this.setState({ login: initialState.login });
        }
    
        salvar() {
            const login = this.state.login;
            login.email = Number(login.email);
            const metodo = login.id? 'put' : 'post';
            const url = login.id? `${urlAPI}/${login.id}` : urlAPI;
    
            axios[metodo](urlAPI, login)
                .then(resp => {
                    const lista = this.getListaAtualizada(resp.data)
                    this.setState({ login: initialState.login, lista })
                })
        }
    
        getListaAtualizada(login, add = true) {
            const lista = this.state.lista.filter(a => a.id !== login.id);
            if (add) lista.unshift(login);
            return lista;
        }
    
        atualizaCampo(event) {
            //clonar usuário a partir do state, para não alterar o state diretamente
            const login = { ...this.state.login };
            //usar o atributo NAME do input identificar o campo a ser atualizado
            login[event.target.email] = event.target.value;
            //atualizar o state
            this.setState({ login });
        }
    
        carregar(login) {
            this.setState({ login })
        }
    
        remover(login) {
            const url = urlAPI + "/" + login.id;
            if (window.confirm("Confirma remoção do aluno: " + login.email)) {
                console.log("entrou no confirm");
                axios['delete'](url, login)
                    .then(resp => {
                        const lista = this.getListaAtualizada(login, false)
                        this.setState({ login: initialState.login, lista })
                    })
            }
        }

    renderForm() {
        return (
            <div className="container-login">

                <label> Email: </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Digite seu E-mail"
                    className="form-input"
                    name="email"
                    value={this.state.login.email}
                    onChange={e => this.atualizaCampo(e)}
                />

                <label> Senha: </label>
                <input
                    type="text"
                    id="senha"
                    placeholder="Digite sua senha"
                    className="form-input"
                    name="senha"
                    value={this.state.login.senha}
                    onChange={e => this.atualizaCampo(e)}
                />

                <button className="btnSalvar"
                    onClick={e => this.salvar(e)} >
                    Salvar
                </button>

                <button className="btnCancelar"
                    onClick={e => this.limpar(e)} >
                    Cancelar
                </button>

            </div>
        )
    }

    render() {
        return (
            <Main title={title}>
                {this.renderForm()}
            </Main>
        )
    }
}

