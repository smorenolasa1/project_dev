## Getting Started

First, install the necessary packages:

```bash
npm run i
# or
yarn i
# or
pnpm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see page.

To close the development server use CTRL + C.

## Activity instructions

For this activity you will see an incomplete form. There is already a TextField for submitting an email. 
There is some error that you will have to fix first in order to run it correctly.
Then you will have to add another TextField for submitting a password, specifing its type so the text is masked. 
You also have to complete the button function, and add the property so it appears disabled if the password field is empty.

After this you should also control that the email TextField is marked as error, and the button is disabled if the email value is not a valid email.

In this front-end we are using Next.js with a library of components called Material-ui. You can see more information of this library in this link: https://mui.com/material-ui/api/text-field/.

You will only need to edit the `app/main.tsx` file. The page auto-updates as you edit the file.
