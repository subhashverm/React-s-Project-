import { createContext, useReducer } from "react";


export const postlist=createContext({ postlist:[],
    addpost:()=>{},
    deletepost:()=>{},
});

const postlistreducer=(currpostlist,action)=>{
return currpostlist;
};


const postlistporvider=({children})=>{
     const [ postlist,dispatchpostlist]=useReducer(postlistreducer,[defaultpostlist]);

     const addpost=()=>{

     }
     const deletepost=()=>{
     }
    return <postlist.Provider value={{postlist,
        addpost,
        deletepost
    }} >
        {children}
    </postlist.Provider>
};
const defaultpostlist=[{
id:'p1',
title:"First Post",
like:'0';
reaction:'0';
userid:'u1',
description:"This is my first post"
 },
 {
   id:'p2',
title:"First Post",
like:'4';
reaction:'90';
userid:'u2',
 description:"This is my second post" 
}];

export default postlistporvider;