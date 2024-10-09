import { Link } from "react-router-dom";

// utilisation des props
const PostList = ({posts, title}) => {
    return(
        <div className="post-list">
            <h2>{ title }</h2>
            {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <p>Identifiant: {post.id}</p>
                        <h2>Titre: {post.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default PostList;
