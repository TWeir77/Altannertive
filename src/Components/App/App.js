import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'Bring Me To Life', artist: 'Evanescence', album: 'Fallen', id: 1}, {name: 'By Myself', artist: 'Linkkin Park', album: 'Hybrid Theory', id: 2}, {name: 'Break Stuff', artist: 'Limp Bizkit', album: 'Significant Other', id: 3}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'RISE', artist: 'Glitch Mob', album: 'League of Legends', id: 4}, {name: 'Time of Dying', artist: 'Three Days Grace', album: 'One-X', id: 5}, {name: 'Devotion and Desire', artist: 'Bayside', album: 'Bayside', id: 6}]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
