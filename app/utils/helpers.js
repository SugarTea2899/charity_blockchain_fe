export const copyToClipboard = async content => {
  await navigator.clipboard.writeText(content);
};

export const getTime = time => {
  const diff = (Date.now() - time) / 1000;

  if (diff < 60) return `${Math.round(diff)} secs ago`;

  if (diff > 60 && diff < 3600) return `${Math.round(diff / 60)} mins ago`;

  return `${Math.round(diff / 3600)} hours ago`;
};

export const hideCharacter = (str, size = 10) => {
  return str.substring(0, size) + (str.length > size ? '...' : '');
};

export const formatDate = date => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const formatDateTime = date => {
  return date.toLocaleTimeString() + ', ' + formatDate(date);
}

export const getStatusFromStatusCode = statusCode => {
  switch (statusCode) {
    case 0:
      return 'WAITING';
    case 1:
      return 'PROCESSING';
    case 2:
      return 'END';
    default:
      return 'N/A';
  }
};

export const getColorFromStatusCode = statusCode => {
  switch (statusCode) {
    case 0:
      return 'red';
    case 1:
      return '#66bb6a';
    case 2:
      return '#bdbdbd';
    default:
      return 'black';
  }
}