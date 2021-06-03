import { Actions } from '../../action';

export const planDetailsReducer = (state = { details: {} }, action) => {
    switch (action.type) {
        case Actions.SetPlanDetails:
            return {
                details: action.details,
            };
        default:
            return state;
    }
};
