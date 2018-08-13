import React, { Component } from 'react';
import '../App.css'
import Header from '../components/Header'
import Search from '../components/Search'
import PostsList from '../components/PostsList'
import PostNew from '../components/PostNew'
import { connect } from 'react-redux'

// import SearchContainer from '../containers/SearchContainer'
// import PostContainer from '../containers/PostContainer'
// import FooterContainer from '../containers/FooterContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <Header />

        </header>

        <main>
          {/* <PostNew />
          {/* <Search /> */}
          <PostsList />

        </main>

      </div>
    );
  }
}

export default connect(null, null)(App);
