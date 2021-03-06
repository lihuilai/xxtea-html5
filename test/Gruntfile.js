module.exports = function (grunt) {
  var browsers = [{
    browserName: 'android',
    version: '4.0'
  }, {
    browserName: 'android',
    version: '4.1'
  }, {
    browserName: 'android',
    version: '4.2'
  }, {
    browserName: 'android',
    version: '4.3'
  }, {
    browserName: 'android',
    version: '4.4'
  }, {
    browserName: 'android',
    version: '5.1'
  }, {
    browserName: 'iphone',
    version: '9.3'
  }, {
    browserName: 'iphone',
    version: '9.2'
  }, {
    browserName: 'iphone',
    version: '9.1'
  }, {
    browserName: 'iphone',
    version: '9.0'
  }, {
    browserName: 'iphone',
    version: '8.4'
  }, {
    browserName: 'iphone',
    version: '8.3'
  }, {
    browserName: 'iphone',
    version: '8.2'
  }, {
    browserName: 'iphone',
    version: '8.1'
  }, {
    browserName: 'iphone',
    version: '7.0'
  }, {
    browserName: 'ipad',
    version: '9.3'
  }, {
    browserName: 'ipad',
    version: '9.2'
  }, {
    browserName: 'ipad',
    version: '9.1'
  }, {
    browserName: 'ipad',
    version: '9.0'
  }, {
    browserName: 'ipad',
    version: '8.4'
  }, {
    browserName: 'ipad',
    version: '8.3'
  }, {
    browserName: 'ipad',
    version: '8.2'
  }, {
    browserName: 'ipad',
    version: '8.1'
  }, {
    browserName: 'ipad',
    version: '7.0'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-1'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-2'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-3'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-4'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-5'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-6'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-7'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-8'
  }, {
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-9'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-1'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-2'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-3'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-4'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-5'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-6'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-7'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-8'
  }, {
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-9'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.11'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.10'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.9'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.8'
  }, {
    browserName: 'safari',
    platform: 'Windows 7',
    version: '5.1'
  }, {
    browserName: 'MicrosoftEdge',
    platform: 'Windows 10',
    version: 'latest'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 10',
    version: '11.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 8',
    version: '10.0'
  }, {
    browserName: 'opera',
    platform: 'Windows 7',
    version: '11.64'
  }];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },

    'saucelabs-mocha': {
      all: {
        options: {
          username: 'xxtea-html5',
          key: function() { return 'e6a46f2c-33b9-473a-8c81-ec0228d7d9f5'; },
          urls: [
            'http://127.0.0.1:9999/index.html'
          ],
          browsers: browsers,
          build: process.env.TRAVIS_JOB_ID,
          testname: 'xxtea-html5 tests',
          throttled: 3,
          statusCheckAttempts: -1,
          pollInterval: 5000,
          maxRetries: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('default', ['connect', 'saucelabs-mocha']);
};
