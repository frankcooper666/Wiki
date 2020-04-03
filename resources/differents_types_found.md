# QUEST TYPE LIST

gclass1243
```
// Token: 0x0400687D RID: 26749
		PickUp,
		// Token: 0x0400687E RID: 26750
		Elimination,
		// Token: 0x0400687F RID: 26751
		Discover,
		// Token: 0x04006880 RID: 26752
		Completion,
		// Token: 0x04006881 RID: 26753
		Exploration,
		// Token: 0x04006882 RID: 26754
		Levelling,
		// Token: 0x04006883 RID: 26755
		Experience,
		// Token: 0x04006884 RID: 26756
		Standing,
		// Token: 0x04006885 RID: 26757
		Loyalty,
		// Token: 0x04006886 RID: 26758
		Merchant,
		// Token: 0x04006887 RID: 26759
		Skill,
		// Token: 0x04006888 RID: 26760
		Multi,
		// Token: 0x04006889 RID: 26761
		WeaponAssembly
```

# MESSAGE TYPE LIST
ChatShared
```
        // Token: 0x04003962 RID: 14690
		UserMessage = 1,
		// Token: 0x04003963 RID: 14691
		NpcTraderMessage,
		// Token: 0x04003964 RID: 14692
		AuctionMessage,
		// Token: 0x04003965 RID: 14693
		FleamarketMessage,
		// Token: 0x04003966 RID: 14694
		AdminMessage,
		// Token: 0x04003967 RID: 14695
		GroupChatMessage,
		// Token: 0x04003968 RID: 14696
		SystemMessage,
		// Token: 0x04003969 RID: 14697
		InsuranceReturn,
		// Token: 0x0400396A RID: 14698
		GlobalChat,
		// Token: 0x0400396B RID: 14699
		QuestStart,
		// Token: 0x0400396C RID: 14700
		QuestFail,
		// Token: 0x0400396D RID: 14701
		QuestSuccess,
		// Token: 0x0400396E RID: 14702
		MessageWithItems
```
# MEMBER CATEGORY

```
{
	// Token: 0x0400192A RID: 6442
	Default = 0,
	// Token: 0x0400192B RID: 6443
	Developer = 1,
	// Token: 0x0400192C RID: 6444
	UniqueId = 2,
	// Token: 0x0400192D RID: 6445
	Trader = 4,
	// Token: 0x0400192E RID: 6446
	Group = 8,
	// Token: 0x0400192F RID: 6447
	System = 16,
	// Token: 0x04001930 RID: 6448
	ChatModerator = 32,
	// Token: 0x04001931 RID: 6449
	ChatModeratorWithPermanentBan = 64,
	// Token: 0x04001932 RID: 6450
	UnitTest = 128,
	// Token: 0x04001933 RID: 6451
	Sherpa = 256,
	// Token: 0x04001934 RID: 6452
	Emissary = 512
}
```
# QUEST REWARD TYPE
```
{
		// Token: 0x0400693A RID: 26938
		Experience,
		// Token: 0x0400693B RID: 26939
		Skill,
		// Token: 0x0400693C RID: 26940
		Item,
		// Token: 0x0400693D RID: 26941
		TraderStanding,
		// Token: 0x0400693E RID: 26942
		TraderUnlock,
		// Token: 0x0400693F RID: 26943
		Location,
		// Token: 0x04006940 RID: 26944
		Counter,
		// Token: 0x04006941 RID: 26945
		AssortmentUnlock
}
```

# HIDEOUT REQUIREMENTS TYPE

```
{
		// Token: 0x04006417 RID: 25623
		Area,
		// Token: 0x04006418 RID: 25624
		Item,
		// Token: 0x04006419 RID: 25625
		TraderUnlock,
		// Token: 0x0400641A RID: 25626
		TraderLoyalty,
		// Token: 0x0400641B RID: 25627
		Skill,
		// Token: 0x0400641C RID: 25628
		Resource
	}
```

# EXTRACTION REQUIREMENTS

```
{
		// Token: 0x04007770 RID: 30576
		None,
		// Token: 0x04007771 RID: 30577
		Empty,
		// Token: 0x04007772 RID: 30578
		TransferItem,
		// Token: 0x04007773 RID: 30579
		WorldEvent,
		// Token: 0x04007774 RID: 30580
		NotEmpty,
		// Token: 0x04007775 RID: 30581
		HasItem,
		// Token: 0x04007776 RID: 30582
		WearsItem,
		// Token: 0x04007777 RID: 30583
		EmptyOrSize,
		// Token: 0x04007778 RID: 30584
		SkillLevel,
		// Token: 0x04007779 RID: 30585
		Reference,
		// Token: 0x0400777A RID: 30586
		ScavCooperation,
		// Token: 0x0400777B RID: 30587
		Train
	}
```

# WEATHER TYPES
```
{
		// Token: 0x040066BF RID: 26303
		ClearDay,
		// Token: 0x040066C0 RID: 26304
		ClearWind,
		// Token: 0x040066C1 RID: 26305
		ClearNight,
		// Token: 0x040066C2 RID: 26306
		PartlyCloudDay,
		// Token: 0x040066C3 RID: 26307
		PartlyCloudNight,
		// Token: 0x040066C4 RID: 26308
		ClearFogDay,
		// Token: 0x040066C5 RID: 26309
		ClearFogNight,
		// Token: 0x040066C6 RID: 26310
		CloudFog,
		// Token: 0x040066C7 RID: 26311
		Fog,
		// Token: 0x040066C8 RID: 26312
		MostlyCloud,
		// Token: 0x040066C9 RID: 26313
		LightRain,
		// Token: 0x040066CA RID: 26314
		Rain,
		// Token: 0x040066CB RID: 26315
		CloudWind,
		// Token: 0x040066CC RID: 26316
		CloudWindRain,
		// Token: 0x040066CD RID: 26317
		FullCloud,
		// Token: 0x040066CE RID: 26318
		ThunderCloud,
		// Token: 0x040066CF RID: 26319
		None
	}
```
# LOCATION RULES
```
{
			// Token: 0x04004224 RID: 16932
			Normal,
			// Token: 0x04004225 RID: 16933
			AvoidOwnPmc,
			// Token: 0x04004226 RID: 16934
			AvoidAllPmc
		}
```

# COLORS

```
{
		// Token: 0x040041A5 RID: 16805
		blue,
		// Token: 0x040041A6 RID: 16806
		yellow,
		// Token: 0x040041A7 RID: 16807
		green,
		// Token: 0x040041A8 RID: 16808
		red,
		// Token: 0x040041A9 RID: 16809
		black,
		// Token: 0x040041AA RID: 16810
		grey,
		// Token: 0x040041AB RID: 16811
		violet,
		// Token: 0x040041AC RID: 16812
		orange,
		// Token: 0x040041AD RID: 16813
		tracerYellow,
		// Token: 0x040041AE RID: 16814
		tracerGreen,
		// Token: 0x040041AF RID: 16815
		tracerRed,
		// Token: 0x040041B0 RID: 16816
		@default
	}
```