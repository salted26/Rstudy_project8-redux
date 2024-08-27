import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./page/ProductAll";
import PrivateRoute from "./route/PrivateRoute";
import LoginRoute from "./route/LoginRoute";
import NavBar from "./components/NavBar";
import NavBarRoute from "./route/NavBarRoute";

// 1. 로그인, 전체상품, 상품디테일 페이지 구성
// 1-1. Navigation bar 만들기
// 2. 전체상품 페이지에서는 전체상품을 확인할 수 있다.
// 3. 로그인 버튼을 누르면 로그인 메시지가 나온다.
// 3-1. 상품페이지를 클릭했으나 로그인을 하지 않았을 경우, 로그인 페이지로 이동한다.
// 4. 로그인이 되어 있을 경우 상품 디테일 페이지를 접속 할 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 5-1. 로그아웃 이후에는 상품 디테일 페이지를 볼 수 없다. 로그인 페이지로 접속된다.
// 6. 로그인아웃 버튼은 진행상황에 따라 변한다.
// 7. 상품 검색이 가능하다.
function App() {
    return (
    <div className='App'>
        {/*<NavBarRoute />*/}
        <NavBar />
      <Routes>
          <Route path="/" element={<ProductAll/>} />
          <Route path="/login" element={<LoginRoute />}  />
          <Route path="/products/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
    );
}

export default App;
