import React from "react";
import './linktree.css';



function App() {
  return (
    <div className="body">
      <div className="profile">
      <img src="/profile.JPG" id='profile__img'/>
      <b><p id='twitter'>Twitter: LekeTweets </p></b>
      {/* <p id='slack'>Slack: Oluleke Olurankinse </p> */}
      <hr />
      </div>
      <div id='links'>
        <b><p id="head">LINKS</p></b>
        <a href="https://training.zuri.team"><button id="btn__zuri">ZURI</button></a>
        <br />
        <a href="https://books.zuri.team"><button id="books">BOOKS</button></a>
        <p id="descod">*click here to find our books about design and coding.</p>
        <br />
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<Oluleke Olurankinse>"><button id="book__python">PYTHON BOOKS</button></a>
        <br />
        <a href="https://background.zuri.team"><button id="pitch">BACKGROUND CHECKS FOR CODERS</button></a>
        <br />
        <a href="https://books.zuri.team/design-rules"><button id="book__design">DESIGN BOOKS</button></a>
      </div>
      <hr />
    </div>
  )
}


export default App;
