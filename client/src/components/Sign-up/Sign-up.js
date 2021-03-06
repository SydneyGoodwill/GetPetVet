/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import logoDarkGray from "../assets/logoDarkGray.png";
import "./Sign-up.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      address: '',
      province: '',
      zipCode: '',
      phoneNumber: '',
      redirectTo: null

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    //request to server to add a new email/password
    axios.post('/user', {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      province: this.state.province,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber
    })
      .then(response => {
        if (!response.data.errmsg) {
          this.setState({ //redirect to login page
            redirectTo: '/login'
          });
        } else {
          console.log('email already taken');
        }
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div id="signupCentering">
          <div className="loginIntro">
            <img src={logoDarkGray} alt="Girl in a jacket" width="20%" height="20%" className="aboutlogo"></img>
            <h1 id="welcomeHomepg">Sign up</h1>
          </div>
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="email">Email: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">Password: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="password"
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">First Name: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="first name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">Last Name: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="last name"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">Address: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="address"
                  type="text"
                  id="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">State: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="state"
                  type="text"
                  id="province"
                  name="province"
                  value={this.state.province}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">Zip Code: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="zip code"
                  type="number"
                  id="zipCode"
                  name="zipCode"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">Phone Number: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="phone number"
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col-7"></div>
              <button
                className="btn btn-primary"
                onClick={this.handleSubmit}
                type="submit"
              >Sign up</button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Signup;