import NoticeList from './NoticeList';
import { NoticeInner, NoticeTop, NoticeWrap } from './noticeStyle';

const Notice = () => {
    return (
        <NoticeWrap>
            <NoticeTop>
                <h1>공지사항</h1>
                <p>게임 및 서비스 관련 공지사항</p>
            </NoticeTop>
            <NoticeInner>
                <NoticeList />
            </NoticeInner>
        </NoticeWrap>
    );
};

export default Notice;
