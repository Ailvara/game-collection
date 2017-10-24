import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      gameName: 'oj', //state property to hold item name
    }
	}
	
	openModalWithItem(item) {
       this.setState({
          openDeleteModal: true,
          activeItemName: item.name,
          activeItemId: item.id
       })
    }
	
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 400,
      margin: '0 auto',
      padding: 30
    };

		let game = this.props.game;
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
					<div className="modal-close" onClick={this.props.onClose}>x</div>
					<h2>{game.name}</h2>
					<img src={game.image} alt={game.name} className="modal-image"/>
					<div className="modal-content">
						Players: {game.minPlayers} - {game.maxPlayers} <br/>
						Rating: {game.averageRating} <br/>
					</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;