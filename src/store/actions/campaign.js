import * as actionTypes from './actionTypes'
import axios from '../../axios/axios-campaign'
import { reqToServerStart, reqToServerFail, reqToServerSuccess } from './reqToServer'
import CampaignBuilder from '../../classes/CampaignBuilder/CampaignBuilder'

export const loadingTypes = {
    INIT: undefined,
    FETCH_CAMPAIGN: 'FETCH_CAMPAIGN'
}
export const buildCampaign = data => new CampaignBuilder(data.campaign_instance_id, data.campaign_name)
    .setTeams(data.team_instances)
    .build()
const fetchCampaignSuccess = (data) => {
    const campaign = buildCampaign(data)

    return {
        type: actionTypes.FETCH_CAMPAIGN_SUCCESS,
        campaign: campaign
    }
}
export const fetchCampaign = () => {
    return dispatch => {

        dispatch(reqToServerStart(loadingTypes.FETCH_CAMPAIGN))

        axios.get('/default/VisualizatorApi')
            .then(response => {
                dispatch(fetchCampaignSuccess(response.data));
                dispatch(reqToServerSuccess(actionTypes.FETCH_CAMPAIGN_SUCCESS))
            })

            .catch(error => {
                dispatch(reqToServerFail(error.response ? error.response.data ? error.response.data : error.response : error))
            })
    }
}