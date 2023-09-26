import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
import NotFound from 'src/pages/NotFound';
import MainPage from './MainPage';

import Loading from 'src/components/sign/Loading';

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
