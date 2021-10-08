import React, { useEffect } from 'react';

function useCalcMaxHeight<TElementType>(
  refObject: React.RefObject<TElementType & HTMLElement>
) {
  const calcMaxHeight = () => {
    if (!refObject.current) {
      return;
    }

    const htmlEl = refObject.current;
    const innerHtml = htmlEl.innerHTML;

    htmlEl.innerHTML = '';
    htmlEl.style.maxHeight = htmlEl.clientHeight + 'px';
    htmlEl.innerHTML = innerHtml;
  };

  const addEventListeners = () => {
    window.addEventListener('resize', calcMaxHeight);
  };

  const removeEventListeners = () => {
    window.removeEventListener('resize', calcMaxHeight);
  };

  useEffect(() => {
    calcMaxHeight();
    addEventListeners();

    return () => removeEventListeners();
  }, []);
}

export default useCalcMaxHeight;
