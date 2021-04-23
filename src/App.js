import { useState } from 'react';
import './App.css';


function App() {
  const like = 100
  const dislike = 25
  const [liked,setliked] = useState(false)
  const [disliked,setDisliked] = useState(false)
  const [likes, setlikes] = useState(like)
  const [dislikes, setDislikes] = useState(dislike)
  const likeHandler = () => {
    if(liked){
      setliked(false)
      setlikes(likes - 1)
    }else{
      setliked(true)
      setDisliked(false)
      if(disliked === true){
        setDislikes(dislikes - 1)
      }
      setlikes(likes + 1)
    }
  }
  const dislikeHandler =() => {
    if(disliked){
      setDisliked(false)
      setDislikes(dislikes - 1)
    }else{
      setDisliked(true)
      setliked(false)
      if(liked === true){
        setlikes(likes - 1)
      }
      setDislikes(dislikes + 1)
    }
  }
  let likeclass = 'like-button'
  let dislikeclass = 'dislike-button'
  if(liked){
    likeclass = likeclass + ' liked'
  
  }
  if(disliked){
    dislikeclass = dislikeclass + ' disliked'
  }
  return (
    <div className="App">
      <button className={likeclass} onClick={likeHandler}>like |<span className='likes-counter'> {likes}</span></button>
      <button className={dislikeclass} onClick={dislikeHandler}>dislike |<span className='dislikes-counter'> {dislikes}</span></button>
    </div>
  );
}

export default App;
