import { get } from './request';

export async function fetchConfig() {
  return await get({
    url: '/config/xxx',
  });
}
