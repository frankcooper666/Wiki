# Create a mod on JustEmuTarkov
## Why making my changes as a mod ?
By using a mod for your changes, it make it easier for you to manage your edits, and avoid any issue with base DB files. That's for this reason we recommend you to make it as mod, for not overwritting base files. It will avoid you to loose them when you upgrade your server too.
<br>
## How to start ?
1. You need to go to your `ServerDir/user/server.config.json` and open that file
2. Add after the last mod, this part of code :
```json
{
    "name": "NameOfTheMod",
    "author": "AuthorOfTheMod",
    "version": "1.0.0",
    "enabled": true
}
```
3. Replace the values by your own values
4. Don't forget to add a comma after the last mod before yours
<br>
You're done for the first part of the modding part ! The easiest !
<br>
## The main topic.
Well, modding is simple : Overwritting loaded files by the one you added to your mod without editing the default one located in `ServerDir/db/`.
<br>
For now, not everything can be "modded", only these things can : **Items**,**Bots loadouts**,**Hideout files**,**Assorts**,**Traders**,**Weather**.
<br>

