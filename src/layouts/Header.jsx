import {Link, useNavigate} from 'react-router-dom'

const Header = ({ isLoggedIn, loggedInUserId, onLogout }) => {

    const navigate = useNavigate();

    return(
        <header className='header'>
            <Link to='/'>Home</Link>
            <Link to="/products">상품 목록</Link>
            <Link to="/add-product">상품 등록</Link>
            {isLoggedIn ? (
                <div className='loginUserId'>
                    <span>{loggedInUserId}님 환영합니다!</span>
                    <button 
                    className='logoutBtn'
                    onClick={()=>{
                        onLogout();
                        navigate('/'); // 로그아웃 후 홈으로 이동
                    }}>로그아웃</button>
                </div>
            ):(
                <Link to="/SignIn">로그인</Link>
            )}

        </header>
    )
}

export default Header