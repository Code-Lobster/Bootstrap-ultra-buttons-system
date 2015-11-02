module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
                options: {
                    style: 'compressed ',
                },
				files: {
					'css/bootstrap-buttons.min.scss' : 'scss/bootstrap-buttons.scss'
				}
			},
            dev: {
                options: {
                    style: 'expanded',
                },
				files: {
					'css/bootstrap-buttons.scss' : 'scss/bootstrap-buttons.scss'
				}
			}
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.registerTask('default',['sass','watch']);
    grunt.registerTask('default',['sass']);
}   