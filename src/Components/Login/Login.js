import React from 'react';
import s from "..//Common/FormsControls/FormsControls.module.css";
import { reduxForm } from 'redux-form';
import { login } from "..//..//redux/auth-reducer"
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Input, createField } from '../Common/FormsControls/FormsControls';
import { required } from '../../utils/Validators/validators';
import { Navigate } from 'react-router-dom';


const LoginForm = ({ handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input, null)}
            {createField('Password', 'password', [required], Input, { type: "password" })}
            {createField(null, "rememberMe", null, Input, { type: "checkbox" }, "remember me")}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = ({ isAuth, login }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { login }),)(Login)



