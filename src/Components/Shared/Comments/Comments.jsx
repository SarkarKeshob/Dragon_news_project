import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserData/UserData";
import { getData, setData } from "../../../utilities/localhost";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";


const Comments = ({postId}) => {
    const { user } = useContext(UserContext);
    const userName = user.displayName;
    const userEmail = user.email;
    const photo = user.photoURL;
    const [commentObject, setCommentObject] = useState([]);
    const checkPhotoUrl = async () => {
        try{
            const photoUrlRequest = await fetch(`${photo}`)
            if(photoUrlRequest.status==200){
                return true;
            }

        }
        catch(err){
            if(err){
                return false;
            }
        }
    }

    const handleComments = async (e) => {
        e.preventDefault();
        const commentText = e.target.comment.value;
        if (commentText.length > 0) {
           const photoPresent= await checkPhotoUrl();
           const divId=nanoid();
           console.log(divId);
            const localComment = { userName, userEmail, commentText, photo, photoPresent,divId };
            setData(localComment,postId);
            const newComments = [...commentObject]
            newComments.push(localComment);
            setCommentObject(newComments);
            e.target.reset();
        }
        else {
            //
        }
    }
    const handleDelete=e=>{
        const position=e.target.parentNode.parentNode.parentNode;
        console.log(position.id);
        const previousComments=[...commentObject];
        const newComments=previousComments.filter(comment=>comment.divId!==position.id);
        console.log(newComments);
        localStorage.removeItem(postId);
        newComments.map(comment=>setData(comment,postId));
        position.remove();
    }
    useEffect(() => {
        const comments = getData(`${postId}`);
        console.log(comments);
        setCommentObject(comments);

    }, [postId])
    return (
        <div>
            <h2 className="text-lg font-semibold">Comments</h2>
            <form action="" className="flex" onSubmit={handleComments}>
                <textarea name="comment" id="" cols="30" rows="5" className="resize-none border border-black rounded"></textarea>
                <div className="mt-20 ml-6">
                    <button className="btn btn-warning">Comment</button>

                </div>
            </form>
            <div className="text-center w-fit mx-auto my-10">
                <h2 className="text-4xl font-bold text-black border-b-4 pb-2 mx-auto">Public Comments</h2>
                <div>
                    { commentObject.map((comment, element) => (
                        <div key={element} className="my-5  border-2 p-3 bg-indigo-50" id={`${comment.divId}`}>
                            <div className="grid grid-cols-3 w-1/2">
                                <img className="p-5" src={comment.photoPresent ? `${comment.photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="" />
                                <div className="col-span-2 flex items-center ml-3">
                                    <h5 className="text-black font-bold mr-2">{comment.userName}:</h5>
                                    <p className="text-slate-500 text-sm">{comment.commentText}</p>
                                </div>
                                <div className="col-span-3">
                                    {comment.userEmail === userEmail && <button className="btn btn-warning btn-sm mx-auto" onClick={handleDelete}>Delete</button>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

Comments.propTypes={
    postId:PropTypes.string,
}
export default Comments;