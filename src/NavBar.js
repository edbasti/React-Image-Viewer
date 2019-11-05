import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

const NavBar = () => {
  return (
    <AppBar position="static" style={{ background: '#3d3d3d' }}>
      <Toolbar>
        <Grid justify={"center"} alignItems={"center"} container>
          <Grid style={{ justifySelf: "flex-start" }} item>
            <img
              src={
                "header.png"
              }
              alt="Abu Dhabi Moments Logo"
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar;