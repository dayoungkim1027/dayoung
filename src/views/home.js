import styled from 'styled-components';
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { Link } from 'react-router-dom';
import ResumeDownload from '../assets/downloadResume.png';
import ProfileImage from '../assets/Dayoung-profile.jpeg';

const Portfolios = styled.div`
	display: flex;
	flex-direction: column;
`

const Portfolio = styled.div`
	margin: 4rem 2rem 6rem;
	display: flex;
	flex-direction: column;
	align-items: anchor-center;
`

const Name = styled.h1`
	font-weight: bolder;
	font-size: 4em;
	margin: 1rem 0;
`

const Occupation = styled.label`
	color: grey;
	font-size: 1.3em;
`

const Actions = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 1rem;
`

const ClickableIcon = styled.a`

`

const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 8rem 4rem;
	justify-content: space-around;
`

const ProfilePhoto = styled.img`
	width: 20em;
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
`

const ProjectsContainer = styled.div`
	background-color: #F6F6F6;
	display: flex;
	flex-direction: column;
	margin-top: 10rem;
	padding: 2rem;
	justify-content: center;
`

const ProjectsTitle = styled.label`
	color: #555555;
	display: flex;
	font-weight: bolder;
	font-size: 2em;
	justify-content: space-around;
	margin-top: 2rem;
`

const PreviewBox = styled.div`
	background-color: #EEEEEE;
	padding: 1rem;
	margin: .5rem;
	height: 10em;
`

const DescriptionBox = styled.div`
	margin: 1rem;
	display: flex;
	flex-direction: column;

`

const WorkName = styled.label`
	color: #707070;
	font-size: 20px
`

const Description = styled.label`
	color: #7D7D7D;
	margin-top: .5rem;
	font-size: 16px;
`


function Home() {
	const handleMouseOver = (event) => {
		event.target.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
	};
	const handleMouseOut = (event) => {
		event.target.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
	}; 
	const handleChildOver = (event) => {
		event.stopPropagation();
		// const parentElement = event.target.parentNode;
		// parentElement.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
	};
	const handleChildOut = (event) => {
		event.stopPropagation();
		// const parentElement = event.target.parentNode;
		// parentElement.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
	};
	const onButtonClick = () => {
		const pdfUrl = "/DayoungKim_resume.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "DayoungKim_SWE_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const myWork = [
		{
			name: 'DeeKay the Chatbot',
			src: '/chatbot.png',
			path: '/askDeeKay',
			description: 'Chatbot using by Gemini 2.0 Flash',
		},
		{
			name: 'MBTI Survey App',
			src: '/mbti-app.png',
			path: '/polls',
			description: 'Survey app with polls and comments',
		}
	]


	return (
		<div className="Home">
			<Portfolios>
				<Portfolio>
					<ProfilePhoto src={ProfileImage}/>
					<Name>DAYOUNG KIM</Name>
					<Occupation>Frontend Software Engineer</Occupation>
					<Actions>
						<ClickableIcon target='_blank' rel="noreferrer" href="https://github.com/dayoungkim1027">
							<LinkedIn style={{ 'width': '50px', 'height': '50px' }}/>
						</ClickableIcon>
						<ClickableIcon target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/dayoung-kim-b7b4b8a1">
							<Github style={{ 'width': '45px', 'height': '50px', 'marginLeft': '.5rem' }}/>
						</ClickableIcon>
						<ClickableIcon onClick={onButtonClick} style={{ 'cursor': 'pointer'}}>
							<img src={ResumeDownload} alt="Download Resume" style={{ 'width': '45px', 'height': '45px', 'marginTop': '3px', 'marginLeft': '.5rem' }}/>
						</ClickableIcon>
					</Actions>
				</Portfolio>

				<ProjectsContainer>
					<ProjectsTitle>
						SOME OF MY LATEST WORK
					</ProjectsTitle>
					<Products>
						{myWork.map((work, index) => (
							<Link style={
								{
									'textDecoration': 'none',
									'padding': '0',
									'color': 'black',
									'fontWeight': 'bolder',
									'fontSize': '28px',
									'border': '1px solid #EEEEEE',
									'boxShadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
									'whiteSpace': 'nowrap',
									'marginTop': '1rem',
									'backgroundColor': 'white',
								}} key={index} onMouseOver={handleMouseOver}
								onMouseOut={handleMouseOut} to={work.path}>
									<PreviewBox onMouseOver={handleChildOver} onMouseOut={handleChildOut}>
										<img style={{ 'width': '15em' }} src={work.src} alt={work.name}></img>
									</PreviewBox>
									<DescriptionBox onMouseOver={handleChildOver} onMouseOut={handleChildOver}>
										<WorkName>{work.name}</WorkName>
										<Description>{work.description}</Description>
									</DescriptionBox>
							</Link>
						))}			
					</Products>
				</ProjectsContainer>
			</Portfolios>
		</div>
	);
}

export default Home;