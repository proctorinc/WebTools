import { Colord } from "colord";

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export const formatHsv = (color: Colord) => {
  const hsv = color.toHsv();
  return `hsv${hsv.a !== 1 ? "a" : ""}(${hsv.h}, ${hsv.s}%, ${hsv.v}%${
    hsv.a !== 1 ? ` ${hsv.a}` : ""
  })`;
};
