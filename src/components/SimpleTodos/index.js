import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, value: ''}

  updateItem = event => {
    const data = event.target.value
    this.setState({value: data})
  }

  addItem = () => {
    const {value, todosList} = this.state
    const array = value.split(' ')
    const lengths = array.length
    if (value !== '') {
      let number = array.slice(lengths - 1, lengths)
      number = parseInt(number)
      let text = array.slice(0, lengths - 1)
      text = text.join(' ')
      let i = 0
      let newInitialTodosList = [...todosList]
      while (i < number) {
        const option = {id: uuidv4(), title: text}
        newInitialTodosList = [...newInitialTodosList, option]
        i += 1
      }
      this.setState({value: '', todosList: newInitialTodosList})
    }
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodosList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodosList})
  }

  render() {
    const {todosList, value} = this.state
    console.log(todosList)
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <div className="input">
            <input
              type="text"
              className="inputElement"
              value={value}
              onChange={this.updateItem}
            />
            <button type="button" className="buttonAdd" onClick={this.addItem}>
              Add
            </button>
          </div>
          <ul>
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoList={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
