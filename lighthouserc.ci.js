module.exports = {
  ci: {
    collect: {
      url: ['https://www.applydigital.com/'],
      settings: {
        onlyCategories: ['performance'],
        emulatedFormFactor: process.env.FORM_FACTOR === 'mobile' ? 'mobile' : 'desktop',
        screenEmulation: process.env.FORM_FACTOR === 'mobile' ? {
          mobile: true,
          width: 375,
          height: 667,
          deviceScaleFactor: 2,
          disabled: false
        } : {
          mobile: false,
          width: 1920,
          height: 1080,
          deviceScaleFactor: 1,
          disabled: false
        },
      },
    },
    assert: {
      // Define any performance assertions here, if needed
      // Example:
      // assertions: {
      //   'performance': ['error', { minScore: 0.9 }],
      // },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouseci',
    },
  },
};
