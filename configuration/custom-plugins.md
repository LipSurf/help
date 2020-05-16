# Custom Plugins

LipSurf's commands are provided via plugins that house code for a subset of functionality (eg. the Tabs and Windows plugin houses the commands: <span class="voice-cmd">new tab</span>, <span class="voice-cmd">close tab</span>, etc.), override existing plugin functionality for certain sites (eg. a site that has peculiar controls that need special handling for something like dictation to work), or house commands that are specific to a site (eg. the Duolingo plugin).

Anyone with some programming know-how can develop their own plugin and add it to LipSurf instantly. See our <a href="https://docs.lipsurf.com">developer documentation</a> for details on plugin creation.

## Installing a Custom Plugin

::: warning NOTE
LipSurf plugins have a `.ls` extension.
:::

1. Go to the LipSurf options.
2. Enable "developer mode".
3. Click "load a local plugin".
4. Select the plugin file.

The custom plugin is now installed. You can verify the plugin's new version number in the options if you were simply installing a new version.