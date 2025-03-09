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

		</MenuContainer>
	)
}

export default Menu;