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
          <Navbar.Brand href="/project04_Shoppingmall/"><img src={`${process.env.PUBLIC_URL}/img/logo.png`}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/project04_Shoppingmall/login/">Login</Nav.Link>
            <Nav.Link href="/project04_Shoppingmall/join/">Join(+1,000)</Nav.Link>
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

    <Routes>
      <Route
          path="/project04_Shoppingmall/"
          element={
            <div className='inner'>
              <h1>NEW</h1>
              {product.map((a,i)=>{
                return(
                  <div key={i} onClick={()=>{navigate('./detail/'+(i))}}>
                    <Card product={product[i]} i={i+1}></Card>
                  </div>
                )
              })}
            </div>
          }
        />

      <Route
        path='/project04_Shoppingmall/login/'
        element={
          <Login/>
        }
      />

      <Route
        path='/project04_Shoppingmall/join/'
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
