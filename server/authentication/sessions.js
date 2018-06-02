// var expressSession = require("express-session");
// var mongoStore = require("connect-mongodb-session")(expressSession);

// var store = new mongoStore({
//   uri: "mongodb://john:john@ds016298.mlab.com:16298/mytunes", //CHANGE ME!!!!!!
//   collection: "Sessions"
// });

// store.on("error", function(err) {
//   console.log("[SESSION ERROR]", err);
// });

// // @ts-ignore
// var session = expressSession({
//   secret: "p9asfpouqwpogfo;asjd;fjil afao ; faoi lfdfjalj foajfjlkasjdf   sadlkjfa;djf  ajdsfka;skf'a", //CHANGE ME!!!!
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
//   },
//   store,
//   resave: true,
//   saveUninitialized: true
// });

// module.exports = session;