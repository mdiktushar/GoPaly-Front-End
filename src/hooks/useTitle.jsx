import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `GoPlay | ${title}`;
  }, [title]);
};

export default useTitle;
