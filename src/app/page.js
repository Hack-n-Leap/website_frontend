import React from 'react';

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
                        transition: 'transform .2s'
                    }}>
                        <img src="https://cdn.discordapp.com/attachments/619915799687069726/1245366982291886100/nj5kFWN.png?ex=66587de2&is=66572c62&hm=3062ced6717cd99188955564634b7d1922c91b9cf90055ec1b9aea73c2bdd580&" alt="Image du jeu" style={{
                            width: '100%',
                            border: '4px solid #808080'
                        }}/>
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
            </div>
        </div>
    );
}
