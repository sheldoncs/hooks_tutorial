import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;

    return () => {
      // Cleanup function
      console.log("Clean up");
    };
  });
};

export default useDocumentTitle;
