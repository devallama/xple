import { LEARNING_APPS_FETCH } from './types';

import apps from '../../../learning-apps/apps.json';

export const learningAppsFetch = () => dispatch => {
    dispatch({
        type: LEARNING_APPS_FETCH,
        data: apps
    });
}