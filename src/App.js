import React, { Component } from 'react';
import './App.css'
import NavContainer from './containers/NavContainer'
import SearchContainer from './containers/SearchContainer'
import PassingListContainer from './containers/PassingListContainer'
import PostContainer from './containers/PostContainer'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="app-header">
            <NavContainer />
        </header>

        <main>
          <p className="app-main">
            <PostContainer />
            <PassingListContainer />
            <SearchContainer />
          </p>
        </main>

        <footer className="app-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
