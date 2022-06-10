const encryptKey = 'y$B&E)H@McQfTjWnZr4t7w!z%C*F-JaNdRgUkXp2s5v8x/A?D(G+KbPeShVmYq3t6w9z$B&E)H@McQfTjWnZr4u7x!A%D*F-JaNdRgUkXp2s5v8y/B?E(H+KbPeShVmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/B?E(H+MbQeThWmYq3t6w9z$C&F)J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(H+MbQ';

export const encryptData = (data) => {
  const o = JSON.stringify(data).split('');
  for (let i = 0, l = o.length; i < l; i += 1) {
    if (o[i] === '{') o[i] = '}';
    else if (o[i] === '}') o[i] = '{';
  }
  return encodeURI(encryptKey + o.join(''));
};

export const decryptData = (data) => {
  let o = decodeURI(data);
  if (encryptKey && o.indexOf(encryptKey) !== 0) throw new Error('object cannot be decrypted');
  o = o.substring(encryptKey.length).split('');
  for (let i = 0, l = o.length; i < l; i += 1) {
    if (o[i] === '{') o[i] = '}';
    else if (o[i] === '}') o[i] = '{';
  }
  return JSON.parse(o.join(''));
};

export const setUserData = (userData) => {
  const storeData = encryptData(userData);
  localStorage.setItem('manage', storeData);
};

export const getUserData = () => {
  const data = decryptData(localStorage.getItem('manage'));
  return data;
};
