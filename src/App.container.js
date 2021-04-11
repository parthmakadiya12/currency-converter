import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import App from "./App";
import * as actions from "./actions/convertActions";

const mapStateToProps = (state) => {
  const { from, to, amount, total, error, showSpinner } = state.convert;
  return {
    from: from,
    to: to,
    amount: amount,
    total: total,
    error: error,
    showSpinner: showSpinner,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
