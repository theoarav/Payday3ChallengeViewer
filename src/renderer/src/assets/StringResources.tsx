/*
All the api title/description data can be automated, however since theres no api that provides the in-game variant its needs to be set manually...

Heist names (api => game)
    "Branch Bank" => "NO REST FOR THE WICKED"
    "Armored Transport" => "ROAD RAGE" DONE
    "Jewelry Store" => "DIRTY ICE"
    "Night Club" => "ROCK THE CRADLE"
    "Art Gallery" => "UNDER THE SURPHAZE"
    "Sharke Bank (FP) / First Playable Bank" => "GOLDE AND SHARKE"
    "Cargo Dock" => "99 BOXES"
    "Penthouse" => "TOUCH THE SKY"

Enemies (api => game)
    "grenadier" => "NADER"
    "Taser" => "ZAPPER"

Difficulties (api => game)
    "normal" => "SMOOTH"
    "hard" => "HARSH"
    "very hard" => "RELENTLESS"
    "overkill" => "LETHAL"

Tactics (api => game)
    "stealth" => "QUIET"
    "loud" => "ROWDY"

Weapon names (api => game)
    Assault rifles:
        "CAR4" => "CAR-4"
        "NWB9" => "NORTHWEST B-9"
        "KU59" => "KU-59"
        "VF7S" => "VF-7S"

    Marksman rifles:
        "A114" => "SA A144"
        "R900S" => "REINFELD 900S"

    SMGs:
        "PC9" => "FIK PC9"
        "Commando" => "ZIV COMMANDO"
        "Compact7" => "SG COMPACT-7"

    Shotguns:
        "R880" => "REINFELD 880"
        "Mosconi12C" => "MOSCONI 12 CLASSIC"

    Pistols:
        "S40" => "SIGNATURE 40"
        "S403" => "SIGNATURE 403"
        "Stryk7" => "STRYK 7"
        "SPM11" => "SP MODEL 11"

    Revolvers:
        "Castigo44" => "J AND M CASTIGO 44"
        "Bison" => "SFORZA BISON"

    Overkill weapons:
        "HET5" => "HET-5 RED FOX"
        "Mamba" => "MARCOM MAMBA GL"
*/

export type StringResourceKey = keyof typeof StringResources;

