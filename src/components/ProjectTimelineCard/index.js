import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="icon-duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="visit-text" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
