import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            console.log(response.data);
            // 로그인 성공 처리
        } catch (error) {
            console.error(error);
            // 로그인 실패 처리
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>비밀번호: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
