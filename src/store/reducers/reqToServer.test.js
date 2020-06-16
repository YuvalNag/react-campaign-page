import reducer from './reqToServer'
import * as actionTypes from '../actions/actionTypes'

describe('reqToServer reducer', () => {
    it('should return the initialState', () => {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            error: false,
            loadingType: 'INIT'
        });
    });
    it('Start', () => {
        expect(reducer(undefined, {
            type: actionTypes.REQ_TO_SERVER_START,
            loadingType: 'START'
        })).toEqual({
            loading: true,
            error: false,
            loadingType: 'START'
        });
    });
    it('Success', () => {
        expect(reducer(undefined, {
            type: actionTypes.REQ_TO_SERVER_SUCCESS,
            loadingType: 'SUCCESS'

        })).toEqual({
            error: false,
            loading: false,
            loadingType: 'SUCCESS'
        });
    });
    it('Fail', () => {
        expect(reducer(undefined, {
            type: actionTypes.REQ_TO_SERVER_FAIL,
            error: 'some error'
        })).toEqual({
            loading: false,
            error: "some error",
            loadingType: null
        });
    });
});