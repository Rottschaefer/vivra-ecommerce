import { rest } from "msw";

import slide1 from "../assets/shop-hero-1-product-slide-1.jpg";
import slide2 from "../assets/fashion-report-1-1.png";
import slide3 from "../assets/3.jpg";
import { PATH } from "../Constants/constants";

export const handlers = [
  rest.get(`${PATH}/slides`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "New Collection",
          description:
            "Introducing Our Latest Collection: Unveiling Exquisite Styles for You!",
          img: slide1,
        },
        {
          title: "Don't Wait To Be Pretty",
          description: "Receive your order in 2 days",
          img: slide2,
        },
        {
          title: "You don't have to Suffer to be Beautiful",
          description: "Be gorgeous and comfortable with our products :) ",
          img: slide3,
        },
      ])
    );
  }),
];
