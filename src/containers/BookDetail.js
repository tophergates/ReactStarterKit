import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if(!this.props.activeBook){
      return (
        <div className='bookDetail'>
          <h3>Select a Book</h3>
        </div>
      )
    }

    return (
      <div className='bookDetail'>
        <h3>Details For:</h3>
        <h5>{this.props.activeBook.title}</h5>
        <span>Pages:</span> {this.props.activeBook.pages}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
