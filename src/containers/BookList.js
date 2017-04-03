import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';
import '../styles/BookList.scss';

class BookList extends Component {
  renderList(){
    return this.props.books.map(book => {
      return (
        <li
          className={(this.props.activeBook && this.props.activeBook.title === book.title) ? 'active' : ''}
          key={book.title}
          onClick={() => this.props.selectBook(book)}>{book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className='bookList'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books,
    activeBook: state.activeBook
  };
}

// Anything returned from this function will end up as props
// on the BookList container.
function mapDispatchToProps(dispatch){
  // Whenever the selectBook action creator is called,
  // the result should be passed to all of our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container
// It needs to know about this new dispatch method: selectBook.
// Make selectBook available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
