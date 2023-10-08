export function getLimitString(str, limit) {
  str = typeof str === "string" ? str : "";
  return str.length > limit ? str.substring(0, limit) + "..." : str;
}

export const convertToLowercase = (str) =>
  typeof str === "string" ? str.toLowerCase() : str;

export const isDataArray = (value) => (Array.isArray(value) ? value : []);

export const parseJsonObj = (value) => {
  if (!value) return [];

  return Array.isArray(value) ? value : JSON.parse(value);
};

export const convertformData = (obj) => {
  if (obj instanceof FormData) return Object.fromEntries(obj);
  else return obj;
};

export const parseBitmapUrl = (url, place) => {
  return url;
  if (url && typeof url === "object") {
    return URL.createObjectURL(url);
  } else if (
    typeof url === "string" &&
    url.trim() !== "null" &&
    url.trim() !== "undefined" &&
    url.trim() !== ""
  ) {
    return `/storage/images/${place}/${url}`;
  } else {
    return null;
  }
};

export const parseInteger = (val) => (val ? parseInt(val) : 0);

export const parseObject = (obj) => (obj ? obj : {});

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
