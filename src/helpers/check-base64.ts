import isBase64 from "is-base64";

export const checkBase64 = (base64: string): boolean => {
  if (!base64) {
    return false;
  }

  return isBase64(base64);
};
