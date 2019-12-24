import React from 'react';
import './Style.css';
import logo from './logo_text.png';
import { Link } from 'react-router-dom'

class Join extends React.Component {
    render() {
        return (
            <div >
                <Link to="/">
                    <img src={logo} alt="logo" className="Logo" />
                </Link>
                <form action="" method="POST">
                    <p>아이디</p>
                    <input className="TextBox" type="text" placeholder="아이디"></input><br />
                    <p>비밀번호</p>
                    <input className="TextBox" type="password" placeholder="비밀번호"></input><br />
                    <p>비밀번호 확인</p>
                    <input className="TextBox" type="password" placeholder="비밀번호 확인"></input><br />
                    <input className="Button" type="submit" value="회원가입"></input>
                </form>
            </div >
        );
    }
}

export default Join;