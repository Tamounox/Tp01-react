import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardFooter } from 'grommet';



export class Carte extends Component {
    constructor()   {

    }
    render() {
        return (
            <Card align='center' height="small" width="small" justify='center'>
                <CardHeader pad="medium">{this.props.name}</CardHeader>
                <CardBody pad="medium">{this.props.description}</CardBody>
                <CardFooter>footer</CardFooter>
            </Card>
        )
    }
}

export default Carte
