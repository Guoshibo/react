import React, { Component } from 'react';
import store from './store';

//store连接action和reducer的一个对象
//action是一个对象，描述state的变化
//reducer定义了如何响应action描述的state的变化，并发送到store
export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().Counter
        }
        store.subscribe(()=>{
          this.setState({
                num:store.getState().Counter
            })
        });
    }
    handleAdd=()=>{
        let action = {type:'add'};
        store.dispatch(action);
        // console.log(store.getState().Counter);
    }
    handleDec=()=>{
      let action = {type:'dec'};
      store.dispatch(action);
    }
    handleOdd=()=>{
      let action = {type:'add'};
      if(store.getState().Counter%2!==0){
        store.dispatch(action);
      }
    }
    handleAsync=()=>{
      let action = {type:'add'};
      setTimeout(function(){
        store.dispatch(action);
      },1000)
    }
  render() {
    return (
      <div>
        <p>
            Clicked:<span>{this.state.num}</span>
            <br/>
            <button onClick={this.handleAdd}>
              +
            </button>
            <button onClick={this.handleDec}>
              -
            </button>
            <button onClick={this.handleOdd}>
              Increment if odd
            </button>
            <button onClick={this.handleAsync}>
              Increment async
            </button>
        </p>
      </div>
    )
  }
}
