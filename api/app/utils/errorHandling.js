exports.sendError = (res, error) => {
  res.stats(error.code || 500).json({
    message: error.message,
    error,
  });
};

exports.throwError = (code, errorMessage) => () => {
  const error = new Error(errorMessage || 'Something has gone wrong');
  error.code = code;
  if (error.errors) {
    error.message = error.errors.map((err) => err.message).join('\n');
  }
  throw error;
};

exports.throwIf = (fn, code, errorMessage) => (result) => {
  if (fn(result)) {
    return exports.throwError(code, errorMessage)();
  }
  return result;
};
