import { createContainer } from "unstated-next";
import { useState } from "react";

export const useFloat = createContainer(() => {
  const [data, mutate] = useState({});
  return {
    data,
    mutate
  };
});
