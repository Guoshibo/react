import {combineReducers} from 'redux';

let Counter = (state = 0,action)=>{
    switch(action.type){
        case 'add':
            return state + 1;
        case 'dec':
            return state - 1;
        default:
            return state;
    }   
}

let initValue = {
    list:[1,2,3]
}
let Todolist = (state = initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let addState = JSON.parse(JSON.stringify(state));//先把state解析成一个字符串，在转变成一个JSON对象
            // let obj = Object.assign({},state,{a:100})
            addState.list.push(action.value);
            return addState;
        case 'del_item':
            let delState = JSON.parse(JSON.stringify(state));//先把state解析成一个字符串，在转变成一个JSON对象
            delState.list.splice(action.value.index,1);
            return delState;
        default :
            return state;
    }   
}

export default  combineReducers({
    Counter,
    Todolist
})