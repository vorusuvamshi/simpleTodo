// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {data: '', value: 'edit', checked: false}

  componentDidMount = () => {
    const {todoList} = this.props
    const {title} = todoList
    this.setState({data: title})
  }

  checkBox = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  changeValue = () => {
    const {value} = this.state
    if (value === 'save') {
      this.setState({value: 'edit'})
    } else {
      this.setState({value: 'save'})
    }
  }

  changeTitle = event => {
    this.setState({data: event.target.value})
  }

  onDelete = () => {
    const {todoList, deleteTodo} = this.props
    const {id} = todoList
    deleteTodo(id)
  }

  render() {
    const {value, data} = this.state
    const data1 = value === 'edit' ? 'Edit' : 'Save'
    const {checked} = this.state
    const classN = checked === true ? 'checked' : ''
    return (
      <li className="item">
        <input type="checkbox" onChange={this.checkBox} />
        {value === 'edit' ? (
          <p className={classN}>{data}</p>
        ) : (
          <input
            type="text"
            value={data}
            className="inputEl"
            onChange={this.changeTitle}
          />
        )}
        <div>
          <button type="button" className="button" onClick={this.changeValue}>
            {data1}
          </button>
          <button type="button" className="button" onClick={this.onDelete}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
