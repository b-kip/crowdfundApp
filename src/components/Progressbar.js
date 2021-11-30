import styled from 'styled-components';

export default function Progressbar({ currentValue, maximumValue }) {
  let percentProgress = (currentValue / maximumValue) * 100;
  percentProgress = percentProgress.toFixed(2) + "%";
  // console.log("precentProgress", percentProgress);

  return (
    <Bar percentProgress={percentProgress}/>
  )
}

// used styled components because of ease of passing dynamic width.
// If I didnt' want to change my CSS, I could've used css-vars-hook
// to receive dynamic values using custom properties.
const Bar = styled.div`
  width: 100%;
  height: 1rem;
  background-color: rgba(122, 122, 122, 0.1);
  border-radius: 100vh;
  &::after {
    content: '';
    display: block;
    width: ${props => props.percentProgress};
    height: 100%;
    background-color: var(--clr-primary-light);
    border-radius: 100vh;
  }
`;
