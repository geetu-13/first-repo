import React, { useEffect } from "react";
import ViewPost from "../../components/posts/ViewPost2";
import {  getPostByID } from "../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container} from "react-bootstrap";


const ViewPostPage = ({

    post,
    match,

    getPostByID

 }) => {
    useEffect(() => {
       getPostByID(match.params.id);
    }, [match, getPostByID]);
 

 

 
    if (Object.keys(post).length === 0) return <div />;
    return (
       <Container fluid>
          <ViewPost
          post={post}

          />
       </Container>
       
    );
 };
 
 const mapStateToProps = state => ({
    post: state.post.post
 });
 
 ViewPostPage.propTypes = {
    post: PropTypes.object.isRequired,
    getPostByID: PropTypes.func.isRequired
 };
 
 export default connect(
    mapStateToProps,
    { getPostByID }
 )(ViewPostPage);
 