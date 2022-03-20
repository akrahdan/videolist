import VideoItem from './videoItem';

const videoList = ({ videos, onVideoSelect }) => {
    return videos.map((video, index) => {
      return (
       <VideoItem video={video} index = {index} onVideoSelect = {onVideoSelect} />
      )
    })
  }

  export default videoList;