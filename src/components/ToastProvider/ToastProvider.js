import React from 'react';
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
    const [toasts, setToasts] = React.useState([]);

    const handleEscape = React.useCallback(() => {
        setToasts([]);
    }, []);
    useEscapeKey(handleEscape);

    const addToast = (valueTextarea, valueRadio) => {
        setToasts([
            ...toasts,
            {
                text: valueTextarea,
                type: valueRadio,
                id: crypto.randomUUID()
            }
        ])
    }

    const deleteToast = (id) => {
        const newToasts = toasts.filter(toast => toast.id !== id);
        setToasts(newToasts);
    }

    // const resetToasts = () => {
    //     setToasts([]);
    // }

    return <ToastContext.Provider value={{toasts, setToasts, addToast, deleteToast}}>
        {children}
    </ToastContext.Provider>;
}

export default ToastProvider;
