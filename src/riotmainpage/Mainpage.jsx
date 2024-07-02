import ArenaSectioncontainer from './ArenaSectioncontainer';
import Bottom from './Bottom';
import ChampionSectionList from './ChampionSectionList';
import MapSection from './MapSection';
import MoreSection from './MoreSection';
import NewsSectioncontainer from './NewsSectioncontainer';
import TopVideo from './TopVideo';
import { Inner, MainpageContainer } from './mainpagestyle';

const Mainpage = () => {
    return (
        <MainpageContainer>
            <TopVideo />
            {/* 상단비디오 */}
            <ArenaSectioncontainer />
            {/* 게임모드 */}
            <Inner>
                <NewsSectioncontainer />
            </Inner>
            {/* 주목할만한소식 */}
            <Inner>
                <ChampionSectionList />
            </Inner>
            {/* 챔피언선택 */}
            <MapSection />
            {/* 다양하게 플레이 */}
            <MoreSection />
            {/* 더 자세하게 알아보기 */}
            <Bottom />
            {/* 무료로플레이하기 하단 */}
        </MainpageContainer>
    );
};

export default Mainpage;
