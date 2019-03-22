import React, { Component } from 'react';
import './App.css';

import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Clock   from './components/Clock';
import Toggle  from './components/Toggle';
import NameForm  from './components/NameForm';
import Calculator from './components/Calculator';
import Fetch1 from './components/Fetch1';

const name = 'Leandro S C';
const element = <h1>Hello, {name}</h1>;

const comment = {
	author: {
		name: 'Marco & Roseli',
		avatarUrl: 'https://cdnstatic8.com/mapanamao.com.br/wp-content/uploads/2018/08/blog-de-viagens-mapa-na-mao-o-que-fazer-em-paraty.jpg',
	},
	// date: new Date(), // this causes erro, must call toString
	date: new Date().toString(),
	//date: 'Thu Mar 21 2019 08:59:06 GMT-0300 (-03)',
};

let user = {
	name: 'Leonardo',
	age: 27,
};

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			{element}
        </header>
		<Welcome user={user} />
		<Comment author={comment.author} date={comment.date} />
		<Clock />
		<Toggle />
		<ul>{listItems}</ul>
		<NameForm />
		<Calculator />
		<Fetch1 />
      </div>
    );
  }
}

export default App;
