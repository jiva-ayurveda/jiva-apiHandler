import { replace, uniqueId } from "lodash";
import numeral from "numeral";

export const handleToggle = (value, list) => {
  const currentIndex = list.indexOf(value);
  const newChecked = [...list];

  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }

  return newChecked;
};

export function fShortenNumber(number) {
  return replace(numeral(number).format("0.00a"), ".00", "");
}

export function removeFile(images, filename) {
  let filterImages = images.filter(
    (image, index) => `${image.name}${index}` !== filename
  );
  return filterImages;
}

export function uniqueUUID(authUserId = "") {
  let generator = new Date();

  let timestamp =
    authUserId +
    "" +
    generator.getUTCDate() +
    "" +
    generator.getMonth() +
    "" +
    generator.getUTCFullYear() +
    "" +
    generator.getTime();

  return Math.floor(timestamp * Math.random()) + "_" + uniqueId();
}

export function getImageStatus(image, path) {
  if (typeof image === "object" && !!image && !!path && path != "null") {
    return "update";
  } else if (typeof image === "object" && !!image) {
    return "add";
  } else if (!!!image && !!path) {
    return "remove";
  }
  return null;
}

export function calculateAge(birthday) {
  // birthday is a date
  let currentTime = new Date().getTime();
  let birthDateTime = new Date(birthday).getTime();
  let difference = currentTime - birthDateTime;
  return parseInt(difference / (1000 * 60 * 60 * 24 * 365));
}

export const timeAgo = (date) => {
  var ms = new Date().getTime() - new Date(date).getTime();
  var seconds = Math.floor(ms / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);

  if (ms === 0) {
    return "Just now";
  }
  if (seconds < 60) {
    return seconds + " seconds Ago";
  }
  if (minutes < 60) {
    return minutes + " minutes Ago";
  }
  if (hours < 24) {
    return hours + " hours Ago";
  }
  if (days < 30) {
    return days + " days Ago";
  }
  if (months < 12) {
    return months + " months Ago";
  } else {
    return years + " years Ago";
  }
};
