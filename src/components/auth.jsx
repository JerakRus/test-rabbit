import React from 'react';
import { reduxForm, Form, Field} from 'redux-form';

class Auth extends React.Component {

    auth = (values) => {
        this.props.auth(values);
    }

    render() {
        return (
            <div className="auth">
                <div className="row">
                    <div className='auth_text col text-center'>
                        <h3> Авторизуйтесь на сайте: </h3>
                    </div>
                </div>
                <Form onSubmit={this.props.handleSubmit(this.auth)}>
                    <div className='row justify-content-center'>
                        <div className="col-12 col-sm-3 text-center">
                            <Field name='username' required component='input' type="text"  placeholder='Логин..'/>
                         </div>
                        <div className="col-12 col-sm-3 text-center">
                            <Field name='password' required component='input' type="password" placeholder='Пароль..'/>
                         </div>
                        <div className="col-12 col-sm-1 text-center">
                            <button type='submit' className="btn btn-sm btn-success">Войти</button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'auth',
})(Auth);