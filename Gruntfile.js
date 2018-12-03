module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.initConfig({
        concat: {
            dist: {
                src: ["assets/js/*.js"]
                , dest: "assets/js/app.js"
            },
            css: {
                src: ["assets/css/*.css"]
                , dest: "assets/css/app.css"
            }
        }
    });
};