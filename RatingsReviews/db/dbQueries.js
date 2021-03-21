/* -------------------------
Import config + dependencies
------------------------- */
const db = require('./mongo/index.js');
const config = require('./server/config.js');

// GET /reviews/?queryparams
// GET /reviews/meta
// POST /reviews
// PUT /reviews/:review_id/helpful
// PUT /reviews/:review_id/report

// module.exports = {
//   getReview: (req, res) => {
//     db.Review.find({ product_id: req.})
//   }
// }

// --> req --> express api --> dbquery --> db