import logo from './logo.svg';
import './App.css';
import youtube from './apis/youtube';
import React from 'react';
class App extends React.Component {

  state = { videos: [] }

  componentDidMount() {
    this.onTermSelect("buildings")
  }

  onTermSelect = async term => {
    const response = await youtube("/search", {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items
    })
  }

  videoList = (videos = []) => {
    return videos.map(video => {
      return (<div className="video-item item">
        <img
          alt={video.snippet.title}
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>)
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
         {this.videoList(this.state.videos)}

        </header>
      </div>
    );
  }

}

export default App;
