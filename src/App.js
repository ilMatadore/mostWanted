import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: "",
      loading: false,
    };
  }

   componentDidMount() {
    this.setState({ loading: true});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users, loading: false}));
  }

  handleChange= e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField, loading } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1>Most Wanted</h1>
        <SearchBox placeholder= "Search by name" handleChange= {this.handleChange} />
        {loading ? <h1>Loading..</h1> : <CardList monsters={filteredMonsters} />}
      </div>
    )
  }
}



export default App;
