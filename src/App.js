import React, { Component } from 'react';
//import logo from './logo.svg';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {id: 1, noteContent: "awesome"},
        {id: 2, noteContent: "podcasts"},
        {id: 3, noteContent: "moz.com"}
      ]
      
    }
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React Firebase To Do List Hi</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
                //<p>{note.id} : {note.noteContent}</p>
                )
            })
              
          }
          
        </div>
        <div className="notesFooter">
          <NoteForm />
        </div>
      </div>
    );
  }
}

export default App;
