import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
const ButtonsList = styled.ul`
position: relative;
width: 24em;
height: 24em;
top: 10%;
left: 13%;
`
const GlowingButton = styled.li`
  position: relative;
  list-style:none;
  display: block;
  width: 60px;
  height: 60px;
  text-align: center;
  background: #171515;
  border-radius: 50%;
  font-size: 30px;
  color: #666;
  transition: .5s;
  border: double;
  outline: none;
  // transform: rotate(${props => props.deg}deg) translate(2em) rotate(-${props => props.deg}deg);
  margin: 15px ${props => props.deg}px;



&:before {
    content: '';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:50%;
    transition: .5s;
    transform: scale(.9);
    z-index: -1;
  }
&:hover:before {
    transform: scale(1.2);
    box-shadow: 0 0 15px #42e4e0;
    filter: blur(3px);
  }  
  :hover {
    color: #42e4e0;
    box-shadow: 0 0 15px #42e4e0;
    text-shadow: 0 0 15px #42e4e0;
  }
&.clicked  {
    color: #42e4e0;
    box-shadow: 0 0 15px #42e4e0;
    text-shadow: 0 0 15px #42e4e0;
  }
`;

function GlowingButtonsGroup(props) {
  const { teamIndex, handleSelect, teams } = props
  return (
    <ButtonsList>
      {teams.map((team, i) => (
        < OverlayTrigger
          key={team.id}
          placement='bottom'
          overlay={
            < Tooltip >
              {team.name}
            </Tooltip>
          }>
          <GlowingButton
            onClick={() => handleSelect(i)}
            className={i === teamIndex && 'clicked'}
            deg={100 - (i * 55) + i * i * 3.8}  >{team.icon}
          </GlowingButton>

        </OverlayTrigger >))}
    </ButtonsList >
  )
}

GlowingButtonsGroup.propTypes = {
  teamIndex: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired
}

export default GlowingButtonsGroup

