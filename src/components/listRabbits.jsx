import React from 'react';
import {Link} from "react-router-dom";

class ListRabbits extends React.Component {

    deleteRabbit = rabbit => () => {
        this.props.delete(this.props.token, rabbit)
    }

    render() {
        return (

            <ul className='list-group list-group-flush'>
                <div className='list col-lg-12'>
                    {this.props.rabbits.map(rabbit => (
                        <li key={rabbit.id} className='list-group-item col-md-12'>
                            <div className='rabbit row'>
                                <div className='col-sm-4'>
                                    <p> Имя: {rabbit.name}</p>
                                </div>
                                <div className='col-sm-4'>
                                    <p>Вес: {rabbit.weight} кг</p>
                                </div>
                                <div className='ml-auto'>
                                    <button onClick={this.deleteRabbit(rabbit)}className="btn btn-sm btn-danger "> Удалить</button>
                                    <Link to={`/update/${rabbit.id}`}><button className="btn btn-sm btn-success"> Изменить</button> </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </ul>
        );
    }
}

export default ListRabbits;