# Editing differents things in my player profile
## Requirements
For doing **any** edits in EmuTarkovi higly recommend you to use this software :
* [VSCodium](https://github.com/VSCodium/vscodium/releases)

This software is free and alot more helpfull for alot of things, like missing coma and everything about the syntax.
* Make a backup of the profile you're using.

For this, heads to *ServerFolder/user/profiles* and create a copy of the profile you're using (you should have only one if you don't know what you're doing, and need this tutorial).

**/!\ If you want to make any changes in your profile files, close both the game and the server, none of these should run /!\ .**

It's recommended too to do it on a fresh wiped profile.

## Editing my character level
In this part, we are going to change your character level in EmuTarkov. For doing this we are going to make edits in the following file : *ServerFolder/user/profiles/accountID/character.json*.

Open the file with VSCodium or Notepad++ and find the following line : **"Experience": 0,**

This line is defining how much experience your character have, and will define wich level he have, we wont change the line **"Level": 1,** because it's not needed, and not read by the server.

The only thing we will have to do is change this number, by one of the selected level you want. You can know wich experience you need for each level there : [Escape From Tarkov Wiki](https://escapefromtarkov.gamepedia.com/Character_skills) at the end of the page.

The column we want to take the number from is : *Cumulative Total*.

Copy this number and replace the number "0" in your profile and remove the extra coma in the number and keep the last one. For being level 30 for exemple, it should be this :
**"Experience": 781760,**

Save your changes and start the server, you now have the desired level !

## Changing my skills level
*Being redacted*



# Thanks
**Tutorial made by : Sorata-Senpai**

# Official links
**Discord link**: https://discord.gg/jv7X8wC

**Reddit page**: https://www.reddit.com/r/EmuTarkov/
