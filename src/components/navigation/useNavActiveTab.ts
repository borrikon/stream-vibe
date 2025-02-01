import { MutableRefObject, useEffect, useState } from "react";

const useNavActiveTab = (tabsRef: MutableRefObject<(HTMLElement | null)[]>) => {
  const [activeLink, setActiveLink] = useState("/");
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const setTabPosition = () => {
    if (tabsRef) {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    } else {
      throw new Error("Tabs ref must be provided");
    }
  };

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }
    setTabPosition();
  }, [activeLink]);

  return {
    activeLink,
    setActiveLink,
    setActiveTabIndex,
    tabUnderlineLeft,
    tabUnderlineWidth,
  };
};
export default useNavActiveTab;
