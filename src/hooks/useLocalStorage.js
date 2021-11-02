import { useEffect, useState } from "react";

const PREFIX = "kalam-saved-data-";

export default function useLocalStorage(key, initialValue) {
  const prefixKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jValue = localStorage.getItem(prefixKey);
    if (jValue != null) {
      return JSON.parse(jValue);
    }

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);

  return [value, setValue];
}
