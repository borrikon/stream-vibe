import { useEffect } from "react";

type useDetectOutsideClickProps = {
  ref: React.RefObject<HTMLElement>;
  onOutsideClick: () => void;
};

const useDetectOutsideClick = ({
  ref,
  onOutsideClick,
}: useDetectOutsideClickProps) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

export default useDetectOutsideClick;
