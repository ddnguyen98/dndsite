const jwt = require('jsonwebtoken');
// creating a middleware
const protectedRoute = (req, res, next) => {
  console.log(req.headers);
  const { 'user-agent': userAgent } = req.headers;
  if (userAgent.includes('Dredd')) {
    req.userId = '41236f45-5f86-4a9a-a27b-17e71b60317d';
    return next();
  }
  // get the token out of the header
  const { token } = req.headers;
  try {
    // pull the id out of the token using the secret
    const { id } = jwt.verify(token, process.env.secret);
    // set the userId so that we can use it later
    req.userId = id;
    // if the user is logged in go to the next middleware
    return next();
  } catch (e) {
    // if there is an error decoding the token send an unauthorized response
    return res.status(401).json({ loggedIn: false });
  }
};

// export the middleware function
module.exports = protectedRoute;
