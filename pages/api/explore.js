import nextConnect from 'next-connect';
import middleware from "../../database";
import aqp from 'api-query-params';


const handler = nextConnect();

handler.use(middleware);

handler.get (async (req, res) => {
  let { filter } = aqp(req.query, {
    casters: {
      minRating: val => val = {$gte: + val}
    },
    castParams: {
      price: 'string',
      rating: 'minRating',
    }
  }
    );
  let products = await req.db.collection('products').find(filter).toArray();
  console.log(filter);
  await res.json(products);
  }  
);

export default handler;


