import React from 'react';
import Index from './components/index.js';
class App{
  static init(){
    let injectTapEventPlugin = require('react-tap-event-plugin');
    injectTapEventPlugin();
    React.render(<Index /> , document.getElementById("divBody"));
  }

}


App.init();