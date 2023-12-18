import React from 'react';
import s from "..//Common/FormsControls/FormsControls.module.css";
import { reduxForm } from 'redux-form';
import { login } from "..//..//redux/auth-reducer"
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Input, createField } from '../Common/FormsControls/FormsControls';
import { required } from '../../utils/Validators/validators';
import { Navigate } from 'react-router-dom';


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input, null)}
            {createField('Password', 'password', [required], Input, { type: "password" })}
            {createField(null, "rememberMe", null, Input, { type: "checkbox" }, "remember me")}
            {captchaUrl && <div>
                <img src={captchaUrl} className={s.captcha} />
                {createField('enter secret Captcha', 'captcha', [required], Input, null)}
            </div>}
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

const Login = ({ isAuth, login, captchaUrl }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose(
    connect(mapStateToProps, { login }),)(Login)



