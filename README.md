This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Swiper SSR Bug

Steps to reproduce:
* Checkout the repository
* Run `yarn install` to install all dependencies
* Run `yarn build` to create production build
* Run `yarn start` to start application
* Go to `http://localhost:3000/` and reload the page

### Bug:
You will see that the slides are on the left-hand side of the screen and that the chevrons are visible for a short amount of time.

### Expected Behaviour:
Slider elements should not be visible, and slides should be centered.