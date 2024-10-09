import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const AjoutPost = () =>  {

    const [id, setId] = useState('');
    const [userID, setUserID] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const post = { id, userID, title, body };

        setIsPending(true);

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('Nouveau post ajouté');
            setIsPending(false);
            Navigate('/')
        });
    };
    return(
        <div className="ajout">
        <h2>Ajouter un post</h2>
        <Form onSubmit={handleSubmit}>
            <label>ID</label>
            <input type="number"
               required
               value={id}
               onChange={(e) => setId(e.target.value)}
            />
            <label>UserID</label>
            <input type="number"
               required
               value={userID}
               onChange={(e) => setUserID(e.target.value)}
            />
            <label>Title</label>
            <input type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <label>Body</label>
            <textarea type="text"
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
            />
            { !isPending && <button>Ajouter Post</button> }
            { isPending && <button disabled>Ajout effectué</button> }
        </Form>
    </div>

    )
}
export default AjoutPost;