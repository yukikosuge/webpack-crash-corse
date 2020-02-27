const path = require('path')

const outputPath = path.resolve(__dirname,'dist')


module.exports={

    entry:'./src/index.js',//バンドル対象の設定
    output:{//オブジェクトとパスを設定
    
        filename:'main.js',
        path:outputPath
    }
}