exports.SendError = (res, error) => {
  res.status(error.code || 500).json({
    message: error.message,
    error,
  });
};

exports.throwError = (code, errorMessage) => (err) => {
  const error = new Error(errorMessage || 'Something has gone wrong');
  error.code = code;
  if (err.errors) {
    error.message = err.errors.map((e) => e.message).join('\n');
  }
  throw error;
};

exports.throwIf = (fn, code, errorMessage) => (result) => {
  if (fn(result)) {
    return exports.throwError(code, errorMessage)();
  }
  return result;
};
