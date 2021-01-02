module.exports = {
	title: 'LipSurf User Manual',
	description: 'LipSurf operation and troubleshooting manual',
	base: '/',
	themeConfig: {
		logo: '/icon-128.png',
		repo: 'lipsurf/help',
		footer: '© 2021 LipSurf',
		editLinks: true,
		editLinkText: 'Improve this page',
		docsDir: '',
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
					'configuration/hide-debugging-msg.md',
					'configuration/adding-languages.md',
					'configuration/custom-plugins.md',
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
