import preset_env from 'postcss-preset-env'

export default {
	plugins: [
		preset_env({
			autoprefixer: {
				add: true,
			},
			features: {
				'logical-properties-and-values': false,
			},
			stage: 1,
		}),
	],
}
