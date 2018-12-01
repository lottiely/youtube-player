import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'API KEY';

class App extends Component {

  constructor(props){
      super(props);

      this.state = {
          videos: [],
          selectedVideo: null
      };

      this.videoSearch('filipino in steam faster');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
