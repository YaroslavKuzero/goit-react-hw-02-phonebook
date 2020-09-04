import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Form.module.css';

const initialState = {
  name: '',
  number: ''
}
class Form extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = initialState;

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState(initialState)
  };

  changeHandler = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className={s.form} onSubmit={this.onSubmitHandler}>
        <label>
          <input className={s.input_name} name='name' type='text' placeholder='Name' value={this.state.name} onChange={this.changeHandler} />
        </label>
        <label>
          <input className={s.input_num} name='number' type='tel' placeholder='Number' value={this.state.number} onChange={this.changeHandler} />
        </label>
        <button className={s.btn_add} type='submit'>Add contact</button>
      </form>
    )
  }
}

export default Form;
