import Link from "next/link";

const BasketPage = () => {
  return (
    <div className="basket">
      <div className="basket-inner">
        <div className="flex-1">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="text-left">Product</th>
                <th className="text-right">
                  <span>Quantity</span>
                </th>
                <th className="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="thumbnail">
                  <Link href={`/product/123`}>
                    <a>
                      <img
                        src={
                          "https://ocado.com/productImages/518/518373011_0_640x640.jpg?identifier=fe9099749fa6ed05c15aede06af63f98"
                        }
                        alt={""}
                      />
                    </a>
                  </Link>
                </td>
                <td>
                  <p>{"desc"}</p>
                  <button onClick={() => {}}>
                    <small>(Remove item)</small>
                  </button>
                </td>
                <td className="qty-column">
                  <div className="w-12 h-10 relative">
                    <input
                      type="number"
                      defaultValue={1}
                      onChange={(e) => {}}
                    />
                  </div>
                </td>
                <td className="text-right">
                  <span className="font-medium">{100.0}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="pb-6 mt-6" />
          <button className="checkout">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
              />
            </svg>
            <span>Proceed to checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;