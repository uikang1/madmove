import React from 'react';
import { Link } from 'react-router-dom';
import { Descriptio, Image, Item } from './championstyle';

const ChampionItem = ({ champion }) => {
    return (
        <Link to={`/champion/${champion.id}`} style={{ textDecoration: 'none' }}>
            <Item>
                <Image src={champion.imgurl} alt={champion.desc} />
                <Descriptio>{champion.desc}</Descriptio>
            </Item>
        </Link>
    );
};

export default ChampionItem;
