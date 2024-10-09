import { useEffect, useState } from "react"
import PostList from "../pages/PostList";
import useFetch from "../useFetch";

const Home = () => {
    // making custom
    const { data: posts, isPending, error } = useFetch('http://localhost:8000/posts');
    // function click events
    const handleClick = (e) => {
        console.log('post', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello' + name, e.target);
    }

    return(
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Chargement...</div> }
            {posts && <PostList posts={posts} title="Tous les posts" />}
        </div>
    );
}
export default Home;
