# Changing or Adding Languages

🇯🇵 🇺🇸 🇫🇷 🇪🇸 🇷🇺 🇬🇧 🇧🇾 🇨🇦 

# Changing Language

Say the language name with LipSurf on (eg. <span class="voice-cmd">Japanese</span> or <span class="voice-cmd">Russian</span>) or change the language in the settings
(open settings by saying <span class="voice-cmd">options</span> or right clicking the extension icon and clicking "options").

# Adding Languages

Languages can be added and improved by anyone. 

## Steps

#### 1) Install the [Chrome Extension](https://chrome.google.com/webstore/detail/lipsurf-voice-control-for/lnnmjmalakahagblkkcnjkoaihlfglon) and get a feeling for how it works.


#### 2) Translate the name: `LipSurf - Voice Control for the Web` and description:

<<< listing/description.txt


#### 3) Translate the commands. 

::: tip

* Languages can be added incrementally. Since there are many commands, you can start with the most essential commands, and add the rest as time permits.
* It's better to start by translating one plugin, then testing (step 4). You will get a feel for how command words work that way and it will 
save you from needing to do more readjusting later.

:::

If you're comfortable editing JavaScript files, you can edit the translation files directly and submit a pull-request on [Github](https://github.com/lipsurf/plugins).
You don't need to understand programming, you just need to keep the structure of the file in-tact when you edit it. 

Otherwise, you can just write your translations out in a document and **we'll take care of programming it in for you**.

Each plugin optionally has translation files (eg. for the Scroll.ts plugin there is Scroll.ja.ts, Scroll.ru.ts, Scroll.fr.ts etc.)
Here is a fragment of a translation file:

```ts Scroll.ru.ts
...
Scroll.languages!.ru = {        // notice the same 2 character language code as in the filename
    niceName: "Браузер",
    description: "Контроль действий в браузере, как-то: создание новой вкладки, навигация по странице (назад, вперед, вниз), вызов справки и т.д.",
    authors: "Hanna, Miko",     // add your name here
    homophones: {               // format: "[misheard homophone]": "[correct command word/phrase]", see step 4 
        "вниис": "вниз",
    },
    commands: {
        "Scroll Down": {        // the original English name of the command we're translating
            name: "Прокрутить вниз",
            match: ["вниз"],
        },
    ...
```

##### For each plugin the following need to be translated:

* niceName

* description (if it's not obvious)


##### For each command the following need to be translated:

* name

* description (if it's not obvious)

* match (command words) 

    * This is what the user says to execute the command **(they are the most important thing!)** 
    
    * Case and hyphen insensitive

    * an `*` represents wildcard (anything can be said in it's position. Eg. `google *` will match <span class="voice-cmd">google no bake cheesecake</span>)

        * Command words cannot start with an `*`, but they may have an `*` in the middle.

    * a `#` represents any numeral or ordinal number (eg. the command word for changing tabs is `tab #` and `# tab` so you can say things like <span class="voice-cmd">tab 1</span>
   or <span class="voice-cmd">first tab</span>).

    * Aim for short - especially for the most used commands (eg. `top` instead of `scroll to top of the page`, `auto scroll` instead of  `automatically scroll down`). 

    * There may be more than one match phrase. It's good to have at least all the intuitive variations.

    * Try to avoid using command words that match the beginnings of command words for different commands. 


#### 4) Test the commands. 
Sometimes the speech recognizer will pick up different homophones for certain words. Take note of these homophones and add them to the translation file so they can be automatically corrected. 

Sometimes certain commands will be very hard for the speech recognizer - you might need to change them to work around this. 

Command words should be adjusted based on these real-world tests (back to step 3).

#### 5) Submit the translations. You may either make a PR on [Github](https://github.com/lipsurf/plugins), [email us](https://www.lipsurf.com/contact) directly, or post on [the forum](https://discuss.lipsurf.com).

<br>
<br>
