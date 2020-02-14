# Create a mod on JustEmuTarkov
## Why making my changes as a mod ?
By using a mod for your changes, it make it easier for you to manage your edits, and avoid any issue with base DB files. That's for this reason we recommend you to make it as mod, for not overwritting base files. It will avoid you to loose them when you upgrade your server too.
## How to start ?
* You need to go to your `ServerDir/user/server.config.json` and open that file.
* Add after the last mod, this part of code :
```json
{
    "name": "NameOfTheMod",
    "author": "AuthorOfTheMod",
    "version": "1.0.0",
    "enabled": true
}
```
* Replace the values by your own values.
* Don't forget to add a comma after the last mod before yours.

You're done for the first part of the modding part ! The easiest !
## The main topic.

Well, modding is simple : Overwritting loaded files by the one you added to your mod without editing the default one located in `ServerDir/db/`.

For now, not everything can be "modded", only these things can : **Items**,**Bots loadouts**,**Hideout files**,**Assorts**,**Traders**,**Weather**,**locales**,**scripting**,**maps**,.

* Create your mod folder, the name need to match like this : **author-name-Version** depending on what you put in the *server.config.json*.
* In this mod folder, create a file called **mod.config.json** and put the following code in :
```json
{
  "name": "NameOfTheMod",
  "author": "AuthorOfTheMod",
  "license": "Do you use a license ?",
  "version": "1.0.0",
  "dependencies": {},
  "res": {},
  "src":{
		"callback":{},
		"classes":{},
		"responses":{}
	},
  "db": {
    "locales": {
        "en": {
            "handbook": {
                "<itemid>": "db/locales/en/handbook/<itemid>.json"
            }
        }
    },
    "items": {},
    "assort": {
      "ragfair": {
          "barter":{},
          "items":{},
          "level":{}
      }
    },
    "maps": {
      "bigmap": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "develop": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "factory4_day": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "factory4_night": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "hideout": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "interchange": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "laboratory": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "rezervbase": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "shoreline": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      },
      "woods": {
          "bosses":{},
          "entries":{},
          "exits":{},
          "loot":{},
          "waves":{}
      }
    },
    "traders": {},
    "hideout": {
      "areas": {
          "NameOfTheFile": "db/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      },
      "production": {
            "NameOfTheFile": "db/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      },
      "scavcase": {
           "NameOfTheFile": "db/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      }
    },
    "weather":{},
    "bots": {
        "bear": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "usec": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "assault": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "bossbully": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "bossgluhar": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "bosskilla": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "bosskojaniy": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followerbully": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followergluharassault": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followergluharscout": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followergluharsecurity": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "followerkojaniy": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "marksman": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        },
        "pmcbot": {
          "appearance": {
            "body": {},
            "feet": {},
            "hands": {},
            "head": {},
            "voice": {}
          },
          "experience": {},
          "health": {},
          "inventory": {},
          "names": {}
        }
    }
}
}
```
### Some explanations :
Note that you now have 3 main "folders". **src**,**res**,**db**:

**src** is made for adding **scripts** mods to the game, everything that is in /src/ folder.
**res** is made for adding or editing games images (traders images for exemple), everything that is in /res/ folder.
**db** is made for edit or add servers items, quest, locale and so on, everything that is in /db/ folder.

As you can see, there's the filepath for each moddable part, we will edit this part when we have edited what we want, for our case, it's an item. I want to edit my sicc item case to have more slots, the item ID is : *5d235bb686f77443f4331278*. So i copy the file `5d235bb686f77443f4331278.json` in `ServerDir/db/items` and i paste it in `ServerDir/user/mods/Author-MyModName-version/db/items/`. The file path must be the same as where you copy the file you want to mod.

* I open my file up with any IDE, i prefer VScodium personnaly, and make my changes. After that i save and close the file.
* Now that i edited my file, i go back to my *mod.config.json* and i go into the items brackets for adding my item. For me it will looks like this :
```json
 "files": {
    "items": {
         "5d235bb686f77443f4331278": "db/items/5d235bb686f77443f4331278.json"
    },
```
* Save your mod.config.json and start the server. It should recache and your mod is working ! Good job comrade !

### The end
Good job, you made your first mod for JustEmuTarkov, all other parts to be modded work the same way. Just reproduce it with the desired part !

# Thanks
**Thanks to @InNoHurryToCode for making modding possible on JustEmuTarkov !**

# Official links
**Discord link**: https://discord.gg/JnJEev4

**Reddit page**: https://www.reddit.com/r/EmuTarkov/
