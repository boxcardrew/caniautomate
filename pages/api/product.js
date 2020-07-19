import nextConnect from 'next-connect';
import middleware from "../../database";
import aqp from 'api-query-params';


const handler = nextConnect();

handler.use(middleware);



handler.get (async (req, res) => {
  
  let { filter } = aqp(req.query, {
    castParams: {
      productId: 'string'
    }
  }
    );
  let products = await req.db.collection('products').find(filter).toArray();
  await res.json(products);
  // console.log(products);
  }  
);

export default handler;