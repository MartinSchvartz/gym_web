import './indexHome.css';
import {useState, useEffect} from 'react';
import LogoH from '../../assets/LogoH.png';
import React from 'react';

function Home() {
    const [count, setCount] = useState(0)
    return(

                    <div >

                        <div>
        
                                <h1 className={'header'}>New Crossfiter</h1>
                                <div className="logohome">
                                </div>
                                <div className="regularP">
                                    <p>
                                        Here you will find all your workout
                                        routines, scores,<br/> your PR's in each
                                        movement. Also here you will find
                                        routines<br/>that you can upload or
                                        download from previous entries.<br/>
                                        Press the button to a quick 45
                                        minutes workout

                                    </p>
                                    <button className="startnow startnow2 buttonrounded" onClick={()=>setCount(count+1) + console.log("Btn click" + count)}>Start Now</button>

                                </div>
                                <div className="sections">
                                    <button className="Rectngulo_12 " ></button>
                                </div>



                        </div>
                        <svg className="Separador_bk">
                            <linearGradient id="Separador_bk" spreadMethod="pad" x1="0.5" x2="0.5" y1="0" y2="1">
                                <stop offset="0" stop-color="#fff" stop-opacity="1"></stop>
                                <stop offset="0" stop-color="#0ee162" stop-opacity="1"></stop>
                                <stop offset="0" stop-color="#25e889" stop-opacity="1"></stop>
                                <stop offset="0.025" stop-color="#36de77" stop-opacity="1"></stop>
                                <stop offset="0.7866" stop-color="#25e9de" stop-opacity="1"></stop>
                                <stop offset="0.9079" stop-color="#2bf5f2" stop-opacity="1"></stop>
                                <stop offset="0.9288" stop-color="#42eff6" stop-opacity="1"></stop>
                                <stop offset="1" stop-color="#00e7f8" stop-opacity="1"></stop>
                            </linearGradient>
                            <rect id="Separador_bk" rx="0" ry="0" x="0" y="0" width="56" height="1269">
                            </rect>
                        </svg>
                    </div>
    )


}
export default Home
/*

*/ 