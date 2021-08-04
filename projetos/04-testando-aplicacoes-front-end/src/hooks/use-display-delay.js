import { useState, useEffect } from 'react';

const DEFAULT_DELAY_MS = 500;
const DEFAULT_TIMEOUT_MS = 5000;

const STATUS = {
  MOUNTING: 'mounting',
  MOUNTED: 'mounted',
  UNMOUNTING: 'unmounting',
  UNMOUNTED: 'unmounted'
};

export const useDisplayDelay = ({
  timeout = DEFAULT_TIMEOUT_MS,
  delay = DEFAULT_DELAY_MS,
  onUnmount,
}) => {
  const [status, setStatus] = useState(STATUS.MOUNTING);
  const [active, setActive] = useState(false);

  const remove = () => {
    setTimeout(() => {
      setStatus(STATUS.UNMOUNTED);
      onUnmount && onUnmount();
    }, delay);
  };

  const activate = () => {
    setActive(true);
    setStatus(STATUS.MOUNTED);
  }

  const deactivate = () => {
    setActive(false);
    remove();
  };

  useEffect(() => {
    setTimeout(() => {
      activate();
    }, delay);

    setTimeout(() => {
      deactivate();
    }, timeout + delay);
  }, []);

  return {
    display: status !== STATUS.UNMOUNTED,
    visible: active,
    remove: deactivate
  };
};
