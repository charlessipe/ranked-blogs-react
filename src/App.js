import React, { Component } from 'react';
//import logo from './logo.svg';
//import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);

    //this.addNote = this.addNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('/personal-development');

    this.state = {
      notes: [],
    }


  }

  componentWillMount(){
    //const previousNotes = this.state.notes;
    const blogsArray = this.state.notes;

    this.database.on('value', snap => {
      snap.forEach(stuff => {
      blogsArray.push(stuff.val());
    });

      

      //blogsArray.push(snap.val()
        //id: snap.name,
        //noteContent: snap.val().noteContent,
        //blogs: snap.val()
      

      this.setState({
        notes: blogsArray
      })
      //console.log(notes:blogsArray);
      console.log(snap.val());
    })  
    
    /*
    // data snapshot
    this.database.on('child_added', snap => 
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      }),

      this.setState({
        notes: previousNotes
      })
    )
  

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
    */
  }

  /*addNote(note){
    this.database.push().set({ noteContent: note});
  }*/


  componentDidMount(){
  console.log(this.state.notes);
  }

  render() {
    return (
      <div>
        <h1>Blog List</h1>
        <ul>
        {this.state.notes.map(e => (
          <li key={e.name}>{e.name}: <span>URL:</span>{e.mainUrl} <span> Linking sites: {e.linkingsites}</span> <span>Latest article: </span> <a href={e.rssUrl}>{e.rssTitle}</a></li>
        ))}
        </ul>            
      </div>
    );
  }
}

export default App;
