import React from 'react';
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import {ToastContext} from "../ToastProvider";

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({toast}) {
    const {deleteToast} = React.useContext(ToastContext);
    const {text, type, id} = toast;

    const Icon = ICONS_BY_VARIANT[type];

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24}/>
            </div>
            <p className={styles.content}>
                <VisuallyHidden>{type}</VisuallyHidden>
                {text}
            </p>
            <button className={styles.closeButton} onClick={() => deleteToast(id)}
                    aria-label="Dismiss message"
                    aria-live="off"
            >
                <X size={24}/>
            </button>
        </div>
    );
}

export default Toast;
