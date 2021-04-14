import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import { requestUsers } from '../../actions/user/user_actions';
import LandingZone from './landing_zone';

const mapSTP = state => ({
  currentUser: state.session.currentUser
});

const mapDTP = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  logout: () => dispatch(logout())
});

export default connect(mapSTP, mapDTP)(LandingZone);