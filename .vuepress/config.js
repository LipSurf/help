module.exports = {
	lang: 'en-US',
	title: 'LipSurf User Manual',
	description: 'LipSurf operation and troubleshooting manual',
	base: '/',
	themeConfig: {
		logo: '/icon-128.png',
		repo: 'lipsurf/help',
		footer: '© 2021 LipSurf',
		contributors: false,
		editLinks: true,
		editLinkText: 'Improve this page',
		sidebarDepth: 0,
		sidebar: [
			{
				text: 'Configuration',
				children: [
					'/configuration/new-tab-page.md',
					'/configuration/hide-debugging-msg.md',
					'/configuration/adding-languages.md',
					'/configuration/custom-plugins.md',
				],
			},
			{
				text: 'Troubleshooting',
				children: [
					'/troubleshooting/not-working.md',
					'/troubleshooting/no-icon.md',
					'/troubleshooting/update-lipsurf.md',
					'/troubleshooting/pdfs.md',
					'/troubleshooting/dictation-additional-steps.md'
				],
		}],
		lastUpdated: 'Last updated',
	}
}