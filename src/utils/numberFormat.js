export const numberFormat = (param) => {
  return param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
