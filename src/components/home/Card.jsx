import React from 'react';
import { IData } from '../../services';

const Card = ({item, i}) => {
    const IMap = (data, item) => {
        const html = [];
        for (const [key, value] of Object.entries(data)) {
            html.push(
                <li key={key}><b>{item[key]}</b>: <span>{item[key]}</span></li>
            )
        }
        return html;
    }
    return (
        <div id={`card-${i}`} className={`card d-flex flex-row flex-wrap`}>
            <h4 className="title">{`FORM #${i}`}</h4>
            <ul>
                {IMap(IData, item)}
            </ul>
        </div>
    );
};

export default Card;