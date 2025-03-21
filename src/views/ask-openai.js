import styled from 'styled-components';
import askOpenAI from '../api/askOpenAI';
import { useRef, useState } from 'react';
import Pentagon from '../assets/pentagon.png';
import ReactMarkdown from 'react-markdown';
import Ellipsis from './ellipsis';
import { useDispatch, useSelector } from 'react-redux';
import { setChatHistory1 } from '../store/historySlice'

const OpenAIContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 1rem 4rem;

	@media (max-width: 770px) {
		margin: 1rem;
	}
`

const AnswerContainer = styled.div`
	background-color: #F6F5F2;
	border-radius: 7px;
	max-width: 80%;
	overflow: scroll;
	margin-left: .5rem;
	padding: 0 1rem;

	@media (max-width: 770px) {
		max-width: 70%;
	}
`

const UserQuestion = styled.div`
	background-color: black;
	border-radius: 7px;
	margin: 0;
	padding: 1rem;
	margin-left: auto;
	max-width: 80%;

	@media (max-width: 770px) {
		max-width: 70%;
	}
`

const TextInput = styled.textarea`
	display: flex;
	padding: 1rem;
	margin: 1rem 4rem .5rem;
	border: 1px solid grey;
	border-radius: 7px;

	@media (max-width: 770px) {
		margin: 1rem 1rem .5rem;
	}
`

const NonAnswer = styled.p`
	padding: 1rem;
	overflow: scroll;
	margin-left: auto;
	text-align: center;
`

const UserInputContainer = styled.div`
	display: flex;
	margin: 1rem 4rem;
	color: white;
	border-radius: 7px;

	@media (max-width: 770px) {
		margin: 1rem;
	}
`

const Loading = styled.div`
	margin: 1rem 0;
  text-align: center;
`

const AIimage = styled.img`
	width: 30px;
	padding: 7px;
`

const Info = styled.div`
	display: flex;
	margin: 0 4rem;

	@media (max-width: 770px) {
		margin: 0 1rem 1rem;
	}
`

const Label = styled.label`
	color: grey;
	font-size: 12px;
`
const InfoLink = styled.a`
	text-decoration: none;
`

const LabelTitle = styled.label`
	font-size: 12px;
	white-space: nowrap;
	color: black;
	margin-right: .5rem;
`

const OuterDiv = styled.div`
	display: flex;
	flex-direction: column;
`

const Heading = styled.div`
	display: flex;
	flex-direction: row;
	font-weight: bolder;
	padding: 1rem 1.5rem;

	background-color: black;
	color: white;
`

const HeadingTitle = styled.p`
	font-size: 27px;
  margin: 0;
	margin-left: 1rem;
`
const AIimageContainer = styled.div`
	background-color: black;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	overflow: hidden;
	margin-top: auto;
`

const IntroContainer = styled.div`
	margin: 4rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
  justify-content: center;

	@media (max-width: 770px) {
		margin: 2rem 1rem;
	}
`

const Intro = styled.p`
	text-align: center;
	color: grey;
`

function AskOpenAI() {
	const historyFromStore = useSelector((state) => state.history.data);
  const dispatch = useDispatch();

	const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
	const inputRef = useRef(null);
	const bottomOfPage = useRef(null);
	
	const onTextInputChange = (event) => {
		setQuestion(event.target.value);
	}

	const addToChatHistory = (type, value) => {
		dispatch(setChatHistory1({ type, text: value }));
	};

	const clearTextInput = () => {
		if (inputRef.current) {
      inputRef.current.value = '';
    }
	}

	const scrollToBottom = () => {
		bottomOfPage.current.scrollIntoView({ behavior: "smooth" }) 
	}   

	const handleKeyDown = async (event) => {
		if (event.key === 'Enter') {
			setLoading(true);
			addToChatHistory('question', question);
			await askOpenAI(question).then((answer) => {
				setLoading(false);
				addToChatHistory('answer', answer);
				clearTextInput();
			}).then(() => {
				scrollToBottom();
			}).catch(() => {
				setError('OpenAI is sleeping, please try again later.')
				setLoading(false);
			});
		}
	}

	return (
		<>
			<OuterDiv>
				<Heading>
					<img style={{'width': '30px' }} src={Pentagon} alt="ai logo"/>
					<HeadingTitle style={{}}>DeeKay</HeadingTitle>
				</Heading>

				<IntroContainer>
					<AIimageContainer>
						<AIimage src={Pentagon} alt="AI answering question"/>
					</AIimageContainer>
					<HeadingTitle style={{}}>DeeKay</HeadingTitle>
					<Intro>
						Hi! I'm DeeKay! (OpenAI 2.0 Flash)<br></br>
						Ask me anything!
					</Intro>
				</IntroContainer>

				{historyFromStore.map((historyItem) => (
					<>
					{historyItem.type === 'question' && (
						<UserInputContainer>
							<UserQuestion>{historyItem.text}</UserQuestion>
						</UserInputContainer>
					)}
					{historyItem.type === 'answer' && (
						<OpenAIContainer>
							<AIimageContainer>
								<AIimage src={Pentagon} alt="AI answering question"/>
							</AIimageContainer>
							<AnswerContainer>
								{historyItem.text && (
									<ReactMarkdown>{historyItem.text}</ReactMarkdown>
								)}
								{!historyItem.text && error && (
									<NonAnswer>{error}</NonAnswer>
								)}
							</AnswerContainer>
						</OpenAIContainer>
					)}
					</>
				))}

				{loading && (
					<OpenAIContainer>
						<AIimageContainer>
							<AIimage src={Pentagon} alt="AI answering question"/>
						</AIimageContainer>
						<AnswerContainer>
							<Loading><Ellipsis/></Loading>
						</AnswerContainer>
					</OpenAIContainer>
				)}

				<TextInput
					placeholder="Type your question here.."
					disabled={loading}
					ref={inputRef}
					onKeyDown={handleKeyDown}
					onChange={onTextInputChange}
				/>
				<Info ref={bottomOfPage}>
					<LabelTitle>Powered by: </LabelTitle>
					<Label>
						<InfoLink href="https://deepmind.google/technologies/gemini/flash/" target="_blank" rel="noreferrer"> OpenAI 2.0 Flash </InfoLink> for LLM API,
						<InfoLink href="https://vercel.com/" target="_blank" rel="noreferrer"> Vercel </InfoLink> for hosting, 
						<InfoLink href="https://react.dev/" target="_blank" rel="noreferrer"> React </InfoLink> for frontend, 
						<InfoLink href="https://nodejs.org/en" target="_blank" rel="noreferrer"> NodeJS </InfoLink> and
						<InfoLink href="https://expressjs.com/" target="_blank" rel="noreferrer"> ExpressJS </InfoLink> for backend.
						All of these made with ♥ by Dayoung
					</Label>
				</Info>
			</OuterDiv>
			
		</>
	)
}

export default AskOpenAI;