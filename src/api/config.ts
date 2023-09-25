import { get } from './request';

// export async function fetchConfig() {
//   return await get({
//     url: '/config/xxx',
//   });
// }

export const fetchConfig = async () => {
  return await get({
    url: '/config/xxx',
  });
}