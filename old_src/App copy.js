import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import data from './data.js';
import { useState } from 'react';
import {Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
import Login from './pages/login.js';
import Join from './pages/join.js';
import Detail from './pages/detail.js';

function App() {
  let [product, setProduct] = useState(data);
  let navigate = useNavigate()
  return (
    <>
    {/* nav */}
     <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href={`${process.env.PUBLIC_URL}`}><img src={`${process.env.PUBLIC_URL}/img/logo.png`}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={`${process.env.PUBLIC_URL}/login`}>Login</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}/join`}>Join(+1,000)</Nav.Link>
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

    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
          path="/"
          element={
            <div className='inner'>
              <h1>NEW</h1>
              {product.map((a,i)=>{
                return(
                  <div key={i} onClick={()=>{navigate('/detail/'+(i))}}>
                    <Card product={product[i]} i={i+1}></Card>
                  </div>
                )
              })}
            </div>
          }
        />

      <Route
        path='/login/'
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
          <>
          <Detail product={product}/>
          </>
        }
      />
    </Routes> 
    </BrowserRouter>
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

export default App;
