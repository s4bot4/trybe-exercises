import React, { Component } from "react"
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
        <div>
            <p>
            <Link to="/">Voltar para a Home</Link>
               About
            </p>
        </div>
        )
    }
}
export default Home