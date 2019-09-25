const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    directConnect: true,
    specs: ['./e2e/**/*.e2e-spec.ts'],
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    onPrepare() {
        require('ts-node').register( {
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: {displayStacktrace: true}}));
    }
};