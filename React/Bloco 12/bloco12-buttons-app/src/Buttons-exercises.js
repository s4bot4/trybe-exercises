import React from 'react';

class Hello extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleButtonOne() {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
React*/
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1
    }), () => {
      // Aqui imprimimos a cor no console após o setState atualizar
      // a quantidade de clicks no botão
      console.log(`Botão 1: ${this.changeColorBtn(this.state.clicksBtnOne)}`);
    });

  }

  handleButtonTwo() {
    this.setState((estadoAnterior, _props) => ({
      clicksBtnTwo: estadoAnterior.clicksBtnTwo + 1
    }));
    console.log('"this" do botão 2 :', this);
  }

  handleButtonThree() {
    this.setState((estadoAnterior, _props) => ({
      clicksBtnThree: estadoAnterior.clicksBtnThree + 1
    }));
    console.log('"this" do botão 3 :', this);
  }

  changeColorBtn(num) {
    return num % 2 === 0 ? 'gray' : 'white';
  }
  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return (
      <div>
        <button onClick={this.handleButtonOne}
          // Para renderizarmos as cores, precisamos acrescentar a função
          // que contém a nossa lógica ao "inline style", passando o estado
          // correspondente como parâmetro
          style={{ backgroundColor: this.changeColorBtn(clicksBtnOne) }}
        > Botão 1 - atulizando clicks ={this.state.clicksBtnOne}</button>
        <button onClick={this.handleButtonTwo}
          style={{ backgroundColor: this.changeColorBtn(clicksBtnTwo) }}
        > Botão 2 - atulizando clicks =  {this.state.clicksBtnTwo}</button>
        <button onClick={this.handleButtonThree}
          style={{ backgroundColor: this.changeColorBtn(clicksBtnThree) }}
        >Botão 3 - atulizando clicks = {this.state.clicksBtnThree}</button>
      </div>
    );

  }
}
export default Hello;
