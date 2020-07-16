import React, { Component } from 'react';
import Form from '../Form';
import Filter from '../FindContact'
import ContactList from '../ContactList';
import styles from './PhoneBook.module.css'
import { v4 as uuidv4 } from 'uuid';


class Phonebook extends Component {

  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: ''
  }

  onSubmitHandler = (data) => {
    const contactName = data.name.toLowerCase();
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === contactName)) {
      alert(`${data.name} already in your contact list`)
      return;
    }
    const newContact = {
      id: uuidv4(),
      name: data.name,
      number: data.number
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  changeFilterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
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

    return (
      <div className={styles.phonebook}>
        <h1 className={styles.phonebook_header}>Phonebook</h1>
        <h2 className={styles.section_header}>Create a new contact</h2>
        <Form onSubmit={this.onSubmitHandler} />

        <h2 className={styles.section_header}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilterHandler} />
        <ContactList renderItems={visibleContacts} totalItems={this.state.contacts} handler={this.deleteContactHandler} />
      </div >
    )
  }
}


export default Phonebook;
