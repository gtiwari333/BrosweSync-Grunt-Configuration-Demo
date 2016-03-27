module.exports = function(grunt) {
    // Task configuration will go here
	grunt.initConfig({
		watch: {

	    },
		browserSync: {
		    bsFiles: {
		      src: [
		        "css/*.css", "js/.js", "./*.html" //search file/folders
		      ]
		    },
		    options: {
		      watchTask: true,
		      server: {
		        baseDir: "./"  //server base directory, a index.html on this directory will be loaded into browser
		      }
		    }
		}
	});


	// Load tasks dependencies
	grunt.loadNpmTasks('grunt-contrib-watch');
 	grunt.loadNpmTasks('grunt-browser-sync');

 	// Setup default task
 	// both browserSync and watch will run when running >grunt command
	grunt.registerTask('default', ['browserSync', 'watch']);

};