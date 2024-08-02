import Post from './post';
import classes from './PostsList.module.css';

function PostsList () {
    return(
        <ul className={classes.posts}>
                <Post author="hi" body="react fy"/>
                <Post author="hello" body= "react gg"/>
        </ul>
    )

}

export default PostsList;