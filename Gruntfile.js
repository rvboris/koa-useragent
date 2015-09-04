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

    grunt.registerTask('patch', ['bump-only:patch', 'bump-commit']);
    grunt.registerTask('minor', ['bump-only:minor', 'bump-commit']);
    grunt.registerTask('major', ['bump-only:major', 'bump-commit']);

    grunt.registerTask('default', ['patch']);
};
