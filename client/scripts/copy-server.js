// Copy .dll outputs of ../server/server.csproj to ../plugins

var fs = require("fs");
var path = require("path");

var serverReleaseDir = path.resolve(__dirname, "../../server/bin/Release/netstandard2.0/");
var pluginsDir = path.resolve(__dirname, "../../app/plugins");

if (!fs.existsSync(pluginsDir)) {
    fs.mkdirSync(pluginsDir);
}

var files = fs.readdirSync(serverReleaseDir);
files.forEach(file => {
  if (!file.endsWith(".dll")) return;

  var fromfile = path.join(serverReleaseDir, file);
  var toFile = path.join(pluginsDir, file);
  fs.copyFileSync(fromfile, toFile);
});
