import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} 
                    className="list-group-item" 
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            )
        })
    }

    render () {
        return (
            <div>
                <h1>My favourite books:</h1>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        );
    } 
}

// Redux part
function mapStateToProps (state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(BookList);