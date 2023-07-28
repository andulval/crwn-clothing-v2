# Crwn-clothing
[Link to the website](https://master--chipper-cassata-41e430.netlify.app/)

Crwn-clothing is an E-commerce application similar to Shopify using React, Redux,
React Router, Context API, Firebase, Stripe + more. Users can add products to cart
and make test payments. 



## 🚀 Functionalities

>User can sign up with email and password

>User can log-in with google or email and password

>User can add products to cart

>mini-cart to preview currently added products

>User can make a test payment. The app provides feedback with the option to restore the previous cart if there is an error during the payment process

>All data is persistent and stored in Firestore.

## 🚀 Technologies Used:

>React

>React Router

>Redux

>Asynchronous Redux

>React Hooks

>Context API

>React Suspense + React Lazy

>Firebase

>Stripe API

>Styled-Components


## 🖼️ Screenshots
>HomePage
![home](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587663/github%20screenshots/crwn-clothing/crwn_1_geeczd.png)

>Shop page
![Shop page](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587660/github%20screenshots/crwn-clothing/crwn2_bg4sah.png)

->Mini cart (preview)
![Mini cart ](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587668/github%20screenshots/crwn-clothing/crwn3_bsfspq.png)

->Single Category page
![Single Category page](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684588469/github%20screenshots/crwn-clothing/crwn8_kdl88b.png)

->Login & Register page
![login](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587617/github%20screenshots/crwn-clothing/crwn7_sign_in_x46jpj.png)

->Cart page
![Cart](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587631/github%20screenshots/crwn-clothing/crwn4_xerf2g.png)

->Payment
![Payment](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587635/github%20screenshots/crwn-clothing/crwn5_hmbbp4.png)

->Payment successful
![Payment](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587617/github%20screenshots/crwn-clothing/crwn6_b6st5q.png)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/francianepovoa/crwn-clothing.git

$ cd crwn-clothing

```
# After you fork and clone:

## Install dependencies
In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.

## Set your firebase config

Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

<img width="1261" alt="Screen Shot 2022-03-11 at 8 51 22 PM" src="https://user-images.githubusercontent.com/10578605/157999158-10e921cc-9ee5-46f6-a0c5-1ae5686f54f3.png">

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Run the web app
$ yarn dev
```

## 💻 Backend Technologies

Technologies that I used to develop this backend app
### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [body-parser](https://github.com/expressjs/body-parser)

## Set your firebase config

Remember to replace the `config` variable in your `firebase.utils.js `with your own config object from the firebase dashboard! Navigate to the project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

![enter image description here](https://camo.githubusercontent.com/4ed8b6a189ef7358611a7301b8b5fc41f8b5ac8a02ffda9b0f72cd725015b914/68747470733a2f2f692e6962622e636f2f3679774d6b42662f53637265656e2d53686f742d323031392d30372d30312d61742d31312d33352d30322d414d2e706e67)

## Set your stripe publishable key

Set the `publishableKey` variable in the `stripe-button.component.jsx` with your own publishable key from the stripe dashboard.

![enter image description here](https://camo.githubusercontent.com/fb711e324a7e95a935e5db8ca73549c48e4fc3f8cd1a31ad893a8f18f72bd23e/68747470733a2f2f692e6962622e636f2f646a51546d56462f53637265656e2d53686f742d323031392d30372d30312d61742d322d31382d35302d414d2e706e67)

## 🤔 How to contribute 

**Follow the steps below**

```bash
# Clone your fork
$ git clone https://github.com/francianepovoa/crwn-clothing.git

$ cd crwn-clothing

# Create a branch with your feature
$ git checkout -b your-feature

# Make the commit with your changes
$ git commit -m 'feat: Your new feature'

# Send the code to your remote branch
$ git push origin your-feature
```

After your pull request is merged, you can delete your branch

## 📝 Project License

This project is under the MIT license.

The project is an extension of the web application made during Complete React Developer course  by ZTM on the Udemy platform.
