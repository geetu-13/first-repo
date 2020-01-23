import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col} from "react-bootstrap";
import "./post.scss";




const ViewPost = ({ post}) => {
   const postDate = getFormattedDate(post.date);
   

   return (
      <Container fluid style={{padding:150, paddingTop:12}}>
         <Row>
            <Col className="text-center postTitle">
               <h2 style={{padding:15}}>{post.title}</h2>
            </Col>
         </Row>
         <Row className="text-center postTitle" height="500px" width="500px" style={{ whiteSpace: "pre-wrap"}}>
            <Col>
            <img src={post.image} alt=""/>
            </Col>
         </Row>
         <Row className="my-4" style={{ whiteSpace: "pre-wrap" }}>
            <Col>{post.body}</Col>
         </Row>
         <Row className="d-flex flex-column font-italic footerStyle">
            <Col>Created by : {post.author}</Col>
            <Col>Date: {postDate}</Col>
         </Row>      
      </Container>
   );
   
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired
};

export default ViewPost;
