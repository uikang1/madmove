import { HashRouter, Routes, Route } from 'react-router-dom';
import Champion from './champions/Champion';
import ChampionDetail from './champions/ChampionDetail';
import GlobalStyle from './styled/GlobalStyle';
import Notice from './notice/Notice';
import Esport from './sports/Esport';
import Mainpage from './riotmainpage/Mainpage';

const App = () => {
    return (
        <HashRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/champion" element={<Champion />} />
                <Route path="/main" element={<Mainpage />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/esport" element={<Esport />} />
                <Route path="/champion/:id" element={<ChampionDetail />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
