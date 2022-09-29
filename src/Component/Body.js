import React from 'react';
import "./Body.css";


function Header() {
  return (
    <div className="home-page-banner">
       <h1>Why should you join Us</h1>
    <div className="inner-content">
        Nerds Recommened is one of the world's leading book review platforms. It
        connects the people who want to read with the people who reviewed what they read
        If you want to contribute to help people find what exactly they want to read and 
        save their time and money, Nerds Recommened is for you.
    </div>

    <div className="banner-buttons">
       {/*<Link to={ROUTES.SIGN_UP} className="btn btn-black btn-homepage">
        <span className="btn btn-black btn-homepage">Review Now</span>
        </Link>
        <Link to={ROUTES.BOOKS} className="btn btn-find btn-homepage">
        <span className="btn btn-find btn-homepage">Find Books</span>
  </Link>*/} 
          <span className="btn btn-black btn-homepage">Review Now</span>
          <span className="btn btn-find btn-homepage">Find Books</span>
    </div>
    <img
        className="home-img-banner"
        src="https://img.freepik.com/free-vector/cute-boy-girl-reading-books_1308-20949.jpg?w=740&t=st=1664327678~exp=1664328278~hmac=b74b9dc0a7feed0f95a44389b52f0cb418cf910b1dfd7c5dd969e1166709668a"

        alt="Book stack homepage banner"
      />
    </div>
  );
}

export default Header;
