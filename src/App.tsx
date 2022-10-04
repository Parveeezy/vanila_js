import React from 'react';
import './App.css';

function App() {

    const names = ['Parviz', 'Nisso', 'Parisa', 'Latif']
    const users = [
        {id: 1, name: 'Parviz'},
        {id: 2, name: 'Nisso'},
        {id: 3, name: 'Parisa'},
        {id: 4, name: 'Latif'}
    ]

    return (
        <div className="App">
            <ul>
                {names.map((n, i) => (<li key={i}>{n}</li>))}
            </ul>
            <ul>
                {users.map(u => (<li key={u.id}>{u.name}</li>))}
            </ul>
        </div>
    );
}

export default App;
