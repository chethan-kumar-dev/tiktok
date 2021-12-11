const videoContainer = document.getElementsByClassName('container');
let videos = document.getElementsByTagName('video')
document.addEventListener('DOMContentLoaded',()=>{
   for(let i=0;i<videos.length;i++){
      //videos[i].play();
   }
   videos[0].muted=false
   videos[0].play()
})
let videoIndex=0;
const div = videoContainer[0].getElementsByClassName('video-container');
videoContainer[0].addEventListener('scroll',()=>{
  // console.log(videoContainer[0])
    videoIndex = Math.floor(videoContainer[0].scrollTop / videoContainer[0].clientHeight);
    videos[videoIndex].muted='false'
      videos[videoIndex].play()
      videos[videoIndex].muted=false;
      console.log(videoIndex)

      videos[videoIndex].currentTime=0

      const arr=[0,1,2,3]
arr.forEach((value, index, array) => {
   if(index===videoIndex){
      
   }
   else
   {
      videos[index].pause()
   }
})
})

console.log([Array(3)])

document.addEventListener('click',(e)=>{
   if(e.target.tagName==='VIDEO'){
      if(e.target.paused){
         e.target.play()
      }
      else
      {
         e.target.pause()
      }
   }
  
})