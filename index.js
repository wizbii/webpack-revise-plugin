var path = require('path');

function RevisePlugin () {
  return {
    apply: apply
  };
}

function apply (compiler) {
  compiler.plugin('emit', function (compilation, compileCallback) {
    compilation
      .chunks
      .reduce(function (acc, chunk) {
        return acc.concat(createFiles(chunk.name, chunk.files));
      }, [])
      .forEach(function (file) {
        compilation.assets[file.name + '.rev'] = createAsset(file);
      });

    compileCallback();
  });
}

function createFiles (chunkName, files) {
  return files.map(function (file) {
    var name =
        chunkName
          ? chunkName + path.extname(file)
          : file
      ;

    return {
      name: name,
      revisedName: file
    };
  });
}

function createAsset (file) {
  return {
    source: function () {
      return file.revisedName;
    },
    size: function () {
      return file.revisedName.length;
    }
  };
}

module.exports = RevisePlugin;
