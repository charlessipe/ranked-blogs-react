import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { DB_CONFIG } from '../src/Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import '../src/App.css';


class farming extends Component {
  
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);

    this.database = this.app.database().ref().child('/farming');

    this.state = {
      notes: [],
    }


  }

  componentWillMount(){

    const blogsArray = this.state.notes;

    this.database.on('value', snap => {
      snap.forEach(stuff => {
      blogsArray.push(stuff.val());
    });

      this.setState({
        notes: blogsArray
      })
 
      console.log(snap.val());
    })  
    
 
  }

  componentDidMount(){
  console.log(this.state.notes);
  }

  render() {
    return (
      <div>
        <h1>Farming</h1>
       
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

export default farming;
