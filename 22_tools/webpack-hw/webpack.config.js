const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
                loader: "style-loader"
              }, 
              {
                loader: "css-loader", 
                options: 
                {
                    sourceMap: true
                }
              }, 
            {
              loader: "sass-loader", 
              options: 
              {
                  sourceMap: true
              }
          }]
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
            configuration: {
                rules: {
                    quotemark: [true, 'double']
                }
            },
            // tslint errors are displayed by default as warnings 
            // set emitErrors to true to display them as errors 
            emitErrors: true,
            
            // tslint does not interrupt the compilation by default 
            // if you want any file with tslint errors to fail 
            // set failOnHint to true 
            failOnHint: true,
            
            // enables type checked rules like 'for-in-array' 
            // uses tsconfig.json from current working directory 
            typeCheck: false,
            
            // automatically fix linting errors 
            fix: false,
            
            // can specify a custom tsconfig file relative to current directory or with absolute path 
            // to be used with type checked rules 
            tsConfigFile: 'tsconfig.json'
        }
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};