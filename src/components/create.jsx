import React from 'react';
import { reduxForm, Field, Form} from "redux-form";

class CreateRabbit extends React.Component {

    createRabbit = (values) => {
        const rabbit = values;
        this.props.handler(this.props.token, rabbit);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="auth">
                <div className="row">
                    <div className='auth_text col text-center'>
                        <h3> Введите данные кролика: </h3>
                    </div>
                </div>
                <Form onSubmit={this.props.handleSubmit(this.createRabbit)}>
                    <div className='row justify-content-center'>
                        <div className="col-12 col-sm-3 text-center">
                            <Field name='name' required component='input' type="text" placeholder='Имя..'/>
                        </div>
                        <div className="col-12 col-sm-3 text-center">
                            <Field name='weight' required component='input' type="number" placeholder='Вес..'/>
                        </div>
                        <div className="col-12 col-sm-1 text-center">
                            <button type='submit' className="btn-sm btn btn-success">Сохранить</button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'rabbit',
})(CreateRabbit);
