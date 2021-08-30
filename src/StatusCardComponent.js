import "./App.css";
import { useState } from "react";
import Logo from "./logo.svg"

function StatusCardComponent({Logo,h1txt,color,percent}) {
  return (
    <div className="cardBG statusCard row">
        <div class="col-sm-3 statusCardItem"><img src={Logo} /></div>
        <div class="col-sm-9 statusCardItem">
          <h1>{h1txt}</h1>
          <p className="subtxt">
            <span className={color ==="g"?"colorGreen":"colorRed"} style={{marginRight:"0.75em"}}>{percent}</span>
            since lastweek
          </p>
          
        </div>
    </div>
  );
}

export default StatusCardComponent;
