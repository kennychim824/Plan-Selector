import React from "react";
import { connect } from "react-redux";

// In this function, we just handle object which depth = 1
// which is enough for our use case, some Object validation handled before
// It is better to handle depth = n in best practise, but which is not what we want/expect
function getAllKey(object) {
  const result = [];
  Object.keys(object).forEach((title) => {
    Object.keys(object[title]).forEach((el) => {
      if (!result.includes(el) && el.toLocaleLowerCase() !== "price") {
        result.push(el);
      }
    });
  });
  return result;
}

class PlanSelector extends React.Component {
  constructor() {
    super();
  }

  getTitle = () => {
    const details = this.props.details;
    const titles = Object.keys(details);
    return titles.map((title, i) => <th key={i}>{title}</th>);
  };

  getContent = () => {
    const details = this.props.details;
    const titles = Object.keys(details);
    const properties = getAllKey(details);
    return properties.map((property, i) => (
      <tr key={i}>
        <td className="w-25 option">{property}</td>
        {titles.map((title, i) => {
          const value = details[title][property];
          const valueExist = typeof value !== undefined;
          const isIcon = typeof value === "boolean";
          if (isIcon) {
            return (
              <td key={i}>
                <i className={value ? "fa fa-check" : "fa fa-times"}></i>
              </td>
            );
          }
          return <td>{valueExist ? value : ""}</td>;
        })}
      </tr>
    ));
  };

  getPriceSelector = () => {
    const details = this.props.details;
    const titles = Object.keys(details);
    return titles.map((title, i) => {
      const price = details[title].Price;
      return (
        <th key={i}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            ></input>
            <p>
              HK${price} <small>/Month</small>
            </p>
          </div>
        </th>
      );
    });
  };

  render() {
    const visible = Object.keys(this.props.details).length !== 0;
    return visible ? (
      <div className="container py-4">
        <div className="row">
          <div className="col-md-10 my-4 mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsve">
                  <table className="table table-striped">
                    <thead className="thead-inverse">
                      <tr>
                        <th className="w-25"></th>
                        {this.getTitle()}
                      </tr>
                    </thead>
                    <tbody>{this.getContent()}</tbody>
                    <tfoot className="thead-inverse">
                      <tr>
                        <th className="w-25"></th>
                        {this.getPriceSelector()}
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default connect((state) => {
  return state.planDetails;
})(PlanSelector);
