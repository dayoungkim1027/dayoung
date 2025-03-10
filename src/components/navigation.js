import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HamburgerMenu } from '../assets/menu.svg';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuStatus } from '../store/menuSlice';

const NavigationContainer = styled.div`
	border-bottom: 1px solid #ececec;
	display: flex;
`

const MenuContainer = styled.div`
	padding: 1rem;
	cursor: pointer;
`

function Navigation() {
	const dispatch = useDispatch();
	const isMenuOpen = useSelector((state) => state.menuStatus.data).open;

	const [showMenu, setShowMenu] = useState(isMenuOpen);

	const onMenuClick = () => {
		dispatch(setMenuStatus({ open: showMenu ? false : true }));
		setShowMenu(showMenu ? false : true);
	};

	return (
		<NavigationContainer>
			<MenuContainer onClick={onMenuClick}>
				<HamburgerMenu style={{'marginTop': '.7rem'}}/>
			</MenuContainer>
			<Link style={
				{
					'textDecoration': 'none',
					'color': 'black',
					'fontWeight': 'bolder',
					'fontSize': '28px',
					'borderLeft': '1px solid #ececec',
					'padding': '1.5rem',
					'white-space': 'nowrap'
				}} to="/">
				Dayoung's Portfolio
			</Link>
		</NavigationContainer>
	);
}

export default Navigation;