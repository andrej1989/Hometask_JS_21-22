module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

   pkg: grunt.file.readJSON('package.json'),

   concat:{
    options:{
      separator: ';',
    },
    dist:{
      src:['src/js/*.js'],
      dest: 'src/js/concat/script.main.js'
    }
   },
   uglify:{
    dist:{
      src:['src/js/concat/script.main.js'],
      dest: 'js/script.js'
    }
   },
   sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'src/scss',
        src: ['style.scss'],
        dest: 'css',
        ext: '.css'
      }]
    }
   },
   autoprefixer: {
    options: {
      browsers: ['last 30 versions', 'ie 8', 'ie 9'] 
    },
    dist:{
      src:['css/style.css'],
      dest: 'css/style.css'
    }
   },
   cssmin:{
    dist:{
      src:['css/style.css'],
      dest: 'css/style.css'
    }
   },
   imagemin: {                          // Task
    
    dynamic: {                     // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/img/',                   // Src matches are relative to this path
        src: ['*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'img/'                  // Destination path prefix
      }]
    }
   },
   babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: {
                'js/script.js': 'src/js/script.js'
            }
        }
   },
   watch:{
    sass: {
      files: ['src/scss/*.scss'],
      tasks: ['sass']
    },
    concat: {
      files: ['src/js/*.js'],
      tasks: ['concat']
    },
    uglify: {
      files: ['src/js/concat/script.main.js'],
      tasks: ['uglify']
    }
   }


  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
  grunt.registerTask('cssopt', ['autoprefixer', 'cssmin']);

};