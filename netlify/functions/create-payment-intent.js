require("dotenv").config(); //for node -> old import, config - attach secret variables to envinment

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body); //amount withoud decimals -> usd *100 because it has to be in cents!

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log("error in netlify function!", { error });
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
