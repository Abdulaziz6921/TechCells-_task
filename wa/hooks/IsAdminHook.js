import { useState, useEffect } from "react";

export const useISADMIN = (argument) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (argument?.email.includes("abdulaziztojibayev6@gmail.com")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [argument]);

  return { isAdmin };
};
