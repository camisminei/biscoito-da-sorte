import React, { Component } from "react";
import Button from "./component/Button";
import './style/biscoito.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
    this.phrase = ['Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.']

    this.quebrabiscoito = this.quebrabiscoito.bind(this)
  }

  quebrabiscoito() {
    let state = this.state
    let numeroaleatorio = Math.floor(Math.random() * this.phrase.length)

    state.text = `"${this.phrase[numeroaleatorio]}"`
    this.setState(state)

  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" />
        <Button nome="Abrir Biscoito" actionbtn={this.quebrabiscoito} />
        <h3 className="txt">{this.state.text}</h3>
      </div>
    )
  }
}

export default App;
