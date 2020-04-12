 
 const Table = ({ brand, item, description, image }) => (
 <div className="main">
   <p className="p">
     {brand} {item}
   </p>{' '}
   <p className="d">{description}</p>
   <picture className="image">
     <img src={image} height="200" width="200" />
   </picture>

  <style jsx>{`
    .main {
      width: 100%;
      display: flex;
      align-items: flex-end;
    }
  `}
  </style>

 </div>)

export default Table