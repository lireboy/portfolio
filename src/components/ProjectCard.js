import { Col } from "react-bootstrap";
import globeImage  from "../assets/img/globe.svg";
import githubImage  from "../assets/img/github-mark-white.svg";



export const ProjectCard = ({ title, description, imgUrl, imgAlt, global, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={imgAlt}/>
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
        <div className="links">
          {global ? (
            <a href={global} target="_blank"> <img src={globeImage} alt="globe link"/></a>       
          ): ""}
          {github ? (     
            <a href={github} target="_blank"> <img className="github" src={githubImage} alt="github link"/></a>    
          ): ""}
          {!github && !global ? (     
            <div className="private">Private website</div>       
          ): ""}
        </div>
      </div>
    </Col>
  )
}
