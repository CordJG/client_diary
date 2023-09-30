import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
import NotFound from 'pages/NotFound';
import MainPage from './MainPage';

import Loading from 'components/sign/Loading';

function RoutingPages() {
    return (
        <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/oauthloading" element={<Loading />} />
        </Routes>
    );
}

export default RoutingPages;
