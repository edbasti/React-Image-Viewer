import React from "react"
import { Link } from 'react-router-dom'

const Images = ({ title, src, content }) => (
  <div style={{ marginLeft: 100, marginBottom: 140 }}>
    <div>
        <h4>{title}</h4>
    </div>
    <div>
      <Link
        to={{
          pathname:`/eventdetails/${src}`,
          state: { content },
        }}
      >
        <img
          key={src}
          src={require(`./images/${src}.jpg`)}
          alt=""
          className="img-responsive"
        />
      </Link>
    </div>
  </div>
);

export default Images