import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Content from '../components/Content/Content';


class App extends Component {

  constructor(){
    super();
    this.state={
      selectedSize: '',
      cart:{
        sNumber:0,
        mNumber:0,
        lNumber:0
      }
    }
  }
  changeSize = (size) => {
    this.setState({
      selectedSize: size
    })
  }
  addCart = (size) => {
    const sNumber=this.state.cart.sNumber;
    const mNumber=this.state.cart.mNumber;
    const lNumber=this.state.cart.lNumber;
      if(size==='s'){
        this.setState(Object.assign(this.state.cart,{sNumber: sNumber+1}))
      }
      if(size==='m'){
        this.setState(Object.assign(this.state.cart,{sNumber: mNumber+1}))
      }
      if(size==='l'){
        this.setState(Object.assign(this.state.cart,{sNumber: lNumber+1}))
      }
    }
  render(){
    return (
      <div >
        <Navigation cart={this.state.cart}/>
        <Content size={this.state.selectedSize}  changeSize={this.changeSize} addCart={this.addCart} />             
      </div>
    )
  }
}

export default App;
