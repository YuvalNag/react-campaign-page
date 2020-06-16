import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import directoryImg from '../../../assets/images/directory.png';
import StepView from '../../StepView/StepView';
import { MdNavigateNext } from 'react-icons/md';


const CardBackground = styled.img`
margin-left: 15%;
width: 70%;
height: -webkit-fill-available;
`
const CardContent = styled.div`
top: 26%;
left: 23%;
position: absolute;
width: 54%;
height: 56%;
padding: 20px;
display: grid;
color: yellowgreen;
border-style: groove;
border-radius: 9%;
border-top-left-radius: 4%;
box-shadow: 0px 0px 15px 0px #ffffff;
`
const ContentRow = styled.div`
display: inline-flex;
justify-content: space-around;
`
const forward = keyframes`
  from {
    transform: translateX(-90%);
  }

  to {
    transform: translateX(90%);
  }
`;
const NextArrow = styled.div`
height: fit-content;
    margin-top: 5%;
    box-shadow: 0px 9px 14px 0px #42e4e;
    color: #42e4e;
    animation: ${forward} 1s ease-in-out  ${props => props.delay}s;

`

function TeamCard(props) {
    const { steps } = props
    const createContentRows = (array, chunk) => {
        let i, j, tempArray, contentRows = []
        for (i = 0, j = array.length; i < j; i += chunk) {
            const loopNum = i
            tempArray = array.slice(i, i + chunk)
            const last = tempArray.length - 1
            const contentRow = (
                < ContentRow key={i + '_row'}>
                    {tempArray.map((step, idx) => (
                        <Fragment key={step.id}>
                            <StepView key={step.id + '_step'} status={step.status} name={step.name} />
                            {idx !== last && <NextArrow key={step.id + '_next'} delay={loopNum + idx} >
                                <MdNavigateNext size='3em' />
                            </NextArrow>}
                        </Fragment>))}
                </ContentRow >)
            contentRows.push(contentRow)
        }
        return contentRows
    }
    return (
        <div>
            <CardBackground src={directoryImg} />
            <CardContent >
                {createContentRows(steps, 4)}
            </CardContent>
        </div>

    )
}

TeamCard.propTypes = {
    steps: PropTypes.array.isRequired
}

export default TeamCard

