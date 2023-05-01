import React, { useLayoutEffect, useState } from 'react';
import { animated, useSpring, useSpringRef, useTransition } from '@react-spring/web';

import img from './img/camera_img.svg';
import styles from './style.module.css';

const images = [
    '/src/components/carousel/img/carousel_bg1.svg',
    '/src/components/carousel/img/carousel_bg2.svg',
    '/src/components/carousel/img/carousel_bg3.svg',
];

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const springApi = useSpringRef();

    const transitions = useTransition(activeIndex, {
        from: {
            clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
        },
        enter: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        },
        leave: {
            clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
        },
        onRest: (_springs, _ctrl, item) => {
            if (activeIndex === item) {
                setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
            }
        },
        exitBeforeEnter: true,
        config: { duration: 3000 },
        delay: 1000,
        ref: springApi,
    });

    const springs = useSpring({
        from: {
            strokeDashoffset: 120,
        },
        to: {
            strokeDashoffset: 0,
        },
        config: {
            duration: 11000,
        },
        loop: true,
        ref: springApi,
    });

    useLayoutEffect(() => {
        springApi.start();
    }, [activeIndex]);

    return (
        <div className={styles.section_bg}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.content_wrapper}>
                        {transitions((springs, item) => (
                            <animated.div style={springs}>
                                <img src={images[item]} alt="Фото" />
                            </animated.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.camera_img}>
                    <img src={img} alt="Камера" />
                </div>
            </section>
        </div>
    );
};
