import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

import { changeValue, saveForm } from "./redux";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
// App.js
export class App extends React.Component {
  handleChange = (event, newval) => {
    console.log(newval);
    this.props.changeValue(newval);
  };
  handleFormChange = event => {
    let { name, value } = event.target;
    this.props.saveForm({ ...this.props.form, [name]: value });
  };
  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs value={this.props.value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        {this.props.value === 0 && (
          <TabContainer>
            <form>
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={this.props.form.name}
                    onChange={this.handleFormChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  NickName:
                  <input
                    type="text"
                    name="nickname"
                    value={this.props.form.nickname}
                    onChange={this.handleFormChange}
                  />
                </label>
                <div />
                <label>
                  Other:
                  <input
                    type="text"
                    name="other"
                    value={this.props.form.other}
                    onChange={this.handleFormChange}
                  />
                </label>
              </div>
            </form>
          </TabContainer>
        )}
        {this.props.value === 1 && (
          <TabContainer>
            <form>
              <div>
                <label>
                  Name2:
                  <input
                    type="text"
                    name="name2"
                    value={this.props.form.name2}
                    onChange={this.handleFormChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  NickName2:
                  <input
                    type="text"
                    name="nickname2"
                    value={this.props.form.nickname2}
                    onChange={this.handleFormChange}
                  />
                </label>
                <div />
                <label>
                  Other2:
                  <input
                    type="text"
                    name="other2"
                    value={this.props.form.other2}
                    onChange={this.handleFormChange}
                  />
                </label>
              </div>
            </form>
          </TabContainer>
        )}
        {this.props.value === 2 && (
          <TabContainer>
            <form>
              <div>
                <label>
                  Name1:
                  <input
                    type="text"
                    name="name1"
                    value={this.props.form.name1}
                    onChange={this.handleFormChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  NickName1:
                  <input
                    type="text"
                    name="nickname1"
                    value={this.props.form.nickname1}
                    onChange={this.handleFormChange}
                  />
                </label>
                <div />
                <label>
                  Other1:
                  <input
                    type="text"
                    name="other1"
                    value={this.props.form.other1}
                    onChange={this.handleFormChange}
                  />
                </label>
              </div>
            </form>
          </TabContainer>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  value: state.tabs.value,
  form: state.tabs.form
});

const mapDispatchToProps = {
  changeValue,
  saveForm
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
