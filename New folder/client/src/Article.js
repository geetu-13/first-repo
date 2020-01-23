import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Blog from "./components/user/Blog2";
import { getArts } from "./actions/postActions";

const BlogPage = ({
   getArts,
   
   posts
}) => {
   useEffect(() => {
      getArts() ;
   }, [ getArts]);

   return <Blog posts={posts} />;
};

const mapStateToProps = state => ({
  
   posts: state.post.posts
});

BlogPage.propTypes = {
   posts: PropTypes.array.isRequired,
  
   getArts: PropTypes.func.isRequired}

export default connect(
   mapStateToProps,
   { getArts }
)(BlogPage);
 