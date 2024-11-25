import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const DEFAULT_OPTIONS = 'notice';

function ToastPlayground() {
    const [valueTextarea, setValueTextarea] = React.useState('');
    const [valueRadio, setValueRadio] = React.useState(DEFAULT_OPTIONS);
    const {addToast} = React.useContext(ToastContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        addToast(valueTextarea, valueRadio);
        setValueTextarea('');
        setValueRadio(DEFAULT_OPTIONS);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf/>

            <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{alignSelf: 'baseline'}}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea id="message"
                                  className={styles.messageInput}
                                  value={valueTextarea}
                                  onChange={(evt) => setValueTextarea(evt.target.value)}/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((item) => (
                            <label htmlFor={item} key={item}>
                                <input
                                    id={item}
                                    type="radio"
                                    name="variant"
                                    checked={valueRadio === item}
                                    value={item}
                                    onChange={(evt) => setValueRadio(evt.target.value)}
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}/>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
