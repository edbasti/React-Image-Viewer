import React from 'react'
import { Link } from 'react-router-dom'
import Tabs from './Tabs'
require('./tabstyles.css')


const EventDetails = ({ match, location }) => {
  return (
    <div className="container">
      <div style={{ width: '75%', marginLeft: 100, marginTop: 40 }}>
        <img src={require(`./images/${match.params.id}.jpg`)} alt=""/>
        <Tabs>
          <div label="Overview">
          {location.state.content.overview}
          </div>
          <div label="Details">
          {location.state.content.details}
          </div>
          <div label="Location">
          {location.state.content.location}
          </div>
        </Tabs>
        <div style={{ float: 'left', marginBottom: 100, marginTop: 20 }}>
          <Link to={{ pathname:'/' }}>
            Back
          </Link>
      </div>
      </div>
    </div>
  );
}

export default EventDetails