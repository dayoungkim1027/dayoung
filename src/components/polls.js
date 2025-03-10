import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPolls } from '../api/getPolls';
import Audience from './audience'
import LikeIcon from '../assets/heart.png';

const PollsContainer = styled.div`
	padding: 0;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem 1rem 0 1.5rem;
`

const Title = styled.h2`
	font-size: 1.2em;
	margin-bottom: 0;
`

const Description = styled.p`
	font-size: .8em;
`

const Label = styled.label`
	color: #94969b;
	font-size: 12px;
`

const SocialContainer = styled.div`
	display: flex;
	border-bottom: 1px solid #ececec;
	padding: .5rem 1.5rem 1rem;
`

const Like = styled.img`
	vertical-align: middle;
	margin-left: auto;
  order: 2;
`

function Polls() {
	
	const polls = getPolls();

	return (
		<PollsContainer>
			{polls.map((poll) => (
				<Link style={
					{
						'textDecoration': 'none',
						'color': 'black'
					}} key={poll.id} to={`/polls/${poll.id}`} state={{poll}}>
					<Card>
						<Label>{poll.category.toUpperCase()}</Label>
						<Title>{poll.title}</Title>
						<Description>{poll.description}</Description>
					</Card>
					<SocialContainer>
						{/* {poll.posted_mbti}
						<ArrowImage src={ArrowIcon} />
						{poll.target_mbti.length === 16 && 'All'}
						{poll.target_mbti.length !== 16 && poll.target_mbti.join(',')} */}
						{/* <Audience mbti={poll.target_mbti} gender={poll.target_gender}></Audience> */}
						<Audience key={poll.id} postedMbti={poll.posted_mbti} targetMbti={poll.target_mbti} />
						<Like src={LikeIcon} />
						
						</SocialContainer>
				</Link>
			))}
		</PollsContainer>
	);
}

export default Polls;