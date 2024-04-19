const getData=(postId)=>{
    const comments=localStorage.getItem(`${postId}`);
    if(comments){
        return JSON.parse(comments);

    }
    else{
        return[];
    }

}

const setData=(commentObject,postId)=>{
    const comments=getData(`${postId}`);
    comments.push(commentObject);
    localStorage.setItem(`${postId}`,JSON.stringify(comments));
}

export {getData,setData }