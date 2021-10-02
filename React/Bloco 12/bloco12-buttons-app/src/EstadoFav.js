import React from "react";

class EstadoFav extends React.Component {
  render () {
 /* A função que altera o estado do componente pai chega
       ao componente filho via `props`! */ 
    const { value, handleChange } = this.props
// gerando log de erro
let error = undefined
if (value.length > 120) error = 'Texto muito grande';

      return(
        <label>
          Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <br />
        <textarea
          name="estadoFavorito"
 // props usada para transmitir as mudanças para o state no componente pai
          value={value} 
          onChange={handleChange} 
        />
       <span>{error ? error: ''}</span> 
        </label>
    )
  }
}

export default EstadoFav;