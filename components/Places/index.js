"use client"

import {
    Button,
    Icon,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.css";

import {PLACES} from "./constants";

import styles from "./styles.module.scss";

const Places = () => {

    const navigateSlide = (type) => {
        const slider = document.querySelector("#slider");
        const items = document.querySelectorAll("#item") ?? [];

        if (slider) {
            switch (type) {
                case "PREVIOUS":
                    slider.prepend(items?.[items?.length - 1]);
                    break;
                case "NEXT":
                    slider.append(items?.[0]);
                    break;
            }
        }
    }

    return (
        <div className={styles.container}>
            <ul id="slider">
                {
                    PLACES?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                id="item"
                                className={styles.item}
                                style={{backgroundImage: `url(${item?.image ?? ""})`}}>
                                <div className={styles.content}>
                                    <h1 className={styles.title}>{item?.title ?? ""}</h1>
                                    <p className={styles.description}>{item?.description ?? ""}</p>
                                    <p className={styles.location}><Icon name="map marker alternate"/>{item?.location ?? ""}</p>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
            <div className={styles.nav}>
                <Button 
                    icon="arrow left"
                    circular
                    onClick={() => navigateSlide("PREVIOUS")}/>
                <Button 
                    icon="arrow right"
                    circular
                    onClick={() => navigateSlide("NEXT")}/>
            </div>
        </div>
    );
};

export default Places;