
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, useNavigate } from 'react-router-dom';
import Drinks from './Drinks';

export default function Menu() {
  const navigate = useNavigate();
  const handleDrinkClick = () => {
    navigate('/drinks');
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '0' }}>
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <img
          className="dns1"
          src="https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A28KE8d7VKCiRkVo~1efxEPh-ur9ZQ~SCQ2sz6fLkhIHTtRzSkOb9tY4KXC4HQX1kEr~1hkn1IZjvVZKaLz46WjJPDmQCJUhC4ARkz0jaZjyW2MNuzmrYr5hLaZnhT90rIt6qZemgOQD5K3A2eFPZXix0eKv8ksScAM4Xn2WyOjU6Q05e2tB1CPL3wjUO117mfM09UqR09zOwibcv2Luanf-n66cCEwLoclni9wNi1YlmGdIHw4-9joLdhlbEaGwoRRUd740AFlIlGCbzWOWD835Q0nMvOF~pYXFpSHVe-i4BXBIIb2eBJKt~UE1WWbhSmg1gw7HZHvVsfSASXx3TA__"
          alt="Logo"
          style={{ width: '90px', height: '40px' }}
        />
      </div>

      <ul className="nav justify-content-end bg-dark navbar-dark">
        <li className="nav-item">
          <a className="nav-link home text-white" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">MENU</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">MAKE A RESERVATION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="contact">CONTACT US</a>
        </li>
      </ul>

      <div className="container-fluid mt-4 p-0">
        <nav
          className="navbar navbar-expand-lg"
          style={{
            backgroundImage: "url('https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vm3OUp4~zAC0rmOqsWQWZcLEwtnY-Ui6y8f9KwUUMUeh~MfnUJv~1OqoLil2jpShQ8ysiBK7ATOZNC9r3eqJXygIrgpWW7Cu~Kcn3wVL7rFrscczjQ~PwZhG9tNROmi5WuU8AnkiA5X5ZlIZ0LCV~tf6T8E3WLcGrbGjpqnHNznc73UWKMB4fPQQC-2tIBGHEP6wOJ~n14VGTC7tBHtpxbq-Mc77GsJfoQTAOF3UnX2frLTaXR8fmObONoKRKt5h0xEOf2xci8t0sNKQQ2ntV7vvXtik0trvqFXUhoUA3~PnLCfnnlfPWeL4HYg9UI96Y2rPWqjDz9~Llt4tmhLPhw__')",
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            height: '311px',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <div className="container d-flex justify-content-center">
            <h1 style={{ textAlignLast: "center" }}></h1>
            <h1>MENU</h1>
            
          </div>
          <p className="text-white mb-0" style={{ textAlign: 'center' }}>Welcome to our restaurant! Enjoy our delicious offerings!</p>
        </nav>

        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary m-2" style={{ borderRadius: '8px' }}>FOOD</button>
          <button onClick={handleDrinkClick} className="btn btn-primary m-2">DRINKS</button>
          <button className="btn btn-primary m-2">BRUNCHES</button>
        </div>

        <div
          className="box d-flex justify-content-center align-items-center mt-4"
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '90px',
            borderRadius: '8px',
            textAlign: 'center',
            maxWidth: '1200px',
            maxHeight: '1200px',
            margin: '0 auto',
            position: 'relative', 
          }}
        >
         
          <img className='img1'
            src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTkXohzbFt8R0oqj3wC5EC2JwDAkujtzw~tAJfhe05gKL8QPrplMC5IVz9ZWgafmWXbhSn7vPjnNwowQ5~alfNTFwzRbxTTU96UOaPD87c0TxCuOQqk9RgpQzy9lqvMaKxZFVcdejl7IbGwrtA08paeBVGyr3D5~ilkfPLocjfqU6N5Pmy85GL7tf02iRxDCGWd~HBmGwGohnsx9FJJE~P0FhgIOo5jKjS~LhLR1decxHKVOS2hPTrwP-tL~oFcVE~w9ZutvzWu9qcwxmyk~Eg~wltb5r6nWKmP4w4o5iu-LEwsuB01X1fPpn8yvd9yCQhiWPcfj6xDnw62bwc~-kw__"
            alt="Top Left"
            style={{
              position: 'absolute',
              top: '100px',
              left: '20px',
              width: '100px',
              height: '400px'
            }}
          />

          <img
            src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNJi8T7NDL8b-QyP21pKVvkG9Bjd8r1BiSjxk1oyiJZdolcz-KD7-rbHuIfdcjGuSV8aJ5QmBxjA4qJpI~20ZFOUjdSZ11F4eIA00BRgvx~yORpXPem7G9v6~p0iJeM0mxkJbfd3unLtxPbIysnh1e~2SHBnMVhcOguWWcc26iJEfRlpxJAAHcQzICYRbDztaEHNuPwJibBke5-Pg29LS9bizs0MQkHqswhdtE-R0QH8UIdhgv53bpgv0i6mzouruGWBf1vHhbVUUpL1D8hFJnTzxj2J1ZPDxirxXOfesdHVj~jfYAElYTUP9WaOWqv2JVLcBO68AXuIpy4a6Gmxdw__"
            alt="Bottom Right"
            style={{
              position: 'absolute',
              bottom: '100px',
              right: '20px',
              width: '100px',
              height: '600px'
            }}
          />

          
          <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1 style={{ fontSize: '50px', lineHeight: '2.6' }}>------- BRUNCH COCKTAILS --------</h1>
            <div style={{ fontSize: '20px', lineHeight: '2', paddingTop: '10px' }}>
              <p style={{ fontSize: '20px', margin: '5px 0' }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>French 75</span> ................................................................................. $16
              </p>
              <p>The French 75 is named for the fast-firing 75 millimeter field gun that was utilized by the French during World War One. Consisting of gin, fresh lemon juice, sugar and Champagne, the drink is a lot friendlier than the name implies.</p>
              <p style={{ fontSize: '20px', margin: '5px 0' }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>Breakfast Martini</span> ......................................................................... $20
              </p>
              <p>Inspired by a breakfast of toast and marmalade to create this drink, which adds a barspoon of orange marmalade to a bright combination of gin, orange liqueur, and lemon juice. Name aside, the modern classic is delicious any time of day.</p>
              <p style={{ fontSize: '20px', margin: '5px 0' }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>Espresso Martini</span> .......................................................................... $30
              </p>
              <p>Plenty rely on this high-voltage combination of vodka, coffee liqueur, espresso, and simple syrup to kickstart their evenings, but it’s also a reliable pick-me-up the next morning.</p>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px 0', position: 'relative', bottom: '0', width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div style={{ padding: '20px', backgroundColor: '#333', borderRadius: '8px' }}>
                <h4>Connect with us</h4>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@deepnsoft.com</p>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-md-0">
              <div style={{ padding: '20px', backgroundColor: '#333', borderRadius: '8px' }}>
                <img
                  className="dns"
                  src="https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A28KE8d7VKCiRkVo~1efxEPh-ur9ZQ~SCQ2sz6fLkhIHTtRzSkOb9tY4KXC4HQX1kEr~1hkn1IZjvVZKaLz46WjJPDmQCJUhC4ARkz0jaZjyW2MNuzmrYr5hLaZnhT90rIt6qZemgOQD5K3A2eFPZXix0eKv8ksScAM4Xn2WyOjU6Q05e2tB1CPL3wjUO117mfM09UqR09zOwibcv2Luanf-n66cCEwLoclni9wNi1YlmGdIHw4-9joLdhlbEaGwoRRUd740AFlIlGCbzWOWD835Q0nMvOF~pYXFpSHVe-i4BXBIIb2eBJKt~UE1WWbhSmg1gw7HZHvVsfSASXx3TA__"
                  alt="img"
                />
                <h4>DEEP NET SOFT</h4>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-md-0">
              <div style={{ padding: '20px', backgroundColor: '#333', borderRadius: '8px' }}>
                <h4 textAlign="center">FIND US</h4>
                <p>First floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p>&copy; DEEP NET SOFT</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
