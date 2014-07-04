module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bump: {
            options: {
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin'
            }
        }
    });

    var plugins = require('matchdep').filterDev('grunt-*');
    plugins.forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['bump-only:patch', 'bump-commit']);
};
