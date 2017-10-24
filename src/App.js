import React, { Component } from 'react';
import './App.css';
import Modal from './Modal.js';

class App extends Component 
{
	constructor(props) {
	  super(props);
		this.state = { items: [] };
  }
	
  componentDidMount() {
	fetch('/collection/ailvara?grouped=false')
		.then(result=>result.json())
		.then(items=>this.setState({items}))
  }
	
	toggleModal = (game) => {
    this.setState({
      isOpen: !this.state.isOpen,
			activeGame: game
    });
  }

  render() {
    return (
      <div className="game-list">
				{this.state.items.map(game => 
					<div key={game.gameId} className="list-item">
						<img src={game.thumbnail} alt={game.name} className="list-thumbnail" onClick={() => this.toggleModal(game)}/>
					</div>
				)}
				<Modal show={this.state.isOpen} onClose={this.toggleModal} game={this.state.activeGame}/>
			</div>
			
    );
  }
}

export default App;
