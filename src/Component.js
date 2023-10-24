import './App.css';
import React from "react";
import { connect } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./Action";
import store from './store';

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            username:'',
            name:'',
            email:'',
            mobile:''
        }
        this.toggleButton = true

    }

    handle = (e) => {
        this.setState({
            username: e.target.value,
            
        })
    }

    handle2 = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    handle3 = (e) => {
        this.setState({
            email: e.target.value,
            
        })
    }
    handle4 = (e) => {
        this.setState({
            
            mobile: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.props.state.todo.some(item => item.id === this.state.id)) {
            if (this.state.username !== '' ||this.state.name !== ''  || this.state.email !== '' || this.state.mobile !== '') {
                store.dispatch(addTodo({ username: this.state.username,name:this.state.name,email:this.state.email,mobile:this.state.mobile}))
            } else {
                alert("please enter something.")
            }
        } else {
            store.dispatch(editTodo(this.state.id, this.state.username,this.state.name,this.state.email,this.state.mobile))
        }
        this.setState({
            username: "",
            name:'',
            email:'',
            mobile:''
        })
        this.toggleButton = (true)

    }

    handleDelete = (id) => {
        store.dispatch(deleteTodo(id))
    }

    showData = (item) => {
        this.setState({
            id: item.id,
            username: item.username,
            name:item.name,
            email:item.email,
            mobile:item.mobile
        })
        this.toggleButton = (false)

    }

    render() {
        let { all_todos } = this.props;
        return (
            <>
                <h5>ToDo App</h5>
                <form>
                    <lable> <b>username:</b> <input type="text" value={this.state.username} onChange={(e) => this.handle(e)} /> </lable><br/>
                    <lable> <b>Name:</b> <input type="text" value={this.state.name} onChange={(e) => this.handle2(e)} /> </lable>

                    <lable> <b>Email:</b> <input type="email" value={this.state.email} onChange={(e) => this.handle3(e)} /> </lable><br/>
                    <lable> <b>MObile</b> <input type="number" value={this.state.mobile} onChange={(e) => this.handle4(e)} /> </lable>
                    

                    {
                        this.toggleButton ?
                            <button  type="submit" onClick={this.handleSubmit}> Add </button> :
                            <button  onClick={this.handleSubmit}> save data </button>

                    }

                </form>
             
                <ul>
                    {all_todos.map((item) => <li key={item.id}>
                        <tr>
                            <td>{item.username}</td><br/>
                            <td>{item.name}</td><br/>
                            <td>{item.email}</td><br/>
                            <td>{item.mobile}</td><br/>
                            <td><button  onClick={() => this.handleDelete(item.id)}> Delete </button></td> 
                       <td><button onClick={() => this.showData(item)}> Edit data </button></td>
                        </tr>
                      
                    </li>)}

                </ul>

            </>
        )
    }
}
function mapStateToProp(state) {
    
    return {
        all_todos: state.todo,
        state: state
      
    }
  
}
const mapDispatchToProp = {
    addTodo,
    editTodo,
    deleteTodo
}

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
