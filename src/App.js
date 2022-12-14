import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import {data, bestdata} from './data.js';
import { useState } from 'react';
import {Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
import Login from './pages/login.js';
import Join from './pages/join.js';
import Detail from './pages/detail.js';
import Bestdetail from './pages/best_detail.js';

function App() {
  let [product, setProduct] = useState(data);
  let [bestproduct, setBestproduct] = useState(bestdata);
  let navigate = useNavigate()
  return (
    <>
    {/* nav */}
     <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href={`${process.env.PUBLIC_URL}`}><img className='logo' src={`${process.env.PUBLIC_URL}/img/logo.png`}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/login');}}>Login</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/join');}}>Join(+1,000)</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* slide */}
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/img/banner_1.jpeg`}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/img/banner_2.jpeg`}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/img/banner_3.jpeg`}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className='nav_inner'>
    <ul>
      <li>
          <a>BEST</a>
      </li>
      <li>
          <a>귀걸이</a>
      </li>
      <li>
          <a>반지</a>
      </li>
      <li>
          <a>목걸이</a>
      </li>
      <li>
          <a>피어싱</a>
      </li>
      <li>
          <a>이어커프</a>
      </li>
      <li>
          <a>팔찌</a>
      </li>
      <li>
          <a>헤어</a>
      </li>
      <li>
          <a>가방</a>
      </li>
      <li>
          <a>모자</a>
      </li>
      <li>
        <a>NOTICE</a>
      </li>
      <li>
        <a>REVIEW</a>
      </li>
      <li>
        <a>EVENT</a>
      </li>
      <li>
        <a>Q&#38;A</a>
      </li>
    </ul>
    </div>

    <Routes>
      <Route
          path="/"
          element={
            <>
              
              <div className='inner'>
                <h1>NEW</h1>
                {product.map((a,i)=>{
                  return(
                    <div key={i} onClick={()=>{navigate('/detail/'+(i))}}>
                      <Card product={product[i]} i={i+1}></Card>
                    </div>
                  )
                })}
                <h1>BEST</h1>
                {product.map((a,i)=>{
                  return(
                    <div key={i} onClick={()=>{navigate('/bestDetail/'+(i))}}>
                      <Best bestproduct={bestproduct[i]} i={i+1}></Best>
                    </div>
                  )
                })}
              </div>
            </>
          }
        />

      <Route
        path='/login'
        element={
          <Login/>
        }
      />

      <Route
        path='/join/'
        element={
          <Join/>
        }
      />

      <Route
        path='/detail/:id'
        element={
          <Detail product={product}/>
        }
      />

      <Route
        path='/bestDetail/:id'
        element={
          <Bestdetail bestproduct={bestproduct}/>
        }
      />
    </Routes>  

    <footer>
      <div className='ft_inner'>
        <p>COMPANY : (주)리예코퍼레이션</p>
        <p>OWNER : 김진우</p>
        <p>MASTER : 김진우</p>
        <p>BUSINESS NUMBER : 112-88-01125</p>
        <p>PERMIT NUMBER : 제2018-서울광진-1068호 [사업자정보확인]</p>
        <p>TEL : 02-447-4107</p>
        <p>E-MAIL : riye4106@gmail.com</p>
        <p>ADDRESS : 04977 서울특별시 광진구 광나루로37길 6 (구의동) 진성빌딩 2층</p>
        <p>Copright (c) 귤팩토리. All rights reserved. Designed by ITSME.</p>
      </div>
    </footer>
    </>
  );
}

function Card(props){
  const price = props.product.price
  const price2 = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return(
    <div className='list'>
      <img src={`${process.env.PUBLIC_URL}/img/product0${props.i}.jpg`} />
      <p>{props.product.title}</p>
      <p>{price2}원</p>
    </div>
  );
}

function Best(props){
  const price = props.bestproduct.price
  const price2 = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return(
    <div className='list'>
      <img src={`${process.env.PUBLIC_URL}/img/best_product0${props.i}.jpg`} />
      <p>{props.bestproduct.title}</p>
      <p>{price2}원</p>
    </div>
  );
}

export default App;
