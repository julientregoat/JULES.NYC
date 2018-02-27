import React from 'react'
import MediumPosts from './MediumPosts'
import { Grid } from 'semantic-ui-react'

export default class Main extends React.Component {


  render(){
    console.log(this.props)
    return (
      <Grid id="main" columns={3} stackable >
        <MediumPosts/>
        <Grid.Column> Column 2 </Grid.Column>
        <Grid.Column> Column 3 </Grid.Column>
      </Grid>
    )
  }
}
