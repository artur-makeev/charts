## Getting Started

git clone https://github.com/artur-makeev/charts.git

```bash
docker compose up --build --force-recreate
# or
npm i
npm run dev
```

## Charts generation

Charts are created and populated with random data when index page refreshed

## Demo is hosted at:

[https://charts-fawn.vercel.app/](https://charts-fawn.vercel.app/)

## Assessment Test for Frontend Developers
The task. Create a Single page web application for displaying the list of charts using React and
TypeScript.

Libraries that should be used:
- MUI / React Bootstrap / or others;
- Highcharts;
- Any other library of your choice.
- Advanced. It will be good if you do it with Redux state manager (or others) and some
middlewares like Redux Thunk or Redux Saga but it's not required.

Details.

The UI must be responsive.

There will be a header with two links to two separated routes. One of them should be active
connected with the current route.
"View mode" is the first route. There will be a list of charts and a date range filter (filtering by
dates). Selected dates should affect charts on the page. Date range filter should be hidden if we
have no charts.

The data for the charts could be either randomly generated or fetched via any public API for one
or for all charts. Each value should have a “value” and “date” fields. The default value for date
range filter you can set by yourself.

"Settings" is the second route. There will be a list of charts. Users should have the possibility to
add a new chart or edit an existing one. Those settings should be implemented with a modal
window. It should be possible to change a name, type (line, spline, area…) and color for each of
them. Also we should have the possibility to remove the chart. After saving, new settings will be
applied.
