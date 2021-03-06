module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ''
            },
            polyfillJs: {
                src: ['src/polyfill/**/*.js'],
                dest: 'docs/polyfill.js'
            },
            coreJs: {
                src: [
                    'src/core/jquery.js',
                    'src/core/underscore.js',
                    'src/core/foundation.js',
                    'src/core/mvc/**/*.js',
                    'src/core/base.js',
                    'src/core/ob.js',
                    'src/core/widget.js',
                    'src/core/model.js',
                    'src/core/view.js',
                    'src/core/shortcut.js',
                    'src/core/utils/*.js',
                    'src/core/behavior/behavior.js',
                    'src/core/wrapper/layout.js',
                    'src/core/**/*.js',

                    'src/data/data.js',
                    'src/data/**/*.js',
                    'src/config.js'
                ],
                dest: 'docs/core.js'
            },

            //最基础的控件
            baseJs: {
                src: [
                    'src/third/**/*.js',
                    'src/base/pane.js',
                    'src/base/single/single.js',
                    'src/base/single/text.js',
                    'src/base/single/button/button.basic.js',
                    'src/base/single/button/button.node.js',
                    'src/base/single/tip/tip.js',
                    'src/base/combination/group.button.js',
                    'src/base/combination/tree.button.js',
                    'src/base/combination/map.button.js',
                    'src/base/tree/treeview.js',
                    'src/base/tree/asynctree.js',
                    'src/base/tree/parttree.js',
                    'src/base/**/*.js'
                ],
                dest: 'docs/base.js'
            },
            //实现好的一些基础实例
            caseJs: {
                src: [
                    'src/case/combo/popup.bubble.js',
                    'src/case/**/*.js'
                ],
                dest: 'docs/case.js'
            },
            widgetJs: {
                src: [
                    'src/widget/paramsettingcombo/popup.param.js',
                    'src/widget/sequencetable/treenumber.sequencetable.js',
                    'src/widget/**/*.js',
                    'src/component/**/*.js'
                ],
                dest: "docs/widget.js"
            },
            chartJs: {
                src: [
                    'src/addons/chart/chart.js',
                    'src/addons/chart/chart.combine.js',
                    'src/addons/chart/factory.charts.js',
                    'src/addons/chart/**/*.js'
                ],
                dest: "docs/chart.js"
            },
            coreCss: {
                src: ['src/css/core/**/*.css', 'src/css/theme/**/*.css'],
                dest: 'docs/core.css'
            },
            baseCss: {
                src: ['src/css/base/**/*.css'],
                dest: 'docs/base.css'
            },
            widgetCss: {
                src: ['src/css/widget/**/*.css'],
                dest: 'docs/widget.css'
            },
            resourceCss: {
                src: ['src/css/resource/**/*.css'],
                dest: 'docs/resource.css'
            },

            demoJs: {
                src: ['demo/version.js', 'demo/app.js', 'demo/js/**/*.js', 'demo/config.js'],
                dest: 'docs/demo.js'
            },
            demoCss: {
                src: ['demo/css/**/*.css'],
                dest: 'docs/demo.css'
            },

            bi_polyfillJs: {
                src: ['src/polyfill/**/*.js'],
                dest: 'bi/polyfill.js'
            },

            bi_coreJs: {
                src: [
                    'src/core/foundation.js',
                    'src/core/mvc/**/*.js',
                    'src/core/base.js',
                    'src/core/alias.js',
                    'src/core/events.js',
                    'src/core/var.js',
                    'src/core/ob.js',
                    'src/core/widget.js',
                    'src/core/model.js',
                    'src/core/view.js',
                    'src/core/shortcut.js',
                    'src/core/plugin.js',
                    'src/core/controller.js',
                    'src/core/proto/**/*.js',
                    'src/core/utils/**/*.js',
                    'src/core/behavior/behavior.js',
                    'src/core/behavior/**/*.js',
                    'src/core/wrapper/layout.js',
                    'src/core/wrapper/**/*.js',
                    'src/core/action/**/*.js',
                    'src/core/adapter/**/*.js',
                    'src/core/controller/**/*.js',
                    'src/core/event/**/*.js',
                    'src/core/func/**/*.js',
                    'src/core/listener/**/*.js',
                    'src/core/loader/**/*.js',
                    'src/core/logic/**/*.js',

                    'src/data/data.js',
                    'src/data/**/*.js',
                    'src/config.js'
                ],
                dest: 'bi/core.js'
            },
            //最基础的控件
            bi_baseJs: {
                src: [
                    'src/third/**/*.js',
                    'src/base/pane.js',
                    'src/base/single/single.js',
                    'src/base/single/text.js',
                    'src/base/single/button/button.basic.js',
                    'src/base/single/button/button.node.js',
                    'src/base/single/tip/tip.js',
                    'src/base/combination/group.button.js',
                    'src/base/combination/tree.button.js',
                    'src/base/combination/map.button.js',
                    'src/base/tree/treeview.js',
                    'src/base/tree/asynctree.js',
                    'src/base/tree/parttree.js',
                    'src/base/**/*.js'
                ],
                dest: 'bi/base.js'
            },
            //实现好的一些基础实例
            bi_caseJs: {
                src: [
                    'src/case/combo/popup.bubble.js',
                    'src/case/**/*.js'
                ],
                dest: 'bi/case.js'
            },
            bi_widgetJs: {
                src: [
                    'src/widget/paramsettingcombo/popup.param.js',
                    'src/widget/sequencetable/treenumber.sequencetable.js',
                    'src/widget/**/*.js',
                    'src/component/**/*.js'
                ],
                dest: "bi/widget.js"
            },
            bi_chartJs: {
                src: [
                    'src/addons/chart/chart.js',
                    'src/addons/chart/chart.combine.js',
                    'src/addons/chart/factory.charts.js',
                    'src/addons/chart/**/*.js'
                ],
                dest: "bi/chart.js"
            },
            bi_coreCss: {
                src: ['src/css/core/**/*.css', 'src/css/theme/**/*.css'],
                dest: 'bi/core.css'
            },
            bi_baseCss: {
                src: ['src/css/base/**/*.css'],
                dest: 'bi/base.css'
            },
            bi_widgetCss: {
                src: ['src/css/widget/**/*.css'],
                dest: 'bi/widget.css'
            }
        },

        less: {
            main: {
                expand: true,
                cwd: 'demo/less',
                src: ['**/*.less'],
                dest: 'demo/css/',
                ext: '.css'
            },
            dev: {
                options: {
                    compress: true,
                    yuicompress: false
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'docs/core.min.js': ['<%= concat.coreJs.dest %>'],
                    'docs/base.min.js': ['<%= concat.baseJs.dest %>'],
                    'docs/case.min.js': ['<%= concat.caseJs.dest %>']
                }
            }
        },

        cssmin: {

            coreCss: {

                src: '<%= concat.coreCss.dest %>',

                dest: 'docs/core.min.css'

            },
            baseCss: {

                src: '<%= concat.baseCss.dest %>',

                dest: 'docs/base.min.css'

            }

        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'demo/js/**/*.js', 'demo/config.js', 'demo/less/**/*.less'],
                tasks: ['less', 'concat'],
                options: {
                    spanw: true,
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['less', 'concat', 'watch']);
};