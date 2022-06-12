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

export const convertDateWithName = (date) => {
  const event = new Date(date);

  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  return event.toLocaleDateString('en-US', options);
};
