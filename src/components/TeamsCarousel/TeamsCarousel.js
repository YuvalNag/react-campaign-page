import React from 'react'
import PropTypes from 'prop-types'
import TeamCard from './TeamCard/TeamCard'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'

const CarouselWrapper = styled.div`
left: 30%;
position: absolute;
top:15%;
height:90%
    `
function TeamsCarousel(props) {
    const { teamIndex, handleSelect, teams } = props
    return (
        <CarouselWrapper>
            <Carousel activeIndex={teamIndex}
                onSelect={id => handleSelect(id)}
                interval={null}
            >
                {teams.map(team => (
                    <Carousel.Item key={team.id}>
                        <TeamCard steps={team.steps} />
                        <Carousel.Caption>
                            <h2>Team: {team.name}</h2>
                        </Carousel.Caption>
                    </Carousel.Item>))}
            </Carousel>
        </CarouselWrapper>
    )
}

TeamsCarousel.propTypes = {
    teamIndex: PropTypes.number.isRequired,
    handleSelect: PropTypes.func.isRequired,
    teams: PropTypes.array.isRequired
}

export default TeamsCarousel

