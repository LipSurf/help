module.exports = {
	title: 'LipSurf User Manual',
	description: 'LipSurf operation and troubleshooting manual',
	base: '/',
	themeConfig: {
		logo: '/icon-128.png',
		repo: 'lipsurf/plugins',
		footer: '© 2020 LipSurf',
		editLinks: true,
		editLinkText: 'Improve this page',
		docsDir: 'docs',
		sidebar: [
			// {
			// 	title: 'Basic Commands',
			// 	collapsable: false,
			// 	children: [
			// 	],
			// },
			// {
			// 	title: 'Custom Commands',
			// 	collapsable: false,
			// 	children: [
			// 	],
			// },
			{
				title: 'Configuration',
				collapsable: false,
				children: [
					'configuration/new-tab-page.md',
					'configuration/adding-languages.md',
				],
				sidebarDepth: 0,
			},
			{
				title: 'Troubleshooting',
				collapsable: false,
				children: [
					'not-working.md',
					'no-icon.md',
					'update-lipsurf.md',
				],
			}
		],
		lastUpdated: 'Last updated',
	}
}
