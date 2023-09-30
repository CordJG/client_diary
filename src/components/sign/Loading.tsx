import styled from 'styled-components';
import axios from 'axios';
import { LoginPost } from 'types/AxiosInterface';

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
`;

export const Loading = () => {
    const BaseUrl = `${process.env.REACT_APP_API_URL}/members/oauth/signup`;
    /** 2023/05/16 - 로딩페이지(콜백리다이렉트)로 이동시, 네이버 요청인 경우 - 박수범 */
   
    /** 2023/05/16 - 로딩페이지(콜백리다이렉트)로 이동시, 카카오,구글 요청인 경우 - 박수범 */
    if (location.search) {
        const googletoken = new URL(location.href).searchParams.get('access_token');
        const googlerefresh = new URL(location.href).searchParams.get('refresh_token');
        /** 2023/05/16 - 구글 요청인 경우 - 박수범 */
        if (googlerefresh && googletoken) {
            window.localStorage.setItem('access_token', `Bearer ${googletoken}`);
            window.localStorage.setItem('refresh_token', googlerefresh);
            axios
                .get(`${process.env.REACT_APP_API_URL}/members/info`, {
                    headers: {
                        Authorization: `Bearer ${googletoken}`,
                    },
                })
                .then((res) => {
                    const googleemail = res.data.data.email.slice(0, -1);
                    const googleickname = res.data.data.name;
                    const googleimg = res.data.data.image;
                    const googlememberid = res.data.data.memberId;
                    window.localStorage.setItem('useremail', googleemail);
                    window.localStorage.setItem('usernickname', googleickname);
                    window.localStorage.setItem('userimg', googleimg);
                    window.localStorage.setItem('memberId', googlememberid);
                    window.location.href = '/';
                });
        }
        /** 2023/05/16 - 카카오 요청인 경우 - 박수범 */
    }
    return (
        <Background>
            <LoadingText>잠시만 기다려 주세요...</LoadingText>
            <img src="./assets/Dual Ring-1s-124px.gif"></img>
        </Background>
    );
};

export default Loading;
