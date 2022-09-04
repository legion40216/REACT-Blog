import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";
 const Blogdetails  = () => {
    

    const {id} =useParams()
    const {data:blogs, isPending , errors} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    
    const handleDelete = () =>{
    fetch('http://localhost:8000/blogs/' + blogs.id,{
        method:'DELETE'
    }).then(()=>{
          history.push('/')
    })
    }

    return ( 
      <div className="blog-details">
        {isPending && <div>is loading ...</div> }
        {errors && <div>{errors}</div> }
        {blogs && (
            <article>
                <h2>{blogs.title}</h2>
                <p>Written by {blogs.author}</p>
                <div>{blogs.body}</div>
             <button onClick={handleDelete}>Delete</button>
            </article>
            )}
      </div>

     );
}

export default Blogdetails ;