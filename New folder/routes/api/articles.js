const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");


router.get(
   "/",
   (req,res) => {
      Post.find()
         .then(posts => res.status(200).json(posts))
         .catch(err =>
            res
               .status(400)
               .json({ user: "Error fetching posts" })
         );
   }
);

module.exports=router;