import styled from 'styled-components';
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg';
import { ReactComponent as Github } from '../assets/github.svg';

const Portfolios = styled.div`
	display: flex;
	flex-direction: row;
`

const Portfolio = styled.div`
	margin: 2rem;
	display: flex;
	flex-direction: column;
	margin-left: auto;
`

const Name = styled.h1`
	font-weight: bolder;
	font-size: 5em;
	margin-bottom: 0;
	margin-left: auto;
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
`

const ClickableIcon = styled.a`

`

function Home() {
	return (
		<div className="Home">
			<Portfolios>
				<Portfolio>
					<Name>DAYOUNG KIM</Name>
					<Occupation>Frontend Software Engineer</Occupation>
					<Actions>
						<ClickableIcon target='_blank' rel="noreferrer" href="https://github.com/dayoungkim1027">
							<LinkedIn style={{ 'width': '50px', 'height': '50px' }}/>
						</ClickableIcon>
						<ClickableIcon target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/dayoung-kim-b7b4b8a1">
							<Github style={{ 'width': '45px', 'height': '50px', 'margin-left': '.5rem' }}/>
						</ClickableIcon>
					</Actions>
				</Portfolio>
			</Portfolios>
		</div>
	);
}

export default Home;