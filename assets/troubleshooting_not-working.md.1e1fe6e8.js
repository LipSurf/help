import{_ as e,c as t,o,a as i}from"./app.fb94890c.js";var r="/assets/icon-en-on.4b7a63a5.png",n="/assets/icon-off.c158f2de.png";const w=`{"title":"Not Working","description":"","frontmatter":{},"headers":[{"level":3,"title":"No live transcript when I speak","slug":"no-live-transcript-when-i-speak"},{"level":3,"title":"Live transcript shows what I speak, but commands don't work","slug":"live-transcript-shows-what-i-speak-but-commands-don-t-work"}],"relativePath":"troubleshooting/not-working.md"}`,s={},a=i('<h1 id="not-working" tabindex="-1">Not Working <a class="header-anchor" href="#not-working" aria-hidden="true">#</a></h1><p>Here are steps you can take if LipSurf is not responding:</p><h3 id="no-live-transcript-when-i-speak" tabindex="-1">No live transcript when I speak <a class="header-anchor" href="#no-live-transcript-when-i-speak" aria-hidden="true">#</a></h3><ol><li><p>Make sure your internet is working.</p></li><li><p>Paste this into your address bar: <code>chrome://settings/content/microphone?search=microphone</code> and make sure the correct microphone is selected at the top.</p></li><li><p>Make sure your microphone is working, not muted, and has sufficient volume in Google Chrome. Use <a href="https://www.onlinemictest.com/" target="_blank" rel="noopener noreferrer">online mic test</a> to test (the line there should move when you speak).</p></li><li><p>Make sure LipSurf is activated. <div style="display:flex;justify-content:center;"><figure class="icon"><img src="'+r+'" alt="LipSurf activated icon"><figcaption>Activated</figcaption></figure><figure class="icon"><img src="'+n+'" alt="LipSurf deactivated icon"><figcaption>Deactivated</figcaption></figure></div> The extension icon should be colored turquoise and have a red dot. If you don&#39;t see the icon, click the three dots on the right side of the Google Chrome toolbar\u2060\u2014there you should see the LipSurf icon. Right click it and click &quot;show in toolbar&quot;.</p></li><li><p>Make sure the live transcript option is on in the LipSurf options.</p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use <a href="https://www.google.com/intl/en/chrome/demos/speech.html" target="_blank" rel="noopener noreferrer">this page</a> to troubleshoot. If the speech recognition doesn&#39;t work here, the issue is with either your microphone, browser, or internet. If that page works but LipSurf doesn&#39;t, please <a href="https://www.lipsurf.com/contact" target="_blank" rel="noopener noreferrer">contact us</a>.</p></div><h3 id="live-transcript-shows-what-i-speak-but-commands-don-t-work" tabindex="-1">Live transcript shows what I speak, but commands don&#39;t work <a class="header-anchor" href="#live-transcript-shows-what-i-speak-but-commands-don-t-work" aria-hidden="true">#</a></h3><p>The live transcript starts with a grey color when you&#39;re speaking, turns white when it is more confident with what you said, and finally turns green if it recognizes a valid command.</p><ol><li><p>If the live transcript is not turning green, then you might not be saying a valid command. Say &quot;help&quot; to bring up a list of valid commands for the page/mode you&#39;re in or &quot;options&quot; to see all the valid commands.</p></li><li><p>If the live transcript is turning green after everything you say, then you&#39;re likely in dictation mode. You can exit dictation mode by saying &quot;normal mode&quot; or by turning LipSurf off then on again.</p></li></ol><hr><h1 id="last-case-scenario-hard-reset" tabindex="-1">Last case scenario - hard reset <a class="header-anchor" href="#last-case-scenario-hard-reset" aria-hidden="true">#</a></h1><p>Sometimes you want to start from scratch. Here&#39;s a few things to try in order of increasing destructiveness. If you have no problem losing all your settings, custom plugins, and being logged out you can skip right ahead to &quot;C&quot;.</p><p>A. Restart Google Chrome. There is usually no need to reboot your computer unless you have a microphone driver issue.</p><p>B. &quot;Reset to Factory Defaults&quot; in the options. This will nuke your settings\u2060\u2014erasing custom plugins, custom shortcuts and any configuration. If you want to keep your custom shortcuts, you should back them up using &quot;Export Custom Shortcuts&quot; in the options.</p><p>C. Uninstall and reinstall LipSurf. Of course, this will erase all of your configuration and settings. Consider this a last resort.</p>',14),c=[a];function h(l,u,p,d,g,m){return o(),t("div",null,c)}var k=e(s,[["render",h]]);export{w as __pageData,k as default};
