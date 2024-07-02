import EsportList from './EsportList';
import { Esporinner, EsportTop, EsportWrap } from './esportstyle';

const Esport = () => {
    return (
        <EsportWrap className="esport">
            <EsportTop className="top">
                <h1>E 스포츠</h1>
                <p>전 세계를 무대로 펼쳐지는 리그 오브 레전드의 e스포츠 소식</p>
            </EsportTop>
            <div>
                <Esporinner>
                    <EsportList />
                </Esporinner>
            </div>
        </EsportWrap>
    );
};

export default Esport;
