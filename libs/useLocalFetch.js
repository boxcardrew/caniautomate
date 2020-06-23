import useSWR from 'swr';
import fetcher from './fetcher';


let key = `/api/list`;

if (typeof Window !== 'undefined') {
  const items = JSON.parse(localStorage.getItem('list')).join()
  if (items) {
    key = `/api/list?productId=${items}`
  }
}

function useLocalFetch() {
  return useSWR(key, fetcher)
 }

 export default useLocalFetch

