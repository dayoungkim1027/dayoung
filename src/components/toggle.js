import styled from 'styled-components';

function Toggle({
	data
}) {
	return (
		<label class="switch">
			<input type="checkbox"/>
			<span class="slider round"></span>
		</label>
	)
}

export default Toggle;