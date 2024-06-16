"use client"

import {
    useEffect,
    useState,
    useCallback
} from "react";

import {BANNERS} from "./constants";

import styles from "./styles.module.scss";

const Banners = () => {

    const [active, setActive] = useState(null);

    useEffect(() => {
        let isIgnore = false;

        if (!isIgnore) {
            setActive(0);
        }

        return () => {
            isIgnore = true;
        }
    }, []);

    return (
        <div className={styles.carousel}>
            <div className={styles.navigations}>
                <span
                    id="moveLeft"
                    className={[
                        styles.arrow,
                        active == 0
                            ? styles.disabled
                            : ""
                    ].join(" ")}
                    onClick={() => {
                        if (active > 0) {
                            setActive(active - 1);
                        }
                    }}>
                    <svg 
                        className={styles.icon} 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24">
                        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
                    </svg>
                </span>
                <span
                    id="moveRight"
                    className={[
                        styles.arrow,
                        active == (BANNERS?.length - 1)
                            ? styles.disabled
                            : ""
                    ].join(" ")}
                    onClick={() => {
                        if (active < (BANNERS?.length - 1)) {
                            setActive(active + 1);
                        }
                    }}>
                    <svg 
                        className={styles.icon} 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                    </svg>
                </span>
            </div>
            {
                BANNERS?.map((item, index) => {
                    return (
                        <div 
                            key={index}
                            className={[
                                styles.carouselItem,
                                active == index
                                    ? styles.active
                                    : ""
                            ].join(" ")}>
                            <img 
                                className={styles.image} 
                                src={item?.image ?? null}/>
                            <div className={styles.info}>
                                <div className={styles.container}>
                                    <h2 className={styles.subtitle}>{item?.subtitle ?? ""}</h2>
                                    <h1 className={styles.title}>{item?.title ?? ""}</h1>
                                    <p className={styles.description}>{item?.description ?? ""}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Banners;