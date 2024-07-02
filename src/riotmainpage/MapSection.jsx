import { useState } from 'react';
import gamevideoData from '../assets/api/GameVideo';

import {
    MapSections,
    PlayDetails,
    PlayModes,
    StyledLink,
    MapContainer,
    MapContent,
    Video,
    Ul,
    Inner,
    Li,
} from './mainpagestyle';

const MapSection = () => {
    const [currentVideo, setCurrentVideo] = useState(gamevideoData[0]);

    const handleLiClick = (video) => {
        setCurrentVideo(video);
    };

    return (
        <MapSections>
            <Inner>
                <MapContainer>
                    <MapContent>
                        <h2>
                            다양하게
                            <br /> <b>플레이</b>
                        </h2>
                        <StyledLink href="https://signup.kr.riotgames.com/" target="blank">
                            지금플레이하기
                        </StyledLink>
                        <PlayModes>
                            <Ul>
                                {gamevideoData.map((video, index) => (
                                    <Li key={index} onClick={() => handleLiClick(video)}>
                                        <img
                                            src={`../public/mainpageimg/playimg${index + 1}.jpg`}
                                            alt=""
                                        />
                                        <p>{video.name}</p>
                                    </Li>
                                ))}
                            </Ul>
                        </PlayModes>
                    </MapContent>
                    <PlayDetails>
                        <Video
                            src={currentVideo.video}
                            alt=""
                            muted
                            autoPlay
                            controlsList="nodownload"
                        />
                        <h2>{currentVideo.title}</h2>
                        <p>{currentVideo.text}</p>
                    </PlayDetails>
                </MapContainer>
            </Inner>
        </MapSections>
    );
};

export default MapSection;
