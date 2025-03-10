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
	margin: 2rem 2rem 6rem;
	display: flex;
	flex-direction: column;
	margin-left: auto;
`

const Name = styled.h1`
	font-weight: bolder;
	font-size: 5em;
	margin-bottom: 0;
	margin-left: auto;
	text-align: right;
`

const Occupation = styled.label`
	color: grey;
	font-size: 1.3em;
	margin-left: auto;
`

const Actions = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: auto;
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

const ProfilePhoto = styled.div`
`

function Home() {
	const handleMouseOut = (event) => {
		event.target.style.backgroundColor = '';
		event.target.style.border = '1px solid black';
		event.target.style.color = 'black';
	}; 
	const handleMouseOver = (event) => {
		event.target.style.backgroundColor = '#F8EDE3';
		event.target.style.border = '1px solid #F8EDE3';
		event.target.style.color = '#D0B8A8';
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
							<Github style={{ 'width': '45px', 'height': '50px', 'margin-left': '.5rem' }}/>
						</ClickableIcon>
						<ClickableIcon onClick={onButtonClick} style={{ 'cursor': 'pointer'}}>
							<img src={ResumeDownload} alt="Download Resume" style={{ 'width': '45px', 'height': '45px', 'margin-top': '3px', 'margin-left': '.5rem' }}/>
						</ClickableIcon>
					</Actions>
				</Portfolio>

				<Products>
					<Link style={
						{
							'textDecoration': 'none',
							'padding': '2rem',
							'color': 'black',
							'fontWeight': 'bolder',
							'fontSize': '28px',
							'border': '1px solid grey',
							'white-space': 'nowrap',
							'marginTop': '1rem'
						}} onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut} to="/askDeeKay">
						DeeKay the Chatbot
					</Link>
					<Link style={
						{
							'textDecoration': 'none',
							'padding': '2rem',
							'color': 'black',
							'fontWeight': 'bolder',
							'fontSize': '28px',
							'border': '1px solid grey',
							'white-space': 'nowrap',
							'marginTop': '1rem'
						}} onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut} to="/polls">
						MBTI Survey App
					</Link>					
			</Products>
			</Portfolios>
		</div>
	);
}

export default Home;