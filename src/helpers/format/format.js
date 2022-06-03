export const dateDiff = (date) => {
  const currentDate = new Date();
  const inputDate = new Date(date);
  const diffTime = Math.abs(inputDate - currentDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const blobToImage = () => {

};
