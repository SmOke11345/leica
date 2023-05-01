import { animated, useInView } from '@react-spring/web';

import img1 from './img/img1.svg';
import img2 from './img/img2.svg';
import styles from './style.module.css';

export const Dignity = () => {
    const config = {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
            x: 0,
        },
    };

    const [refFirst, propsFirst] = useInView(
        () => ({
            config,
            from: {
                x: -500,
            },
        }),
        {},
    );

    const [refSecond, propsSecond] = useInView(
        () => ({
            config,
            from: {
                x: 500,
            },
        }),
        {},
    );

    return (
        <>
            <section className={styles.dignity}>
                <div className={styles.container}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.title}>
                            <h2>Сосредоточьтесь на мире, от 45 см до бесконечности</h2>
                        </div>
                    </div>
                    <animated.div ref={refFirst} style={propsFirst} className={styles.wrapper}>
                        <div className={styles.img}>
                            <img src={img1} alt="Объектив" />
                        </div>
                        <div className={styles.text}>
                            <p>
                                Summilux-M 50 f/1,4 ASPH. позволяет снимать детальные крупные планы
                                благодаря двойному кулачковому механизму и минимальному расстоянию
                                фокусировки 45 сантиметров.
                            </p>
                        </div>
                    </animated.div>
                </div>
            </section>
            <section className={styles.dignity}>
                <div className={styles.container}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.title}>
                            <h2>Безупречная фотосъёмка</h2>
                        </div>
                    </div>
                    <animated.div ref={refSecond} style={propsSecond} className={styles.wrapper}>
                        <div className={styles.text}>
                            <p>
                                Summilux-M 50 f/1,4 ASPH. позволяет снимать детальные крупные планы
                                благодаря двойному кулачковому механизму и минимальному расстоянию
                                фокусировки 45 сантиметров.
                            </p>
                        </div>
                        <div className={styles.img}>
                            <img src={img2} alt="Объектив" />
                        </div>
                    </animated.div>
                </div>
            </section>
        </>
    );
};
