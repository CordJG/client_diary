import Uncover from 'components/main/Diary';
import Info from 'components/main/Info';
import Footera from 'components/main/Footer';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';
// import PageScroller from 'react-page-scroller';
function MainPage() {
    const options = {
        activeClass: 'active', // the class that is appended to the sections links
        anchors: ['One', 'Two', 'Three'], // the anchors for each sections
        arrowNavigation: true, // use arrow keys
        delay: 1500, // the scroll animation speed
        navigation: true, // use dots navigatio
        scrollBar: false, // use the browser default scrollbar
    };
    return (
        <MainSection>
            <SectionsContainer {...options}>
                <Section>
                    <Uncover />
                </Section>
                <Section>
                    <Info />
                </Section>
                <Section>
                    <Footera />
                </Section>
            </SectionsContainer>
        </MainSection>
    );
}

export default MainPage;

const MainSection = styled.section`
    overflow: hidden;
`;
