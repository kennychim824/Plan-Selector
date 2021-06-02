import React from "react";
import { connect } from "react-redux";
import { Actions } from "../action";

const ErrMsgType = {
  InvalidJsonFormat: "Please enter a valid JSON format",
  NotJsonFormat: "Only JSON format spported, please try again",
  InvalidNumOfPlan: "Only 2-5 plans supported, please try again",
  InvalidObjectStructure: "Please enter valid structure of plan",
};

function checkValidObject(obj) {
  let valid = true;
  Object.keys(obj).forEach((title) => {
    if (typeof obj[title] !== "object") {
      valid = false;
    }
    Object.keys(obj[title]).forEach((el) => {
      const value = obj[title][el];
      if (typeof value === "object") {
        valid = false;
      }
    });
  });
  return valid;
}
class InputArea extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      details: sessionStorage.getItem("value") || "",
      errorMessage: "",
    };
  }

  setErrMsgType = (type) => {
    this.setState({
      errorMessage: type,
    });
  };

  onChange = (value) => {
    this.setState({
      details: value,
    });
    sessionStorage.setItem("value", value);
  };

  checkValidObjectStructure = (details) => {
    const isValid = checkValidObject(JSON.parse(JSON.stringify(details)));
    if (isValid) {
      this.props.setDetails(details);
      this.setState({ errorMessage: "" });
    } else {
      this.setErrMsgType(ErrMsgType.InvalidObjectStructure);
    }
  };

  checkValidNumberOfPlan = (details) => {
    const numOfplan = Object.keys(details).length;
    if (numOfplan >= 2 && numOfplan <= 5) {
      this.checkValidObjectStructure(details);
    } else {
      this.setErrMsgType(ErrMsgType.InvalidNumOfPlan);
    }
  };

  checkValidJSON = () => {
    try {
      const details = JSON.parse(this.state.details);
      if (typeof details === "object") {
        this.checkValidNumberOfPlan(details);
      } else {
        this.setErrMsgType(ErrMsgType.NotJsonFormat);
      }
    } catch (e) {
      this.setErrMsgType(ErrMsgType.InvalidJsonFormat);
    }
  };

  render() {
    const errMsgvisible = this.state.errorMessage.length !== 0;
    return (
      <div className="input-area">
        <div className="form-group d-inline-flex">
          <textarea
            className="form-control"
            value={this.state.details}
            name="input-box"
            id="input-box"
            cols="60"
            rows="20"
            onChange={(e) => this.onChange(e.target.value)}
          ></textarea>
        </div>
        <div
          className={errMsgvisible ? "text-fit alert alert-danger " : ""}
          role="alert"
        >
          {this.state.errorMessage}
        </div>
        <div className="p-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.checkValidJSON}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state.planDetails;
  },
  {
    setDetails: (details) => ({ type: Actions.SetPlanDetails, details }),
  }
)(InputArea);
