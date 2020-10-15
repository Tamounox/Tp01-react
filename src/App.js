import React from 'react';
import { Grommet, Box, Main } from 'grommet';
import { Entete } from './features/Header/Header';
import { Welcome } from './features/Body/Welcome';
import { Carte } from './features/Body/Card';
import { Name } from './features/Body/Name.js';
import  data  from './data.json';
import Vid from './features/Body/Video';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export const App = () => {
  return( 
    <Grommet theme={theme} full>
      <Entete />
      <Main>
      <Welcome />
      <Name />
      <Box margin='small' direction='row' justify='around'>
      {
        data.map((info) => {
          return (
            <Carte key={info.name} name={info.name} description={info.description} />
          )
        })
      }
      </Box>
      <Box>
        <Vid/>
      </Box>
      </Main>
    </Grommet>
    )
}

export default App
