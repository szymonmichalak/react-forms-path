import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FormActions from '../actions/FormActions'
import Form from '../components/Form'

// Now our form values will be stored in `Form` reducer and will be passed to this component in this.props.form
function mapStateToProps(state) {
  return {
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormActions, dispatch)
  }
}

// Use `Form` component to render App
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
