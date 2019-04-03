import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import Todolist from './Todolist';

ReactDOM.render(
    <div style={{padding:20+'px'}}>
        <Counter />
        <Todolist />
    </div>,
    document.getElementById('root')
);
