import React from 'react'
import mockData from './mockData'
import Images from './Images'

class Events extends React.Component {
  render() {
    let images = mockData.data.map(image => {
      return <Images
            key={image.id}
            src={image.id}
            alt=""
            title={image.title}
            content={image.content}
          />
    });

    return (
      <>
        <div style={{ marginLeft: 100 }}>
          <h1>Events</h1>
          <p>Explore upcoming events in your city.</p>
        </div>
        <div style={{ width: '75%' }}>
            { images }
        </div>
      </>
    );
  }
}
export default Events