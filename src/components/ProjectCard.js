import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    
    <Col size={12} sm={6} md={4}> <button>
    <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              {description}
        </div>
      </div>
      </a>
    </button>
    </Col>
  )
}
