import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuStatus } from '../store/menuSlice';

const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
  border-right: 1px solid #ececec;
	height: 100%;
	background-color: white;
	position: absolute;
	top: 82px;
`

const ExternalLink = styled.a`
	text-decoration: none;
	color: black;
	font-size: 18px;
	border-bottom: 1px solid #ececec;
	padding: 1rem;
`

export const MenuItems = [
	{
		title: 'Ask Gemini',
		path: '/askGemini'
	}
];


function Menu() {
	const dispatch = useDispatch();
	const closeHamburgerMenu = () => {
		dispatch(setMenuStatus({ open: false }));
	}
	const handleMouseOut = (event) => {
		event.target.style.backgroundColor = '';
			event.target.style.color = 'black';
	}; 
		const handleMouseOver = (event) => {
		event.target.style.backgroundColor = '#D0C9C0';
			event.target.style.color = '#9A7E6F';
	};

	return (
		<MenuContainer>
			{MenuItems.map(menu => (
				<Link style={
					{
						'textDecoration': 'none',
						'color': 'black',
						'fontSize': '18px',
						'borderBottom': '1px solid #ececec',
						'padding': '1rem'
					}} onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut} onClick={closeHamburgerMenu} to={menu.path}>
					{menu.title}
				</Link>
			))}
			<ExternalLink href="https://mbti-survey-app-dayoung.vercel.app/" rel="noreferrer" alt="homepage">MBTI survey app</ExternalLink>

		</MenuContainer>
	)
}

export default Menu;