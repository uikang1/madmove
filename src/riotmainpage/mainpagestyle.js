import styled from 'styled-components';

export const MainpageContainer = styled.div`
    .bottom {
        text-align: center;
        margin-bottom: 50px;
    }
`;
export const Inner = styled.div`
    width: 1600px;
    margin: 0 auto;
`;

export const Top = styled.div`
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    padding-bottom: 100px; // 수정된 부분
`;

export const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 640px;
    object-fit: cover;
    z-index: -1;
`;

export const Section = styled.section`
    padding: 80px 20px;
    text-align: center;
    background-image: ${({ backgroundImage }) => backgroundImage && `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
`;

export const ArenaSection = styled(Section)`
    height: 640px;
    background-image: url('/mainpageimg/gamemod.png');
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 64px;
        font-weight: 700;
        font-style: italic;
    }
    p {
        font-size: 18px;
        margin-top: 16px;
        margin-bottom: 30px;
    }
`;
export const NewsSection = styled(Section)`
    text-align: left;
    h2 {
        font-size: 32px;
        font-weight: 700;
        color: #333;
        margin-bottom: 24px;
        font-style: italic;
    }
    b {
        color: #c8aa6e;
        font-size: 14px;
    }
    span {
        font-size: 14px;
        color: #666;
    }
    p {
        font-size: 20px;
        font-weight: 700;
        margin-top: 8px;
        margin-bottom: 10px;
    }
    em {
        font-size: 18px;
        color: #333;
    }
`;
export const ChampionSection = styled(Section)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 20px;
    background-image: url('/mainpageimg/img2.png');
    background-size: cover;
    background-position: center;
    height: 1000px;
    color: #333;

    h2 {
        font-size: 22px;

        margin-left: 150px;
        b {
            font-size: 80px;
            font-weight: 700;
        }
    }
    p {
        font-size: 18px;
    }
`;
export const ChampionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
`;

export const NewsItems = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const NewsItem = styled.div`
    width: 30%;
`;

export const NewsImage = styled.img`
    width: 100%;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.02);
    }
`;
export const ChampionCategories = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    padding: 0;
    margin-bottom: 50px;
`;

export const CategoryItem = styled.li`
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    p {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }
`;
export const CategoryImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
`;
export const FeaturedChampion = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: 16px;
    }
    em {
        font-size: 24px;
        font-weight: 700;
    }
`;

export const ChampionImage = styled.img`
    width: 700px;
    height: 700px;
    margin-left: 20px;
`;
export const MapSections = styled.section`
    padding: 80px 20px;
    text-align: center;
    background-image: url('/mainpageimg/gameplayback.png');
    background-size: cover;
    background-position: center;
    color: #fff;
`;
export const MapContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const MapContent = styled.div`
    h2 {
        margin-left: 10px;
        margin-top: 290px;
        font-size: 22px;
    }
    b {
        font-size: 80px;
        font-weight: 700;
    }
`;
export const StyledLink = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: #c8aa6e;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
    margin-top: 64px;
    margin-bottom: 40px;
    &:hover {
        background-color: #005ba1;
    }
`;

export const Video = styled.video`
    pointer-events: none;
    border-radius: 50%;
`;

export const PlayModes = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Li = styled.li`
    margin-left: 50px;
    cursor: pointer;
`;

export const PlayDetails = styled.div`
    margin-top: 20px;
    h2 {
        font-size: 22px;
        font-weight: 700;
    }
`;
export const MoreSecions = styled.div`
    text-align: center;
    margin-bottom: 50px;
    h2 {
        font-size: 22px;
        line-height: 1.1;
        margin-top: 40px;
        margin-bottom: 170px;
        b {
            font-size: 80px;
            font-weight: 700;
        }
    }
`;
export const InfoItems = styled.div`
    display: flex;
`;

export const InfoItem = styled.div`
    width: 30%;
    margin: 0 auto;
    text-align: left;
    cursor: pointer;
    .txt {
        color: #c8aa6e;
        font-weight: 700;
    }
    p {
        margin-bottom: 10px;
        margin-top: 10px;
        font-weight: 700;
        font-size: 22px;
    }
    em {
        font-size: 18px;
        font-weight: 500;
    }
`;

export const InfoImage = styled.img`
    width: 100%;
    margin-bottom: 20px;
`;

export const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#000',
        border: 'none',
    },
};

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
`;

export const PlayButton1 = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #c8aa6e;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: #005ba1;
    }
`;

export const PlayButton = styled.button`
    background-color: #c8aa6e;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: #005ba1;
    }
`;
export const VideoBackgrounds = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;
