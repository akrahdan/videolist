import youtube from "./apis/youtube";
import { useEffect, useState } from "react";
import VideoList from "./videoList";
import { VideoDetail } from "./videoDetail";

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setVideo] = useState(null);

  const fetchData = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    })
    console.log(response)
    setVideos(response.data.items)
    setVideo(response.data.items[0])


  }


 

  useEffect(() => {
    

    if (!videos.length) {
      fetchData("buildings")
    }

  }, [videos])


 

  return (
    <div className="ui container">
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
           <VideoDetail video={selectedVideo} />
          </div>

          <div className='five wide column'>
            {/* { videoList(videos)} */}
            <VideoList videos={videos}  onVideoSelect={setVideo}/>
          </div>

        </div>

      </div>

    </div>
  );
}


export default App;