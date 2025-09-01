import { useContext } from "react";
import { postlist } from "../Store/post-list-store";
import Post from "./post";
const Home=()=>{
   const {postlist}= useContext(postlist);
    return (<>
     {postlist.map((post)=>(<Post key={Post.id}/> 
    ))}
    </>
    );
   
;}
export default Home;