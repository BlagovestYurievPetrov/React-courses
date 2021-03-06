import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments.js';

const Single = React.createClass({
    render() {
        const {postId} = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || []; 
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}></Photo>
                <Comments postComments={postComments} {...this.props}/>
            </div>
        )
    }
})

export default Single;