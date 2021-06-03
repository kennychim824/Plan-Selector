import { connect } from 'react-redux';
import { Actions } from '../action';
import { InputArea } from '../components/InputArea';

export const InputAreaContainer = connect(
    (state) => {
        return state.planDetails;
    },
    {
        setDetails: (details) => ({ type: Actions.SetPlanDetails, details }),
    }
)(InputArea);
