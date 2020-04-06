# Editing differents things in my player profile
## Requirements
For doing **any** edits in EmuTarkov i higly recommend you to use this software :
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
In this part, we are going to change our skills level, for having the master level of each skill. For this, heads to *ServerFolder/user/profiles/accountID/character.json* and search for this in the file : **"Skills":**.

When you will be at this point, you will face this :
```json
"Common": [
			{
				"Id": "BotReload",
				"Progress": 0,
				"PointsEarnedDuringSession": 0,
				"LastAccess": -2147483648
			},
			{
				"Id": "Endurance",
				"Progress": 0,
				"PointsEarnedDuringSession": 0,
				"LastAccess": 0
			},
			{
				"Id": "Strength",
				"Progress": 0,
				"PointsEarnedDuringSession": 0,
				"LastAccess": 0
      },
      [...]
```
Some explanations :
* **"Id":**
  * Determine the name of the skill
* **"Progress":**
  * Determine the number of points you learned for this skill
* **"PointsEarnedDuringSession":**
  * Determine how much points you got from the last session
* **"LastAccess":**
  * Determine the last time you earned a point in this skill (it's a timestamp)

So you gessed right ~~or not~~ that we will have to change the **"Progress":** part of each skill **EXCEPT** the skill **BotReload**.

How to know wich level is your skill, here is some easy math :
* 1 Level = 100 points
* 10 Levels = 1000 points
* 15 Levels = 1500 points

According that the master level of the skill is **51** we will need to have **5100** points in **"Progress":**.

At the end, the line for each skill you want to max out looks like this : **"Progress": 5100,**

## Change quest status
Well, in th is part you will learn how to change your quest status, that means, make it finished without having done the requirements for it (you mainly need to do this when a specific quest is bugged).

For doing this heads to *ServerFolder/user/profiles/accountID/character.json* and search for this in the file : **"Quests":**.

You're going to face something like this when found : 
```json
"Quests": [
		{
			"qid": "5936d90786f7742b1420ba5b",
			"startTime": 0,
			"completedConditions": [],
			"statusTimers": {
				"1": 1585993679.6069999
			},
			"status": "AvailableForStart"
		},
		{
			"qid": "5936da9e86f7742d65037edf",
			"startTime": 0,
			"completedConditions": [
				"59a9269486f7747aab09a77c"
			],
			"statusTimers": {},
			"status": "Locked"
		},
```
Let me explain you these :
* **"qid"**
  * This is the quest ID wich will give you the name of the quest
* **"startTime"**
  * This is the timestamp when you started the quest
* **"CompletedConditions"**
  * This is where the requirements for completing the quests are stored. These are ID's.
* **"statusTimers"**
  * This is the timestamp since when the quest is available
* **"status"**
  * This define the status of the quest, decide if it's locked, completed, not started etc.

*How do i find the correct quest ID for the quest i look for ?* You can find all quests ID here : [Quest list](https://github.com/justemutarkov/Wiki/blob/master/resources/quests_id_list.md)

I think you guessed what we are gonna change ~~or maybe you didn't~~ wich is kinda self explanatory. This is **"status"** part.

Here are all available status for quests :
* Locked
* AvailableForStart
* Started
* AvailableForFinish
* Success
* Fail
* FailRestartable
* MarkedAsFailed

So, if you want to finish the quest you will need to change the status to : **"AvailableForFinish"**, but if you want to re-do a quest you already did, you will need to change the status to : **"AvailableForStart"**

Don't forget to save your changes !
## Changing hideout areas status

[Being redacted]

## Editing traders
[Being redacted]

# Thanks
**Tutorial made by : Sorata-Senpai**

# Official links
**Discord link**: https://discord.gg/jv7X8wC

**Reddit page**: https://www.reddit.com/r/EmuTarkov/
