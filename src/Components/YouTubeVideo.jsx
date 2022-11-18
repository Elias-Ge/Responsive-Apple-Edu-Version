import React, { useState, useEffect } from 'react';

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyCBeHBIupHQ7I7Y3S70q1sDDriCaF7gNWU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9

//https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_ApiKey}&channelId=${process.env.REACT_APP_ChannelId}&part=snippet,id&order=date&maxResults=9

const YouTubeVideo = () => {
    const [youTubeVideos, setyouTubeVideos] = useState([]);
    useEffect(() => {
        fetch(`/youTube.json`)
            .then((res) => res.json())
            .then((data) => {
                const youTubeVideos = data.items;
                setyouTubeVideos(youTubeVideos);
            });
    }, []);
    console.log(youTubeVideos);

    return (
        <section>
            <div className="allVideosWrapper">
                <div className="container">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-12">
                            <div className="title-wraper bold video-title-wrapper">
                                Latest Videos
                            </div>
                        </div>
                        {youTubeVideos?.map((singleVideo) => {
                            let vidId = singleVideo.id.videoId;
                            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                            let videoWrapper = (
                                <div key={vidId} className="col-sm-12 col-md-4">
                                    <div className="singleVideoWrapper">
                                        <div className="videoThumbnail">
                                            <a href={vidLink} target="_blank" rel='noreferrer'>
                                                <img src={singleVideo.snippet.thumbnails.high.url} alt='#' />
                                            </a>
                                        </div>
                                        <div className="videoInfoWrapper">
                                            <div className="videoTitle">
                                                <a href={vidLink} target="_blank" rel='noreferrer'>
                                                    {singleVideo.snippet.title}
                                                </a>
                                            </div>
                                            <div className="videoDesc">
                                                {singleVideo.snippet.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            return videoWrapper
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YouTubeVideo

