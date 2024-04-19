import React, { useEffect } from 'react';

export default function Background() {
    const colors = ["#d9c3d0", "#e094c1", "#f7edf3", "#ffc4e8", "##ff73c7"];

    useEffect(() => {
        const numBalls = 50;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
            let ball = document.createElement("div");
            ball.classList.add("ball");
            ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
            ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
            ball.style.transform = `scale(${Math.random()})`;
            ball.style.width = `${Math.random()}em`;
            ball.style.height = ball.style.width;
            ball.style.borderRadius = "50%";

            balls.push(ball);
            document.body.append(ball);
        }

        balls.forEach((el, i, ra) => {
            let to = {
                x: Math.random() * (i % 2 === 0 ? -11 : 11),
                y: Math.random() * 12
            };

            let anim = el.animate(
                [
                    { transform: "translate(0, 0)" },
                    { transform: `translate(${to.x}rem, ${to.y}rem)` }
                ],
                {
                    duration: (Math.random() + 1) * 2000,
                    direction: "alternate",
                    fill: "both",
                    iterations: Infinity,
                    easing: "ease-in-out"
                }
            );
        });

        return () => {
            balls.forEach(ball => ball.remove());
        };
    }, []);

    // Define styles using a JavaScript object
    const styles = {
        ball: {
            position: 'absolute',
            borderRadius: '50%',
            opacity: 8,
        },
    };

    return (
        <div className="absolute top-0 left-0 bg-cover bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full h-screen inset-0 bg-center min-w-full min-h-full z-0">
            {Object.keys(styles).map((key, index) => (
                <style key={index}>
                    {`.${key} { ${Object.entries(styles[key]).map(([prop, value]) => `${prop}: ${value};`).join(' ')} }`}
                </style>
            ))}
            <div className="ball" />
        </div>
    );
}