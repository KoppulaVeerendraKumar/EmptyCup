import React from 'react'
import styles from "./Studio.module.css"
import Stars from "./stars.svg"
import Image from 'next/image'
import Details from "./detalis.svg"
import Hide from "./hide.svg"
import Short from "./shortlist.svg"
import Report from "./report.svg"
import singleStar from "./single.svg"




export default function Studio() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.MainConatiner}>
                    <div className={styles.right}>
                        <div className={styles.designConatiner}>
                            <p>Studio - D3</p>
                            <Image src={Stars} alt="stars" width={96} height={16} />
                            <Image src={singleStar} alt='ss' width={16} height={15} className={styles.Sigle}/>
                        </div>
                        <div className={styles.para}>
                            <p>Passionate team of 4 designers working out of Bangalore with an experience of 4 years.</p>
                        </div>
                        <div className={styles.Projects}>
                            <div className={styles.ProjectOne}>
                                <h4>43</h4>
                                <p>Projects</p>

                            </div>
                            <div className={styles.ProjectTwo}>
                                <h4>6</h4>
                                <p>years</p>

                            </div>
                            <div className={styles.ProjectThree}>
                                <h4>$$$</h4>
                                <p>Price</p>
                            </div>

                        </div>
                        <div className={styles.number}>
                            <p>+91 - 984532853</p>
                            <p>+91 - 984532854</p>

                        </div>

                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.left}>
                        <div className={styles.leftone}>
                            <Image src={Details} alt='ee' width={11.5} height={9.63}/>
                            <p>Details</p>

                        </div>
                        <div className={styles.lefttwo}>
                           <Image src={Hide} alt='ee' width={20} height={20}/>
                            <p>Hide</p>
                        </div>
                        <div className={styles.leftthree}>
                           <Image src={Short} alt='ee' width={17.5} height={21}/>
                            <p>Shortlist</p>
                        </div>
                        <div className={styles.leftfour}>
                           <Image src={Report} alt='ee' width={16} height={16}/>
                            <p>Report</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
