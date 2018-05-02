// TODO

import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PlayBTN from '../media/play.png'
import PauseBTN from '../media/pause.png'

import { Grid } from 'semantic-ui-react'

class Player extends Component {
  state = {
    playing: false
  }

  handleClick = () => {
    this.setState({playing: !this.state.playing})
  }

  render() {
    return (
      <Grid.Column onClick={this.handleClick}>
        <img id="audio-controls"
        src={this.state.playing ? PauseBTN : PlayBTN} alt="play/pause button"/>
        <ReactPlayer
        playing={this.state.playing}
        height="0px"
        width="0px"
        url="https://soundcloud.com/goodroombk/good-room-podcast-048-jules" />
    </Grid.Column>
    );
  }

}

export default Player;
