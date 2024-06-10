"use client"

import styles from "./styles.module.scss"

const PhilippineFlag = () => {

    // Fact: The 3 stars from the flag represents the 3 major island groups
    const islandGroups = ["luzon", "visayas", "mindanao"];

    // Fact: 8 regions that revolting against Spain
    const regions = ["manila", "bulacan", "cavite", "pampanga", "morong", "laguna", "batangas", "nuevaEcija"];

    return (
        <div className={styles.container}>
            <div className={styles.flag}>
                {
                    islandGroups?.map((item, index) => {
                        return (
                            <div 
                                key={index}
                                className={styles?.[item]}/>
                        );
                    })
                }
                <div className={styles.sunCircle}/>
                {
                    regions?.map((item, index) => {
                        return (
                            <div 
                                key={index}
                                className={[
                                    styles.sunRays,
                                    styles?.[item]
                                ].join(" ")}>
                                <div className={styles.leftRay}/>
                                <div className={styles.middleRay}/>
                                <div className={styles.rightRay}/>
                            </div>
                        );
                    })
                }
                <div className={styles.top}/>
                <div className={styles.bottom}/>
            </div>
        </div>
    );
};

export default PhilippineFlag;