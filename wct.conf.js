module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        sauce: {
          disabled: false,
          "browsers": [
             
         {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad Retina",
          "deviceOrientation": "portrait"
          
        },
        
        {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad 2",
          "deviceOrientation": "portrait"
          
        }
        
      ]
        }
    },
    suites: [
      'test/fixture.html'
    ]
};
