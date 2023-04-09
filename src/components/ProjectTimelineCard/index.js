// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachObject} = props
  console.log(eachObject)
  const {projectTitle, description, imageUrl, duration, projectUrl} = eachObject
  return (
    <div className="project-card">
      <img className="project-image" alt="project" src={imageUrl} />
      <div className="project-title-duration">
        <h1>{projectTitle}</h1>
        <div className="calender-duration">
          <AiFillCalendar />
          <p className="calender-para">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a
        className="anchor-element"
        rel="noreferrer"
        href={projectUrl}
        target="_blank"
      >
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
