import React from 'react';
import ReactDOM from 'react-dom';

const card1_img = require("../../../assets/images/card1.png");
const card2_img = require("../../../assets/images/card2.png");
const card3_img = require("../../../assets/images/card3.png");

function Card(props) {
    const card = (
        <>
            <img className= {`card__img ${ props.img_class }` } src= { props.img }></img>
            <h3 className="card__title"> { props.title } </h3>
            <p className="card__subtitle"> { props.subtitle } </p>
            <a href="#" className="card__link">
                <span> Learn more </span>
                <img src={require("../../../assets/images/arrow-right-icon.svg")} className="card__icon"></img>
            </a>

        </>
    )
    return card;
}

const card1 = <Card
                img_class = ""
                img={card1_img}
                title="Make Your business To Be Better Famous In Internet"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
               />

const card2 = <Card
               img={card2_img}
               img_class = "card__img_2"
               title="Bring Technology To Your Comfrotable Home"
               subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              />

const card3 = <Card
              img_class = ""
              img={card3_img}
              title="Build Your Digital Product That Suitable For Your Need"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
             />

ReactDOM.render(card1, document.getElementById('card1'));
ReactDOM.render(card2, document.getElementById('card2'));
ReactDOM.render(card3, document.getElementById('card3'));