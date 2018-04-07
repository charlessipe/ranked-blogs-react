import React, { Component } from 'react';
//import logo from './logo.svg';
//import Note from './Note/Note'
//import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import onlineMarketing from './onlineMarketing'
import farming from './farming'
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  
  constructor(props){
    super(props);

    //this.addNote = this.addNote.bind(this);

    //this.app = firebase.initializeApp(DB_CONFIG);

    //this.database = this.app.database().ref().child('/dad');

    //this.state = {
    //  notes: [],
    //}


  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path='/online-marketing' component ={onlineMarketing} />
        <Route path='/farming' component ={farming} />
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
