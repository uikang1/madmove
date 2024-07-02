import { useState } from 'react';
import { PlayButton, Top, VideoBackground } from './mainpagestyle';

const TopVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        const video = document.querySelector('video');
        if (video) {
            video.muted = false;
            video.play();
            setIsPlaying(true);
        }
    };

    return (
        <Top>
            <VideoBackground autoPlay loop muted={!isPlaying}>
                <source src="/public/video/madmovie2.mp4" />
            </VideoBackground>
            <img
                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=300"
                alt="League of Legends"
            />
            {!isPlaying && <PlayButton onClick={handlePlayVideo}>무료로 플레이하기</PlayButton>}
        </Top>
    );
};

export default TopVideo;
