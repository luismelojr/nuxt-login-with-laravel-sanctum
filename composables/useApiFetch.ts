import type {UseFetchOptions} from "#app";

export function useApiFetch<T> (path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {
    referer: 'http://localhost:3000',
  }

  const token = useCookie('XSRF-TOKEN')

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(['cookie'])
    }
  }

  return useFetch("http://localhost/" + path, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...headers,
      ...options.headers
    }
  })
}