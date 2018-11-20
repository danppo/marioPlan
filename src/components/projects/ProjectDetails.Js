import React from 'react'

const ProjectDetails = (props)  => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="car-content">
          <span className="card-title">
            Card title - {id}
          </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime accusantium praesentium officia accusamus, vel autem natus quibusdam laudantium fugit? Sunt assumenda a culpa est sapiente magni molestias eaque commodi veritatis!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>poster by dan</div>
          <div> date</div>
        </div>
      </div>
    </div>
    

  )
}

export default ProjectDetails