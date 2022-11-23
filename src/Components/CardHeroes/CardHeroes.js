import React, { useEffect, useState } from "react";
import './CardHeroes.scss';
import arrowDown from './../../assets/images/arrow-down.png';
import arrowUp from './../../assets/images/arrow-up.png';



export const CardHeroes = ({
    name,
    id,
    img,
    description = 'No hay descripcion',
}) => {

    const [show, setShow] = useState(false);



    return (
        <div className="CardHeroesMainContainer">
            <div className="PhotoContainer">
                <img src={img} />
            </div>
            <div className="FirstContainer">
                <div className="LeftContainer">
                    <h1 className="TitleName">{name}</h1>
                    <p className="TitleID">{id}</p>
                </div>
                <div className="RightContainer">
                    <button
                        className="btnDescription"
                        onClick={() => setShow(!show)}
                    >
                        {
                            show ?
                                <img className="imgArrow" src={arrowUp} />
                                :
                                <img className="imgArrow" src={arrowDown} />

                        }

                    </button>

                </div>
            </div>
            {show &&
                <div className="SecondContainer">
                    <h3>{description}</h3>

                </div>
            }

        </div>
    )
}