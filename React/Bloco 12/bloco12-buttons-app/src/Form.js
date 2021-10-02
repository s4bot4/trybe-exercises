import React from "react";
import EstadoFav from "./EstadoFav";
import InputPadrao from "./InputPadrao";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    };
  }

//função que manipula o state
  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
                                                        {/* Função passada por props  */}
            <EstadoFav value={this.state.estadoFavorito} handleChange={this.handleChange} />
          </fieldset>
          <br />

          <fieldset>
            <legend>Informações pessoais</legend>
            <label>
              Nome
              <br />
              <input
                type="text"
                name="nome"
                value={this.state.nome}
                onChange={this.handleChange}
              />
            </label>
              <br />
              <InputPadrao
                name="email"
                id="email"
                description="Email"            
                value={email}
                handleChange={this.handleChange}
                type="email"
              />
            <br />
            <label>
              Idade
              <br />
              <input
                type="number"
                name="idade"
                value={this.state.idade}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <br />
          <fieldset>
            <label>
              Vai comparecer?
              <br />
              <input
                type="checkbox"
                name="vaiComparecer"
                value={this.state.vaiComparecer}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Enviar arquivos
              <input type="file" />
            </label>

            <label>
              Escolha sua palavra chave favorita:
              <select
                name="palavraChaveFavorita"
                value={this.state.palavraChaveFavorita}
                onChange={this.handleChange}
              >
                <option value="Componente">Componente</option>
                <option value="Estado">Estado</option>
                <option value="Evento">Evento</option>
                <option value="Props">Props</option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default Form;