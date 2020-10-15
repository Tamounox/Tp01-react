import React, { Component } from 'react'
import { Box, Heading, Paragraph } from 'grommet';

export class Welcome extends Component {
    render() {
        return (
            <Box align='center' justify='center'>
                <Paragraph>Bienvenu sur mon profil</Paragraph>
            </Box>
        )
    }
}

export default Welcome
