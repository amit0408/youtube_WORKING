import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list';
import SearchBar from './Components/search_bar';
import VideoDetail from './Components/video_detail';
import './App.css';

const API_KEY = "AIzaSyC1ixGTJglqhLcmbf_2V2ZceIfZCNI50-I"



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
       this.videoSearch('BMW'); //this kicks off the videoSearch method
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {//object + callback function
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })

    }
    render() {
        const videoSearch= _.debounce( (term)=>{
            this.videoSearch(term)
        },200)

        return ( 
            //videoSearch 
            <div>
                <SearchBar  onSearchTermChange={ videoSearch}/> 
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})} //this fn updates selected video in YT SEarchn//function is passed as a property here
                videos={this.state.videos} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

