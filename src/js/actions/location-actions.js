import { LOCATION_SET_PROJECTID } from './types';

export const locationSetProjectId = projectId => dispatch => {
    dispatch({
        type: LOCATION_SET_PROJECTID,
        data: projectId
    });
}