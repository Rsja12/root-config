import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: "/",
// });

registerApplication({
  name: "@asocarras/navbar",
  app: () => System.import("@asocarras/navbar"),
  activeWhen: "/navbar"
});

registerApplication({
  name: "@asocarras/app1",
  app: () => System.import("@asocarras/app1"),
  activeWhen: "/app1"
});

start({
  urlRerouteOnly: true,
});
