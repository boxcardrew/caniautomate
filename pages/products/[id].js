import fetcher from "../../libs/fetcher";
import fetch from 'isomorphic-unfetch'
import useSWR from "swr";



export const ItemDetails = props => {
  const {clientData} = useSWR(`http://localhost:3000/api/list?productId=45789`, fetcher, {props})
  console.log(props.data)
  console.log(clientData)

  return <div>{JSON.stringify(props, null, 4)}</div>
}

ItemDetails.getInitialProps = async () => {
  const result = await fetch(`http://localhost:3000/api/list?productId=45789`);
  const data = await result.json();
  console.log(result)
  return {
    props: { data }
  };
}

export default ItemDetails;