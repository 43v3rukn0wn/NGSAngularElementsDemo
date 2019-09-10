
const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/runtime.js',
        './dist/polyfills.js',
        './dist/scripts.js',
        './dist/vendor.js',
        './dist/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/ng-greet-element.js')
    console.info('Angular Elements created successfully!')

})()