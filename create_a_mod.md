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
<br>
You're done for the first part of the modding part ! The easiest !
## The main topic.
<br>
Well, modding is simple : Overwritting loaded files by the one you added to your mod without editing the default one located in `ServerDir/db/`.
<br>
For now, not everything can be "modded", only these things can : **Items**,**Bots loadouts**,**Hideout files**,**Assorts**,**Traders**,**Weather**.
<br>
* Create your mod folder, the name need to match like this : **authorName-ModName** depending on what you put in the *server.config.json*.
* In this mod folder, create a file called **mod.config.json** and put the following code in :
```json
{
  "name": "NameOfTheMod",
  "author": [
    "AuthorOfTheMod",
    "ProbablyNotAlone"
  ],
  "description": "Add a description to your mod",
  "license": "Do you use a license ?",
  "releases": [
    {
      "version": "1.0.0",
      "changelog": [
        "Add your changelog here."
      ]
    }
  ],
  "dependencies": [],
  "files": {
    "items": {},
    "assort": {
      "CHANGEME": {}
    },
    "traders": {},
    "hideout": {
      "areas": {
          "NameOfTheFile": "user/mods/ModFolderName/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      },
      "production": {
            "NameOfTheFile": "user/mods/ModFolderName/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      },
      "scavcase": {
           "NameOfTheFile": "user/mods/ModFolderName/path/to/the/file/it/should/be/the/same/as/the/db/folder/according/to/the/part/you/mod.json"
      }
    },
    "bots": {
      "pmc": {
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
        }
      },
      "scav": {
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
}
```
<br>
As you can see, there's the filepath for each moddable part, 