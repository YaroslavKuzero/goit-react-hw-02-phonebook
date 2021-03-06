import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from '../Form';
import Filter from '../FindContact';
import ContactList from '../ContactList';

import s from './PhoneBook.module.css';

class Phonebook extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: ''
  }

  onSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state
    const contactName = name.toLowerCase();
    if (contacts.find(contact => contact.name.toLowerCase() === contactName)) {
      alert(`${name} already in your contact list`)
      return;
    }
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  changeFilterHandler = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalFilter));
  }

  deleteContactHandler = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {
    const visibleContacts = this.getFilteredContacts();
    const { contacts, filter } = this.state
    return (
      <div className={s.phonebook}>
        <h1 className={s.phonebook_header}>Phonebook</h1>
        <h2 className={s.section_header}>Create a new contact</h2>
        <Form onSubmit={this.onSubmitHandler} />

        <h2 className={s.section_header}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilterHandler} />
        <ContactList items={visibleContacts} totalItems={contacts.length} onRemove={this.deleteContactHandler} />
      </div >
    )
  }
}

export default Phonebook;
