module.exports = function () {
  return {
    options: {
      mangle: false,
      preserveComments: false
    },
    all: {
      files: {
        'dist/js/app.min.js': ['dist/js/app.min.js']
      }
    }
  };
};