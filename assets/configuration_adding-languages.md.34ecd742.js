import{_ as e,c as n,o as a,a as t}from"./app.fb94890c.js";const g='{"title":"Changing or Adding Languages","description":"","frontmatter":{},"headers":[{"level":2,"title":"Steps","slug":"steps"}],"relativePath":"configuration/adding-languages.md"}',o={},s=t(`<h1 id="changing-or-adding-languages" tabindex="-1">Changing or Adding Languages <a class="header-anchor" href="#changing-or-adding-languages" aria-hidden="true">#</a></h1><p>\u{1F1EF}\u{1F1F5} \u{1F1FA}\u{1F1F8} \u{1F1EB}\u{1F1F7} \u{1F1EA}\u{1F1F8} \u{1F1F7}\u{1F1FA} \u{1F1EC}\u{1F1E7} \u{1F1E7}\u{1F1FE} \u{1F1E8}\u{1F1E6}</p><h1 id="changing-language" tabindex="-1">Changing Language <a class="header-anchor" href="#changing-language" aria-hidden="true">#</a></h1><p>Say the language name with LipSurf on (eg. <span class="voice-cmd">Japanese</span> or <span class="voice-cmd">Russian</span>) or change the language in the settings (open settings by saying <span class="voice-cmd">options</span> or right clicking the extension icon and clicking &quot;options&quot;).</p><h1 id="adding-languages" tabindex="-1">Adding Languages <a class="header-anchor" href="#adding-languages" aria-hidden="true">#</a></h1><p>Languages can be added and improved by anyone.</p><h2 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-hidden="true">#</a></h2><h4 id="_1-install-the-chrome-extension-and-get-a-feeling-for-how-it-works" tabindex="-1">1) Install the <a href="https://chrome.google.com/webstore/detail/lipsurf-voice-control-for/lnnmjmalakahagblkkcnjkoaihlfglon" target="_blank" rel="noopener noreferrer">Chrome Extension</a> and get a feeling for how it works. <a class="header-anchor" href="#_1-install-the-chrome-extension-and-get-a-feeling-for-how-it-works" aria-hidden="true">#</a></h4><h4 id="_2-translate-the-name-lipsurf-voice-control-for-the-web-and-description" tabindex="-1">2) Translate the name: <code>LipSurf - Voice Control for the Web</code> and description: <a class="header-anchor" href="#_2-translate-the-name-lipsurf-voice-control-for-the-web-and-description" aria-hidden="true">#</a></h4><div class="language-txt"><pre><code>Browse the web with your voice -- eating, multitasking or just to give your hands a break. Speech recognition for executing voice commands in the browser that would normally require a mouse and keyboard.
Excellent as an assistive technology.

Voice control integrations:
* Gmail - select &amp; mark messages, compose emails, dictate emails, etc.
  https://youtu.be/o1zIHxkg2KU?t=37
* Youtube &amp; other video sites - play, pause, fast-forward etc.
* Duolingo &amp; WaniKani - answer questions completely based on voice control (handsfree)
  https://www.youtube.com/watch?v=pBtFl8qHgpE
* Reddit - speech recognition for upvote, visit posts, comment etc.

Features:
* High performance speech recognition
* Speech to text (STT)
* Shows live transcript as you speak
* Wake-word (say &quot;hey LipSurf&quot; to activate hands-free) (Premium)
* Custom shortcuts - map any phrase to a command
* Text to speech (TTS)
* Works in Google Sheets (Premium)
* Limited commands on PDFs

General voice commands:
* Write and edit text (Premium)
* Scroll up, down, little down, little up, autoscroll, bottom, top, left, right...
* Annotate links to click them with voice
* Open multiple links
* Spell mode (Premium)
* Write emails and dictate forms (Premium)
* Open websites/URLs (Premium)
* Weather lookup
* Dictionary
* Control videos: play, pause, mute etc.
* Add custom corrections, shortcuts, homophones or synonyms by clicking the transcript!
* Voice activation via push-to-talk key
* Click things by saying &quot;click [thing text]&quot; or &quot;tag&quot; then saying the annotation in the yellow box next to it.
* Navigate tabs: next tab, previous tab, select tab 3, new tab, etc.
* Zoom in, zoom out
* Multi-language support (Spanish, French, Russian and Japanese - more languages may be added by anyone via our forum)
* 100+ built-in commands that can be expanded to infinity with additional plugins and tons of options.

Languages:
* \u{1F1EC}\u{1F1E7} English
* \u{1F1EA}\u{1F1F8} Spanish
* \u{1F1EB}\u{1F1F7} French 
* \u{1F1FA}\u{1F1E6} Ukrainian
* \u{1F1F7}\u{1F1FA} Russian
* \u{1F1EF}\u{1F1F5} Japanese
* \u{1F1E7}\u{1F1F7} Portuguese (Duolingo only)
* \u{1F1E9}\u{1F1EA} German (Duolingo only)
* \u{1F1EB}\u{1F1EE} Finnish (Duolingo only)
* \u{1F1F3}\u{1F1F1} Dutch (Duolingo only)

Please go through the tutorial to make sure you configure everything properly, and just say &quot;help&quot; to see the commands that are possible for the current page you&#39;re on! Enjoy!

See information about updates along with video demos here: https://www.lipsurf.com/updates
Forum where you can make feature requests and ask questions: https://discuss.lipsurf.com</code></pre></div><h4 id="_3-translate-the-commands" tabindex="-1">3) Translate the commands. <a class="header-anchor" href="#_3-translate-the-commands" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>Languages can be added incrementally. Since there are many commands, you can start with the most essential commands, and add the rest as time permits.</li><li>It&#39;s better to start by translating one plugin, then testing (step 4). You will get a feel for how command words work that way and it will save you from needing to do more readjusting later.</li></ul></div><p>If you&#39;re comfortable editing JavaScript files, you can edit the translation files directly and submit a pull-request on <a href="https://github.com/lipsurf/plugins" target="_blank" rel="noopener noreferrer">Github</a>. You don&#39;t need to understand programming, you just need to keep the structure of the file in-tact when you edit it.</p><p>Otherwise, you can just write your translations out in a document and <strong>we&#39;ll take care of programming it in for you</strong>.</p><p>Each plugin optionally has translation files (eg. for the Scroll.ts plugin there is Scroll.ja.ts, Scroll.ru.ts, Scroll.fr.ts etc.) Here is a fragment of a translation file:</p><div class="language-ts Scroll.ru.ts"><pre><code><span class="token operator">...</span>
Scroll<span class="token punctuation">.</span>languages<span class="token operator">!</span><span class="token punctuation">.</span>ru <span class="token operator">=</span> <span class="token punctuation">{</span>        <span class="token comment">// notice the same 2 character language code as in the filename</span>
    niceName<span class="token operator">:</span> <span class="token string">&quot;\u0411\u0440\u0430\u0443\u0437\u0435\u0440&quot;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&quot;\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u043A\u0430\u043A-\u0442\u043E: \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0438, \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 (\u043D\u0430\u0437\u0430\u0434, \u0432\u043F\u0435\u0440\u0435\u0434, \u0432\u043D\u0438\u0437), \u0432\u044B\u0437\u043E\u0432 \u0441\u043F\u0440\u0430\u0432\u043A\u0438 \u0438 \u0442.\u0434.&quot;</span><span class="token punctuation">,</span>
    authors<span class="token operator">:</span> <span class="token string">&quot;Hanna, Miko&quot;</span><span class="token punctuation">,</span>     <span class="token comment">// add your name here</span>
    homophones<span class="token operator">:</span> <span class="token punctuation">{</span>               <span class="token comment">// format: &quot;[misheard homophone]&quot;: &quot;[correct command word/phrase]&quot;, see step 4 </span>
        <span class="token string-property property">&quot;\u0432\u043D\u0438\u0438\u0441&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u0432\u043D\u0438\u0437&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    commands<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Scroll Down&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>        <span class="token comment">// the original English name of the command we&#39;re translating</span>
            name<span class="token operator">:</span> <span class="token string">&quot;\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u0437&quot;</span><span class="token punctuation">,</span>
            match<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u0432\u043D\u0438\u0437&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
</code></pre></div><h5 id="for-each-plugin-the-following-need-to-be-translated" tabindex="-1">For each plugin the following need to be translated: <a class="header-anchor" href="#for-each-plugin-the-following-need-to-be-translated" aria-hidden="true">#</a></h5><ul><li><p>niceName</p></li><li><p>description (if it&#39;s not obvious)</p></li></ul><h5 id="for-each-command-the-following-need-to-be-translated" tabindex="-1">For each command the following need to be translated: <a class="header-anchor" href="#for-each-command-the-following-need-to-be-translated" aria-hidden="true">#</a></h5><ul><li><p>name</p></li><li><p>description (if it&#39;s not obvious)</p></li><li><p>match (command words)</p><ul><li><p>This is what the user says to execute the command <strong>(they are the most important thing!)</strong></p></li><li><p>Case and hyphen insensitive</p></li><li><p>an <code>*</code> represents wildcard (anything can be said in it&#39;s position. Eg. <code>google *</code> will match <span class="voice-cmd">google no bake cheesecake</span>)</p><ul><li>Command words cannot start with an <code>*</code>, but they may have an <code>*</code> in the middle.</li></ul></li><li><p>a <code>#</code> represents any numeral or ordinal number (eg. the command word for changing tabs is <code>tab #</code> and <code># tab</code> so you can say things like <span class="voice-cmd">tab 1</span> or <span class="voice-cmd">first tab</span>).</p></li><li><p>Aim for short - especially for the most used commands (eg. <code>top</code> instead of <code>scroll to top of the page</code>, <code>auto scroll</code> instead of <code>automatically scroll down</code>).</p></li><li><p>There may be more than one match phrase. It&#39;s good to have at least all the intuitive variations.</p></li><li><p>Try to avoid using command words that match the beginnings of command words for different commands.</p></li></ul></li></ul><h4 id="_4-test-the-commands" tabindex="-1">4) Test the commands. <a class="header-anchor" href="#_4-test-the-commands" aria-hidden="true">#</a></h4><p>Sometimes the speech recognizer will pick up different homophones for certain words. Take note of these homophones and add them to the translation file so they can be automatically corrected.</p><p>Sometimes certain commands will be very hard for the speech recognizer - you might need to change them to work around this.</p><p>Command words should be adjusted based on these real-world tests (back to step 3).</p><h4 id="_5-submit-the-translations-you-may-either-make-a-pr-on-github-email-us-directly-or-post-on-the-forum" tabindex="-1">5) Submit the translations. You may either make a PR on <a href="https://github.com/lipsurf/plugins" target="_blank" rel="noopener noreferrer">Github</a>, <a href="https://www.lipsurf.com/contact" target="_blank" rel="noopener noreferrer">email us</a> directly, or post on <a href="https://discuss.lipsurf.com" target="_blank" rel="noopener noreferrer">the forum</a>. <a class="header-anchor" href="#_5-submit-the-translations-you-may-either-make-a-pr-on-github-email-us-directly-or-post-on-the-forum" aria-hidden="true">#</a></h4><br><br>`,27),i=[s];function r(l,c,p,d,h,u){return a(),n("div",null,i)}var f=e(o,[["render",r]]);export{g as __pageData,f as default};
