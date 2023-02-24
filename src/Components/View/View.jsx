import React, { useEffect, useState } from "react";
import axios from "axios";
import "./View.css"

const View = () => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
    params: { tag: "3d.mmorpg.fantasy.pvp", platform: "pc" },
    headers: {
      "X-RapidAPI-Key": "439814ef8dmsh7df2e812da72351p161e28jsn8d005ab1bfce",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="view-cont">
      {data.map((listItem) => {
        return (
          <div className="game-cards" key={listItem.id}>
            <div className="game-cont">
              <div className="img-cont">
                <img src={listItem.thumbnail} alt="" />
              </div>
              <div className="game-desc">
                <h3>{listItem.title}</h3>
                <p>{listItem.short_description}</p>
                <button><a href={listItem.game_url} target="_blank">Buy</a></button>
              </div>
            </div>
            <div className="more-detail">
              <h3>More Details</h3>
              <p>Developer: {listItem.developer}</p>
              <p>Genere: {listItem.genre}</p>
              <p>Platform: {listItem.platform}</p>
              <p>Relese-Date: {listItem.release_date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default View;
