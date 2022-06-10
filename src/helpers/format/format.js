import StorageManager from './StorageManager';

export const dateDiff = (date) => {
  const currentDate = new Date();
  const inputDate = new Date(date);
  const diffTime = currentDate - inputDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const chunkArray = (array) => {
  const end = 3;
  const result = [];
  const arrayCopy = [...array];
  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, end));
  }

  return result;
};

export const userStatus = () => {
  const auth = StorageManager.getToken();
  if (auth.token === '' || !auth || (auth.token !== '' && dateDiff(auth.exp_date.toString()) === 1)) {
    return false;
  }
  return true;
};


export const encryptData = (o, salt) => {
  o = JSON.stringify(o).split('');
  for(var i = 0, l = o.length; i < l; i++)
      if(o[i] == '{')
          o[i] = '}';
      else if(o[i] == '}')
          o[i] = '{';
  return encodeURI(salt + o.join(''));
}

export const decryptData = (o, salt) => {
  o = decodeURI(o);
  if(salt && o.indexOf(salt) != 0)
      throw new Error('object cannot be decrypted');
  o = o.substring(salt.length).split('');
  for(var i = 0, l = o.length; i < l; i++)
      if(o[i] == '{')
          o[i] = '}';
      else if(o[i] == '}')
          o[i] = '{';
  return JSON.parse(o.join(''));
}
