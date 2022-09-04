import BlogList from "./Blog-list";
import useFetch from "./usefetch";



const Home = () => {
const {data:blogs, isPending , errors} = useFetch('http://localhost:8000/blogs')


 
    return ( 
        <div className="home">
         <h2>All Blogs !</h2>
           {isPending &&  <p>loading...</p>}
           {errors &&  <p>{errors}</p>}
           { blogs  &&  <BlogList blogs={blogs} />}
        </div>
     );
}

export default Home ;