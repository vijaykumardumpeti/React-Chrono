// Write your code here
import {Chrono} from 'react-chrono'

import {Component} from 'react'
import './index.css'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

export default class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    this.chronoRendering = () =>
      timelineItemsList.map(eachObject => {
        if (eachObject.categoryId === 'COURSE') {
          return <CourseTimelineCard eachObject={eachObject} />
        }
        return <ProjectTimelineCard eachObject={eachObject} />
      })

    return (
      <div className="react-chrono-box-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {this.chronoRendering()}
        </Chrono>
      </div>
    )
  }
}
