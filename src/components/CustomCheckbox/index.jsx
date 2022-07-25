import React,{ useState } from "react";
import Check from '../../assets/images/check.svg';
import styles from './custom-checkbox.module.scss';

function CustomCheckbox({checked=false}) {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label className={`${styles.checkbox} ${isChecked ? styles.active : ''}`}>
            <input type="checkbox" onChange={() => {setIsChecked(!isChecked);}}/>
            <img src={Check} alt="" />   
        </label>
    );
}

export default CustomCheckbox;