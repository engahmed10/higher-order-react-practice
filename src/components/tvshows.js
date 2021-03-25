import React, { Component } from 'react';

class TvShows extends Component {
    constructor(props) {
        super(props);
        this.state={
            shows:[
                {id:1,name:"Ezel"},{id:2,name:"Friends"},{id:3,name:"Dirilish Osman"},{id:4,name:"Breaking Bad"}
            ]
        }
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

tvshows.propTypes = {

};

export default TvShows;