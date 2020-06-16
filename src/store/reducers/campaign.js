import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'


const initialState = {
    campaign: null
}


const fetchCampaignSuccess = (state, action) => {
    return updateObject(state, {
        campaign: action.campaign
    });
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CAMPAIGN_SUCCESS: return fetchCampaignSuccess(state, action)
        default: return state;
    }

}

export default reducer