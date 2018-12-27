import React, { Component } from "react";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };

    }


    render() {

        return (
            <div className="search-bar">
                <input onChange={(event) => this.onInputChange(event.target.value)} />
                
                <br />
                
            </div>
        );
    }
   onInputChange(term){
//class components will use this.props.xxx ,functional comp will use props.xxx
    this.setState({term:term}),
    this.props.onSearchTermChange(term);

   }


}
export default SearchBar;
