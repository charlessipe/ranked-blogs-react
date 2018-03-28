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
    this.database = this.app.database().ref().child('/online-marketing');

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
        <h1>Ranked Blogs</h1>
       
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Links</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
              {this.state.notes.map(e => (
                <tr key={e.name}><td>{e.name}</td><td><a href={e.mainUrl}>{e.name}</a></td> <td>{e.linkingsites}</td> <td><a href={e.rssUrl}>{e.rssTitle}</a></td></tr>
              ))}

          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
