import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem();
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }

//change 1
// export default connect(mapStateToProps, mapDispatchToProps)(App);

//change 2
// export default connect(mapStateToProps, {addItem})(App)

//we can go further, get rid of mapStateToProps(), and handle it all in one line
export default connect(state => ({ items: state.items}), {addItem})(App)
