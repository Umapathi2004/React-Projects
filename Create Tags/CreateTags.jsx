import { useState } from "react";
const Tags=[];
export const CreateTags = () => {
    const [Tag,TagSet]=useState();
    function AddingTags(){
        if(Tag!=undefined){
            if(Tag.trim()!=""){
              Tags.push(Tag);
              TagSet();
            }
        }
    }
    
  return (
      <div className="container">
        <div className="heading">Create Tags :</div>
        <div>
        <input type="text"   placeholder="Create Tags..." onChange={(e)=>(TagSet(e.target.value))}/>
        <button onClick={AddingTags}>Create</button>
        </div>
        <div className="TagsCollection">
            <ul>
                {Tags.map((tag,index)=>(<li key={index} >{tag}</li>))}
            </ul>
        </div>
      </div>
  )
}
