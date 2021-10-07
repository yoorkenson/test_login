import React, { FC, FormEvent, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
// import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const LoginForm: FC = () => {
    // const dispatch = useDispatch()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useActions()

    const submit = (e: FormEvent) => {
        e.preventDefault()
        // dispatch(AuthActionCreators.login(username, password))
        login(username, password)
    }

    return (
        <div>
            <h1>Авторизация</h1>
            { error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <form>
                <input required value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    type="text" placeholder='username'/>
                <input required value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type="password"/>
                <button onClick={submit}>
                    {isLoading ? 'Загрузка' : 'Войти'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;