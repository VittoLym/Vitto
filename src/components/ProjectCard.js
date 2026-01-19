import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl,url,type}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => 
        {
          if(url === null ){
            return
          }
          window.open(url, "_blank")
        }
      }>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p><strong>[{type}]</strong></p>
        </div>
      </div>
    </Col>
  )
}
