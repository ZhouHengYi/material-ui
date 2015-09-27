
import React , {PropTypes} from 'react';
import RaisedButton from '../../lib/material/raised-button';
import Dialog,{childContextTypes,getChildContext} from '../../lib/material/dialog.js';
import ThemeManager from '../../lib/material/styles/theme-manager';
import LightRawTheme from '../../lib/material/styles/raw-themes/light-raw-theme';
import Colors from '../../lib/material/styles/colors';

import {ThemeDecorator} from '../../lib/material/styles/theme-decorator.js';

@ThemeDecorator(ThemeManager.getMuiTheme(LightRawTheme))
class Index extends React.Component{
  constructor(props){
      super(props);
        this.state = {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
        };
    }

  // childContextTypes: {
  //   muiTheme: React.PropTypes.object
  // }

  // getChildContext() {
  //   return {
  //     muiTheme:  this.state.muiTheme
  //   };
  // }

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  }

  render() {

      let containerStyle = {
        textAlign: 'center',
        paddingTop: '200px',
      };

      let standardActions = [
        { text: 'Okay' },
      ];

      return (
        <div style={containerStyle}>
          <Dialog
            title="Super Secret Password"
            actions={standardActions}
            ref="superSecretPasswordDialog">
            1-2-3-4-5
          </Dialog>

          <h1>material-ui</h1>
          <h2>example project</h2>

          <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />

        </div>
      );
    
  }

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.blue400,
    });
    
    this.setState({muiTheme: newMuiTheme});
  }
  
}
export default Index;