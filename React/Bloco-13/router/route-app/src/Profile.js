import React, { Component } from "react";

class Profile extends Component {
    render() {
        const { dog } = this.props.match.params
        return (
            <>
            <h1>Meu perfil: {this.props.name}</h1>
            <ol>
                <li>DJ</li>
                <li>Estudante de desenvolvimento</li>
                <li>Editor de áudio</li>
                <li>Minha cachorra {dog}</li>
            </ol>
            </>
        )
    }
}

export default Profile