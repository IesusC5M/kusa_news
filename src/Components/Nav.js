import "./Nav.css"
import React, {useState} from 'react';


function Nav(){
    const [showLinks, setShowLinks] = useState(false);
    return(
    <>
    <nav id="logo">
        <img src="/logo.png" alt="kusa-news" width="150px"></img>
    </nav>
    <nav className="links" id={showLinks ? "hidden" : ""}>
        <div className="media">MÁS RECIENTES | トップ</div>
        <div className="media">ENTRETENIMIENTO | エンタメ</div>
        <div className="media">DEPORTES | スポーツ</div>
        <nav className="media" id="login">LOG IN | ログイン</nav>
    </nav>
    <nav className="list" onClick={()=> setShowLinks(!showLinks)}>sexo</nav>
    </>
    )
}

export default Nav;