let path = require('path');
module.exports = {
    entry: {
     	vendors: ['react', 'react-dom'],

		index: path.resolve(__dirname, './src/index.tsx'),
		 
		adaptation: path.resolve(__dirname, './src/adaptation/adaptation.ts')
    },

    output: {
    	path: path.resolve(__dirname, './dist/'),

		filename: '[name].[hash:8].js',

		publicPath: '/'
    },

    resolve: {
    	extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
					name: "vendors",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },

    module: {
    	rules: [
		    {
		        test: /\.css$/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						modules: true,
						minimize: true,
						localIdentName: '[path][name]__[local]--[hash:base64:5]'//,
						// getLocalIdent: (context, localIdentName, localName, options) => {
						// 	return 'whatever_random_class_name'
						// }
					}
				}]
		    },

    		{
		      	test: /\.scss$/,
		      	use: [
		      		{
						loader: "style-loader"
		      		},	
		      		{
						loader: "css-loader",
						options: {
							modules: true,
							minimize: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'//,
							// getLocalIdent: (context, localIdentName, localName, options) => {
							// 	return 'whatever_random_class_name'
							// }
						}
		      		},
		      		{
		          		loader: "sass-loader"
		      	}]
		    },

	        {
	          	test: /\.ts(x?)$/,
      			exclude: /node_modules/,
      			use: [
			        {
			          	loader: 'babel-loader',
			          	options: {
					        presets: ['env'],
					        plugins: ['transform-runtime']
					    }
			        },

			        {
			          	loader: 'ts-loader'
			        }
			    ]
	        },

	        {
	        	test: /\.(png|jpg|gif)$/,
	        	use: [{
		            loader: 'url-loader',
		            options: {
		              	limit: 8192,
                        outputPath: "dist/images/"
		            }
		        }]
	      	},

	      	{
		        test: /\.(png|jpg|gif)$/,
		        use: [{
		            loader: 'file-loader',
		            options: {
		            	outputPath: "dist/fonts/"
		            }  
		        }]
		    }
      	]
	}
}