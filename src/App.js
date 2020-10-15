import { React, Component } from 'react';
import { Grommet, Box, Text } from 'grommet';
import { Entete } from './features/Header/Header';
import Welcome from './features/Body/Welcome';
import { Carte } from './features/Body/Card';
import { Name } from 'features/Body/Name.js';
import  data  from './data.json';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export class App extends Component {
  render() {
    return( 
      <Grommet theme={theme} full>
        <Entete />
        <Welcome />
        <Name />
        {/* {
          data.map((info) => {
            return (
              <Carte info={info.name} description={info.description} />
            )
          })
        } */}
      </Grommet>
      )
    }
}

export default App
