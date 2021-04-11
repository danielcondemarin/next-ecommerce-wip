import { getByProductId } from "../lib/productStore";

const ProductDetailsPage = ({ productDetails }) => {
  const priceParts = productDetails.price.split(".");

  return (
    <div className="product-details">
      <div className="product-details-inner">
        <div className="product-details-image">
          <img src={productDetails.img} alt={productDetails.description} />
        </div>
      <div className="product-details-body">
        <h1>{productDetails.description}</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div className="product-details-price">
          <span>{priceParts[0]}</span>
            {priceParts[1] && <span className="product-details-price-fraction">.{priceParts[1]}</span>}
        </div>
        <div className="product-details-add-to-basket">
            <button onClick={() => {}}>
          <i></i> Add to trolley
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const productDetails = await getByProductId(context.query.productId);

  return {
    props: { productDetails }, // will be passed to the page component as props
  }
}



export default ProductDetailsPage;
