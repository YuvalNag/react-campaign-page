import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GlowingButtonsGroup from '../../components/GlowingButtonsGroup/GlowingButtonsGroup';
import { GiBrutalHelm, GiNinjaHead, GiSkullSabertooth, GiBrain, GiJasonMask, GiTigerHead, GiShurikenAperture, GiBatMask, GiCaduceus, GiCobra } from 'react-icons/gi'
import { TiArrowShuffle } from 'react-icons/ti'

import styled from 'styled-components';
import backgroundImg from '../../assets/images/background1.jpg';
import TeamsCarousel from '../../components/TeamsCarousel/TeamsCarousel';

import axios from '../../axios/axios-campaign'
import * as actions from '../../store/actions/index'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux';
import Campaign from '../../classes/Campaign/Campaign';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const BackgroundImg = styled.section`
background-image: url(${backgroundImg});
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
width: 100%;
height: 100vh;
`

const CampaignHeader = styled.h1`
-webkit-box-reflect: below 5px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(0.6,transparent),to(white));
    position: absolute;
    left: 55%;
    color: aliceblue;
`
const teamsIcons = [<GiNinjaHead />, <GiBrutalHelm />, <GiSkullSabertooth />, <GiBrain />, <GiTigerHead />, <GiJasonMask />, <GiShurikenAperture />, <GiBatMask />, <GiCobra />, <GiCaduceus />]

export function TeamsView(props) {

    const { campaign, onFetchCampaign } = props
    const [campaignName, setCampaignName] = useState('')
    const [teams, setTeams] = useState([])
    const [teamIndex, setTeamIndex] = useState(0)

    useEffect(() => {
        if (campaign) {
            setCampaignName(campaign.name)
            setTeams(campaign.teams.map((team, idx) => {
                team.icon = teamsIcons[idx % teamsIcons.length]
                return team
            }))
        }
        return
    }, [campaign])


    useEffect(() => {
        onFetchCampaign()
        return
    }, [onFetchCampaign])


    return (
        <div>
            <CampaignHeader>
                {campaignName}
                <OverlayTrigger
                    placement='right'
                    overlay={
                        <Tooltip >
                            {'next campaign'}
                        </Tooltip>
                    }>
                    <TiArrowShuffle style={{ cursor: 'pointer' }} onClick={onFetchCampaign} />
                </OverlayTrigger>
            </CampaignHeader>
            <BackgroundImg>
                <TeamsCarousel teams={teams} handleSelect={setTeamIndex} teamIndex={teamIndex} />

                <GlowingButtonsGroup teams={teams} handleSelect={setTeamIndex} teamIndex={teamIndex} />

            </BackgroundImg>
        </div>
    )
}

TeamsView.propTypes = {
    campaign: PropTypes.instanceOf(Campaign),
    onFetchCampaign: PropTypes.func
}

const mapStateToProps = state => {
    return {
        campaign: state.campaign.campaign,

        loading: state.reqToServer.loading,
        loadingType: state.reqToServer.loadingType,


    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCampaign: () => dispatch(actions.fetchCampaign()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(TeamsView, axios))

