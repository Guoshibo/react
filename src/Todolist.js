import React, { Component } from 'react'
import store from './store';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state= {
            list:store.getState().Todolist.list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().Todolist.list
            })
        })
    }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            })
            e.target.value="";
        }     
    }
    handleDel=(f)=>{
        store.dispatch({
            type:'del_item',
            value:f
        })
    }
  render() {
    return (
      <div>
        <input onKeyDown={this.handleAdd} type='text'/><br/>
            <ul>
                {
                    this.state.list.map((item,index)=>(
                        <div>
                            <li key={index}>{item}&nbsp;&nbsp;&nbsp;<button onClick={()=>this.handleDel({index})}>删除</button></li>                
                        </div>
                    ))
                }
            </ul>
      </div>
    )
  }
}
