import React from "react";

const useEscapeKey = (callback) => {
    React.useEffect(() => {
        const handleKeydown = (evt) => {
            if (evt.code === 'Escape') {
                callback();
            }
        }

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, [callback])
}

export default useEscapeKey;