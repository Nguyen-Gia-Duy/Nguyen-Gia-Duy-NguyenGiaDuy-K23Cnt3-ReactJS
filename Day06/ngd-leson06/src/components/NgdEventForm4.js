import React, { Component } from "react";

class NgdEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ngdSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    ngdHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.ngdSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            ngdSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    ngdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.ngdSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.ngdSelectCheckBox.includes("Apple")}
              onChange={this.ngdHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.ngdSelectCheckBox.includes("Banana")}
              onChange={this.ngdHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.ngdSelectCheckBox.includes("Orange")}
              onChange={this.ngdHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.ngdHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NgdEventForm4;