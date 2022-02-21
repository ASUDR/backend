import * as randomstring from 'randomstring';

export const randomLogin = () => {
  return randomstring.generate({
    length: 21,
    charset: 'alphabetic',
  });
};
