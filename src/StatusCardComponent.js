import "./App.css";
import { useState } from "react";
import Logo from "./logo.svg"

function StatusCardComponent(props) {
  return (
    <div className="cardBG statusCard row">
        <div class="col-sm-3 statusCardItem"><img src={props.Logo} /></div>
        <div class="col-sm-9 statusCardItem">
          <h1>{props.h1txt}</h1>
          <p className="subtxt">
            <span className={props.color ==="g"?"colorGreen":"colorRed"} style={{marginRight:"0.75em"}}>{props.percent}</span>
            since lastweek
          </p>
          
        </div>
    </div>
  );
}

export default StatusCardComponent;
