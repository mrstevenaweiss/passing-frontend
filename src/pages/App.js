import React, { Component } from 'react';
import '../App.css'
import Header from '../components/Header'
import PostsListContainer from '../containers/PostsListContainer'
import PostNew from '../components/PostNew'
import PostDetail from '../components/PostDetail'
import { connect } from 'react-redux'

// import SearchContainer from '../containers/SearchContainer'
// import PostContainer from '../containers/PostContainer'
// import FooterContainer from '../containers/FooterContainer'

class App extends Component {

  render() {
    console.log('le props', this.props)
    return (
      <div className="App">
        <header className="app-header">
          <Header />
        </header>

        <main>
          <PostNew />
          {/* {this.props.selectedPost ? <PostDetail post={this.props.selectedPost} />  : <PostsListContainer /> } */}
        </main>

      </div>
    );
  }
}

const mapStateToProps = state => ({ selectedPost: state.selectedPost })

export default connect(mapStateToProps, null)(App);
