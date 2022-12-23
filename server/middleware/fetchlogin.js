const fetchuser = (req, res, next) => {
  const email = req.header("email");
  if (!email) {
    return res
      .status(401)
      .json({ error: "Enter the Valid Uthentication-----" });
  }
  try {
    req.email = email;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Enter the Valid Uthentication++++" });
  }
};

module.exports = fetchuser;
