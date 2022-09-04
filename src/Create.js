import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
const [title,setTitle] = useState('');
const [body,setBody] = useState('');
const [author,setAuthor] = useState('mario');
const [isPending, setisPending] = useState(false);
const history =useHistory()

const handleSubmit =(e)=>{
e.preventDefault()

setisPending(true)

const blog = {title,body,author}
fetch('http://localhost:8000/blogs',{
    method:'POST',
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(blog)
}).then(()=>{
    setTitle('')
    setBody('')
    setisPending(false)
    history.push('/')
    console.log(blog)
})


}
    return (
    
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title</label>
                <input type="text"
                required
                value={title}
               
                onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label htmlFor="">Blog Body</label>
                <textarea  
                required
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
                />
                
                
                <label htmlFor="">Blog Author:</label>
                <select 
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option value="mario">mario</option>
                    <option value="ismail">ismail</option>
                </select>
                
              {!isPending && <button>Add Blog</button> }
              {isPending && <button disabled>Add Blog...</button> }
            </form>
        </div>

      );
}
 
export default Create;
  
