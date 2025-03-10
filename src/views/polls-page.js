import Polls from '../components/polls'
import styled from 'styled-components';
import Filter from '../components/filter';

const ActionContainer = styled.div`
	display: flex;
	flex-direction: row;
`
function PollsPage() {
	return (
		<div>
			<ActionContainer>
				<Filter />
			</ActionContainer>
			<Polls></Polls>
		</div>
	);
}

export default PollsPage;