const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const config = {
  "src_folders": [
    "./e2e"
  ],
  "output_folder": "./e2e/reports",
  "page_objects_path": '',
  "custom_commands_path": '',
  "custom_assertions_path": '',
  "globals_path": '',
  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "log_path": "./e2e",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": chromedriver.path
    }
  },
  "test_workers" : {
    "enabled": true,
    "workers": "auto"
  },
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "globals": {
        "waitForConditionTimeout": 10000,
        "rtContext": {}
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "local": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "globals": {
        "waitForConditionTimeout": 15000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}

module.exports = config;
