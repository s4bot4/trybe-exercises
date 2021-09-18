import React from 'react';

class Mylove extends React.Component {
    render() {
        const myNewLove = (love) => {
            return `Estou amando o ${love}`
         } 
        return (
           <span>
             {myNewLove('React')}
           </span>
        )
    }
} 
export default Mylove 
export{ myNewLove }