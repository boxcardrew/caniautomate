import fetcher from "../../libs/fetcher";
import fetch from 'isomorphic-unfetch'
import useSWR from "swr";
import { useRouter } from "next/router";



const ItemDetails = ( data ) => {
  // const {clientData} = useSWR(`http://localhost:3000/api/list?productId=45789`, fetcher, {props})
  // console.log(props.data)
  // console.log(clientData)
  const router = useRouter()
  const { productId } = router.query
  console.log(router)
  
  return <div>{JSON.stringify(data, null, 4)}</div>
}

ItemDetails.getInitialProps = async () => {
  const result = await fetch(`http://localhost:3000/api/product`);
  const data = await result.json()
  console.log(data)
  return data
}

export default ItemDetails;