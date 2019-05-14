import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Content from '../components/Content/Content';


class App extends Component {

  constructor(){
    super();
    this.state={
      selectedSize: ''
    }
  }
  changeSize = (size) => {
    this.setState({
      selectedSize: size
    })
  }
  render(){
    return (
      <div >
        <Navigation />
        <Content size={this.state.selectedSize} changeSize={this.changeSize} />             
      </div>
    )
  }
}

export default App;
