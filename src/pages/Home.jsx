import React, { useState } from 'react'

import axios from "axios";


const Home = () => {

const [emojiStory,setemojiStory] = useState("");
const [title,setTitle] = useState("");
const [stories,setStories] = useState("");


useEffect(()=>{
    fetchStories();
},[]);

const fetchStories = async () => {

    const response = await axios.get("")
    setStories(response.data);
}

const handleSubmit = async() => {
    if(!emojiStory || !title){
        alert("Please fill both fields");
        return ;
    }
}


const response = await axios.post("",{
    story:emojiStory,title
});


setStories([response.data,...stories]);


setemojiStory("");
setTitle("");


const handleLike = async(id) => {
    await axios.patch(``);

    fetchStories();
}



  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>Emoji Story Generator</h1>
      <div className='mb-4'>
        <input type="text" placeholder='Enter emoji.....' />
        <input type="text"  placeholder='Enter the Title'/>
        <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2'>Submit</button>
      </div>

      <div>
        
        <h2 className='text-lg '>Save Stories</h2>
        {
            stories.map((story)=>(
                <div key={story._id} className=' border p-4 mb-2'>
                        <h3 className='font-bold'>{story.title}</h3>
                        <p>{story.story}</p>
                        <p>{story.translation}</p>

                        <button onClick={()=> handleLike(story._id)}>Like({story.likes})</button>
                 </div>  

            ))
        }
      
      </div>
    </div>
  )
}

export default Home
