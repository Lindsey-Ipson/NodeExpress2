/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');
const jsonschema = require("jsonschema");
const userRegisterSchema = require("../schemas/userRegister.json");

const jwt = require("jsonwebtoken");


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */

router.post('/register', async function(req, res, next) {
  try {
    // Fix bug #1 - no data validation for registering users - add JSON schema validation for new user registration
    const validator = jsonschema.validate(req.body, userRegisterSchema);

    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      return next({ status: 400, message: `Invalid data: ${errs}` });
    }

    const { username, password, first_name, last_name, email, phone } = req.body;

    let user = await User.register({username, password, first_name, last_name, email, phone});
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    // Fixes bug #5 - User.authenticate was not awaited and returning a promise pending
    // let user = User.authenticate(username, password);
    let user = await User.authenticate(username, password);
 

    console.log(user);

    // const token = createTokenForUser(username, user.admin);
    const token = createTokenForUser(user.username, user.admin);

    console.log(token);

    console.log(jwt.decode(token));

    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;








/** return signed JWT for payload {username, admin}. */

function createToken(username, admin=false) {
  let payload = {username, admin};
  return jwt.sign(payload, SECRET_KEY);
}
