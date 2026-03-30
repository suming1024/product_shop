import { useState } from 'react';
import { users } from '../data/users';
import { useNavigate } from 'react-router-dom';

export default function SinIn(){

    //입력데이터를 객체로 통합
    const [LogInData, setLogInData] = useState({
        userId: '',
        password: ''
    });

    //로그인 결과 상태(성공, 실패,null)
    const [LogInResult, setLogInResult] = useState(null);

    //통합 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e);

        setLogInData({...LogInData, [name]: value });
        setLogInResult(null);
        
    };

    const navigate = useNavigate();//로그인 성공 시 메인 페이지로 이동

    //제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 로직 구현
        const {userId, password} = LogInData;
        const mathed = users.find(
            (user)=> user.userId === userId && user.password === password
        );
        if(mathed){
            setLogInResult('로그인 성공');
            console.log(`로그인성공: ID:${userId},PW:${password}`);

            navigate('/'); // 로그인 성공 시 메인 페이지로 이동
        }else{
            setLogInResult('로그인 실패');
            console.log('실패');
        }
        
    };

    return(
        <>
            <div>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="userId" placeholder="아이디" onChange={handleChange} value={LogInData.userId} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} value={LogInData.password} />
                    </div>
                    <button type="submit">로그인</button>
                </form>
                {/* 로그인결과메세지 */}
                {LogInResult === '로그인 실패' && (
                    <p style={{ color: 'red' }}>로그인 실패</p>
                )}
            </div>
        </>
    )
}

