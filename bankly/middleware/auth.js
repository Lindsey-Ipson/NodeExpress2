/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/

function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;
    if (token) {
      // fixes bug #6 - jwt was simply being decoded instead of verified
      let payload = jwt.verify(token, SECRET_KEY);
      req.curr_username = payload.username;
      req.curr_admin = payload.admin;
    }
    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
} // end


/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized 1' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authorization Middleware: Requires user is logged in and is staff. */

function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized 2' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authentication Middleware: Requires either admin status or that the user's username is the same username provided as route param.
 */

function ensureAdminOrCorrectUser(req, res, next) {
  try {
    if (!(req.curr_admin || req.curr_username === req.params.username)) {
      return next({ status: 401, message: 'Unauthorized 3' });
    }
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  requireLogin,
  requireAdmin,
  ensureAdminOrCorrectUser,
  authUser
};
