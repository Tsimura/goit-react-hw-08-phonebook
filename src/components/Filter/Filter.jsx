import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FilterWrapper } from './Filter.styled.jsx';
import { changeFilter } from '../../redux/contacts/contacts-actions';
const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterWrapper>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </FilterWrapper>
  );
};
const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: event => dispatch(changeFilter(event.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
Filter.protoType = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
