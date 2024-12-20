import path from 'path'
import webpack from 'webpack'

const config = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/, 
				loader: 'ts-loader',
				exclude: /node_modules/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true, // Это позволяет обрабатывать SVG как иконки (по желанию)
						},
					},
					'url-loader',
				],
			},
		],
	},
	resolve: {
		alias: { '@': path.resolve(__dirname, 'src') },
		extensions: ['.tsx', '.ts', '.js', 'jsx', 'scss'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
}

export default config
