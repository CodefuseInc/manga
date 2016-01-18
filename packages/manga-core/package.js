Package.describe({
  name: 'codefuse:manga-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Core package for manga. Required by all other manga packages.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('manga-core.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('codefuse:manga-core');
  api.addFiles('manga-core-tests.js');
});
