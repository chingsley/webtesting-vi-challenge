const listItems = (arr) => {
  const str = arr.join(', ');
  const idx = str.lastIndexOf(',');
  let result = '';
  if (arr.length <= 1) {
    result = str;
  } else if (arr.length === 2) {
    result = arr.join(' and ');
  } else {
    result = `${str.slice(0, idx + 1).trim()} and ${str.slice(idx + 1).trim()}`;
  }
  return result;
};

const isVAlidEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export { listItems, isVAlidEmail };