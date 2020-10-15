import React from 'react'
import { Video } from 'grommet';

import kaaris from "./kaaris.mp4"


export const Vid = () => {
    return (
        <Video controls="over" fit="cover">
            <source key="video" src={kaaris} type="video/mp4" />
        </Video>
    )
}

export default Vid
