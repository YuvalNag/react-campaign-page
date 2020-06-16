import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { MdStars, MdSync, MdReportProblem } from 'react-icons/md'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const statusIcons = {
    done: <MdStars size='3em' />,
    in_progress: <MdSync size='3em' />,
    not_started: <MdReportProblem size='3em' />
}
const Wrapper = styled.div`
height: 100px;
    text-align: center;
    border-style: dashed;
    /* border-top-style: unset; */
    border-color: #42e4e0;
    width: 70px;
    box-shadow: 0px 0px 20px 1px #42e4e0;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;
const StepStatus = styled.div`
margin-top:6px;

&.done{
    text-shadow: 0 0 15px #42e4e0;

}
&.not_started{
    color:red;
}
&.in_progress{
    color:yellow;
    animation: ${rotate} 1.5s ease-in-out infinite;
}
`
const StepName = styled.div`
color: antiquewhite;
border-color: #42e4e0;
border-top-style: dashed;
font-size: 20px;
`

function StepView(props) {
    const { name, status } = props
    let stepName = name
    const words = name && name.split(' ')
    if (words.length > 1) {
        stepName = words.map(word => word[0]).join('')
    }
    return (
        <Wrapper>
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip >
                        {status.replace('_', ' ')}
                    </Tooltip>
                }>
                <StepStatus
                    className={status}>
                    {statusIcons[status]}
                </StepStatus>
            </OverlayTrigger>
            <OverlayTrigger
                placement='bottom'
                overlay={
                    <Tooltip >
                        {name}
                    </Tooltip>
                }>
                <StepName>
                    {stepName.slice(0, 5)}
                </StepName>
            </OverlayTrigger>
        </Wrapper>
    )
}

StepView.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}

export default StepView

