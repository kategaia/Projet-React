import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";

export default function Comments() {

    const { user } = useAuth();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) {
            return;
        }
        const comment  = {
            id: Date.now(),
            text: newComment,
            author: user.username || "Anonyme",
            date: new Date(),        
        }
        setComments([...comments, comment]);
        setNewComment("");
    };

    return (
        <div className="comments-section">
            <h3>Commentaires</h3>
            {user ? (
                <form onSubmit={handleSubmit}>
                    <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
                    <br></br>
                    <button type="submit">Envoyer</button>
                </form>

            ) : (
                <p>Connectez-vous pour poster un commentaire</p>
            )}
            <div className="comments-list">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p>{comment.text}</p>
                        <p>{comment.author} - {comment.date.toLocaleString()} {comment.date.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}