module.exports = function(html) {
  return '*' + html + '*';
};

/*
    Use in the templates lile:
    {{testHelper 'This would asteriks surrounding it'}}

    If the helper was in a subdirectory here, it would need 
    {{[some-subdirectory/testHelper] 'This would asteriks surrounding it'}}

    handlebars-loader only looks to the /helper folder, not its subdirs.
    HelperDirs property is set in Webpack config
*/