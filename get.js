const server = restify.createServer({
    name    : config.name,
    version : config.version,
    url : config.hostname
});
server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});