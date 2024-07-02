import { ArenaSection, Inner, PlayButton } from './mainpagestyle';

const ArenaSectioncontainer = () => {
    return (
        <ArenaSection>
            <Inner>
                <h2>게임 모드</h2>
                <h3>아레나 입장</h3>
                <p>
                    강력한 아이템, 새로운 맵, 두 배로 많아진 팀. 아레나가 역대급 규모로
                    돌아왔습니다.
                </p>

                <a href="https://www.leagueoflegends.com/ko-kr/news/dev/dev-arena/" target="blank">
                    <PlayButton>더 알아보기</PlayButton>
                </a>
            </Inner>
        </ArenaSection>
    );
};

export default ArenaSectioncontainer;
