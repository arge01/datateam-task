import React, { useEffect, useState } from 'react';
import data, { IData, AData } from '../../services/index'
import Card from './Card';
import { Events, scroller } from 'react-scroll'

const Container = () => {
    const [input, setInput] = useState({...IData});
    const [items, setItems] = useState([...data]);
    const [create, setCreate] = useState(false);

    const addItem = new Promise((resolve, reject) => {

        Events.scrollEvent.register('end', () => {
            if (create) {
                resolve();
                Events.scrollEvent.remove('end');
            }
        });

        if (create) {
            scroller.scrollTo('create-scroll', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }

    });

    useEffect(() => {
        if (create) {
            const card = document.getElementsByClassName("card")[items.length - 1];
            card.classList.add("new-card");
        }
    }, [items]);

    useEffect(() => {
        if (create) {
            addItem.then(() => {
                scroller.scrollTo('', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                    containerId: 'create-scroll'
                });
                const card = document.getElementsByClassName("card")[items.length - 1];
                setTimeout(() => {
                    card.classList.remove("new-card");
                }, 350)
                return setCreate(false);
            });
        }
    }, [create])

    const onSubmit = (event) => {
        setItems([...items, input]);
        setCreate(true);
        setInput({...IData});
        event.preventDefault();
    }

    const IMap = (data) => {
        const html = [];
        for (const [key, value] of Object.entries(data)) {
            html.push(
                <div key={key} className="form-group">
                    <label className="label" for="first_name">{AData(key)}</label>
                    <input
                        required
                        type="text"
                        name={key}
                        value={input[key]}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        className="form-control" />
                    <small className="error form-text">Lütfen {value} Giriniz!</small>
                </div>
            )
        }
        return html;
    }

    return (
        <section className="container constant">
            <div className="row">
                <div className="left-bar col-lg-4">
                    <div className="form-groups justify-content-center d-flex">
                        <form onSubmit={onSubmit}>
                            {IMap(IData)}
                            <button type="submit" className="btn btn-primary">SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div className="content col-lg-8">
                    <div className="constant">
                        {items.map((item, key) => <Card item={item} key={key} i={++key} />)}
                        <div id="create-scroll"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Container;