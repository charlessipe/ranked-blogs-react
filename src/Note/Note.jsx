import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {

  constructor(props){
    super(props);
    this.noteName=props.noteName;
    this.noteUrl=props.noteUrl;
    //this.noteContent = props.noteContent;
    //this.noteId = props.noteId;
  }

  render(props){
    return(
      <div className="note fade-in">
        <p className="noteContent">{this.name} : {this.mainUrl}</p>
      </div>
    )
  }

}


Note.propTypes = {
  noteContent: PropTypes.string
}

export default Note;