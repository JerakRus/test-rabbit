import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="row header">
            <div className="col-lg-6 header_text">
                <h3> {`Список ваших кроликов ${props.username}`}:</h3>
            </div>
            <div className="col-lg-2 ml-auto">
                <Link to='/create'><button className="btn btn-sm btn-success"> Создать кролика</button> </Link>
            </div>
        </div>
        );
};

export default Header;
