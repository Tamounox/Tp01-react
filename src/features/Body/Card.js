import React from 'react'
import { Card, CardBody, CardHeader, CardFooter } from 'grommet';
import styled from 'styled-components';



export const Carte = ({name, description}) => {
    const CostumCard = styled(Card)`
        transition: all 100ms;
        &:hover {
            transform: scale(1.1);
        }
    `
    return (
        <CostumCard hoverIndicator='"background: {color: "accent-3"}"' height="small" alignSelf='center' width="small">
            <CardHeader background='brand' pad="medium">{name}</CardHeader>
            <CardBody background='brand' pad="medium">{description}</CardBody>
            <CardFooter pad="medium" background='neutral-2'>footer</CardFooter>
        </CostumCard>
    )
}

export default Carte
