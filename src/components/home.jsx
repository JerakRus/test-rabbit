import React from 'react';
import Header from './header';
import ListRabbitsContainer from '../containers/listRabbits';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Header username={this.props.username}/>
                <ListRabbitsContainer/>
            </div>
        )
    }
}
