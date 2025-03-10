import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
	border-bottom: 1px solid #ececec;
	display: flex;
`

function Navigation() {
	return (
		<NavigationContainer>
			<Link style={
				{
					'textDecoration': 'none',
					'color': 'black',
					'fontWeight': 'bolder',
					'fontSize': '28px',
					'borderLeft': '1px solid #ececec',
					'padding': '1.5rem',
					'whiteSpace': 'nowrap'
				}} to="/">
				Dayoung's Portfolio
			</Link>
		</NavigationContainer>
	);
}

export default Navigation;