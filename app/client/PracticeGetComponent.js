import React, { Component } from 'react';
import { getRequest } from './utilities/ajax';

class RealApp extends Component {

  state = (() => {
    return {
      practString: []
    }
  })();

  _getString = async () => {
    const url = 'public_controller/index';
    const response = await getRequest(url);
    if (response && response.ok) {
      const {
        //finish here
      }
    }
  }
}
