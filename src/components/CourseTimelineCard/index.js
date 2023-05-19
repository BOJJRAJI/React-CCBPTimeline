import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  const listItem = item => (
    <div className="item-container">
      <p>{item.name}</p>
    </div>
  )

  return (
    <div className="course-card">
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="icon-duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-lists-container">
        {tagsList.map(item => listItem(item))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
