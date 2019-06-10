## Home cards

The project frontend is built using react-bootstrap and bootstrap for a quick setup. The style.scss in `/homecards/src` directory set all the style variables and mixins, as well as the global styles. Styles for each partial are in each components folder at `/homecards/src/components`

The endpoints `/api/homecards/30` is going to return the first 30 items of the home cards. The last parameter `30` can be changed to reflect the total number of the return results. For example, `/api/homecards/5` will return five results.

Goto directory `/homecards`:

- run `npm install` to add all the node dependencies.
- run `npm run start` will run `npm run serve` and start the home cards page.
- or you can run `npm run serve` separately to start the custom api listening on port 5000.
- run `npm run build` to build the home card project for production.
