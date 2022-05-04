import { defineConfig } from 'vitepress'

export default defineConfig({
	lang: 'en-US',
	title: 'LipSurf User Manual',
	description: 'LipSurf operation and troubleshooting manual',
	base: '/',
	themeConfig: {
		logo: '/icon-128.png',
		repo: 'lipsurf/help',
		footer: '© 2019-Present LipSurf, Inc.',
		contributors: false,
		editLinks: true,
		editLinkText: 'Improve this page',
		sidebarDepth: 1,
		sidebar: [
			{
				text: 'Configuration',
				children: [
					{link: '/configuration/new-tab-page', text: 'Use a New Tab Other than the LipSurf New Tab Page'},
					{link: '/configuration/hide-debugging-msg', text: 'Hiding the "LipSurf started debugging this browser" Message'},
					{link: '/configuration/adding-languages', text: 'Changing or Adding Languages'},
					{link: '/configuration/custom-plugins', text: 'Custom Plugins'},
				],
			},
			{
				text: 'Troubleshooting',
				children: [
					{link: '/troubleshooting/not-working', text: 'Not Working'},
					{link: '/troubleshooting/no-icon', text: 'No Icon'},
					{link: '/troubleshooting/update-lipsurf', text: 'Checking Version & Updating'},
					{link: '/troubleshooting/pdfs', text: 'Not Working on Local Files (e.g. locally saved PDFs)'},
					{link: '/troubleshooting/dictation-additional-steps', text: 'Additional Steps for Dictation in Google Apps (Gmail, Sheets, Slides, etc.)'},
				],
			},
			{link: '/FAQs', text: ''},
		],
		lastUpdated: 'Last updated',
	}
})