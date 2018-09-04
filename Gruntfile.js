// 'use strict';
module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'src/css/built/style.css': 'src/scss/style.scss',
                    'src/css/built/luxbar.css': 'src/scss/luxbar-menu/luxbar.scss',
                    'src/css/built/grid.css': 'src/scss/bulma-grid/all.sass'
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/jquery.3.3.1.min.js','src/js/lightgallery.min.js','src/js/lightslider.min.js','src/js/slick.min.js','src/js/built/script.min.js'],
                dest: 'dist/js/scripts.js',
            }
        },
        autoprefixer:{
            dist:{
                files:{
                    'src/css/built/style.css': 'src/css/built/style.css',
                    'src/css/built/luxbar.css': 'src/css/built/luxbar.css',
                    'src/css/built/grid.css': 'src/css/built/grid.css'
                }
            }
        },
        jshint: {
            all: ['src/js/built/script.js']
        },
        babel: {
            options: {
                sourceMap: true
              },
            dist: {
                files: {
                    // 'src/js/built/script.js': 'src/js/script.js',
                    // 'src/js/built/lightgallery.min.js':'src/js/lightgallery.min.js',
                    // 'src/js/built/lightslider.min.js':'src/js/lightslider.min.js'
                    'src/js/built/script.js': 'src/js/script.js'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            // build: {
            //     src: 'src/js/built/scripts.js',
            //     dest: 'dist/js/scripts.min.js'
            // }
            build: {
                src: 'src/js/built/script.js',
                dest: 'src/js/built/script.min.js'
            }
        },
        concat_css: {
            all: {   
                src: ['src/css/built/*.css','src/css/*.css'],
                dest: 'dist/css/styles.css'
            },
        },
        cssmin : {
            target : {
                src : 'dist/css/styles.css',
                dest : 'dist/css/styles.min.css'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks("grunt-jquery-builder");
    
    grunt.registerTask('default', ['sass', 'autoprefixer', 'babel','uglify','concat','concat_css','cssmin','htmlmin']);
};