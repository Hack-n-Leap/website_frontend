'use client'
import React from 'react';
import styled from 'styled-components';

export default function GamePage() {
    return (
        <div style={{
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#f4f4f4',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            background: 'linear-gradient(to right, #0099ff, #ff0000)'
        }}>
            <div style={{
                width: '80%',
                margin: 'auto',
                padding: '20px'
            }}>
                <div style={{
                    textAlign: 'center',
                    margin: '10px',
                    padding: '10px'
                }}>
                    <img src="https://cdn.discordapp.com/attachments/619915799687069726/1245368860195033088/q1Kg5Az.png?ex=66587fa2&is=66572e22&hm=f29a0fb42cef6aaf0376dc0652f0bdb8a8a7d38dd0e7bdeb760bab51df4119e6&" alt="Logo du jeu" style={{width: '150px'}}/>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '20px 0'
                }}>
                    <div style={{
                        flex: 1,
                        marginRight: '20px',
                        transition: 'transform .2s',
                        overflow: 'visible',
                        position: 'relative'
                    }}>
                        <iframe src="https://www.youtube.com/embed/hUAvbMDDE5k?si=7y4RTa22dxP3YQ81?autoplay=1" alt="Image du jeu" style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform .2s',
                            position: 'absolute',
                            zIndex: 1
                        }} onMouseOver={e => {e.currentTarget.style.zIndex = '2'; e.currentTarget.style.objectFit = 'contain'; e.currentTarget.style.transform = 'scale(1.2)';}} onMouseOut={e => {e.currentTarget.style.zIndex = '1'; e.currentTarget.style.objectFit = 'cover'; e.currentTarget.style.transform = 'scale(1.0)';}} />
                    </div>
                    <div style={{
                        flex: 2,
                        backgroundColor: '#fff',
                        padding: '20px',
                        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <h2>Description</h2>
                            <p>Bienvenue dans notre jeu de plateforme innovant développé sur Unity. Ce jeu unique en son genre vous emmène à travers 7 niveaux captivants où chaque étape est un nouveau défi.</p>
                            <p>Ce qui distingue notre jeu, c'est que vous, en tant que joueur, avez le contrôle total sur vos actions. Vous pouvez programmer vos propres mouvements et actions en utilisant du pseudo-code. Cela signifie que vous pouvez décider de la façon dont votre personnage se déplace, saute et interagit avec l'environnement du jeu.</p>
                            <p>Que vous soyez un codeur chevronné ou un débutant en programmation, notre jeu offre une expérience d'apprentissage ludique. Vous pouvez tester vos compétences en codage, résoudre des énigmes complexes et progresser à travers les niveaux tout en améliorant vos compétences en programmation.</p>
                            <p>Préparez-vous à entrer dans un monde où le codage rencontre le jeu. Êtes-vous prêt à relever le défi ?</p>
                        </div>
                        <a href="https://github.com/Hack-n-Leap/game" style={{
                            backgroundColor: '#008CBA',
                            color: 'white',
                            padding: '15px 32px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            marginTop: '20px',
                            alignSelf: 'center',
                            cursor: 'pointer',
                            transition: 'background-color .3s'
                        }}>Télécharger le jeu</a>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '120px 0'
                }}>
                    <div style={{
                        flex: 2,
                        backgroundColor: '#fff',
                        padding: '20px',
                        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <h2>Compétition et Classement</h2>
                            <p>Notre jeu n'est pas seulement une aventure, c'est aussi une compétition ! Chaque niveau est une course contre la montre où chaque seconde compte. Vous pouvez voir comment vous vous situez par rapport aux autres joueurs grâce à notre système de classement basé sur le temps.</p>
                            <p>Le classement est mis à jour en temps réel, vous pouvez donc toujours voir votre progression. Que vous soyez un joueur compétitif cherchant à dominer les classements, ou que vous aimiez simplement voir votre amélioration au fil du temps, notre système de classement ajoute une dimension supplémentaire d'excitation et de défi au jeu.</p>
                            <p>Alors, êtes-vous prêt à faire la course et à vous hisser au sommet du classement ? Rejoignez-nous dans le jeu et montrez-nous de quoi vous êtes capable !</p>
                        </div>
                    </div>
                    <div style={{
                        flex: 1,
                        marginLeft: '20px',
                        transition: 'transform .2s',
                        overflow: 'visible',
                        position: 'relative'
                    }}>
                        <img src="https://cdn.discordapp.com/attachments/619915799687069726/1245391139482238976/JWSPeqr.png?ex=66589461&is=665742e1&hm=3af9d8c2d5380fd1fcc13094e5c64ff960cc8d5079990bf9b266f8c4b2631bac&" alt="Capture d'écran du classement" style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform .2s',
                            position: 'absolute',
                            zIndex: 1
                        }} onMouseOver={e => {e.currentTarget.style.zIndex = '2'; e.currentTarget.style.objectFit = 'contain'; e.currentTarget.style.transform = 'scale(1.2)';}} onMouseOut={e => {e.currentTarget.style.zIndex = '1'; e.currentTarget.style.objectFit = 'cover'; e.currentTarget.style.transform = 'scale(1.0)';}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
