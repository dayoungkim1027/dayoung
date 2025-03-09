import styled from 'styled-components';
import askGemini from '../api/askGemini';
import { useState } from 'react';
import Thinker from '../assets/thinker.png';
import AI from '../assets/ai.png';

const GeminiContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 15em;
`

const AnswerContainer = styled.div`
	border: 1px solid #B4B4B8;
	border-radius: 7px;
	width: 13em;
	height: 15em;
	overflow: scroll;
`

const TextInput = styled.textarea`
	padding: 1rem;
	width: -webkit-fill-available;
	border: 1px solid #B4B4B8;
	border-radius: unset;
	border-radius: 7px;
`

const Answer = styled.p`
	margin: 0;
	padding: 1rem;
	overflow: scroll;
	margin-left: auto;
`

const NonAnswer = styled.p`
	padding: 1rem;
	overflow: scroll;
	margin-left: auto;
	text-align: center;
`

const UserInputContainer = styled.div`
	display: flex;
	flex-direction: row;
	order: 2;
  margin-left: auto;
	height: 15em;
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin: 4rem;
`

const Loading = styled.div`
	margin: 1.5rem;
  text-align: center;
`

const ThinkerImg = styled.img`
	width: 5em;
	height: min-content;
	display: flex;
  margin-top: auto;
`

const AIimage = styled.img`
	width: 5em;
	height: min-content;
	display: flex;
  margin-top: auto;
`

const Info = styled.div`
	display: flex;
	margin: 2rem;
`

const Label = styled.label`
	color: grey;
`
const InfoLink = styled.a`
	text-decoration: none;
`

const LabelTitle = styled.label`
	color: black;
	margin-right: .5rem;
`

function AskGemini() {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
	const onTextInputChange = (event) => {
		setQuestion(event.target.value);
	}

	const handleKeyDown = async (event) => {
		if (event.key === 'Enter') {
			setLoading(true);
			await askGemini(question).then((answer) => {
				setAnswer(answer);
				setLoading(false);
			}).catch(() => {
				setError('Gemini is sleeping, please try again later.')
				setLoading(false);
			});
		}
	}

	return (
		<>
			<Container>
				<GeminiContainer>
					<AIimage src={AI} alt="AI answering question"/>
					<AnswerContainer>
						{!loading && !answer && !error && (
							<Loading>...</Loading>
						)}
						{answer && (
							<Answer>{answer}</Answer>
						)}
						{!answer && error && (
							<NonAnswer>{error}</NonAnswer>
						)}
						{loading && (
							<Loading>Thinking...</Loading>
						)}
					</AnswerContainer>
				</GeminiContainer>
				<UserInputContainer>
					<TextInput placeholder="Type your question here.." disabled={loading} onKeyDown={handleKeyDown} onChange={onTextInputChange} />
					<ThinkerImg src={Thinker} alt="Me asking question"/>
				</UserInputContainer>
			</Container>
			<Info>
				<LabelTitle>Powered by: </LabelTitle>
				<Label>
					<InfoLink href="https://vercel.com/" target="_blank" rel="noreferrer"> Vercel </InfoLink> for hosting, 
					<InfoLink href="https://react.dev/" target="_blank" rel="noreferrer"> React </InfoLink> for frontend, 
					<InfoLink href="https://nodejs.org/en" target="_blank" rel="noreferrer"> NodeJS </InfoLink> and
					<InfoLink href="https://expressjs.com/" target="_blank" rel="noreferrer"> ExpressJS </InfoLink> for backend
				</Label>
			</Info>
			
		</>
	)
}

export default AskGemini;