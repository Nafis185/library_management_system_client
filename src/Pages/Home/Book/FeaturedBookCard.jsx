


const FeaturedBookCard = ({featuredBook}) => {
    const {title , image, author_name, category, rating, price, description} = featuredBook ;

    return (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-bold">
            {title}
          </h2>
          <p>Price : ${price}</p>
          <p>Author : {author_name}</p>
          <div className="card-actions justify-end">
            <div className="btn btn-outline">Fashion</div>
            <div className="btn btn-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default FeaturedBookCard;