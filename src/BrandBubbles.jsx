/* eslint-disable */
import { useState, useEffect } from 'react';
import './BrandBubbles.css';

const bubbleStyles = {
    color: '#293264',
    fontFamily: 'Karla, sans-serif',
    backgroundColor: 'rgba(255, 255, 204, 0.7)',
    text: 'awodi',
};

const bubblePositionStyles = (index) => ({
    position: 'fixed',
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
});

const animations = ['swim1', 'swim2'];

const BrandBubbles = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const newBubbles = Array.from({ length: 2 }, (_, index) => ({
            id: index,
            styles: bubbleStyles,
            positionStyles: bubblePositionStyles(index),
            animationName: animations[index % animations.length],
            animationDuration: `${Math.random() * 5 + 5}s`,
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="brand-bubbles-container">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="bubble"
                    style={{
                        ...bubble.positionStyles,
                        ...bubble.styles,
                        animationDuration: bubble.animationDuration,
                        animationName: bubble.animationName,
                    }}
                >
                    {bubble.styles.text}
                </div>
            ))}
        </div>
    );
};

export default BrandBubbles;