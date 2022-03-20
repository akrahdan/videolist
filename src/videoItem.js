const videoItem = ({ video, index, onVideoSelect }) => {
    return (
        <div className="video-item item" key={index} onClick={() => onVideoSelect(video)}>
            <img
                alt={video.snippet.title}
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default videoItem;