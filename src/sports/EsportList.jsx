import { useState } from 'react';
import EsportItem from './EsportItem';
import EsportData from '../assets/api/Esport';
import { List, MoreButton } from './esportstyle';

const EsportList = () => {
    const [BtnItems, setBtnItems] = useState(12);
    const MoreItems = () => {
        setBtnItems((prevVisibleItems) => prevVisibleItems + 12);
    };

    return (
        <>
            <List>
                {EsportData.slice(0, BtnItems).map((item) => (
                    <EsportItem key={item.id} items={item} />
                ))}
            </List>
            {BtnItems < EsportData.length && <MoreButton onClick={MoreItems}>+더보기</MoreButton>}
        </>
    );
};

export default EsportList;
