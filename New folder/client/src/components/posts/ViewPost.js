import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";
import { Link } from "react-router-dom";



const ViewPost = ({ post, auth, onDelete, onEdit }) => {
   const postDate = getFormattedDate(post.date);
   

      return (
      <Container fluid  style={{padding:150, paddingTop:12}}>
         <Row>
            <Col className="text-center postTitle">
               <h2 style={{padding:15}}>{post.title}</h2>
            </Col>
         </Row>
         <Row className="text-center postTitle" style={{ whiteSpace: "pre-wrap" }}>
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
         {auth && (
                  <Row className="mt-4">
                     <Col className="text-center">
                        <Button
                           className="mr-2"
                           variant="outline-info"
                           onClick={onEdit}
                        >
                           Edit
                        </Button>
                        <Button variant="outline-danger" 
                        className="mr-2" onClick={onDelete}>
                           Delete
                        </Button>
                        <Link to="/blog">
                           <Button variant="outline-dark" className="mr-2">
                                  Back
                           </Button>
                        </Link>
                     </Col>
                  </Row>
               )}
         


      </Container>
   );
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;
