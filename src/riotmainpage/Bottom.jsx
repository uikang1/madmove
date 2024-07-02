import { PlayButton1, VideoBackgrounds } from './mainpagestyle';

const Bottom = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden', height: 640 }}>
            <VideoBackgrounds autoPlay loop muted>
                <source
                    src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/1f5b2cf01a1cf2afa1ce61febee6e2e900808347.mp4"
                    type="video/mp4"
                />
            </VideoBackgrounds>
            <div className="bottom">
                <a href="https://signup.kr.riotgames.com/" target="blank">
                    <PlayButton1>무료로 플레이하기</PlayButton1>
                </a>
            </div>
        </div>
    );
};

export default Bottom;
