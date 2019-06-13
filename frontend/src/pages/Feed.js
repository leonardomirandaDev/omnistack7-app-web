import React, { Component } from 'react';
// css
import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

export default class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>

                    <header>
                        <div className="user-info">
                            <span>Leonardo Antonio Miranda</span>
                            <span className="place"> Joinville </span>
                        </div>
                        <img src={more} alt="Mais"/>
                    </header>

                    <img src="http://planoviver.com.br/imgs/plano-empresarial-1.webp" alt="Post"/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Post 1 dessa bagaça
                            <span>#react</span>
                        </p>
                    </footer>

                </article>

                <article>

                    <header>
                        <div className="user-info">
                            <span>Leonardo Antonio Miranda</span>
                            <span className="place"> Joinville </span>
                        </div>
                        <img src={more} alt="Mais"/>
                    </header>

                    <img src="http://planoviver.com.br/imgs/plano-empresarial-1.webp" alt="Post"/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Post 1 dessa bagaça
                            <span>#react</span>
                        </p>
                    </footer>

                </article>
            </section>
        );
    }
}