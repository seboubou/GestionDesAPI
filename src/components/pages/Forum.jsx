import React, { useState } from 'react';
import MenuBurger from "../pages/MenuBurger";

function Forum() {
    // Déclaration des états
    const [comments, setComments] = useState([]); // état des commentaires
    const [replyTo, setReplyTo] = useState(null); // état du commentaire auquel on répond
    const [replyText, setReplyText] = useState(''); // état du texte de réponse
    
    function handleCommentSubmit(event) {
        event.preventDefault();
        // empêche le comportement par défaut du formulaire, qui est de recharger la page lors de la soumission.
        const comment = event.target.comment.value;
        // extrait la valeur du champ de saisie du commentaire à partir de l'événement.

        if (comment.trim() !== '') {
            // Vérifie s'il s'agit d'une réponse à un commentaire existant
            if (replyTo !== null) {
                const replyComment = comments[replyTo];
                // Met à jour le commentaire avec la nouvelle réponse
                const updatedReplyComment = { ...replyComment, replies: [...(replyComment.replies || []), comment] };
                const updatedComments = [...comments];
                updatedComments[replyTo] = updatedReplyComment;
                setComments(updatedComments);
                setReplyTo(null);
            } else {
                // Ajoute un nouveau commentaire à la liste des commentaires
                setComments([...comments, { text: comment, replies: [] }]);
            }

            event.target.comment.value = '';
        }
    }

    function handleReplyChange(event) {
        setReplyText(event.target.value);
    }

    function handleReplySubmit(event, commentIndex) {
        event.preventDefault();
        if (replyText.trim() !== '') {
            const updatedComments = [...comments];
            updatedComments[commentIndex].replies = [...(updatedComments[commentIndex].replies || []), replyText];
            setComments(updatedComments);
            setReplyTo(null);
            setReplyText('');
        }
    }

    return (
        <div className='page-container'>
            <MenuBurger/>
        <div className="forum-container">
            <h2 className="forum-heading">Forum</h2>
            <form className="comment-form" onSubmit={handleCommentSubmit}>
                <textarea className="comment-input" name="comment" placeholder="Votre commentaire"></textarea>
                <button className="submit-button" type="submit">Envoyer</button>
            </form>
            <ul className="comment-list">
                {comments.map((comment, index) => (
                    <li className="comment-item" key={index}>
                        <div className="comment-content">
                            <span className="comment-username">{comment.username}</span>
                            <span className="comment-text">{comment.text}</span>
                            {comment.replies && comment.replies.length > 0 && (
                                <ul className="comment-replies">
                                    {comment.replies.map((reply, replyIndex) => (
                                        <li className="comment-reply" key={replyIndex}>{reply}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button className="reply-button" onClick={() => setReplyTo(index)}>Répondre</button>
                        {replyTo === index && (
                            <form className="reply-form" onSubmit={(event) => handleReplySubmit(event, index)}>
                                <textarea className="reply-input" value={replyText} onChange={handleReplyChange} placeholder="Votre réponse"></textarea>
                                <button className="submit-button" type="submit">Envoyer</button>
                            </form>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}

export default Forum;

