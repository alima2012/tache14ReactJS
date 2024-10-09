import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const DetailPost = () => {
    const { id } = useParams();
    const { data: post, error, isPending } = useFetch('http://localhost:8000/posts/' + id);
    const Navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/posts/' + post.id, {
            method: 'DELETE'
        }).then(() => {
            Navigate('/');
        })
    }

    return(
        <div className="post-detail">
            { isPending &&  <div>Chargement...</div> }
            { error && <div>{ error }...</div> }

            { post && (
                <article>
                    <h1 className="h1detail">Détail d'un post</h1>
                    <h2>Title: { post.title }</h2>
                    <p>UserId: { post.userId }</p>
                    <p>ID: { post.id }</p>
                    <p>Body: { post.body }</p>
                    <button onClick={handleClick}>Supprimer Post</button>
                </article>
            )}
        </div>
    );
}
export default DetailPost;