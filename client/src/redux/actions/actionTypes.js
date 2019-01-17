export const INIT = 'INIT';
export const INIT_DATA = 'INIT_DATA';

export const init = () => ({
  type: INIT 
})

export const initData = (data) => ({
  type: INIT,
  data
})