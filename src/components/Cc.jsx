import React, { Component } from "react";

class Cc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grabbedSerialNumb: "",
      grabbedHolderName: "",
      grabbedValidDate: ""
    };
  }

  // handlers
  handleOnChange = e => {
    this.setState({
      grabbedSerialNumb: e.target.value, //input value
      grabbedHolderName: e.target.value,
      grabbedValidDate: e.target.value
    });
  };

  handleOnSumbitNumb = e => {
    e.preventDefault(); // do not refresh
    if (this.state.grabbedSerialNumb) {
      this.setState({
        grabbedSerialNumb: this.state.grabbedSerialNumb,
        grabbedSerialNumb: ""
      });
    } else {
      return alert("Insert Your Serial Number");
    }
  };

  handleOnSumbitName = e => {
    e.preventDefault(); // do not refresh
    if (this.state.grabbedHolderName) {
      this.setState({
        grabbedHolderName: this.state.grabbedHolderName,
        grabbedHolderName: ""
      });
    } else {
      return alert("Insert Your Name");
    }
  };

  handleOnSumbitDate = e => {
    e.preventDefault(); // do not refresh
    if (this.state.grabbedValidDate) {
      this.setState({
        grabbedValidDate: this.state.grabbedValidDate,
        grabbedValidDate: ""
      });
    } else {
      return alert("Insert Validation Date");
    }
  };

  render() {
    return (
      <div className="project">
        <div className="card">
          <h1 className="creditcard">CREDIT CARD</h1>
          <img
            src="https://i-love-png.com/images/chip-173-678503.png"
            className="puce"
          />
          <div className="holderpart">
            <p className="serial-numb">{this.state.grabbedSerialNumb}</p>
            <span className="fournumb">0000</span>
            <p className="name">{this.state.grabbedHolderName}</p>
          </div>
          <p className="validthru">VALIDTHRU</p>
          <p className="small">MONTH/YEARS</p>
          <p className="date">{this.state.grabbedValidDate}</p>
          <img
            src="https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png"
            className="visamstrc"
          />
        </div>
        {/* INPUTS */}
        <div className="inputs">
          <form onSubmit={this.handleOnSumbitNumb}>
            <input
              type="text"
              onChange={this.handleOnChange}
              value={this.state.grabbedSerialNumb}
            />
          </form>
          <form onSubmit={this.handleOnSumbitName}>
            <input
              type="text"
              onChange={this.handleOnChange}
              value={this.state.grabbedHolderName}
            />
          </form>
          <form onSubmit={this.handleOnSumbitDate}>
            <input
              type="text"
              onChange={this.handleOnChange}
              value={this.state.grabbedValidDate}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Cc;
