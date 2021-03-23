import React, { useEffect } from 'react';

const UseClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e: React.MouseEvent) => {
          if(!ref.current || ref.current.contains(e.target)) {
              return
          }
          handler(e);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
    }, [])
};

export default UseClickOutside;