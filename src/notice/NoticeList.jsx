import { useState } from 'react';
import NoticeItem from './NoticeItem';
import NoticeData from '../assets/api/Notice';
import { ListWrapper, MoreButton } from './noticeStyle';
import { GoPlusCircle } from 'react-icons/go';

const NoticeList = () => {
    const [Items, setItems] = useState(12);
    const totalItems = NoticeData.length;

    const MoreClick = () => {
        setItems(totalItems);
    };

    return (
        <>
            <ListWrapper>
                {NoticeData.slice(0, Items).map((item) => (
                    <NoticeItem key={item.id} data={item} />
                ))}
            </ListWrapper>
            {Items < totalItems && (
                <MoreButton onClick={MoreClick}>
                    <GoPlusCircle /> 더보기
                </MoreButton>
            )}
        </>
    );
};

export default NoticeList;
