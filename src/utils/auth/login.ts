import * as randomstring from 'randomstring';

export const randomLogin = () => randomstring.generate({
  length: 21,
  charset: 'alphabetic',
});
