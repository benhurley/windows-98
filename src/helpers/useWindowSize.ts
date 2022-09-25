import { useState, useLayoutEffect } from 'react';

export function useWindowSize(): number[] {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}

export const GetIsMobile = () => {
    const [width] = useWindowSize();
    return width < 600;
}
