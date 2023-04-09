// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {eachObject} = props
  const {courseTitle, description, duration, tagsList} = eachObject
  return (
    <div className="course-card">
      <div className="title-duration">
        <h1>{courseTitle}</h1>
        <div className="time-duration">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>

      <div className="unordered-list-container">
        {tagsList.map(object => (
          <p className="list-item">{object.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
