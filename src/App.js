import Navigation from './components/navigation'
import { Route, Routes } from 'react-router-dom';
import Home from './views/home'
import styled from 'styled-components';
import Poll from './views/poll';
import PollsPage from './views/polls-page';
import PollDetail from './views/poll-detail';
import CreatePost from './views/create-post';
import Menu from './components/menu';
import { useSelector } from 'react-redux';
import RelationshipPolls from './views/relationship-polls';
import ChildcarePolls from './views/childcare-polls';
import OccupationPolls from './views/occupation-polls';
import OtherPolls from './views/other-polls';
import GeminiPage from './views/ask-gemini';
// import OpenAIPage from './views/ask-openai';

const AppContainer = styled.div`
  overflow: scroll;
`;

function App() {
  const isMenuOpen = useSelector((state) => state.menuStatus.data).open;
  return (
    <AppContainer>
      <Navigation style={{'position': 'sticky', 'top': '0'}}></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/polls" element={<PollsPage/>}/>
        <Route path="/polls/:state" element={<Poll/>}/>
        <Route path="/polls/:state/survey-results" element={<PollDetail/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/relationship" element={<RelationshipPolls/>}/>
        <Route path="/childcare" element={<ChildcarePolls/>}/>
        <Route path="/occupation" element={<OccupationPolls/>}/>
        <Route path="/others" element={<OtherPolls/>}/>
        <Route path="/askDeeKay" element={<GeminiPage/>}/>
        {/* <Route path="/askOpenAI" element={<OpenAIPage/>}/> */}
      
      </Routes>
      
      {isMenuOpen && (
        <Menu/>
      )}
    </AppContainer>
  );
}

export default App;
