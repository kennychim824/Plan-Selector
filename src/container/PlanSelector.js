import { connect } from 'react-redux';
import { PlanSelector } from '../components/PlanSelector';

export const PlanSelectorContainer = connect((state) => {
    return state.planDetails;
})(PlanSelector);