export const StringResources = {
    "625e7c1c28fe1154bf4b6f80": {
        "api": {
            "title": "Jewelry Store Loud I",
            "desc": "Beat Jewelry Store on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "DIRTY ICE: ROWDY & SMOOTH",
            "desc": "Beat Dirty Ice on Normal or higher difficulty after the Assault has started."
        }
    },
    "625e7e4028fe1154bf4b6f83": {
        "api": {
            "title": "Jewelry Store Loud II",
            "desc": "Beat Jewelry Store on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "DIRTY ICE: ROWDY & HARSH",
            "desc": "Beat Dirty Ice on Hard or higher difficulty after the Assault has started."
        }
    },
    "625e7f0628fe1154bf4b6f84": {
        "api": {
            "title": "Jewelry Store Loud III",
            "desc": "Beat Jewelry Store on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "DIRTY ICE: ROWDY & RELENTLESS",
            "desc": "Beat Dirty Ice on Very Hard or higher difficulty after the Assault has started."
        }
    },
    "625e81a328fe1154bf4b6f8d": {
        "api": {
            "title": "Jewelry Store Loud IV",
            "desc": "Beat Jewelry Store on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "DIRTY ICE: ROWDY & LETHAL",
            "desc": "Beat Dirty Ice on Overkill or higher difficulty after the Assault has started."
        }
    },
    "625e827528fe1154bf4b6f92": {
        "api": {
            "title": "Jewelry Store Stealthy I",
            "desc": "Beat Jewelry Store on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e833828fe1154bf4b6fa1": {
        "api": {
            "title": "Jewelry Store Stealthy II",
            "desc": "Beat Jewelry Store on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e83af28fe1154bf4b6fa2": {
        "api": {
            "title": "Jewelry Store Stealthy III",
            "desc": "Beat Jewelry Store on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e848d28fe1154bf4b6fa3": {
        "api": {
            "title": "Jewelry Store Stealthy IV",
            "desc": "Beat Jewelry Store on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e858228fe1154bf4b6fa4": {
        "api": {
            "title": "Art Gallery Loud I",
            "desc": "Beat Art Gallery on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e865e28fe1154bf4b6fb7": {
        "api": {
            "title": "Art Gallery Loud II",
            "desc": "Beat Art Gallery on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e86d728fe1154bf4b6fb8": {
        "api": {
            "title": "Art Gallery Loud III",
            "desc": "Beat Art Gallery on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e872828fe1154bf4b6fb9": {
        "api": {
            "title": "Art Gallery Loud IV",
            "desc": "Beat Art Gallery on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e993728fe1154bf4b6fd4": {
        "api": {
            "title": "Art Gallery Stealthy I",
            "desc": "Beat Art Gallery on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e99a928fe1154bf4b6fd6": {
        "api": {
            "title": "Art Gallery Stealthy II",
            "desc": "Beat Art Gallery on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e9a1b28fe1154bf4b6fd7": {
        "api": {
            "title": "Art Gallery Stealthy III",
            "desc": "Beat Art Gallery on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e9c5628fe1154bf4b6fe7": {
        "api": {
            "title": "Art Gallery Stealthy IV",
            "desc": "Beat Art Gallery on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625e9d3228fe1154bf4b6ff7": {
        "api": {
            "title": "Sharke Bank (FP) Loud I",
            "desc": "Beat First Playable Bank on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625eb30528fe1154bf4b708c": {
        "api": {
            "title": "Sharke Bank (FP) Loud II",
            "desc": "Beat First Playable Bank on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625eb38c28fe1154bf4b708e": {
        "api": {
            "title": "Sharke Bank (FP) Loud III",
            "desc": "Beat First Playable Bank on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625eb3e828fe1154bf4b708f": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV",
            "desc": "Beat First Playable Bank on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625eb43c28fe1154bf4b7090": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I",
            "desc": "Beat First Playable Bank on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625eb49828fe1154bf4b7091": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II",
            "desc": "Beat First Playable Bank on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625eb4e628fe1154bf4b70a8": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III",
            "desc": "Beat First Playable Bank on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625eb57028fe1154bf4b70a9": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV",
            "desc": "Beat First Playable Bank on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625eb99828fe1154bf4b70fc": {
        "api": {
            "title": "Jewelry Store Loud I: Repeat Offender I",
            "desc": "Beat Jewelry Store 15 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625ebbda28fe1154bf4b7119": {
        "api": {
            "title": "Jewelry Store Loud II: Repeat Offender I",
            "desc": "Beat Jewelry Store 10 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625ebc6928fe1154bf4b711c": {
        "api": {
            "title": "Jewelry Store Stealthy I: Repeat Offender I",
            "desc": "Beat Jewelry Store 15 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "625ebd7c28fe1154bf4b7139": {
        "api": {
            "title": "Jewelry Store Stealthy II: Repeat Offender I",
            "desc": "Beat Jewelry Store 10 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c3f96f28fe1154bf4bd90d": {
        "api": {
            "title": "Kill Dozer I",
            "desc": "Defeat a Dozer enemy"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c3fa6e28fe1154bf4bd90f": {
        "api": {
            "title": "Kill Dozer II",
            "desc": "Defeat 10 Dozer enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c3fb3928fe1154bf4bd910": {
        "api": {
            "title": "Kill Dozer III",
            "desc": "Defeat 30 Dozer enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c3fbd828fe1154bf4bd911": {
        "api": {
            "title": "Kill Dozer IV",
            "desc": "Defeat 60 Dozer enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c3ffb328fe1154bf4bd91a": {
        "api": {
            "title": "Kill Taser I",
            "desc": "Defeat a Taser enemy"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4014128fe1154bf4bd925": {
        "api": {
            "title": "Kill Taser II",
            "desc": "Defeat 10 Taser enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c403b328fe1154bf4bd92c": {
        "api": {
            "title": "Kill Taser III",
            "desc": "Defeat 30 Taser enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c404c928fe1154bf4bd92d": {
        "api": {
            "title": "Kill Taser IV",
            "desc": "Defeat 60 Taser enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4078828fe1154bf4bd938": {
        "api": {
            "title": "Kill Grenadier I",
            "desc": "Defeat a Grenadier enemy"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c408ab28fe1154bf4bd94f": {
        "api": {
            "title": "Kill Grenadier II",
            "desc": "Defeat 10 Grenadier enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4091f28fe1154bf4bd95a": {
        "api": {
            "title": "Kill Grenadier III",
            "desc": "Defeat 30 Grenadier enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4099728fe1154bf4bd95b": {
        "api": {
            "title": "Kill Grenadier IV",
            "desc": "Defeat 60 Grenadier enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41b6028fe1154bf4bd988": {
        "api": {
            "title": "Kill Shield I",
            "desc": "Defeat a Shield enemy"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41be728fe1154bf4bd989": {
        "api": {
            "title": "Kill Shield II",
            "desc": "Defeat 10 Shield enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41c6628fe1154bf4bd98a": {
        "api": {
            "title": "Kill Shield III",
            "desc": "Defeat 30 Shield enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41cd528fe1154bf4bd98b": {
        "api": {
            "title": "Kill Shield IV",
            "desc": "Defeat 60 Shield enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41e2128fe1154bf4bd9e3": {
        "api": {
            "title": "Kill Sniper I",
            "desc": "Defeat a Sniper enemy"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41eaf28fe1154bf4bda30": {
        "api": {
            "title": "Kill Sniper II",
            "desc": "Defeat 10 Sniper enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41f1e28fe1154bf4bda43": {
        "api": {
            "title": "Kill Sniper III",
            "desc": "Defeat 30 Sniper enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41f7528fe1154bf4bda48": {
        "api": {
            "title": "Kill Sniper IV",
            "desc": "Defeat 60 Sniper enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c41fd628fe1154bf4bda4d": {
        "api": {
            "title": "Kill Cloaker I",
            "desc": "Defeat a Cloaker enemy"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4208228fe1154bf4bda50": {
        "api": {
            "title": "Kill Cloaker II",
            "desc": "Defeat 10 Cloaker enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c420e128fe1154bf4bda51": {
        "api": {
            "title": "Kill Cloaker III",
            "desc": "Defeat 30 Cloaker enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4212b28fe1154bf4bda52": {
        "api": {
            "title": "Kill Cloaker IV",
            "desc": "Defeat 60 Cloaker enemies"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4367d28fe1154bf4bdbc9": {
        "api": {
            "title": "NWB9 I",
            "desc": "Defeat 50 enemies with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 EASY PICKINGS I",
            "desc": "Defeat 50 enemies with the Northwest B-9."
        }
    },
    "62c437f328fe1154bf4bdbca": {
        "api": {
            "title": "NWB9 II",
            "desc": "Defeat 100 enemies with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 EASY PICKINGS II",
            "desc": "Defeat 100 enemies with the Northwest B-9."
        }
    },
    "62c438f928fe1154bf4bdbcb": {
        "api": {
            "title": "NWB9 III",
            "desc": "Defeat 200 enemies with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 EASY PICKINGS III",
            "desc": "Defeat 200 enemies with the Northwest B-9."
        }
    },
    "62c439c228fe1154bf4bdbcc": {
        "api": {
            "title": "NWB9 IV",
            "desc": "Defeat 350 enemies with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 EASY PICKINGS IV",
            "desc": "Defeat 350 enemies with the Northwest B-9."
        }
    },
    "62c43a2e28fe1154bf4bdbfb": {
        "api": {
            "title": "NWB9 V",
            "desc": "Defeat 500 enemies with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 EASY PICKINGS V",
            "desc": "Defeat 500 enemies with the Northwest B-9."
        }
    },
    "62c43b5e28fe1154bf4bdbfc": {
        "api": {
            "title": "CAR4 I",
            "desc": "Defeat 50 enemies with the CAR4"
        },
        "game": {
            "title": "CAR-4 EASY PICKINGS I",
            "desc": "Defeat 50 enemies with the CAR-4."
        }
    },
    "62c43c0928fe1154bf4bdc50": {
        "api": {
            "title": "CAR4 II",
            "desc": "Defeat 100 enemies with the CAR4"
        },
        "game": {
            "title": "CAR-4 EASY PICKINGS II",
            "desc": "Defeat 100 enemies with the CAR-4."
        }
    },
    "62c43cc928fe1154bf4bdc5f": {
        "api": {
            "title": "CAR4 III",
            "desc": "Defeat 200 enemies with the CAR4"
        },
        "game": {
            "title": "CAR-4 EASY PICKINGS III",
            "desc": "Defeat 200 enemies with the CAR-4."
        }
    },
    "62c43da828fe1154bf4bdc6a": {
        "api": {
            "title": "CAR4 IV",
            "desc": "Defeat 350 enemies with the CAR4"
        },
        "game": {
            "title": "CAR-4 EASY PICKINGS IV",
            "desc": "Defeat 350 enemies with the CAR-4."
        }
    },
    "62c43e2828fe1154bf4bdc6b": {
        "api": {
            "title": "CAR4 V",
            "desc": "Defeat 500 enemies with the CAR4"
        },
        "game": {
            "title": "CAR-4 EASY PICKINGS V",
            "desc": "Defeat 500 enemies with the CAR-4."
        }
    },
    "62c43f4628fe1154bf4bdce9": {
        "api": {
            "title": "Compact7 I",
            "desc": "Defeat 50 enemies with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c43fea28fe1154bf4bdcfc": {
        "api": {
            "title": "Compact7 II",
            "desc": "Defeat 100 enemies with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4404a28fe1154bf4bdcfd": {
        "api": {
            "title": "Compact7 III",
            "desc": "Defeat 200 enemies with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4420b28fe1154bf4bdd27": {
        "api": {
            "title": "Compact7 IV",
            "desc": "Defeat 350 enemies with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4426128fe1154bf4bdd28": {
        "api": {
            "title": "Compact7 V",
            "desc": "Defeat 500 enemies with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4561428fe1154bf4be0b3": {
        "api": {
            "title": "R880 I",
            "desc": "Defeat 50 enemies with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c456a828fe1154bf4be0d5": {
        "api": {
            "title": "R880 II",
            "desc": "Defeat 100 enemies with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4572a28fe1154bf4be0d6": {
        "api": {
            "title": "R880 III",
            "desc": "Defeat 200 enemies with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c457f728fe1154bf4be0e9": {
        "api": {
            "title": "R880 IV",
            "desc": "Defeat 350 enemies with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c4585a28fe1154bf4be0ea": {
        "api": {
            "title": "R880 V",
            "desc": "Defeat 500 enemies with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c459a628fe1154bf4be122": {
        "api": {
            "title": "A114 I",
            "desc": "Defeat 50 enemies with the A114"
        },
        "game": {
            "title": "SA A144 EASY PICKINGS I",
            "desc": "Defeat 50 enemies with the SA A144."
        }
    },
    "62c45a2728fe1154bf4be123": {
        "api": {
            "title": "A114 II",
            "desc": "Defeat 100 enemies with the A114"
        },
        "game": {
            "title": "SA A144 EASY PICKINGS II",
            "desc": "Defeat 100 enemies with the SA A144."
        }
    },
    "62c45d2828fe1154bf4be124": {
        "api": {
            "title": "A114 III",
            "desc": "Defeat 200 enemies with the A114"
        },
        "game": {
            "title": "SA A144 EASY PICKINGS III",
            "desc": "Defeat 200 enemies with the SA A144."
        }
    },
    "62c45d8f28fe1154bf4be125": {
        "api": {
            "title": "A114 IV",
            "desc": "Defeat 350 enemies with the A114"
        },
        "game": {
            "title": "SA A144 EASY PICKINGS IV",
            "desc": "Defeat 350 enemies with the SA A144."
        }
    },
    "62c45dfb28fe1154bf4be126": {
        "api": {
            "title": "A114 V",
            "desc": "Defeat 500 enemies with the A114"
        },
        "game": {
            "title": "SA A144 EASY PICKINGS V",
            "desc": "Defeat 500 enemies with the SA A144."
        }
    },
    "62c45ef528fe1154bf4be127": {
        "api": {
            "title": "R900S I",
            "desc": "Defeat 50 enemies with the R900S"
        },
        "game": {
            "title": "REINFELD 900S EASY PICKINGS I",
            "desc": "Defeat 50 enemies with the Reinfeld 900S."
        }
    },
    "62c45f6228fe1154bf4be128": {
        "api": {
            "title": "R900S II",
            "desc": "Defeat 100 enemies with the R900S"
        },
        "game": {
            "title": "REINFELD 900S EASY PICKINGS II",
            "desc": "Defeat 100 enemies with the Reinfeld 900S."
        }
    },
    "62c4600f28fe1154bf4be135": {
        "api": {
            "title": "R900S III",
            "desc": "Defeat 200 enemies with the R900S"
        },
        "game": {
            "title": "REINFELD 900S EASY PICKINGS III",
            "desc": "Defeat 200 enemies with the Reinfeld 900S."
        }
    },
    "62c545a128fe1154bf4be4f4": {
        "api": {
            "title": "R900S IV",
            "desc": "Defeat 350 enemies with the R900S"
        },
        "game": {
            "title": "REINFELD 900S EASY PICKINGS IV",
            "desc": "Defeat 350 enemies with the Reinfeld 900S."
        }
    },
    "62c546b228fe1154bf4be4f5": {
        "api": {
            "title": "R900S V",
            "desc": "Defeat 500 enemies with the R900S"
        },
        "game": {
            "title": "REINFELD 900S EASY PICKINGS V",
            "desc": "Defeat 500 enemies with the Reinfeld 900S."
        }
    },
    "62c54eae28fe1154bf4be504": {
        "api": {
            "title": "S40 I",
            "desc": "Defeat 50 enemies with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5565a28fe1154bf4be56a": {
        "api": {
            "title": "S40 II",
            "desc": "Defeat 100 enemies with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5577c28fe1154bf4be56d": {
        "api": {
            "title": "S40 III",
            "desc": "Defeat 200 enemies with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c559d828fe1154bf4be570": {
        "api": {
            "title": "S40 IV",
            "desc": "Defeat 350 enemies with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c55c3028fe1154bf4be5b7": {
        "api": {
            "title": "S40 V",
            "desc": "Defeat 500 enemies with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c56f2e28fe1154bf4be5f6": {
        "api": {
            "title": "Castigo44 I",
            "desc": "Defeat 50 enemies with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c56fac28fe1154bf4be5f7": {
        "api": {
            "title": "Castigo44 II",
            "desc": "Defeat 100 enemies with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5706a28fe1154bf4be5f8": {
        "api": {
            "title": "Castigo44 III",
            "desc": "Defeat 200 enemies with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c570b828fe1154bf4be5f9": {
        "api": {
            "title": "Castigo44 IV",
            "desc": "Defeat 350 enemies with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5719528fe1154bf4be616": {
        "api": {
            "title": "Castigo44 V",
            "desc": "Defeat 500 enemies with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c572ad28fe1154bf4be622": {
        "api": {
            "title": "Mamba I",
            "desc": "Defeat 10 enemies with the Mamba"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5732628fe1154bf4be623": {
        "api": {
            "title": "Mamba II",
            "desc": "Defeat 50 enemies with the Mamba"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5746d28fe1154bf4be638": {
        "api": {
            "title": "Mamba III",
            "desc": "Defeat 100 enemies with the Mamba"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c574c228fe1154bf4be639": {
        "api": {
            "title": "Mamba IV",
            "desc": "Defeat 200 enemies with the Mamba"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5752128fe1154bf4be648": {
        "api": {
            "title": "Mamba V",
            "desc": "Defeat 300 enemies with the Mamba"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5adfc28fe1154bf4bea8d": {
        "api": {
            "title": "Headshot CAR4 I",
            "desc": "Defeat an enemy by headshot with the CAR4"
        },
        "game": {
            "title": "CAR-4 DEADEYE I",
            "desc": "Defeat an enemy with a Headshot using the CAR-4."
        }
    },
    "62c5af5a28fe1154bf4beaf3": {
        "api": {
            "title": "Headshot CAR4 II",
            "desc": "Defeat 10 enemies by headshot with the CAR4"
        },
        "game": {
            "title": "CAR-4 DEADEYE II",
            "desc": "Defeat 10 enemies with a Headshot using the CAR-4."
        }
    },
    "62c5b05528fe1154bf4beaf8": {
        "api": {
            "title": "Headshot CAR4 III",
            "desc": "Defeat 30 enemies by headshot with the CAR4"
        },
        "game": {
            "title": "CAR-4 DEADEYE III",
            "desc": "Defeat 30 enemies with a Headshot using the CAR-4."
        }
    },
    "62c5b0e728fe1154bf4beaf9": {
        "api": {
            "title": "Headshot CAR4 IV",
            "desc": "Defeat 60 enemies by headshot with the CAR4"
        },
        "game": {
            "title": "CAR-4 DEADEYE IV",
            "desc": "Defeat 60 enemies with a Headshot using the CAR-4."
        }
    },
    "62c5b21d28fe1154bf4beafa": {
        "api": {
            "title": "Headshot Compact7 I",
            "desc": "Defeat an enemy by headshot with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5b2b028fe1154bf4beb00": {
        "api": {
            "title": "Headshot Compact7 II",
            "desc": "Defeat 10 enemies by headshot with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5b33b28fe1154bf4beb06": {
        "api": {
            "title": "Headshot Compact7 III",
            "desc": "Defeat 30 enemies by headshot with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c5b43628fe1154bf4beb07": {
        "api": {
            "title": "Headshot Compact7 IV",
            "desc": "Defeat 60 enemies by headshot with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c69a0028fe1154bf4beea2": {
        "api": {
            "title": "Headshot R880 I",
            "desc": "Defeat an enemy by headshot with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6aa6b28fe1154bf4bef6c": {
        "api": {
            "title": "Headshot R880 II",
            "desc": "Defeat 10 enemies by headshot with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6c1dd28fe1154bf4bf19c": {
        "api": {
            "title": "Headshot R880 III",
            "desc": "Defeat 30 enemies by headshot with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6c23628fe1154bf4bf1a0": {
        "api": {
            "title": "Headshot R880 IV",
            "desc": "Defeat 60 enemies by headshot with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6c32528fe1154bf4bf1a1": {
        "api": {
            "title": "Headshot A114 I",
            "desc": "Defeat an enemy by headshot with the A114"
        },
        "game": {
            "title": "SA A144 DEADEYE I",
            "desc": "Defeat an enemy with a Headshot using the SA A144."
        }
    },
    "62c6c49e28fe1154bf4bf1ac": {
        "api": {
            "title": "Headshot A114 II",
            "desc": "Defeat 10 enemies by headshot with the A114"
        },
        "game": {
            "title": "SA A144 DEADEYE II",
            "desc": "Defeat 10 enemies with a Headshot using the SA A144."
        }
    },
    "62c6c57728fe1154bf4bf1ae": {
        "api": {
            "title": "Headshot A114 III",
            "desc": "Defeat 30 enemies by headshot with the A114"
        },
        "game": {
            "title": "SA A144 DEADEYE III",
            "desc": "Defeat 30 enemies with a Headshot using the SA A144."
        }
    },
    "62c6c5e528fe1154bf4bf1be": {
        "api": {
            "title": "Headshot A114 IV",
            "desc": "Defeat 60 enemies by headshot with the A114"
        },
        "game": {
            "title": "SA A144 DEADEYE IV",
            "desc": "Defeat 60 enemies with a Headshot using the SA A144."
        }
    },
    "62c6cced28fe1154bf4bf27c": {
        "api": {
            "title": "Headshot R900S I",
            "desc": "Defeat an enemy by headshot with the R900S"
        },
        "game": {
            "title": "REINFELD 900S DEADEYE I",
            "desc": "Defeat an enemy with a Headshot using the Reinfeld 900S."
        }
    },
    "62c6cdc328fe1154bf4bf27d": {
        "api": {
            "title": "Headshot R900S II",
            "desc": "Defeat 10 enemies by headshot with the R900S"
        },
        "game": {
            "title": "REINFELD 900S DEADEYE II",
            "desc": "Defeat 10 enemies with a Headshot using the Reinfeld 900S."
        }
    },
    "62c6ce3a28fe1154bf4bf2bd": {
        "api": {
            "title": "Headshot R900S III",
            "desc": "Defeat 30 enemies by headshot with the R900S"
        },
        "game": {
            "title": "REINFELD 900S DEADEYE III",
            "desc": "Defeat 30 enemies with a Headshot using the Reinfeld 900S."
        }
    },
    "62c6cec328fe1154bf4bf2be": {
        "api": {
            "title": "Headshot R900S IV",
            "desc": "Defeat 60 enemies by headshot with the R900S"
        },
        "game": {
            "title": "REINFELD 900S DEADEYE IV",
            "desc": "Defeat 60 enemies with a Headshot using the Reinfeld 900S."
        }
    },
    "62c6eee228fe1154bf4bf416": {
        "api": {
            "title": "Headshot S40 I",
            "desc": "Defeat an enemy by headshot with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6f12c28fe1154bf4bf41b": {
        "api": {
            "title": "Headshot S40 II",
            "desc": "Defeat 10 enemies by headshot with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6f1a728fe1154bf4bf422": {
        "api": {
            "title": "Headshot S40 III",
            "desc": "Defeat 30 enemies by headshot with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6f21828fe1154bf4bf425": {
        "api": {
            "title": "Headshot S40 IV",
            "desc": "Defeat 60 enemies by headshot with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6f35f28fe1154bf4bf426": {
        "api": {
            "title": "Headshot Castigo44 I",
            "desc": "Defeat an enemy by headshot with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6f3ce28fe1154bf4bf433": {
        "api": {
            "title": "Headshot Castigo44 II",
            "desc": "Defeat 10 enemies by headshot with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6f45c28fe1154bf4bf465": {
        "api": {
            "title": "Headshot Castigo44 III",
            "desc": "Defeat 30 enemies by headshot with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c6f4b928fe1154bf4bf466": {
        "api": {
            "title": "Headshot Castigo44 IV",
            "desc": "Defeat 60 enemies by headshot with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c82f6428fe1154bf4bfe57": {
        "api": {
            "title": "Branch Bank Loud I",
            "desc": "Beat Branch Bank on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c8301228fe1154bf4bfe58": {
        "api": {
            "title": "Branch Bank Loud II",
            "desc": "Beat Branch Bank on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c830c028fe1154bf4bfe99": {
        "api": {
            "title": "Branch Bank Loud III",
            "desc": "Beat Branch Bank on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c8312628fe1154bf4bfe9a": {
        "api": {
            "title": "Branch Bank Loud IV",
            "desc": "Beat Branch Bank on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c833ea28fe1154bf4bfe9f": {
        "api": {
            "title": "Branch Bank Stealthy I",
            "desc": "Beat Branch Bank on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c834a728fe1154bf4bfea0": {
        "api": {
            "title": "Branch Bank Stealthy II",
            "desc": "Beat Branch Bank on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c8359728fe1154bf4bfeb3": {
        "api": {
            "title": "Branch Bank Stealthy III",
            "desc": "Beat Branch Bank on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c8361628fe1154bf4bfebb": {
        "api": {
            "title": "Branch Bank Stealthy IV",
            "desc": "Beat Branch Bank on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c84cd528fe1154bf4c04ac": {
        "api": {
            "title": "Night Club Loud I",
            "desc": "Beat Night Club on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c84d2328fe1154bf4c04ad": {
        "api": {
            "title": "Night Club Loud II",
            "desc": "Beat Night Club on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c84d9628fe1154bf4c04ae": {
        "api": {
            "title": "Night Club Loud III",
            "desc": "Beat Night Club on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c84dff28fe1154bf4c04af": {
        "api": {
            "title": "Night Club Loud IV",
            "desc": "Beat Night Club on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c84e6028fe1154bf4c04b0": {
        "api": {
            "title": "Night Club Stealthy I",
            "desc": "Beat Night Club on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c84ee628fe1154bf4c04be": {
        "api": {
            "title": "Night Club Stealthy II",
            "desc": "Beat Night Club on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c84f3b28fe1154bf4c04bf": {
        "api": {
            "title": "Night Club Stealthy III",
            "desc": "Beat Night Club on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62c84fc228fe1154bf4c04c0": {
        "api": {
            "title": "Night Club Stealthy IV",
            "desc": "Beat Night Club on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cbdf6728fe1154bf4c06ed": {
        "api": {
            "title": "Branch Bank: Full Payout",
            "desc": "Escape with the maximum payout"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cbe00d28fe1154bf4c06ee": {
        "api": {
            "title": "Branch Bank: On Your Feet",
            "desc": "Escape without being downed after the assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cbe0b828fe1154bf4c06ef": {
        "api": {
            "title": "Jewelry Store: Full Payout",
            "desc": "Escape with the maximum payout"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cbe18e28fe1154bf4c06f0": {
        "api": {
            "title": "Jewelry Store: On Your Feet",
            "desc": "Escape without being downed after the assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cc088328fe1154bf4c08fd": {
        "api": {
            "title": "Art Gallery: Full Payout",
            "desc": "Escape with the maximum payout"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cc093428fe1154bf4c08fe": {
        "api": {
            "title": "Art Gallery: On Your Feet",
            "desc": "Escape without being downed after the assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cc09f628fe1154bf4c0909": {
        "api": {
            "title": "Night Club: Full Payout",
            "desc": "Escape with the maximum payout"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cc0a4a28fe1154bf4c090d": {
        "api": {
            "title": "Night Club: On Your Feet",
            "desc": "Escape without being downed after the assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cc0b1328fe1154bf4c0912": {
        "api": {
            "title": "Sharke Bank (FP): Full Payout",
            "desc": "Escape with the maximum payout"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cc0b8c28fe1154bf4c0913": {
        "api": {
            "title": "Sharke Bank (FP): On Your Feet",
            "desc": "Escape without being downed after the assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd5bdd28fe1154bf4c1369": {
        "api": {
            "title": "Jewelry Store Loud I: Repeat Offender II",
            "desc": "Beat Jewelry Store 30 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd5cfc28fe1154bf4c136d": {
        "api": {
            "title": "Jewelry Store Loud I: Repeat Offender III",
            "desc": "Beat Jewelry Store 60 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd5e0d28fe1154bf4c1374": {
        "api": {
            "title": "Jewelry Store Loud I: Repeat Offender IV",
            "desc": "Beat Jewelry Store 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd607e28fe1154bf4c137c": {
        "api": {
            "title": "Jewelry Store Loud II: Repeat Offender II",
            "desc": "Beat Jewelry Store 20 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd647e28fe1154bf4c1435": {
        "api": {
            "title": "Jewelry Store Loud II: Repeat Offender III",
            "desc": "Beat Jewelry Store 50 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd660128fe1154bf4c143b": {
        "api": {
            "title": "Jewelry Store Loud II: Repeat Offender IV",
            "desc": "Beat Jewelry Store 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd7f8a28fe1154bf4c15f2": {
        "api": {
            "title": "Jewelry Store Loud III: Repeat Offender I",
            "desc": "Beat Jewelry Store 5 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd804c28fe1154bf4c15f4": {
        "api": {
            "title": "Jewelry Store Loud III: Repeat Offender II",
            "desc": "Beat Jewelry Store 15 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd814b28fe1154bf4c15f5": {
        "api": {
            "title": "Jewelry Store Loud III: Repeat Offender III",
            "desc": "Beat Jewelry Store 40 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd827f28fe1154bf4c1609": {
        "api": {
            "title": "Jewelry Store Loud III: Repeat Offender IV",
            "desc": "Beat Jewelry Store 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd836c28fe1154bf4c160a": {
        "api": {
            "title": "Jewelry Store Loud IV: Repeat Offender I",
            "desc": "Beat Jewelry Store 2 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd849d28fe1154bf4c1614": {
        "api": {
            "title": "Jewelry Store Loud IV: Repeat Offender II",
            "desc": "Beat Jewelry Store 10 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd8ae328fe1154bf4c1647": {
        "api": {
            "title": "Jewelry Store Loud IV: Repeat Offender III",
            "desc": "Beat Jewelry Store 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cd8b8728fe1154bf4c1648": {
        "api": {
            "title": "Jewelry Store Loud IV: Repeat Offender IV",
            "desc": "Beat Jewelry Store 60 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ceae6428fe1154bf4c1eb2": {
        "api": {
            "title": "Jewelry Store Stealthy I: Repeat Offender II",
            "desc": "Beat Jewelry Store 30 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ceaf5928fe1154bf4c2036": {
        "api": {
            "title": "Jewelry Store Stealthy I: Repeat Offender III",
            "desc": "Beat Jewelry Store 60 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cfe76028fe1154bf4c2822": {
        "api": {
            "title": "Jewelry Store Stealthy I: Repeat Offender IV",
            "desc": "Beat Jewelry Store 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cfe8df28fe1154bf4c2823": {
        "api": {
            "title": "Jewelry Store Stealthy II: Repeat Offender II",
            "desc": "Beat Jewelry Store 20 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cfe9c328fe1154bf4c2824": {
        "api": {
            "title": "Jewelry Store Stealthy II: Repeat Offender III",
            "desc": "Beat Jewelry Store 50 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62cfead028fe1154bf4c2825": {
        "api": {
            "title": "Jewelry Store Stealthy II: Repeat Offender IV",
            "desc": "Beat Jewelry Store 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62d011cc28fe1154bf4c2a7d": {
        "api": {
            "title": "Jewelry Store Stealthy III: Repeat Offender I",
            "desc": "Beat Jewelry Store 5 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62d0129228fe1154bf4c2a7e": {
        "api": {
            "title": "Jewelry Store Stealthy III: Repeat Offender II",
            "desc": "Beat Jewelry Store 15 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62d0140d28fe1154bf4c2a81": {
        "api": {
            "title": "Jewelry Store Stealthy III: Repeat Offender III",
            "desc": "Beat Jewelry Store 40 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62d0153928fe1154bf4c2a82": {
        "api": {
            "title": "Jewelry Store Stealthy III: Repeat Offender IV",
            "desc": "Beat Jewelry Store 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62d016ba28fe1154bf4c2a83": {
        "api": {
            "title": "Jewelry Store Stealthy IV: Repeat Offender I",
            "desc": "Beat Jewelry Store 2 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62d017b028fe1154bf4c2a84": {
        "api": {
            "title": "Jewelry Store Stealthy IV: Repeat Offender II",
            "desc": "Beat Jewelry Store 10 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62d0190c28fe1154bf4c2ad4": {
        "api": {
            "title": "Jewelry Store Stealthy IV: Repeat Offender III",
            "desc": "Beat Jewelry Store 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62d01a4f28fe1154bf4c2ad5": {
        "api": {
            "title": "Jewelry Store Stealthy IV: Repeat Offender IV",
            "desc": "Beat Jewelry Store 60 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8e003a74ddca83bcf3fa8": {
        "api": {
            "title": "Art Gallery Loud I: Repeat Offender I",
            "desc": "Beat Art Gallery 15 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8e1afa74ddca83bcf3fad": {
        "api": {
            "title": "Art Gallery Loud I: Repeat Offender II",
            "desc": "Beat Art Gallery 30 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8eaeca74ddca83bcf3fb7": {
        "api": {
            "title": "Art Gallery Loud I: Repeat Offender III",
            "desc": "Beat Art Gallery 60 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8ec64a74ddca83bcf3fb9": {
        "api": {
            "title": "Art Gallery Loud I: Repeat Offender IV",
            "desc": "Beat Art Gallery 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8ecfaa74ddca83bcf3fbb": {
        "api": {
            "title": "Art Gallery Loud II: Repeat Offender I",
            "desc": "Beat Art Gallery 10 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8ee0ea74ddca83bcf3fc1": {
        "api": {
            "title": "Art Gallery Loud II: Repeat Offender II",
            "desc": "Beat Art Gallery 20 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8f07ca74ddca83bcf3fcd": {
        "api": {
            "title": "Art Gallery Loud II: Repeat Offender III",
            "desc": "Beat Art Gallery 50 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8f11ba74ddca83bcf3fce": {
        "api": {
            "title": "Art Gallery Loud II: Repeat Offender IV",
            "desc": "Beat Art Gallery 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8f276a74ddca83bcf3fd7": {
        "api": {
            "title": "Art Gallery Loud III: Repeat Offender I",
            "desc": "Beat Art Gallery 5 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8f3f1a74ddca83bcf3fe1": {
        "api": {
            "title": "Art Gallery Loud III: Repeat Offender II",
            "desc": "Beat Art Gallery 15 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62e8f4c7a74ddca83bcf3fe2": {
        "api": {
            "title": "Art Gallery Loud III: Repeat Offender III",
            "desc": "Beat Art Gallery 40 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea42eaa74ddca83bcf4219": {
        "api": {
            "title": "Art Gallery Loud III: Repeat Offender IV",
            "desc": "Beat Art Gallery 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea43baa74ddca83bcf421a": {
        "api": {
            "title": "Art Gallery Loud IV: Repeat Offender I",
            "desc": "Beat Art Gallery 2 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea445ca74ddca83bcf421b": {
        "api": {
            "title": "Art Gallery Loud IV: Repeat Offender II",
            "desc": "Beat Art Gallery 10 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea450ba74ddca83bcf421c": {
        "api": {
            "title": "Art Gallery Loud IV: Repeat Offender III",
            "desc": "Beat Art Gallery 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea457aa74ddca83bcf421d": {
        "api": {
            "title": "Art Gallery Loud IV: Repeat Offender IV",
            "desc": "Beat Art Gallery 60 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea5819a74ddca83bcf4237": {
        "api": {
            "title": "Art Gallery Stealthy I: Repeat Offender I",
            "desc": "Beat Art Gallery 15 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea58e8a74ddca83bcf4238": {
        "api": {
            "title": "Art Gallery Stealthy I: Repeat Offender II",
            "desc": "Beat Art Gallery 30 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea5bfaa74ddca83bcf4247": {
        "api": {
            "title": "Art Gallery Stealthy I: Repeat Offender III",
            "desc": "Beat Art Gallery 60 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea5d78a74ddca83bcf427e": {
        "api": {
            "title": "Art Gallery Stealthy I: Repeat Offender IV",
            "desc": "Beat Art Gallery 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea5f3ba74ddca83bcf4283": {
        "api": {
            "title": "Art Gallery Stealthy II: Repeat Offender I",
            "desc": "Beat Art Gallery 10 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea5fd3a74ddca83bcf4284": {
        "api": {
            "title": "Art Gallery Stealthy II: Repeat Offender II",
            "desc": "Beat Art Gallery 20 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea60e7a74ddca83bcf4285": {
        "api": {
            "title": "Art Gallery Stealthy II: Repeat Offender III",
            "desc": "Beat Art Gallery 50 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea6181a74ddca83bcf4286": {
        "api": {
            "title": "Art Gallery Stealthy II: Repeat Offender IV",
            "desc": "Beat Art Gallery 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea7817a74ddca83bcf4498": {
        "api": {
            "title": "Art Gallery Stealthy III: Repeat Offender I",
            "desc": "Beat Art Gallery 5 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea78c1a74ddca83bcf4499": {
        "api": {
            "title": "Art Gallery Stealthy III: Repeat Offender II",
            "desc": "Beat Art Gallery 15 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea796da74ddca83bcf449a": {
        "api": {
            "title": "Art Gallery Stealthy III: Repeat Offender III",
            "desc": "Beat Art Gallery 40 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea7be9a74ddca83bcf44bf": {
        "api": {
            "title": "Art Gallery Stealthy III: Repeat Offender IV",
            "desc": "Beat Art Gallery 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea7ddfa74ddca83bcf45a2": {
        "api": {
            "title": "Art Gallery Stealthy IV: Repeat Offender I",
            "desc": "Beat Art Gallery 2 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea7e94a74ddca83bcf45a3": {
        "api": {
            "title": "Art Gallery Stealthy IV: Repeat Offender II",
            "desc": "Beat Art Gallery 10 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea7f18a74ddca83bcf45a4": {
        "api": {
            "title": "Art Gallery Stealthy IV: Repeat Offender III",
            "desc": "Beat Art Gallery 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ea7f97a74ddca83bcf45a5": {
        "api": {
            "title": "Art Gallery Stealthy IV: Repeat Offender IV",
            "desc": "Beat Art Gallery 60 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb7f61a74ddca83bcf49ad": {
        "api": {
            "title": "Branch Bank Loud I: Repeat Offender I",
            "desc": "Beat Branch Bank 15 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8002a74ddca83bcf49b1": {
        "api": {
            "title": "Branch Bank Loud I: Repeat Offender II",
            "desc": "Beat Branch Bank 30 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb80f0a74ddca83bcf49b2": {
        "api": {
            "title": "Branch Bank Loud I: Repeat Offender III",
            "desc": "Beat Branch Bank 60 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb81f1a74ddca83bcf49c6": {
        "api": {
            "title": "Branch Bank Loud I: Repeat Offender IV",
            "desc": "Beat Branch Bank 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb847da74ddca83bcf49eb": {
        "api": {
            "title": "Branch Bank Loud II: Repeat Offender I",
            "desc": "Beat Branch Bank 10 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb85b6a74ddca83bcf4a14": {
        "api": {
            "title": "Branch Bank Loud II: Repeat Offender II",
            "desc": "Beat Branch Bank 20 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb872aa74ddca83bcf4a3d": {
        "api": {
            "title": "Branch Bank Loud II: Repeat Offender III",
            "desc": "Beat Branch Bank 50 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8849a74ddca83bcf4a3e": {
        "api": {
            "title": "Branch Bank Loud II: Repeat Offender IV",
            "desc": "Beat Branch Bank 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb890ca74ddca83bcf4a3f": {
        "api": {
            "title": "Branch Bank Loud III: Repeat Offender I",
            "desc": "Beat Branch Bank 5 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8c11a74ddca83bcf4a5b": {
        "api": {
            "title": "Branch Bank Loud III: Repeat Offender II",
            "desc": "Beat Branch Bank 15 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8ce7a74ddca83bcf4a5d": {
        "api": {
            "title": "Branch Bank Loud III: Repeat Offender III",
            "desc": "Beat Branch Bank 40 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8d61a74ddca83bcf4a67": {
        "api": {
            "title": "Branch Bank Loud III: Repeat Offender IV",
            "desc": "Beat Branch Bank 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8e36a74ddca83bcf4a6f": {
        "api": {
            "title": "Branch Bank Loud IV: Repeat Offender I",
            "desc": "Beat Branch Bank 2 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8ee7a74ddca83bcf4a70": {
        "api": {
            "title": "Branch Bank Loud IV: Repeat Offender II",
            "desc": "Beat Branch Bank 10 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8f50a74ddca83bcf4a71": {
        "api": {
            "title": "Branch Bank Loud IV: Repeat Offender III",
            "desc": "Beat Branch Bank 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62eb8fbba74ddca83bcf4a77": {
        "api": {
            "title": "Branch Bank Loud IV: Repeat Offender IV",
            "desc": "Beat Branch Bank 60 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ed3486a74ddca83bcf565d": {
        "api": {
            "title": "Branch Bank Stealthy I: Repeat Offender I",
            "desc": "Beat Branch Bank 15 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ed3532a74ddca83bcf565e": {
        "api": {
            "title": "Branch Bank Stealthy I: Repeat Offender II",
            "desc": "Beat Branch Bank 30 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ed363ea74ddca83bcf565f": {
        "api": {
            "title": "Branch Bank Stealthy I: Repeat Offender III",
            "desc": "Beat Branch Bank 60 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ed3738a74ddca83bcf5666": {
        "api": {
            "title": "Branch Bank Stealthy I: Repeat Offender IV",
            "desc": "Beat Branch Bank 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ed3851a74ddca83bcf5673": {
        "api": {
            "title": "Branch Bank Stealthy II: Repeat Offender I",
            "desc": "Beat Branch Bank 10 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ed38cca74ddca83bcf5674": {
        "api": {
            "title": "Branch Bank Stealthy II: Repeat Offender II",
            "desc": "Beat Branch Bank 20 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62ed3ab0a74ddca83bcf5677": {
        "api": {
            "title": "Branch Bank Stealthy II: Repeat Offender III",
            "desc": "Beat Branch Bank 50 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f3a5a74ddca83bcf5b39": {
        "api": {
            "title": "Branch Bank Stealthy II: Repeat Offender IV",
            "desc": "Beat Branch Bank 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f449a74ddca83bcf5b3d": {
        "api": {
            "title": "Branch Bank Stealthy III: Repeat Offender I",
            "desc": "Beat Branch Bank 5 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f4fda74ddca83bcf5b49": {
        "api": {
            "title": "Branch Bank Stealthy III: Repeat Offender II",
            "desc": "Beat Branch Bank 15 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f5d4a74ddca83bcf5b53": {
        "api": {
            "title": "Branch Bank Stealthy III: Repeat Offender III",
            "desc": "Beat Branch Bank 40 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f6c1a74ddca83bcf5b55": {
        "api": {
            "title": "Branch Bank Stealthy III: Repeat Offender IV",
            "desc": "Beat Branch Bank 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f7b9a74ddca83bcf5b56": {
        "api": {
            "title": "Branch Bank Stealthy IV: Repeat Offender I",
            "desc": "Beat Branch Bank 2 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f8b0a74ddca83bcf5b61": {
        "api": {
            "title": "Branch Bank Stealthy IV: Repeat Offender II",
            "desc": "Beat Branch Bank 10 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f947a74ddca83bcf5b69": {
        "api": {
            "title": "Branch Bank Stealthy IV: Repeat Offender III",
            "desc": "Beat Branch Bank 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0f9c9a74ddca83bcf5b7a": {
        "api": {
            "title": "Branch Bank Stealthy IV: Repeat Offender IV",
            "desc": "Beat Branch Bank 60 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f0ffaaa74ddca83bcf5b84": {
        "api": {
            "title": "Sharke Bank (FP) Loud I: Repeat Offender I",
            "desc": "Beat Sharke Bank (FP) 15 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f10285a74ddca83bcf5b96": {
        "api": {
            "title": "Sharke Bank (FP) Loud I: Repeat Offender II",
            "desc": "Beat Sharke Bank (FP) 30 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f10361a74ddca83bcf5b97": {
        "api": {
            "title": "Sharke Bank (FP) Loud I: Repeat Offender III",
            "desc": "Beat Sharke Bank (FP) 60 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f10488a74ddca83bcf5ca9": {
        "api": {
            "title": "Sharke Bank (FP) Loud I: Repeat Offender IV",
            "desc": "Beat Sharke Bank (FP) 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f105aba74ddca83bcf5caa": {
        "api": {
            "title": "Sharke Bank (FP) Loud II: Repeat Offender I",
            "desc": "Beat Sharke Bank (FP) 10 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f1072ea74ddca83bcf5cab": {
        "api": {
            "title": "Sharke Bank (FP) Loud II: Repeat Offender II",
            "desc": "Beat Sharke Bank (FP) 20 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f107c5a74ddca83bcf5cbb": {
        "api": {
            "title": "Sharke Bank (FP) Loud II: Repeat Offender III",
            "desc": "Beat Sharke Bank (FP) 50 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f108e5a74ddca83bcf5ce2": {
        "api": {
            "title": "Sharke Bank (FP) Loud II: Repeat Offender IV",
            "desc": "Beat Sharke Bank (FP) 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f10aeda74ddca83bcf5cee": {
        "api": {
            "title": "Sharke Bank (FP) Loud III: Repeat Offender I",
            "desc": "Beat Sharke Bank (FP) 5 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f10ba6a74ddca83bcf5cef": {
        "api": {
            "title": "Sharke Bank (FP) Loud III: Repeat Offender II",
            "desc": "Beat Sharke Bank (FP) 15 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f10cc0a74ddca83bcf5cf0": {
        "api": {
            "title": "Sharke Bank (FP) Loud III: Repeat Offender III",
            "desc": "Beat Sharke Bank (FP) 40 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f10dfea74ddca83bcf5cf1": {
        "api": {
            "title": "Sharke Bank (FP) Loud III: Repeat Offender IV",
            "desc": "Beat Sharke Bank (FP) 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f134c2a74ddca83bcf5e99": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV: Repeat Offender I",
            "desc": "Beat Sharke Bank (FP) 2 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f1354ea74ddca83bcf5e9a": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV: Repeat Offender II",
            "desc": "Beat Sharke Bank (FP) 10 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f135e3a74ddca83bcf5e9d": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV: Repeat Offender III",
            "desc": "Beat Sharke Bank (FP) 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f13650a74ddca83bcf5e9e": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV: Repeat Offender IV",
            "desc": "Beat Sharke Bank (FP) 60 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f24e86a74ddca83bcf68b9": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I: Repeat Offender I",
            "desc": "Beat Sharke Bank (FP) 15 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f24fb5a74ddca83bcf68ba": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I: Repeat Offender II",
            "desc": "Beat Sharke Bank (FP) 30 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f250dea74ddca83bcf68bb": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I: Repeat Offender III",
            "desc": "Beat Sharke Bank (FP) 60 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f251b8a74ddca83bcf68c2": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I: Repeat Offender IV",
            "desc": "Beat Sharke Bank (FP) 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f25f57a74ddca83bcf68e1": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II: Repeat Offender I",
            "desc": "Beat Sharke Bank (FP) 10 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f2603ea74ddca83bcf68e8": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II: Repeat Offender II",
            "desc": "Beat Sharke Bank (FP) 20 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f260e6a74ddca83bcf68e9": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II: Repeat Offender III",
            "desc": "Beat Sharke Bank (FP) 50 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26185a74ddca83bcf68f1": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II: Repeat Offender IV",
            "desc": "Beat Sharke Bank (FP) 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26265a74ddca83bcf68f2": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III: Repeat Offender I",
            "desc": "Beat Sharke Bank (FP) 5 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f2633ea74ddca83bcf68f8": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III: Repeat Offender II",
            "desc": "Beat Sharke Bank (FP) 15 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f263f6a74ddca83bcf68f9": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III: Repeat Offender III",
            "desc": "Beat Sharke Bank (FP) 40 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26466a74ddca83bcf6925": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III: Repeat Offender IV",
            "desc": "Beat Sharke Bank (FP) 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26514a74ddca83bcf6935": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV: Repeat Offender I",
            "desc": "Beat Sharke Bank (FP) 2 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f265aba74ddca83bcf6936": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV: Repeat Offender II",
            "desc": "Beat Sharke Bank (FP) 10 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26630a74ddca83bcf6939": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV: Repeat Offender III",
            "desc": "Beat Sharke Bank (FP) 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f266f6a74ddca83bcf6948": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV: Repeat Offender IV",
            "desc": "Beat Sharke Bank (FP) 60 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26b96a74ddca83bcf6972": {
        "api": {
            "title": "Night Club Loud I: Repeat Offender I",
            "desc": "Beat Night Club 15 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26c43a74ddca83bcf6973": {
        "api": {
            "title": "Night Club Loud I: Repeat Offender II",
            "desc": "Beat Night Club 30 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26d91a74ddca83bcf6974": {
        "api": {
            "title": "Night Club Loud I: Repeat Offender III",
            "desc": "Beat Night Club 60 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f26ebda74ddca83bcf6987": {
        "api": {
            "title": "Night Club Loud I: Repeat Offender IV",
            "desc": "Beat Night Club 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4e542a74ddca83bcf73b3": {
        "api": {
            "title": "Night Club Loud II: Repeat Offender I",
            "desc": "Beat Night Club 10 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4e647a74ddca83bcf73b4": {
        "api": {
            "title": "Night Club Loud II: Repeat Offender II",
            "desc": "Beat Night Club 20 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4e734a74ddca83bcf73bb": {
        "api": {
            "title": "Night Club Loud II: Repeat Offender III",
            "desc": "Beat Night Club 50 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4e806a74ddca83bcf73bf": {
        "api": {
            "title": "Night Club Loud II: Repeat Offender IV",
            "desc": "Beat Night Club 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4eb1da74ddca83bcf73e9": {
        "api": {
            "title": "Night Club Loud III: Repeat Offender I",
            "desc": "Beat Night Club 5 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4ebada74ddca83bcf73eb": {
        "api": {
            "title": "Night Club Loud III: Repeat Offender II",
            "desc": "Beat Night Club 15 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4ec95a74ddca83bcf73ee": {
        "api": {
            "title": "Night Club Loud III: Repeat Offender III",
            "desc": "Beat Night Club 40 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4ed1da74ddca83bcf73f0": {
        "api": {
            "title": "Night Club Loud III: Repeat Offender IV",
            "desc": "Beat Night Club 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4ee48a74ddca83bcf73ff": {
        "api": {
            "title": "Night Club Loud IV: Repeat Offender I",
            "desc": "Beat Night Club 2 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4eefda74ddca83bcf7400": {
        "api": {
            "title": "Night Club Loud IV: Repeat Offender II",
            "desc": "Beat Night Club 10 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4ef6fa74ddca83bcf7401": {
        "api": {
            "title": "Night Club Loud IV: Repeat Offender III",
            "desc": "Beat Night Club 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4efd5a74ddca83bcf7402": {
        "api": {
            "title": "Night Club Loud IV: Repeat Offender IV",
            "desc": "Beat Night Club 60 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f0f6a74ddca83bcf7403": {
        "api": {
            "title": "Night Club Stealthy I: Repeat Offender I",
            "desc": "Beat Night Club 15 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f1c2a74ddca83bcf7411": {
        "api": {
            "title": "Night Club Stealthy I: Repeat Offender II",
            "desc": "Beat Night Club 30 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f35aa74ddca83bcf7412": {
        "api": {
            "title": "Night Club Stealthy I: Repeat Offender III",
            "desc": "Beat Night Club 60 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f3f0a74ddca83bcf7536": {
        "api": {
            "title": "Night Club Stealthy I: Repeat Offender IV",
            "desc": "Beat Night Club 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f4b9a74ddca83bcf7537": {
        "api": {
            "title": "Night Club Stealthy II: Repeat Offender I",
            "desc": "Beat Night Club 10 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f55aa74ddca83bcf7567": {
        "api": {
            "title": "Night Club Stealthy II: Repeat Offender II",
            "desc": "Beat Night Club 20 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f601a74ddca83bcf757a": {
        "api": {
            "title": "Night Club Stealthy II: Repeat Offender III",
            "desc": "Beat Night Club 50 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f67aa74ddca83bcf757b": {
        "api": {
            "title": "Night Club Stealthy II: Repeat Offender IV",
            "desc": "Beat Night Club 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f778a74ddca83bcf757c": {
        "api": {
            "title": "Night Club Stealthy III: Repeat Offender I",
            "desc": "Beat Night Club 5 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f7fea74ddca83bcf757d": {
        "api": {
            "title": "Night Club Stealthy III: Repeat Offender II",
            "desc": "Beat Night Club 15 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f873a74ddca83bcf7594": {
        "api": {
            "title": "Night Club Stealthy III: Repeat Offender III",
            "desc": "Beat Night Club 40 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4f8f2a74ddca83bcf7595": {
        "api": {
            "title": "Night Club Stealthy III: Repeat Offender IV",
            "desc": "Beat Night Club 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4fa0aa74ddca83bcf75b5": {
        "api": {
            "title": "Night Club Stealthy IV: Repeat Offender I",
            "desc": "Beat Night Club 2 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4fabca74ddca83bcf75e8": {
        "api": {
            "title": "Night Club Stealthy IV: Repeat Offender II",
            "desc": "Beat Night Club 10 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4fb2da74ddca83bcf75e9": {
        "api": {
            "title": "Night Club Stealthy IV: Repeat Offender III",
            "desc": "Beat Night Club 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "62f4fb93a74ddca83bcf7605": {
        "api": {
            "title": "Night Club Stealthy IV: Repeat Offender IV",
            "desc": "Beat Night Club 60 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632983f41db0ef9df33a6a10": {
        "api": {
            "title": "Infamy Gold MS 1",
            "desc": "Reach Infamy Level 4"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632984dd1db0ef9df33a6a13": {
        "api": {
            "title": "Infamy Gold MS 2",
            "desc": "Reach Infamy Level 14"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632985301db0ef9df33a6a15": {
        "api": {
            "title": "Infamy Gold MS 3",
            "desc": "Reach Infamy Level 21"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632985841db0ef9df33a6a19": {
        "api": {
            "title": "Infamy Gold MS 4",
            "desc": "Reach Infamy Level 34"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632985da1db0ef9df33a6a1a": {
        "api": {
            "title": "Infamy Gold MS 5",
            "desc": "Reach Infamy Level 46"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329863b1db0ef9df33a6a1b": {
        "api": {
            "title": "Infamy Gold MS 6",
            "desc": "Reach Infamy Level 52"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632986ba1db0ef9df33a6b59": {
        "api": {
            "title": "Infamy Gold MS 7",
            "desc": "Reach Infamy Level 58"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632987141db0ef9df33a6b5b": {
        "api": {
            "title": "Infamy Gold MS 8",
            "desc": "Reach Infamy Level 62"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632987e61db0ef9df33a6cc4": {
        "api": {
            "title": "Infamy Gold MS 9",
            "desc": "Reach Infamy Level 71"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329885e1db0ef9df33a6cc8": {
        "api": {
            "title": "Infamy Gold MS 10",
            "desc": "Reach Infamy Level 75"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632988cb1db0ef9df33a6cd4": {
        "api": {
            "title": "Infamy Gold MS 11",
            "desc": "Reach Infamy Level 84"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632989281db0ef9df33a6cd7": {
        "api": {
            "title": "Infamy Gold MS 12",
            "desc": "Reach Infamy Level 90"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329896e1db0ef9df33a6e41": {
        "api": {
            "title": "Infamy Gold MS 13",
            "desc": "Reach Infamy Level 99"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329a0d71db0ef9df33a741f": {
        "api": {
            "title": "Infamy Gold MS 14",
            "desc": "Reach Infamy Level 100"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329a14e1db0ef9df33a7423": {
        "api": {
            "title": "Infamy Gold MS 15",
            "desc": "Reach Infamy Level 101"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329a21a1db0ef9df33a7428": {
        "api": {
            "title": "Infamy Gold MS 16",
            "desc": "Reach Infamy Level 106"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329a2721db0ef9df33a745f": {
        "api": {
            "title": "Infamy Gold MS 17",
            "desc": "Reach Infamy Level 111"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329a2c71db0ef9df33a747b": {
        "api": {
            "title": "Infamy Gold MS 18",
            "desc": "Reach Infamy Level 117"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329c5521db0ef9df33a7a0b": {
        "api": {
            "title": "Infamy Gold MS 19",
            "desc": "Reach Infamy Level 123"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329c5bd1db0ef9df33a7a0c": {
        "api": {
            "title": "Infamy Gold MS 20",
            "desc": "Reach Infamy Level 127"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329c60c1db0ef9df33a7a0d": {
        "api": {
            "title": "Infamy Gold MS 21",
            "desc": "Reach Infamy Level 130"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329c66f1db0ef9df33a7a11": {
        "api": {
            "title": "Infamy Gold MS 22",
            "desc": "Reach Infamy Level 134"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329c6da1db0ef9df33a7a16": {
        "api": {
            "title": "Infamy Gold MS 23",
            "desc": "Reach Infamy Level 138"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329c7281db0ef9df33a7a1c": {
        "api": {
            "title": "Infamy Gold MS 24",
            "desc": "Reach Infamy Level 142"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329c7761db0ef9df33a7a2f": {
        "api": {
            "title": "Infamy Gold MS 25",
            "desc": "Reach Infamy Level 146"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6329c7d31db0ef9df33a7a4b": {
        "api": {
            "title": "Infamy Gold MS 26",
            "desc": "Reach Infamy Level 149"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "632d7d2d29db980df05a2e05": {
        "api": {
            "title": "Infamy MS - Placeable - Armor Bag",
            "desc": "Reach Infamy Level 2 to Unlock Armor Bag"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363b44c4e9e44b7cd7f1aa0": {
        "api": {
            "title": "Infamy MS - Throwable - Flashbang",
            "desc": "Reach Infamy Level 7 to unlock Flashbang"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363b58e4e9e44b7cd7f1b69": {
        "api": {
            "title": "Infamy MS - Throwable - Throwing Knife",
            "desc": "Reach Infamy Level 16 to unlock Throwing Knife"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363b61a4e9e44b7cd7f1b6a": {
        "api": {
            "title": "Infamy MS - Throwable - Smoke Grenade",
            "desc": "Reach Infamy Level 27 to unlock Smoke Grenade"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363b6754e9e44b7cd7f1bd2": {
        "api": {
            "title": "Skill Research MS - Placeable - Sentry Gun",
            "desc": "Research Engineer Skill Line"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363b8ae4e9e44b7cd7f1ca2": {
        "api": {
            "title": "Infamy MS - Armor - Suit Only",
            "desc": "Reach Infamy Level 18 to unlock Suit Only"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363b9a54e9e44b7cd7f1cda": {
        "api": {
            "title": "Infamy MS - Armor - Combat Vest",
            "desc": "Reach Infamy Level 8 to unlock Combat Vest"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363ba164e9e44b7cd7f1cdb": {
        "api": {
            "title": "Infamy MS - Armor - Heavy Ballistic Vest",
            "desc": "Reach Infamy Level 34 to unlock Heavy Ballistic Vest"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363ba854e9e44b7cd7f1d0f": {
        "api": {
            "title": "Infamy MS - Gadget - Stun Mine",
            "desc": "Reach Infamy Level 10 to unlock Stun Mine"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363baca4e9e44b7cd7f1d10": {
        "api": {
            "title": "Infamy MS - Gadget - ECM",
            "desc": "Reach Infamy Level 20 to unlock ECM"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6363bb034e9e44b7cd7f1d11": {
        "api": {
            "title": "Infamy MS - Gadget - Sensor",
            "desc": "Reach Infamy Level 30 to unlock Sensor"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "636518374e9e44b7cd7f8641": {
        "api": {
            "title": "Infamy MS - Overkill - HET5",
            "desc": "Reach Infamy Level 40 to unlock HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63762f0b29040c967e3e39d8": {
        "api": {
            "title": "Armored Transport Loud I",
            "desc": "Beat Armored Transport on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63762fd029040c967e3e3a05": {
        "api": {
            "title": "Armored Transport Loud II",
            "desc": "Beat Armored Transport on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63763a5b29040c967e3e4a1e": {
        "api": {
            "title": "Armored Transport Loud III",
            "desc": "Beat Armored Transport on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63763afe29040c967e3e4acf": {
        "api": {
            "title": "Armored Transport Loud IV",
            "desc": "Beat Armored Transport on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63763da629040c967e3e4e9e": {
        "api": {
            "title": "Armored Transport: Full Payout",
            "desc": "Escape with the maximum amount of bags"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63763e4e29040c967e3e51c7": {
        "api": {
            "title": "Armored Transport: On Your Feet",
            "desc": "Escape without being downed"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6376442829040c967e3e55f2": {
        "api": {
            "title": "Cargo Dock Loud I",
            "desc": "Beat Cargo Dock on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63774a3829040c967e3f0ccc": {
        "api": {
            "title": "Cargo Dock Loud II",
            "desc": "Beat Cargo Dock on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63774b8529040c967e3f0fe1": {
        "api": {
            "title": "Cargo Dock Loud III",
            "desc": "Beat Cargo Dock on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63774c1429040c967e3f10f7": {
        "api": {
            "title": "Cargo Dock Loud IV",
            "desc": "Beat Cargo Dock on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63774e4129040c967e3f123d": {
        "api": {
            "title": "Cargo Dock Stealthy I",
            "desc": "Beat Cargo Dock on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63775e0829040c967e3f2c15": {
        "api": {
            "title": "Cargo Dock Stealthy II",
            "desc": "Beat Cargo Dock on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63775e9329040c967e3f2ca0": {
        "api": {
            "title": "Cargo Dock Stealthy III",
            "desc": "Beat Cargo Dock on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63775f7629040c967e3f2db8": {
        "api": {
            "title": "Cargo Dock Stealthy IV",
            "desc": "Beat Cargo Dock on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6377603529040c967e3f2e77": {
        "api": {
            "title": "Cargo Dock: Full Payout",
            "desc": "Escape with the maximum amount of bags"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637761b929040c967e3f2ffb": {
        "api": {
            "title": "Cargo Dock: On Your Feet",
            "desc": "Escape without being downed after the assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779a3429040c967e3f6bfd": {
        "api": {
            "title": "Penthouse Loud I",
            "desc": "Beat Penthouse on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779a8d29040c967e3f6cba": {
        "api": {
            "title": "Penthouse Loud II",
            "desc": "Beat Penthouse on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779b1f29040c967e3f6da8": {
        "api": {
            "title": "Penthouse Loud III",
            "desc": "Beat Penthouse on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779b8429040c967e3f6e9c": {
        "api": {
            "title": "Penthouse Loud IV",
            "desc": "Beat Penthouse on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779c7129040c967e3f6fee": {
        "api": {
            "title": "Penthouse Stealthy I",
            "desc": "Beat Penthouse on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779cf429040c967e3f7083": {
        "api": {
            "title": "Penthouse Stealthy II",
            "desc": "Beat Penthouse on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779dc429040c967e3f7143": {
        "api": {
            "title": "Penthouse Stealthy III",
            "desc": "Beat Penthouse on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779e2e29040c967e3f7363": {
        "api": {
            "title": "Penthouse Stealthy IV",
            "desc": "Beat Penthouse on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779ea529040c967e3f7682": {
        "api": {
            "title": "Penthouse: Full Payout",
            "desc": "Escape with the maximum amount of bags"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63779ef929040c967e3f7891": {
        "api": {
            "title": "Penthouse: On Your Feet",
            "desc": "Escape without being downed after the assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6377b83e29040c967e3f99e0": {
        "api": {
            "title": "Headshot NWB9 I",
            "desc": "Defeat an enemy by headshot with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 DEADEYE I",
            "desc": "Defeat an enemy with a Headshot using the Northwest B-9."
        }
    },
    "6377b8b329040c967e3f99e1": {
        "api": {
            "title": "Headshot NWB9 II",
            "desc": "Defeat 10 enemies by headshot with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 DEADEYE II",
            "desc": "Defeat 10 enemies with a Headshot using the Northwest B-9."
        }
    },
    "6377b95e29040c967e3f99e2": {
        "api": {
            "title": "Headshot NWB9 III",
            "desc": "Defeat 30 enemies by headshot with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 DEADEYE III",
            "desc": "Defeat 30 enemies with a Headshot using the Northwest B-9."
        }
    },
    "6377b9a729040c967e3f9a14": {
        "api": {
            "title": "Headshot NWB9 IV",
            "desc": "Defeat 60 enemies by headshot with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 DEADEYE IV",
            "desc": "Defeat 60 enemies with a Headshot using the Northwest B-9."
        }
    },
    "637b71ed66148eeffe0e97e4": {
        "api": {
            "title": "Armored Transport Loud I: Repeat Offender I",
            "desc": "Beat Armored Transport 15 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637b9f9a66148eeffe0ed005": {
        "api": {
            "title": "Armored Transport Loud I: Repeat Offender II",
            "desc": "Beat Armored Transport 30 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637ba02966148eeffe0ed035": {
        "api": {
            "title": "Armored Transport Loud I: Repeat Offender III",
            "desc": "Beat Armored Transport 60 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637ba0b266148eeffe0ed0f6": {
        "api": {
            "title": "Armored Transport Loud I: Repeat Offender IV",
            "desc": "Beat Armored Transport 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637bbe0666148eeffe0ee9e5": {
        "api": {
            "title": "Armored Transport Loud II: Repeat Offender I",
            "desc": "Beat Armored Transport 10 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637bbe8666148eeffe0ee9e6": {
        "api": {
            "title": "Armored Transport Loud II: Repeat Offender II",
            "desc": "Beat Armored Transport 20 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637bbee766148eeffe0ee9e7": {
        "api": {
            "title": "Armored Transport Loud II: Repeat Offender III",
            "desc": "Beat Armored Transport 50 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637bbf7566148eeffe0ee9e8": {
        "api": {
            "title": "Armored Transport Loud II: Repeat Offender IV",
            "desc": "Beat Armored Transport 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cc3022bae6007875cd0b1": {
        "api": {
            "title": "Armored Transport Loud III: Repeat Offender I",
            "desc": "Beat Armored Transport 5 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cc3cc2bae6007875cd0b2": {
        "api": {
            "title": "Armored Transport Loud III: Repeat Offender II",
            "desc": "Beat Armored Transport 15 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cc7f52bae6007875cdc9d": {
        "api": {
            "title": "Armored Transport Loud III: Repeat Offender III",
            "desc": "Beat Armored Transport 40 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cd2b32bae6007875cf6fd": {
        "api": {
            "title": "Armored Transport Loud III: Repeat Offender IV",
            "desc": "Beat Armored Transport 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cd4182bae6007875cf9f4": {
        "api": {
            "title": "Armored Transport Loud IV: Repeat Offender I",
            "desc": "Beat Armored Transport 2 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cd6d02bae6007875d0341": {
        "api": {
            "title": "Armored Transport Loud IV: Repeat Offender II",
            "desc": "Beat Armored Transport 10 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cd8dd2bae6007875d0992": {
        "api": {
            "title": "Armored Transport Loud IV: Repeat Offender III",
            "desc": "Beat Armored Transport 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cd9882bae6007875d0a7e": {
        "api": {
            "title": "Armored Transport Loud IV: Repeat Offender IV",
            "desc": "Beat Armored Transport 60 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cdae12bae6007875d0e37": {
        "api": {
            "title": "Cargo Dock Loud I: Repeat Offender I",
            "desc": "Beat Cargo Dock 15 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cdb6e2bae6007875d1014": {
        "api": {
            "title": "Cargo Dock Loud I: Repeat Offender II",
            "desc": "Beat Cargo Dock 30 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637ce87e2bae6007875d2940": {
        "api": {
            "title": "Cargo Dock Loud I: Repeat Offender III",
            "desc": "Beat Cargo Dock 60 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637ce8fe2bae6007875d2a2d": {
        "api": {
            "title": "Cargo Dock Loud I: Repeat Offender IV",
            "desc": "Beat Cargo Dock 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cf7e52bae6007875d420a": {
        "api": {
            "title": "Cargo Dock Loud II: Repeat Offender I",
            "desc": "Beat Cargo Dock 10 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cf89c2bae6007875d423a": {
        "api": {
            "title": "Cargo Dock Loud II: Repeat Offender II",
            "desc": "Beat Cargo Dock 20 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cf9292bae6007875d432b": {
        "api": {
            "title": "Cargo Dock Loud II: Repeat Offender III",
            "desc": "Beat Cargo Dock 50 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cf9a62bae6007875d435b": {
        "api": {
            "title": "Cargo Dock Loud II: Repeat Offender IV",
            "desc": "Beat Cargo Dock 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cfdbd2bae6007875d4913": {
        "api": {
            "title": "Cargo Dock Loud III: Repeat Offender I",
            "desc": "Beat Cargo Dock 5 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cfe672bae6007875d49d0": {
        "api": {
            "title": "Cargo Dock Loud III: Repeat Offender II",
            "desc": "Beat Cargo Dock 15 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cfef62bae6007875d4a35": {
        "api": {
            "title": "Cargo Dock Loud III: Repeat Offender III",
            "desc": "Beat Cargo Dock 40 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "637cff752bae6007875d4ac5": {
        "api": {
            "title": "Cargo Dock Loud III: Repeat Offender IV",
            "desc": "Beat Cargo Dock 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63861ae52bae600787661fd6": {
        "api": {
            "title": "Cargo Dock Loud IV: Repeat Offender I",
            "desc": "Beat Cargo Dock 2 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63861b5e2bae6007876620c2": {
        "api": {
            "title": "Cargo Dock Loud IV: Repeat Offender II",
            "desc": "Beat Cargo Dock 10 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63861d1e2bae6007876627d8": {
        "api": {
            "title": "Cargo Dock Loud IV: Repeat Offender III",
            "desc": "Beat Cargo Dock 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63861d922bae60078766283b": {
        "api": {
            "title": "Cargo Dock Loud IV: Repeat Offender IV",
            "desc": "Beat Cargo Dock 60 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63861f702bae600787662a59": {
        "api": {
            "title": "Cargo Dock Stealthy I: Repeat Offender I",
            "desc": "Beat Cargo Dock 15 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6386204e2bae600787662d78": {
        "api": {
            "title": "Cargo Dock Stealthy I: Repeat Offender II",
            "desc": "Beat Cargo Dock 30 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6386211a2bae600787662e73": {
        "api": {
            "title": "Cargo Dock Stealthy I: Repeat Offender III",
            "desc": "Beat Cargo Dock 60 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638621aa2bae600787663167": {
        "api": {
            "title": "Cargo Dock Stealthy I: Repeat Offender IV",
            "desc": "Beat Cargo Dock 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638624422bae6007876638c1": {
        "api": {
            "title": "Cargo Dock Stealthy II: Repeat Offender I",
            "desc": "Beat Cargo Dock 10 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638720e62bae600787673414": {
        "api": {
            "title": "Cargo Dock Stealthy II: Repeat Offender II",
            "desc": "Beat Cargo Dock 20 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638721a12bae6007876735da": {
        "api": {
            "title": "Cargo Dock Stealthy II: Repeat Offender III",
            "desc": "Beat Cargo Dock 50 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638722612bae60078767392e": {
        "api": {
            "title": "Cargo Dock Stealthy II: Repeat Offender IV",
            "desc": "Beat Cargo Dock 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638722c42bae60078767398e": {
        "api": {
            "title": "Cargo Dock Stealthy III: Repeat Offender I",
            "desc": "Beat Cargo Dock 5 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638724db2bae600787673f2e": {
        "api": {
            "title": "Cargo Dock Stealthy III: Repeat Offender II",
            "desc": "Beat Cargo Dock 15 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6387255a2bae60078767405d": {
        "api": {
            "title": "Cargo Dock Stealthy III: Repeat Offender III",
            "desc": "Beat Cargo Dock 40 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638727c52bae600787674153": {
        "api": {
            "title": "Cargo Dock Stealthy III: Repeat Offender IV",
            "desc": "Beat Cargo Dock 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638728272bae600787674154": {
        "api": {
            "title": "Cargo Dock Stealthy IV: Repeat Offender I",
            "desc": "Beat Cargo Dock 2 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638728c92bae6007876742b5": {
        "api": {
            "title": "Cargo Dock Stealthy IV: Repeat Offender II",
            "desc": "Beat Cargo Dock 10 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6387295d2bae60078767431c": {
        "api": {
            "title": "Cargo Dock Stealthy IV: Repeat Offender III",
            "desc": "Beat Cargo Dock 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638729eb2bae600787674656": {
        "api": {
            "title": "Cargo Dock Stealthy IV: Repeat Offender IV",
            "desc": "Beat Cargo Dock 60 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63872c672bae600787674a6c": {
        "api": {
            "title": "Penthouse Loud I: Repeat Offender I",
            "desc": "Beat Penthouse 15 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63872ceb2bae600787674d86": {
        "api": {
            "title": "Penthouse Loud I: Repeat Offender II",
            "desc": "Beat Penthouse 30 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63872e112bae600787674fff": {
        "api": {
            "title": "Penthouse Loud I: Repeat Offender III",
            "desc": "Beat Penthouse 60 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63872eca2bae600787675134": {
        "api": {
            "title": "Penthouse Loud I: Repeat Offender IV",
            "desc": "Beat Penthouse 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63872f742bae600787675165": {
        "api": {
            "title": "Penthouse Loud II: Repeat Offender I",
            "desc": "Beat Penthouse 10 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63874a1fce9f3b5ae57ddcc6": {
        "api": {
            "title": "Penthouse Loud II: Repeat Offender II",
            "desc": "Beat Penthouse 20 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63874ab2ce9f3b5ae57ddde1": {
        "api": {
            "title": "Penthouse Loud II: Repeat Offender III",
            "desc": "Beat Penthouse 50 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63874bacce9f3b5ae57de0e6": {
        "api": {
            "title": "Penthouse Loud II: Repeat Offender IV",
            "desc": "Beat Penthouse 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63874fbdce9f3b5ae57de812": {
        "api": {
            "title": "Penthouse Loud III: Repeat Offender I",
            "desc": "Beat Penthouse 5 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63875031ce9f3b5ae57dea2d": {
        "api": {
            "title": "Penthouse Loud III: Repeat Offender II",
            "desc": "Beat Penthouse 15 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638750b3ce9f3b5ae57ded07": {
        "api": {
            "title": "Penthouse Loud III: Repeat Offender III",
            "desc": "Beat Penthouse 40 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63875161ce9f3b5ae57df0b4": {
        "api": {
            "title": "Penthouse Loud III: Repeat Offender IV",
            "desc": "Beat Penthouse 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638752f5ce9f3b5ae57df1de": {
        "api": {
            "title": "Penthouse Loud IV: Repeat Offender I",
            "desc": "Beat Penthouse 2 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6387535ace9f3b5ae57df23d": {
        "api": {
            "title": "Penthouse Loud IV: Repeat Offender II",
            "desc": "Beat Penthouse 10 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638753c7ce9f3b5ae57df365": {
        "api": {
            "title": "Penthouse Loud IV: Repeat Offender III",
            "desc": "Beat Penthouse 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63875434ce9f3b5ae57df452": {
        "api": {
            "title": "Penthouse Loud IV: Repeat Offender IV",
            "desc": "Beat Penthouse 60 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63875547ce9f3b5ae57df638": {
        "api": {
            "title": "Penthouse Stealthy I: Repeat Offender I",
            "desc": "Beat Penthouse 15 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638756e5ce9f3b5ae57df8c8": {
        "api": {
            "title": "Penthouse Stealthy I: Repeat Offender II",
            "desc": "Beat Penthouse 30 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63876abf1c49e9669d114213": {
        "api": {
            "title": "Penthouse Stealthy I: Repeat Offender III",
            "desc": "Beat Penthouse 60 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63876b441c49e9669d114272": {
        "api": {
            "title": "Penthouse Stealthy I: Repeat Offender IV",
            "desc": "Beat Penthouse 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63876bc91c49e9669d114363": {
        "api": {
            "title": "Penthouse Stealthy II: Repeat Offender I",
            "desc": "Beat Penthouse 10 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63876c451c49e9669d114428": {
        "api": {
            "title": "Penthouse Stealthy II: Repeat Offender II",
            "desc": "Beat Penthouse 20 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63876cbc1c49e9669d114429": {
        "api": {
            "title": "Penthouse Stealthy II: Repeat Offender III",
            "desc": "Beat Penthouse 50 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63876d321c49e9669d114559": {
        "api": {
            "title": "Penthouse Stealthy II: Repeat Offender IV",
            "desc": "Beat Penthouse 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638db3429248292658eaf4c4": {
        "api": {
            "title": "Penthouse Stealthy III: Repeat Offender I",
            "desc": "Beat Penthouse 5 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638db3ba9248292658eaf581": {
        "api": {
            "title": "Penthouse Stealthy III: Repeat Offender II",
            "desc": "Beat Penthouse 15 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638db6489248292658eaf868": {
        "api": {
            "title": "Penthouse Stealthy III: Repeat Offender III",
            "desc": "Beat Penthouse 40 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638db7179248292658eaf8cb": {
        "api": {
            "title": "Penthouse Stealthy III: Repeat Offender IV",
            "desc": "Beat Penthouse 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638dbc8f9248292658eb0587": {
        "api": {
            "title": "Penthouse Stealthy IV: Repeat Offender I",
            "desc": "Beat Penthouse 2 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638dbd759248292658eb09f4": {
        "api": {
            "title": "Penthouse Stealthy IV: Repeat Offender II",
            "desc": "Beat Penthouse 10 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638dbe099248292658eb0a8c": {
        "api": {
            "title": "Penthouse Stealthy IV: Repeat Offender III",
            "desc": "Beat Penthouse 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "638dbe5d9248292658eb0e83": {
        "api": {
            "title": "Penthouse Stealthy IV: Repeat Offender IV",
            "desc": "Beat Penthouse 60 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce7dcb7f0dd5f341f2dfb3": {
        "api": {
            "title": "Master of Unlocking I",
            "desc": "Pick a locked door."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce7e4e7f0dd5f341f2e044": {
        "api": {
            "title": "Master of Unlocking II",
            "desc": "Pick 20 locked doors."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce7ebc7f0dd5f341f2e0a7": {
        "api": {
            "title": "Master of Unlocking III",
            "desc": "Pick 50 locked doors."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce7f907f0dd5f341f2e0a8": {
        "api": {
            "title": "Master of Unlocking IV",
            "desc": "Pick 100 locked doors."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce801f7f0dd5f341f2e10f": {
        "api": {
            "title": "Master of Unlocking V",
            "desc": "Pick 300 locked doors."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce81aa7f0dd5f341f2e213": {
        "api": {
            "title": "I'm In I",
            "desc": "Hack a device."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce82187f0dd5f341f2e4b5": {
        "api": {
            "title": "I'm In II",
            "desc": "Hack 20 devices."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce826a7f0dd5f341f2e4b6": {
        "api": {
            "title": "I'm In III",
            "desc": "Hack 50 devices."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce82ca7f0dd5f341f2e4b7": {
        "api": {
            "title": "I'm In IV",
            "desc": "Hack 100 devices."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce83a17f0dd5f341f2e4ec": {
        "api": {
            "title": "I'm In V",
            "desc": "Hack 300 devices."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce99657f0dd5f341f2f912": {
        "api": {
            "title": "I Want a Pizza I",
            "desc": "Trade a hostage."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce99be7f0dd5f341f2f913": {
        "api": {
            "title": "I Want a Pizza II",
            "desc": "Trade 10 hostages."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9ae97f0dd5f341f2f9e0": {
        "api": {
            "title": "I Want a Pizza III",
            "desc": "Trade 30 hostages."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9b2c7f0dd5f341f2f9e1": {
        "api": {
            "title": "I Want a Pizza IV",
            "desc": "Trade 60 hostages."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9bb27f0dd5f341f2fa17": {
        "api": {
            "title": "I Want a Pizza V",
            "desc": "Trade 100 hostages."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9ccf7f0dd5f341f2fa4c": {
        "api": {
            "title": "Like a Hot Knife I",
            "desc": "Cut a glass panel."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9d4c7f0dd5f341f2fa4d": {
        "api": {
            "title": "Like a Hot Knife II",
            "desc": "Cut 20 glass panels."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9d9c7f0dd5f341f2fa4e": {
        "api": {
            "title": "Like a Hot Knife III",
            "desc": "Cut 50 glass panels."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9de07f0dd5f341f2fa89": {
        "api": {
            "title": "Like a Hot Knife IV",
            "desc": "Cut 100 glass panels."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9e147f0dd5f341f2fac1": {
        "api": {
            "title": "Like a Hot Knife V",
            "desc": "Cut 300 glass panels."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9fc17f0dd5f341f2fbe2": {
        "api": {
            "title": "Pics or it didn't happen I",
            "desc": "Place a Micro Camera."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ce9ffa7f0dd5f341f2fc2b": {
        "api": {
            "title": "Pics or it didn't happen II",
            "desc": "Place 20 Micro Cameras."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea0377f0dd5f341f2fc2c": {
        "api": {
            "title": "Pics or it didn't happen III",
            "desc": "Place 50 Micro Cameras."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea0747f0dd5f341f2fc2d": {
        "api": {
            "title": "Pics or it didn't happen IV",
            "desc": "Place 100 Micro Cameras."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea1487f0dd5f341f2fc6f": {
        "api": {
            "title": "Pics or it didn't happen V",
            "desc": "Place 300 Micro Cameras."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea3ea7f0dd5f341f2fe24": {
        "api": {
            "title": "Surveillance I",
            "desc": "Mark a Security Camera."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea4347f0dd5f341f2fe5a": {
        "api": {
            "title": "Surveillance II",
            "desc": "Mark 50 different Security Cameras."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea46e7f0dd5f341f2fea0": {
        "api": {
            "title": "Surveillance III",
            "desc": "Mark 150 different Security Cameras."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea4b27f0dd5f341f2fea1": {
        "api": {
            "title": "Surveillance IV",
            "desc": "Mark 300 different Security Cameras."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea4ed7f0dd5f341f2fea2": {
        "api": {
            "title": "Surveillance V",
            "desc": "Mark 500 different Security Cameras."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea6627f0dd5f341f2ffec": {
        "api": {
            "title": "Patrol I",
            "desc": "Mark a Security Guard."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea6a87f0dd5f341f30023": {
        "api": {
            "title": "Patrol II",
            "desc": "Mark 50 different Security Guards."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea6d87f0dd5f341f300b5": {
        "api": {
            "title": "Patrol III",
            "desc": "Mark 150 different Security Guards."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea7177f0dd5f341f30128": {
        "api": {
            "title": "Patrol IV",
            "desc": "Mark 300 different Security Guards."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cea74f7f0dd5f341f30129": {
        "api": {
            "title": "Patrol V",
            "desc": "Mark 500 different Security Guards."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceaa417f0dd5f341f303b0": {
        "api": {
            "title": "XRay Vision I",
            "desc": "Mark a guard or law enforcement using the Sensor."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceaa857f0dd5f341f303b1": {
        "api": {
            "title": "XRay Vision II",
            "desc": "Mark 20 different guards or law enforcement using the Sensor."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceaabc7f0dd5f341f303b2": {
        "api": {
            "title": "XRay Vision III",
            "desc": "Mark 50 different guards or law enforcement using the Sensor."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceab0c7f0dd5f341f30405": {
        "api": {
            "title": "XRay Vision IV",
            "desc": "Mark 100 different guards or law enforcement using the Sensor."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceab6f7f0dd5f341f304e6": {
        "api": {
            "title": "XRay Vision V",
            "desc": "Mark 300 different guards or law enforcement using the Sensor."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceada17f0dd5f341f3053b": {
        "api": {
            "title": "Break the Glass I",
            "desc": "Break 5 different display cases."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceaddb7f0dd5f341f30575": {
        "api": {
            "title": "Break the Glass II",
            "desc": "Break 20 different display cases"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceae377f0dd5f341f30576": {
        "api": {
            "title": "Break the Glass III",
            "desc": "Break 100 different display cases."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceae6a7f0dd5f341f30577": {
        "api": {
            "title": "Break the Glass IV",
            "desc": "Break 250 different display cases."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceaec37f0dd5f341f3062a": {
        "api": {
            "title": "Break the Glass V",
            "desc": "Break 500 different display cases."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb05d7f0dd5f341f307cc": {
        "api": {
            "title": "Rush through Door I",
            "desc": "Sprint through 5 different doors."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb0907f0dd5f341f307cd": {
        "api": {
            "title": "Rush through Door II",
            "desc": "Sprint through 20 different doors."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb0ca7f0dd5f341f307ce": {
        "api": {
            "title": "Rush through Door III",
            "desc": "Sprint through 50 different doors"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb1137f0dd5f341f307cf": {
        "api": {
            "title": "Rush through Door IV",
            "desc": "Sprint through 100 different doors"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb1467f0dd5f341f307d0": {
        "api": {
            "title": "Rush through Door V",
            "desc": "Sprint through 250 different doors"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb3957f0dd5f341f308dd": {
        "api": {
            "title": "Stunner I",
            "desc": "Stun 5 different enemies."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb3ca7f0dd5f341f308de": {
        "api": {
            "title": "Stunner II",
            "desc": "Stun 15 different enemies."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb3fe7f0dd5f341f30926": {
        "api": {
            "title": "Stunner III",
            "desc": "Stun 30 different enemies."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb42e7f0dd5f341f30927": {
        "api": {
            "title": "Stunner IV",
            "desc": "Stun 50 different enemies."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb4577f0dd5f341f30928": {
        "api": {
            "title": "Stunner V",
            "desc": "Stun 75 different enemies."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb4ea7f0dd5f341f30929": {
        "api": {
            "title": "ECM I",
            "desc": "Use 5 ECMs"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb5387f0dd5f341f3092a": {
        "api": {
            "title": "ECM II",
            "desc": "Use 15 ECMs"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb5747f0dd5f341f3092b": {
        "api": {
            "title": "ECM III",
            "desc": "Use 30 ECMs."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb5a87f0dd5f341f309a7": {
        "api": {
            "title": "ECM IV",
            "desc": "Use 50 ECMs."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ceb5dc7f0dd5f341f309a8": {
        "api": {
            "title": "ECM V",
            "desc": "Use 75 ECMs."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfa5ed7f0dd5f341f36765": {
        "api": {
            "title": "De-Cloaker I",
            "desc": "Save a crewmate from a Cloaker."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfa6357f0dd5f341f367db": {
        "api": {
            "title": "De-Cloaker II",
            "desc": "Save a crewmate from a Cloaker 10 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfa6e37f0dd5f341f367dc": {
        "api": {
            "title": "De-Cloaker III",
            "desc": "Save a crewmate from a Cloaker 30 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfa73c7f0dd5f341f3685e": {
        "api": {
            "title": "De-Cloaker IV",
            "desc": "Save a crewmate from a Cloaker 60 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfa8ce7f0dd5f341f36d27": {
        "api": {
            "title": "Slideshow I",
            "desc": "Slide a total distance of 100 meters."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfa9147f0dd5f341f36d68": {
        "api": {
            "title": "Slideshow II",
            "desc": "Slide a total distance of 500 meters."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfa94c7f0dd5f341f36e30": {
        "api": {
            "title": "Slideshow III",
            "desc": "Slide a total distance of 1000 meters."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfa9837f0dd5f341f36eb8": {
        "api": {
            "title": "Slideshow IV",
            "desc": "Slide a total distance of 5000 meters."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfaa7f7f0dd5f341f3700f": {
        "api": {
            "title": "Slideshow Shooter I",
            "desc": "Defeat an enemy while sliding"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfaaa77f0dd5f341f37010": {
        "api": {
            "title": "Armored Transport Loud I: Repeat Offender V",
            "desc": "Beat Armored Transport 80 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfaabf7f0dd5f341f37011": {
        "api": {
            "title": "Slideshow Shooter II",
            "desc": "Defeat 10 enemies while sliding"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfaaf67f0dd5f341f37012": {
        "api": {
            "title": "Slideshow Shooter III",
            "desc": "Defeat 50 enemies while sliding"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfab327f0dd5f341f37013": {
        "api": {
            "title": "Slideshow Shooter IV",
            "desc": "Defeat 100 enemies while sliding"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfbe617f0dd5f341f3937e": {
        "api": {
            "title": "Triage I",
            "desc": "Deploy a Medic bag."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfbe997f0dd5f341f3937f": {
        "api": {
            "title": "Triage II",
            "desc": "Deploy 10 Medic bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfbee07f0dd5f341f39380": {
        "api": {
            "title": "Triage III",
            "desc": "Deploy 50 Medic bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfbf3a7f0dd5f341f393ce": {
        "api": {
            "title": "Triage IV",
            "desc": "Deploy 100 Medic bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfc0257f0dd5f341f393cf": {
        "api": {
            "title": "Full Metal Jacket I",
            "desc": "Deploy an Armor bag."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfc0657f0dd5f341f393d0": {
        "api": {
            "title": "Full Metal Jacket II",
            "desc": "Deploy 10 Armor bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfc0a37f0dd5f341f39426": {
        "api": {
            "title": "Full Metal Jacket III",
            "desc": "Deploy 50 Armor bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfc0e37f0dd5f341f39478": {
        "api": {
            "title": "Full Metal Jacket IV",
            "desc": "Deploy 100 Armor bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfd4487f0dd5f341f3a3bd": {
        "api": {
            "title": "Armored Transport Loud I: Repeat Offender VI",
            "desc": "Beat Armored Transport 100 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfd73b7f0dd5f341f3a4ce": {
        "api": {
            "title": "Firepower I",
            "desc": "Deploy an Ammo Bag."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfd7727f0dd5f341f3a4cf": {
        "api": {
            "title": "Firepower II",
            "desc": "Deploy 10 Ammo Bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfd7ad7f0dd5f341f3a517": {
        "api": {
            "title": "Firepower III",
            "desc": "Deploy 50 Ammo Bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfd7de7f0dd5f341f3a55f": {
        "api": {
            "title": "Firepower IV",
            "desc": "Deploy 100 Ammo Bags."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfd9c97f0dd5f341f3a7fe": {
        "api": {
            "title": "Autokill I",
            "desc": "Deploy a Sentry Turret."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfda117f0dd5f341f3aa75": {
        "api": {
            "title": "Autokill II",
            "desc": "Defeat 30 enemies with a Sentry Turret."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfda517f0dd5f341f3aa76": {
        "api": {
            "title": "Autokill III",
            "desc": "Defeat 70 enemies with a Sentry Turret."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfda817f0dd5f341f3aac4": {
        "api": {
            "title": "Autokill IV",
            "desc": "Defeat 120 enemies with a Sentry Turret."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdaf67f0dd5f341f3aba8": {
        "api": {
            "title": "Armored Transport Loud I: Repeat Offender VII",
            "desc": "Beat Armored Transport 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdbbc7f0dd5f341f3aeb0": {
        "api": {
            "title": "Armored Transport Loud I: Repeat Offender VIII",
            "desc": "Beat Armored Transport 150 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdc267f0dd5f341f3afdd": {
        "api": {
            "title": "Keep Your Friends Close I",
            "desc": "Use human shields for a total of 60 seconds during an Assault."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdc6a7f0dd5f341f3b07f": {
        "api": {
            "title": "Keep Your Friends Close II",
            "desc": "Use human shields for a total of 240 seconds during an Assault."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdcb17f0dd5f341f3b080": {
        "api": {
            "title": "Keep Your Friends Close III",
            "desc": "Use human shields for a total of 480 seconds during an Assault."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdcec7f0dd5f341f3b081": {
        "api": {
            "title": "Keep Your Friends Close IV",
            "desc": "Use human shields for a total of 720 seconds during an Assault."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdda97f0dd5f341f3b233": {
        "api": {
            "title": "Human Shield Killer I",
            "desc": "Defeat an enemy while using a human shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfde057f0dd5f341f3b27c": {
        "api": {
            "title": "Human Shield Killer II",
            "desc": "Defeat 10 enemies while using a human shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfde437f0dd5f341f3b2ca": {
        "api": {
            "title": "Human Shield Killer III",
            "desc": "Defeat 50 enemies while using a human shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfde867f0dd5f341f3b2cb": {
        "api": {
            "title": "Human Shield Killer IV",
            "desc": "Defeat 100 enemies while using a human shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdf567f0dd5f341f3b376": {
        "api": {
            "title": "Human Shield Helmet I",
            "desc": "Defeat an enemy with a headshot while using a human shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdf967f0dd5f341f3b3c2": {
        "api": {
            "title": "Human Shield Helmet II",
            "desc": "Defeat 10 enemies with a headshot while using a human shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfdfd67f0dd5f341f3b40b": {
        "api": {
            "title": "Human Shield Helmet III",
            "desc": "Defeat 50 enemies with a headshot while using a human shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe0267f0dd5f341f3b4ac": {
        "api": {
            "title": "Human Shield Helmet IV",
            "desc": "Defeat 100 enemies with a headshot while using a human shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe34c7f0dd5f341f3b702": {
        "api": {
            "title": "Electroshock Therapy I",
            "desc": "Destroy a Zapper battery."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe3d47f0dd5f341f3b80b": {
        "api": {
            "title": "Electroshock Therapy II",
            "desc": "Destroy 10 Zapper batteries."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe44d7f0dd5f341f3b869": {
        "api": {
            "title": "Electroshock Therapy III",
            "desc": "Destroy 50 Zapper batteries"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe4897f0dd5f341f3b86a": {
        "api": {
            "title": "Electroshock Therapy IV",
            "desc": "Destroy 100 Zapper batteries."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe7977f0dd5f341f3c218": {
        "api": {
            "title": "Earthed I",
            "desc": "Save a crewmate from a Zapper."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe7d17f0dd5f341f3c219": {
        "api": {
            "title": "Earthed II",
            "desc": "Save a crewmate from a Zapper 10 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe8107f0dd5f341f3c4ad": {
        "api": {
            "title": "Earthed III",
            "desc": "Save a crewmate from a Zapper 30 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe8417f0dd5f341f3c790": {
        "api": {
            "title": "Earthed IV",
            "desc": "Save a crewmate from a Zapper 60 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe95c7f0dd5f341f3d514": {
        "api": {
            "title": "Saviour I",
            "desc": "Revive a crewmate."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe9c17f0dd5f341f3d515": {
        "api": {
            "title": "Saviour II",
            "desc": "Revive a crewmate 10 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfe9f77f0dd5f341f3d574": {
        "api": {
            "title": "Saviour III",
            "desc": "Revive a crewmate 30 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfea2d7f0dd5f341f3d5c8": {
        "api": {
            "title": "Saviour IV",
            "desc": "Revive a crewmate 60 times."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfebfc7f0dd5f341f3e411": {
        "api": {
            "title": "Pineapple I",
            "desc": "Defeat an enemy with a frag grenade."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfec397f0dd5f341f3e4cd": {
        "api": {
            "title": "Pineapple II",
            "desc": "Defeat 20 enemies with frag grenades."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfec737f0dd5f341f3e4ce": {
        "api": {
            "title": "Pineapple III",
            "desc": "Defeat 50 enemies with frag grenades."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfecb87f0dd5f341f3ef4b": {
        "api": {
            "title": "Pineapple IV",
            "desc": "Defeat 100 enemies with frag grenades."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfed317f0dd5f341f3f0fa": {
        "api": {
            "title": "Senseless I",
            "desc": "Affect an enemy with a flash bang."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfed797f0dd5f341f3f0fb": {
        "api": {
            "title": "Senseless II",
            "desc": "Affect 20 different enemies with flash bangs."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfedb57f0dd5f341f3f0fc": {
        "api": {
            "title": "Senseless III",
            "desc": "Affect 50 different enemies with flash bangs."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfedfb7f0dd5f341f3f411": {
        "api": {
            "title": "Senseless IV",
            "desc": "Affect 100 different enemies with flash bangs."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfef527f0dd5f341f40031": {
        "api": {
            "title": "Tactical Detonation I",
            "desc": "Shoot a grenade belt on a Nader."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfef9a7f0dd5f341f40032": {
        "api": {
            "title": "Tactical Detonation II",
            "desc": "Shoot 10 grenade belts on Naders."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cfefe97f0dd5f341f40033": {
        "api": {
            "title": "Tactical Detonation III",
            "desc": "Shoot 30 grenade belts on Naders."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff0297f0dd5f341f40098": {
        "api": {
            "title": "Tactical Detonation IV",
            "desc": "Shoot 60 grenade belts on Naders."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff0a47f0dd5f341f40c7c": {
        "api": {
            "title": "Facelift I",
            "desc": "Shoot off a Dozer faceplate."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff0f27f0dd5f341f40cd0": {
        "api": {
            "title": "Facelift II",
            "desc": "Shoot off 10 Dozer faceplates."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff14e7f0dd5f341f40cd1": {
        "api": {
            "title": "Facelift III",
            "desc": "Shoot off 30 Dozer faceplates."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff17a7f0dd5f341f40cd2": {
        "api": {
            "title": "Facelift IV",
            "desc": "Shoot off 60 Dozer faceplates."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff20f7f0dd5f341f40d41": {
        "api": {
            "title": "Shoot the Shield I",
            "desc": "Break the glass on an enemy Riot Shield."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff2537f0dd5f341f40d42": {
        "api": {
            "title": "Shoot the Shield II",
            "desc": "Break the glass on 10 enemy Riot Shields."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff2977f0dd5f341f41813": {
        "api": {
            "title": "Shoot the Shield III",
            "desc": "Break the glass on 30 enemy Riot Shields."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff2c77f0dd5f341f41814": {
        "api": {
            "title": "Shoot the Shield IV",
            "desc": "Break the glass on 60 enemy Riot Shields."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff36c7f0dd5f341f41962": {
        "api": {
            "title": "Smoking Ban I",
            "desc": "Affect an enemy with a Smoke Grenade"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff3a37f0dd5f341f41963": {
        "api": {
            "title": "Smoking Ban II",
            "desc": "Affect 10 different enemies with Smoke Grenades."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff3fd7f0dd5f341f41a4f": {
        "api": {
            "title": "Smoking Ban III",
            "desc": "Affect 50 different enemies with Smoke Grenades."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff43c7f0dd5f341f41ba8": {
        "api": {
            "title": "Smoking Ban IV",
            "desc": "Affect 100 different enemies with Smoke Grenades."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff4dd7f0dd5f341f41d11": {
        "api": {
            "title": "Shanked I",
            "desc": "Defeat an enemy with a Throwing Knife."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff5227f0dd5f341f41d12": {
        "api": {
            "title": "Shanked II",
            "desc": "Defeat 10 enemies with a Throwing Knife."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff55b7f0dd5f341f41d95": {
        "api": {
            "title": "Shanked III",
            "desc": "Defeat 50 enemies with a Throwing Knife."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff59f7f0dd5f341f42954": {
        "api": {
            "title": "Shanked IV",
            "desc": "Defeat 100 enemies with a Throwing Knife."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff6087f0dd5f341f42955": {
        "api": {
            "title": "Just in Time I",
            "desc": "Defeat a guard while he is detecting you."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff6407f0dd5f341f42a48": {
        "api": {
            "title": "Just in Time II",
            "desc": "Defeat 10 guards while they are detecting you."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff6887f0dd5f341f42c30": {
        "api": {
            "title": "Just in Time III",
            "desc": "Defeat 30 guards while they are detecting you."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63cff6c97f0dd5f341f42cb7": {
        "api": {
            "title": "Just in Time IV",
            "desc": "Defeat 60 guards while they are detecting you."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d1498b7f0dd5f341f88d03": {
        "api": {
            "title": "Headshot VF7S I",
            "desc": "Defeat an enemy by headshot with the VF7S"
        },
        "game": {
            "title": "VF-7S DEADEYE I",
            "desc": "Defeat an enemy with a Headshot using the VF-7S."
        }
    },
    "63d149d97f0dd5f341f88d5c": {
        "api": {
            "title": "Headshot VF7S II",
            "desc": "Defeat 10 enemies with a headshot with the VF-7S."
        },
        "game": {
            "title": "VF-7S DEADEYE II",
            "desc": "Defeat 10 enemies with a Headshot using the VF-7S."
        }
    },
    "63d14a187f0dd5f341f88d5d": {
        "api": {
            "title": "Headshot VF7S III",
            "desc": "Defeat 30 enemies by headshot with the VF7S."
        },
        "game": {
            "title": "VF-7S DEADEYE III",
            "desc": "Defeat 30 enemies with a Headshot using the VF-7S."
        }
    },
    "63d14a667f0dd5f341f8907b": {
        "api": {
            "title": "Headshot VF7S IV",
            "desc": "Defeat 60 enemies by headshot with the VF7S."
        },
        "game": {
            "title": "VF-7S DEADEYE IV",
            "desc": "Defeat 60 enemies with a Headshot using the VF-7S."
        }
    },
    "63d14bbd7f0dd5f341f8939b": {
        "api": {
            "title": "Headshot KU59 I",
            "desc": "Defeat an enemy by headshot with the KU59."
        },
        "game": {
            "title": "KU-59 DEADEYE I",
            "desc": "Defeat an enemy with a Headshot using the KU-59."
        }
    },
    "63d14c457f0dd5f341f894b3": {
        "api": {
            "title": "Headshot KU59 II",
            "desc": "Defeat 10 enemies by headshot with the KU59."
        },
        "game": {
            "title": "KU-59 DEADEYE II",
            "desc": "Defeat 10 enemies with a Headshot using the KU-59."
        }
    },
    "63d14d4b7f0dd5f341f89629": {
        "api": {
            "title": "Headshot KU59 III",
            "desc": "Defeat 30 enemies by headshot with the KU59."
        },
        "game": {
            "title": "KU-59 DEADEYE III",
            "desc": "Defeat 30 enemies with a Headshot using the KU-59."
        }
    },
    "63d14d9b7f0dd5f341f8972b": {
        "api": {
            "title": "Headshot KU59 IV",
            "desc": "Defeat 60 enemies by headshot with the KU59."
        },
        "game": {
            "title": "KU-59 DEADEYE IV",
            "desc": "Defeat 60 enemies with a Headshot using the KU-59."
        }
    },
    "63d14e6f7f0dd5f341f89bd5": {
        "api": {
            "title": "Headshot Commando I",
            "desc": "Defeat an enemy by headshot with the Commando."
        },
        "game": {
            "title": "ZIV COMMANDO DEADEYE I",
            "desc": "Defeat an enemy with a Headshot using the Ziv Commando."
        }
    },
    "63d14ee97f0dd5f341f89ea1": {
        "api": {
            "title": "Headshot Commando II",
            "desc": "Defeat 10 enemies by headshot with the Commando."
        },
        "game": {
            "title": "ZIV COMMANDO DEADEYE II",
            "desc": "Defeat 10 enemies with a Headshot using the Ziv Commando."
        }
    },
    "63d14f337f0dd5f341f89fcc": {
        "api": {
            "title": "Headshot Commando III",
            "desc": "Defeat 30 enemies by headshot with the Commando."
        },
        "game": {
            "title": "ZIV COMMANDO DEADEYE III",
            "desc": "Defeat 30 enemies with a Headshot using the Ziv Commando."
        }
    },
    "63d14fad7f0dd5f341f8a35b": {
        "api": {
            "title": "Headshot Commando IV",
            "desc": "Defeat 60 enemies by headshot with the Commando."
        },
        "game": {
            "title": "ZIV COMMANDO DEADEYE IV",
            "desc": "Defeat 60 enemies with a Headshot using the Ziv Commando."
        }
    },
    "63d150617f0dd5f341f8a74d": {
        "api": {
            "title": "Headshot PC9 I",
            "desc": "Defeat an enemy by headshot with the PC9."
        },
        "game": {
            "title": "FIK PC9 DEADEYE I",
            "desc": "Defeat an enemy with a Headshot using the FIK PC9."
        }
    },
    "63d150c67f0dd5f341f8ab44": {
        "api": {
            "title": "Headshot PC9 II",
            "desc": "Defeat 10 enemies by headshot with the PC9."
        },
        "game": {
            "title": "FIK PC9 DEADEYE II",
            "desc": "Defeat 10 enemies with a Headshot using the FIK PC9."
        }
    },
    "63d151347f0dd5f341f8ab45": {
        "api": {
            "title": "Headshot PC9 III",
            "desc": "Defeat 30 enemies by headshot with the PC9."
        },
        "game": {
            "title": "FIK PC9 DEADEYE III",
            "desc": "Defeat 30 enemies with a Headshot using the FIK PC9."
        }
    },
    "63d151ad7f0dd5f341f8abaa": {
        "api": {
            "title": "Headshot PC9 IV",
            "desc": "Defeat 60 enemies by headshot with the PC9."
        },
        "game": {
            "title": "FIK PC9 DEADEYE IV",
            "desc": "Defeat 60 enemies with a Headshot using the FIK PC9."
        }
    },
    "63d152887f0dd5f341f8abab": {
        "api": {
            "title": "Headshot Mosconi12C I",
            "desc": "Defeat an enemy by headshot with the Mosconi12C."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d152e97f0dd5f341f8abac": {
        "api": {
            "title": "Headshot Mosconi12C II",
            "desc": "Defeat 10 enemies by headshot with the Mosconi12C."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d1535b7f0dd5f341f8ac1a": {
        "api": {
            "title": "Headshot Mosconi12C III",
            "desc": "Defeat 30 enemies by headshot with the Mosconi12C."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d153bc7f0dd5f341f8ac7f": {
        "api": {
            "title": "Headshot Mosconi12C IV",
            "desc": "Defeat 60 enemies by headshot with the Mosconi12C."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d155737f0dd5f341f8ad50": {
        "api": {
            "title": "Headshot Stryk7 I",
            "desc": "Defeat an enemy by headshot with the Stryk7."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d155e57f0dd5f341f8b02b": {
        "api": {
            "title": "Headshot Stryk7 II",
            "desc": "Defeat 10 enemies by headshot with the Stryk7."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d156207f0dd5f341f8b02c": {
        "api": {
            "title": "Headshot Stryk7 III",
            "desc": "Defeat 30 enemies by headshot with the Stryk7."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d156747f0dd5f341f8b36d": {
        "api": {
            "title": "Headshot Stryk7 IV",
            "desc": "Defeat 60 enemies by headshot with the Stryk7."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d15c577f0dd5f341f8c0fa": {
        "api": {
            "title": "Headshot S403 I",
            "desc": "Defeat an enemy by headshot with the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d15cea7f0dd5f341f8c0fb": {
        "api": {
            "title": "Headshot S403 II",
            "desc": "Defeat 10 enemies by headshot with the S403."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d15d207f0dd5f341f8c0fc": {
        "api": {
            "title": "Headshot S403 III",
            "desc": "Defeat 30 enemies by headshot with the S403."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d15d5c7f0dd5f341f8c0fd": {
        "api": {
            "title": "Headshot S403 IV",
            "desc": "Defeat 60 enemies by headshot with the S403."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2727f7f0dd5f341fbd40e": {
        "api": {
            "title": "Headshot SPM11 I",
            "desc": "Defeat an enemy by headshot with the SPM11."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d272b87f0dd5f341fbd46f": {
        "api": {
            "title": "Headshot SPM11 II",
            "desc": "Defeat 10 enemies by headshot with the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d272f37f0dd5f341fbd4d1": {
        "api": {
            "title": "Headshot SPM11 III",
            "desc": "Defeat 30 enemies by headshot with the SPM11."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2732b7f0dd5f341fbe06e": {
        "api": {
            "title": "Headshot SPM11 IV",
            "desc": "Defeat 60 enemies by headshot with the SPM11."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d273cf7f0dd5f341fbe135": {
        "api": {
            "title": "Headshot Bison I",
            "desc": "Defeat an enemy by headshot with the Bison."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d274047f0dd5f341fbe2bc": {
        "api": {
            "title": "Headshot Bison II",
            "desc": "Defeat 10 enemies by headshot with the Bison."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d274407f0dd5f341fbe389": {
        "api": {
            "title": "Headshot Bison III",
            "desc": "Defeat 30 enemies by headshot with the Bison."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d274667f0dd5f341fbe38a": {
        "api": {
            "title": "Headshot Bison IV",
            "desc": "Defeat 60 enemies by headshot with the Bison."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d278277f0dd5f341fc0550": {
        "api": {
            "title": "Headshot HET5 I",
            "desc": "Defeat an enemy by headshot with the HET5."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d278697f0dd5f341fc0551": {
        "api": {
            "title": "Headshot HET5 II",
            "desc": "Defeat 10 enemies by headshot with the HET5."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d278b17f0dd5f341fc0552": {
        "api": {
            "title": "Headshot HET5 III",
            "desc": "Defeat 30 enemies by headshot with the HET5."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d278e67f0dd5f341fc0707": {
        "api": {
            "title": "Headshot HET5 IV",
            "desc": "Defeat 60 enemies by headshot with the HET5."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d27bd07f0dd5f341fc2ad6": {
        "api": {
            "title": "NWB9 Single Clip I",
            "desc": "With the NWB9, defeat 3 enemies without reloading, 5 times."
        },
        "game": {
            "title": "NORTHWEST B-9 CHEAPSKATE I",
            "desc": "Defeat 3 enemies without reloading 5 times using the Northwest B-9."
        }
    },
    "63d27c1d7f0dd5f341fc2d49": {
        "api": {
            "title": "NWB9 Single Clip II",
            "desc": "With the NWB9, defeat 3 enemies without reloading, 15 times."
        },
        "game": {
            "title": "NORTHWEST B-9 CHEAPSKATE II",
            "desc": "Defeat 3 enemies without reloading 15 times using the Northwest B-9."
        }
    },
    "63d27c5a7f0dd5f341fc3b20": {
        "api": {
            "title": "NWB9 Single Clip III",
            "desc": "With the NWB9, defeat 3 enemies without reloading, 30 times."
        },
        "game": {
            "title": "NORTHWEST B-9 CHEAPSKATE III",
            "desc": "Defeat 3 enemies without reloading 30 times using the Northwest B-9."
        }
    },
    "63d27ca77f0dd5f341fc42f6": {
        "api": {
            "title": "NWB9 Single Clip IV",
            "desc": "With the NWB9, defeat 3 enemies without reloading, 50 times."
        },
        "game": {
            "title": "NORTHWEST B-9 CHEAPSKATE IV",
            "desc": "Defeat 3 enemies without reloading 50 times using the Northwest B-9."
        }
    },
    "63d27ce67f0dd5f341fc43d0": {
        "api": {
            "title": "NWB9 Single Clip V",
            "desc": "With the NWB9, defeat 3 enemies without reloading, 75 times."
        },
        "game": {
            "title": "NORTHWEST B-9 CHEAPSKATE V",
            "desc": "Defeat 3 enemies without reloading 75 times using the Northwest B-9."
        }
    },
    "63d280e67f0dd5f341fc7677": {
        "api": {
            "title": "CAR4 ADS I",
            "desc": "Defeat 20 enemies while aiming down sights with the CAR4."
        },
        "game": {
            "title": "CAR-4 TARGET SIGHTED I",
            "desc": "Defeat 20 enemies while aiming down sights with the CAR-4."
        }
    },
    "63d2812c7f0dd5f341fc7810": {
        "api": {
            "title": "CAR4 ADS II",
            "desc": "Defeat 50 enemies while aiming down sights with the CAR4."
        },
        "game": {
            "title": "CAR-4 TARGET SIGHTED II",
            "desc": "Defeat 50 enemies while aiming down sights with the CAR-4."
        }
    },
    "63d2816e7f0dd5f341fc794f": {
        "api": {
            "title": "CAR4 ADS III",
            "desc": "Defeat 100 enemies while aiming down sights with the CAR4."
        },
        "game": {
            "title": "CAR-4 TARGET SIGHTED III",
            "desc": "Defeat 100 enemies while aiming down sights with the CAR-4."
        }
    },
    "63d281c37f0dd5f341fc7aeb": {
        "api": {
            "title": "CAR4 ADS IV",
            "desc": "Defeat 200 enemies while aiming down sights with the CAR4."
        },
        "game": {
            "title": "CAR-4 TARGET SIGHTED IV",
            "desc": "Defeat 200 enemies while aiming down sights with the CAR-4."
        }
    },
    "63d282157f0dd5f341fc8751": {
        "api": {
            "title": "CAR4 ADS V",
            "desc": "Defeat 400 enemies while aiming down sights with the CAR4."
        },
        "game": {
            "title": "CAR-4 TARGET SIGHTED V",
            "desc": "Defeat 400 enemies while aiming down sights with the CAR-4."
        }
    },
    "63d2865c7f0dd5f341fca8b3": {
        "api": {
            "title": "VF7S ADS I",
            "desc": "Defeat 20 enemies while aiming down sights with the VF7S."
        },
        "game": {
            "title": "VF-7S TARGET SIGHTED I",
            "desc": "Defeat 20 enemies while aiming down sights with the VF-7S."
        }
    },
    "63d286b87f0dd5f341fca985": {
        "api": {
            "title": "VF7S ADS II",
            "desc": "Defeat 50 enemies while aiming down sights with the VF7S."
        },
        "game": {
            "title": "VF-7S TARGET SIGHTED II",
            "desc": "Defeat 50 enemies while aiming down sights with the VF-7S."
        }
    },
    "63d286f67f0dd5f341fca986": {
        "api": {
            "title": "VF7S ADS III",
            "desc": "Defeat 100 enemies while aiming down sights with the VF7S."
        },
        "game": {
            "title": "VF-7S TARGET SIGHTED III",
            "desc": "Defeat 100 enemies while aiming down sights with the VF-7S."
        }
    },
    "63d287397f0dd5f341fca987": {
        "api": {
            "title": "VF7S ADS IV",
            "desc": "Defeat 200 enemies while aiming down sights with the VF7S."
        },
        "game": {
            "title": "VF-7S TARGET SIGHTED IV",
            "desc": "Defeat 200 enemies while aiming down sights with the VF-7S."
        }
    },
    "63d287717f0dd5f341fca988": {
        "api": {
            "title": "VF7S ADS V",
            "desc": "Defeat 400 enemies while aiming down sights with the VF7S."
        },
        "game": {
            "title": "VF-7S TARGET SIGHTED V",
            "desc": "Defeat 400 enemies while aiming down sights with the VF-7S."
        }
    },
    "63d28b6d7f0dd5f341fccead": {
        "api": {
            "title": "KU59 Hip Fire I",
            "desc": "Defeat 20 enemies while firing from the hip with the KU59."
        },
        "game": {
            "title": "KU-59 FREE-FOR-ALL I",
            "desc": "Defeat 20 enemies while firing from the hip with the KU-59."
        }
    },
    "63d28bc97f0dd5f341fcdb31": {
        "api": {
            "title": "KU59 Hip Fire II",
            "desc": "Defeat 50 enemies while firing from the hip with the KU59."
        },
        "game": {
            "title": "KU-59 FREE-FOR-ALL II",
            "desc": "Defeat 50 enemies while firing from the hip with the KU-59."
        }
    },
    "63d28c437f0dd5f341fcdb32": {
        "api": {
            "title": "KU59 Hip Fire III",
            "desc": "Defeat 100 enemies while firing from the hip with the KU59."
        },
        "game": {
            "title": "KU-59 FREE-FOR-ALL III",
            "desc": "Defeat 100 enemies while firing from the hip with the KU-59."
        }
    },
    "63d28c9a7f0dd5f341fcdc05": {
        "api": {
            "title": "KU59 Hip Fire IV",
            "desc": "Defeat 200 enemies while firing from the hip with the KU59."
        },
        "game": {
            "title": "KU-59 FREE-FOR-ALL IV",
            "desc": "Defeat 200 enemies while firing from the hip with the KU-59."
        }
    },
    "63d28ce07f0dd5f341fcdcdf": {
        "api": {
            "title": "KU59 Hip Fire V",
            "desc": "Defeat 400 enemies while firing from the hip with the KU59."
        },
        "game": {
            "title": "KU-59 FREE-FOR-ALL V",
            "desc": "Defeat 400 enemies while firing from the hip with the KU-59."
        }
    },
    "63d292597f0dd5f341fcf0bb": {
        "api": {
            "title": "Commando Hip Fire I",
            "desc": "Defeat 20 enemies while firing from the hip with the Commando."
        },
        "game": {
            "title": "ZIV COMMANDO FREE-FOR-ALL I",
            "desc": "Defeat 20 enemies while firing from the hip with the Ziv Commando."
        }
    },
    "63d292917f0dd5f341fcf123": {
        "api": {
            "title": "Commando Hip Fire II",
            "desc": "Defeat 50 enemies while firing from the hip with the Commando"
        },
        "game": {
            "title": "ZIV COMMANDO FREE-FOR-ALL II",
            "desc": "Defeat 50 enemies while firing from the hip with the Ziv Commando."
        }
    },
    "63d292f57f0dd5f341fcf124": {
        "api": {
            "title": "Commando Hip Fire III",
            "desc": "Defeat 100 enemies while firing from the hip with the Commando."
        },
        "game": {
            "title": "ZIV COMMANDO FREE-FOR-ALL III",
            "desc": "Defeat 100 enemies while firing from the hip with the Ziv Commando."
        }
    },
    "63d293317f0dd5f341fcf1de": {
        "api": {
            "title": "Commando Hip Fire IV",
            "desc": "Defeat 200 enemies while firing from the hip with the Commando."
        },
        "game": {
            "title": "ZIV COMMANDO FREE-FOR-ALL IV",
            "desc": "Defeat 200 enemies while firing from the hip with the Ziv Commando."
        }
    },
    "63d2938e7f0dd5f341fcf1df": {
        "api": {
            "title": "Commando Hip Fire V",
            "desc": "Defeat 400 enemies while firing from the hip with the Commando."
        },
        "game": {
            "title": "ZIV COMMANDO FREE-FOR-ALL V",
            "desc": "Defeat 400 enemies while firing from the hip with the Ziv Commando."
        }
    },
    "63d295107f0dd5f341fcf1e0": {
        "api": {
            "title": "PC9 ADS I",
            "desc": "Defeat 20 enemies while aiming down sights with the PC9."
        },
        "game": {
            "title": "FIK PC9 TARGET SIGHTED I",
            "desc": "Defeat 20 enemies while aiming down sights with the FIK PC9."
        }
    },
    "63d295827f0dd5f341fcf2d8": {
        "api": {
            "title": "PC9 ADS II",
            "desc": "Defeat 50 enemies while aiming down sights with the PC9."
        },
        "game": {
            "title": "FIK PC9 TARGET SIGHTED II",
            "desc": "Defeat 50 enemies while aiming down sights with the FIK PC9."
        }
    },
    "63d295d87f0dd5f341fcf2d9": {
        "api": {
            "title": "PC9 ADS III",
            "desc": "Defeat 100 enemies while aiming down sights with the PC9."
        },
        "game": {
            "title": "FIK PC9 TARGET SIGHTED III",
            "desc": "Defeat 100 enemies while aiming down sights with the FIK PC9."
        }
    },
    "63d2961b7f0dd5f341fcf2da": {
        "api": {
            "title": "PC9 ADS IV",
            "desc": "Defeat 200 enemies while aiming down sights with the PC9."
        },
        "game": {
            "title": "FIK PC9 TARGET SIGHTED IV",
            "desc": "Defeat 200 enemies while aiming down sights with the FIK PC9."
        }
    },
    "63d296747f0dd5f341fcf2db": {
        "api": {
            "title": "PC9 ADS V",
            "desc": "Defeat 400 enemies while aiming down sights with the PC9."
        },
        "game": {
            "title": "FIK PC9 TARGET SIGHTED V",
            "desc": "Defeat 400 enemies while aiming down sights with the FIK PC9."
        }
    },
    "63d299607f0dd5f341fcf538": {
        "api": {
            "title": "Compact7 Armored Headshot I",
            "desc": "Defeat 10 armored enemies by headshot with the Compact7."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d299a57f0dd5f341fcf539": {
        "api": {
            "title": "Compact7 Armored Headshot II",
            "desc": "Defeat 50 armored enemies by headshot with the Compact7."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d299f87f0dd5f341fcf63b": {
        "api": {
            "title": "Compact7 Armored Headshot III",
            "desc": "Defeat 100 armored enemies by headshot with the Compact7."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d29a577f0dd5f341fcf70a": {
        "api": {
            "title": "Compact7 Armored Headshot IV",
            "desc": "Defeat 200 armored enemies by headshot with the Compact7."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d29a917f0dd5f341fcf78d": {
        "api": {
            "title": "Compact7 Armored Headshot V",
            "desc": "Defeat 400 armored enemies by headshot with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d29caa7f0dd5f341fcf99f": {
        "api": {
            "title": "R880 ADS I",
            "desc": "Defeat 20 enemies while aiming down sights with the R880."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d29cea7f0dd5f341fcfa17": {
        "api": {
            "title": "R880 ADS II",
            "desc": "Defeat 50 enemies while aiming down sights with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d29d277f0dd5f341fcfa18": {
        "api": {
            "title": "R880 ADS III",
            "desc": "Defeat 100 enemies while aiming down sights with the R880."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d29d617f0dd5f341fcfa19": {
        "api": {
            "title": "R880 ADS IV",
            "desc": "Defeat 200 enemies while aiming down sights with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d29d987f0dd5f341fcfa1a": {
        "api": {
            "title": "R880 ADS V",
            "desc": "Defeat 400 enemies while aiming down sights with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2a0d47f0dd5f341fd0110": {
        "api": {
            "title": "Mosconi12C Hip Fire I",
            "desc": "Defeat 20 enemies while firing from the hip with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2a1127f0dd5f341fd0431": {
        "api": {
            "title": "Mosconi12C Hip Fire II",
            "desc": "Defeat 50 enemies while firing from the hip with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2a1537f0dd5f341fd086b": {
        "api": {
            "title": "Mosconi12C Hip Fire III",
            "desc": "Defeat 100 enemies while firing from the hip with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2a1b17f0dd5f341fd0bf7": {
        "api": {
            "title": "Mosconi12C Hip Fire IV",
            "desc": "Defeat 200 enemies while firing from the hip with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2a1ec7f0dd5f341fd0bf8": {
        "api": {
            "title": "Mosconi12C Hip Fire V",
            "desc": "Defeat 400 enemies while firing from the hip with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2a30c7f0dd5f341fd1633": {
        "api": {
            "title": "A114 Armored Headshot I",
            "desc": "Defeat 10 armored enemies by headshot with the A114"
        },
        "game": {
            "title": "SA A144 TAKEDOWN I",
            "desc": "Defeat 10 Heavy SWAT with a Headshot using the SA A144."
        }
    },
    "63d2a3537f0dd5f341fd1959": {
        "api": {
            "title": "A114 Armored Headshot II",
            "desc": "Defeat 50 armored enemies by headshot with the A114"
        },
        "game": {
            "title": "SA A144 TAKEDOWN II",
            "desc": "Defeat 50 Heavy SWAT with a Headshot using the SA A144."
        }
    },
    "63d2a3937f0dd5f341fd195a": {
        "api": {
            "title": "A114 Armored Headshot III",
            "desc": "Defeat 100 armored enemies by headshot with the A114"
        },
        "game": {
            "title": "SA A144 TAKEDOWN III",
            "desc": "Defeat 100 Heavy SWAT with a Headshot using the SA A144."
        }
    },
    "63d2a3f87f0dd5f341fd1c82": {
        "api": {
            "title": "A114 Armored Headshot IV",
            "desc": "Defeat 200 armored enemies by headshot with the A114"
        },
        "game": {
            "title": "SA A144 TAKEDOWN IV",
            "desc": "Defeat 200 Heavy SWAT with a Headshot using the SA A144."
        }
    },
    "63d2a4457f0dd5f341fd1c83": {
        "api": {
            "title": "A114 Armored Headshot V",
            "desc": "Defeat 400 armored enemies by headshot with the A114"
        },
        "game": {
            "title": "SA A144 TAKEDOWN V",
            "desc": "Defeat 400 Heavy SWAT with a Headshot using the SA A144."
        }
    },
    "63d2a7567f0dd5f341fd1f4b": {
        "api": {
            "title": "R900S Long Range I",
            "desc": "Defeat 10 enemies with the R900S from over 50 metres away"
        },
        "game": {
            "title": "REINFELD 900S LONG RANGED KILL I",
            "desc": "Defeat 10 enemies with the Reinfeld 900S from over 50 meters away."
        }
    },
    "63d2a7ab7f0dd5f341fd1f4c": {
        "api": {
            "title": "R900S Long Range II",
            "desc": "Defeat 50 enemies with the R900S from over 50 metres away"
        },
        "game": {
            "title": "REINFELD 900S LONG RANGED KILL II",
            "desc": "Defeat 50 enemies with the Reinfeld 900S from over 50 meters away."
        }
    },
    "63d2a7de7f0dd5f341fd1f4d": {
        "api": {
            "title": "R900S Long Range III",
            "desc": "Defeat 100 enemies with the R900S from over 50 metres away"
        },
        "game": {
            "title": "REINFELD 900S LONG RANGED KILL III",
            "desc": "Defeat 100 enemies with the Reinfeld 900S from over 50 meters away."
        }
    },
    "63d2a8307f0dd5f341fd1f4e": {
        "api": {
            "title": "R900S Long Range IV",
            "desc": "Defeat 200 enemies with the R900S from over 50 metres away"
        },
        "game": {
            "title": "REINFELD 900S LONG RANGED KILL IV",
            "desc": "Defeat 200 enemies with the Reinfeld 900S from over 50 meters away."
        }
    },
    "63d2a8677f0dd5f341fd1f4f": {
        "api": {
            "title": "R900S Long Range V",
            "desc": "Defeat 400 enemies with the R900S from over 50 metres away"
        },
        "game": {
            "title": "REINFELD 900S LONG RANGED KILL V",
            "desc": "Defeat 400 enemies with the Reinfeld 900S from over 50 meters away."
        }
    },
    "63d2aa537f0dd5f341fd1f50": {
        "api": {
            "title": "Stryk7 Suppressed I",
            "desc": "Defeat 10 enemies with the suppressor equipped on the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2aabe7f0dd5f341fd1fc0": {
        "api": {
            "title": "Stryk7 Suppressed II",
            "desc": "Defeat 50 enemies with the suppressor equipped on the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2aafb7f0dd5f341fd1fc1": {
        "api": {
            "title": "Stryk7 Suppressed III",
            "desc": "Defeat 100 enemies with the suppressor equipped on the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2ab4d7f0dd5f341fd1fc2": {
        "api": {
            "title": "Stryk7 Suppressed IV",
            "desc": "Defeat 200 enemies with the suppressor equipped on the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2ab7f7f0dd5f341fd1fc3": {
        "api": {
            "title": "Stryk7 Suppressed V",
            "desc": "Defeat 400 enemies with the suppressor equipped on the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2ac817f0dd5f341fd1fc4": {
        "api": {
            "title": "S403 Suppressed I",
            "desc": "Defeat 10 enemies with the suppressor equipped on the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2acbf7f0dd5f341fd1fc5": {
        "api": {
            "title": "S403 Suppressed II",
            "desc": "Defeat 50 enemies with the suppressor equipped on the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2acff7f0dd5f341fd2046": {
        "api": {
            "title": "S403 Suppressed III",
            "desc": "Defeat 100 enemies with the suppressor equipped on the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2ad477f0dd5f341fd2047": {
        "api": {
            "title": "S403 Suppressed IV",
            "desc": "Defeat 200 enemies with the suppressor equipped on the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2ad957f0dd5f341fd2048": {
        "api": {
            "title": "S403 Suppressed V",
            "desc": "Defeat 400 enemies with the suppressor equipped on the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2ae937f0dd5f341fd2049": {
        "api": {
            "title": "S40 Suppressed I",
            "desc": "Defeat 10 enemies with the suppressor equipped on the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2af047f0dd5f341fd204a": {
        "api": {
            "title": "S40 Suppressed II",
            "desc": "Defeat 50 enemies with the suppressor equipped on the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2af5b7f0dd5f341fd204b": {
        "api": {
            "title": "S40 Suppressed III",
            "desc": "Defeat 100 enemies with the suppressor equipped on the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2af987f0dd5f341fd204c": {
        "api": {
            "title": "S40 Suppressed IV",
            "desc": "Defeat 200 enemies with the suppressor equipped on the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2afcf7f0dd5f341fd20d1": {
        "api": {
            "title": "S40 Suppressed V",
            "desc": "Defeat 400 enemies with the suppressor equipped on the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2b05e7f0dd5f341fd20d2": {
        "api": {
            "title": "SPM11 Suppressed I",
            "desc": "Defeat 10 enemies with the suppressor equipped on the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2b09c7f0dd5f341fd20d3": {
        "api": {
            "title": "SPM11 Suppressed II",
            "desc": "Defeat 50 enemies with the suppressor equipped on the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2b0f07f0dd5f341fd20d4": {
        "api": {
            "title": "SPM11 Suppressed III",
            "desc": "Defeat 100 enemies with the suppressor equipped on the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2b11d7f0dd5f341fd20d5": {
        "api": {
            "title": "SPM11 Suppressed IV",
            "desc": "Defeat 200 enemies with the suppressor equipped on the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d2b1507f0dd5f341fd20d6": {
        "api": {
            "title": "SPM11 Suppressed V",
            "desc": "Defeat 400 enemies with the suppressor equipped on the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3c972640c786dc267b2b8": {
        "api": {
            "title": "Bison Single Clip I",
            "desc": "With the Bison, defeat 2 enemies without reloading, 5 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3cad3640c786dc267b59c": {
        "api": {
            "title": "Bison Single Clip II",
            "desc": "With the Bison, defeat 2 enemies without reloading, 15 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3cb20640c786dc267b608": {
        "api": {
            "title": "Bison Single Clip III",
            "desc": "With the Bison, defeat 2 enemies without reloading, 30 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3cb54640c786dc267b727": {
        "api": {
            "title": "Bison Single Clip IV",
            "desc": "With the Bison, defeat 2 enemies without reloading, 50 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3cbac640c786dc267bc63": {
        "api": {
            "title": "Bison Single Clip V",
            "desc": "With the Bison, defeat 2 enemies without reloading, 75 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d2bc640c786dc267e965": {
        "api": {
            "title": "Castigo44 ADS I",
            "desc": "Defeat 20 enemies while aiming down sights with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d2fd640c786dc267e966": {
        "api": {
            "title": "Castigo44 ADS II",
            "desc": "Defeat 50 enemies while aiming down sights with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d354640c786dc267eb7e": {
        "api": {
            "title": "Castigo44 ADS III",
            "desc": "Defeat 100 enemies while aiming down sights with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d396640c786dc267eccf": {
        "api": {
            "title": "Castigo44 ADS IV",
            "desc": "Defeat 200 enemies while aiming down sights with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d3d3640c786dc267ecd0": {
        "api": {
            "title": "Castigo44 ADS V",
            "desc": "Defeat 400 enemies while aiming down sights with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d4ab640c786dc267ee1b": {
        "api": {
            "title": "Mamba Two Kills I",
            "desc": "Defeat 2 enemies with one Mamba grenade, 5 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d4e0640c786dc267ef9b": {
        "api": {
            "title": "Mamba Two Kills II",
            "desc": "Defeat 2 enemies with one Mamba grenade, 15 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d52e640c786dc267f00e": {
        "api": {
            "title": "Mamba Two Kills III",
            "desc": "Defeat 2 enemies with one Mamba grenade, 30 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d569640c786dc267f0f2": {
        "api": {
            "title": "Mamba Two Kills IV",
            "desc": "Defeat 2 enemies with one Mamba grenade, 50 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d5c3640c786dc267f167": {
        "api": {
            "title": "Mamba Two Kills V",
            "desc": "Defeat 2 enemies with one Mamba grenade, 75 times"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3d925640c786dc2681094": {
        "api": {
            "title": "VF7S I",
            "desc": "Defeat 50 enemies with the VF7S"
        },
        "game": {
            "title": "VF-7S EASY PICKINGS I",
            "desc": "Defeat 50 enemies with the VF-7S."
        }
    },
    "63d3d95d640c786dc2681095": {
        "api": {
            "title": "VF7S II",
            "desc": "Defeat 100 enemies with the VF7S"
        },
        "game": {
            "title": "VF-7S EASY PICKINGS II",
            "desc": "Defeat 100 enemies with the VF-7S."
        }
    },
    "63d3d9d3640c786dc2681185": {
        "api": {
            "title": "VF7S III",
            "desc": "Defeat 200 enemies with the VF7S"
        },
        "game": {
            "title": "VF-7S EASY PICKINGS III",
            "desc": "Defeat 200 enemies with the VF-7S."
        }
    },
    "63d3da14640c786dc26815b3": {
        "api": {
            "title": "VF7S IV",
            "desc": "Defeat 350 enemies with the VF7S"
        },
        "game": {
            "title": "VF-7S EASY PICKINGS IV",
            "desc": "Defeat 350 enemies with the VF-7S."
        }
    },
    "63d3da5c640c786dc2682388": {
        "api": {
            "title": "VF7S V",
            "desc": "Defeat 500 enemies with the VF7S"
        },
        "game": {
            "title": "VF-7S EASY PICKINGS V",
            "desc": "Defeat 500 enemies with the VF-7S."
        }
    },
    "63d3dbe0640c786dc2682c24": {
        "api": {
            "title": "KU59 I",
            "desc": "Defeat 50 enemies with the KU59"
        },
        "game": {
            "title": "KU-59 EASY PICKINGS I",
            "desc": "Defeat 50 enemies with the KU-59."
        }
    },
    "63d3dc30640c786dc2682dd5": {
        "api": {
            "title": "KU59 II",
            "desc": "Defeat 100 enemies with the KU59"
        },
        "game": {
            "title": "KU-59 EASY PICKINGS II",
            "desc": "Defeat 100 enemies with the KU-59."
        }
    },
    "63d3dc5a640c786dc2682dd6": {
        "api": {
            "title": "KU59 III",
            "desc": "Defeat 200 enemies with the KU59"
        },
        "game": {
            "title": "KU-59 EASY PICKINGS III",
            "desc": "Defeat 200 enemies with the KU-59."
        }
    },
    "63d3dca0640c786dc268318c": {
        "api": {
            "title": "KU59 IV",
            "desc": "Defeat 350 enemies with the KU59"
        },
        "game": {
            "title": "KU-59 EASY PICKINGS IV",
            "desc": "Defeat 350 enemies with the KU-59."
        }
    },
    "63d3dce2640c786dc26831fb": {
        "api": {
            "title": "KU59 V",
            "desc": "Defeat 500 enemies with the KU59"
        },
        "game": {
            "title": "KU-59 EASY PICKINGS V",
            "desc": "Defeat 500 enemies with the KU-59."
        }
    },
    "63d3e43e640c786dc26879b4": {
        "api": {
            "title": "Commando I",
            "desc": "Defeat 50 enemies with the Commando"
        },
        "game": {
            "title": "ZIV COMMANDO EASY PICKINGS I",
            "desc": "Defeat 50 enemies with the Ziv Commando."
        }
    },
    "63d3e4ce640c786dc2687b4d": {
        "api": {
            "title": "Commando II",
            "desc": "Defeat 100 enemies with the Commando"
        },
        "game": {
            "title": "ZIV COMMANDO EASY PICKINGS II",
            "desc": "Defeat 100 enemies with the Ziv Commando."
        }
    },
    "63d3e50a640c786dc26888d6": {
        "api": {
            "title": "Commando III",
            "desc": "Defeat 200 enemies with the Commando"
        },
        "game": {
            "title": "ZIV COMMANDO EASY PICKINGS III",
            "desc": "Defeat 200 enemies with the Ziv Commando."
        }
    },
    "63d3e559640c786dc2688945": {
        "api": {
            "title": "Commando IV",
            "desc": "Defeat 350 enemies with the Commando"
        },
        "game": {
            "title": "ZIV COMMANDO EASY PICKINGS IV",
            "desc": "Defeat 350 enemies with the Ziv Commando."
        }
    },
    "63d3e584640c786dc26889b7": {
        "api": {
            "title": "Commando V",
            "desc": "Defeat 500 enemies with the Commando"
        },
        "game": {
            "title": "ZIV COMMANDO EASY PICKINGS V",
            "desc": "Defeat 500 enemies with the Ziv Commando."
        }
    },
    "63d3e92c21282a2b1cd9a32f": {
        "api": {
            "title": "PC9 I",
            "desc": "Defeat 50 enemies with the PC9"
        },
        "game": {
            "title": "FIK PC9 EASY PICKINGS I",
            "desc": "Defeat 50 enemies with the FIK PC9."
        }
    },
    "63d3e95e21282a2b1cd9a39c": {
        "api": {
            "title": "PC9 II",
            "desc": "Defeat 100 enemies with the PC9"
        },
        "game": {
            "title": "FIK PC9 EASY PICKINGS II",
            "desc": "Defeat 100 enemies with the FIK PC9."
        }
    },
    "63d3e99c21282a2b1cd9ba8d": {
        "api": {
            "title": "PC9 III",
            "desc": "Defeat 200 enemies with the PC9"
        },
        "game": {
            "title": "FIK PC9 EASY PICKINGS III",
            "desc": "Defeat 200 enemies with the FIK PC9."
        }
    },
    "63d3e9e221282a2b1cd9bafc": {
        "api": {
            "title": "PC9 IV",
            "desc": "Defeat 350 enemies with the PC9"
        },
        "game": {
            "title": "FIK PC9 EASY PICKINGS IV",
            "desc": "Defeat 350 enemies with the FIK PC9."
        }
    },
    "63d3ea1621282a2b1cd9bafd": {
        "api": {
            "title": "PC9 V",
            "desc": "Defeat 500 enemies with the PC9"
        },
        "game": {
            "title": "FIK PC9 EASY PICKINGS V",
            "desc": "Defeat 500 enemies with the FIK PC9."
        }
    },
    "63d3ea8621282a2b1cd9bf32": {
        "api": {
            "title": "Mosconi12C I",
            "desc": "Defeat 50 enemies with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3eadf21282a2b1cd9c8a2": {
        "api": {
            "title": "Mosconi12C II",
            "desc": "Defeat 100 enemies with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3eb2221282a2b1cd9ca02": {
        "api": {
            "title": "Mosconi12C III",
            "desc": "Defeat 200 enemies with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3eb5821282a2b1cd9ca8f": {
        "api": {
            "title": "Mosconi12C IV",
            "desc": "Defeat 350 enemies with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ebac21282a2b1cd9cb0b": {
        "api": {
            "title": "Mosconi12C V",
            "desc": "Defeat 500 enemies with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ec0421282a2b1cd9cbf4": {
        "api": {
            "title": "Stryk7 I",
            "desc": "Defeat 50 enemies with the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ec4c21282a2b1cd9cc69": {
        "api": {
            "title": "Stryk7 II",
            "desc": "Defeat 100 enemies with the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ec8121282a2b1cd9cdb9": {
        "api": {
            "title": "Stryk7 III",
            "desc": "Defeat 200 enemies with the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ecae21282a2b1cd9cdba": {
        "api": {
            "title": "Stryk7 IV",
            "desc": "Defeat 350 enemies with the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ecd421282a2b1cd9cdbb": {
        "api": {
            "title": "Stryk7 V",
            "desc": "Defeat 500 enemies with the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3edd821282a2b1cd9d0dc": {
        "api": {
            "title": "SPM11 I",
            "desc": "Defeat 50 enemies with the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ee2c21282a2b1cd9d22d": {
        "api": {
            "title": "SPM11 II",
            "desc": "Defeat 100 enemies with the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ee8e21282a2b1cd9d704": {
        "api": {
            "title": "SPM11 III",
            "desc": "Defeat 200 enemies with the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3eef021282a2b1cd9d771": {
        "api": {
            "title": "SPM11 IV",
            "desc": "Defeat 350 enemies with the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ef2121282a2b1cd9d7de": {
        "api": {
            "title": "SPM11 V",
            "desc": "Defeat 500 enemies with the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3ef9821282a2b1cd9d8b6": {
        "api": {
            "title": "Bison I",
            "desc": "Defeat 50 enemies with the Bison"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3efcd21282a2b1cd9d8b7": {
        "api": {
            "title": "Bison II",
            "desc": "Defeat 100 enemies with the Bison"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3efff21282a2b1cd9d9b2": {
        "api": {
            "title": "Bison III",
            "desc": "Defeat 200 enemies with the Bison"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3f03221282a2b1cd9d9b3": {
        "api": {
            "title": "Bison IV",
            "desc": "Defeat 350 enemies with the Bison"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3f05e21282a2b1cd9db20": {
        "api": {
            "title": "Bison V",
            "desc": "Defeat 500 enemies with the Bison"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3f0c421282a2b1cd9de86": {
        "api": {
            "title": "HET5 I",
            "desc": "Defeat 10 enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3f10021282a2b1cd9de87": {
        "api": {
            "title": "HET5 II",
            "desc": "Defeat 50 enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3f13b21282a2b1cd9df75": {
        "api": {
            "title": "HET5 III",
            "desc": "Defeat 100 enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3f17f21282a2b1cd9e168": {
        "api": {
            "title": "HET5 IV",
            "desc": "Defeat 200 enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d3f1ab21282a2b1cd9e27c": {
        "api": {
            "title": "HET5 V",
            "desc": "Defeat 300 enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7804921282a2b1cef6368": {
        "api": {
            "title": "Armored Transport Loud II: Repeat Offender V",
            "desc": "Beat Armored Transport 55 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7811521282a2b1cef64ac": {
        "api": {
            "title": "Armored Transport Loud II: Repeat Offender VI",
            "desc": "Beat Armored Transport 70 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7816621282a2b1cef6660": {
        "api": {
            "title": "Armored Transport Loud II: Repeat Offender VII",
            "desc": "Beat Armored Transport 85 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d781a921282a2b1cef6661": {
        "api": {
            "title": "Armored Transport Loud II: Repeat Offender VIII",
            "desc": "Beat Armored Transport 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d787a621282a2b1cefac89": {
        "api": {
            "title": "Armored Transport Loud III: Repeat Offender V",
            "desc": "Beat Armored Transport 35 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d787ee21282a2b1cefad62": {
        "api": {
            "title": "Armored Transport Loud III: Repeat Offender VI",
            "desc": "Beat Armored Transport 50 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7883421282a2b1cefad63": {
        "api": {
            "title": "Armored Transport Loud III: Repeat Offender VII",
            "desc": "Beat Armored Transport 65 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7887c21282a2b1cefaf8d": {
        "api": {
            "title": "Armored Transport Loud III: Repeat Offender VIII",
            "desc": "Beat Armored Transport 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7895221282a2b1cefb392": {
        "api": {
            "title": "Armored Transport Loud IV: Repeat Offender V",
            "desc": "Beat Armored Transport 20 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d789af21282a2b1cefb3ff": {
        "api": {
            "title": "Armored Transport Loud IV: Repeat Offender VI",
            "desc": "Beat Armored Transport 25 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78a1621282a2b1cefc382": {
        "api": {
            "title": "Armored Transport Loud IV: Repeat Offender VII",
            "desc": "Beat Armored Transport 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78a7521282a2b1cefc5ae": {
        "api": {
            "title": "Armored Transport Loud IV: Repeat Offender VIII",
            "desc": "Beat Armored Transport 40 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78b2721282a2b1cefca85": {
        "api": {
            "title": "Branch Bank Loud I: Repeat Offender V",
            "desc": "Beat Branch Bank 80 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78b8e21282a2b1cefd99e": {
        "api": {
            "title": "Branch Bank Loud I: Repeat Offender VI",
            "desc": "Beat Branch Bank 100 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78bdc21282a2b1cefdbc1": {
        "api": {
            "title": "Branch Bank Loud I: Repeat Offender VII",
            "desc": "Beat Branch Bank 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78c5121282a2b1cefddec": {
        "api": {
            "title": "Branch Bank Loud I: Repeat Offender VIII",
            "desc": "Beat Branch Bank 150 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78d5821282a2b1cefe08a": {
        "api": {
            "title": "Branch Bank Loud II: Repeat Offender V",
            "desc": "Beat Branch Bank 55 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78d9121282a2b1cefef48": {
        "api": {
            "title": "Branch Bank Loud II: Repeat Offender VI",
            "desc": "Beat Branch Bank 70 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78dd821282a2b1ceff100": {
        "api": {
            "title": "Branch Bank Loud II: Repeat Offender VII",
            "desc": "Beat Branch Bank 85 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d78e2721282a2b1ceff65c": {
        "api": {
            "title": "Branch Bank Loud II: Repeat Offender VIII",
            "desc": "Beat Branch Bank 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7903321282a2b1cf00cb2": {
        "api": {
            "title": "Branch Bank Loud III: Repeat Offender V",
            "desc": "Beat Branch Bank 35 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7907821282a2b1cf01b13": {
        "api": {
            "title": "Branch Bank Loud III: Repeat Offender VI",
            "desc": "Beat Branch Bank 50 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d790f821282a2b1cf01b81": {
        "api": {
            "title": "Branch Bank Loud III: Repeat Offender VII",
            "desc": "Beat Branch Bank 65 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7917421282a2b1cf01c6b": {
        "api": {
            "title": "Branch Bank Loud III: Repeat Offender VIII",
            "desc": "Beat Branch Bank 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79a1a21282a2b1cf033b2": {
        "api": {
            "title": "Branch Bank Loud IV: Repeat Offender V",
            "desc": "Beat Branch Bank 20 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79a6621282a2b1cf03594": {
        "api": {
            "title": "Branch Bank Loud IV: Repeat Offender VI",
            "desc": "Beat Branch Bank 25 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79ad921282a2b1cf03ca5": {
        "api": {
            "title": "Branch Bank Loud IV: Repeat Offender VII",
            "desc": "Beat Branch Bank 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79b2f21282a2b1cf03e56": {
        "api": {
            "title": "Branch Bank Loud IV: Repeat Offender VIII",
            "desc": "Beat Branch Bank 40 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79bfa21282a2b1cf04076": {
        "api": {
            "title": "Branch Bank Stealthy I: Repeat Offender V",
            "desc": "Beat Branch Bank 80 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79c5c21282a2b1cf04378": {
        "api": {
            "title": "Branch Bank Stealthy I: Repeat Offender VI",
            "desc": "Beat Branch Bank 100 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79cac21282a2b1cf044c9": {
        "api": {
            "title": "Branch Bank Stealthy I: Repeat Offender VII",
            "desc": "Beat Branch Bank 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79cef21282a2b1cf04760": {
        "api": {
            "title": "Branch Bank Stealthy I: Repeat Offender VIII",
            "desc": "Beat Branch Bank 150 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79eac21282a2b1cf051d7": {
        "api": {
            "title": "Branch Bank Stealthy II: Repeat Offender V",
            "desc": "Beat Branch Bank 55 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79ef721282a2b1cf05360": {
        "api": {
            "title": "Branch Bank Stealthy II: Repeat Offender VI",
            "desc": "Beat Branch Bank 70 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79f5e21282a2b1cf05515": {
        "api": {
            "title": "Branch Bank Stealthy II: Repeat Offender VII",
            "desc": "Beat Branch Bank 85 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d79fd721282a2b1cf0573d": {
        "api": {
            "title": "Branch Bank Stealthy II: Repeat Offender VIII",
            "desc": "Beat Branch Bank 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b3e821282a2b1cf11027": {
        "api": {
            "title": "Branch Bank Stealthy III: Repeat Offender V",
            "desc": "Beat Branch Bank 35 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b43421282a2b1cf11028": {
        "api": {
            "title": "Branch Bank Stealthy III: Repeat Offender VI",
            "desc": "Beat Branch Bank 50 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b48f21282a2b1cf11fcb": {
        "api": {
            "title": "Branch Bank Stealthy III: Repeat Offender VII",
            "desc": "Beat Branch Bank 65 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b50e21282a2b1cf121f3": {
        "api": {
            "title": "Branch Bank Stealthy III: Repeat Offender VIII",
            "desc": "Beat Branch Bank 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b6c721282a2b1cf13b7e": {
        "api": {
            "title": "Branch Bank Stealthy IV: Repeat Offender V",
            "desc": "Beat Branch Bank 20 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b72f21282a2b1cf13c59": {
        "api": {
            "title": "Branch Bank Stealthy IV: Repeat Offender VI",
            "desc": "Beat Branch Bank 25 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b77421282a2b1cf13cc6": {
        "api": {
            "title": "Branch Bank Stealthy IV: Repeat Offender VII",
            "desc": "Beat Branch Bank 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b7e521282a2b1cf13d33": {
        "api": {
            "title": "Branch Bank Stealthy IV: Repeat Offender VIII",
            "desc": "Beat Branch Bank 40 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7b9de21282a2b1cf15f5d": {
        "api": {
            "title": "Jewelry Store Loud I: Repeat Offender V",
            "desc": "Beat Jewelry Store 80 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7dfeb21282a2b1cf26cf5": {
        "api": {
            "title": "Jewelry Store Loud I: Repeat Offender VI",
            "desc": "Beat Jewelry Store 100 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e05821282a2b1cf27e42": {
        "api": {
            "title": "Jewelry Store Loud I: Repeat Offender VII",
            "desc": "Beat Jewelry Store 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e0d621282a2b1cf2847f": {
        "api": {
            "title": "Jewelry Store Loud I: Repeat Offender VIII",
            "desc": "Beat Jewelry Store 150 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e18821282a2b1cf2884a": {
        "api": {
            "title": "Jewelry Store Loud II: Repeat Offender V",
            "desc": "Beat Jewelry Store 55 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e1d321282a2b1cf28924": {
        "api": {
            "title": "Jewelry Store Loud II: Repeat Offender VI",
            "desc": "Beat Jewelry Store 70 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e27621282a2b1cf28a68": {
        "api": {
            "title": "Jewelry Store Loud II: Repeat Offender VII",
            "desc": "Beat Jewelry Store 85 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e2c021282a2b1cf28ad5": {
        "api": {
            "title": "Jewelry Store Loud II: Repeat Offender VIII",
            "desc": "Beat Jewelry Store 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e38921282a2b1cf28d00": {
        "api": {
            "title": "Jewelry Store Loud III: Repeat Offender V",
            "desc": "Beat Jewelry Store 35 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e3d621282a2b1cf28eb2": {
        "api": {
            "title": "Jewelry Store Loud III: Repeat Offender VI",
            "desc": "Beat Jewelry Store 50 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e44621282a2b1cf29d97": {
        "api": {
            "title": "Jewelry Store Loud III: Repeat Offender VII",
            "desc": "Beat Jewelry Store 65 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e4dd21282a2b1cf29fc1": {
        "api": {
            "title": "Jewelry Store Loud III: Repeat Offender VIII",
            "desc": "Beat Jewelry Store 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e58221282a2b1cf2a249": {
        "api": {
            "title": "Jewelry Store Loud IV: Repeat Offender V",
            "desc": "Beat Jewelry Store 20 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e5cd21282a2b1cf2a557": {
        "api": {
            "title": "Jewelry Store Loud IV: Repeat Offender VI",
            "desc": "Beat Jewelry Store 25 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e62321282a2b1cf2a5cf": {
        "api": {
            "title": "Jewelry Store Loud IV: Repeat Offender VII",
            "desc": "Beat Jewelry Store 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e6b421282a2b1cf2b5a0": {
        "api": {
            "title": "Jewelry Store Loud IV: Repeat Offender VIII",
            "desc": "Beat Jewelry Store 40 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e7bc21282a2b1cf2ba7c": {
        "api": {
            "title": "Jewelry Store Stealthy I: Repeat Offender V",
            "desc": "Beat Jewelry Store 80 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e87d21282a2b1cf2ca50": {
        "api": {
            "title": "Jewelry Store Stealthy I: Repeat Offender VI",
            "desc": "Beat Jewelry Store 100 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e8b621282a2b1cf2ca51": {
        "api": {
            "title": "Jewelry Store Stealthy I: Repeat Offender VII",
            "desc": "Beat Jewelry Store 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d7e8f321282a2b1cf2cb2d": {
        "api": {
            "title": "Jewelry Store Stealthy I: Repeat Offender VIII",
            "desc": "Beat Jewelry Store 150 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8d81821282a2b1cf90005": {
        "api": {
            "title": "Jewelry Store Stealthy II: Repeat Offender V",
            "desc": "Beat Jewelry Store 55 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8d85e21282a2b1cf9014a": {
        "api": {
            "title": "Jewelry Store Stealthy II: Repeat Offender VI",
            "desc": "Beat Jewelry Store 70 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8d8eb21282a2b1cf904b2": {
        "api": {
            "title": "Jewelry Store Stealthy II: Repeat Offender VII",
            "desc": "Beat Jewelry Store 85 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8d93621282a2b1cf905f6": {
        "api": {
            "title": "Jewelry Store Stealthy II: Repeat Offender VIII",
            "desc": "Beat Jewelry Store 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8dd7121282a2b1cf9396b": {
        "api": {
            "title": "Jewelry Store Stealthy III: Repeat Offender V",
            "desc": "Beat Jewelry Store 35 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8de3c21282a2b1cf94914": {
        "api": {
            "title": "Jewelry Store Stealthy III: Repeat Offender VI",
            "desc": "Beat Jewelry Store 50 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8ded521282a2b1cf949f5": {
        "api": {
            "title": "Jewelry Store Stealthy III: Repeat Offender VII",
            "desc": "Beat Jewelry Store 65 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8df5721282a2b1cf94a65": {
        "api": {
            "title": "Jewelry Store Stealthy III: Repeat Offender VIII",
            "desc": "Beat Jewelry Store 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8e06b21282a2b1cf95bf3": {
        "api": {
            "title": "Jewelry Store Stealthy IV: Repeat Offender V",
            "desc": "Beat Jewelry Store 20 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8e0b421282a2b1cf95c61": {
        "api": {
            "title": "Jewelry Store Stealthy IV: Repeat Offender VI",
            "desc": "Beat Jewelry Store 25 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8e13921282a2b1cf960a2": {
        "api": {
            "title": "Jewelry Store Stealthy IV: Repeat Offender VII",
            "desc": "Beat Jewelry Store 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8e1c321282a2b1cf96fdf": {
        "api": {
            "title": "Jewelry Store Stealthy IV: Repeat Offender VIII",
            "desc": "Beat Jewelry Store 40 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8e6b821282a2b1cf99d72": {
        "api": {
            "title": "Art Gallery Loud I: Repeat Offender V",
            "desc": "Beat Art Gallery 80 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8e89621282a2b1cf9b37b": {
        "api": {
            "title": "Art Gallery Loud I: Repeat Offender VI",
            "desc": "Beat Art Gallery 100 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8e95121282a2b1cf9b7a2": {
        "api": {
            "title": "Art Gallery Loud I: Repeat Offender VII",
            "desc": "Beat Art Gallery 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8e9a721282a2b1cf9b7a3": {
        "api": {
            "title": "Art Gallery Loud I: Repeat Offender VIII",
            "desc": "Beat Art Gallery 150 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8eab621282a2b1cf9be97": {
        "api": {
            "title": "Art Gallery Loud II: Repeat Offender V",
            "desc": "Beat Art Gallery 55 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8eb0b21282a2b1cf9be98": {
        "api": {
            "title": "Art Gallery Loud II: Repeat Offender VI",
            "desc": "Beat Art Gallery 70 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8eb6721282a2b1cf9c230": {
        "api": {
            "title": "Art Gallery Loud II: Repeat Offender VII",
            "desc": "Beat Art Gallery 85 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8ebb121282a2b1cf9c458": {
        "api": {
            "title": "Art Gallery Loud II: Repeat Offender VIII",
            "desc": "Beat Art Gallery 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8f0c621282a2b1cf9d390": {
        "api": {
            "title": "Art Gallery Loud III: Repeat Offender V",
            "desc": "Beat Art Gallery 35 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8f17121282a2b1cf9d4e4": {
        "api": {
            "title": "Art Gallery Loud III: Repeat Offender VI",
            "desc": "Beat Art Gallery 50 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8f1ec21282a2b1cf9d63f": {
        "api": {
            "title": "Art Gallery Loud III: Repeat Offender VII",
            "desc": "Beat Art Gallery 65 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d8f24221282a2b1cf9d640": {
        "api": {
            "title": "Art Gallery Loud III: Repeat Offender VIII",
            "desc": "Beat Art Gallery 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9166121282a2b1cfa534f": {
        "api": {
            "title": "Art Gallery Loud IV: Repeat Offender V",
            "desc": "Beat Art Gallery 20 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9169f21282a2b1cfa5497": {
        "api": {
            "title": "Art Gallery Loud IV: Repeat Offender VI",
            "desc": "Beat Art Gallery 25 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d916f021282a2b1cfa5574": {
        "api": {
            "title": "Art Gallery Loud IV: Repeat Offender VII",
            "desc": "Beat Art Gallery 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9173521282a2b1cfa59c3": {
        "api": {
            "title": "Art Gallery Loud IV: Repeat Offender VIII",
            "desc": "Beat Art Gallery 40 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9181621282a2b1cfa5f6d": {
        "api": {
            "title": "Art Gallery Stealthy I: Repeat Offender V",
            "desc": "Beat Art Gallery 80 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9186821282a2b1cfa6122": {
        "api": {
            "title": "Art Gallery Stealthy I: Repeat Offender VI",
            "desc": "Beat Art Gallery 100 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d918b421282a2b1cfa61ff": {
        "api": {
            "title": "Art Gallery Stealthy I: Repeat Offender VII",
            "desc": "Beat Art Gallery 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9190521282a2b1cfa65eb": {
        "api": {
            "title": "Art Gallery Stealthy I: Repeat Offender VIII",
            "desc": "Beat Art Gallery 150 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d91b6f21282a2b1cfa72d4": {
        "api": {
            "title": "Art Gallery Stealthy II: Repeat Offender V",
            "desc": "Beat Art Gallery 55 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d91bbf21282a2b1cfa760d": {
        "api": {
            "title": "Art Gallery Stealthy II: Repeat Offender VI",
            "desc": "Beat Art Gallery 70 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d91bfa21282a2b1cfa7c85": {
        "api": {
            "title": "Art Gallery Stealthy II: Repeat Offender VII",
            "desc": "Beat Art Gallery 85 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d91c4021282a2b1cfa7d60": {
        "api": {
            "title": "Art Gallery Stealthy II: Repeat Offender VIII",
            "desc": "Beat Art Gallery 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d91fd421282a2b1cfa8a35": {
        "api": {
            "title": "Art Gallery Stealthy III: Repeat Offender V",
            "desc": "Beat Art Gallery 35 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9201721282a2b1cfa8aa3": {
        "api": {
            "title": "Art Gallery Stealthy III: Repeat Offender VI",
            "desc": "Beat Art Gallery 50 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9207a21282a2b1cfa8f67": {
        "api": {
            "title": "Art Gallery Stealthy III: Repeat Offender VII",
            "desc": "Beat Art Gallery 65 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d920ca21282a2b1cfa9055": {
        "api": {
            "title": "Art Gallery Stealthy III: Repeat Offender VIII",
            "desc": "Beat Art Gallery 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d925a021282a2b1cfa9935": {
        "api": {
            "title": "Art Gallery Stealthy IV: Repeat Offender V",
            "desc": "Beat Art Gallery 20 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9260f21282a2b1cfa9a20": {
        "api": {
            "title": "Art Gallery Stealthy IV: Repeat Offender VI",
            "desc": "Beat Art Gallery 25 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9267421282a2b1cfa9b10": {
        "api": {
            "title": "Art Gallery Stealthy IV: Repeat Offender VII",
            "desc": "Beat Art Gallery 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d926b421282a2b1cfa9bea": {
        "api": {
            "title": "Art Gallery Stealthy IV: Repeat Offender VIII",
            "desc": "Beat Art Gallery 40 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9301321282a2b1cfabcdc": {
        "api": {
            "title": "Night Club Loud I: Repeat Offender V",
            "desc": "Beat Night Club 80 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9305121282a2b1cfabcdd": {
        "api": {
            "title": "Night Club Loud I: Repeat Offender VI",
            "desc": "Beat Night Club 100 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9309721282a2b1cfabf0e": {
        "api": {
            "title": "Night Club Loud I: Repeat Offender VII",
            "desc": "Beat Night Club 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d930c321282a2b1cfabf0f": {
        "api": {
            "title": "Night Club Loud I: Repeat Offender VIII",
            "desc": "Beat Night Club 150 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d93ae321282a2b1cfaeff5": {
        "api": {
            "title": "Night Club Loud II: Repeat Offender V",
            "desc": "Beat Night Club 55 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d93b5521282a2b1cfaf100": {
        "api": {
            "title": "Night Club Loud II: Repeat Offender VI",
            "desc": "Beat Night Club 70 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d93bb621282a2b1cfaf101": {
        "api": {
            "title": "Night Club Loud II: Repeat Offender VII",
            "desc": "Beat Night Club 85 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d93bf821282a2b1cfaf24b": {
        "api": {
            "title": "Night Club Loud II: Repeat Offender VIII",
            "desc": "Beat Night Club 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d93e4c21282a2b1cfafa14": {
        "api": {
            "title": "Night Club Loud III: Repeat Offender V",
            "desc": "Beat Night Club 35 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d93eb321282a2b1cfafab6": {
        "api": {
            "title": "Night Club Loud III: Repeat Offender VI",
            "desc": "Beat Night Club 50 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d93eef21282a2b1cfafab7": {
        "api": {
            "title": "Night Club Loud III: Repeat Offender VII",
            "desc": "Beat Night Club 65 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d93f2621282a2b1cfafab8": {
        "api": {
            "title": "Night Club Loud III: Repeat Offender VIII",
            "desc": "Beat Night Club 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9427121282a2b1cfb02dd": {
        "api": {
            "title": "Night Club Loud IV: Repeat Offender V",
            "desc": "Beat Night Club 20 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d942b721282a2b1cfb02de": {
        "api": {
            "title": "Night Club Loud IV: Repeat Offender VI",
            "desc": "Beat Night Club 25 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9433c21282a2b1cfb02df": {
        "api": {
            "title": "Night Club Loud IV: Repeat Offender VII",
            "desc": "Beat Night Club 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9437221282a2b1cfb02e0": {
        "api": {
            "title": "Night Club Loud IV: Repeat Offender VIII",
            "desc": "Beat Night Club 40 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d945b421282a2b1cfb0ee9": {
        "api": {
            "title": "Night Club Stealthy I: Repeat Offender V",
            "desc": "Beat Night Club 80 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d945e421282a2b1cfb0eea": {
        "api": {
            "title": "Night Club Stealthy I: Repeat Offender VI",
            "desc": "Beat Night Club 100 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9463c21282a2b1cfb1413": {
        "api": {
            "title": "Night Club Stealthy I: Repeat Offender VII",
            "desc": "Beat Night Club 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9466621282a2b1cfb1414": {
        "api": {
            "title": "Night Club Stealthy I: Repeat Offender VIII",
            "desc": "Beat Night Club 150 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9477a21282a2b1cfb1f5b": {
        "api": {
            "title": "Night Club Stealthy II: Repeat Offender V",
            "desc": "Beat Night Club 55 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d947b521282a2b1cfb2734": {
        "api": {
            "title": "Night Club Stealthy II: Repeat Offender VI",
            "desc": "Beat Night Club 70 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d947f021282a2b1cfb2735": {
        "api": {
            "title": "Night Club Stealthy II: Repeat Offender VII",
            "desc": "Beat Night Club 85 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63d9483b21282a2b1cfb2aa0": {
        "api": {
            "title": "Night Club Stealthy II: Repeat Offender VIII",
            "desc": "Beat Night Club 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da425721282a2b1cff5e04": {
        "api": {
            "title": "Night Club Stealthy III: Repeat Offender V",
            "desc": "Beat Night Club 35 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da42a521282a2b1cff5f4b": {
        "api": {
            "title": "Night Club Stealthy III: Repeat Offender VI",
            "desc": "Beat Night Club 50 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da42f321282a2b1cff6096": {
        "api": {
            "title": "Night Club Stealthy III: Repeat Offender VII",
            "desc": "Beat Night Club 65 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da433921282a2b1cff6251": {
        "api": {
            "title": "Night Club Stealthy III: Repeat Offender VIII",
            "desc": "Beat Night Club 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da5c3021282a2b1c000301": {
        "api": {
            "title": "Night Club Stealthy IV: Repeat Offender V",
            "desc": "Beat Night Club 20 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da5c6921282a2b1c0003df": {
        "api": {
            "title": "Night Club Stealthy IV: Repeat Offender VI",
            "desc": "Beat Night Club 25 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da5cde21282a2b1c0004be": {
        "api": {
            "title": "Night Club Stealthy IV: Repeat Offender VII",
            "desc": "Beat Night Club 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da5d2a21282a2b1c00089b": {
        "api": {
            "title": "Night Club Stealthy IV: Repeat Offender VIII",
            "desc": "Beat Night Club 40 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da623021282a2b1c003188": {
        "api": {
            "title": "Sharke Bank (FP) Loud I: Repeat Offender V",
            "desc": "Beat Sharke Bank (FP) 80 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da627e21282a2b1c003a13": {
        "api": {
            "title": "Sharke Bank (FP) Loud I: Repeat Offender VI",
            "desc": "Beat Sharke Bank (FP) 100 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da62f421282a2b1c003af6": {
        "api": {
            "title": "Sharke Bank (FP) Loud I: Repeat Offender VII",
            "desc": "Beat Sharke Bank (FP) 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da633321282a2b1c003cb4": {
        "api": {
            "title": "Sharke Bank (FP) Loud I: Repeat Offender VIII",
            "desc": "Beat Sharke Bank (FP) 150 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da656421282a2b1c004e86": {
        "api": {
            "title": "Sharke Bank (FP) Loud II: Repeat Offender V",
            "desc": "Beat Sharke Bank (FP) 55 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da65b121282a2b1c00541b": {
        "api": {
            "title": "Sharke Bank (FP) Loud II: Repeat Offender VI",
            "desc": "Beat Sharke Bank (FP) 70 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da65fd21282a2b1c005641": {
        "api": {
            "title": "Sharke Bank (FP) Loud II: Repeat Offender VII",
            "desc": "Beat Sharke Bank (FP) 85 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da664f21282a2b1c005867": {
        "api": {
            "title": "Sharke Bank (FP) Loud II: Repeat Offender VIII",
            "desc": "Beat Sharke Bank (FP) 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da66f121282a2b1c005b61": {
        "api": {
            "title": "Sharke Bank (FP) Loud III: Repeat Offender V",
            "desc": "Beat Sharke Bank (FP) 35 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da673a21282a2b1c005fb9": {
        "api": {
            "title": "Sharke Bank (FP) Loud III: Repeat Offender VI",
            "desc": "Beat Sharke Bank (FP) 50 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da677b21282a2b1c006408": {
        "api": {
            "title": "Sharke Bank (FP) Loud III: Repeat Offender VII",
            "desc": "Beat Sharke Bank (FP) 65 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da67c721282a2b1c0065d7": {
        "api": {
            "title": "Sharke Bank (FP) Loud III: Repeat Offender VIII",
            "desc": "Beat Sharke Bank (FP) 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da683921282a2b1c006cb6": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV: Repeat Offender V",
            "desc": "Beat Sharke Bank (FP) 20 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da687121282a2b1c006d23": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV: Repeat Offender VI",
            "desc": "Beat Sharke Bank (FP) 25 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da68a521282a2b1c006e78": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV: Repeat Offender VII",
            "desc": "Beat Sharke Bank (FP) 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da68d921282a2b1c006e79": {
        "api": {
            "title": "Sharke Bank (FP) Loud IV: Repeat Offender VIII",
            "desc": "Beat Sharke Bank (FP) 40 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da74a621282a2b1c010d4c": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I: Repeat Offender V",
            "desc": "Beat Sharke Bank (FP) 80 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da751e21282a2b1c011273": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I: Repeat Offender VI",
            "desc": "Beat Sharke Bank (FP) 100 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da756621282a2b1c011428": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I: Repeat Offender VII",
            "desc": "Beat Sharke Bank (FP) 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da760821282a2b1c011bce": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy I: Repeat Offender VIII",
            "desc": "Beat Sharke Bank (FP) 150 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da786721282a2b1c01357f": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II: Repeat Offender V",
            "desc": "Beat Sharke Bank (FP) 55 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da78de21282a2b1c013a9b": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II: Repeat Offender VI",
            "desc": "Beat Sharke Bank (FP) 70 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da793121282a2b1c013e03": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II: Repeat Offender VII",
            "desc": "Beat Sharke Bank (FP) 85 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da796c21282a2b1c013e77": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy II: Repeat Offender VIII",
            "desc": "Beat Sharke Bank (FP) 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da79d121282a2b1c014358": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III: Repeat Offender V",
            "desc": "Beat Sharke Bank (FP) 35 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7a1c21282a2b1c0145e3": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III: Repeat Offender VI",
            "desc": "Beat Sharke Bank (FP) 50 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7a7621282a2b1c014fda": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III: Repeat Offender VII",
            "desc": "Beat Sharke Bank (FP) 65 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7ac821282a2b1c01543e": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy III: Repeat Offender VIII",
            "desc": "Beat Sharke Bank (FP) 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7b6a21282a2b1c015814": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV: Repeat Offender V",
            "desc": "Beat Sharke Bank (FP) 20 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7baa21282a2b1c015815": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV: Repeat Offender VI",
            "desc": "Beat Sharke Bank (FP) 25 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7bdd21282a2b1c015980": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV: Repeat Offender VII",
            "desc": "Beat Sharke Bank (FP) 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7c2b21282a2b1c015b44": {
        "api": {
            "title": "Sharke Bank (FP) Stealthy IV: Repeat Offender VIII",
            "desc": "Beat Sharke Bank (FP) 40 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7d3521282a2b1c0166b9": {
        "api": {
            "title": "Cargo Dock Loud I: Repeat Offender V",
            "desc": "Beat Cargo Dock 80 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7d6f21282a2b1c016798": {
        "api": {
            "title": "Cargo Dock Loud I: Repeat Offender VI",
            "desc": "Beat Cargo Dock 100 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7dd321282a2b1c0168e9": {
        "api": {
            "title": "Cargo Dock Loud I: Repeat Offender VII",
            "desc": "Beat Cargo Dock 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da7e1c21282a2b1c0168ea": {
        "api": {
            "title": "Cargo Dock Loud I: Repeat Offender VIII",
            "desc": "Beat Cargo Dock 150 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da814f21282a2b1c0181ab": {
        "api": {
            "title": "Cargo Dock Loud II: Repeat Offender V",
            "desc": "Beat Cargo Dock 55 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da818d21282a2b1c018c04": {
        "api": {
            "title": "Cargo Dock Loud II: Repeat Offender VI",
            "desc": "Beat Cargo Dock 70 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da81e321282a2b1c018c05": {
        "api": {
            "title": "Cargo Dock Loud II: Repeat Offender VII",
            "desc": "Beat Cargo Dock 85 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da822a21282a2b1c018c06": {
        "api": {
            "title": "Cargo Dock Loud II: Repeat Offender VIII",
            "desc": "Beat Cargo Dock 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da82db21282a2b1c0195e9": {
        "api": {
            "title": "Cargo Dock Loud III: Repeat Offender V",
            "desc": "Beat Cargo Dock 35 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da834821282a2b1c019e72": {
        "api": {
            "title": "Cargo Dock Loud III: Repeat Offender VI",
            "desc": "Beat Cargo Dock 50 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da837a21282a2b1c019f51": {
        "api": {
            "title": "Cargo Dock Loud III: Repeat Offender VII",
            "desc": "Beat Cargo Dock 65 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da83bb21282a2b1c01a396": {
        "api": {
            "title": "Cargo Dock Loud III: Repeat Offender VIII",
            "desc": "Beat Cargo Dock 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da850e21282a2b1c01a9e5": {
        "api": {
            "title": "Cargo Dock Loud IV: Repeat Offender V",
            "desc": "Beat Cargo Dock 20 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da854a21282a2b1c01ab34": {
        "api": {
            "title": "Cargo Dock Loud IV: Repeat Offender VI",
            "desc": "Beat Cargo Dock 25 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da859e21282a2b1c01adc7": {
        "api": {
            "title": "Cargo Dock Loud IV: Repeat Offender VII",
            "desc": "Beat Cargo Dock 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da861821282a2b1c01b21b": {
        "api": {
            "title": "Cargo Dock Loud IV: Repeat Offender VIII",
            "desc": "Beat Cargo Dock 40 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da86d321282a2b1c01b825": {
        "api": {
            "title": "Cargo Dock Stealthy I: Repeat Offender V",
            "desc": "Beat Cargo Dock 80 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da870e21282a2b1c01b826": {
        "api": {
            "title": "Cargo Dock Stealthy I: Repeat Offender VI",
            "desc": "Beat Cargo Dock 100 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da876821282a2b1c01bd49": {
        "api": {
            "title": "Cargo Dock Stealthy I: Repeat Offender VII",
            "desc": "Beat Cargo Dock 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da87a421282a2b1c01be31": {
        "api": {
            "title": "Cargo Dock Stealthy I: Repeat Offender VIII",
            "desc": "Beat Cargo Dock 150 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da881621282a2b1c01c27c": {
        "api": {
            "title": "Cargo Dock Stealthy II: Repeat Offender V",
            "desc": "Beat Cargo Dock 55 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da888521282a2b1c01c5e2": {
        "api": {
            "title": "Cargo Dock Stealthy II: Repeat Offender VI",
            "desc": "Beat Cargo Dock 70 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da88f421282a2b1c01cb28": {
        "api": {
            "title": "Cargo Dock Stealthy II: Repeat Offender VII",
            "desc": "Beat Cargo Dock 85 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da895321282a2b1c01cf72": {
        "api": {
            "title": "Cargo Dock Stealthy II: Repeat Offender VIII",
            "desc": "Beat Cargo Dock 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8a1a21282a2b1c01dd8f": {
        "api": {
            "title": "Cargo Dock Stealthy III: Repeat Offender V",
            "desc": "Beat Cargo Dock 35 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8a5b21282a2b1c01dd90": {
        "api": {
            "title": "Cargo Dock Stealthy III: Repeat Offender VI",
            "desc": "Beat Cargo Dock 50 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8a9d21282a2b1c01de93": {
        "api": {
            "title": "Cargo Dock Stealthy III: Repeat Offender VII",
            "desc": "Beat Cargo Dock 65 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8ae821282a2b1c01e2e7": {
        "api": {
            "title": "Cargo Dock Stealthy III: Repeat Offender VIII",
            "desc": "Beat Cargo Dock 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8b4921282a2b1c01e2e8": {
        "api": {
            "title": "Cargo Dock Stealthy IV: Repeat Offender V",
            "desc": "Beat Cargo Dock 20 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8b9d21282a2b1c01e651": {
        "api": {
            "title": "Cargo Dock Stealthy IV: Repeat Offender VI",
            "desc": "Beat Cargo Dock 25 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8bf921282a2b1c01e88e": {
        "api": {
            "title": "Cargo Dock Stealthy IV: Repeat Offender VII",
            "desc": "Beat Cargo Dock 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8c2e21282a2b1c01ebfd": {
        "api": {
            "title": "Cargo Dock Stealthy IV: Repeat Offender VIII",
            "desc": "Beat Cargo Dock 40 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8e7421282a2b1c01faac": {
        "api": {
            "title": "Penthouse Loud I: Repeat Offender V",
            "desc": "Beat Penthouse 80 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8ebf21282a2b1c01fe13": {
        "api": {
            "title": "Penthouse Loud I: Repeat Offender VI",
            "desc": "Beat Penthouse 100 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8ef321282a2b1c01fe14": {
        "api": {
            "title": "Penthouse Loud I: Repeat Offender VII",
            "desc": "Beat Penthouse 120 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8f2c21282a2b1c01fef0": {
        "api": {
            "title": "Penthouse Loud I: Repeat Offender VIII",
            "desc": "Beat Penthouse 150 times on Normal or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8f8621282a2b1c020186": {
        "api": {
            "title": "Penthouse Loud II: Repeat Offender V",
            "desc": "Beat Penthouse 55 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8fb221282a2b1c020260": {
        "api": {
            "title": "Penthouse Loud II: Repeat Offender VI",
            "desc": "Beat Penthouse 70 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da8fe821282a2b1c02033b": {
        "api": {
            "title": "Penthouse Loud II: Repeat Offender VII",
            "desc": "Beat Penthouse 85 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da902e21282a2b1c020418": {
        "api": {
            "title": "Penthouse Loud II: Repeat Offender VIII",
            "desc": "Beat Penthouse 100 times on Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da909a21282a2b1c02060e": {
        "api": {
            "title": "Penthouse Loud III: Repeat Offender V",
            "desc": "Beat Penthouse 35 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da90d821282a2b1c0206e9": {
        "api": {
            "title": "Penthouse Loud III: Repeat Offender VI",
            "desc": "Beat Penthouse 50 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da911821282a2b1c020781": {
        "api": {
            "title": "Penthouse Loud III: Repeat Offender VII",
            "desc": "Beat Penthouse 65 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da915221282a2b1c020782": {
        "api": {
            "title": "Penthouse Loud III: Repeat Offender VIII",
            "desc": "Beat Penthouse 80 times on Very Hard or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da924f21282a2b1c020beb": {
        "api": {
            "title": "Penthouse Loud IV: Repeat Offender V",
            "desc": "Beat Penthouse 20 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da928521282a2b1c020bec": {
        "api": {
            "title": "Penthouse Loud IV: Repeat Offender VI",
            "desc": "Beat Penthouse 25 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da92ce21282a2b1c020ce0": {
        "api": {
            "title": "Penthouse Loud IV: Repeat Offender VII",
            "desc": "Beat Penthouse 30 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da930c21282a2b1c020e10": {
        "api": {
            "title": "Penthouse Loud IV: Repeat Offender VIII",
            "desc": "Beat Penthouse 40 times on Overkill or higher difficulty after the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da939421282a2b1c020e11": {
        "api": {
            "title": "Penthouse Stealthy I: Repeat Offender V",
            "desc": "Beat Penthouse 80 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da93c121282a2b1c020e12": {
        "api": {
            "title": "Penthouse Stealthy I: Repeat Offender VI",
            "desc": "Beat Penthouse 100 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da93fa21282a2b1c020e13": {
        "api": {
            "title": "Penthouse Stealthy I: Repeat Offender VII",
            "desc": "Beat Penthouse 120 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da944e21282a2b1c020ef1": {
        "api": {
            "title": "Penthouse Stealthy I: Repeat Offender VIII",
            "desc": "Beat Penthouse 150 times on Normal or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da94c921282a2b1c020ef2": {
        "api": {
            "title": "Penthouse Stealthy II: Repeat Offender V",
            "desc": "Beat Penthouse 55 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da951821282a2b1c021277": {
        "api": {
            "title": "Penthouse Stealthy II: Repeat Offender VI",
            "desc": "Beat Penthouse 70 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da955021282a2b1c021278": {
        "api": {
            "title": "Penthouse Stealthy II: Repeat Offender VII",
            "desc": "Beat Penthouse 85 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da958c21282a2b1c021279": {
        "api": {
            "title": "Penthouse Stealthy II: Repeat Offender VIII",
            "desc": "Beat Penthouse 100 times on Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da95f421282a2b1c02127a": {
        "api": {
            "title": "Penthouse Stealthy III: Repeat Offender V",
            "desc": "Beat Penthouse 35 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da962821282a2b1c021397": {
        "api": {
            "title": "Penthouse Stealthy III: Repeat Offender VI",
            "desc": "Beat Penthouse 50 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da966a21282a2b1c021471": {
        "api": {
            "title": "Penthouse Stealthy III: Repeat Offender VII",
            "desc": "Beat Penthouse 65 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da96b021282a2b1c021472": {
        "api": {
            "title": "Penthouse Stealthy III: Repeat Offender VIII",
            "desc": "Beat Penthouse 80 times on Very Hard or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da971221282a2b1c021663": {
        "api": {
            "title": "Penthouse Stealthy IV: Repeat Offender V",
            "desc": "Beat Penthouse 20 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da974d21282a2b1c021664": {
        "api": {
            "title": "Penthouse Stealthy IV: Repeat Offender VI",
            "desc": "Beat Penthouse 25 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da978921282a2b1c021b3f": {
        "api": {
            "title": "Penthouse Stealthy IV: Repeat Offender VII",
            "desc": "Beat Penthouse 30 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63da97c421282a2b1c021b40": {
        "api": {
            "title": "Penthouse Stealthy IV: Repeat Offender VIII",
            "desc": "Beat Penthouse 40 times on Overkill or higher difficulty before the Assault has started"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3aed67f4d322dc61976e6": {
        "api": {
            "title": "NWB9 Rookie",
            "desc": "Complete a heist using the NWB9 with a mod equipped"
        },
        "game": {
            "title": "NORTHWEST B-9 STARTER KIT",
            "desc": "Complete a heist using the Northwest B-9 Starter with a mod equipped."
        }
    },
    "63e3af7e7f4d322dc6197d78": {
        "api": {
            "title": "CAR4 Rookie",
            "desc": "Complete a heist using the CAR4 with a mod equipped"
        },
        "game": {
            "title": "CAR-4 STARTER KIT",
            "desc": "Complete a heist using the CAR-4 with a mod equipped."
        }
    },
    "63e3b0257f4d322dc6198484": {
        "api": {
            "title": "VF7S Rookie",
            "desc": "Complete a heist using the VF7S with a mod equipped"
        },
        "game": {
            "title": "VF-7S STARTER KIT",
            "desc": "Complete a heist using the VF-7S with a mod equipped."
        }
    },
    "63e3b0897f4d322dc6198648": {
        "api": {
            "title": "KU59 Rookie",
            "desc": "Complete a heist using the KU59 with a mod equipped"
        },
        "game": {
            "title": "KU-59 STARTER KIT",
            "desc": "Complete a heist using the KU-59 with a mod equipped."
        }
    },
    "63e3b0e37f4d322dc619872b": {
        "api": {
            "title": "Commando Rookie",
            "desc": "Complete a heist using the Commando with a mod equipped"
        },
        "game": {
            "title": "ZIV COMMANDO STARTER KIT",
            "desc": "Complete a heist using the Ziv Commando with a mod equipped."
        }
    },
    "63e3b1bd7f4d322dc619907b": {
        "api": {
            "title": "PC9 Rookie",
            "desc": "Complete a heist using the PC9 with a mod equipped"
        },
        "game": {
            "title": "FIK PC9 STARTER KIT",
            "desc": "Complete a heist using the FIK PC9 with a mod equipped."
        }
    },
    "63e3b20f7f4d322dc61996b9": {
        "api": {
            "title": "Compact7 Rookie",
            "desc": "Complete a heist using the Compact7 with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3b2667f4d322dc619979b": {
        "api": {
            "title": "R880 Rookie",
            "desc": "Complete a heist using the R880 with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3b2fd7f4d322dc619987d": {
        "api": {
            "title": "Mosconi12C Rookie",
            "desc": "Complete a heist using the Mosconi12C with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3b3907f4d322dc6199c9e": {
        "api": {
            "title": "A114 Rookie",
            "desc": "Complete a heist using the A114 with a mod equipped"
        },
        "game": {
            "title": "SA A144 STARTER KIT",
            "desc": "Complete a heist using the SA A144 with a mod equipped."
        }
    },
    "63e3b3ea7f4d322dc6199e08": {
        "api": {
            "title": "R900S Rookie",
            "desc": "Complete a heist using the R900S with a mod equipped"
        },
        "game": {
            "title": "REINFELD 900S STARTER KIT",
            "desc": "Complete a heist using the Reinfeld 900S with a mod equipped."
        }
    },
    "63e3b42b7f4d322dc6199fdb": {
        "api": {
            "title": "Stryk7 Rookie",
            "desc": "Complete a heist using the Stryk7 with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3b46a7f4d322dc6199fdc": {
        "api": {
            "title": "S403 Rookie",
            "desc": "Complete a heist using the S403 with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3b4be7f4d322dc619a0cb": {
        "api": {
            "title": "S40 Rookie",
            "desc": "Complete a heist using the S40 with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3b5147f4d322dc619a229": {
        "api": {
            "title": "SPM11 Rookie",
            "desc": "Complete a heist using the SPM11 with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3b5687f4d322dc619a2a8": {
        "api": {
            "title": "Bison Rookie",
            "desc": "Complete a heist using the Bison with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3b5ac7f4d322dc619a2a9": {
        "api": {
            "title": "Castigo44 Rookie",
            "desc": "Complete a heist using the Castigo44 with a mod equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e3cfef7f4d322dc61a0840": {
        "api": {
            "title": "NWB9 Veteran",
            "desc": "Complete a heist with four mod slots filled on the NWB9 with the weapon equipped."
        },
        "game": {
            "title": "NORTHWEST B-9 GEARED UP",
            "desc": "Complete a heist with 4 mod slots filled on the Northwest B-9 with the weapon equipped."
        }
    },
    "63e3d0627f4d322dc61a08b1": {
        "api": {
            "title": "CAR4 Veteran",
            "desc": "Complete a heist with four mod slots filled on the CAR4 with the weapon equipped"
        },
        "game": {
            "title": "CAR-4 GEARED UP",
            "desc": "Complete a heist with 4 mod slots filled on the CAR-4 with the weapon equipped."
        }
    },
    "63e3d0b77f4d322dc61a0994": {
        "api": {
            "title": "VF7S Veteran",
            "desc": "Complete a heist with four mod slots filled on the VF7S with the weapon equipped."
        },
        "game": {
            "title": "VF-7S GEARED UP",
            "desc": "Complete a heist with 4 mod slots filled on the VF-7S with the weapon equipped."
        }
    },
    "63e3d11e7f4d322dc61a0995": {
        "api": {
            "title": "KU59 Veteran",
            "desc": "Complete a heist with four mod slots filled on the KU59 with the weapon equipped."
        },
        "game": {
            "title": "KU-59 GEARED UP",
            "desc": "Complete a heist with 4 mod slots filled on the KU-59 with the weapon equipped."
        }
    },
    "63e3d18e7f4d322dc61a0a7a": {
        "api": {
            "title": "Commando Veteran",
            "desc": "Complete a heist with four mod slots filled on the Commando with the weapon equipped."
        },
        "game": {
            "title": "ZIV COMMANDO GEARED UP",
            "desc": "Complete a heist with 4 mod slots filled on the Ziv Commando with the weapon equipped."
        }
    },
    "63e4ed457f4d322dc61c9b76": {
        "api": {
            "title": "PC9 Veteran",
            "desc": "Complete a heist with four mod slots filled on the PC9 with the weapon equipped"
        },
        "game": {
            "title": "FIK PC9 GEARED UP",
            "desc": "Complete a heist with 4 mod slots filled on the FIK PC9 with the weapon equipped."
        }
    },
    "63e4ed9e7f4d322dc61c9b77": {
        "api": {
            "title": "Compact7 Veteran",
            "desc": "Complete a heist with four mod slots filled on the Compact7 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e4ee267f4d322dc61c9d3c": {
        "api": {
            "title": "R880 Veteran",
            "desc": "Complete a heist with four mod slots filled on the R880 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e4eed37f4d322dc61ca3e6": {
        "api": {
            "title": "Mosconi12C Veteran",
            "desc": "Complete a heist with four mod slots filled on the Mosconi12C with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e4f02c7f4d322dc61ca621": {
        "api": {
            "title": "A114 Veteran",
            "desc": "Complete a heist with four mod slots filled on the A114 with the weapon equipped"
        },
        "game": {
            "title": "SA A144 GEARED UP",
            "desc": "Complete a heist with 4 mod slots filled on the SA A144 with the weapon equipped."
        }
    },
    "63e4f07d7f4d322dc61ca696": {
        "api": {
            "title": "R900S Veteran",
            "desc": "Complete a heist with four mod slots filled on the R900S with the weapon equipped"
        },
        "game": {
            "title": "REINFELD 900S GEARED UP",
            "desc": "Complete a heist with 4 mod slots filled on the Reinfeld 900S with the weapon equipped."
        }
    },
    "63e4f0de7f4d322dc61ca8d6": {
        "api": {
            "title": "Stryk7 Veteran",
            "desc": "Complete a heist with four mod slots filled on the Stryk7 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e4f2127f4d322dc61cac36": {
        "api": {
            "title": "S403 Veteran",
            "desc": "Complete a heist with four mod slots filled on the S403 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e4f2a57f4d322dc61caf1a": {
        "api": {
            "title": "S40 Veteran",
            "desc": "Complete a heist with four mod slots filled on the S40 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e4f2f67f4d322dc61cb3a7": {
        "api": {
            "title": "SPM11 Veteran",
            "desc": "Complete a heist with four mod slots filled on the SPM11 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e4f3437f4d322dc61cb43a": {
        "api": {
            "title": "Bison Veteran",
            "desc": "Complete a heist with four mod slots filled on the Bison with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e4f38a7f4d322dc61cb6e9": {
        "api": {
            "title": "Castigo44 Veteran",
            "desc": "Complete a heist with four mod slots filled on the Castigo44 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e5049e7f4d322dc61d286e": {
        "api": {
            "title": "Tutorial Crowd Control",
            "desc": "Complete Crowd Control Tutorial"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e504eb7f4d322dc61d2c08": {
        "api": {
            "title": "Tutorial Loud Combat",
            "desc": "Complete Loud Combat Tutorial"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e505117f4d322dc61d2c7a": {
        "api": {
            "title": "Tutorial Stealth Detection",
            "desc": "Complete Stealth Detection Tutorial"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e505437f4d322dc61d2dd8": {
        "api": {
            "title": "Tutorial Social Stealth",
            "desc": "Complete Social Stealth Tutorial"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e508ad7f4d322dc61d4a5e": {
        "api": {
            "title": "NWB9 Master",
            "desc": "Complete a heist with all base mods unlocked for the NWB9 with the weapon equipped"
        },
        "game": {
            "title": "NORTHWEST B-9 INVESTED",
            "desc": "Complete a heist with all base mods unlocked for the Northwest B-9 with the weapon equipped."
        }
    },
    "63e509117f4d322dc61d4c23": {
        "api": {
            "title": "CAR4 Master",
            "desc": "Complete a heist with all base mods unlocked for the CAR4 with the weapon equipped"
        },
        "game": {
            "title": "CAR-4 INVESTED",
            "desc": "Complete a heist with all base mods unlocked for the CAR-4 with the weapon equipped."
        }
    },
    "63e509897f4d322dc61d4df6": {
        "api": {
            "title": "VF7S Master",
            "desc": "Complete a heist with all base mods unlocked for the VF7S with the weapon equipped"
        },
        "game": {
            "title": "VF-7S INVESTED",
            "desc": "Complete a heist with all base mods unlocked for the VF-7S with the weapon equipped."
        }
    },
    "63e509d87f4d322dc61d4f4e": {
        "api": {
            "title": "KU59 Master",
            "desc": "Complete a heist with all base mods unlocked for the KU59 with the weapon equipped"
        },
        "game": {
            "title": "KU-59 INVESTED",
            "desc": "Complete a heist with all base mods unlocked for the KU-59 with the weapon equipped."
        }
    },
    "63e50a977f4d322dc61d5182": {
        "api": {
            "title": "Commando Master",
            "desc": "Complete a heist with all base mods unlocked for the Commando with the weapon equipped"
        },
        "game": {
            "title": "ZIV COMMANDO INVESTED",
            "desc": "Complete a heist with all base mods unlocked for the Ziv Commando with the weapon equipped."
        }
    },
    "63e50b507f4d322dc61d56c9": {
        "api": {
            "title": "PC9 Master",
            "desc": "Complete a heist with all base mods unlocked for the PC9 with the weapon equipped"
        },
        "game": {
            "title": "FIK PC9 INVESTED",
            "desc": "Complete a heist with all base mods unlocked for the FIK PC9 with the weapon equipped."
        }
    },
    "63e50bd77f4d322dc61d5bef": {
        "api": {
            "title": "Compact7 Master",
            "desc": "Complete a heist with all base mods unlocked for the Compact7 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e50c1c7f4d322dc61d5dba": {
        "api": {
            "title": "R880 Master",
            "desc": "Complete a heist with all base mods unlocked for the R880 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e50c807f4d322dc61d6075": {
        "api": {
            "title": "Mosconi12C Master",
            "desc": "Complete a heist with all base mods unlocked for the Mosconi12C with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e50cba7f4d322dc61d66e2": {
        "api": {
            "title": "A114 Master",
            "desc": "Complete a heist with all base mods unlocked for the A114 with the weapon equipped"
        },
        "game": {
            "title": "SA A144 INVESTED",
            "desc": "Complete a heist with all base mods unlocked for the SA A144 with the weapon equipped."
        }
    },
    "63e50cf97f4d322dc61d67d0": {
        "api": {
            "title": "R900S Master",
            "desc": "Complete a heist with all base mods unlocked for the R900S with the weapon equipped"
        },
        "game": {
            "title": "REINFELD 900S INVESTED",
            "desc": "Complete a heist with all base mods unlocked for the Reinfeld 900S with the weapon equipped."
        }
    },
    "63e50d477f4d322dc61d6c60": {
        "api": {
            "title": "Stryk7 Master",
            "desc": "Complete a heist with all base mods unlocked for the Stryk7 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e50d867f4d322dc61d6d73": {
        "api": {
            "title": "S403 Master",
            "desc": "Complete a heist with all base mods unlocked for the S403 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e50dd57f4d322dc61d6edb": {
        "api": {
            "title": "S40 Master",
            "desc": "Complete a heist with all base mods unlocked for the S40 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e50e1d7f4d322dc61d7284": {
        "api": {
            "title": "SPM11 Master",
            "desc": "Complete a heist with all base mods unlocked for the SPM11 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e50e6c7f4d322dc61d7564": {
        "api": {
            "title": "Bison Master",
            "desc": "Complete a heist with all base mods unlocked for the Bison with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63e50ea17f4d322dc61d7728": {
        "api": {
            "title": "Castigo44 Master",
            "desc": "Complete a heist with all base mods unlocked for the Castigo44 with the weapon equipped"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee1a9e8f18e8f291865084": {
        "api": {
            "title": "Armored Transport Optional Objective I - Smooth Sailing",
            "desc": "Do not let the Armored Transport come to a halt during escort."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee1b778f18e8f2918651d4": {
        "api": {
            "title": "Branch Bank Optional Objective II - Ahead of schedule",
            "desc": "Tie up the bank manager before the objective where you need him"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee1bc48f18e8f291865720": {
        "api": {
            "title": "Branch Bank Optional Objective III - Quick Escape",
            "desc": "Flee before the blockers come up again"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee20d98f18e8f291867610": {
        "api": {
            "title": "Jewelry Store Optional Objective I - Eye-Opener",
            "desc": "Access the Jewelry Workshop in under 5 minutes in stealth on OVERKILL difficulty."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee211c8f18e8f29186792c": {
        "api": {
            "title": "Jewelry Store Optional Objective II - Employee of the Month",
            "desc": "Successfully blackmail the manager to stay within the store in stealth on any difficulty."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee216c8f18e8f291867af4": {
        "api": {
            "title": "Jewelry Store Optional Objective IV - Rare Loot",
            "desc": "Find the rare loot and secure it."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee21ba8f18e8f291867c60": {
        "api": {
            "title": "Jewelry Store Optional Objective V - Show Control",
            "desc": "In the Jewelry Store Heist, control the public showroom, take all its loot and escape without calling the alarm on OVERKILL difficulty."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee29128f18e8f291869c4b": {
        "api": {
            "title": "Art Gallery Optional Objective I - Centrepiece",
            "desc": "Steal the centrepiece painting by Shanda Latrell in Art Gallery."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee29698f18e8f29186a16e": {
        "api": {
            "title": "Art Gallery Optional Objective II - Client Requests",
            "desc": "Complete the heist by stealing the loot in all seven exhibition rooms."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee29c38f18e8f29186a3a4": {
        "api": {
            "title": "Night Club Optional Objective I - The Silent Dancer",
            "desc": "Complete Nightclub before the assault has started without raising any alarms."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2a1f8f18e8f29186a5df": {
        "api": {
            "title": "Night Club Optional Objective II - Self Invited",
            "desc": "Before the assault has started, access the VIP area with a self-printed invitation."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2a818f18e8f29186a5e0": {
        "api": {
            "title": "Night Club Optional Objective III - DJ of the Night",
            "desc": "Before the assault has started, Access the VIP area without any VIP identification."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2af08f18e8f29186a825": {
        "api": {
            "title": "Sharke Bank (FP) - Optional Objective II - Errand Boy",
            "desc": "In stealth, secure all the loot from the vault by using the staircases only (not the elevator)"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2b428f18e8f29186a988": {
        "api": {
            "title": "Cargo Dock Optional Objective I - Tacti-cool",
            "desc": "Secure both hi-tech devices at their maximum value by making sure their temprature doesnt drop too much while securing them"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2bdb8f18e8f29186aa70": {
        "api": {
            "title": "Cargo Dock Optional Objective III - Speed run",
            "desc": "Complete the heist in under 12 minutes"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2c1c8f18e8f29186ab68": {
        "api": {
            "title": "Cargo Dock Optional Objective V - Ghost",
            "desc": "Complete stealth without killing any guards or taking down the security camera operator on Overkill"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2c5e8f18e8f29186ace2": {
        "api": {
            "title": "Penthouse Optional Objective I - Live and Let live",
            "desc": "Complete the Penthouse in stealth without killing anyone on Overkill"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2ca58f18e8f29186ad58": {
        "api": {
            "title": "Penthouse Optional Objective II - Busy Signal",
            "desc": "Kidnap Mason while he is talking on the phone, scan his iris and complete the level in stealth without harming him."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2cec8f18e8f29186add4": {
        "api": {
            "title": "Penthouse Optional Objective III - Eye Catching",
            "desc": "Complete all the mandatory objectives in loud and open the panic room by taking mason to the Iris scanner without killing him."
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2ef68f18e8f29186bc16": {
        "api": {
            "title": "S403 I",
            "desc": "Defeat 50 enemies with the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2f698f18e8f29186bd66": {
        "api": {
            "title": "S403 II",
            "desc": "Defeat 100 enemies with the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee2fd68f18e8f29186be5a": {
        "api": {
            "title": "S403 III",
            "desc": "Defeat 200 enemies with the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee30658f18e8f29186bfbb": {
        "api": {
            "title": "S403 IV",
            "desc": "Defeat 350 enemies with the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee30b98f18e8f29186c213": {
        "api": {
            "title": "S403 V",
            "desc": "Defeat 500 enemies with the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee39838f18e8f29186df5d": {
        "api": {
            "title": "HET5 Special Units I",
            "desc": "Defeat 10 special enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee39e88f18e8f29186e0b1": {
        "api": {
            "title": "HET5 Special Units II",
            "desc": "Defeat 25 special enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee3a8d8f18e8f29186e574": {
        "api": {
            "title": "HET5 Special Units III",
            "desc": "Defeat 50 special enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee3ae68f18e8f29186e672": {
        "api": {
            "title": "HET5 Special Units IV",
            "desc": "Defeat 100 special enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "63ee3b418f18e8f29186e756": {
        "api": {
            "title": "HET5 Special Units V",
            "desc": "Defeat 250 special enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411b9c983c1792981dad870": {
        "api": {
            "title": "NWB9 VI",
            "desc": "Defeat 750 enemies with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 EASY PICKINGS VI",
            "desc": "Defeat 750 enemies with the Northwest B-9."
        }
    },
    "6411ba1683c1792981daddb7": {
        "api": {
            "title": "NWB9 VII",
            "desc": "Defeat 1000 enemies with the NWB9"
        },
        "game": {
            "title": "NORTHWEST B-9 EASY PICKINGS VII",
            "desc": "Defeat 1000 enemies with the Northwest B-9."
        }
    },
    "6411bcd083c1792981db16f4": {
        "api": {
            "title": "CAR4 VI",
            "desc": "Defeat 750 enemies with the CAR4"
        },
        "game": {
            "title": "CAR-4 EASY PICKINGS VI",
            "desc": "Defeat 750 enemies with the CAR-4."
        }
    },
    "6411bd1883c1792981db20a8": {
        "api": {
            "title": "CAR4 VII",
            "desc": "Defeat 1000 enemies with the CAR4"
        },
        "game": {
            "title": "CAR-4 EASY PICKINGS VII",
            "desc": "Defeat 1000 enemies with the CAR-4."
        }
    },
    "6411bf7f83c1792981db560c": {
        "api": {
            "title": "VF7S VI",
            "desc": "Defeat 750 enemies with the VF7S"
        },
        "game": {
            "title": "VF-7S EASY PICKINGS VI",
            "desc": "Defeat 750 enemies with the VF-7S."
        }
    },
    "6411bfca83c1792981db5b5f": {
        "api": {
            "title": "VF7S VII",
            "desc": "Defeat 1000 enemies with the VF7S"
        },
        "game": {
            "title": "VF-7S EASY PICKINGS VII",
            "desc": "Defeat 1000 enemies with the VF-7S."
        }
    },
    "6411c1c683c1792981db86a4": {
        "api": {
            "title": "KU59 VI",
            "desc": "Defeat 750 enemies with the KU59"
        },
        "game": {
            "title": "KU-59 EASY PICKINGS VI",
            "desc": "Defeat 750 enemies with the KU-59."
        }
    },
    "6411c20083c1792981db8f81": {
        "api": {
            "title": "KU59 VII",
            "desc": "Defeat 1000 enemies with the KU59"
        },
        "game": {
            "title": "KU-59 EASY PICKINGS VII",
            "desc": "Defeat 1000 enemies with the KU-59."
        }
    },
    "6411c2c983c1792981db97ef": {
        "api": {
            "title": "Commando VI",
            "desc": "Defeat 750 enemies with the Commando"
        },
        "game": {
            "title": "ZIV COMMANDO EASY PICKINGS VI",
            "desc": "Defeat 750 enemies with the Ziv Commando."
        }
    },
    "6411c32083c1792981db9c62": {
        "api": {
            "title": "Commando VII",
            "desc": "Defeat 1000 enemies with the Commando"
        },
        "game": {
            "title": "ZIV COMMANDO EASY PICKINGS VII",
            "desc": "Defeat 1000 enemies with the Ziv Commando."
        }
    },
    "6411c50183c1792981dbc394": {
        "api": {
            "title": "PC9 VI",
            "desc": "Defeat 750 enemies with the PC9"
        },
        "game": {
            "title": "FIK PC9 EASY PICKINGS VI",
            "desc": "Defeat 750 enemies with the FIK PC9."
        }
    },
    "6411c53a83c1792981dbc5d3": {
        "api": {
            "title": "PC9 VII",
            "desc": "Defeat 1000 enemies with the PC9"
        },
        "game": {
            "title": "FIK PC9 EASY PICKINGS VII",
            "desc": "Defeat 1000 enemies with the FIK PC9."
        }
    },
    "6411cc3e83c1792981dc3710": {
        "api": {
            "title": "Compact7 VI",
            "desc": "Defeat 750 enemies with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411cc8d83c1792981dc413c": {
        "api": {
            "title": "Compact7 VII",
            "desc": "Defeat 1000 enemies with the Compact7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411cd5583c1792981dc4e97": {
        "api": {
            "title": "R880 VI",
            "desc": "Defeat 750 enemies with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411ce6183c1792981dc5e98": {
        "api": {
            "title": "R880 VII",
            "desc": "Defeat 1000 enemies with the R880"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d07983c1792981dc80d8": {
        "api": {
            "title": "Mosconi12C VI",
            "desc": "Defeat 750 enemies with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d0db83c1792981dc8c6f": {
        "api": {
            "title": "Mosconi12C VII",
            "desc": "Defeat 1000 enemies with the Mosconi12C"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d1e483c1792981dc9950": {
        "api": {
            "title": "A114 VI",
            "desc": "Defeat 750 enemies with the A114"
        },
        "game": {
            "title": "SA A144 EASY PICKINGS VI",
            "desc": "Defeat 750 enemies with the SA A144."
        }
    },
    "6411d22183c1792981dc9c6c": {
        "api": {
            "title": "A114 VII",
            "desc": "Defeat 1000 enemies with the A114"
        },
        "game": {
            "title": "SA A144 EASY PICKINGS VII",
            "desc": "Defeat 1000 enemies with the SA A144."
        }
    },
    "6411d32183c1792981dcaee3": {
        "api": {
            "title": "R900S VI",
            "desc": "Defeat 750 enemies with the R900S"
        },
        "game": {
            "title": "REINFELD 900S EASY PICKINGS VI",
            "desc": "Defeat 750 enemies with the Reinfeld 900S."
        }
    },
    "6411d37583c1792981dcb765": {
        "api": {
            "title": "R900S VII",
            "desc": "Defeat 1000 enemies with the R900S"
        },
        "game": {
            "title": "REINFELD 900S EASY PICKINGS VII",
            "desc": "Defeat 1000 enemies with the Reinfeld 900S."
        }
    },
    "6411d48683c1792981dccede": {
        "api": {
            "title": "Stryk7 VI",
            "desc": "Defeat 750 enemies with the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d4ce83c1792981dcd0af": {
        "api": {
            "title": "Stryk7 VII",
            "desc": "Defeat 1000 enemies with the Stryk7"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d5a483c1792981dcda17": {
        "api": {
            "title": "S403 VI",
            "desc": "Defeat 750 enemies with the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d5de83c1792981dcda93": {
        "api": {
            "title": "S403 VII",
            "desc": "Defeat 1000 enemies with the S403"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d6d283c1792981dce085": {
        "api": {
            "title": "S40 VI",
            "desc": "Defeat 750 enemies with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d70b83c1792981dce24e": {
        "api": {
            "title": "S40 VII",
            "desc": "Defeat 1000 enemies with the S40"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d7c183c1792981dce993": {
        "api": {
            "title": "SPM11 VI",
            "desc": "Defeat 750 enemies with the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411d7fb83c1792981dcec5b": {
        "api": {
            "title": "SPM11 VII",
            "desc": "Defeat 1000 enemies with the SPM11"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411da0283c1792981dd1fe3": {
        "api": {
            "title": "Bison VI",
            "desc": "Defeat 750 enemies with the Bison"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411da3f83c1792981dd2218": {
        "api": {
            "title": "Bison VII",
            "desc": "Defeat 1000 enemies with the Bison"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411db7583c1792981dd3f5d": {
        "api": {
            "title": "Castigo44 VI",
            "desc": "Defeat 750 enemies with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411dbb983c1792981dd4668": {
        "api": {
            "title": "Castigo44 VII",
            "desc": "Defeat 1000 enemies with the Castigo44"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411dcb183c1792981dd5517": {
        "api": {
            "title": "Mamba VI",
            "desc": "Defeat 400 enemies with the Mamba"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411dd0683c1792981dd5bf6": {
        "api": {
            "title": "Mamba VII",
            "desc": "Defeat 500 enemies with the Mamba"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411dde083c1792981dd70be": {
        "api": {
            "title": "HET5 VI",
            "desc": "Defeat 400 enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    },
    "6411de1d83c1792981dd72fa": {
        "api": {
            "title": "HET5 VII",
            "desc": "Defeat 500 enemies with the HET5"
        },
        "game": {
            "title": "",
            "desc": ""
        }
    }
}