"use strict";
( () => {
    var k;
    (function(e) {
        e.Storage = "storage",
        e.Recipe = "recipe",
        e.Vehicle = "vehicle",
        e.Inventory = "inventory",
        e.Backpack = "backpack"
    }
    )(k || (k = {}));
    var L;
    (function(e) {
        e.Cab = "cab",
        e.Trailer = "trailer"
    }
    )(L || (L = {}));
    var N;
    (function(e) {
        e[e.Vehicle = 100] = "Vehicle",
        e[e.Inventory = 100] = "Inventory",
        e[e.Recipes = 90] = "Recipes",
        e[e.Faction = 30] = "Faction",
        e[e.Train = 20] = "Train",
        e[e.Yellowjack = 10] = "Yellowjack",
        e[e.PaletoBay = 2] = "PaletoBay",
        e[e.UnknownStorage = 1] = "UnknownStorage",
        e[e.UnknownVehicle = 0] = "UnknownVehicle",
        e[e.Backpack = -1] = "Backpack"
    }
    )(N || (N = {}));
    var c;
    (function(e) {
        e.Recipe = "recipe",
        e.Export = "export",
        e.Import = "import"
    }
    )(c || (c = {}));
    var V;
    (function(e) {
        e.Storage = "storage",
        e.Recipe = "recipe"
    }
    )(V || (V = {}));
    var Re = "rm_trunk"
      , Ie = "rm_cabtrunk"
      , ce = "~r~Inventory full."
      , ve = "~r~Item(s) weighs more than your total inventory size."
      , we = "Not enough items"
      , _e = "Open Storage"
      , at = "Take"
      , rt = "Take to Trunk"
      , Ne = "Put All"
      , it = "Dump from Trunk"
      , nt = [/(<.+?>)|(&#.+?;)/g]
      , G = 0
      , t = {
        scrap_acid: {
            name: "Acid",
            vrpName: "Truck Cargo: Acid",
            weight: 5,
            isTruckingItem: !0
        },
        crafted_batteries: {
            name: "Batteries",
            vrpName: "Truck Cargo: Batteries",
            weight: 30,
            isTruckingItem: !0
        },
        mechanicals_battery: {
            name: "Car Battery",
            vrpName: "Automotive: Car Battery",
            weight: 20,
            isTruckingItem: !0
        },
        crafted_cardboard: {
            name: "Cardboard",
            vrpName: "Truck Cargo: Cardboard",
            weight: 10,
            isTruckingItem: !0
        },
        crafted_cement: {
            name: "Cement Mix",
            vrpName: "Truck Cargo: Cement Mix",
            weight: 25,
            isTruckingItem: !0
        },
        crafted_ceramictiles: {
            name: "Ceramic Tiles",
            vrpName: "Truck Cargo: Ceramic Tiles",
            weight: 10,
            isTruckingItem: !0
        },
        mechanicals_chassis: {
            name: "Chassis",
            vrpName: "Automotive: Chassis",
            weight: 80,
            isTruckingItem: !0
        },
        military_chemicals: {
            name: "Chemicals",
            vrpName: "Military: Chemicals",
            weight: 25,
            isTruckingItem: !0
        },
        crafted_circuit: {
            name: "Circuit Boards",
            vrpName: "Truck Cargo: Circuit Boards",
            weight: 20,
            isTruckingItem: !0
        },
        crafted_computer: {
            name: "Computers",
            vrpName: "Truck Cargo: Computers",
            weight: 35,
            isTruckingItem: !0
        },
        crafted_concrete: {
            name: "Concrete",
            vrpName: "Truck Cargo: Concrete",
            weight: 160,
            isTruckingItem: !0
        },
        mining_copper: {
            name: "Copper Ore",
            vrpName: "Copper Ore",
            weight: 1,
            isTruckingItem: !0
        },
        mining_token_copper: {
            name: "Copper Ore Voucher",
            vrpName: "Copper Ore Voucher",
            weight: 0,
            isTruckingItem: !0
        },
        crafted_copperwire: {
            name: "Copper Wire Spool",
            vrpName: "Truck Cargo: Copper Wire Spool",
            weight: 20,
            isTruckingItem: !0
        },
        petrochem_oil: {
            name: "Crude Oil",
            vrpName: "Petrochem: Crude Oil",
            weight: 150,
            isTruckingItem: !0
        },
        petrochem_diesel: {
            name: "Diesel",
            vrpName: "Petrochem: Diesel",
            weight: 25,
            isTruckingItem: !0
        },
        tcargosmall: {
            name: "Erasers",
            vrpName: "Truck Cargo: Erasers",
            weight: 3,
            isTruckingItem: !0
        },
        military_explosives: {
            name: "Explosives",
            vrpName: "Military: Explosives",
            weight: 250,
            isTruckingItem: !0
        },
        crafted_fiberglass: {
            name: "Fiberglass Spool",
            vrpName: "Truck Cargo: Fiberglass Spool",
            weight: 20,
            isTruckingItem: !0
        },
        refined_flint: {
            name: "Flint",
            vrpName: "Truck Cargo: Flint",
            weight: 5,
            isTruckingItem: !0
        },
        refined_glass: {
            name: "Glass",
            vrpName: "Truck Cargo: Glass",
            weight: 5,
            isTruckingItem: !0
        },
        scrap_gravel: {
            name: "Gravel",
            vrpName: "Truck Cargo: Gravel",
            weight: 5,
            isTruckingItem: !0
        },
        mining_iron: {
            name: "Iron Ore",
            vrpName: "Iron Ore",
            weight: 1,
            isTruckingItem: !0
        },
        mining_token_iron: {
            name: "Iron Ore Voucher",
            vrpName: "Iron Ore Voucher",
            weight: 0,
            isTruckingItem: !0
        },
        mechanicals_jumper_cable: {
            name: "Jumper Cable",
            vrpName: "Automotive: Jumper Cable",
            weight: 5,
            isTruckingItem: !0
        },
        petrochem_kerosene: {
            name: "Kerosene",
            vrpName: "Petrochem: Kerosene",
            weight: 25,
            isTruckingItem: !0
        },
        tcargologs: {
            name: "Logs",
            vrpName: "Truck Cargo: Logs",
            weight: 60,
            isTruckingItem: !0
        },
        petrochem_petrol: {
            name: "Petrol",
            vrpName: "Petrochem: Petrol",
            weight: 25,
            isTruckingItem: !0
        },
        refined_planks: {
            name: "Planks",
            vrpName: "Truck Cargo: Planks",
            weight: 15,
            isTruckingItem: !0
        },
        petrochem_propane: {
            name: "Propane",
            vrpName: "Petrochem: Propane",
            weight: 25,
            isTruckingItem: !0
        },
        recycled_rubble: {
            name: "Quarry Rubble",
            vrpName: "Truck Cargo: Quarry Rubble",
            weight: 150,
            isTruckingItem: !0
        },
        scrap_emerald: {
            name: "Raw Emeralds",
            vrpName: "Truck Cargo: Raw Emeralds",
            weight: 10,
            isTruckingItem: !0
        },
        petrochem_gas: {
            name: "Raw Gas",
            vrpName: "Petrochem: Raw Gas",
            weight: 150,
            isTruckingItem: !0
        },
        scrap_ore: {
            name: "Raw Ore Mix",
            vrpName: "Truck Cargo: Raw Ore Mix",
            weight: 15,
            isTruckingItem: !0
        },
        crafted_rebar: {
            name: "Rebar",
            vrpName: "Truck Cargo: Rebar",
            weight: 45,
            isTruckingItem: !0
        },
        recycled_electronics: {
            name: "Recycled Electronics",
            vrpName: "Truck Cargo: Recycled Electronics",
            weight: 130,
            isTruckingItem: !0
        },
        recycled_trash: {
            name: "Recycled Trash",
            vrpName: "Truck Cargo: Recycled Trash",
            weight: 90,
            isTruckingItem: !0
        },
        refined_aluminum: {
            name: "Refined Aluminum",
            vrpName: "Truck Cargo: Refined Aluminum",
            weight: 10,
            isTruckingItem: !0
        },
        refined_amalgam: {
            name: "Refined Amalgam",
            vrpName: "Truck Cargo: Refined Amalgam",
            weight: 15,
            isTruckingItem: !0
        },
        refined_bronze: {
            name: "Refined Bronze Alloy",
            vrpName: "Truck Cargo: Refined Bronze Alloy",
            weight: 10,
            isTruckingItem: !0
        },
        refined_copper: {
            name: "Refined Copper",
            vrpName: "Truck Cargo: Refined Copper",
            weight: 10,
            isTruckingItem: !0
        },
        refined_gold: {
            name: "Refined Gold",
            vrpName: "Truck Cargo: Refined Gold",
            weight: 20,
            isTruckingItem: !0
        },
        refined_solder: {
            name: "Refined Solder",
            vrpName: "Truck Cargo: Refined Solder",
            weight: 5,
            isTruckingItem: !0
        },
        refined_tin: {
            name: "Refined Tin",
            vrpName: "Truck Cargo: Refined Tin",
            weight: 10,
            isTruckingItem: !0
        },
        refined_zinc: {
            name: "Refined Zinc",
            vrpName: "Truck Cargo: Refined Zinc",
            weight: 10,
            isTruckingItem: !0
        },
        mechanicals_rubber: {
            name: "Rubber",
            vrpName: "Automotive: Rubber",
            weight: 8,
            isTruckingItem: !0
        },
        refined_sand: {
            name: "Sand",
            vrpName: "Truck Cargo: Sand",
            weight: 5,
            isTruckingItem: !0
        },
        tcargodust: {
            name: "Sawdust",
            vrpName: "Truck Cargo: Sawdust",
            weight: 3,
            isTruckingItem: !0
        },
        scrap_aluminum: {
            name: "Scrap Aluminum",
            vrpName: "Truck Cargo: Scrap Aluminum",
            weight: 5,
            isTruckingItem: !0
        },
        scrap_copper: {
            name: "Scrap Copper",
            vrpName: "Truck Cargo: Scrap Copper",
            weight: 5,
            isTruckingItem: !0
        },
        scrap_gold: {
            name: "Scrap Gold",
            vrpName: "Truck Cargo: Scrap Gold",
            weight: 10,
            isTruckingItem: !0
        },
        scrap_lead: {
            name: "Scrap Lead",
            vrpName: "Truck Cargo: Scrap Lead",
            weight: 15,
            isTruckingItem: !0
        },
        scrap_mercury: {
            name: "Scrap Mercury",
            vrpName: "Truck Cargo: Scrap Mercury",
            weight: 15,
            isTruckingItem: !0
        },
        scrap_plastic: {
            name: "Scrap Plastic",
            vrpName: "Truck Cargo: Scrap Plastic",
            weight: 5,
            isTruckingItem: !0
        },
        scrap_tin: {
            name: "Scrap Tin",
            vrpName: "Truck Cargo: Scrap Tin",
            weight: 5,
            isTruckingItem: !0
        },
        shipping_crate_empty: {
            name: "Shipping Container",
            vrpName: "Shipping Container",
            weight: 100,
            isTruckingItem: !0
        },
        petrochem_sulfur: {
            name: "Sulfur",
            vrpName: "Petrochem: Sulfur",
            weight: 5,
            isTruckingItem: !0
        },
        military_titanium: {
            name: "Titanium",
            vrpName: "Military: Titanium",
            weight: 20,
            isTruckingItem: !0
        },
        military_titanium_ore: {
            name: "Titanium Ore",
            vrpName: "Military: Titanium Ore",
            weight: 25,
            isTruckingItem: !0
        },
        pucargosmall: {
            name: "Tools",
            vrpName: "Truck Cargo: Tools",
            weight: 1,
            isTruckingItem: !0
        },
        recycled_waste: {
            name: "Toxic Waste",
            vrpName: "Truck Cargo: Toxic Waste",
            weight: 110,
            isTruckingItem: !0
        },
        mechanicals_battery_evb: {
            name: "Traction Battery",
            vrpName: "Automotive: Traction Battery",
            weight: 90,
            isTruckingItem: !0
        },
        liquid_water: {
            name: "Treated Water (100L)",
            vrpName: "Truck Cargo: Treated Water (100L)",
            weight: 100,
            isTruckingItem: !0
        },
        liquid_water_raw: {
            name: "Unfiltered Water (100L)",
            vrpName: "Truck Cargo: Unfiltered Water (100L)",
            weight: 100,
            isTruckingItem: !0
        },
        mechanicals_vehicle_framework: {
            name: "Vehicle Framework",
            vrpName: "Automotive: Vehicle Framework",
            weight: 200,
            isTruckingItem: !0
        },
        petrochem_waste: {
            name: "Waste Water",
            vrpName: "Petrochem: Waste Water",
            weight: 50,
            isTruckingItem: !0
        },
        mechanicals_wheels: {
            name: "Wheels",
            vrpName: "Automotive: Wheels",
            weight: 15,
            isTruckingItem: !0
        },
        fridge_airline_meal: {
            name: "Airline Meal",
            vrpName: "<span style='color:green'>Airline Meal</span>",
            weight: 3,
            isTruckingItem: !1
        },
        backpack: {
            name: "Backpack",
            vrpName: "<span style='color:purple'>Backpack</span>",
            weight: 0,
            isTruckingItem: !1
        },
        engine_bag: {
            name: "Bag-o-Engines",
            vrpName: "Bag-o-Engines",
            weight: 0,
            isTruckingItem: !1
        },
        bandages: {
            name: "Bandage",
            vrpName: "Bandage",
            weight: .05,
            isTruckingItem: !1
        },
        prefix_pack_1: {
            name: "Blessing Pack [Series 1]",
            vrpName: "Blessing Pack [Series 1]",
            weight: 0,
            isTruckingItem: !1
        },
        prefix_pack_2: {
            name: "Blessing Pack [Series 2]",
            vrpName: "Blessing Pack [Series 2]",
            weight: 0,
            isTruckingItem: !1
        },
        prefix_pack_3: {
            name: "Blessing Pack [Series 3]",
            vrpName: "Blessing Pack [Series 3]",
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.comet|Comet": {
            name: "Blessing: \u2604 Comet",
            vrpName: 'Blessing: <span style="color:tomato">\u2604 Comet</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.umbrella_with_rain_drops|Umbrella With Rain Drops": {
            name: "Blessing: \u2614 Umbrella With Rain Drops",
            vrpName: 'Blessing: <span style="color:tomato">\u2614 Umbrella With Rain Drops</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.anchor|Anchor": {
            name: "Blessing: \u2693 Anchor",
            vrpName: 'Blessing: <span style="color:tomato">\u2693 Anchor</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.medical_symbol|Medical Symbol": {
            name: "Blessing: \u2695\uFE0F Medical Symbol",
            vrpName: 'Blessing: <span style="color:tomato">\u2695\uFE0F Medical Symbol</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.scale|Scale": {
            name: "Blessing: \u2696 Scale",
            vrpName: 'Blessing: <span style="color:tomato">\u2696 Scale</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.snowman_without_snow|Snowman Without Snow": {
            name: "Blessing: \u26C4 Snowman Without Snow",
            vrpName: 'Blessing: <span style="color:tomato">\u26C4 Snowman Without Snow</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.scissors|Scissors": {
            name: "Blessing: \u2702 Scissors",
            vrpName: 'Blessing: <span style="color:tomato">\u2702 Scissors</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.snowflake|Snowflake": {
            name: "Blessing: \u2744 Snowflake",
            vrpName: 'Blessing: <span style="color:tomato">\u2744 Snowflake</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.star|Star": {
            name: "Blessing: \u2B50 Star",
            vrpName: 'Blessing: <span style="color:tomato">\u2B50 Star</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.globe_with_meridians|Globe with Meridians": {
            name: "Blessing: \u{1F310} Globe with Meridians",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F310} Globe with Meridians</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.new_moon|New Moon": {
            name: "Blessing: \u{1F311} New Moon",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F311} New Moon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.last_quarter_moon|Last Quarter Moon": {
            name: "Blessing: \u{1F317} Last Quarter Moon",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F317} Last Quarter Moon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.tornado|Tornado": {
            name: "Blessing: \u{1F32A} Tornado",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F32A} Tornado</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.seedling|Seedling": {
            name: "Blessing: \u{1F331} Seedling",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F331} Seedling</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.deciduous_tree|Deciduous Tree": {
            name: "Blessing: \u{1F333} Deciduous Tree",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F333} Deciduous Tree</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.cherry_blossom|Cherry Blossom": {
            name: "Blessing: \u{1F338} Cherry Blossom",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F338} Cherry Blossom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.blossom|Blossom": {
            name: "Blessing: \u{1F33C} Blossom",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F33C} Blossom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.sheaf_of_rice|Sheaf of Rice": {
            name: "Blessing: \u{1F33E} Sheaf of Rice",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F33E} Sheaf of Rice</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.four_leaf_clover|Four Leaf Clover": {
            name: "Blessing: \u{1F340} Four Leaf Clover",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F340} Four Leaf Clover</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.grape|Grape": {
            name: "Blessing: \u{1F347} Grape",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F347} Grape</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.banana|Banana": {
            name: "Blessing: \u{1F34C} Banana",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F34C} Banana</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.cherry|Cherry": {
            name: "Blessing: \u{1F352} Cherry",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F352} Cherry</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.strawberry|Strawberry": {
            name: "Blessing: \u{1F353} Strawberry",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F353} Strawberry</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.donut|Donut": {
            name: "Blessing: \u{1F369} Donut",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F369} Donut</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.8_ball|8 Ball": {
            name: "Blessing: \u{1F3B1} 8 Ball",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F3B1} 8 Ball</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.saxophone|Saxophone": {
            name: "Blessing: \u{1F3B7} Saxophone",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F3B7} Saxophone</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.trumpet|Trumpet": {
            name: "Blessing: \u{1F3BA} Trumpet",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F3BA} Trumpet</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.hospital|Hospital": {
            name: "Blessing: \u{1F3E5} Hospital",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F3E5} Hospital</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.rosette|Rosette": {
            name: "Blessing: \u{1F3F5} Rosette",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F3F5} Rosette</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.rabbit|Rabbit": {
            name: "Blessing: \u{1F407} Rabbit",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F407} Rabbit</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.whale|Whale": {
            name: "Blessing: \u{1F40B} Whale",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F40B} Whale</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.horse|Horse": {
            name: "Blessing: \u{1F40E} Horse",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F40E} Horse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.boar|Boar": {
            name: "Blessing: \u{1F417} Boar",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F417} Boar</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.elephant|Elephant": {
            name: "Blessing: \u{1F418} Elephant",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F418} Elephant</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.honeybee|Honeybee": {
            name: "Blessing: \u{1F41D} Honeybee",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F41D} Honeybee</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.hatching_chick|Hatching Chick": {
            name: "Blessing: \u{1F423} Hatching Chick",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F423} Hatching Chick</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.squirrel|Squirrel": {
            name: "Blessing: \u{1F43F} Squirrel",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F43F} Squirrel</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.clapping_hands|Clapping Hands": {
            name: "Blessing: \u{1F44F} Clapping Hands",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F44F} Clapping Hands</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.crown|Crown": {
            name: "Blessing: \u{1F451} Crown",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F451} Crown</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.droplet|Droplet": {
            name: "Blessing: \u{1F4A7} Droplet",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F4A7} Droplet</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.megaphone|Megaphone": {
            name: "Blessing: \u{1F4E3} Megaphone",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F4E3} Megaphone</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.clairvoyant|Clairvoyant": {
            name: "Blessing: \u{1F52E} Clairvoyant",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F52E} Clairvoyant</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.mount_fuji|Mount Fuji": {
            name: "Blessing: \u{1F5FB} Mount Fuji",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F5FB} Mount Fuji</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.dizzy_face|Dizzy Face": {
            name: "Blessing: \u{1F635} Dizzy Face",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F635} Dizzy Face</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.helicopter|Helicopter": {
            name: "Blessing: \u{1F681} Helicopter",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F681} Helicopter</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.construction|Construction": {
            name: "Blessing: \u{1F6A7} Construction",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F6A7} Construction</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.small_airplane|Small Airplane": {
            name: "Blessing: \u{1F6E9} Small Airplane",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F6E9} Small Airplane</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.zany_face|Zany Face": {
            name: "Blessing: \u{1F92A} Zany Face",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F92A} Zany Face</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.mind_blown|Mind Blown": {
            name: "Blessing: \u{1F92F} Mind Blown",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F92F} Mind Blown</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.palms_up_together|Palms Up Together": {
            name: "Blessing: \u{1F932} Palms Up Together",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F932} Palms Up Together</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.kiwi|Kiwi": {
            name: "Blessing: \u{1F95D} Kiwi",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F95D} Kiwi</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.broccoli|Broccoli": {
            name: "Blessing: \u{1F966} Broccoli",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F966} Broccoli</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.pretzel|Pretzel": {
            name: "Blessing: \u{1F968} Pretzel",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F968} Pretzel</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.shrimp|Shrimp": {
            name: "Blessing: \u{1F990} Shrimp",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F990} Shrimp</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.sauropod|Sauropod": {
            name: "Blessing: \u{1F995} Sauropod",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F995} Sauropod</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp1.raccoon|Raccoon": {
            name: "Blessing: \u{1F99D} Raccoon",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F99D} Raccoon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.microbe|Microbe": {
            name: "Blessing: \u{1F9A0} Microbe",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9A0} Microbe</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.swan|Swan": {
            name: "Blessing: \u{1F9A2} Swan",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9A2} Swan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.sloth|Sloth": {
            name: "Blessing: \u{1F9A5} Sloth",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9A5} Sloth</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.skunk|Skunk": {
            name: "Blessing: \u{1F9A8} Skunk",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9A8} Skunk</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.salt|Salt": {
            name: "Blessing: \u{1F9C2} Salt",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9C2} Salt</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.ice_cube|Ice Cube": {
            name: "Blessing: \u{1F9CA} Ice Cube",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9CA} Ice Cube</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.mermaid|Mermaid": {
            name: "Blessing: \u{1F9DC}\u200D\u2640\uFE0F Mermaid",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9DC}\u200D\u2640\uFE0F Mermaid</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp3.firecracker|Firecracker": {
            name: "Blessing: \u{1F9E8} Firecracker",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9E8} Firecracker</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.lotion_bottle|Lotion Bottle": {
            name: "Blessing: \u{1F9F4} Lotion Bottle",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9F4} Lotion Bottle</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "blessing_card|rp2.soap|Soap": {
            name: "Blessing: \u{1F9FC} Soap",
            vrpName: 'Blessing: <span style="color:tomato">\u{1F9FC} Soap</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|piloting|piloting": {
            name: "Bonus EXP (Airline Pilot)",
            vrpName: "Bonus EXP (Airline Pilot)<span type='piloting-piloting'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|train|bus": {
            name: "Bonus EXP (Bus Driver)",
            vrpName: "Bonus EXP (Bus Driver)<span type='train-bus'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|business|business": {
            name: "Bonus EXP (Business)",
            vrpName: "Bonus EXP (Business)<span type='business-business'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|piloting|cargos": {
            name: "Bonus EXP (Cargo Pilot)",
            vrpName: "Bonus EXP (Cargo Pilot)<span type='piloting-cargos'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|train|train": {
            name: "Bonus EXP (Conductor)",
            vrpName: "Bonus EXP (Conductor)<span type='train-train'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|ems|ems": {
            name: "Bonus EXP (EMS)",
            vrpName: "Bonus EXP (EMS)<span type='ems-ems'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|farming|farming": {
            name: "Bonus EXP (Farming)",
            vrpName: "Bonus EXP (Farming)<span type='farming-farming'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|ems|fire": {
            name: "Bonus EXP (Fire Fighter)",
            vrpName: "Bonus EXP (Fire Fighter)<span type='ems-fire'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|farming|fishing": {
            name: "Bonus EXP (Fishing)",
            vrpName: "Bonus EXP (Fishing)<span type='farming-fishing'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|trucking|garbage": {
            name: "Bonus EXP (Garbage Collections)",
            vrpName: "Bonus EXP (Garbage Collections)<span type='trucking-garbage'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|piloting|heli": {
            name: "Bonus EXP (Helicopter Pilot)",
            vrpName: "Bonus EXP (Helicopter Pilot)<span type='piloting-heli'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|hunting|skill": {
            name: "Bonus EXP (Hunting)",
            vrpName: "Bonus EXP (Hunting)<span type='hunting-skill'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|trucking|mechanic": {
            name: "Bonus EXP (Mechanic)",
            vrpName: "Bonus EXP (Mechanic)<span type='trucking-mechanic'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|farming|mining": {
            name: "Bonus EXP (Mining)",
            vrpName: "Bonus EXP (Mining)<span type='farming-mining'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|player|player": {
            name: "Bonus EXP (Player)",
            vrpName: "Bonus EXP (Player)<span type='player-player'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|trucking|postop": {
            name: "Bonus EXP (PostOP)",
            vrpName: "Bonus EXP (PostOP)<span type='trucking-postop'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|player|racing": {
            name: "Bonus EXP (Racing)",
            vrpName: "Bonus EXP (Racing)<span type='player-racing'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|physical|strength": {
            name: "Bonus EXP (Strength)",
            vrpName: "Bonus EXP (Strength)<span type='physical-strength'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token_a|trucking|trucking": {
            name: "Bonus EXP (Trucking)",
            vrpName: "Bonus EXP (Trucking)<span type='trucking-trucking'/>",
            weight: 0,
            isTruckingItem: !1
        },
        bread: {
            name: "Bread",
            vrpName: "Bread",
            weight: 0,
            isTruckingItem: !1
        },
        biz_token: {
            name: "Business Cash Stacks",
            vrpName: "Business Cash Stacks",
            weight: 0,
            isTruckingItem: !1
        },
        ch24_cookie: {
            name: "Christmas Cookie",
            vrpName: "Christmas Cookie",
            weight: 1,
            isTruckingItem: !1
        },
        coffee: {
            name: "Coffee",
            vrpName: "Coffee",
            weight: 0,
            isTruckingItem: !1
        },
        collinsco_boat_voucher: {
            name: "CollinsCo Boat Voucher",
            vrpName: "CollinsCo Boat Voucher",
            weight: 0,
            isTruckingItem: !1
        },
        complete_meal: {
            name: "Complete Meal",
            vrpName: "<span style='color:green'>Complete Meal</span>",
            weight: 0,
            isTruckingItem: !1
        },
        comp_alcohol: {
            name: "Component: Alcohol",
            vrpName: "Component: Alcohol",
            weight: 0,
            isTruckingItem: !1
        },
        comp_oil: {
            name: "Component: Oil",
            vrpName: "Component: Oil",
            weight: 0,
            isTruckingItem: !1
        },
        comp_paste: {
            name: "Component: Paste",
            vrpName: "Component: Paste",
            weight: 0,
            isTruckingItem: !1
        },
        comp_solid: {
            name: "Component: Solid",
            vrpName: "Component: Solid",
            weight: 0,
            isTruckingItem: !1
        },
        comp_waste: {
            name: "Component: Waste",
            vrpName: "Component: Waste",
            weight: 0,
            isTruckingItem: !1
        },
        comp_water: {
            name: "Component: Water",
            vrpName: "Component: Water",
            weight: 0,
            isTruckingItem: !1
        },
        pot_crab: {
            name: "Crab Pot",
            vrpName: "Crab Pot",
            weight: 4,
            isTruckingItem: !1
        },
        prefix_pack_1_reset: {
            name: "Cursed Dice",
            vrpName: "Cursed Dice",
            weight: 0,
            isTruckingItem: !1
        },
        title_card_custom: {
            name: "Custom Title Card",
            vrpName: "Custom Title Card",
            weight: 0,
            isTruckingItem: !1
        },
        defibkit: {
            name: "Defibrillator Kit",
            vrpName: "Defibrillator Kit",
            weight: 5,
            isTruckingItem: !0
        },
        digiscanner: {
            name: "Digiscanner",
            vrpName: "Digiscanner",
            weight: 0,
            isTruckingItem: !1
        },
        donut: {
            name: "Donut",
            vrpName: "Donut",
            weight: 0,
            isTruckingItem: !1
        },
        dxp_ticket: {
            name: "Double EXP Ticket",
            vrpName: "Double EXP Ticket",
            weight: 0,
            isTruckingItem: !1
        },
        ecola: {
            name: "E-Cola",
            vrpName: "E-Cola",
            weight: 0,
            isTruckingItem: !1
        },
        exp_bonus_ee2: {
            name: "EXP Bonus: 10 (90 Minutes)",
            vrpName: "EXP Bonus: 10&#37; (90 Minutes)",
            weight: 0,
            isTruckingItem: !1
        },
        exp_bonus_ee: {
            name: "EXP Bonus: 15 (1 Hour)",
            vrpName: "EXP Bonus: 15&#37; (1 Hour)",
            weight: 0,
            isTruckingItem: !1
        },
        exp_bonus_day: {
            name: "EXP Bonus: 5 (1 Day)",
            vrpName: "EXP Bonus: 5&#37; (1 Day)",
            weight: 0,
            isTruckingItem: !1
        },
        exp_bonus_week: {
            name: "EXP Bonus: 5 (1 Week)",
            vrpName: "EXP Bonus: 5&#37; (1 Week)",
            weight: 0,
            isTruckingItem: !1
        },
        exp_bonus_ee3: {
            name: "EXP Bonus: 5 (2 Hours)",
            vrpName: "EXP Bonus: 5&#37; (2 Hours)",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|police|police": {
            name: "EXP Token",
            vrpName: "EXP Token",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|piloting|piloting": {
            name: "EXP Token (Airline Pilot)",
            vrpName: "EXP Token (Airline Pilot)<span type='piloting-piloting'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|train|bus": {
            name: "EXP Token (Bus Driver)",
            vrpName: "EXP Token (Bus Driver)<span type='train-bus'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|business|business": {
            name: "EXP Token (Business)",
            vrpName: "EXP Token (Business)<span type='business-business'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|piloting|cargos": {
            name: "EXP Token (Cargo Pilot)",
            vrpName: "EXP Token (Cargo Pilot)<span type='piloting-cargos'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|train|train": {
            name: "EXP Token (Conductor)",
            vrpName: "EXP Token (Conductor)<span type='train-train'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|ems|ems": {
            name: "EXP Token (EMS)",
            vrpName: "EXP Token (EMS)<span type='ems-ems'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|ems|fire": {
            name: "EXP Token (Fire Fighter)",
            vrpName: "EXP Token (Fire Fighter)<span type='ems-fire'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|farming|fishing": {
            name: "EXP Token (Fishing)",
            vrpName: "EXP Token (Fishing)<span type='farming-fishing'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|trucking|garbage": {
            name: "EXP Token (Garbage Collections)",
            vrpName: "EXP Token (Garbage Collections)<span type='trucking-garbage'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|piloting|heli": {
            name: "EXP Token (Helicopter Pilot)",
            vrpName: "EXP Token (Helicopter Pilot)<span type='piloting-heli'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|hunting|skill": {
            name: "EXP Token (Hunting)",
            vrpName: "EXP Token (Hunting)<span type='hunting-skill'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|farming|mining": {
            name: "EXP Token (Mining)",
            vrpName: "EXP Token (Mining)<span type='farming-mining'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|player|player": {
            name: "EXP Token (Player)",
            vrpName: "EXP Token (Player)<span type='player-player'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|trucking|postop": {
            name: "EXP Token (PostOP)",
            vrpName: "EXP Token (PostOP)<span type='trucking-postop'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|player|racing": {
            name: "EXP Token (Racing)",
            vrpName: "EXP Token (Racing)<span type='player-racing'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|physical|strength": {
            name: "EXP Token (Strength)",
            vrpName: "EXP Token (Strength)<span type='physical-strength'/>",
            weight: 0,
            isTruckingItem: !1
        },
        "exp_token|trucking|trucking": {
            name: "EXP Token (Trucking)",
            vrpName: "EXP Token (Trucking)<span type='trucking-trucking'/>",
            weight: 0,
            isTruckingItem: !1
        },
        earplugs: {
            name: "Earplugs",
            vrpName: "Earplugs",
            weight: 0,
            isTruckingItem: !1
        },
        e_defibkit: {
            name: "Empty Defibrillator Kit",
            vrpName: "Empty Defibrillator Kit",
            weight: 5,
            isTruckingItem: !1
        },
        sd_encrypted: {
            name: "Encrypted SD Card",
            vrpName: "Encrypted SD Card",
            weight: 0,
            isTruckingItem: !1
        },
        redgull: {
            name: "Energy Drink",
            vrpName: "Energy Drink",
            weight: 0,
            isTruckingItem: !1
        },
        "faction_money_card|250000": {
            name: "Faction Credits Card: \u20A1250.00k",
            vrpName: 'Faction Credits Card: <span style="color:limegreen">\u20A1250.00k</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "faction_money_card|50000": {
            name: "Faction Credits Card: \u20A150.00k",
            vrpName: 'Faction Credits Card: <span style="color:limegreen">\u20A150.00k</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "faction_money_card|500000": {
            name: "Faction Credits Card: \u20A1500.00k",
            vrpName: 'Faction Credits Card: <span style="color:limegreen">\u20A1500.00k</span>',
            weight: 0,
            isTruckingItem: !1
        },
        apple_seed: {
            name: "Farming: Apple Seeds",
            vrpName: "Farming: Apple Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        bacon: {
            name: "Farming: Bacon",
            vrpName: "Farming: Bacon",
            weight: .5,
            isTruckingItem: !1
        },
        banana_seed: {
            name: "Farming: Banana Seeds",
            vrpName: "Farming: Banana Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        beef: {
            name: "Farming: Beef",
            vrpName: "Farming: Beef",
            weight: 1,
            isTruckingItem: !1
        },
        blackberry_seed: {
            name: "Farming: Blackberry Seeds",
            vrpName: "Farming: Blackberry Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        blueberry_seed: {
            name: "Farming: Blueberry Seeds",
            vrpName: "Farming: Blueberry Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        carrot_seed: {
            name: "Farming: Carrot Seeds",
            vrpName: "Farming: Carrot Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        cherry_seed: {
            name: "Farming: Cherry Seeds",
            vrpName: "Farming: Cherry Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        corn_seed: {
            name: "Farming: Corn Seeds",
            vrpName: "Farming: Corn Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        eggs: {
            name: "Farming: Eggs",
            vrpName: "Farming: Eggs",
            weight: .1,
            isTruckingItem: !1
        },
        fertilizer: {
            name: "Farming: Fertilizer",
            vrpName: "Farming: Fertilizer",
            weight: 1,
            isTruckingItem: !1
        },
        processed_flour: {
            name: "Farming: Flour",
            vrpName: "Farming: Flour",
            weight: .1,
            isTruckingItem: !1
        },
        grape_seed: {
            name: "Farming: Grape Seeds",
            vrpName: "Farming: Grape Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        mango_seed: {
            name: "Farming: Mango Seeds",
            vrpName: "Farming: Mango Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        farm_milk: {
            name: "Farming: Milk",
            vrpName: "Farming: Milk",
            weight: 1,
            isTruckingItem: !1
        },
        orange_seed: {
            name: "Farming: Orange Seeds",
            vrpName: "Farming: Orange Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        peach_seed: {
            name: "Farming: Peach Seeds",
            vrpName: "Farming: Peach Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        pear_seed: {
            name: "Farming: Pear Seeds",
            vrpName: "Farming: Pear Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        pineapple_seed: {
            name: "Farming: Pineapple Seeds",
            vrpName: "Farming: Pineapple Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        pork: {
            name: "Farming: Pork",
            vrpName: "Farming: Pork",
            weight: .5,
            isTruckingItem: !1
        },
        potato_seed: {
            name: "Farming: Potato Seeds",
            vrpName: "Farming: Potato Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        converted_potatos: {
            name: "Farming: Potatoes",
            vrpName: "Farming: Potatoes",
            weight: 1,
            isTruckingItem: !1
        },
        pumpkin_seed: {
            name: "Farming: Pumpkin Seeds",
            vrpName: "Farming: Pumpkin Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        converted_pumpkins: {
            name: "Farming: Pumpkins",
            vrpName: "Farming: Pumpkins",
            weight: 1,
            isTruckingItem: !1
        },
        raspberry_seed: {
            name: "Farming: Raspberry Seeds",
            vrpName: "Farming: Raspberry Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        harvest_apples: {
            name: "Farming: Raw Apples",
            vrpName: "Farming: Raw Apples",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_blackberries: {
            name: "Farming: Raw Blackberries",
            vrpName: "Farming: Raw Blackberries",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_blueberries: {
            name: "Farming: Raw Blueberries",
            vrpName: "Farming: Raw Blueberries",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_carrots: {
            name: "Farming: Raw Carrots",
            vrpName: "Farming: Raw Carrots",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_cherries: {
            name: "Farming: Raw Cherries",
            vrpName: "Farming: Raw Cherries",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_corn: {
            name: "Farming: Raw Corn",
            vrpName: "Farming: Raw Corn",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_grapes: {
            name: "Farming: Raw Grapes",
            vrpName: "Farming: Raw Grapes",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_mangoes: {
            name: "Farming: Raw Mangoes",
            vrpName: "Farming: Raw Mangoes",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_oranges: {
            name: "Farming: Raw Oranges",
            vrpName: "Farming: Raw Oranges",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_peaches: {
            name: "Farming: Raw Peaches",
            vrpName: "Farming: Raw Peaches",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_potatos: {
            name: "Farming: Raw Potatoes",
            vrpName: "Farming: Raw Potatoes",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_pumpkins: {
            name: "Farming: Raw Pumpkins",
            vrpName: "Farming: Raw Pumpkins",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_raspberries: {
            name: "Farming: Raw Raspberries",
            vrpName: "Farming: Raw Raspberries",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_strawberries: {
            name: "Farming: Raw Strawberries",
            vrpName: "Farming: Raw Strawberries",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_sugar_cane: {
            name: "Farming: Raw Sugar Cane",
            vrpName: "Farming: Raw Sugar Cane",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_tomatos: {
            name: "Farming: Raw Tomatoes",
            vrpName: "Farming: Raw Tomatoes",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_watermelons: {
            name: "Farming: Raw Watermelons",
            vrpName: "Farming: Raw Watermelons",
            weight: 0,
            isTruckingItem: !1
        },
        harvest_wheat: {
            name: "Farming: Raw Wheat",
            vrpName: "Farming: Raw Wheat",
            weight: 0,
            isTruckingItem: !1
        },
        strawberry_seed: {
            name: "Farming: Strawberry Seeds",
            vrpName: "Farming: Strawberry Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        processed_sugar: {
            name: "Farming: Sugar",
            vrpName: "Farming: Sugar",
            weight: 1,
            isTruckingItem: !1
        },
        sugarcane_seed: {
            name: "Farming: Sugar Cane Seeds",
            vrpName: "Farming: Sugar Cane Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        tomato_seed: {
            name: "Farming: Tomato Seeds",
            vrpName: "Farming: Tomato Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        watermelon_seed: {
            name: "Farming: Watermelon Seeds",
            vrpName: "Farming: Watermelon Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        converted_wheat: {
            name: "Farming: Wheat",
            vrpName: "Farming: Wheat",
            weight: 1,
            isTruckingItem: !1
        },
        wheat_seed: {
            name: "Farming: Wheat Seeds",
            vrpName: "Farming: Wheat Seeds",
            weight: 1,
            isTruckingItem: !1
        },
        fidget_spinner: {
            name: "Fidget Spinner",
            vrpName: '<span style="color:gold">Fidget Spinner</span>',
            weight: 0,
            isTruckingItem: !1
        },
        event_firework_battery: {
            name: "Fireworks Battery",
            vrpName: "Fireworks Battery",
            weight: 0,
            isTruckingItem: !1
        },
        event_firework_fountain: {
            name: "Fireworks Fountain",
            vrpName: "Fireworks Fountain",
            weight: 0,
            isTruckingItem: !1
        },
        event_firework_popper: {
            name: "Fireworks Popper",
            vrpName: "Fireworks Popper",
            weight: 0,
            isTruckingItem: !1
        },
        fish_meat: {
            name: "Fish Meat",
            vrpName: "Fish Meat",
            weight: .1,
            isTruckingItem: !1
        },
        fish_angelfish: {
            name: "Fish: Angelfish",
            vrpName: "Fish: Angelfish",
            weight: .5,
            isTruckingItem: !1
        },
        fish_cod: {
            name: "Fish: Cod",
            vrpName: "Fish: Cod",
            weight: 9.2,
            isTruckingItem: !1
        },
        fish_potcrab: {
            name: "Fish: Crab",
            vrpName: "Fish: Crab",
            weight: 5,
            isTruckingItem: !1
        },
        fish_frogfish: {
            name: "Fish: Frogfish",
            vrpName: "Fish: Frogfish",
            weight: 1,
            isTruckingItem: !1
        },
        fish_gobies: {
            name: "Fish: Goby",
            vrpName: "Fish: Goby",
            weight: .5,
            isTruckingItem: !1
        },
        fish_lobster: {
            name: "Fish: Inshore Lizardfish",
            vrpName: "Fish: Inshore Lizardfish",
            weight: 4,
            isTruckingItem: !1
        },
        fish_mackerel: {
            name: "Fish: Mackerel",
            vrpName: "Fish: Mackerel",
            weight: 1.9,
            isTruckingItem: !1
        },
        fish_monster_octopus: {
            name: "Fish: Monster Octopus",
            vrpName: "Fish: Monster Octopus",
            weight: 20,
            isTruckingItem: !1
        },
        fish_monster_shark: {
            name: "Fish: Monster Shark",
            vrpName: "Fish: Monster Shark",
            weight: 40,
            isTruckingItem: !1
        },
        fish_monster_whale: {
            name: "Fish: Monster Whale",
            vrpName: "Fish: Monster Whale",
            weight: 80,
            isTruckingItem: !1
        },
        fish_kingcrab: {
            name: "Fish: Northern Searobin",
            vrpName: "Fish: Northern Searobin",
            weight: 3,
            isTruckingItem: !1
        },
        fish_saithe: {
            name: "Fish: Saithe",
            vrpName: "Fish: Saithe",
            weight: 18,
            isTruckingItem: !1
        },
        fish_salmon: {
            name: "Fish: Salmon",
            vrpName: "Fish: Salmon",
            weight: 4.2,
            isTruckingItem: !1
        },
        fish_crab: {
            name: "Fish: Sea Mullet",
            vrpName: "Fish: Sea Mullet",
            weight: 1.4,
            isTruckingItem: !1
        },
        fish_trout: {
            name: "Fish: Trout",
            vrpName: "Fish: Trout",
            weight: 12,
            isTruckingItem: !1
        },
        fishing_tackle_epic: {
            name: "Fishing: Epic Tackle",
            vrpName: "Fishing: Epic Tackle",
            weight: 0,
            isTruckingItem: !1
        },
        fishing_tackle_legenday: {
            name: "Fishing: Legendary Tackle",
            vrpName: "Fishing: Legendary Tackle",
            weight: 0,
            isTruckingItem: !1
        },
        fishing_tackle_rare: {
            name: "Fishing: Rare Tackle",
            vrpName: "Fishing: Rare Tackle",
            weight: 0,
            isTruckingItem: !1
        },
        fishing_afk_rod: {
            name: "Fishing: Shiny Rod",
            vrpName: "Fishing: Shiny Rod",
            weight: 0,
            isTruckingItem: !1
        },
        fishing_tackle_uncommon: {
            name: "Fishing: Tackle",
            vrpName: "Fishing: Tackle",
            weight: 0,
            isTruckingItem: !1
        },
        flotsam: {
            name: "Flotsam",
            vrpName: "Flotsam",
            weight: 10,
            isTruckingItem: !1
        },
        fridge_dairy: {
            name: "Fridge: Dairy Products",
            vrpName: "Fridge: Dairy Products",
            weight: 15,
            isTruckingItem: !1
        },
        fridge_meat: {
            name: "Fridge: Frozen Raw Meat",
            vrpName: "Fridge: Frozen Raw Meat",
            weight: 15,
            isTruckingItem: !1
        },
        fridge_veggies: {
            name: "Fridge: Vegetables",
            vrpName: "Fridge: Vegetables",
            weight: 15,
            isTruckingItem: !1
        },
        "garage_card|weevil|BF Weevil": {
            name: "Garage Card: BF Weevil",
            vrpName: 'Garage Card: <span style="color:orange">BF Weevil</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "garage_card|zr350|ZR-350": {
            name: "Garage Card: ZR-350",
            vrpName: 'Garage Card: <span style="color:orange">ZR-350</span>',
            weight: 0,
            isTruckingItem: !1
        },
        gocagola: {
            name: "Goca Gola",
            vrpName: "Goca Gola",
            weight: 0,
            isTruckingItem: !1
        },
        gut_knife: {
            name: "Gut Knife",
            vrpName: "<span/>Gut Knife",
            weight: 15,
            isTruckingItem: !1
        },
        chest_halloween24: {
            name: "Halloween 2024 Loot Bag",
            vrpName: "<span style= 'color:orange'>Halloween 2024 Loot Bag</span>",
            weight: 0,
            isTruckingItem: !1
        },
        candy24: {
            name: "Halloween Candy",
            vrpName: "Halloween Candy",
            weight: 0,
            isTruckingItem: !1
        },
        tavi_hardened_steel: {
            name: "Hardened Steel",
            vrpName: "Hardened Steel",
            weight: 10,
            isTruckingItem: !1
        },
        hunting_boost: {
            name: "Hunters Formula",
            vrpName: "Hunters Formula",
            weight: 0,
            isTruckingItem: !1
        },
        hunting_permit: {
            name: "Hunting Permit",
            vrpName: "Hunting Permit",
            weight: 0,
            isTruckingItem: !1
        },
        hide_boar: {
            name: "Hunting: Boar",
            vrpName: "Hunting: Boar",
            weight: 10,
            isTruckingItem: !1
        },
        hide_bear: {
            name: "Hunting: Brown Bear",
            vrpName: "Hunting: Brown Bear",
            weight: 20,
            isTruckingItem: !1
        },
        hide_cat: {
            name: "Hunting: Cat",
            vrpName: "Hunting: Cat",
            weight: 5,
            isTruckingItem: !1
        },
        hide_hawk: {
            name: "Hunting: Chicken Hawk",
            vrpName: "Hunting: Chicken Hawk",
            weight: 5,
            isTruckingItem: !1
        },
        hide_cormodant: {
            name: "Hunting: Cormodant",
            vrpName: "Hunting: Cormodant",
            weight: 8,
            isTruckingItem: !1
        },
        hide_mtlion: {
            name: "Hunting: Cougar",
            vrpName: "Hunting: Cougar",
            weight: 5,
            isTruckingItem: !1
        },
        hide_coyote: {
            name: "Hunting: Coyote",
            vrpName: "Hunting: Coyote",
            weight: 3,
            isTruckingItem: !1
        },
        hide_crow: {
            name: "Hunting: Crow",
            vrpName: "Hunting: Crow",
            weight: 3,
            isTruckingItem: !1
        },
        hide_deer: {
            name: "Hunting: Deer",
            vrpName: "Hunting: Deer",
            weight: 6,
            isTruckingItem: !1
        },
        hide_leopard: {
            name: "Hunting: Leopard",
            vrpName: "Hunting: Leopard",
            weight: 10,
            isTruckingItem: !1
        },
        hide_lion: {
            name: "Hunting: Lion",
            vrpName: "Hunting: Lion",
            weight: 10,
            isTruckingItem: !1
        },
        hide_rabbit: {
            name: "Hunting: Rabbit",
            vrpName: "Hunting: Rabbit",
            weight: 1,
            isTruckingItem: !1
        },
        hide_retriever: {
            name: "Hunting: Retriever Dog",
            vrpName: "Hunting: Retriever Dog",
            weight: 5,
            isTruckingItem: !1
        },
        hide_rottweiler: {
            name: "Hunting: Rottweiler Dog",
            vrpName: "Hunting: Rottweiler Dog",
            weight: 5,
            isTruckingItem: !1
        },
        hide_chop: {
            name: "Hunting: Rottweiler Dog",
            vrpName: "Hunting: Rottweiler Dog",
            weight: 5,
            isTruckingItem: !1
        },
        hide_seagull: {
            name: "Hunting: Seagull",
            vrpName: "Hunting: Seagull",
            weight: 3,
            isTruckingItem: !1
        },
        hide_wolf: {
            name: "Hunting: Wolf",
            vrpName: "Hunting: Wolf",
            weight: 10,
            isTruckingItem: !1
        },
        icetea: {
            name: "Ice-Tea",
            vrpName: "Ice-Tea",
            weight: 0,
            isTruckingItem: !1
        },
        hw24_jack_o_lantern: {
            name: "Jack O' Lantern",
            vrpName: "Jack O' Lantern",
            weight: 1,
            isTruckingItem: !1
        },
        "jerry_can|HEAVY|Diesel": {
            name: "Jerry Can (Diesel)",
            vrpName: "Jerry Can (Diesel)",
            weight: 2,
            isTruckingItem: !1
        },
        jerry_can_empty: {
            name: "Jerry Can (Empty)",
            vrpName: "Jerry Can (Empty)",
            weight: 2,
            isTruckingItem: !1
        },
        "jerry_can|HELICOPTER|Helicopter": {
            name: "Jerry Can (Helicopter)",
            vrpName: "Jerry Can (Helicopter)",
            weight: 2,
            isTruckingItem: !1
        },
        "jerry_can|DIESEL|Petrol": {
            name: "Jerry Can (Petrol)",
            vrpName: "Jerry Can (Petrol)",
            weight: 2,
            isTruckingItem: !1
        },
        "job_card|pilot": {
            name: "Job Card: Airline Pilot",
            vrpName: 'Job Card: <span style="color:tomato">Airline Pilot</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "job_card|cargopilot": {
            name: "Job Card: Cargo Pilot",
            vrpName: 'Job Card: <span style="color:tomato">Cargo Pilot</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "job_card|emergency": {
            name: "Job Card: EMS / Paramedic",
            vrpName: 'Job Card: <span style="color:tomato">EMS / Paramedic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "job_card|fisher": {
            name: "Job Card: Fisherman",
            vrpName: 'Job Card: <span style="color:tomato">Fisherman</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "job_card|helicopterpilot": {
            name: "Job Card: Helicopter Pilot",
            vrpName: 'Job Card: <span style="color:tomato">Helicopter Pilot</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "job_card|mechanic": {
            name: "Job Card: Mechanic",
            vrpName: 'Job Card: <span style="color:tomato">Mechanic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "job_card|trucker": {
            name: "Job Card: Trucker",
            vrpName: 'Job Card: <span style="color:tomato">Trucker</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "job_card|hunter": {
            name: "Job Card: Wildlife Hunter",
            vrpName: 'Job Card: <span style="color:tomato">Wildlife Hunter</span>',
            weight: 0,
            isTruckingItem: !1
        },
        kebab: {
            name: "Kebab",
            vrpName: "Kebab",
            weight: 0,
            isTruckingItem: !1
        },
        lemonlimonad: {
            name: "Lemon Lemonade",
            vrpName: "Lemon Lemonade",
            weight: 0,
            isTruckingItem: !1
        },
        liberty_voucher_fish: {
            name: "Liberty: Fish Voucher",
            vrpName: "Liberty: Fish Voucher",
            weight: 0,
            isTruckingItem: !1
        },
        liberty_voucher_goods: {
            name: "Liberty: Goods Voucher",
            vrpName: "Liberty: Goods Voucher",
            weight: 0,
            isTruckingItem: !1
        },
        liberty_token: {
            name: "Liberty: Liberty City Token",
            vrpName: "Liberty: Liberty City Token",
            weight: 0,
            isTruckingItem: !1
        },
        liberty_fish_portland: {
            name: "Liberty: Portland Fish",
            vrpName: "Liberty: Portland Fish",
            weight: 75,
            isTruckingItem: !1
        },
        liberty_fish_shoreside: {
            name: "Liberty: Shoreside Fish",
            vrpName: "Liberty: Shoreside Fish",
            weight: 75,
            isTruckingItem: !1
        },
        "license_card|transfer": {
            name: "License: Self Storage Transfer License",
            vrpName: 'License: <span style="color:tomato">Self Storage Transfer License</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "license_card|premium": {
            name: "License: Tycoon Premium License",
            vrpName: 'License: <span style="color:tomato">Tycoon Premium License</span>',
            weight: 0,
            isTruckingItem: !1
        },
        pot_lobster: {
            name: "Lobster Pot",
            vrpName: "Lobster Pot",
            weight: 4,
            isTruckingItem: !1
        },
        mail: {
            name: "Mail",
            vrpName: "Mail",
            weight: 1,
            isTruckingItem: !1
        },
        mechanic_toolbox: {
            name: "Master Toolbox",
            vrpName: "<span class='rainbow'>Master Toolbox</span>",
            weight: 5,
            isTruckingItem: !1
        },
        meat: {
            name: "Meat",
            vrpName: "Meat",
            weight: .5,
            isTruckingItem: !1
        },
        mech_card: {
            name: "Mechanic Card",
            vrpName: "Mechanic Card",
            weight: 0,
            isTruckingItem: !1
        },
        mechanic_hammer: {
            name: "Mechanic: Hammer",
            vrpName: "Mechanic: Hammer",
            weight: 5,
            isTruckingItem: !1
        },
        mechanic_wrench: {
            name: "Mechanic: Wrench",
            vrpName: "Mechanic: Wrench",
            weight: 5,
            isTruckingItem: !1
        },
        milk: {
            name: "Milk",
            vrpName: "Milk",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Armygamer|A Stinky Staff Note": {
            name: "Note: Armygamer",
            vrpName: "Note: Armygamer",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Car Meet 2024|The final car meet of 2024": {
            name: "Note: Car Meet 2024",
            vrpName: "Note: Car Meet 2024",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Christmas 2024| Merry Christmas from the tycoon dev team": {
            name: "Note: Christmas 2024",
            vrpName: "Note: Christmas 2024",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Cocoa Pebbles|A Stinky Staff Note": {
            name: "Note: Cocoa Pebbles",
            vrpName: "Note: Cocoa Pebbles",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Cyberskilzz|A Stinky Staff Note": {
            name: "Note: Cyberskilzz",
            vrpName: "Note: Cyberskilzz",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Extenze|": {
            name: "Note: Extenze",
            vrpName: "Note: Extenze",
            weight: 0,
            isTruckingItem: !1
        },
        'note|Extenze|A Stinky Staff Note"': {
            name: "Note: Extenze",
            vrpName: "Note: Extenze",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Extenze|A Stinky Staff Note": {
            name: "Note: Extenze",
            vrpName: "Note: Extenze",
            weight: 0,
            isTruckingItem: !1
        },
        "note|George|": {
            name: "Note: George",
            vrpName: "Note: George",
            weight: 0,
            isTruckingItem: !1
        },
        "note|George|A Stinky Staff Note": {
            name: "Note: George",
            vrpName: "Note: George",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Glitch|The Awesome Staff Note": {
            name: "Note: Glitch",
            vrpName: "Note: Glitch",
            weight: 0,
            isTruckingItem: !1
        },
        "note|GlitchDetector|A Stinky Staff Note": {
            name: "Note: GlitchDetector",
            vrpName: "Note: GlitchDetector",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Goobie|A Stinky Staff Note": {
            name: "Note: Goobie",
            vrpName: "Note: Goobie",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Heathrow Go Shower|": {
            name: "Note: Heathrow Go Shower",
            vrpName: "Note: Heathrow Go Shower",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Lewis|": {
            name: "Note: Lewis",
            vrpName: "Note: Lewis",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Netomnia|A Stinky Staff Note": {
            name: "Note: Netomnia",
            vrpName: "Note: Netomnia",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Nick|A Stinky Staff Note": {
            name: "Note: Nick",
            vrpName: "Note: Nick",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Nick|": {
            name: "Note: Nick",
            vrpName: "Note: Nick",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Niknakz|A Stinky Staff Note": {
            name: "Note: Niknakz",
            vrpName: "Note: Niknakz",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Part|A Stinky Staff Note": {
            name: "Note: Part",
            vrpName: "Note: Part",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Scare Card| you were expecting it to scream weren't you, nope im not that mean. Happy Halloween 2024!": {
            name: "Note: Scare Card",
            vrpName: "Note: Scare Card",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Scorpio|": {
            name: "Note: Scorpio",
            vrpName: "Note: Scorpio",
            weight: 0,
            isTruckingItem: !1
        },
        'note|Scorpio|A Stinky Staff Note"': {
            name: "Note: Scorpio",
            vrpName: "Note: Scorpio",
            weight: 0,
            isTruckingItem: !1
        },
        "note|Tom669933|A Stinky Staff Note": {
            name: "Note: Tom669933",
            vrpName: "Note: Tom669933",
            weight: 0,
            isTruckingItem: !1
        },
        free_business_card_25: {
            name: "ONE FREE Business (25M)",
            vrpName: "ONE FREE Business (25M)",
            weight: 0,
            isTruckingItem: !1
        },
        orangejuice: {
            name: "Orange Juice",
            vrpName: "Orange Juice",
            weight: 0,
            isTruckingItem: !1
        },
        phone_atm: {
            name: "Phone Extension: Portable ATM",
            vrpName: "Phone Extension: Portable ATM",
            weight: 0,
            isTruckingItem: !1
        },
        pills: {
            name: "Pills",
            vrpName: "Pills",
            weight: .1,
            isTruckingItem: !1
        },
        pdonut: {
            name: "Premium Donut",
            vrpName: "Premium Donut",
            weight: 0,
            isTruckingItem: !1
        },
        fish_meat_premium: {
            name: "Premium Fish Meat",
            vrpName: "Premium Fish Meat",
            weight: .1,
            isTruckingItem: !1
        },
        prospecting_scanner: {
            name: "Prospecting Scanner",
            vrpName: "Prospecting Scanner",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_1: {
            name: "Prospecting: Bones",
            vrpName: "Prospecting: Bones",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_6: {
            name: "Prospecting: Bottle Caps",
            vrpName: "Prospecting: Bottle Caps",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_10: {
            name: "Prospecting: Bullet Casings",
            vrpName: "Prospecting: Bullet Casings",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_4: {
            name: "Prospecting: Dragon Scales",
            vrpName: "Prospecting: Dragon Scales",
            weight: 0,
            isTruckingItem: !1
        },
        free_fall_card: {
            name: "Prospecting: Dragon Wings",
            vrpName: "Prospecting: Dragon Wings",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_8: {
            name: "Prospecting: Electronics",
            vrpName: "Prospecting: Electronics",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_9: {
            name: "Prospecting: Firearm",
            vrpName: "Prospecting: Firearm",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_3: {
            name: "Prospecting: Golden Ring",
            vrpName: "Prospecting: Golden Ring",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_2: {
            name: "Prospecting: Nuts and Bolts",
            vrpName: "Prospecting: Nuts and Bolts",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_7: {
            name: "Prospecting: Rusty Cans",
            vrpName: "Prospecting: Rusty Cans",
            weight: 0,
            isTruckingItem: !1
        },
        prosp_junk_5: {
            name: "Prospecting: Scrap Metal",
            vrpName: "Prospecting: Scrap Metal",
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|manana2|Albany  Manana Custom": {
            name: "R.T.S. Card: Albany  Manana Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany  Manana Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|buccaneer3|Albany Buccaneer": {
            name: "R.T.S. Card: Albany Buccaneer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Buccaneer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|buccaneer|Albany Buccaneer": {
            name: "R.T.S. Card: Albany Buccaneer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Buccaneer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|buccaneer2|Albany Buccaneer Custom": {
            name: "R.T.S. Card: Albany Buccaneer Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Buccaneer Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cavalcade|Albany Cavalcade": {
            name: "R.T.S. Card: Albany Cavalcade",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Cavalcade</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|emperor4|Albany Emperor Stretch": {
            name: "R.T.S. Card: Albany Emperor Stretch",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Emperor Stretch</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|esperanto|Albany Esperanto (GTA IV)": {
            name: "R.T.S. Card: Albany Esperanto (GTA IV)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Esperanto (GTA IV)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|btype2|Albany Fr\xE4nken Stange": {
            name: "R.T.S. Card: Albany Fr\xE4nken Stange",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Fr\xE4nken Stange</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hermes|Albany Hermes": {
            name: "R.T.S. Card: Albany Hermes",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Hermes</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|pres2|Albany Presidente VIOS": {
            name: "R.T.S. Card: Albany Presidente VIOS",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Presidente VIOS</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|primov12|Albany Primo Club Racer": {
            name: "R.T.S. Card: Albany Primo Club Racer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Primo Club Racer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|primo2|Albany Primo Custom": {
            name: "R.T.S. Card: Albany Primo Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Primo Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|btype|Albany Roosevelt": {
            name: "R.T.S. Card: Albany Roosevelt",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Roosevelt</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|btype3|Albany Roosevelt Valor": {
            name: "R.T.S. Card: Albany Roosevelt Valor",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Roosevelt Valor</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vstr|Albany V-STR": {
            name: "R.T.S. Card: Albany V-STR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany V-STR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|virgo|Albany Virgo": {
            name: "R.T.S. Card: Albany Virgo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Virgo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|washington|Albany Washington": {
            name: "R.T.S. Card: Albany Washington",
            vrpName: 'R.T.S. Card: <span style="color:orange">Albany Washington</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|elegy2|Annis Elegy RH8": {
            name: "R.T.S. Card: Annis Elegy RH8",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis Elegy RH8</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|elegy|Annis Elegy Retro Custom": {
            name: "R.T.S. Card: Annis Elegy Retro Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis Elegy Retro Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|euros|Annis Euros": {
            name: "R.T.S. Card: Annis Euros",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis Euros</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hellion|Annis Hellion": {
            name: "R.T.S. Card: Annis Hellion",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis Hellion</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|lancea|Annis Lancea": {
            name: "R.T.S. Card: Annis Lancea",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis Lancea</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|pinnacle|Annis Pinnacle": {
            name: "R.T.S. Card: Annis Pinnacle",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis Pinnacle</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|le7b|Annis RE-7B": {
            name: "R.T.S. Card: Annis RE-7B",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis RE-7B</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|remus|Annis Remus": {
            name: "R.T.S. Card: Annis Remus",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis Remus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|s80|Annis S80RR": {
            name: "R.T.S. Card: Annis S80RR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis S80RR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zr350ta|Annis ZR-350 T/A": {
            name: "R.T.S. Card: Annis ZR-350 T/A",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis ZR-350 T/A</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zr350|Annis ZR350": {
            name: "R.T.S. Card: Annis ZR350",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis ZR350</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zr380|Annis ZR380 Apocalypse": {
            name: "R.T.S. Card: Annis ZR380 Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis ZR380 Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zr3802|Annis ZR380 Future Shock": {
            name: "R.T.S. Card: Annis ZR380 Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis ZR380 Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zr3803|Annis ZR380 Nightmare": {
            name: "R.T.S. Card: Annis ZR380 Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Annis ZR380 Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bifta|BF Bifta": {
            name: "R.T.S. Card: BF Bifta",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Bifta</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|club|BF Club": {
            name: "R.T.S. Card: BF Club",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Club</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dune|BF Dune Buggy": {
            name: "R.T.S. Card: BF Dune Buggy",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Dune Buggy</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dune3|BF Dune FAV": {
            name: "R.T.S. Card: BF Dune FAV",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Dune FAV</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|huesca|BF Huesca": {
            name: "R.T.S. Card: BF Huesca",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Huesca</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bfinjection|BF Injection": {
            name: "R.T.S. Card: BF Injection",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Injection</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|raptor|BF Raptor": {
            name: "R.T.S. Card: BF Raptor",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Raptor</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|remidor|BF Remidor": {
            name: "R.T.S. Card: BF Remidor",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Remidor</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|surfer|BF Surfer": {
            name: "R.T.S. Card: BF Surfer",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Surfer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|weevil|BF Weevil": {
            name: "R.T.S. Card: BF Weevil",
            vrpName: 'R.T.S. Card: <span style="color:orange">BF Weevil</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|openwheel1|Benefactor BR8": {
            name: "R.T.S. Card: Benefactor BR8",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor BR8</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bruiser|Benefactor Bruiser Apocalypse": {
            name: "R.T.S. Card: Benefactor Bruiser Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Bruiser Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bruiser2|Benefactor Bruiser Future Shock": {
            name: "R.T.S. Card: Benefactor Bruiser Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Bruiser Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bruiser3|Benefactor Bruiser Nightmare": {
            name: "R.T.S. Card: Benefactor Bruiser Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Bruiser Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dubsta|Benefactor Dubsta": {
            name: "R.T.S. Card: Benefactor Dubsta",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Dubsta</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dubsta3|Benefactor Dubsta 6x6": {
            name: "R.T.S. Card: Benefactor Dubsta 6x6",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Dubsta 6x6</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|feltzer2|Benefactor Feltzer": {
            name: "R.T.S. Card: Benefactor Feltzer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Feltzer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|feltzer|Benefactor Feltzer Coupe": {
            name: "R.T.S. Card: Benefactor Feltzer Coupe",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Feltzer Coupe</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|glendale2|Benefactor Glendale Custom": {
            name: "R.T.S. Card: Benefactor Glendale Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Glendale Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|krieger|Benefactor Krieger": {
            name: "R.T.S. Card: Benefactor Krieger",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Krieger</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|schaftergtr|Benefactor Schafter GTR": {
            name: "R.T.S. Card: Benefactor Schafter GTR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Schafter GTR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|schafter4|Benefactor Schafter LWB": {
            name: "R.T.S. Card: Benefactor Schafter LWB",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Schafter LWB</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|schafter6|Benefactor Schafter LWB (Armored)": {
            name: "R.T.S. Card: Benefactor Schafter LWB (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Schafter LWB (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|schafter3|Benefactor Schafter V12": {
            name: "R.T.S. Card: Benefactor Schafter V12",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Schafter V12</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|schafter5|Benefactor Schafter V12 (Armored)": {
            name: "R.T.S. Card: Benefactor Schafter V12 (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Schafter V12 (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|schlagen|Benefactor Schlagen GT": {
            name: "R.T.S. Card: Benefactor Schlagen GT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Schlagen GT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|spritzerdtm|Benefactor Spritzer DTM": {
            name: "R.T.S. Card: Benefactor Spritzer DTM",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Spritzer DTM</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|spritzer|Benefactor Spritzer STR": {
            name: "R.T.S. Card: Benefactor Spritzer STR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Spritzer STR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|feltzer3|Benefactor Stirling GT": {
            name: "R.T.S. Card: Benefactor Stirling GT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Stirling GT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|stretch3|Benefactor Stretch E": {
            name: "R.T.S. Card: Benefactor Stretch E",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Stretch E</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|limo2|Benefactor Turreted Limo": {
            name: "R.T.S. Card: Benefactor Turreted Limo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor Turreted Limo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|xls2|Benefactor XLS (Armored)": {
            name: "R.T.S. Card: Benefactor XLS (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Benefactor XLS (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|prairie|Bollokan Prairie": {
            name: "R.T.S. Card: Bollokan Prairie",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bollokan Prairie</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|banshee|Bravado Banshee": {
            name: "R.T.S. Card: Bravado Banshee",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Banshee</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|banshee2|Bravado Banshee 900R": {
            name: "R.T.S. Card: Bravado Banshee 900R",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Banshee 900R</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|buffalo2|Bravado Buffalo S": {
            name: "R.T.S. Card: Bravado Buffalo S",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Buffalo S</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|buffalo4|Bravado Buffalo STX": {
            name: "R.T.S. Card: Bravado Buffalo STX",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Buffalo STX</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dloader|Bravado Duneloader": {
            name: "R.T.S. Card: Bravado Duneloader",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Duneloader</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|feroci|Bravado Feroci": {
            name: "R.T.S. Card: Bravado Feroci",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Feroci</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gauntlet|Bravado Gauntlet": {
            name: "R.T.S. Card: Bravado Gauntlet",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Gauntlet</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gauntlet3|Bravado Gauntlet Classic": {
            name: "R.T.S. Card: Bravado Gauntlet Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Gauntlet Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gauntlet4|Bravado Gauntlet Hellfire": {
            name: "R.T.S. Card: Bravado Gauntlet Hellfire",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Gauntlet Hellfire</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ratloader|Bravado Rat-Loader": {
            name: "R.T.S. Card: Bravado Rat-Loader",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Rat-Loader</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ratloader2|Bravado Rat-Truck": {
            name: "R.T.S. Card: Bravado Rat-Truck",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Rat-Truck</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gauntlet2|Bravado Redwood Gauntlet": {
            name: "R.T.S. Card: Bravado Redwood Gauntlet",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Redwood Gauntlet</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rumpo|Bravado Rumpo": {
            name: "R.T.S. Card: Bravado Rumpo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Rumpo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|buffalo3|Bravado Sprunk Buffalo": {
            name: "R.T.S. Card: Bravado Sprunk Buffalo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Sprunk Buffalo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|verlierer2|Bravado Verlierer": {
            name: "R.T.S. Card: Bravado Verlierer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Verlierer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|youga2|Bravado Youga Classic": {
            name: "R.T.S. Card: Bravado Youga Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Youga Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|youga4|Bravado Youga Custom": {
            name: "R.T.S. Card: Bravado Youga Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Bravado Youga Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bodhi2|Canis Bodhi": {
            name: "R.T.S. Card: Canis Bodhi",
            vrpName: 'R.T.S. Card: <span style="color:orange">Canis Bodhi</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|crusader|Canis Crusader": {
            name: "R.T.S. Card: Canis Crusader",
            vrpName: 'R.T.S. Card: <span style="color:orange">Canis Crusader</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|freecrawler|Canis Freecrawler": {
            name: "R.T.S. Card: Canis Freecrawler",
            vrpName: 'R.T.S. Card: <span style="color:orange">Canis Freecrawler</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|kamacho|Canis Kamacho": {
            name: "R.T.S. Card: Canis Kamacho",
            vrpName: 'R.T.S. Card: <span style="color:orange">Canis Kamacho</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|mesa|Canis Mesa": {
            name: "R.T.S. Card: Canis Mesa",
            vrpName: 'R.T.S. Card: <span style="color:orange">Canis Mesa</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|seminole|Canis Seminole": {
            name: "R.T.S. Card: Canis Seminole",
            vrpName: 'R.T.S. Card: <span style="color:orange">Canis Seminole</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|fxt|Cavalcade FXT": {
            name: "R.T.S. Card: Cavalcade FXT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Cavalcade FXT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|romero|Chariot Romero Hearse": {
            name: "R.T.S. Card: Chariot Romero Hearse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Chariot Romero Hearse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|surge|Cheval Surge": {
            name: "R.T.S. Card: Cheval Surge",
            vrpName: 'R.T.S. Card: <span style="color:orange">Cheval Surge</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|taipan|Cheval Taipan": {
            name: "R.T.S. Card: Cheval Taipan",
            vrpName: 'R.T.S. Card: <span style="color:orange">Cheval Taipan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|wombat|Cheval Wombat": {
            name: "R.T.S. Card: Cheval Wombat",
            vrpName: 'R.T.S. Card: <span style="color:orange">Cheval Wombat</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|brawler|Coil Brawler": {
            name: "R.T.S. Card: Coil Brawler",
            vrpName: 'R.T.S. Card: <span style="color:orange">Coil Brawler</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cyclone|Coil Cyclone": {
            name: "R.T.S. Card: Coil Cyclone",
            vrpName: 'R.T.S. Card: <span style="color:orange">Coil Cyclone</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|raiden|Coil Raiden": {
            name: "R.T.S. Card: Coil Raiden",
            vrpName: 'R.T.S. Card: <span style="color:orange">Coil Raiden</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|voltic2|Coil Rocket Voltic": {
            name: "R.T.S. Card: Coil Rocket Voltic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Coil Rocket Voltic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|savanna|Coil Savanna": {
            name: "R.T.S. Card: Coil Savanna",
            vrpName: 'R.T.S. Card: <span style="color:orange">Coil Savanna</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|voltic|Coil Voltic": {
            name: "R.T.S. Card: Coil Voltic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Coil Voltic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|asea|Declasse Asea": {
            name: "R.T.S. Card: Declasse Asea",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Asea</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|brutus|Declasse Brutus Apocalypse": {
            name: "R.T.S. Card: Declasse Brutus Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Brutus Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|brutus2|Declasse Brutus Future Shock": {
            name: "R.T.S. Card: Declasse Brutus Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Brutus Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|brutus3|Declasse Brutus Nightmare": {
            name: "R.T.S. Card: Declasse Brutus Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Brutus Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|stalion2|Declasse Burger Shot Stallion": {
            name: "R.T.S. Card: Declasse Burger Shot Stallion",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Burger Shot Stallion</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|openwheel2|Declasse DR1": {
            name: "R.T.S. Card: Declasse DR1",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse DR1</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tampa2|Declasse Drift Tampa": {
            name: "R.T.S. Card: Declasse Drift Tampa",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Drift Tampa</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|yosemite2|Declasse Drift Yosemite": {
            name: "R.T.S. Card: Declasse Drift Yosemite",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Drift Yosemite</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gburrito2|Declasse Gang Burrito": {
            name: "R.T.S. Card: Declasse Gang Burrito",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Gang Burrito</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|granger|Declasse Granger": {
            name: "R.T.S. Card: Declasse Granger",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Granger</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|granger2|Declasse Granger 3600LX": {
            name: "R.T.S. Card: Declasse Granger 3600LX",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Granger 3600LX</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hotring|Declasse Hotring Sabre": {
            name: "R.T.S. Card: Declasse Hotring Sabre",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Hotring Sabre</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|impaler|Declasse Impaler": {
            name: "R.T.S. Card: Declasse Impaler",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Impaler</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|impaler2|Declasse Impaler Apocalypse": {
            name: "R.T.S. Card: Declasse Impaler Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Impaler Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|impaler3|Declasse Impaler Future Shock": {
            name: "R.T.S. Card: Declasse Impaler Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Impaler Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|impaler4|Declasse Impaler Nightmare": {
            name: "R.T.S. Card: Declasse Impaler Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Impaler Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|mamba|Declasse Mamba": {
            name: "R.T.S. Card: Declasse Mamba",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Mamba</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|merit|Declasse Merit": {
            name: "R.T.S. Card: Declasse Merit",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Merit</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|taxi2|Declasse Merit Taxi": {
            name: "R.T.S. Card: Declasse Merit Taxi",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Merit Taxi</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rancher|Declasse Rancher SWB": {
            name: "R.T.S. Card: Declasse Rancher SWB",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Rancher SWB</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rancherxl|Declasse Rancher XL": {
            name: "R.T.S. Card: Declasse Rancher XL",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Rancher XL</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|riva|Declasse Riva": {
            name: "R.T.S. Card: Declasse Riva",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Riva</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sabre|Declasse Sabre": {
            name: "R.T.S. Card: Declasse Sabre",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Sabre</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sabregt2|Declasse Sabre Turbo Custom": {
            name: "R.T.S. Card: Declasse Sabre Turbo Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Sabre Turbo Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|scramjet|Declasse Scramjet": {
            name: "R.T.S. Card: Declasse Scramjet",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Scramjet</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tampa3|Declasse Tampa": {
            name: "R.T.S. Card: Declasse Tampa",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Tampa</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tampa|Declasse Tampa": {
            name: "R.T.S. Card: Declasse Tampa",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Tampa</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tornado5|Declasse Tornado Custom": {
            name: "R.T.S. Card: Declasse Tornado Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Tornado Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tornado6|Declasse Tornado Rat Rod": {
            name: "R.T.S. Card: Declasse Tornado Rat Rod",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Tornado Rat Rod</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tulip|Declasse Tulip": {
            name: "R.T.S. Card: Declasse Tulip",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Tulip</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vigerob|Declasse Vigero Beater": {
            name: "R.T.S. Card: Declasse Vigero Beater",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Vigero Beater</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|voodoo|Declasse Voodoo": {
            name: "R.T.S. Card: Declasse Voodoo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Voodoo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|yosemite|Declasse Yosemite": {
            name: "R.T.S. Card: Declasse Yosemite",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Yosemite</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|yosemite3|Declasse Yosemite": {
            name: "R.T.S. Card: Declasse Yosemite",
            vrpName: 'R.T.S. Card: <span style="color:orange">Declasse Yosemite</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|champion|Dewbauchee Champion": {
            name: "R.T.S. Card: Dewbauchee Champion",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Champion</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|exemplar|Dewbauchee Exemplar": {
            name: "R.T.S. Card: Dewbauchee Exemplar",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Exemplar</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jb700|Dewbauchee JB 700": {
            name: "R.T.S. Card: Dewbauchee JB 700",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee JB 700</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jb7002|Dewbauchee JB 700W": {
            name: "R.T.S. Card: Dewbauchee JB 700W",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee JB 700W</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|massacro|Dewbauchee Massacro": {
            name: "R.T.S. Card: Dewbauchee Massacro",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Massacro</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|massacro2|Dewbauchee Massacro (Racecar)": {
            name: "R.T.S. Card: Dewbauchee Massacro (Racecar)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Massacro (Racecar)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rapidgt|Dewbauchee Rapid GT": {
            name: "R.T.S. Card: Dewbauchee Rapid GT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Rapid GT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rapidgt3|Dewbauchee Rapid GT Classic": {
            name: "R.T.S. Card: Dewbauchee Rapid GT Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Rapid GT Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|seven70|Dewbauchee Seven-70": {
            name: "R.T.S. Card: Dewbauchee Seven-70",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Seven-70</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|specter|Dewbauchee Specter": {
            name: "R.T.S. Card: Dewbauchee Specter",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Specter</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|specter2|Dewbauchee Specter Custom": {
            name: "R.T.S. Card: Dewbauchee Specter Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Specter Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|supergt|Dewbauchee SuperGT": {
            name: "R.T.S. Card: Dewbauchee SuperGT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee SuperGT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vagner|Dewbauchee Vagner": {
            name: "R.T.S. Card: Dewbauchee Vagner",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dewbauchee Vagner</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|akuma|Dinka Akuma": {
            name: "R.T.S. Card: Dinka Akuma",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Akuma</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blista|Dinka Blista": {
            name: "R.T.S. Card: Dinka Blista",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Blista</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blista2|Dinka Blista Compact": {
            name: "R.T.S. Card: Dinka Blista Compact",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Blista Compact</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blistata|Dinka Blista Compact T/A": {
            name: "R.T.S. Card: Dinka Blista Compact T/A",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Blista Compact T/A</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|kanjo|Dinka Blista Kanjo": {
            name: "R.T.S. Card: Dinka Blista Kanjo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Blista Kanjo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|chavos|Dinka Chavos": {
            name: "R.T.S. Card: Dinka Chavos",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Chavos</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|chavos2|Dinka Chavos S": {
            name: "R.T.S. Card: Dinka Chavos S",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Chavos S</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|double|Dinka Double-T": {
            name: "R.T.S. Card: Dinka Double-T",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Double-T</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|double2|Dinka Double-T Custom": {
            name: "R.T.S. Card: Dinka Double-T Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Double-T Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|enduro|Dinka Enduro": {
            name: "R.T.S. Card: Dinka Enduro",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Enduro</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blista3|Dinka Go Go Monkey Blista": {
            name: "R.T.S. Card: Dinka Go Go Monkey Blista",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Go Go Monkey Blista</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hakumai|Dinka Hakumai": {
            name: "R.T.S. Card: Dinka Hakumai",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Hakumai</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jester|Dinka Jester": {
            name: "R.T.S. Card: Dinka Jester",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Jester</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jester2|Dinka Jester (Racecar)": {
            name: "R.T.S. Card: Dinka Jester (Racecar)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Jester (Racecar)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jester3|Dinka Jester Classic": {
            name: "R.T.S. Card: Dinka Jester Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Jester Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jester4|Dinka Jester Sport": {
            name: "R.T.S. Card: Dinka Jester Sport",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Jester Sport</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jesterv12|Dinka Jester Super Secret": {
            name: "R.T.S. Card: Dinka Jester Super Secret",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Jester Super Secret</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|perennial2|Dinka Perennial FlyUS": {
            name: "R.T.S. Card: Dinka Perennial FlyUS",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Perennial FlyUS</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rt3000|Dinka RT3000": {
            name: "R.T.S. Card: Dinka RT3000",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka RT3000</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sugoi|Dinka Sugoi": {
            name: "R.T.S. Card: Dinka Sugoi",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Sugoi</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|veto|Dinka Veto Classic": {
            name: "R.T.S. Card: Dinka Veto Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Veto Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|veto2|Dinka Veto Modern": {
            name: "R.T.S. Card: Dinka Veto Modern",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Veto Modern</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vindicator|Dinka Vindicator": {
            name: "R.T.S. Card: Dinka Vindicator",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dinka Vindicator</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|landstalker|Dundreary Landstalker": {
            name: "R.T.S. Card: Dundreary Landstalker",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dundreary Landstalker</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|regina|Dundreary Regina": {
            name: "R.T.S. Card: Dundreary Regina",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dundreary Regina</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|regina3|Dundreary Regina Sedan": {
            name: "R.T.S. Card: Dundreary Regina Sedan",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dundreary Regina Sedan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|stretch2|Dundreary Stretch": {
            name: "R.T.S. Card: Dundreary Stretch",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dundreary Stretch</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|stretch|Dundreary Stretch": {
            name: "R.T.S. Card: Dundreary Stretch",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dundreary Stretch</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|virgo3|Dundreary Virgo Classic": {
            name: "R.T.S. Card: Dundreary Virgo Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dundreary Virgo Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|virgo2|Dundreary Virgo Classic Custom": {
            name: "R.T.S. Card: Dundreary Virgo Classic Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Dundreary Virgo Classic Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sheava|Emperor ETR1": {
            name: "R.T.S. Card: Emperor ETR1",
            vrpName: 'R.T.S. Card: <span style="color:orange">Emperor ETR1</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|habanero|Emperor Habanero": {
            name: "R.T.S. Card: Emperor Habanero",
            vrpName: 'R.T.S. Card: <span style="color:orange">Emperor Habanero</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|lokus|Emperor Lokus": {
            name: "R.T.S. Card: Emperor Lokus",
            vrpName: 'R.T.S. Card: <span style="color:orange">Emperor Lokus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vectre|Emperor Vectre": {
            name: "R.T.S. Card: Emperor Vectre",
            vrpName: 'R.T.S. Card: <span style="color:orange">Emperor Vectre</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hpr1|Entara HPR-1": {
            name: "R.T.S. Card: Entara HPR-1",
            vrpName: 'R.T.S. Card: <span style="color:orange">Entara HPR-1</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hpr1|Entara HPR-1 &": {
            name: "R.T.S. Card: Entara HPR-1 &",
            vrpName: 'R.T.S. Card: <span style="color:orange">Entara HPR-1 &</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cognoscenti|Enus Cognoscenti": {
            name: "R.T.S. Card: Enus Cognoscenti",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Cognoscenti</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cognoscenti2|Enus Cognoscenti (Armored)": {
            name: "R.T.S. Card: Enus Cognoscenti (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Cognoscenti (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cog55|Enus Cognoscenti 55": {
            name: "R.T.S. Card: Enus Cognoscenti 55",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Cognoscenti 55</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cog552|Enus Cognoscenti 55 (Armored)": {
            name: "R.T.S. Card: Enus Cognoscenti 55 (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Cognoscenti 55 (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cogcabrio|Enus Cognoscenti Cabrio": {
            name: "R.T.S. Card: Enus Cognoscenti Cabrio",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Cognoscenti Cabrio</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|deity|Enus Deity": {
            name: "R.T.S. Card: Enus Deity",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Deity</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|huntley|Enus Huntley S": {
            name: "R.T.S. Card: Enus Huntley S",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Huntley S</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jubilee|Enus Jubilee": {
            name: "R.T.S. Card: Enus Jubilee",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Jubilee</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|paragon|Enus Paragon R": {
            name: "R.T.S. Card: Enus Paragon R",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Paragon R</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|paragon2|Enus Paragon R (Armored)": {
            name: "R.T.S. Card: Enus Paragon R (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Paragon R (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|superd2|Enus Super Drop Diamond": {
            name: "R.T.S. Card: Enus Super Drop Diamond",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Super Drop Diamond</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|windsor|Enus Windsor": {
            name: "R.T.S. Card: Enus Windsor",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Windsor</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|windsor2|Enus Windsor Drop": {
            name: "R.T.S. Card: Enus Windsor Drop",
            vrpName: 'R.T.S. Card: <span style="color:orange">Enus Windsor Drop</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|fq2|Fathom FQ 2": {
            name: "R.T.S. Card: Fathom FQ 2",
            vrpName: 'R.T.S. Card: <span style="color:orange">Fathom FQ 2</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|airportferoci|FlyUS Feroci": {
            name: "R.T.S. Card: FlyUS Feroci",
            vrpName: 'R.T.S. Card: <span style="color:orange">FlyUS Feroci</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|airportperennial|FlyUS Perennial": {
            name: "R.T.S. Card: FlyUS Perennial",
            vrpName: 'R.T.S. Card: <span style="color:orange">FlyUS Perennial</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|baller2|Gallivanter Baller": {
            name: "R.T.S. Card: Gallivanter Baller",
            vrpName: 'R.T.S. Card: <span style="color:orange">Gallivanter Baller</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|baller3|Gallivanter Baller LE": {
            name: "R.T.S. Card: Gallivanter Baller LE",
            vrpName: 'R.T.S. Card: <span style="color:orange">Gallivanter Baller LE</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|baller5|Gallivanter Baller LE (Armored)": {
            name: "R.T.S. Card: Gallivanter Baller LE (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Gallivanter Baller LE (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|baller4|Gallivanter Baller LE LWB": {
            name: "R.T.S. Card: Gallivanter Baller LE LWB",
            vrpName: 'R.T.S. Card: <span style="color:orange">Gallivanter Baller LE LWB</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|baller6|Gallivanter Baller LE LWB (Armored)": {
            name: "R.T.S. Card: Gallivanter Baller LE LWB (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Gallivanter Baller LE LWB (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|baller7|Gallivanter Baller ST": {
            name: "R.T.S. Card: Gallivanter Baller ST",
            vrpName: 'R.T.S. Card: <span style="color:orange">Gallivanter Baller ST</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bestiagts|Grotti Bestia GTS": {
            name: "R.T.S. Card: Grotti Bestia GTS",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Bestia GTS</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|brioso2|Grotti Brioso 300": {
            name: "R.T.S. Card: Grotti Brioso 300",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Brioso 300</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|brioso|Grotti Brioso R/A": {
            name: "R.T.S. Card: Grotti Brioso R/A",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Brioso R/A</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|carbonizzare|Grotti Carbonizzare": {
            name: "R.T.S. Card: Grotti Carbonizzare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Carbonizzare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cheetah|Grotti Cheetah": {
            name: "R.T.S. Card: Grotti Cheetah",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Cheetah</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cheetah2|Grotti Cheetah Classic": {
            name: "R.T.S. Card: Grotti Cheetah Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Cheetah Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cheetah3|Grotti Cheetah Classic Custom": {
            name: "R.T.S. Card: Grotti Cheetah Classic Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Cheetah Classic Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|furia|Grotti Furia": {
            name: "R.T.S. Card: Grotti Furia",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Furia</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|italigto|Grotti Itali GTO": {
            name: "R.T.S. Card: Grotti Itali GTO",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Itali GTO</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|italirsx|Grotti Itali RSX": {
            name: "R.T.S. Card: Grotti Itali RSX",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Itali RSX</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|turismo|Grotti Turismo": {
            name: "R.T.S. Card: Grotti Turismo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Turismo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|turismo2|Grotti Turismo Classic": {
            name: "R.T.S. Card: Grotti Turismo Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Turismo Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|turismor|Grotti Turismo R": {
            name: "R.T.S. Card: Grotti Turismo R",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Turismo R</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vigilante|Grotti Vigilante": {
            name: "R.T.S. Card: Grotti Vigilante",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Vigilante</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|visione|Grotti Visione": {
            name: "R.T.S. Card: Grotti Visione",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti Visione</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|prototipo|Grotti X80 Proto": {
            name: "R.T.S. Card: Grotti X80 Proto",
            vrpName: 'R.T.S. Card: <span style="color:orange">Grotti X80 Proto</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|barrage|HVY Barrage": {
            name: "R.T.S. Card: HVY Barrage",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Barrage</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|insurgent2|HVY Insurgent": {
            name: "R.T.S. Card: HVY Insurgent",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Insurgent</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|insurgent|HVY Insurgent Pick-Up": {
            name: "R.T.S. Card: HVY Insurgent Pick-Up",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Insurgent Pick-Up</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|insurgent3|HVY Insurgent Pick-Up Custom": {
            name: "R.T.S. Card: HVY Insurgent Pick-Up Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Insurgent Pick-Up Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|menacer|HVY Menacer": {
            name: "R.T.S. Card: HVY Menacer",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Menacer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|nightshark|HVY Nightshark": {
            name: "R.T.S. Card: HVY Nightshark",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Nightshark</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|scarab|HVY Scarab Apocalypse": {
            name: "R.T.S. Card: HVY Scarab Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Scarab Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|scarab2|HVY Scarab Future Shock": {
            name: "R.T.S. Card: HVY Scarab Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Scarab Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|scarab3|HVY Scarab Nightmare": {
            name: "R.T.S. Card: HVY Scarab Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">HVY Scarab Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|khamelion|Hijak Khamelion": {
            name: "R.T.S. Card: Hijak Khamelion",
            vrpName: 'R.T.S. Card: <span style="color:orange">Hijak Khamelion</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ruston|Hijak Ruston": {
            name: "R.T.S. Card: Hijak Ruston",
            vrpName: 'R.T.S. Card: <span style="color:orange">Hijak Ruston</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vertice|Hijak Vertice": {
            name: "R.T.S. Card: Hijak Vertice",
            vrpName: 'R.T.S. Card: <span style="color:orange">Hijak Vertice</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dukes3|Imponte  Beater Dukes": {
            name: "R.T.S. Card: Imponte  Beater Dukes",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte  Beater Dukes</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|df8|Imponte DF8": {
            name: "R.T.S. Card: Imponte DF8",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte DF8</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|deluxogt|Imponte Deluxo GT": {
            name: "R.T.S. Card: Imponte Deluxo GT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte Deluxo GT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dukes2|Imponte Duke O": {
            name: "R.T.S. Card: Imponte Duke O",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte Duke O</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dukes2|Imponte Duke O&": {
            name: "R.T.S. Card: Imponte Duke O&",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte Duke O&</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dukes|Imponte Dukes": {
            name: "R.T.S. Card: Imponte Dukes",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte Dukes</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|nightshade|Imponte Nightshade": {
            name: "R.T.S. Card: Imponte Nightshade",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte Nightshade</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|phoenix|Imponte Phoenix": {
            name: "R.T.S. Card: Imponte Phoenix",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte Phoenix</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|phoenix2|Imponte Phoenix T-Top": {
            name: "R.T.S. Card: Imponte Phoenix T-Top",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte Phoenix T-Top</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ruiner2|Imponte Ruiner 2000": {
            name: "R.T.S. Card: Imponte Ruiner 2000",
            vrpName: 'R.T.S. Card: <span style="color:orange">Imponte Ruiner 2000</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|coquette4|Inverto Coquette D10": {
            name: "R.T.S. Card: Inverto Coquette D10",
            vrpName: 'R.T.S. Card: <span style="color:orange">Inverto Coquette D10</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|coquette|Invetero Coquette": {
            name: "R.T.S. Card: Invetero Coquette",
            vrpName: 'R.T.S. Card: <span style="color:orange">Invetero Coquette</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|coquette3|Invetero Coquette BlackFin": {
            name: "R.T.S. Card: Invetero Coquette BlackFin",
            vrpName: 'R.T.S. Card: <span style="color:orange">Invetero Coquette BlackFin</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|coquette2|Invetero Coquette Classic": {
            name: "R.T.S. Card: Invetero Coquette Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Invetero Coquette Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|remower|Jacksheepe Lawn Mower RS": {
            name: "R.T.S. Card: Jacksheepe Lawn Mower RS",
            vrpName: 'R.T.S. Card: <span style="color:orange">Jacksheepe Lawn Mower RS</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|z190|Karin 190z": {
            name: "R.T.S. Card: Karin 190z",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin 190z</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|asterope|Karin Asterope": {
            name: "R.T.S. Card: Karin Asterope",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Asterope</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|asteropers|Karin Asterope RS": {
            name: "R.T.S. Card: Karin Asterope RS",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Asterope RS</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bjxl|Karin BeeJay XL": {
            name: "R.T.S. Card: Karin BeeJay XL",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin BeeJay XL</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|calico|Karin Calico": {
            name: "R.T.S. Card: Karin Calico",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Calico</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dilettante|Karin Dilettante": {
            name: "R.T.S. Card: Karin Dilettante",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Dilettante</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dilettantedx|Karin Dilettante DX": {
            name: "R.T.S. Card: Karin Dilettante DX",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Dilettante DX</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|everon|Karin Everon": {
            name: "R.T.S. Card: Karin Everon",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Everon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|futo2|Karin Futo GT Hatch": {
            name: "R.T.S. Card: Karin Futo GT Hatch",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Futo GT Hatch</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|futota|Karin Futo T/A": {
            name: "R.T.S. Card: Karin Futo T/A",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Futo T/A</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|intruder|Karin Intruder": {
            name: "R.T.S. Card: Karin Intruder",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Intruder</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|kuruma|Karin Kuruma": {
            name: "R.T.S. Card: Karin Kuruma",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Kuruma</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|kuruma2|Karin Kuruma (Armored)": {
            name: "R.T.S. Card: Karin Kuruma (Armored)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Kuruma (Armored)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|kurumata|Karin Kuruma T/A Mk.I": {
            name: "R.T.S. Card: Karin Kuruma T/A Mk.I",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Kuruma T/A Mk.I</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|previon|Karin Previon": {
            name: "R.T.S. Card: Karin Previon",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Previon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rebel2|Karin Rebel": {
            name: "R.T.S. Card: Karin Rebel",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Rebel</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rebel|Karin Rusty Rebel": {
            name: "R.T.S. Card: Karin Rusty Rebel",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Rusty Rebel</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sultan|Karin Sultan": {
            name: "R.T.S. Card: Karin Sultan",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Sultan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sultan2|Karin Sultan Classic": {
            name: "R.T.S. Card: Karin Sultan Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Sultan Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sultanrs|Karin Sultan RS": {
            name: "R.T.S. Card: Karin Sultan RS",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Sultan RS</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sultanr|Karin Sultan Rally": {
            name: "R.T.S. Card: Karin Sultan Rally",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Sultan Rally</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sultans|Karin Sultan-S": {
            name: "R.T.S. Card: Karin Sultan-S",
            vrpName: 'R.T.S. Card: <span style="color:orange">Karin Sultan-S</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|avarus|LCC Avarus": {
            name: "R.T.S. Card: LCC Avarus",
            vrpName: 'R.T.S. Card: <span style="color:orange">LCC Avarus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hexer|LCC Hexer": {
            name: "R.T.S. Card: LCC Hexer",
            vrpName: 'R.T.S. Card: <span style="color:orange">LCC Hexer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sanctus|LCC Sanctus": {
            name: "R.T.S. Card: LCC Sanctus",
            vrpName: 'R.T.S. Card: <span style="color:orange">LCC Sanctus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|lp700r|Lamborghini Aventador LP700-4 Roadster": {
            name: "R.T.S. Card: Lamborghini Aventador LP700-4 Roadster",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lamborghini Aventador LP700-4 Roadster</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|penne|Lampadati 169 Penne": {
            name: "R.T.S. Card: Lampadati 169 Penne",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati 169 Penne</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|casco|Lampadati Casco": {
            name: "R.T.S. Card: Lampadati Casco",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Casco</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cinquemila|Lampadati Cinquemila": {
            name: "R.T.S. Card: Lampadati Cinquemila",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Cinquemila</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|furoregt|Lampadati Furore GT": {
            name: "R.T.S. Card: Lampadati Furore GT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Furore GT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|komoda|Lampadati Komoda": {
            name: "R.T.S. Card: Lampadati Komoda",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Komoda</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|michelli|Lampadati Michelli GT": {
            name: "R.T.S. Card: Lampadati Michelli GT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Michelli GT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|pigth|Lampadati Pigalle Camper": {
            name: "R.T.S. Card: Lampadati Pigalle Camper",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Pigalle Camper</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tigon|Lampadati Tigon": {
            name: "R.T.S. Card: Lampadati Tigon",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Tigon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tropos|Lampadati Tropos Rallye": {
            name: "R.T.S. Card: Lampadati Tropos Rallye",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Tropos Rallye</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|viseris|Lampadati Viseris": {
            name: "R.T.S. Card: Lampadati Viseris",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lampadati Viseris</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tanajura|Lemanj\xE1 Tanajura": {
            name: "R.T.S. Card: Lemanj\xE1 Tanajura",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lemanj\xE1 Tanajura</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rc350|Lexus RC 350": {
            name: "R.T.S. Card: Lexus RC 350",
            vrpName: 'R.T.S. Card: <span style="color:orange">Lexus RC 350</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|lycan|Liberty Chop Shop Lycan": {
            name: "R.T.S. Card: Liberty Chop Shop Lycan",
            vrpName: 'R.T.S. Card: <span style="color:orange">Liberty Chop Shop Lycan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|lycan2|Liberty Chop Shop Lycan Custom": {
            name: "R.T.S. Card: Liberty Chop Shop Lycan Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Liberty Chop Shop Lycan Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|nightblade2|Liberty Chop Shop Nightblade": {
            name: "R.T.S. Card: Liberty Chop Shop Nightblade",
            vrpName: 'R.T.S. Card: <span style="color:orange">Liberty Chop Shop Nightblade</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rallytruck|MTL Dune": {
            name: "R.T.S. Card: MTL Dune",
            vrpName: 'R.T.S. Card: <span style="color:orange">MTL Dune</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|manchez|Maibatsu Manchez": {
            name: "R.T.S. Card: Maibatsu Manchez",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maibatsu Manchez</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|manchez2|Maibatsu Manchez Scout": {
            name: "R.T.S. Card: Maibatsu Manchez Scout",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maibatsu Manchez Scout</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|penumbra2|Maibatsu Penubra FF": {
            name: "R.T.S. Card: Maibatsu Penubra FF",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maibatsu Penubra FF</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|penumbra|Maibatsu Penumbra": {
            name: "R.T.S. Card: Maibatsu Penumbra",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maibatsu Penumbra</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sanchez2|Maibatsu Sanchez": {
            name: "R.T.S. Card: Maibatsu Sanchez",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maibatsu Sanchez</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sanchez|Maibatsu Sanchez (livery)": {
            name: "R.T.S. Card: Maibatsu Sanchez (livery)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maibatsu Sanchez (livery)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vincent|Maibatsu Vincent": {
            name: "R.T.S. Card: Maibatsu Vincent",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maibatsu Vincent</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|patriot|Mammoth Patriot": {
            name: "R.T.S. Card: Mammoth Patriot",
            vrpName: 'R.T.S. Card: <span style="color:orange">Mammoth Patriot</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|patriot3|Mammoth Patriot Mil-Spec": {
            name: "R.T.S. Card: Mammoth Patriot Mil-Spec",
            vrpName: 'R.T.S. Card: <span style="color:orange">Mammoth Patriot Mil-Spec</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|patriot2|Mammoth Patriot Stretch": {
            name: "R.T.S. Card: Mammoth Patriot Stretch",
            vrpName: 'R.T.S. Card: <span style="color:orange">Mammoth Patriot Stretch</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|thruster|Mammoth Thruster Jetpack": {
            name: "R.T.S. Card: Mammoth Thruster Jetpack",
            vrpName: 'R.T.S. Card: <span style="color:orange">Mammoth Thruster Jetpack</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|asbo|Maxwell Asbo": {
            name: "R.T.S. Card: Maxwell Asbo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maxwell Asbo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vagrant|Maxwell Vagrant": {
            name: "R.T.S. Card: Maxwell Vagrant",
            vrpName: 'R.T.S. Card: <span style="color:orange">Maxwell Vagrant</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|typhoon|Modena Typhoon": {
            name: "R.T.S. Card: Modena Typhoon",
            vrpName: 'R.T.S. Card: <span style="color:orange">Modena Typhoon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bf400|Nagasaki BF400": {
            name: "R.T.S. Card: Nagasaki BF400",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki BF400</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blazer|Nagasaki Blazer": {
            name: "R.T.S. Card: Nagasaki Blazer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Blazer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blazer5|Nagasaki Blazer": {
            name: "R.T.S. Card: Nagasaki Blazer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Blazer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blazer2|Nagasaki Blazer Lifeguard": {
            name: "R.T.S. Card: Nagasaki Blazer Lifeguard",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Blazer Lifeguard</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|carbonrs|Nagasaki Carbon RS": {
            name: "R.T.S. Card: Nagasaki Carbon RS",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Carbon RS</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|chimera|Nagasaki Chimera": {
            name: "R.T.S. Card: Nagasaki Chimera",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Chimera</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blazer3|Nagasaki Hot Rod Blazer": {
            name: "R.T.S. Card: Nagasaki Hot Rod Blazer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Hot Rod Blazer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|outlaw|Nagasaki Outlaw": {
            name: "R.T.S. Card: Nagasaki Outlaw",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Outlaw</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|shinobi|Nagasaki Shinobi": {
            name: "R.T.S. Card: Nagasaki Shinobi",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Shinobi</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|shotaro|Nagasaki Shotaro": {
            name: "R.T.S. Card: Nagasaki Shotaro",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Shotaro</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|snowmobile|Nagasaki Snowmobile": {
            name: "R.T.S. Card: Nagasaki Snowmobile",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Snowmobile</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blazer4|Nagasaki Street Blazer": {
            name: "R.T.S. Card: Nagasaki Street Blazer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nagasaki Street Blazer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gtr|Nissan GTR": {
            name: "R.T.S. Card: Nissan GTR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Nissan GTR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ninef|Obey 9F": {
            name: "R.T.S. Card: Obey 9F",
            vrpName: 'R.T.S. Card: <span style="color:orange">Obey 9F</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|draftgpr|Obey Draft GPR": {
            name: "R.T.S. Card: Obey Draft GPR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Obey Draft GPR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|iwagen|Obey I-Wagen": {
            name: "R.T.S. Card: Obey I-Wagen",
            vrpName: 'R.T.S. Card: <span style="color:orange">Obey I-Wagen</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|omnis|Obey Omnis": {
            name: "R.T.S. Card: Obey Omnis",
            vrpName: 'R.T.S. Card: <span style="color:orange">Obey Omnis</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tailgater|Obey Tailgater": {
            name: "R.T.S. Card: Obey Tailgater",
            vrpName: 'R.T.S. Card: <span style="color:orange">Obey Tailgater</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tailgater2|Obey Tailgater": {
            name: "R.T.S. Card: Obey Tailgater",
            vrpName: 'R.T.S. Card: <span style="color:orange">Obey Tailgater</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ardent|Ocelot Ardent": {
            name: "R.T.S. Card: Ocelot Ardent",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Ardent</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|f620|Ocelot F620": {
            name: "R.T.S. Card: Ocelot F620",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot F620</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jackal|Ocelot Jackal": {
            name: "R.T.S. Card: Ocelot Jackal",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Jackal</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|jugular|Ocelot Jugular": {
            name: "R.T.S. Card: Ocelot Jugular",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Jugular</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|locust|Ocelot Locust": {
            name: "R.T.S. Card: Ocelot Locust",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Locust</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|loretta|Ocelot Loretta": {
            name: "R.T.S. Card: Ocelot Loretta",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Loretta</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|lynx|Ocelot Lynx": {
            name: "R.T.S. Card: Ocelot Lynx",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Lynx</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|pariah|Ocelot Pariah": {
            name: "R.T.S. Card: Ocelot Pariah",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Pariah</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|penetrator|Ocelot Penetrator": {
            name: "R.T.S. Card: Ocelot Penetrator",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Penetrator</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|formula2|Ocelot R88": {
            name: "R.T.S. Card: Ocelot R88",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot R88</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|stromberg|Ocelot Stromberg": {
            name: "R.T.S. Card: Ocelot Stromberg",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Stromberg</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|strombergsu|Ocelot Stromberg Specials Unit": {
            name: "R.T.S. Card: Ocelot Stromberg Specials Unit",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Stromberg Specials Unit</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|swinger|Ocelot Swinger": {
            name: "R.T.S. Card: Ocelot Swinger",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot Swinger</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|xa21|Ocelot XA-21": {
            name: "R.T.S. Card: Ocelot XA-21",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ocelot XA-21</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|odessa|Odessa": {
            name: "R.T.S. Card: Odessa",
            vrpName: 'R.T.S. Card: <span style="color:orange">Odessa</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|autarch|Overflod Autarch": {
            name: "R.T.S. Card: Overflod Autarch",
            vrpName: 'R.T.S. Card: <span style="color:orange">Overflod Autarch</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|entityxf|Overflod Entity XF": {
            name: "R.T.S. Card: Overflod Entity XF",
            vrpName: 'R.T.S. Card: <span style="color:orange">Overflod Entity XF</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|entity2|Overflod Entity XXR": {
            name: "R.T.S. Card: Overflod Entity XXR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Overflod Entity XXR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|imorgon|Overflod Imorgon": {
            name: "R.T.S. Card: Overflod Imorgon",
            vrpName: 'R.T.S. Card: <span style="color:orange">Overflod Imorgon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tyrant|Overflod Tyrant": {
            name: "R.T.S. Card: Overflod Tyrant",
            vrpName: 'R.T.S. Card: <span style="color:orange">Overflod Tyrant</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zeno|Overflod Zeno": {
            name: "R.T.S. Card: Overflod Zeno",
            vrpName: 'R.T.S. Card: <span style="color:orange">Overflod Zeno</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|marauder|Paramount Marauder": {
            name: "R.T.S. Card: Paramount Marauder",
            vrpName: 'R.T.S. Card: <span style="color:orange">Paramount Marauder</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bati|Pegassi Bati 801": {
            name: "R.T.S. Card: Pegassi Bati 801",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Bati 801</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bati2|Pegassi Bati 801RR": {
            name: "R.T.S. Card: Pegassi Bati 801RR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Bati 801RR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|esskey|Pegassi Esskey": {
            name: "R.T.S. Card: Pegassi Esskey",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Esskey</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|exoskeleton|Pegassi Exoskeleton": {
            name: "R.T.S. Card: Pegassi Exoskeleton",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Exoskeleton</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|fcr|Pegassi FCR 1000": {
            name: "R.T.S. Card: Pegassi FCR 1000",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi FCR 1000</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|fcr2|Pegassi FCR 1000 Custom": {
            name: "R.T.S. Card: Pegassi FCR 1000 Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi FCR 1000 Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|faggio2|Pegassi Faggio": {
            name: "R.T.S. Card: Pegassi Faggio",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Faggio</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|faggio3|Pegassi Faggio Mod": {
            name: "R.T.S. Card: Pegassi Faggio Mod",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Faggio Mod</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ignus|Pegassi Ignus": {
            name: "R.T.S. Card: Pegassi Ignus",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Ignus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|infernus|Pegassi Infernus": {
            name: "R.T.S. Card: Pegassi Infernus",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Infernus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|infernus2|Pegassi Infernus Classic": {
            name: "R.T.S. Card: Pegassi Infernus Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Infernus Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|osiris|Pegassi Osiris": {
            name: "R.T.S. Card: Pegassi Osiris",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Osiris</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|reaper|Pegassi Reaper": {
            name: "R.T.S. Card: Pegassi Reaper",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Reaper</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ruffian|Pegassi Ruffian": {
            name: "R.T.S. Card: Pegassi Ruffian",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Ruffian</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tempesta|Pegassi Tempesta": {
            name: "R.T.S. Card: Pegassi Tempesta",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Tempesta</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tezeract|Pegassi Tezeract": {
            name: "R.T.S. Card: Pegassi Tezeract",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Tezeract</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|toreador|Pegassi Toreador": {
            name: "R.T.S. Card: Pegassi Toreador",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Toreador</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|torero|Pegassi Torero": {
            name: "R.T.S. Card: Pegassi Torero",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Torero</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|toros|Pegassi Toros": {
            name: "R.T.S. Card: Pegassi Toros",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Toros</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vacca|Pegassi Vacca": {
            name: "R.T.S. Card: Pegassi Vacca",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Vacca</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zentorno|Pegassi Zentorno": {
            name: "R.T.S. Card: Pegassi Zentorno",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Zentorno</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zorrusso|Pegassi Zorrusso": {
            name: "R.T.S. Card: Pegassi Zorrusso",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pegassi Zorrusso</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|pfister811|Pfister 811": {
            name: "R.T.S. Card: Pfister 811",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister 811</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|astron|Pfister Astron": {
            name: "R.T.S. Card: Pfister Astron",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Astron</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|comet2|Pfister Comet": {
            name: "R.T.S. Card: Pfister Comet",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Comet</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|comet3|Pfister Comet Retro Custom": {
            name: "R.T.S. Card: Pfister Comet Retro Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Comet Retro Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|comet6|Pfister Comet S2": {
            name: "R.T.S. Card: Pfister Comet S2",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Comet S2</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|comet7|Pfister Comet S2 Cabrio": {
            name: "R.T.S. Card: Pfister Comet S2 Cabrio",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Comet S2 Cabrio</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|comet5|Pfister Comet SR": {
            name: "R.T.S. Card: Pfister Comet SR",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Comet SR</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|comet4|Pfister Comet Safari": {
            name: "R.T.S. Card: Pfister Comet Safari",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Comet Safari</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|growler|Pfister Growler": {
            name: "R.T.S. Card: Pfister Growler",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Growler</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|neon|Pfister Neon": {
            name: "R.T.S. Card: Pfister Neon",
            vrpName: 'R.T.S. Card: <span style="color:orange">Pfister Neon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|deveste|Principe Deveste Eight": {
            name: "R.T.S. Card: Principe Deveste Eight",
            vrpName: 'R.T.S. Card: <span style="color:orange">Principe Deveste Eight</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|diablous|Principe Diabolus": {
            name: "R.T.S. Card: Principe Diabolus",
            vrpName: 'R.T.S. Card: <span style="color:orange">Principe Diabolus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|diablous2|Principe Diabolus Custom": {
            name: "R.T.S. Card: Principe Diabolus Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Principe Diabolus Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|lectro|Principe Lectro": {
            name: "R.T.S. Card: Principe Lectro",
            vrpName: 'R.T.S. Card: <span style="color:orange">Principe Lectro</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|emerus|Progen Emerus": {
            name: "R.T.S. Card: Progen Emerus",
            vrpName: 'R.T.S. Card: <span style="color:orange">Progen Emerus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gp1|Progen GP1": {
            name: "R.T.S. Card: Progen GP1",
            vrpName: 'R.T.S. Card: <span style="color:orange">Progen GP1</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|italigtb|Progen Itali GTB": {
            name: "R.T.S. Card: Progen Itali GTB",
            vrpName: 'R.T.S. Card: <span style="color:orange">Progen Itali GTB</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|italigtb2|Progen Itali GTB Custom": {
            name: "R.T.S. Card: Progen Itali GTB Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Progen Itali GTB Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|formula|Progen PR4": {
            name: "R.T.S. Card: Progen PR4",
            vrpName: 'R.T.S. Card: <span style="color:orange">Progen PR4</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|t20|Progen T20": {
            name: "R.T.S. Card: Progen T20",
            vrpName: 'R.T.S. Card: <span style="color:orange">Progen T20</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tyrus|Progen Tyrus": {
            name: "R.T.S. Card: Progen Tyrus",
            vrpName: 'R.T.S. Card: <span style="color:orange">Progen Tyrus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rcbandito|RC Bandito": {
            name: "R.T.S. Card: RC Bandito",
            vrpName: 'R.T.S. Card: <span style="color:orange">RC Bandito</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cheburek|RUNE Cheburek": {
            name: "R.T.S. Card: RUNE Cheburek",
            vrpName: 'R.T.S. Card: <span style="color:orange">RUNE Cheburek</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zhaba|RUNE Zhaba": {
            name: "R.T.S. Card: RUNE Zhaba",
            vrpName: 'R.T.S. Card: <span style="color:orange">RUNE Zhaba</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dune4|Ramp Buggy": {
            name: "R.T.S. Card: Ramp Buggy",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ramp Buggy</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dan3|Red Bull Racing RB13 (No. 3)": {
            name: "R.T.S. Card: Red Bull Racing RB13 (No. 3)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Red Bull Racing RB13 (No. 3)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|max33|Red Bull Racing RB13 (No. 33)": {
            name: "R.T.S. Card: Red Bull Racing RB13 (No. 33)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Red Bull Racing RB13 (No. 33)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|f1|Red Bull Racing RB14": {
            name: "R.T.S. Card: Red Bull Racing RB14",
            vrpName: 'R.T.S. Card: <span style="color:orange">Red Bull Racing RB14</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rrphantom|Rolls-Royce Phantom": {
            name: "R.T.S. Card: Rolls-Royce Phantom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Rolls-Royce Phantom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|deviant|Schyster Deviant": {
            name: "R.T.S. Card: Schyster Deviant",
            vrpName: 'R.T.S. Card: <span style="color:orange">Schyster Deviant</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|fusilade|Schyster Fusilade": {
            name: "R.T.S. Card: Schyster Fusilade",
            vrpName: 'R.T.S. Card: <span style="color:orange">Schyster Fusilade</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|pmp600|Schyster PMP 600": {
            name: "R.T.S. Card: Schyster PMP 600",
            vrpName: 'R.T.S. Card: <span style="color:orange">Schyster PMP 600</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|defiler|Shitzu Defiler": {
            name: "R.T.S. Card: Shitzu Defiler",
            vrpName: 'R.T.S. Card: <span style="color:orange">Shitzu Defiler</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hakuchou|Shitzu Hakuchou": {
            name: "R.T.S. Card: Shitzu Hakuchou",
            vrpName: 'R.T.S. Card: <span style="color:orange">Shitzu Hakuchou</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hakuchou3|Shitzu Hakuchou Custom": {
            name: "R.T.S. Card: Shitzu Hakuchou Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Shitzu Hakuchou Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hakuchou2|Shitzu Hakuchou Drag": {
            name: "R.T.S. Card: Shitzu Hakuchou Drag",
            vrpName: 'R.T.S. Card: <span style="color:orange">Shitzu Hakuchou Drag</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|nrg900|Shitzu NRG900": {
            name: "R.T.S. Card: Shitzu NRG900",
            vrpName: 'R.T.S. Card: <span style="color:orange">Shitzu NRG900</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|pcj|Shitzu PCJ 600": {
            name: "R.T.S. Card: Shitzu PCJ 600",
            vrpName: 'R.T.S. Card: <span style="color:orange">Shitzu PCJ 600</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|vader|Shitzu Vader": {
            name: "R.T.S. Card: Shitzu Vader",
            vrpName: 'R.T.S. Card: <span style="color:orange">Shitzu Vader</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|stiwrc|Subaru Impreza Rally": {
            name: "R.T.S. Card: Subaru Impreza Rally",
            vrpName: 'R.T.S. Card: <span style="color:orange">Subaru Impreza Rally</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|superkart|Superkart": {
            name: "R.T.S. Card: Superkart",
            vrpName: 'R.T.S. Card: <span style="color:orange">Superkart</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|tmodel|Tesla Model 3": {
            name: "R.T.S. Card: Tesla Model 3",
            vrpName: 'R.T.S. Card: <span style="color:orange">Tesla Model 3</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|models|Tesla Model S": {
            name: "R.T.S. Card: Tesla Model S",
            vrpName: 'R.T.S. Card: <span style="color:orange">Tesla Model S</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ae86|Toyota Sprinter Trueno AE86": {
            name: "R.T.S. Card: Toyota Sprinter Trueno AE86",
            vrpName: 'R.T.S. Card: <span style="color:orange">Toyota Sprinter Trueno AE86</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|adder|Truffade Adder": {
            name: "R.T.S. Card: Truffade Adder",
            vrpName: 'R.T.S. Card: <span style="color:orange">Truffade Adder</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|nero|Truffade Nero": {
            name: "R.T.S. Card: Truffade Nero",
            vrpName: 'R.T.S. Card: <span style="color:orange">Truffade Nero</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|nero2|Truffade Nero Custom": {
            name: "R.T.S. Card: Truffade Nero Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Truffade Nero Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|thrax|Truffade Thrax": {
            name: "R.T.S. Card: Truffade Thrax",
            vrpName: 'R.T.S. Card: <span style="color:orange">Truffade Thrax</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ztype|Truffade Z-Type": {
            name: "R.T.S. Card: Truffade Z-Type",
            vrpName: 'R.T.S. Card: <span style="color:orange">Truffade Z-Type</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|oracle2|Ubermacht Oracle": {
            name: "R.T.S. Card: Ubermacht Oracle",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht Oracle</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|revolter|Ubermacht Revolter": {
            name: "R.T.S. Card: Ubermacht Revolter",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht Revolter</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sc1|Ubermacht SC1": {
            name: "R.T.S. Card: Ubermacht SC1",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht SC1</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sentinel2|Ubermacht Sentinel": {
            name: "R.T.S. Card: Ubermacht Sentinel",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht Sentinel</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sentinel3|Ubermacht Sentinel Classic": {
            name: "R.T.S. Card: Ubermacht Sentinel Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht Sentinel Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sentinelr|Ubermacht Sentinel Race": {
            name: "R.T.S. Card: Ubermacht Sentinel Race",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht Sentinel Race</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sentinel|Ubermacht Sentinel XS": {
            name: "R.T.S. Card: Ubermacht Sentinel XS",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht Sentinel XS</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zion2|Ubermacht Zion Cabrio": {
            name: "R.T.S. Card: Ubermacht Zion Cabrio",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht Zion Cabrio</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|zion3|Ubermacht Zion Classic": {
            name: "R.T.S. Card: Ubermacht Zion Classic",
            vrpName: 'R.T.S. Card: <span style="color:orange">Ubermacht Zion Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|caracara|Vapid  Caracara": {
            name: "R.T.S. Card: Vapid  Caracara",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid  Caracara</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|blade|Vapid Blade": {
            name: "R.T.S. Card: Vapid Blade",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Blade</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bobcat|Vapid Bobcat": {
            name: "R.T.S. Card: Vapid Bobcat",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Bobcat</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bobcatxl|Vapid Bobcat XL": {
            name: "R.T.S. Card: Vapid Bobcat XL",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Bobcat XL</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bullet|Vapid Bullet": {
            name: "R.T.S. Card: Vapid Bullet",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Bullet</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|caracara2|Vapid Caracara 4x4": {
            name: "R.T.S. Card: Vapid Caracara 4x4",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Caracara 4x4</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|chino|Vapid Chino": {
            name: "R.T.S. Card: Vapid Chino",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Chino</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|chino2|Vapid Chino Custom": {
            name: "R.T.S. Card: Vapid Chino Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Chino Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|clique|Vapid Clique": {
            name: "R.T.S. Card: Vapid Clique",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Clique</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|contender|Vapid Contender": {
            name: "R.T.S. Card: Vapid Contender",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Contender</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|contender2|Vapid Contender E109": {
            name: "R.T.S. Card: Vapid Contender E109",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Contender E109</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|trophytruck2|Vapid Desert Raid": {
            name: "R.T.S. Card: Vapid Desert Raid",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Desert Raid</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dominator|Vapid Dominator": {
            name: "R.T.S. Card: Vapid Dominator",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Dominator</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dominator7|Vapid Dominator ASP": {
            name: "R.T.S. Card: Vapid Dominator ASP",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Dominator ASP</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dominator4|Vapid Dominator Apocalypse": {
            name: "R.T.S. Card: Vapid Dominator Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Dominator Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dominator5|Vapid Dominator Future Shock": {
            name: "R.T.S. Card: Vapid Dominator Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Dominator Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dominator8|Vapid Dominator GTT": {
            name: "R.T.S. Card: Vapid Dominator GTT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Dominator GTT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dominator3|Vapid Dominator GTX": {
            name: "R.T.S. Card: Vapid Dominator GTX",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Dominator GTX</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dominator6|Vapid Dominator Nightmare": {
            name: "R.T.S. Card: Vapid Dominator Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Dominator Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dragking|Vapid Dragking": {
            name: "R.T.S. Card: Vapid Dragking",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Dragking</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ellie|Vapid Ellie": {
            name: "R.T.S. Card: Vapid Ellie",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Ellie</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|fmj|Vapid FMJ": {
            name: "R.T.S. Card: Vapid FMJ",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid FMJ</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|flashgt|Vapid Flash GT": {
            name: "R.T.S. Card: Vapid Flash GT",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Flash GT</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|18f350plow|Vapid Ford F350": {
            name: "R.T.S. Card: Vapid Ford F350",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Ford F350</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|fortune|Vapid Fortune": {
            name: "R.T.S. Card: Vapid Fortune",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Fortune</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gb200|Vapid GB200": {
            name: "R.T.S. Card: Vapid GB200",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid GB200</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|guardian|Vapid Guardian": {
            name: "R.T.S. Card: Vapid Guardian",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Guardian</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|imperator|Vapid Imperator Apocalypse": {
            name: "R.T.S. Card: Vapid Imperator Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Imperator Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|imperator2|Vapid Imperator Future Shock": {
            name: "R.T.S. Card: Vapid Imperator Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Imperator Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|imperator3|Vapid Imperator Nightmare": {
            name: "R.T.S. Card: Vapid Imperator Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Imperator Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|interceptor|Vapid Interceptor": {
            name: "R.T.S. Card: Vapid Interceptor",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Interceptor</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|kentish|Vapid Kentish": {
            name: "R.T.S. Card: Vapid Kentish",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Kentish</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|monster|Vapid Liberator": {
            name: "R.T.S. Card: Vapid Liberator",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Liberator</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|slamvan2|Vapid Lost Slamvan": {
            name: "R.T.S. Card: Vapid Lost Slamvan",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Lost Slamvan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|minivan|Vapid Minivan": {
            name: "R.T.S. Card: Vapid Minivan",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Minivan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|minivan2|Vapid Minivan Custom": {
            name: "R.T.S. Card: Vapid Minivan Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Minivan Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dominator2|Vapid Pisswasser Dominator": {
            name: "R.T.S. Card: Vapid Pisswasser Dominator",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Pisswasser Dominator</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|retinue|Vapid Retinue": {
            name: "R.T.S. Card: Vapid Retinue",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Retinue</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|retinue2|Vapid Retinue Mk II": {
            name: "R.T.S. Card: Vapid Retinue Mk II",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Retinue Mk II</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|riata|Vapid Riata": {
            name: "R.T.S. Card: Vapid Riata",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Riata</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sandking|Vapid Sandking XL": {
            name: "R.T.S. Card: Vapid Sandking XL",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Sandking XL</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|slamvan|Vapid Slamvan": {
            name: "R.T.S. Card: Vapid Slamvan",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Slamvan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|slamvan3|Vapid Slamvan Custom": {
            name: "R.T.S. Card: Vapid Slamvan Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Slamvan Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|slamvan5|Vapid Slamvan Future Shock": {
            name: "R.T.S. Card: Vapid Slamvan Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Slamvan Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|speedo|Vapid Speedo": {
            name: "R.T.S. Card: Vapid Speedo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Speedo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|taxi|Vapid Taxi (Stanier)": {
            name: "R.T.S. Card: Vapid Taxi (Stanier)",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Taxi (Stanier)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|trophytruck|Vapid Trophy Truck": {
            name: "R.T.S. Card: Vapid Trophy Truck",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Trophy Truck</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|uranus|Vapid Uranus": {
            name: "R.T.S. Card: Vapid Uranus",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Uranus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|winky|Vapid Winky": {
            name: "R.T.S. Card: Vapid Winky",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vapid Winky</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|fagaloa|Vulcar Fagaloa": {
            name: "R.T.S. Card: Vulcar Fagaloa",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vulcar Fagaloa</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ingot|Vulcar Ingot": {
            name: "R.T.S. Card: Vulcar Ingot",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vulcar Ingot</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|warrener2|Vulcar Warrener Pickup": {
            name: "R.T.S. Card: Vulcar Warrener Pickup",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vulcar Warrener Pickup</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|neo|Vysser Neo": {
            name: "R.T.S. Card: Vysser Neo",
            vrpName: 'R.T.S. Card: <span style="color:orange">Vysser Neo</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|dynasty|Weeny Dynasty": {
            name: "R.T.S. Card: Weeny Dynasty",
            vrpName: 'R.T.S. Card: <span style="color:orange">Weeny Dynasty</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|issi2|Weeny Issi": {
            name: "R.T.S. Card: Weeny Issi",
            vrpName: 'R.T.S. Card: <span style="color:orange">Weeny Issi</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|issi4|Weeny Issi Apocalypse": {
            name: "R.T.S. Card: Weeny Issi Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Weeny Issi Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|issi5|Weeny Issi Future Shock": {
            name: "R.T.S. Card: Weeny Issi Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Weeny Issi Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|issi6|Weeny Issi Nightmare": {
            name: "R.T.S. Card: Weeny Issi Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Weeny Issi Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|issi7|Weeny Issi Sport": {
            name: "R.T.S. Card: Weeny Issi Sport",
            vrpName: 'R.T.S. Card: <span style="color:orange">Weeny Issi Sport</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|angel|Western Angel": {
            name: "R.T.S. Card: Western Angel",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Angel</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|bagger|Western Bagger": {
            name: "R.T.S. Card: Western Bagger",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Bagger</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|daemon|Western Daemon": {
            name: "R.T.S. Card: Western Daemon",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Daemon</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|deathbike|Western Deathbike Apocalypse": {
            name: "R.T.S. Card: Western Deathbike Apocalypse",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Deathbike Apocalypse</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|deathbike2|Western Deathbike Future Shock": {
            name: "R.T.S. Card: Western Deathbike Future Shock",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Deathbike Future Shock</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|deathbike3|Western Deathbike Nightmare": {
            name: "R.T.S. Card: Western Deathbike Nightmare",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Deathbike Nightmare</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|freeway|Western Freeway": {
            name: "R.T.S. Card: Western Freeway",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Freeway</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|gargoyle|Western Gargoyle": {
            name: "R.T.S. Card: Western Gargoyle",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Gargoyle</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|hellfury|Western Hellfury": {
            name: "R.T.S. Card: Western Hellfury",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Hellfury</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sovereign2|Western Motorcycle Company Sovereign": {
            name: "R.T.S. Card: Western Motorcycle Company Sovereign",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Motorcycle Company Sovereign</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|nightblade|Western Nightblade": {
            name: "R.T.S. Card: Western Nightblade",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Nightblade</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|rrocket|Western Rampant Rocket": {
            name: "R.T.S. Card: Western Rampant Rocket",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Rampant Rocket</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|ratbike|Western Rat Bike": {
            name: "R.T.S. Card: Western Rat Bike",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Rat Bike</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|reever|Western Reever": {
            name: "R.T.S. Card: Western Reever",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Reever</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|sovereign|Western Sovereign": {
            name: "R.T.S. Card: Western Sovereign",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Sovereign</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|wolfsbane|Western Wolfsbane": {
            name: "R.T.S. Card: Western Wolfsbane",
            vrpName: 'R.T.S. Card: <span style="color:orange">Western Wolfsbane</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|faction2|Willard Faction Custom": {
            name: "R.T.S. Card: Willard Faction Custom",
            vrpName: 'R.T.S. Card: <span style="color:orange">Willard Faction Custom</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|faction3|Willard Faction Custom Donk": {
            name: "R.T.S. Card: Willard Faction Custom Donk",
            vrpName: 'R.T.S. Card: <span style="color:orange">Willard Faction Custom Donk</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|marbelle|Willard Marbelle": {
            name: "R.T.S. Card: Willard Marbelle",
            vrpName: 'R.T.S. Card: <span style="color:orange">Willard Marbelle</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|willard|Willard Willard": {
            name: "R.T.S. Card: Willard Willard",
            vrpName: 'R.T.S. Card: <span style="color:orange">Willard Willard</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|journeys|Zirconium Journey Tourer": {
            name: "R.T.S. Card: Zirconium Journey Tourer",
            vrpName: 'R.T.S. Card: <span style="color:orange">Zirconium Journey Tourer</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|stratum|Zirconium Stratum": {
            name: "R.T.S. Card: Zirconium Stratum",
            vrpName: 'R.T.S. Card: <span style="color:orange">Zirconium Stratum</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|stratum2|Zirconium Stratum Sedan": {
            name: "R.T.S. Card: Zirconium Stratum Sedan",
            vrpName: 'R.T.S. Card: <span style="color:orange">Zirconium Stratum Sedan</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "rts_card|cypher|\xDCbermacht Cypher": {
            name: "R.T.S. Card: \xDCbermacht Cypher",
            vrpName: 'R.T.S. Card: <span style="color:orange">\xDCbermacht Cypher</span>',
            weight: 0,
            isTruckingItem: !1
        },
        rebreather: {
            name: "Rebreather ",
            vrpName: "Rebreather ",
            weight: 0,
            isTruckingItem: !1
        },
        repairkit: {
            name: "Repair Kit",
            vrpName: "Repair Kit",
            weight: 0,
            isTruckingItem: !1
        },
        rotten_potato: {
            name: "Rotten Potato",
            vrpName: "<span></span>Rotten Potato",
            weight: 0,
            isTruckingItem: !1
        },
        tackle_box_rusty: {
            name: "Rusty Tackle Box",
            vrpName: "Rusty Tackle Box",
            weight: 2,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.shipment.tenf": {
            name: "SD Card: 10F Blueprints",
            vrpName: 'SD Card: <span style="color:tomato">10F Blueprints</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.asphalt": {
            name: "SD Card: Asphalt Concrete Refining",
            vrpName: 'SD Card: <span style="color:tomato">Asphalt Concrete Refining</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.cardboard": {
            name: "SD Card: Cardboard Manufacturing",
            vrpName: 'SD Card: <span style="color:tomato">Cardboard Manufacturing</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.sawmill.plank": {
            name: "SD Card: Chipboard Planks",
            vrpName: 'SD Card: <span style="color:tomato">Chipboard Planks</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.conveyor": {
            name: "SD Card: Conveyor Rental",
            vrpName: 'SD Card: <span style="color:tomato">Conveyor Rental</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.foundry.copper": {
            name: "SD Card: Copper Alloy",
            vrpName: 'SD Card: <span style="color:tomato">Copper Alloy</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.clucking.fish": {
            name: "SD Card: Crispy Fish",
            vrpName: 'SD Card: <span style="color:tomato">Crispy Fish</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.clucking.meat": {
            name: "SD Card: Crispy Meat",
            vrpName: 'SD Card: <span style="color:tomato">Crispy Meat</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.dilutedfuel": {
            name: "SD Card: Diluted Fuel Refining",
            vrpName: 'SD Card: <span style="color:tomato">Diluted Fuel Refining</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.quarry.gravel": {
            name: "SD Card: Gravel Pulverizing",
            vrpName: 'SD Card: <span style="color:tomato">Gravel Pulverizing</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.shipment.landstalker2": {
            name: "SD Card: Landstalker XL Blueprints",
            vrpName: 'SD Card: <span style="color:tomato">Landstalker XL Blueprints</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.quarry.ore": {
            name: "SD Card: Ore Mix Recycling",
            vrpName: 'SD Card: <span style="color:tomato">Ore Mix Recycling</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.mckenzie.plastic": {
            name: "SD Card: Plastic Export Contact",
            vrpName: 'SD Card: <span style="color:tomato">Plastic Export Contact</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.sawmill.sawdust": {
            name: "SD Card: Sawdust Filler Exploit",
            vrpName: 'SD Card: <span style="color:tomato">Sawdust Filler Exploit</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.foundry.gold": {
            name: "SD Card: Substitute Gold",
            vrpName: 'SD Card: <span style="color:tomato">Substitute Gold</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.factory.jewelry": {
            name: "SD Card: Titanium Jewelry",
            vrpName: 'SD Card: <span style="color:tomato">Titanium Jewelry</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.factory.titanium": {
            name: "SD Card: Titanium Reinforcement",
            vrpName: 'SD Card: <span style="color:tomato">Titanium Reinforcement</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.treatment.waste": {
            name: "SD Card: Waste Water Cleaning",
            vrpName: 'SD Card: <span style="color:tomato">Waste Water Cleaning</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "sd_decrypted|trucking.foundry.zinc": {
            name: "SD Card: Zinc Alloy",
            vrpName: 'SD Card: <span style="color:tomato">Zinc Alloy</span>',
            weight: 0,
            isTruckingItem: !1
        },
        mining_credit: {
            name: "Sandstone",
            vrpName: "Sandstone",
            weight: 5,
            isTruckingItem: !1
        },
        sandwich: {
            name: "Sandwich",
            vrpName: "Sandwich",
            weight: 0,
            isTruckingItem: !1
        },
        sponge: {
            name: "Scrubbing Kit",
            vrpName: "Scrubbing Kit",
            weight: 0,
            isTruckingItem: !1
        },
        "shipping_crate|mk15|Chernobog Toter": {
            name: "Shipping Container: Chernobog Toter",
            vrpName: 'Shipping Container: <span style="color:orange">Chernobog Toter</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|savanna|Coil Savanna": {
            name: "Shipping Container: Coil Savanna",
            vrpName: 'Shipping Container: <span style="color:orange">Coil Savanna</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|exoskeleton|Exoskeleton": {
            name: "Shipping Container: Exoskeleton",
            vrpName: 'Shipping Container: <span style="color:orange">Exoskeleton</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|hotknife|Hotknife": {
            name: "Shipping Container: Hotknife",
            vrpName: 'Shipping Container: <span style="color:orange">Hotknife</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|kuruma|Kuruma": {
            name: "Shipping Container: Kuruma",
            vrpName: 'Shipping Container: <span style="color:orange">Kuruma</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|trailerswb2|MK10 (Refridgerated Trailer)": {
            name: "Shipping Container: MK10 (Refridgerated Trailer)",
            vrpName: 'Shipping Container: <span style="color:orange">MK10 (Refridgerated Trailer)</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|supervolito2|Passenger SuperVolito Carbon": {
            name: "Shipping Container: Passenger SuperVolito Carbon",
            vrpName: 'Shipping Container: <span style="color:orange">Passenger SuperVolito Carbon</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|postopp3|PostOP P3": {
            name: "Shipping Container: PostOP P3",
            vrpName: 'Shipping Container: <span style="color:orange">PostOP P3</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|ruffian|Ruffian": {
            name: "Shipping Container: Ruffian",
            vrpName: 'Shipping Container: <span style="color:orange">Ruffian</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|dune2|Space Docker": {
            name: "Shipping Container: Space Docker",
            vrpName: 'Shipping Container: <span style="color:orange">Space Docker</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "shipping_crate|wastelander|Wastelander": {
            name: "Shipping Container: Wastelander",
            vrpName: 'Shipping Container: <span style="color:orange">Wastelander</span>',
            weight: 100,
            isTruckingItem: !1
        },
        level_token: {
            name: "Skill Level Token",
            vrpName: "Skill Level Token",
            weight: 0,
            isTruckingItem: !1
        },
        xmplow_token24: {
            name: "Snowplowing Token",
            vrpName: '<span style="color:aquamarine">Snowplowing Token</span>',
            weight: 0,
            isTruckingItem: !1
        },
        spaceship_part: {
            name: "Spaceship Part",
            vrpName: "Spaceship Part",
            weight: 1,
            isTruckingItem: !1
        },
        trap_card: {
            name: "Speed Trap Card",
            vrpName: "Speed Trap Card",
            weight: 0,
            isTruckingItem: !1
        },
        speed_trap_radar: {
            name: "Speed Trap Radar",
            vrpName: '<span style="color:gold">Speed Trap Radar</span>',
            weight: 5,
            isTruckingItem: !1
        },
        spook_stick: {
            name: "Spook Stick",
            vrpName: "Spook Stick",
            weight: 0,
            isTruckingItem: !1
        },
        sprunk: {
            name: "Sprunk",
            vrpName: "Sprunk",
            weight: 0,
            isTruckingItem: !1
        },
        spyglass: {
            name: "Spyglass",
            vrpName: "Spyglass",
            weight: 1,
            isTruckingItem: !1
        },
        staff_voucher: {
            name: "Stink Voucher",
            vrpName: "Stink Voucher",
            weight: 0,
            isTruckingItem: !1
        },
        storage_card: {
            name: "Storage Card",
            vrpName: "Storage Card",
            weight: 0,
            isTruckingItem: !1
        },
        tackle_box: {
            name: "Tackle Box",
            vrpName: "Tackle Box",
            weight: 2,
            isTruckingItem: !1
        },
        tacos: {
            name: "Tacos",
            vrpName: "Tacos",
            weight: 0,
            isTruckingItem: !1
        },
        tea: {
            name: "Tea",
            vrpName: "Tea",
            weight: 0,
            isTruckingItem: !1
        },
        toll_card: {
            name: "Toll Card",
            vrpName: "Toll Card",
            weight: 0,
            isTruckingItem: !1
        },
        trash: {
            name: "Trash",
            vrpName: "Trash",
            weight: .1,
            isTruckingItem: !1
        },
        chest_daily: {
            name: "Treasure Chest [Daily]",
            vrpName: "Treasure Chest [Daily]",
            weight: 0,
            isTruckingItem: !1
        },
        chest_none: {
            name: "Treasure Chest [Empty]",
            vrpName: "Treasure Chest [Empty]",
            weight: 0,
            isTruckingItem: !1
        },
        chest_tier3: {
            name: "Treasure Chest [High-grade]",
            vrpName: "Treasure Chest [High-grade]",
            weight: 0,
            isTruckingItem: !1
        },
        chest_tier1: {
            name: "Treasure Chest [Low-grade]",
            vrpName: "Treasure Chest [Low-grade]",
            weight: 0,
            isTruckingItem: !1
        },
        chest_tier2: {
            name: "Treasure Chest [Medium-grade]",
            vrpName: "Treasure Chest [Medium-grade]",
            weight: 0,
            isTruckingItem: !1
        },
        chest_tier4: {
            name: "Treasure Chest [Ultra-grade]",
            vrpName: "Treasure Chest [Ultra-grade]",
            weight: 0,
            isTruckingItem: !1
        },
        chest_upgradekit: {
            name: "Treasure Chest [Upgrade Kit]",
            vrpName: "Treasure Chest [Upgrade Kit]",
            weight: 0,
            isTruckingItem: !1
        },
        chest_key: {
            name: "Treasure Key",
            vrpName: "Treasure Key",
            weight: 0,
            isTruckingItem: !1
        },
        chest_key_master: {
            name: "Treasure Master Key",
            vrpName: "<span class='rainbow'>Treasure Master Key</span>",
            weight: 0,
            isTruckingItem: !1
        },
        trucker_pda: {
            name: "Truckers PDA",
            vrpName: "<span></span>Trucker&#39;s PDA",
            weight: 0,
            isTruckingItem: !1
        },
        upgrade_kit_tenf2: {
            name: "Upgrade Kit (10F)",
            vrpName: "Upgrade Kit (10F)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_deluxo: {
            name: "Upgrade Kit (Deluxo GT)",
            vrpName: "Upgrade Kit (Deluxo GT)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_futota: {
            name: "Upgrade Kit (Futo GT Hatch)",
            vrpName: "Upgrade Kit (Futo GT Hatch)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_futo2: {
            name: "Upgrade Kit (Futo)",
            vrpName: "Upgrade Kit (Futo)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_blistata: {
            name: "Upgrade Kit (Go Go Monkey Blista)",
            vrpName: "Upgrade Kit (Go Go Monkey Blista)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_rrocket: {
            name: "Upgrade Kit (Hotknife)",
            vrpName: "Upgrade Kit (Hotknife)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_jesterv12: {
            name: "Upgrade Kit (Jester Classic)",
            vrpName: "Upgrade Kit (Jester Classic)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_jester2: {
            name: "Upgrade Kit (Jester)",
            vrpName: "Upgrade Kit (Jester)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_kurumata2: {
            name: "Upgrade Kit (Kuruma T/A)",
            vrpName: "Upgrade Kit (Kuruma T/A)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_kurumata: {
            name: "Upgrade Kit (Kuruma)",
            vrpName: "Upgrade Kit (Kuruma)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_primov12: {
            name: "Upgrade Kit (Primo Custom)",
            vrpName: "Upgrade Kit (Primo Custom)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_primo2: {
            name: "Upgrade Kit (Primo)",
            vrpName: "Upgrade Kit (Primo)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_hpr1: {
            name: "Upgrade Kit (RE-7B)",
            vrpName: "Upgrade Kit (RE-7B)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_dragking: {
            name: "Upgrade Kit (Rampant Rocket)",
            vrpName: "Upgrade Kit (Rampant Rocket)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_oppressor: {
            name: "Upgrade Kit (Ruffian)",
            vrpName: "Upgrade Kit (Ruffian)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_spritzer: {
            name: "Upgrade Kit (Schafter V12)",
            vrpName: "Upgrade Kit (Schafter V12)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_spritzerdtm: {
            name: "Upgrade Kit (Spritzer STR)",
            vrpName: "Upgrade Kit (Spritzer STR)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_strombergsu: {
            name: "Upgrade Kit (Stromberg)",
            vrpName: "Upgrade Kit (Stromberg)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_sultanrs: {
            name: "Upgrade Kit (Sultan R)",
            vrpName: "Upgrade Kit (Sultan R)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_sultanr: {
            name: "Upgrade Kit (Sultan)",
            vrpName: "Upgrade Kit (Sultan)",
            weight: 20,
            isTruckingItem: !1
        },
        upgrade_kit_voltic2: {
            name: "Upgrade Kit (Voltic)",
            vrpName: "Upgrade Kit (Voltic)",
            weight: 20,
            isTruckingItem: !1
        },
        "vehicle_card|mk15|Chernobog Toter (MK15)": {
            name: "Vehicle Card: Chernobog Toter (MK15)",
            vrpName: 'Vehicle Card: <span style="color:orange">Chernobog Toter (MK15)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|verus|Dinka Verus": {
            name: "Vehicle Card: Dinka Verus",
            vrpName: 'Vehicle Card: <span style="color:orange">Dinka Verus</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|veto|Dinka Veto Classic": {
            name: "Vehicle Card: Dinka Veto Classic",
            vrpName: 'Vehicle Card: <span style="color:orange">Dinka Veto Classic</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|veto2|Dinka Veto Modern": {
            name: "Vehicle Card: Dinka Veto Modern",
            vrpName: 'Vehicle Card: <span style="color:orange">Dinka Veto Modern</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|brioso2|Grotti Brioso 300": {
            name: "Vehicle Card: Grotti Brioso 300",
            vrpName: 'Vehicle Card: <span style="color:orange">Grotti Brioso 300</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|avisa|Kraken Avisa (Submersible)": {
            name: "Vehicle Card: Kraken Avisa (Submersible)",
            vrpName: 'Vehicle Card: <span style="color:orange">Kraken Avisa (Submersible)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|squaddie|Mammoth Squaddie": {
            name: "Vehicle Card: Mammoth Squaddie",
            vrpName: 'Vehicle Card: <span style="color:orange">Mammoth Squaddie</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|manchez2|Manchez Scout": {
            name: "Vehicle Card: Manchez Scout",
            vrpName: 'Vehicle Card: <span style="color:orange">Manchez Scout</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|toreador|Pegassi Toreador": {
            name: "Vehicle Card: Pegassi Toreador",
            vrpName: 'Vehicle Card: <span style="color:orange">Pegassi Toreador</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|kosatka|RUNE Kosatka (Submarine)": {
            name: "Vehicle Card: RUNE Kosatka (Submarine)",
            vrpName: 'Vehicle Card: <span style="color:orange">RUNE Kosatka (Submarine)</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|polaleutian|Toms Aleutian": {
            name: "Vehicle Card: Toms Aleutian",
            vrpName: 'Vehicle Card: <span style="color:orange">Toms Aleutian</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|winky|Vapid Winky": {
            name: "Vehicle Card: Vapid Winky",
            vrpName: 'Vehicle Card: <span style="color:orange">Vapid Winky</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_card|vetir|Vetir": {
            name: "Vehicle Card: Vetir",
            vrpName: 'Vehicle Card: <span style="color:orange">Vetir</span>',
            weight: 0,
            isTruckingItem: !1
        },
        "vehicle_shipment|tenf|10F|car": {
            name: "Vehicle Shipment: 10F",
            vrpName: 'Vehicle Shipment: <span style="color:orange">10F</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|savanna|Coil Savanna|car": {
            name: "Vehicle Shipment: Coil Savanna",
            vrpName: 'Vehicle Shipment: <span style="color:orange">Coil Savanna</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|btype2|Franken Stange": {
            name: "Vehicle Shipment: Franken Stange",
            vrpName: 'Vehicle Shipment: <span style="color:orange">Franken Stange</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|dilettantedx|Karin Dilettante DX|car": {
            name: "Vehicle Shipment: Karin Dilettante DX",
            vrpName: 'Vehicle Shipment: <span style="color:orange">Karin Dilettante DX</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|futo|Karin Futo|car": {
            name: "Vehicle Shipment: Karin Futo",
            vrpName: 'Vehicle Shipment: <span style="color:orange">Karin Futo</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|nightshark|HVY Nightshark|car": {
            name: "Vehicle Shipment: HVY Nightshark",
            vrpName: 'Vehicle Shipment: <span style="color:orange">HVY Nightshark</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|snowplow|Snow Plow": {
            name: "Vehicle Shipment: Snow Plow",
            vrpName: 'Vehicle Shipment: <span style="color:orange">Snow Plow</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|zr350|ZR-350|car": {
            name: "Vehicle Shipment: ZR-350",
            vrpName: 'Vehicle Shipment: <span style="color:orange">ZR-350</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|vertice|Hijak Vertice|car": {
            name: "Vehicle Shipment: Hijak Vertice",
            vrpName: 'Vehicle Shipment: <span style="color:orange">Hijak Vertice</span>',
            weight: 100,
            isTruckingItem: !1
        },
        "vehicle_shipment|landstalker2|Landstalker XL|car": {
            name: "Vehicle Shipment: Landstalker XL",
            vrpName: 'Vehicle Shipment: <span style="color:orange">Landstalker XL</span>',
            weight: 100,
            isTruckingItem: !1
        },
        vodka: {
            name: "Vodka",
            vrpName: "Vodka",
            weight: 0,
            isTruckingItem: !1
        },
        water: {
            name: "Water Bottle",
            vrpName: "Water Bottle",
            weight: 0,
            isTruckingItem: !1
        },
        weather_stick: {
            name: "Weather Stick",
            vrpName: "Weather Stick",
            weight: 0,
            isTruckingItem: !1
        },
        zombie_meat: {
            name: "Zombie Meat",
            vrpName: "Zombie Meat",
            weight: 0,
            isTruckingItem: !1
        },
        gut_knife_st: {
            name: "\u2606 StatTrak\u2122 Gut Knife",
            vrpName: "<span n='0'/>\u2606 StatTrak\u2122 Gut Knife",
            weight: 15,
            isTruckingItem: !1
        },
        gut_knife_fade: {
            name: "\u2606 StatTrak\u2122 Gut Knife | Autotronic",
            vrpName: "<span style='color:darkOrange' n='189'>\u2606 StatTrak\u2122 Gut Knife | Autotronic</span>",
            weight: 15,
            isTruckingItem: !1
        },
        gut_knife_auto: {
            name: "\u2606 StatTrak\u2122 Gut Knife | Grinder",
            vrpName: "<span style='color:crimson' n='58389'>\u2606 StatTrak\u2122 Gut Knife | Grinder</span>",
            weight: 0,
            isTruckingItem: !1
        },
        gut_knife_tiger: {
            name: "\u2606 StatTrak\u2122 Gut Knife | Tiger Tooth",
            vrpName: "<span style='color:purple' n='133'>\u2606 StatTrak\u2122 Gut Knife | Tiger Tooth</span>",
            weight: 10,
            isTruckingItem: !1
        },
        gut_knife_lore: {
            name: "\u2606 StatTrak\u2122 Gut Knife | Weightless",
            vrpName: "<span style='color:purple' n='396'>\u2606 StatTrak\u2122 Gut Knife | Weightless</span>",
            weight: 0,
            isTruckingItem: !1
        },
        crafted_jewelry: {
            name: "Jewelry",
            vrpName: "Trucking Cargo: Jewelry",
            weight: 5,
            isTruckingItem: !0
        },
        illegal_crate: {
            name: "Pill crate",
            vrpName: "Illegal: Pill crate",
            weight: 40,
            isTruckingItem: !0
        },
        illegal_meth: {
            name: "Methamphetamine",
            vrpName: "Illegal: Methamphetamine",
            weight: 10,
            isTruckingItem: !0
        },
        petrochem_asphalt: {
            name: "Asphalt Concrete",
            vrpName: "Petrochem: Asphalt Concrete",
            weight: 5,
            isTruckingItem: !0
        },
        liberty_military_goods: {
            name: "Military Goods",
            vrpName: "Liberty: Military Goods",
            weight: 100,
            isTruckingItem: !0
        },
        worker_token: {
            name: "Farming: Worker Token",
            vrpName: "Farming: Worker Token",
            weight: 1,
            isTruckingItem: !1
        },
        farming_coffee: {
            name: "Farmers coffee",
            vrpName: "Farmers coffee",
            weight: 1,
            isTruckingItem: !1
        },
        repair_shop: {
            name: "Repair Shop",
            vrpName: "Temporary Repair Shop",
            weight: 1,
            isTruckingItem: !0
        },
        fridge_store_delivery: {
            name: "Fridge: Food Shipment",
            vrpName: "Fridge: Food Shipment",
            weight: 10,
            isTruckingItem: !0
        },
        house: {
            name: "House",
            vrpName: "House",
            weight: 0,
            isTruckingItem: !0
        }
    }
      , na = [{
        name: "Alamo Sea Fish Importer",
        recipes: [{
            name: "Sell Fish Meat",
            cost: -1e3,
            ingredients: [{
                item: t.fish_meat,
                amount: 10
            }],
            exportItem: {
                item: t.fish_meat,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell 10x Fish Meat"],
            highestMultiplier: 1e3,
            highestMultiplierPath: ["Sell 10000x Fish Meat"]
        }, {
            name: "Sell Premium Fish Meat",
            cost: -3e3,
            ingredients: [{
                item: t.fish_meat_premium,
                amount: 10
            }],
            exportItem: {
                item: t.fish_meat_premium,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell 10x Premium Fish Meat"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Sell 1000x Premium Fish Meat"]
        }],
        color: "#808080"
    }, {
        name: "CollinsCo Dealer",
        recipes: [{
            name: "CollinsCo Boat Vouchers",
            cost: -15e5,
            ingredients: [{
                item: t.collinsco_boat_voucher,
                amount: 100
            }],
            exportItem: {
                item: t.collinsco_boat_voucher,
                amount: 100
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["CollinsCo Boat Vouchers x100"],
            highestMultiplier: 10,
            highestMultiplierPath: ["CollinsCo Boat Vouchers x1000"]
        }, {
            name: "CollinsCo Boat Voucher",
            cost: -15e4,
            ingredients: [{
                item: t.collinsco_boat_voucher,
                amount: 10
            }],
            exportItem: {
                item: t.collinsco_boat_voucher,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["CollinsCo Boat Voucher x10"],
            highestMultiplier: 1,
            highestMultiplierPath: ["CollinsCo Boat Voucher x10"]
        }],
        color: "#808080"
    }, {
        name: "House Construction Site",
        recipes: [{
            name: "House Construction",
            cost: -235e4,
            ingredients: [{
                item: t.crafted_copperwire,
                amount: 1
            }, {
                item: t.crafted_rebar,
                amount: 1
            }, {
                item: t.crafted_concrete,
                amount: 1
            }, {
                item: t.refined_planks,
                amount: 2
            }, {
                item: t.crafted_ceramictiles,
                amount: 4
            }, {
                item: t.crafted_computer,
                amount: 1
            }],
            exportItem: {
                item: t.house,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["House Construction"],
            highestMultiplier: 1,
            highestMultiplierPath: ["House Construction"]
        }],
        color: "#800080"
    }, {
        name: "Hunter: Meat Buyer",
        recipes: [{
            name: "Meat Buyer",
            cost: -250,
            ingredients: [{
                item: t.meat,
                amount: 1
            }],
            exportItem: {
                item: t.meat,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Meat Buyer"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Meat Buyer x100"]
        }],
        color: "#808080"
    }, {
        name: "Illegal: Defib Kit Charging",
        recipes: [{
            name: "Charge Empty Defib Kit",
            cost: 5e3,
            ingredients: [{
                item: t.e_defibkit,
                amount: 1
            }],
            products: [{
                item: t.defibkit,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Charge Empty Defib Kit"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Charge Empty Defib Kit x2"]
        }],
        color: "#808080"
    }, {
        name: "Illegal: Humane Labs",
        recipes: [{
            name: "Craft Pills",
            cost: 1e5,
            ingredients: [{
                item: t.illegal_meth,
                amount: 8
            }, {
                item: t.illegal_crate,
                amount: 3
            }],
            products: [{
                item: t.pills,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Craft Pills"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Craft Pills"]
        }],
        color: "#808080"
    }, {
        name: "Illegal: Liquor Ace",
        recipes: [{
            name: "Pick up methamphetamine",
            cost: 1e4,
            ingredients: [],
            products: [{
                item: t.illegal_meth,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Pick up methamphetamine"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Pick up methamphetamine x10"]
        }],
        color: "#808080"
    }, {
        name: "Illegal: Plastic Molding",
        recipes: [{
            name: "Craft Empty Defib Kit",
            cost: 1e4,
            ingredients: [{
                item: t.scrap_plastic,
                amount: 10
            }],
            products: [{
                item: t.e_defibkit,
                amount: 5
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Craft Empty Defib Kit"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Craft Empty Defib Kit"]
        }],
        color: "#808080"
    }, {
        name: "Illegal: Pop's Pills ",
        recipes: [{
            name: "Pick up pills crate",
            cost: 1e4,
            ingredients: [{
                item: t.scrap_plastic,
                amount: 5
            }, {
                item: t.refined_planks,
                amount: 1
            }],
            products: [{
                item: t.illegal_crate,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Pick up pills crate"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Pick up pills crate x10"]
        }],
        color: "#808080"
    }, {
        name: "Los Santos Fish Importer",
        recipes: [{
            name: "Sell Fish Meat",
            cost: -1e3,
            ingredients: [{
                item: t.fish_meat,
                amount: 10
            }],
            exportItem: {
                item: t.fish_meat,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell 10x Fish Meat"],
            highestMultiplier: 1e3,
            highestMultiplierPath: ["Sell 10000x Fish Meat"]
        }, {
            name: "Sell Premium Fish Meat",
            cost: -3e3,
            ingredients: [{
                item: t.fish_meat_premium,
                amount: 10
            }],
            exportItem: {
                item: t.fish_meat_premium,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell 10x Premium Fish Meat"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Sell 1000x Premium Fish Meat"]
        }],
        color: "#808080"
    }, {
        name: "Paleto Cove Fish Importer",
        recipes: [{
            name: "Sell Fish Meat",
            cost: -1e3,
            ingredients: [{
                item: t.fish_meat,
                amount: 10
            }],
            exportItem: {
                item: t.fish_meat,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell 10x Fish Meat"],
            highestMultiplier: 1e3,
            highestMultiplierPath: ["Sell 10000x Fish Meat"]
        }, {
            name: "Sell Premium Fish Meat",
            cost: -3e3,
            ingredients: [{
                item: t.fish_meat_premium,
                amount: 10
            }],
            exportItem: {
                item: t.fish_meat_premium,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell 10x Premium Fish Meat"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Sell 1000x Premium Fish Meat"]
        }],
        color: "#808080"
    }, {
        name: "PostOp HQ",
        recipes: [{
            name: "Buy mail",
            cost: 100,
            ingredients: [],
            products: [{
                item: t.mail,
                amount: 5
            }],
            priority: 0,
            type: c.Import,
            path: ["Buy mail x5"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Buy mail x10"]
        }],
        color: "#808080"
    }, {
        name: "San Chianski Airport Fish Importer",
        recipes: [{
            name: "Sell Fish Meat",
            cost: -1e3,
            ingredients: [{
                item: t.fish_meat,
                amount: 10
            }],
            exportItem: {
                item: t.fish_meat,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell 10x Fish Meat"],
            highestMultiplier: 1e3,
            highestMultiplierPath: ["Sell 10000x Fish Meat"]
        }, {
            name: "Sell Premium Fish Meat",
            cost: -3e3,
            ingredients: [{
                item: t.fish_meat_premium,
                amount: 10
            }],
            exportItem: {
                item: t.fish_meat_premium,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell 10x Premium Fish Meat"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Sell 1000x Premium Fish Meat"]
        }],
        color: "#808080"
    }, {
        name: "Trucking Cargo Merchant: Erasers",
        recipes: [{
            name: "Buy: Erasers",
            cost: 200,
            ingredients: [],
            products: [{
                item: t.tcargosmall,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Buy: Erasers"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Buy: Erasers x100"]
        }, {
            name: "Sell: Erasers",
            cost: -600,
            ingredients: [{
                item: t.tcargosmall,
                amount: 1
            }],
            exportItem: {
                item: t.tcargosmall,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell: Erasers"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Sell: Erasers x100"]
        }],
        color: "#FFF5E1"
    }, {
        name: "Trucking Cargo Merchant: Tools",
        recipes: [{
            name: "Buy: Tools",
            cost: 100,
            ingredients: [],
            products: [{
                item: t.pucargosmall,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Buy: Tools"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Buy: Tools x100"]
        }, {
            name: "Sell: Tools",
            cost: -200,
            ingredients: [{
                item: t.pucargosmall,
                amount: 1
            }],
            exportItem: {
                item: t.pucargosmall,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell: Tools"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Sell: Tools x100"]
        }, {
            name: "Mechanic Hammer",
            cost: 1e4,
            ingredients: [{
                item: t.tavi_hardened_steel,
                amount: 1
            }, {
                item: t.refined_planks,
                amount: 1
            }],
            products: [{
                item: t.mechanic_hammer,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: [],
            highestMultiplier: 1,
            highestMultiplierPath: []
        }, {
            name: "Mechanic Wrench",
            cost: 1e4,
            ingredients: [{
                item: t.tavi_hardened_steel,
                amount: 2
            }],
            products: [{
                item: t.mechanic_wrench,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: [],
            highestMultiplier: 1,
            highestMultiplierPath: []
        }],
        color: "#800080"
    }, {
        name: "Trucking: Alta Construction Site",
        recipes: [{
            name: "Deliver Asphalt Concrete",
            cost: -25e3,
            ingredients: [{
                item: t.petrochem_asphalt,
                amount: 5
            }],
            exportItem: {
                item: t.petrochem_asphalt,
                amount: 5
            },
            priority: -1,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Asphalt Concrete"],
            highestMultiplier: 5,
            highestMultiplierPath: ["Deliver Asphalt Concrete x5"]
        }, {
            name: "Deliver Rebar",
            cost: -23e4,
            ingredients: [{
                item: t.crafted_rebar,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_rebar,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Rebar"],
            highestMultiplier: 5,
            highestMultiplierPath: ["Deliver Rebar x5"]
        }, {
            name: "Deliver Concrete",
            cost: -8e5,
            ingredients: [{
                item: t.crafted_concrete,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_concrete,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Concrete"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Deliver Concrete x2"]
        }],
        color: "#800080"
    }, {
        name: "Trucking: Bristols Fuel Storage",
        recipes: [{
            name: "Sell Diesel",
            cost: -12e3,
            ingredients: [{
                item: t.petrochem_diesel,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_diesel,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell Diesel"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Sell Diesel x10"]
        }, {
            name: "Sell Kerosene",
            cost: -15e3,
            ingredients: [{
                item: t.petrochem_kerosene,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_kerosene,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell Kerosene"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Sell Kerosene x10"]
        }, {
            name: "Sell Petrol",
            cost: -8e3,
            ingredients: [{
                item: t.petrochem_petrol,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_petrol,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell Petrol"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Sell Petrol x10"]
        }, {
            name: "Sell Empty Jerry Cans",
            cost: -4e3,
            ingredients: [{
                item: t.jerry_can_empty,
                amount: 10
            }],
            exportItem: {
                item: t.jerry_can_empty,
                amount: 10
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell Empty Jerry Cans"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Sell Empty Jerry Cans"]
        }],
        color: "#800080"
    }, {
        name: "Trucking: Chemical Laboratories",
        recipes: [{
            name: "Refine Chemicals",
            cost: 2500,
            ingredients: [{
                item: t.military_chemicals,
                amount: 1
            }],
            products: [{
                item: t.scrap_acid,
                amount: 4
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Refine Chemicals", "Refine Chemicals"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Refine Chemicals", "Refine Chemicals x10"]
        }, {
            name: "Pick up Toxic Waste",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.recycled_waste,
                amount: 1
            }],
            priority: -10,
            type: c.Import,
            path: ["Pickup Toxic Waste", "Pick up Toxic Waste"],
            highestMultiplier: 3,
            highestMultiplierPath: ["Pickup Toxic Waste", "Pick up Toxic Waste x3"]
        }],
        color: "#808080"
    }, {
        name: "Trucking: Clucking Bell Farms",
        recipes: [{
            name: "Pack Fish Meat",
            cost: 0,
            ingredients: [{
                item: t.fish_meat,
                amount: 150
            }],
            products: [{
                item: t.fridge_meat,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Pack Fish Meat"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Pack Fish Meat x10"]
        }, {
            name: "Pack Crispy Fish Meat",
            cost: 0,
            ingredients: [{
                item: t.fish_meat,
                amount: 1e3
            }, {
                item: t.tcargodust,
                amount: 20
            }],
            products: [{
                item: t.fridge_meat,
                amount: 10
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Pack Crispy Fish Meat x10"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Pack Crispy Fish Meat x10"]
        }, {
            name: "Pack Meat",
            cost: 0,
            ingredients: [{
                item: t.meat,
                amount: 30
            }],
            products: [{
                item: t.fridge_meat,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Pack Meat"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Pack Meat x10"]
        }, {
            name: "Pack Crispy Meat",
            cost: 0,
            ingredients: [{
                item: t.meat,
                amount: 200
            }, {
                item: t.tcargodust,
                amount: 20
            }],
            products: [{
                item: t.fridge_meat,
                amount: 10
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Pack Crispy Meat x10"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Pack Crispy Meat x10"]
        }],
        color: "#808080"
    }, {
        name: "Trucking: Davis Mega Mall",
        recipes: [{
            name: "Sell Propane",
            cost: -1e4,
            ingredients: [{
                item: t.petrochem_propane,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_propane,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Sell Propane"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Sell Propane x10"]
        }],
        color: "#800080"
    }, {
        name: "Trucking: Deep Quarry",
        recipes: [{
            name: "Recycle Ore Mix",
            cost: 0,
            ingredients: [{
                item: t.scrap_ore,
                amount: 15
            }, {
                item: t.military_explosives,
                amount: 1
            }],
            products: [{
                item: t.refined_sand,
                amount: 90
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Recycle Ore Mix"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Recycle Ore Mix"]
        }, {
            name: "Use Explosives",
            cost: 0,
            ingredients: [{
                item: t.military_explosives,
                amount: 1
            }],
            products: [{
                item: t.refined_sand,
                amount: 20
            }, {
                item: t.scrap_gravel,
                amount: 30
            }],
            priority: -10,
            type: c.Recipe,
            path: ["Use Explosives"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Use Explosives"]
        }, {
            name: "Gravel Pulverizing",
            cost: 0,
            ingredients: [{
                item: t.military_explosives,
                amount: 1
            }, {
                item: t.scrap_gravel,
                amount: 20
            }],
            products: [{
                item: t.refined_sand,
                amount: 100
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Gravel Pulverizing"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Gravel Pulverizing"]
        }],
        color: "#D3D3D3"
    }, {
        name: "Trucking: Electronics Store",
        recipes: [{
            name: "Deliver Copper Wire Spool",
            cost: -55e3,
            ingredients: [{
                item: t.crafted_copperwire,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_copperwire,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Copper Wire Spool", "Deliver Copper Wire Spool"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Deliver Copper Wire Spool", "Deliver Copper Wire Spool x10"]
        }, {
            name: "Deliver Solder",
            cost: -5200,
            ingredients: [{
                item: t.refined_solder,
                amount: 1
            }],
            exportItem: {
                item: t.refined_solder,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Solder", "Deliver Solder"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Deliver Solder", "Deliver Solder x10"]
        }, {
            name: "Pick up Recycled Electronics",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.recycled_electronics,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Pick up Recycled Electronics", "Pick up Recycled Electronics"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Pick up Recycled Electronics", "Pick up Recycled Electronics x2"]
        }, {
            name: "Deliver Fiberglass Spool",
            cost: -6e4,
            ingredients: [{
                item: t.crafted_fiberglass,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_fiberglass,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Fiberglass Spool", "Deliver Fiberglass Spool"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Deliver Fiberglass Spool", "Deliver Fiberglass Spool x10"]
        }, {
            name: "Deliver Amalgam",
            cost: -35e3,
            ingredients: [{
                item: t.refined_amalgam,
                amount: 1
            }],
            exportItem: {
                item: t.refined_amalgam,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Amalgam", "Deliver Amalgam"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Deliver Amalgam", "Deliver Amalgam x10"]
        }, {
            name: "Deliver Circuit Boards",
            cost: -9e4,
            ingredients: [{
                item: t.crafted_circuit,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_circuit,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Circuit Boards", "Deliver Circuit Boards"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Deliver Circuit Boards", "Deliver Circuit Boards x10"]
        }],
        color: "#90EE90"
    }, {
        name: "Trucking: Elysian Island Waste Deposit",
        recipes: [{
            name: "Exchange Iron",
            cost: 0,
            ingredients: [{
                item: t.mining_token_iron,
                amount: 1
            }],
            products: [{
                item: t.scrap_ore,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Exchange Iron"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Exchange Iron x10"]
        }, {
            name: "Toxic Waste",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.recycled_waste,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Toxic Waste"],
            highestMultiplier: 3,
            highestMultiplierPath: ["Toxic Waste x3"]
        }, {
            name: "Exchange Copper",
            cost: 0,
            ingredients: [{
                item: t.mining_token_copper,
                amount: 1
            }],
            products: [{
                item: t.scrap_ore,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Exchange Copper"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Exchange Copper x10"]
        }],
        color: "#00C8A4"
    }, {
        name: "Trucking: Filtering Plant",
        recipes: [{
            name: "Mix Concrete",
            cost: 15e3,
            ingredients: [{
                item: t.liquid_water,
                amount: 1
            }, {
                item: t.crafted_cement,
                amount: 5
            }],
            products: [{
                item: t.crafted_concrete,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Mix Concrete"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Mix Concrete x2"]
        }, {
            name: "Conveyor Filtering",
            cost: 3e4,
            ingredients: [{
                item: t.mining_token_copper,
                amount: 1
            }, {
                item: t.mining_token_iron,
                amount: 1
            }],
            products: [{
                item: t.scrap_emerald,
                amount: 1
            }, {
                item: t.scrap_ore,
                amount: 3
            }, {
                item: t.scrap_gravel,
                amount: 10
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Conveyor Filtering"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Conveyor Filtering"]
        }, {
            name: "Filter Toxic Waste",
            cost: 15e3,
            ingredients: [{
                item: t.recycled_waste,
                amount: 1
            }],
            products: [{
                item: t.scrap_mercury,
                amount: 2
            }, {
                item: t.scrap_lead,
                amount: 2
            }, {
                item: t.scrap_acid,
                amount: 4
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Filter Toxic Waste"],
            highestMultiplier: 3,
            highestMultiplierPath: ["Filter Toxic Waste x3"]
        }, {
            name: "Filter Gravel",
            cost: 15e3,
            ingredients: [{
                item: t.scrap_gravel,
                amount: 10
            }],
            products: [{
                item: t.refined_sand,
                amount: 6
            }, {
                item: t.refined_flint,
                amount: 4
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Filter Gravel"],
            highestMultiplier: 6,
            highestMultiplierPath: ["Filter Gravel x6"]
        }, {
            name: "Filter Quarry Rubble",
            cost: 15e3,
            ingredients: [{
                item: t.recycled_rubble,
                amount: 1
            }],
            products: [{
                item: t.scrap_emerald,
                amount: 1
            }, {
                item: t.scrap_ore,
                amount: 4
            }, {
                item: t.scrap_gravel,
                amount: 12
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Filter Quarry Rubble"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Filter Quarry Rubble x2"]
        }],
        color: "#D4A73E"
    }, {
        name: "Trucking: Fridgit Co.",
        recipes: [{
            name: "Create Airline Meal",
            cost: 2500,
            ingredients: [{
                item: t.fridge_meat,
                amount: 1
            }, {
                item: t.fridge_veggies,
                amount: 1
            }, {
                item: t.fridge_dairy,
                amount: 1
            }],
            products: [{
                item: t.fridge_airline_meal,
                amount: 4
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Airline Meals", "Create Airline Meal"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Airline Meals", "Create Airline Meal x10"]
        }, {
            name: "Create Dairy Shipment",
            cost: 2500,
            ingredients: [{
                item: t.fridge_dairy,
                amount: 4
            }],
            products: [{
                item: t.fridge_store_delivery,
                amount: 5
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Food Shipments", "Create Dairy Shipment"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Food Shipments", "Create Dairy Shipment x10"]
        }],
        color: "#4169E1"
    }, {
        name: "Trucking: Grapeseed Farms",
        recipes: [{
            name: "Pick up Dairy",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.fridge_dairy,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Pick up Dairy"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Pick up Dairy x10"]
        }],
        color: "#808080"
    }, {
        name: "Trucking: Great Chaparral Farm",
        recipes: [{
            name: "Pick up Vegetables",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.fridge_veggies,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Pick up Vegetables"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Pick up Vegetables x10"]
        }],
        color: "#808080"
    }, {
        name: "Trucking: GSD Gas Pumping Station",
        recipes: [{
            name: "Extract Raw Gas",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.petrochem_gas,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Extract Raw Gas"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Extract Raw Gas x2"]
        }],
        color: "#D3D3D3"
    }, {
        name: "Trucking: GSD Mine",
        recipes: [{
            name: "Use Explosives",
            cost: 0,
            ingredients: [{
                item: t.military_explosives,
                amount: 1
            }],
            products: [{
                item: t.military_titanium_ore,
                amount: 4
            }, {
                item: t.scrap_gold,
                amount: 10
            }],
            priority: -10,
            type: c.Recipe,
            path: ["Use Explosives"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Use Explosives"]
        }],
        color: "#D3D3D3"
    }, {
        name: "Trucking: Jewelry Store",
        recipes: [{
            name: "Deliver Jewelry",
            cost: -95e3,
            ingredients: [{
                item: t.crafted_jewelry,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_jewelry,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Jewelry"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Deliver Jewelry"]
        }, {
            name: "Deliver Refined Gold",
            cost: -31e3,
            ingredients: [{
                item: t.refined_gold,
                amount: 1
            }],
            exportItem: {
                item: t.refined_gold,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Refined Gold"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Deliver Refined Gold"]
        }, {
            name: "Deliver Raw Emeralds",
            cost: -25e3,
            ingredients: [{
                item: t.scrap_emerald,
                amount: 1
            }],
            exportItem: {
                item: t.scrap_emerald,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Raw Emeralds"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Deliver Raw Emeralds x10"]
        }],
        color: "#800080"
    }, {
        name: "Trucking: Land Act Reservoir",
        recipes: [{
            name: "Pick up Unfiltered Water",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.liquid_water_raw,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Pick up Unfiltered Water"],
            highestMultiplier: 3,
            highestMultiplierPath: ["Pick up Unfiltered Water x3"]
        }],
        color: "#3399FF"
    }, {
        name: "Trucking: Logging Camp",
        recipes: [{
            name: "Collect Logs",
            cost: 7500,
            ingredients: [],
            products: [{
                item: t.tcargologs,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Collect Logs"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Collect Logs x10"]
        }],
        color: "#B0623D"
    }, {
        name: "Trucking: LS Factory",
        recipes: [{
            name: "Create Rebar",
            cost: 5e3,
            ingredients: [{
                item: t.refined_bronze,
                amount: 2
            }, {
                item: t.refined_amalgam,
                amount: 6
            }],
            products: [{
                item: t.crafted_rebar,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Create Rebar", "Create Rebar"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Create Rebar", "Create Rebar x2"]
        }, {
            name: "Titanium Reinforcement",
            cost: 5e3,
            ingredients: [{
                item: t.military_titanium,
                amount: 6
            }],
            products: [{
                item: t.crafted_rebar,
                amount: 2
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Create Rebar", "Titanium Reinforcement"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Create Rebar", "Titanium Reinforcement"]
        }, {
            name: "Create Jewelry",
            cost: 5e3,
            ingredients: [{
                item: t.scrap_emerald,
                amount: 1
            }, {
                item: t.refined_gold,
                amount: 2
            }],
            products: [{
                item: t.crafted_jewelry,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Create Jewelry", "Create Jewelry"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Create Jewelry", "Create Jewelry"]
        }, {
            name: "Titanium Jewelry",
            cost: 5e3,
            ingredients: [{
                item: t.military_titanium,
                amount: 1
            }, {
                item: t.refined_gold,
                amount: 4
            }],
            products: [{
                item: t.crafted_jewelry,
                amount: 4
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Create Jewelry", "Titanium Jewelry"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Create Jewelry", "Titanium Jewelry"]
        }, {
            name: "Create Fiberglass Spool",
            cost: 5e3,
            ingredients: [{
                item: t.refined_planks,
                amount: 1
            }, {
                item: t.refined_glass,
                amount: 4
            }, {
                item: t.scrap_plastic,
                amount: 8
            }],
            products: [{
                item: t.crafted_fiberglass,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Create Fiberglass Spool", "Create Fiberglass Spool"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Create Fiberglass Spool", "Create Fiberglass Spool x10"]
        }, {
            name: "Create Cardboard",
            cost: 5e3,
            ingredients: [{
                item: t.liquid_water,
                amount: 1
            }, {
                item: t.tcargodust,
                amount: 50
            }],
            products: [{
                item: t.crafted_cardboard,
                amount: 5
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Craft Cardboard", "Create Cardboard"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Craft Cardboard", "Create Cardboard"]
        }, {
            name: "Create Batteries",
            cost: 5e3,
            ingredients: [{
                item: t.refined_solder,
                amount: 4
            }, {
                item: t.refined_zinc,
                amount: 2
            }, {
                item: t.scrap_acid,
                amount: 8
            }],
            products: [{
                item: t.crafted_batteries,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Create Batteries", "Create Batteries"],
            highestMultiplier: 5,
            highestMultiplierPath: ["Create Batteries", "Create Batteries x5"]
        }, {
            name: "Create Copper Wire Spool",
            cost: 5e3,
            ingredients: [{
                item: t.refined_planks,
                amount: 1
            }, {
                item: t.refined_copper,
                amount: 4
            }],
            products: [{
                item: t.crafted_copperwire,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Create Copper Wire Spool", "Create Copper Wire Spool"],
            highestMultiplier: 5,
            highestMultiplierPath: ["Create Copper Wire Spool", "Create Copper Wire Spool x5"]
        }, {
            name: "Create Circuit Boards",
            cost: 5e3,
            ingredients: [{
                item: t.crafted_copperwire,
                amount: 1
            }, {
                item: t.refined_solder,
                amount: 2
            }, {
                item: t.scrap_plastic,
                amount: 10
            }],
            products: [{
                item: t.crafted_circuit,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Craft Circuit Boards", "Create Circuit Boards"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Craft Circuit Boards", "Create Circuit Boards x10"]
        }, {
            name: "Create Computer",
            cost: 5e3,
            ingredients: [{
                item: t.crafted_circuit,
                amount: 1
            }, {
                item: t.crafted_batteries,
                amount: 1
            }, {
                item: t.scrap_gold,
                amount: 2
            }],
            products: [{
                item: t.crafted_computer,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Craft Computers", "Create Computer"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Craft Computers", "Create Computer x10"]
        }],
        color: "#8B0000"
    }, {
        name: "Trucking: LS Foundry",
        recipes: [{
            name: "Refine Titanium",
            cost: 1e3,
            ingredients: [{
                item: t.military_titanium_ore,
                amount: 1
            }],
            products: [{
                item: t.military_titanium,
                amount: 1
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Refine Titanium", "Refine Titanium x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Refine Titanium", "Refine Titanium x10"]
        }, {
            name: "Refine Copper",
            cost: 1e3,
            ingredients: [{
                item: t.scrap_copper,
                amount: 2
            }],
            products: [{
                item: t.refined_copper,
                amount: 1
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Refine Copper", "Refine Copper x1"],
            highestMultiplier: 20,
            highestMultiplierPath: ["Refine Copper", "Refine Copper x20"]
        }, {
            name: "Refine Tin",
            cost: 1e3,
            ingredients: [{
                item: t.scrap_tin,
                amount: 2
            }],
            products: [{
                item: t.refined_tin,
                amount: 1
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Refine Tin", "Refine Tin x1"],
            highestMultiplier: 20,
            highestMultiplierPath: ["Refine Tin", "Refine Tin x20"]
        }, {
            name: "Refine Solder",
            cost: 1e3,
            ingredients: [{
                item: t.scrap_lead,
                amount: 2
            }, {
                item: t.refined_aluminum,
                amount: 2
            }],
            products: [{
                item: t.refined_solder,
                amount: 8
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Refine Solder", "Refine Solder"],
            highestMultiplier: 4,
            highestMultiplierPath: ["Refine Solder", "Refine Solder x4"]
        }, {
            name: "Refine Gold",
            cost: 1e3,
            ingredients: [{
                item: t.scrap_gold,
                amount: 10
            }],
            products: [{
                item: t.refined_gold,
                amount: 5
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Refine Gold", "Refine Gold x10"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Refine Gold", "Refine Gold x10"]
        }, {
            name: "Substitute Gold",
            cost: 1e3,
            ingredients: [{
                item: t.petrochem_sulfur,
                amount: 10
            }, {
                item: t.refined_bronze,
                amount: 25
            }, {
                item: t.petrochem_petrol,
                amount: 2
            }],
            products: [{
                item: t.scrap_gold,
                amount: 40
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Refine Gold", "Substitute Gold"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Refine Gold", "Substitute Gold"]
        }, {
            name: "Refine Bronze Alloy",
            cost: 1e3,
            ingredients: [{
                item: t.scrap_tin,
                amount: 1
            }, {
                item: t.scrap_aluminum,
                amount: 1
            }, {
                item: t.scrap_copper,
                amount: 2
            }],
            products: [{
                item: t.refined_bronze,
                amount: 2
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Refine Bronze Alloy", "Refine Bronze Alloy x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Refine Bronze Alloy", "Refine Bronze Alloy x10"]
        }, {
            name: "Refine Raw Ore Mix",
            cost: 1e3,
            ingredients: [{
                item: t.scrap_ore,
                amount: 2
            }],
            products: [{
                item: t.refined_zinc,
                amount: 1
            }, {
                item: t.refined_copper,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Refine Raw Ore Mix", "Refine Raw Ore Mix x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Refine Raw Ore Mix", "Refine Raw Ore Mix x10"]
        }, {
            name: "Copper Alloy",
            cost: 1e4,
            ingredients: [{
                item: t.scrap_ore,
                amount: 20
            }, {
                item: t.petrochem_sulfur,
                amount: 10
            }],
            products: [{
                item: t.refined_copper,
                amount: 20
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Refine Raw Ore Mix", "Copper Alloy"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Refine Raw Ore Mix", "Copper Alloy"]
        }, {
            name: "Zinc Alloy",
            cost: 1e4,
            ingredients: [{
                item: t.scrap_ore,
                amount: 20
            }, {
                item: t.petrochem_propane,
                amount: 2
            }],
            products: [{
                item: t.refined_zinc,
                amount: 20
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Refine Raw Ore Mix", "Zinc Alloy"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Refine Raw Ore Mix", "Zinc Alloy"]
        }, {
            name: "Refine Amalgam",
            cost: 1e3,
            ingredients: [{
                item: t.refined_tin,
                amount: 2
            }, {
                item: t.scrap_mercury,
                amount: 2
            }],
            products: [{
                item: t.refined_amalgam,
                amount: 2
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Refine Amalgam", "Refine Amalgam"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Refine Amalgam", "Refine Amalgam x10"]
        }, {
            name: "Refine Aluminum",
            cost: 1e3,
            ingredients: [{
                item: t.scrap_aluminum,
                amount: 2
            }],
            products: [{
                item: t.refined_aluminum,
                amount: 1
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Refine Aluminum", "Refine Aluminum x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Refine Aluminum", "Refine Aluminum x10"]
        }, {
            name: "Refine Glass",
            cost: 1e3,
            ingredients: [{
                item: t.refined_sand,
                amount: 1
            }],
            products: [{
                item: t.refined_glass,
                amount: 1
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Refine Glass", "Refine Glass x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Refine Glass", "Refine Glass x10"]
        }, {
            name: "Hardened Steel",
            cost: 1e3,
            ingredients: [{
                item: t.military_titanium,
                amount: 1
            }, {
                item: t.mining_token_iron,
                amount: 5
            }],
            products: [{
                item: t.tavi_hardened_steel,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Refine Steel", "Hardened Steel"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Refine Steel", "Hardened Steel"]
        }, {
            name: "Ceramic Tiles",
            cost: 1e3,
            ingredients: [{
                item: t.refined_flint,
                amount: 10
            }, {
                item: t.refined_sand,
                amount: 2
            }],
            products: [{
                item: t.crafted_ceramictiles,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Refine Ceramic Tiles", "Ceramic Tiles"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Refine Ceramic Tiles", "Ceramic Tiles x10"]
        }],
        color: "#C71585"
    }, {
        name: "Trucking: LS Oil Pumping Station",
        recipes: [{
            name: "Extract Crude Oil",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.petrochem_oil,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Extract Crude Oil"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Extract Crude Oil x2"]
        }],
        color: "#D3D3D3"
    }, {
        name: "Trucking: LS Port Export",
        recipes: [{
            name: "Export Planks",
            cost: -14400,
            ingredients: [{
                item: t.refined_planks,
                amount: 1
            }],
            exportItem: {
                item: t.refined_planks,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Planks", "Export Planks x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Planks", "Export Planks x10"]
        }, {
            name: "Export Refined Bronze Alloy",
            cost: -32e3,
            ingredients: [{
                item: t.refined_bronze,
                amount: 1
            }],
            exportItem: {
                item: t.refined_bronze,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Refined Bronze Alloy", "Export Refined Bronze Alloy x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Refined Bronze Alloy", "Export Refined Bronze Alloy x10"]
        }, {
            name: "Export Sawdust",
            cost: -1800,
            ingredients: [{
                item: t.tcargodust,
                amount: 1
            }],
            exportItem: {
                item: t.tcargodust,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Sawdust", "Export Sawdust x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Sawdust", "Export Sawdust x10"]
        }, {
            name: "Export Aluminum",
            cost: -8400,
            ingredients: [{
                item: t.refined_aluminum,
                amount: 1
            }],
            exportItem: {
                item: t.refined_aluminum,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Aluminum", "Export Aluminum x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Aluminum", "Export Aluminum x10"]
        }, {
            name: "Export Batteries",
            cost: -15e4,
            ingredients: [{
                item: t.crafted_batteries,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_batteries,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Batteries", "Export Batteries x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Batteries", "Export Batteries x10"]
        }, {
            name: "Export Copper",
            cost: -1e4,
            ingredients: [{
                item: t.refined_copper,
                amount: 1
            }],
            exportItem: {
                item: t.refined_copper,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Copper", "Export Copper x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Copper", "Export Copper x10"]
        }, {
            name: "Export Tin",
            cost: -8400,
            ingredients: [{
                item: t.refined_tin,
                amount: 1
            }],
            exportItem: {
                item: t.refined_tin,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Tin", "Export Tin x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Tin", "Export Tin x10"]
        }, {
            name: "Export Refined Glass",
            cost: -1e4,
            ingredients: [{
                item: t.refined_glass,
                amount: 1
            }],
            exportItem: {
                item: t.refined_glass,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Refined Glass", "Export Refined Glass x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Refined Glass", "Export Refined Glass x10"]
        }, {
            name: "Export Rubber",
            cost: -1e4,
            ingredients: [{
                item: t.mechanicals_rubber,
                amount: 1
            }],
            exportItem: {
                item: t.mechanicals_rubber,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Vehicle Parts", "Export Rubber"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Vehicle Parts", "Export Rubber x10"]
        }, {
            name: "Export Vehicle Framework",
            cost: -35e4,
            ingredients: [{
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }],
            exportItem: {
                item: t.mechanicals_vehicle_framework,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Vehicle Parts", "Export Vehicle Framework"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Export Vehicle Parts", "Export Vehicle Framework"]
        }, {
            name: "Export Zinc",
            cost: -11600,
            ingredients: [{
                item: t.refined_zinc,
                amount: 1
            }],
            exportItem: {
                item: t.refined_zinc,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Zinc", "Export Zinc x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Zinc", "Export Zinc x10"]
        }, {
            name: "Ceramic Tiles",
            cost: -4e4,
            ingredients: [{
                item: t.crafted_ceramictiles,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_ceramictiles,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Ceramic Tiles", "Ceramic Tiles"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Ceramic Tiles", "Ceramic Tiles x10"]
        }, {
            name: "Computer",
            cost: -21e4,
            ingredients: [{
                item: t.crafted_computer,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_computer,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Computers", "Computer"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Computers", "Computer x10"]
        }, {
            name: "Export Acid",
            cost: -12800,
            ingredients: [{
                item: t.scrap_acid,
                amount: 1
            }],
            exportItem: {
                item: t.scrap_acid,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Acid", "Export Acid x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Export Acid", "Export Acid x10"]
        }],
        color: "#800080"
    }, {
        name: "Trucking: LSIA Shipments",
        recipes: [{
            name: "Deliver Airline Meal",
            cost: -6500,
            ingredients: [{
                item: t.fridge_airline_meal,
                amount: 1
            }],
            exportItem: {
                item: t.fridge_airline_meal,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Airline Meal"],
            highestMultiplier: 30,
            highestMultiplierPath: ["Deliver Airline Meal x30"]
        }],
        color: "#808080"
    }, {
        name: "Trucking: McKenzie Export",
        recipes: [{
            name: "Export Scrap Plastic",
            cost: -3600,
            ingredients: [{
                item: t.scrap_plastic,
                amount: 1
            }],
            exportItem: {
                item: t.scrap_plastic,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Scrap Plastic"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Export Scrap Plastic x100"]
        }, {
            name: "Export Flint",
            cost: -4250,
            ingredients: [{
                item: t.refined_flint,
                amount: 1
            }],
            exportItem: {
                item: t.refined_flint,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Export Flint"],
            highestMultiplier: 100,
            highestMultiplierPath: ["Export Flint x100"]
        }, {
            name: "Export Cardboard",
            cost: -6e4,
            ingredients: [{
                item: t.crafted_cardboard,
                amount: 1
            }],
            exportItem: {
                item: t.crafted_cardboard,
                amount: 1
            },
            priority: -1,
            type: c.Export,
            color: "#800080",
            path: ["Export Cardboard"],
            highestMultiplier: 5,
            highestMultiplierPath: ["Export Cardboard x5"]
        }],
        color: "#800080"
    }, {
        name: "Trucking: Military Workshop",
        recipes: [{
            name: "Create Explosives",
            cost: 9500,
            ingredients: [{
                item: t.petrochem_sulfur,
                amount: 10
            }, {
                item: t.petrochem_kerosene,
                amount: 8
            }],
            products: [{
                item: t.military_explosives,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Create Explosives"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Create Explosives"]
        }, {
            name: "Deliver Titanium",
            cost: -75e3,
            ingredients: [{
                item: t.military_titanium,
                amount: 1
            }],
            exportItem: {
                item: t.military_titanium,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Titanium"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Deliver Titanium"]
        }],
        color: "#929292"
    }, {
        name: "Trucking: Mineral Mine",
        recipes: [{
            name: "Use Explosives",
            cost: 0,
            ingredients: [{
                item: t.military_explosives,
                amount: 1
            }],
            products: [{
                item: t.military_titanium_ore,
                amount: 4
            }, {
                item: t.scrap_emerald,
                amount: 10
            }],
            priority: -10,
            type: c.Recipe,
            path: ["Use Explosives"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Use Explosives"]
        }, {
            name: "Exchange Copper Ore",
            cost: 0,
            ingredients: [{
                item: t.mining_copper,
                amount: 1
            }],
            products: [{
                item: t.mining_token_copper,
                amount: 1
            }],
            priority: -10,
            type: c.Recipe,
            path: ["Exchange Copper Ore"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Exchange Copper Ore x10"]
        }, {
            name: "Exchange Iron Ore",
            cost: 0,
            ingredients: [{
                item: t.mining_iron,
                amount: 1
            }],
            products: [{
                item: t.mining_token_iron,
                amount: 1
            }],
            priority: -10,
            type: c.Recipe,
            path: ["Exchange Iron Ore"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Exchange Iron Ore x10"]
        }],
        color: "#D3D3D3"
    }, {
        name: "Trucking: Oil Depository",
        recipes: [{
            name: "Fill Helicoper Cans",
            cost: -11e3,
            ingredients: [{
                item: t.petrochem_kerosene,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_kerosene,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Fill Helicoper Cans"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Fill Helicoper Cans"]
        }, {
            name: "Fill Plane Cans",
            cost: -11e3,
            ingredients: [{
                item: t.petrochem_kerosene,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_kerosene,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Fill Plane Cans"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Fill Plane Cans"]
        }, {
            name: "Fill Boat Cans",
            cost: -8e3,
            ingredients: [{
                item: t.petrochem_diesel,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_diesel,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Fill Boat Cans"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Fill Boat Cans"]
        }, {
            name: "Fill Diesel Cans",
            cost: -8e3,
            ingredients: [{
                item: t.petrochem_diesel,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_diesel,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Fill Diesel Cans"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Fill Diesel Cans"]
        }, {
            name: "Fill Petrol Cans",
            cost: -4e3,
            ingredients: [{
                item: t.petrochem_petrol,
                amount: 1
            }],
            exportItem: {
                item: t.petrochem_petrol,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Fill Petrol Cans"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Fill Petrol Cans"]
        }],
        color: "#800080"
    }, {
        name: "Trucking: Quarry",
        recipes: [{
            name: "Create Cement",
            cost: 1500,
            ingredients: [{
                item: t.refined_sand,
                amount: 5
            }, {
                item: t.tcargodust,
                amount: 2
            }],
            products: [{
                item: t.crafted_cement,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Create Cement"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Create Cement x10"]
        }, {
            name: "Deliver Sand",
            cost: -1500,
            ingredients: [{
                item: t.refined_sand,
                amount: 1
            }],
            exportItem: {
                item: t.refined_sand,
                amount: 1
            },
            priority: 0,
            type: c.Export,
            color: "#800080",
            path: ["Deliver Sand"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Deliver Sand"]
        }, {
            name: "Pick up Quarry Rubble",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.recycled_rubble,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Pick up Quarry Rubble"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Pick up Quarry Rubble x2"]
        }],
        color: "#D3D3D3"
    }, {
        name: "Trucking: Raven Slaughterhouse",
        recipes: [{
            name: "Wolf",
            cost: 2e3,
            ingredients: [{
                item: t.hide_wolf,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 20
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Wolf", "Wolf x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Wolf", "Wolf x10"]
        }, {
            name: "Rabbit",
            cost: 2e3,
            ingredients: [{
                item: t.hide_rabbit,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Rabbit", "Rabbit x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Rabbit", "Rabbit x10"]
        }, {
            name: "Lion",
            cost: 2e3,
            ingredients: [{
                item: t.hide_lion,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 20
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Lion", "Lion x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Lion", "Lion x10"]
        }, {
            name: "Brown Bear",
            cost: 2e3,
            ingredients: [{
                item: t.hide_bear,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 40
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Brown Bear", "Brown Bear x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Brown Bear", "Brown Bear x10"]
        }, {
            name: "Leopard",
            cost: 2e3,
            ingredients: [{
                item: t.hide_leopard,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 20
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Leopard", "Leopard x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Leopard", "Leopard x10"]
        }, {
            name: "Deer",
            cost: 2e3,
            ingredients: [{
                item: t.hide_deer,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 12
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Deer", "Deer x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Deer", "Deer x10"]
        }, {
            name: "Coyote",
            cost: 2e3,
            ingredients: [{
                item: t.hide_coyote,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 6
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Coyote", "Coyote x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Coyote", "Coyote x10"]
        }, {
            name: "Cougar",
            cost: 2e3,
            ingredients: [{
                item: t.hide_mtlion,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 10
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Cougar", "Cougar x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Cougar", "Cougar x10"]
        }, {
            name: "Boar",
            cost: 2e3,
            ingredients: [{
                item: t.hide_boar,
                amount: 1
            }],
            products: [{
                item: t.meat,
                amount: 20
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Boar", "Boar x1"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Boar", "Boar x10"]
        }],
        color: "#808080"
    }, {
        name: "Trucking: Recycling Center",
        recipes: [{
            name: "Pick up Recycled Trash",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.recycled_trash,
                amount: 1
            }],
            priority: 0,
            type: c.Import,
            path: ["Pick up Recycled Trash"],
            highestMultiplier: 3,
            highestMultiplierPath: ["Pick up Recycled Trash x3"]
        }],
        color: "#90EE90"
    }, {
        name: "Trucking: Refinery",
        recipes: [{
            name: "Refine Crude Oil",
            cost: 10250,
            ingredients: [{
                item: t.petrochem_oil,
                amount: 1
            }],
            products: [{
                item: t.petrochem_diesel,
                amount: 1
            }, {
                item: t.petrochem_petrol,
                amount: 2
            }, {
                item: t.petrochem_kerosene,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Refine Crude Oil"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Refine Crude Oil x2"]
        }, {
            name: "Create Asphalt",
            cost: 10250,
            ingredients: [{
                item: t.petrochem_oil,
                amount: 1
            }, {
                item: t.scrap_gravel,
                amount: 20
            }],
            products: [{
                item: t.petrochem_asphalt,
                amount: 20
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Create Asphalt"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Create Asphalt"]
        }, {
            name: "Refine Raw Gas",
            cost: 10250,
            ingredients: [{
                item: t.petrochem_gas,
                amount: 1
            }],
            products: [{
                item: t.military_chemicals,
                amount: 2
            }, {
                item: t.petrochem_propane,
                amount: 2
            }, {
                item: t.petrochem_waste,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Refine Raw Gas"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Refine Raw Gas x2"]
        }, {
            name: "Refine Rubber",
            cost: 41e3,
            ingredients: [{
                item: t.petrochem_oil,
                amount: 4
            }],
            products: [{
                item: t.petrochem_petrol,
                amount: 4
            }, {
                item: t.mechanicals_rubber,
                amount: 4
            }, {
                item: t.petrochem_diesel,
                amount: 2
            }, {
                item: t.petrochem_kerosene,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Refine Rubber"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Refine Rubber"]
        }, {
            name: "Refine Diluted Fuel",
            cost: 10250,
            ingredients: [{
                item: t.petrochem_oil,
                amount: 3
            }, {
                item: t.liquid_water,
                amount: 2
            }],
            products: [{
                item: t.petrochem_diesel,
                amount: 3
            }, {
                item: t.petrochem_petrol,
                amount: 3
            }, {
                item: t.petrochem_kerosene,
                amount: 20
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Refine Diluted Fuel"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Refine Diluted Fuel"]
        }],
        color: "#525252"
    }, {
        name: "Trucking: Sandstone Collector",
        recipes: [{
            name: "Scrap Lead",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 3
            }],
            products: [{
                item: t.scrap_lead,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Scrap Lead"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Scrap Lead"]
        }, {
            name: "Scrap Mercury",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 3
            }],
            products: [{
                item: t.scrap_mercury,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Scrap Mercury"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Scrap Mercury"]
        }, {
            name: "Scrap Aluminum",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 1
            }],
            products: [{
                item: t.scrap_aluminum,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Scrap Aluminum"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Scrap Aluminum"]
        }, {
            name: "Raw Emeralds",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 2
            }],
            products: [{
                item: t.scrap_emerald,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Raw Emeralds"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Raw Emeralds"]
        }, {
            name: "Scrap Copper",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 1
            }],
            products: [{
                item: t.scrap_copper,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Scrap Copper"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Scrap Copper"]
        }, {
            name: "Titanium Ore",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 5
            }],
            products: [{
                item: t.military_titanium_ore,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Titanium Ore"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Titanium Ore"]
        }, {
            name: "Scrap Tin",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 1
            }],
            products: [{
                item: t.scrap_tin,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Scrap Tin"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Scrap Tin"]
        }, {
            name: "Raw Ore Mix",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 3
            }],
            products: [{
                item: t.scrap_ore,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Raw Ore Mix"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Raw Ore Mix"]
        }, {
            name: "Sell Directly",
            cost: -7500,
            ingredients: [{
                item: t.mining_credit,
                amount: 1
            }],
            exportItem: {
                item: t.mining_credit,
                amount: 1
            },
            priority: -100,
            type: c.Export,
            color: "#800080",
            path: ["Sell Directly"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Sell Directly"]
        }, {
            name: "Sand",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 1
            }],
            products: [{
                item: t.refined_sand,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Sand"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Sand"]
        }, {
            name: "Flint",
            cost: 0,
            ingredients: [{
                item: t.mining_credit,
                amount: 1
            }],
            products: [{
                item: t.refined_flint,
                amount: 1
            }],
            priority: -100,
            type: c.Recipe,
            path: ["Flint"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Flint"]
        }],
        color: "#808080"
    }, {
        name: "Trucking: Sawmill",
        recipes: [{
            name: "Sawdust Filler Exploit",
            cost: 2500,
            ingredients: [{
                item: t.tcargologs,
                amount: 5
            }, {
                item: t.refined_sand,
                amount: 10
            }],
            products: [{
                item: t.tcargodust,
                amount: 100
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Grind Sawdust", "Sawdust Filler Exploit"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Grind Sawdust", "Sawdust Filler Exploit"]
        }, {
            name: "Grind Sawdust",
            cost: 500,
            ingredients: [{
                item: t.tcargologs,
                amount: 1
            }],
            products: [{
                item: t.tcargodust,
                amount: 10
            }],
            priority: 1,
            type: c.Recipe,
            path: ["Grind Sawdust", "Grind Sawdust x1"],
            highestMultiplier: 5,
            highestMultiplierPath: ["Grind Sawdust", "Grind Sawdust x5"]
        }, {
            name: "Mill Planks",
            cost: 500,
            ingredients: [{
                item: t.tcargologs,
                amount: 1
            }],
            products: [{
                item: t.refined_planks,
                amount: 1
            }, {
                item: t.tcargodust,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Mill Planks", "Mill Planks x1"],
            highestMultiplier: 5,
            highestMultiplierPath: ["Mill Planks", "Mill Planks x5"]
        }, {
            name: "Chipboard Planks",
            cost: 2500,
            ingredients: [{
                item: t.tcargologs,
                amount: 5
            }, {
                item: t.tcargodust,
                amount: 30
            }],
            products: [{
                item: t.refined_planks,
                amount: 15
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Mill Planks", "Chipboard Planks"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Mill Planks", "Chipboard Planks"]
        }],
        color: "#90421D"
    }, {
        name: "Trucking: Sorting Facility",
        recipes: [{
            name: "Sort Recycled Electronics",
            cost: 25e3,
            ingredients: [{
                item: t.recycled_electronics,
                amount: 1
            }],
            products: [{
                item: t.scrap_gold,
                amount: 1
            }, {
                item: t.scrap_copper,
                amount: 8
            }, {
                item: t.scrap_plastic,
                amount: 12
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Sort Recycled Electronics"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Sort Recycled Electronics x2"]
        }, {
            name: "Sort Recycled Trash",
            cost: 25e3,
            ingredients: [{
                item: t.recycled_trash,
                amount: 1
            }],
            products: [{
                item: t.scrap_tin,
                amount: 4
            }, {
                item: t.scrap_aluminum,
                amount: 4
            }, {
                item: t.scrap_plastic,
                amount: 8
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Sort Recycled Trash"],
            highestMultiplier: 3,
            highestMultiplierPath: ["Sort Recycled Trash x3"]
        }],
        color: "#006400"
    }, {
        name: "Trucking: Vehicle Factory",
        recipes: [{
            name: "Coil Rocket Voltic",
            cost: 9011e4,
            ingredients: [{
                item: t.refined_amalgam,
                amount: 50
            }, {
                item: t.refined_glass,
                amount: 25
            }, {
                item: t.mechanicals_chassis,
                amount: 1
            }, {
                item: t.crafted_circuit,
                amount: 5
            }, {
                item: t.mechanicals_battery,
                amount: 1
            }, {
                item: t.mechanicals_wheels,
                amount: 4
            }, {
                item: t.crafted_fiberglass,
                amount: 15
            }, {
                item: t.petrochem_kerosene,
                amount: 100
            }, {
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }],
            products: [{
                item: t.upgrade_kit_voltic2,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Coil Rocket Voltic"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Coil Rocket Voltic"]
        }, {
            name: "HVY Nightshark",
            cost: 1378e4,
            ingredients: [{
                item: t.mechanicals_vehicle_framework,
                amount: 2
            }, {
                item: t.refined_glass,
                amount: 15
            }, {
                item: t.mechanicals_chassis,
                amount: 2
            }, {
                item: t.crafted_circuit,
                amount: 12
            }, {
                item: t.crafted_fiberglass,
                amount: 25
            }, {
                item: t.mechanicals_battery,
                amount: 2
            }, {
                item: t.refined_amalgam,
                amount: 40
            }, {
                item: t.military_titanium,
                amount: 60
            }, {
                item: t.mechanicals_wheels,
                amount: 4
            }, {
                item: t.liquid_water,
                amount: 1
            }],
            products: [{
                item: t["vehicle_shipment|nightshark|HVY Nightshark|car"],
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["HVY Nightshark"],
            highestMultiplier: 1,
            highestMultiplierPath: ["HVY Nightshark"]
        }, {
            name: "10F",
            cost: 225e5,
            ingredients: [{
                item: t.crafted_circuit,
                amount: 5
            }, {
                item: t.mechanicals_chassis,
                amount: 1
            }, {
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }, {
                item: t.refined_amalgam,
                amount: 50
            }, {
                item: t.mechanicals_wheels,
                amount: 4
            }, {
                item: t.mechanicals_battery,
                amount: 1
            }, {
                item: t.refined_glass,
                amount: 25
            }, {
                item: t.crafted_fiberglass,
                amount: 25
            }],
            products: [{
                item: t["vehicle_shipment|tenf|10F|car"],
                amount: 1
            }],
            priority: -1,
            type: c.Recipe,
            path: ["10F"],
            highestMultiplier: 1,
            highestMultiplierPath: ["10F"]
        }, {
            name: "Karin Futo",
            cost: 22e4,
            ingredients: [{
                item: t.crafted_circuit,
                amount: 5
            }, {
                item: t.mechanicals_chassis,
                amount: 1
            }, {
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }, {
                item: t.refined_amalgam,
                amount: 50
            }, {
                item: t.mechanicals_wheels,
                amount: 4
            }, {
                item: t.mechanicals_battery,
                amount: 1
            }, {
                item: t.refined_glass,
                amount: 25
            }, {
                item: t.crafted_fiberglass,
                amount: 15
            }],
            products: [{
                item: t["vehicle_shipment|futo|Karin Futo|car"],
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Karin Futo"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Karin Futo"]
        }, {
            name: "Coil Savanna",
            cost: 838e4,
            ingredients: [{
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }, {
                item: t.mechanicals_battery_evb,
                amount: 3
            }, {
                item: t.refined_glass,
                amount: 25
            }, {
                item: t.mechanicals_chassis,
                amount: 1
            }, {
                item: t.crafted_circuit,
                amount: 5
            }, {
                item: t.mechanicals_wheels,
                amount: 4
            }, {
                item: t.mechanicals_battery,
                amount: 1
            }, {
                item: t.crafted_fiberglass,
                amount: 35
            }, {
                item: t.refined_amalgam,
                amount: 50
            }],
            products: [{
                item: t["vehicle_shipment|savanna|Coil Savanna|car"],
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Coil Savanna"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Coil Savanna"]
        }, {
            name: "ZR-350",
            cost: 162e4,
            ingredients: [{
                item: t.mechanicals_battery,
                amount: 1
            }, {
                item: t.mechanicals_chassis,
                amount: 1
            }, {
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }, {
                item: t.mechanicals_wheels,
                amount: 4
            }, {
                item: t.crafted_circuit,
                amount: 5
            }, {
                item: t.crafted_fiberglass,
                amount: 15
            }, {
                item: t.refined_glass,
                amount: 25
            }, {
                item: t.refined_amalgam,
                amount: 50
            }],
            products: [{
                item: t["vehicle_shipment|zr350|ZR-350|car"],
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["ZR-350"],
            highestMultiplier: 1,
            highestMultiplierPath: ["ZR-350"]
        }, {
            name: "Hijak Vertice",
            cost: 32e4,
            ingredients: [{
                item: t.mechanicals_battery,
                amount: 1
            }, {
                item: t.mechanicals_chassis,
                amount: 1
            }, {
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }, {
                item: t.mechanicals_wheels,
                amount: 4
            }, {
                item: t.crafted_circuit,
                amount: 5
            }, {
                item: t.crafted_fiberglass,
                amount: 15
            }, {
                item: t.refined_glass,
                amount: 25
            }, {
                item: t.refined_amalgam,
                amount: 50
            }],
            products: [{
                item: t["vehicle_shipment|vertice|Hijak Vertice|car"],
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Hijak Vertice"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Hijak Vertice"]
        }, {
            name: "Dundreary Landstalker XL",
            cost: 32e6,
            ingredients: [{
                item: t.mechanicals_battery,
                amount: 2
            }, {
                item: t.mechanicals_chassis,
                amount: 1
            }, {
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }, {
                item: t.mechanicals_wheels,
                amount: 4
            }, {
                item: t.crafted_circuit,
                amount: 10
            }, {
                item: t.crafted_fiberglass,
                amount: 30
            }, {
                item: t.refined_glass,
                amount: 50
            }, {
                item: t.refined_amalgam,
                amount: 100
            }],
            products: [{
                item: t["vehicle_shipment|landstalker2|Landstalker XL|car"],
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Dundreary Landstalker XL"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Dundreary Landstalker XL"]
        }, {
            name: "Shipping Container",
            cost: 1e6,
            ingredients: [{
                item: t.refined_planks,
                amount: 10
            }, {
                item: t.tavi_hardened_steel,
                amount: 10
            }],
            products: [{
                item: t.shipping_crate_empty,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["1x Shipping Container"],
            highestMultiplier: 1,
            highestMultiplierPath: ["1x Shipping Container"]
        }],
        color: "#808080"
    }, {
        name: "Trucking: Vehicle Parts",
        recipes: [{
            name: "Temporary Repair Shop",
            cost: 15e5,
            ingredients: [{
                item: t.pucargosmall,
                amount: 2
            }, {
                item: t.mechanicals_wheels,
                amount: 2
            }, {
                item: t.military_titanium,
                amount: 2
            }, {
                item: t.mechanicals_chassis,
                amount: 2
            }],
            products: [{
                item: t.repair_shop,
                amount: 20
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Temporary Repair Shop"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Temporary Repair Shop"]
        }, {
            name: "Chassis",
            cost: 1e5,
            ingredients: [{
                item: t.refined_amalgam,
                amount: 15
            }],
            products: [{
                item: t.mechanicals_chassis,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Chassis"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Chassis"]
        }, {
            name: "Vehicle Framework",
            cost: 25e4,
            ingredients: [{
                item: t.refined_amalgam,
                amount: 25
            }],
            products: [{
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Vehicle Framework"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Vehicle Framework"]
        }, {
            name: "Car Battery",
            cost: 35e3,
            ingredients: [{
                item: t.crafted_batteries,
                amount: 2
            }],
            products: [{
                item: t.mechanicals_battery,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Car Battery"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Car Battery"]
        }, {
            name: "Wheels",
            cost: 2e4,
            ingredients: [{
                item: t.mechanicals_rubber,
                amount: 10
            }, {
                item: t.refined_aluminum,
                amount: 1
            }],
            products: [{
                item: t.mechanicals_wheels,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Wheels"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Wheels"]
        }, {
            name: "Traction Battery",
            cost: 12e4,
            ingredients: [{
                item: t.mechanicals_battery,
                amount: 6
            }],
            products: [{
                item: t.mechanicals_battery_evb,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Traction Battery"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Traction Battery"]
        }, {
            name: "Jumper Cable",
            cost: 3e3,
            ingredients: [{
                item: t.mechanicals_rubber,
                amount: 1
            }, {
                item: t.crafted_copperwire,
                amount: 1
            }],
            products: [{
                item: t.mechanicals_jumper_cable,
                amount: 2
            }],
            priority: 0,
            type: c.Recipe,
            path: [],
            highestMultiplier: 1,
            highestMultiplierPath: []
        }],
        color: "#808080"
    }, {
        name: "Trucking: Water Treatment Plant",
        recipes: [{
            name: "Clean Waste Water",
            cost: 5e3,
            ingredients: [{
                item: t.petrochem_waste,
                amount: 2
            }],
            products: [{
                item: t.liquid_water,
                amount: 1
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Clean Waste Water"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Clean Waste Water"]
        }, {
            name: "Treat Waste Water",
            cost: 5e3,
            ingredients: [{
                item: t.petrochem_waste,
                amount: 1
            }],
            products: [{
                item: t.petrochem_sulfur,
                amount: 5
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Treat Waste Water"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Treat Waste Water x2"]
        }, {
            name: "Treat Unfiltered Water",
            cost: 5e3,
            ingredients: [{
                item: t.liquid_water_raw,
                amount: 1
            }, {
                item: t.scrap_acid,
                amount: 1
            }],
            products: [{
                item: t.liquid_water,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Treat Unfiltered Water"],
            highestMultiplier: 2,
            highestMultiplierPath: ["Treat Unfiltered Water x2"]
        }],
        color: "#3399FF"
    }]
      , sa = [{
        name: "Mineshaft",
        recipes: [{
            name: "Mine Iron Ore",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.mining_iron,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: [],
            highestMultiplier: 1,
            highestMultiplierPath: []
        }, {
            name: "Mine Copper Ore",
            cost: 0,
            ingredients: [],
            products: [{
                item: t.mining_copper,
                amount: 1
            }],
            priority: 0,
            type: c.Recipe,
            path: [],
            highestMultiplier: 1,
            highestMultiplierPath: []
        }],
        color: "#D3D3D3"
    }, {
        name: "Roxite Mine",
        recipes: [{
            name: "Abuse Explosives",
            cost: 0,
            ingredients: [{
                item: t.military_explosives,
                amount: 2
            }],
            products: [{
                item: t.refined_flint,
                amount: 80
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Abuse Explosives"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Abuse Explosives"]
        }, {
            name: "Use Explosives",
            cost: 0,
            ingredients: [{
                item: t.military_explosives,
                amount: 1
            }],
            products: [{
                item: t.military_titanium_ore,
                amount: 10
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Use Explosives"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Use Explosives"]
        }],
        color: "#D3D3D3"
    }, {
        name: "Roxwood Fruit Market",
        recipes: [{
            name: "Sell Food",
            cost: 0,
            ingredients: [{
                item: t.fridge_store_delivery,
                amount: 1
            }],
            products: [{
                item: t["exp_token_a|farming|farming"],
                amount: 10
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Sell Food"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Sell Food"]
        }],
        color: "#228B22"
    }, {
        name: "Roxwood Loft Market",
        recipes: [{
            name: "Feed the Hunters",
            cost: 0,
            ingredients: [{
                item: t.fridge_store_delivery,
                amount: 10
            }],
            products: [{
                item: t["exp_token_a|hunting|skill"],
                amount: 100
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Feed the Hunters"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Feed the Hunters"]
        }],
        color: "#8B4513"
    }, {
        name: "Roxwood Intl. Raceway",
        recipes: [{
            name: "Re-stock Fuel Tank",
            cost: 0,
            ingredients: [{
                item: t.petrochem_petrol,
                amount: 10
            }],
            products: [{
                item: t["exp_token_a|player|racing"],
                amount: 100
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Re-stock Fuel Tank"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Re-stock Fuel Tank"]
        }, {
            name: "Spare Parts",
            cost: 0,
            ingredients: [{
                item: t.mechanicals_battery,
                amount: 1
            }, {
                item: t.mechanicals_chassis,
                amount: 1
            }, {
                item: t.mechanicals_vehicle_framework,
                amount: 1
            }, {
                item: t.mechanicals_wheels,
                amount: 2
            }],
            products: [{
                item: t["exp_token_a|player|racing"],
                amount: 250
            }],
            priority: -1,
            type: c.Recipe,
            path: ["Spare Parts"],
            highestMultiplier: 10,
            highestMultiplierPath: ["Spare Parts x10"]
        }],
        color: "#FF4500"
    }, {
        name: "Roxwood Marina",
        recipes: [{
            name: "Re-supply Marina",
            cost: 0,
            ingredients: [{
                item: t.petrochem_diesel,
                amount: 10
            }],
            products: [{
                item: t["exp_token_a|farming|fishing"],
                amount: 100
            }],
            priority: 0,
            type: c.Recipe,
            path: ["Re-supply Marina"],
            highestMultiplier: 1,
            highestMultiplierPath: ["Re-supply Marina"]
        }],
        color: "#1E90FF"
    }, {
        name: "Custom Recipes",
        recipes: [],
        color: "#3E516CFF"
    }]
      , oa = [...na, ...sa]
      , O = oa.map(e => ({
        ...e,
        recipes: e.recipes.map(a => ({
            ...a,
            location: e.name
        }))
    }))
      , st = "#808080"
      , be = "#5D3A9B"
      , ca = {
        bctp: {
            name: "Blaine County Tractor Parts",
            id: "bctp",
            positions: [{
                x: 388.36904907227,
                y: 3586.8146972656,
                z: 33.29222869873
            }, {
                x: 314.23321533203,
                y: 3633.7976074219,
                z: 30.525358200073
            }],
            size: 4e5,
            fee: 50,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        pbsf: {
            name: "Paleto Bay Self Storage",
            id: "pbsf",
            positions: [{
                x: 46.444091796875,
                y: 6458.7602539063,
                z: 31.425287246704
            }, {
                x: -37.641159057617,
                y: 7057.8452148438,
                z: 2.0027375221252
            }, {
                x: -455.48385620117,
                y: 6552.7553710938,
                z: 10.766058921814
            }],
            size: 6e5,
            fee: 200,
            type: k.Storage,
            priority: N.PaletoBay
        },
        bhsl: {
            name: "Big House Storage LSIA",
            id: "bhsl",
            positions: [{
                x: -512.517578125,
                y: -2200.123046875,
                z: 6.3940262794495
            }],
            size: 25e5,
            fee: 100,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        tsu: {
            name: "The Secure Unit",
            id: "tsu",
            positions: [{
                x: 911.31066894531,
                y: -1256.2835693359,
                z: 25.5778465271
            }],
            size: 15e5,
            fee: 200,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        dpss: {
            name: "Del Perro Self Storage",
            id: "dpss",
            positions: [{
                x: -1614.7346191406,
                y: -821.41516113281,
                z: 10.070293426514
            }, {
                x: -1842.6529541016,
                y: -1006.7001342773,
                z: 1
            }],
            size: 8e5,
            fee: 100,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        gohq: {
            name: "Palmer-Taylor Power Station",
            id: "gohq",
            positions: [{
                x: 2674.7131347656,
                y: 1429.8662109375,
                z: 24.500797271729
            }],
            size: 1e6,
            fee: 100,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        fthq: {
            name: "Pillbox Hill Storage Unit",
            id: "fthq",
            positions: [{
                x: 340.37985229492,
                y: -561.98333740234,
                z: 28.743785858154
            }],
            size: 1e6,
            fee: 100,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        bats: {
            name: "Rogers Salvage & Scrap",
            id: "bats",
            positions: [{
                x: -639.17358398438,
                y: -1727.0373535156,
                z: 24.31266784668
            }],
            size: 1e6,
            fee: 100,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        fyrecay: {
            name: "Cayo Perico Airfield",
            id: "fyrecay",
            positions: [{
                x: 4448.3725585938,
                y: -4483.0600585938,
                z: 4.2335081100464
            }],
            size: 4e5,
            fee: 50,
            type: k.Storage,
            priority: N.UnknownStorage
        }
    }
      , la = {
        biz_hookies: {
            name: "Hookies",
            id: "biz_hookies",
            positions: [{
                x: -2209.091553,
                y: 4246.66748,
                z: 47.55793,
                h: 340.259369
            }],
            size: 1e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_granny: {
            name: "Grandma's House",
            id: "biz_granny",
            positions: [{
                x: 2195.722412,
                y: 5606.561035,
                z: 53.54073,
                h: 336.438324
            }],
            size: 1e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_yellowjack: {
            name: "Yellowjack",
            id: "biz_yellowjack",
            positions: [{
                x: 1995.205444,
                y: 3036.047119,
                z: 47.026821,
                h: 325.128418
            }],
            size: 35e4,
            fee: 10,
            type: k.Storage,
            priority: N.Yellowjack
        },
        biz_stripclub: {
            name: "Vanilla Unicorn",
            id: "biz_stripclub",
            positions: [{
                x: 138.807602,
                y: -1277.245728,
                z: 29.318634,
                h: 118.81456
            }],
            size: 1e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_ltweld: {
            name: "LT Weld Supply Co",
            id: "biz_ltweld",
            positions: [{
                x: 1175.7137451172,
                y: -1316.5482177734,
                z: 34.798126220703,
                h: 174.53958129883
            }],
            size: 5e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_walker: {
            name: "Walker Logistics",
            id: "biz_walker",
            positions: [{
                x: 126.76761627197,
                y: -3212.6791992188,
                z: 5.8929586410522
            }],
            size: 5e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_lsia: {
            name: "L.S.I.A.",
            id: "biz_lsia",
            positions: [{
                x: -1205.3310546875,
                y: -2630.728515625,
                z: 13.944932937622,
                h: 325.30377197266
            }, {
                x: -1079.0277099609,
                y: -2865.3129882813,
                z: 13.950700759888,
                h: 326.36962890625
            }, {
                x: -1380.2336425781,
                y: -3241.2841796875,
                z: 13.944814682007,
                h: 242.47793579102
            }],
            size: 15e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_murrietta_oil: {
            name: "CollinsCo",
            id: "biz_murrietta_oil",
            positions: [{
                x: 1735.63562,
                y: -1538.411499,
                z: 112.705345,
                h: 314.896423
            }],
            size: 15e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_playboi: {
            name: "Playboy Mansion",
            id: "biz_playboi",
            positions: [{
                x: -1550.971924,
                y: 130.134979,
                z: 56.787189,
                h: 131.729889
            }],
            size: 5e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_vineyard: {
            name: "Vineyard",
            id: "biz_vineyard",
            positions: [{
                x: -1922.0493164063,
                y: 2047.1319580078,
                z: 140.73503112793
            }],
            size: 5e5,
            fee: 0,
            type: k.Storage,
            priority: N.UnknownStorage
        },
        biz_train: {
            name: "Train Network",
            id: "biz_train",
            positions: [{
                x: 151.61253356934,
                y: 6403.0478515625,
                z: 31.177011489868
            }, {
                x: 2928.67578125,
                y: 4627.6127929688,
                z: 48.545486450195
            }, {
                x: 2687.3676757813,
                y: 2767.3159179688,
                z: 37.877990722656
            }, {
                x: -114.83979034424,
                y: -2576.6413574219,
                z: 6.0007061958313
            }, {
                x: 796.67376708984,
                y: -3215.5600585938,
                z: 5.8998837471008
            }, {
                x: 1972.3913574219,
                y: 3636.4680175781,
                z: 34.889045715332
            }, {
                x: 735.12860107422,
                y: -878.39239501953,
                z: 25.026447296143
            }, {
                x: 511.85794067383,
                y: -625.4267578125,
                z: 24.758949279785
            }, {
                x: 4902.7143554688,
                y: -5194.22265625,
                z: 2.4385457038879
            }, {
                x: 4940.45703125,
                y: -5132.0825195312,
                z: .87203848361969
            }, {
                x: 2690.7902832031,
                y: 1356.7669677734,
                z: 24.520862579346
            }],
            size: 621420,
            fee: 250,
            type: k.Storage,
            priority: N.Train
        }
    }
      , Ee = {
        name: "Faction Storage",
        id: "faction",
        positions: [],
        size: 5e4,
        fee: 0,
        type: k.Storage,
        priority: N.Faction
    }
      , Z = {
        name: "Inventory",
        id: "inventory",
        vrpName: "inventory",
        positions: [],
        size: 300,
        fee: 0,
        type: k.Inventory,
        priority: N.Inventory
    }
      , le = {
        name: "Backpack",
        id: "backpack",
        positions: [],
        size: 300,
        fee: 0,
        type: k.Backpack,
        priority: N.Backpack
    }
      , Pe = {
        trailerswb: {
            name: "MK1",
            id: "trailerswb",
            positions: [],
            size: 400,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        trailerlogs2: {
            name: "MK3",
            id: "trailerlogs2",
            positions: [],
            size: 600,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        botdumptr: {
            name: "MK4",
            id: "botdumptr",
            positions: [],
            size: 775,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        drybulktr: {
            name: "MK5",
            id: "drybulktr",
            positions: [],
            size: 1e3,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        dumptr: {
            name: "MK6",
            id: "dumptr",
            positions: [],
            size: 1500,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        docktrailer2: {
            name: "MK7",
            id: "docktrailer2",
            positions: [],
            size: 2200,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        docktrailer: {
            name: "MK8",
            id: "docktrailer",
            positions: [],
            size: 2500,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        trailers2: {
            name: "MK9",
            id: "trailers2",
            positions: [],
            size: 2750,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        trailerswb2: {
            name: "MK10",
            id: "trailerswb2",
            vrpName: "Refrigerated Trailer (MK10) (trailerswb2)",
            positions: [],
            size: 3e3,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        tvtrailer: {
            name: "MK11",
            id: "tvtrailer",
            positions: [],
            size: 3500,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        tvtrailer2: {
            name: "MK12",
            id: "tvtrailer2",
            vrpName: "Trailer (tvtrailer2)",
            positions: [],
            size: 5e3,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        boxlongtr: {
            name: "MK13",
            id: "boxlongtr",
            vrpName: "Box Trailer (MK13) (boxlongtr)",
            positions: [],
            size: 8500,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        trailerlarge: {
            name: "MK14",
            id: "trailerlarge",
            vrpName: "Mobile Operations Center (MK14) (trailerlarge)",
            positions: [],
            size: 9e3,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        },
        mk15: {
            name: "MK15",
            id: "mk15",
            vrpName: "Chernobog Toter (mk15)",
            positions: [],
            size: 6e3,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Cab,
            priority: N.Vehicle
        },
        xmtrailer: {
            name: "eCola Trailer",
            id: "xmtrailer",
            vrpName: "eCola Trailer (xmtrailer)",
            positions: [],
            size: 8500,
            fee: 0,
            type: k.Vehicle,
            vehicleType: L.Trailer,
            priority: N.Vehicle
        }
    }
      , U = [...Object.values(ca), ...Object.values(la), Ee, Z, le, ...Object.values(Pe)];
    U.forEach(e => e.defaultPriority = e.priority ?? G);
    function Y(e) {
        return e.replaceAll(" ", "_").toLowerCase()
    }
    function me(e, a) {
        return e.solution.type === V.Recipe && e.solution.recipe.type === c.Export ? `export_${Y(e.target.item.name)}` : e.solution.type === V.Recipe ? `recipe_${Y(e.solution.recipe.name)}` : e.solution.storage.type === k.Recipe ? `recipe_${Y(e.solution.storage.name)}` : a ? `storage_${Y(e.solution.storage.name)}_${me(a)}` : `storage_${Y(e.solution.storage.name)}`
    }
    function ee(e, a="unknown") {
        return Object.entries(e).map( ([i,{amount: n}]) => {
            let s = nt.reduce( (u, l) => u.replace(l, ""), i);
            if (s.startsWith("gut_knife"))
                s = s.split("|")[0];
            else if (s.startsWith("aircargo"))
                return null;
            let o = t[s];
            return o == null ? (s !== "outfit|ig_furry" && console.info(`Unknown item: ${s} in ${a}`),
            null) : {
                item: o,
                amount: n
            }
        }
        ).filter(i => i !== null)
    }
    function W(e, a="", i) {
        let n = e.replace(new RegExp(`^chest_u${a}`), "").replace(new RegExp(`^chest_self_storage:${a}:(.+):chest$`), "$1")
          , s = n.match(/^veh_\w+_(.+)$/);
        if (n = s ? s[1] : n,
        /^chest_u\d+/.test(n) || /^chest_self_storage:\d+:/.test(n))
            return null;
        let o = U.find(m => m.id === n);
        if (o)
            return o;
        if (n.startsWith("faq_"))
            return n === `faq_${i}` ? Ee : null;
        let u = U.find(m => m.id === n);
        if (u)
            return u;
        console.warn(`Unknown storage: '${n}', assuming vehicle`);
        let l = {
            name: n,
            id: n,
            type: k.Vehicle,
            priority: N.UnknownVehicle,
            defaultPriority: N.UnknownVehicle
        };
        return U.push(l),
        l
    }
    function pe(e, a, i, n) {
        let s = W(e, i, n);
        return s == null ? null : {
            storage: s,
            items: ee(a, s.id)
        }
    }
    function Q(e) {
        return O.some(a => a.recipes.some(i => i.type === c.Recipe && i.products.some(n => n.item === e) || i.type === c.Export && i.exportItem.item == e))
    }
    function Me(e, a, i) {
        let n = e.ingredients
          , s = e.type === c.Export ? [] : e.products
          , o = n.reduce( (C, y) => C + y.item.weight * y.amount, 0)
          , u = s.reduce( (C, y) => C + y.item.weight * y.amount, 0)
          , l = Math.max(o, u)
          , m = [...a]
          , d = [...i];
        function h(C) {
            let y = n.map(w => ({
                item: w.item,
                totalAmount: w.amount * C,
                totalWeight: w.item.weight * w.amount * C
            }))
              , v = [...m]
              , I = new Map;
            for (let {item: w, totalAmount: P} of y) {
                let b = new Array(v.length).fill(0)
                  , _ = P;
                for (let R = 0; R < v.length && _ > 0; R++) {
                    let x = Math.floor(v[R] / w.weight)
                      , B = Math.min(x, _);
                    B > 0 && (b[R] = B,
                    v[R] -= B * w.weight,
                    _ -= B)
                }
                if (_ > 0)
                    return {
                        success: !1,
                        allocations: new Map
                    };
                I.set(w, b)
            }
            return {
                success: !0,
                allocations: I
            }
        }
        let p = m.reduce( (C, y) => C + y, 0)
          , f = Math.floor(p / l)
          , g = new Map
          , T = 0;
        for (let C = f; C >= 0; C--) {
            let y = h(C);
            if (y.success) {
                T = C,
                g = y.allocations;
                break
            }
        }
        return {
            allocations: n.map(C => ({
                item: C.item,
                amounts: g.get(C.item) || new Array(a.length).fill(0),
                vrpNames: d
            })),
            recipeAmountPerRun: T
        }
    }
    function ct(e) {
        return O.find(a => a.name === e)
    }
    function ma(e) {
        let a = parseInt(e.slice(1, 3), 16)
          , i = parseInt(e.slice(3, 5), 16)
          , n = parseInt(e.slice(5, 7), 16);
        return {
            r: a,
            g: i,
            b: n
        }
    }
    function xe(e, a, i) {
        let[n,s,o] = [e / 255, a / 255, i / 255].map(u => u <= .03928 ? u / 12.92 : Math.pow((u + .055) / 1.055, 2.4));
        return .2126 * n + .7152 * s + .0722 * o
    }
    function ot(e, a) {
        return (e + .05) / (a + .05)
    }
    function lt(e) {
        let {r: a, g: i, b: n} = ma(e)
          , s = xe(a, i, n)
          , o = xe(255, 255, 255)
          , u = xe(0, 0, 0)
          , l = ot(o, s)
          , m = ot(u, s);
        return l > m ? "#111111" : "#ffffff"
    }
    async function te(e, a, i) {
        let n = await fetch(e + a, {
            headers: {
                "X-Tycoon-Key": i
            }
        });
        if (!n.ok) {
            let s;
            throw n.status === 402 ? s = "No api charges remaining" : n.status === 403 ? s = "Invalid api key" : s = await n.text().catch( () => "Unknown"),
            new Error(`Failed to fetch api: (${n.status}) ${s ?? n.statusText}`)
        }
        return n.json()
    }
    async function mt(e, a, i) {
        let n = await te(e, `getuserfaq/${a}`, i);
        return typeof n.faction_id == "number" ? String(n.faction_id) : null
    }
    async function pa(e, a, i) {
        let {data: {inventory: n}} = await te(e, `data/${a}`, i);
        return {
            items: ee(n, Z.id),
            storage: Z
        }
    }
    async function ua(e, a, i) {
        let {data: n} = await te(e, `chest/u${a}backpack`, i);
        return {
            items: ee(n ?? {}, le.id),
            storage: le
        }
    }
    async function ga(e, a, i) {
        let {trunks: n} = await te(e, `trunks/${a}`, i)
          , s = [];
        for (let o of n) {
            let u = W(o.vehicle, a.toString());
            u && s.push({
                items: ee(o.inventory, u.id),
                storage: u
            })
        }
        return s
    }
    async function pt(e, a, i, n) {
        let s = pa(e, a, i)
          , o = ua(e, a, i)
          , u = ga(e, a, i)
          , {storages: l} = await te(e, `storages/${a}`, i)
          , m = l.map(d => pe(d.name, d.inventory, a.toString(), n)).filter(d => d !== null);
        return m.push(await s),
        m.push(await o),
        m.push(...await u),
        m.sort( ({storage: d}, {storage: h}) => h.priority - d.priority)
    }
    function ut(e, a, i, n, s=[], o=!1) {
        if (e.length !== a.length)
            throw new Error("Items and amounts arrays must have the same length");
        let u = s.map(f => ({
            ...f,
            items: f.items.map(g => ({
                ...g
            }))
        })).sort( ({storage: f}, {storage: g}) => g.priority - f.priority)
          , l = {}
          , m = {};
        for (let f of O)
            for (let g of f.recipes) {
                if (g.type === c.Export) {
                    if (e.some(T => g.exportItem.item.name === T.name)) {
                        let T = m[g.exportItem.item.name];
                        if (!T || g.priority > T.priority) {
                            m[g.exportItem.item.name] = {
                                ...g,
                                ingredients: [...g.ingredients.map(C => ({
                                    ...C
                                }))],
                                exportItem: {
                                    ...g.exportItem
                                }
                            };
                            let S = m[g.exportItem.item.name];
                            o && (S.ingredients = S.ingredients.map(C => ({
                                ...C,
                                amount: C.amount * S.highestMultiplier
                            })),
                            S.exportItem = {
                                ...S.exportItem,
                                amount: S.exportItem.amount * S.highestMultiplier
                            },
                            S.cost = Math.round(S.cost * S.highestMultiplier))
                        }
                    }
                    continue
                }
                for (let T of g.products) {
                    let S = l[T.item.name];
                    if (!S || g.priority > S.priority) {
                        l[T.item.name] = {
                            ...g,
                            ingredients: [...g.ingredients.map(y => ({
                                ...y
                            }))],
                            products: [...g.products.map(y => ({
                                ...y
                            }))]
                        };
                        let C = l[T.item.name];
                        o && (C.ingredients = C.ingredients.map(y => ({
                            ...y,
                            amount: y.amount * C.highestMultiplier
                        })),
                        C.products = C.products.map(y => ({
                            ...y,
                            amount: y.amount * C.highestMultiplier
                        })),
                        C.cost = Math.round(C.cost * C.highestMultiplier))
                    }
                }
            }
        function d(f) {
            return l[f.name] ?? null
        }
        function h(f, g) {
            let T = [];
            for (let _ of u) {
                let R = _.items.find(x => x.item === f);
                if (R && R.amount > 0) {
                    let x = Math.min(R.amount, g);
                    return R.amount -= x,
                    g -= x,
                    R.amount === 0 && (_.items = _.items.filter(B => B.amount > 0)),
                    [{
                        target: {
                            item: f,
                            amount: x
                        },
                        solution: {
                            storage: {
                                name: _.storage.name,
                                type: _.storage.type
                            },
                            type: V.Storage
                        },
                        subSteps: []
                    }, ...g > 0 ? h(f, g) : []]
                }
            }
            let S = d(f);
            if (!S)
                return console.warn(`No recipe found to produce ${f.name}`),
                [{
                    solution: {
                        storage: {
                            name: "User Storage",
                            type: k.Storage
                        },
                        type: V.Storage
                    },
                    target: {
                        item: f,
                        amount: g
                    },
                    subSteps: []
                }];
            let C = Math.ceil(g / S.products.find(_ => _.item.name === f.name).amount)
              , y = S.products.reduce( (_, R) => _ + R.item.weight * R.amount, 0)
              , v = S.ingredients.reduce( (_, R) => _ + R.item.weight * R.amount, 0)
              , I = Math.max(y, v)
              , w = i.map(_ => Math.floor(_ / I))
              , P = S.ingredients.map(_ => ({
                item: _.item,
                amounts: w.map(R => _.amount * R),
                inventories: i,
                vrpNames: n
            }));
            for (let _ of S.ingredients)
                T.push(...h(_.item, _.amount * C));
            for (let _ of S.products) {
                let R = _.amount * C
                  , x = f === _.item ? g : 0
                  , B = R - x;
                if (B === 0)
                    continue;
                let A = u.find(z => z.storage.name === S.name);
                A || (A = {
                    storage: {
                        name: S.name,
                        id: S.name,
                        positions: [],
                        size: 0,
                        fee: 0,
                        type: k.Recipe,
                        priority: N.Recipes,
                        defaultPriority: N.Recipes
                    },
                    items: []
                },
                u.push(A));
                let F = A.items.find(z => z.item.name === _.item.name);
                F ? F.amount += B : A.items.push({
                    item: _.item,
                    amount: B
                })
            }
            let b = Me(S, i, n);
            return [{
                target: {
                    item: f,
                    amount: g
                },
                solution: {
                    recipe: S,
                    recipeAmount: C,
                    optimalProcessingRecipesPerRun: w.reduce( (_, R) => _ + R, 0),
                    optimalProcessingIngredientsPerRun: P,
                    maxLoadRecipesPerRun: b.recipeAmountPerRun,
                    maxLoadIngredientsPerRun: b.allocations,
                    type: V.Recipe
                },
                subSteps: T
            }]
        }
        let p = [];
        for (let f = 0; f < e.length; f++) {
            let g = e[f]
              , T = a[f]
              , S = m[g.name] ?? {
                name: "User Storage",
                location: "Store Item",
                ingredients: [{
                    item: g,
                    amount: 1
                }],
                type: c.Export,
                exportItem: {
                    item: g,
                    amount: 1
                },
                cost: 0,
                priority: 1,
                path: [],
                highestMultiplier: 1,
                highestMultiplierPath: []
            }
              , C = Math.ceil(T / S.exportItem.amount)
              , y = [];
            for (let R of S.ingredients)
                y.push(...h(R.item, R.amount * C));
            let v = S.exportItem.amount * S.exportItem.item.weight
              , I = S.ingredients.reduce( (R, x) => R + x.item.weight * x.amount, 0)
              , w = Math.max(v, I)
              , P = i.map(R => Math.floor(R / w))
              , b = S.ingredients.map(R => ({
                item: R.item,
                amounts: P.map(x => R.amount * x),
                vrpNames: n
            }))
              , _ = Me(S, i, n);
            p.push({
                target: {
                    item: g,
                    amount: T
                },
                solution: {
                    recipe: S,
                    recipeAmount: C,
                    optimalProcessingRecipesPerRun: P.reduce( (R, x) => R + x, 0),
                    optimalProcessingIngredientsPerRun: b,
                    maxLoadRecipesPerRun: _.recipeAmountPerRun,
                    maxLoadIngredientsPerRun: _.allocations,
                    type: V.Recipe
                },
                subSteps: y
            })
        }
        return {
            route: {
                steps: p
            },
            resultingUserStorages: u.filter(f => f.items.length > 0)
        }
    }
    function gt(e, a) {
        let i = []
          , n = [];
        function s(d, h) {
            let p = me(d, h)
              , f = i.find(g => g.id === p);
            if (f ? f.data.steps.push(d) : i.push({
                id: p,
                data: {
                    steps: [d]
                }
            }),
            h) {
                let g = me(h)
                  , T = `${p}_${g}_${Y(d.target.item.name)}`
                  , S = n.find(C => C.id === T);
                p !== g && (S ? S.data.amount += d.target.amount : n.push({
                    id: T,
                    source: p,
                    target: g,
                    data: {
                        item: d.target.item.name,
                        amount: d.target.amount
                    }
                }))
            }
            for (let g of d.subSteps)
                s(g, d)
        }
        for (let d of e.steps)
            s(d);
        let o = {
            nodes: i.map(d => ({
                ...d,
                ...da(d, a)
            })),
            links: n
        }
          , u = 0
          , l = 0
          , m = 0;
        for (let d of o.nodes) {
            let h = d.data.steps[0];
            if (h && h.solution.type === V.Recipe) {
                let p = h.solution
                  , f = d.data.steps.reduce( (S, C) => S + (C.solution.type === V.Recipe ? C.solution.recipeAmount : 0), 0)
                  , T = (p.optimalProcessingRecipesPerRun === p.maxLoadRecipesPerRun ? !0 : a) ? p.optimalProcessingRecipesPerRun : p.maxLoadRecipesPerRun;
                l += Math.ceil(f / T),
                p.recipe.cost > 0 ? u += p.recipe.cost * f : m += -p.recipe.cost * f
            }
        }
        return {
            graph: o,
            info: {
                totalCost: u,
                totalRuns: l,
                totalRevenue: m
            }
        }
    }
    function da(e, a) {
        let i = e.data.steps
          , n = i[0];
        if (!n)
            return console.warn(`Unable to find first step for node: ${e.id}`),
            {
                label: "",
                color: st,
                ingredientsPerRun: []
            };
        if (n.solution.type === V.Recipe) {
            let s = n.solution
              , o = i.reduce( (g, T) => g + (T.solution.type === V.Recipe ? T.solution.recipeAmount : 0), 0);
            isNaN(o) && console.warn(i);
            let u = s.optimalProcessingRecipesPerRun === s.maxLoadRecipesPerRun ? !0 : a
              , l = u ? s.optimalProcessingRecipesPerRun : s.maxLoadRecipesPerRun
              , m = Math.ceil(o / l)
              , d = u ? s.optimalProcessingIngredientsPerRun : s.maxLoadIngredientsPerRun
              , h = s.recipe.ingredients.map(g => {
                let T = d.find( ({item: v}) => v === g.item)
                  , S = o * g.amount
                  , C = []
                  , y = T.amounts.length;
                for (let v = 0; v < y; v++) {
                    let I = T.amounts[v]
                      , w = Math.min(S, I);
                    S -= w,
                    C.push(w)
                }
                return {
                    item: g.item,
                    amounts: C,
                    vrpNames: T.vrpNames
                }
            }
            )
              , p = s.recipe.ingredients.map( (g, T) => `${g.item.name}: ${h[T].amounts.join("x/")}x`).join(`
`);
            return {
                label: `${s.recipe.location.replace("Trucking: ", "")}
${s.recipe.name}
Runs: ${m}${p ? `
` + p : ""}`,
                color: n.solution.recipe.color ?? ct(n.solution.recipe.location)?.color ?? be,
                ingredientsPerRun: h
            }
        } else
            return {
                label: n.solution.storage.name,
                color: be,
                ingredientsPerRun: []
            }
    }
    var dt = "600 13px 'Segoe UI', Arial, sans-serif", Be = 17, ha = "400 12px 'Segoe UI', Arial, sans-serif", ft = 14, Tt = 24, re = 3, De = 1, yt = "600 8px 'Segoe UI', Arial, sans-serif", St = 5, fa = 3, Ae = 3, ue;
    function Ct() {
        if (ue === void 0)
            try {
                ue = document.createElement("canvas").getContext("2d")
            } catch {
                ue = null
            }
        return ue
    }
    function ae(e, a, i) {
        return e ? (e.font = i,
        e.measureText(a).width) : a.length * 7
    }
    async function kt(e, a, i) {
        let n = Sa(a)
          , s = await e.layout(n)
          , o = Ca(s);
        i.innerHTML = "",
        i.appendChild(o)
    }
    function Ta(e) {
        let a = e.split(`
`);
        if (a.length <= 2)
            return {
                headerLines: a,
                bodyLines: [],
                runs: null
            };
        let i = a.slice(2)
          , n = null
          , s = [];
        for (let o of i)
            o.startsWith("Runs: ") ? n = o.replace("Runs: ", "") : s.push(o);
        return {
            headerLines: a.slice(0, 2),
            bodyLines: s,
            runs: n
        }
    }
    function ya(e, a, i) {
        let n = Ct()
          , s = 0;
        for (let l of e) {
            let m = ae(n, l, dt);
            m > s && (s = m)
        }
        for (let l of a) {
            let m = ae(n, l, ha);
            m > s && (s = m)
        }
        if (i) {
            let m = ae(n, i, yt) + St * 2 + Ae * 2
              , h = (e.length > 0 ? ae(n, e[0], dt) : 0) + m;
            h > s && (s = h)
        }
        let o = e.length * Be + re * 2
          , u = a.length > 0 ? a.length * ft + re * 2 + De : 0;
        return {
            width: Math.ceil(s) + Tt,
            height: o + u
        }
    }
    function Sa(e) {
        return {
            id: "root",
            layoutOptions: {
                "elk.algorithm": "layered",
                "elk.direction": "RIGHT",
                "elk.spacing.nodeNode": "50",
                "elk.layered.spacing.nodeNodeBetweenLayers": "150",
                "elk.edgeRouting": "ORTHOGONAL",
                "elk.layered.nodePlacement.favorStraightEdges": "true",
                "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
                "elk.layered.crossingMinimization.semiInteractive": "true",
                "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
                "elk.spacing.edgeEdge": "20",
                "elk.spacing.edgeNode": "30",
                "elk.layered.unnecessaryBendpoints": "true",
                "elk.layered.spacing.edgeNodeBetweenLayers": "30",
                "elk.padding": "[100, 100, 100, 100]"
            },
            children: e.nodes.map(a => {
                let {headerLines: i, bodyLines: n, runs: s} = Ta(a.label)
                  , o = ya(i, n, s);
                return {
                    id: a.id,
                    width: o.width,
                    height: o.height,
                    data: {
                        label: a.label,
                        color: a.color,
                        headerLines: i,
                        bodyLines: n,
                        runs: s
                    }
                }
            }
            ),
            edges: e.links.map(a => ({
                id: a.id,
                sources: [a.source],
                targets: [a.target],
                data: {
                    item: a.data.item,
                    amount: a.data.amount
                }
            }))
        }
    }
    function Ca(e) {
        let a = "http://www.w3.org/2000/svg"
          , i = document.createElementNS(a, "svg")
          , n = 1 / 0
          , s = 1 / 0
          , o = -1 / 0
          , u = -1 / 0;
        e.children.forEach(g => {
            n = Math.min(n, g.x),
            s = Math.min(s, g.y),
            o = Math.max(o, g.x + g.width),
            u = Math.max(u, g.y + g.height)
        }
        ),
        n -= 50,
        s -= 50,
        o += 50,
        u += 50,
        i.dataset.width = String(o - n),
        i.dataset.height = String(u - s),
        i.setAttribute("width", "100%"),
        i.setAttribute("height", "100%"),
        i.setAttribute("viewBox", `${n} ${s} ${o - n} ${u - s}`);
        let l = document.createElementNS(a, "defs");
        i.appendChild(l);
        let m = new Set;
        e.children.forEach(g => {
            g.data.color && m.add(g.data.color)
        }
        ),
        ht(a, l, "#888", "arrowhead"),
        m.forEach(g => {
            g && ht(a, l, g, `arrowhead-${g.replace("#", "")}`)
        }
        );
        let d = document.createElementNS(a, "g");
        i.appendChild(d);
        let h = document.createElementNS(a, "g")
          , p = document.createElementNS(a, "g")
          , f = document.createElementNS(a, "g");
        return d.appendChild(h),
        d.appendChild(p),
        d.appendChild(f),
        e.edges.forEach(g => {
            let T = e.children.find(C => C.id === g.sources[0]);
            if (!T)
                return;
            let S = T.data.color ?? "#888";
            if (Ra(a, g, h, S),
            g.data) {
                let C = `${g.data.item}: ${g.data.amount}`, y = document.createElementNS(a, "text"), v, I, w = "middle";
                if (g.sections && g.sections.length > 0) {
                    let P = g.sections[0]
                      , b = [P.startPoint, ...P.bendPoints ?? [], P.endPoint];
                    if (b.length >= 2) {
                        let _ = b.length - 1
                          , R = b.length - 2
                          , x = b[R]
                          , B = b[_]
                          , A = e.children.find(z => z.id === g.targets[0])
                          , F = 15;
                        if (Math.abs(x.x - B.x) < 5)
                            v = B.x + 15,
                            I = x.y + (B.y - x.y) * .5,
                            w = "start";
                        else if (Math.abs(x.y - B.y) < 5) {
                            let z = A ? F : 0;
                            v = B.x - z,
                            I = B.y - 4,
                            w = "end"
                        } else {
                            let z = A ? F : 0;
                            v = B.x - z,
                            I = x.y + (B.y - x.y) * .8,
                            w = "end"
                        }
                    } else
                        v = b[0].x,
                        I = b[0].y
                } else
                    v = 0,
                    I = 0;
                y.setAttribute("x", String(v)),
                y.setAttribute("y", String(I - 5)),
                y.setAttribute("text-anchor", w),
                y.setAttribute("fill", "#fff"),
                y.setAttribute("stroke", "rgba(30, 30, 30, 0.8)"),
                y.setAttribute("stroke-width", "5px"),
                y.setAttribute("paint-order", "stroke"),
                y.setAttribute("stroke-linejoin", "round"),
                y.setAttribute("font-size", "11px"),
                y.setAttribute("font-family", "Arial, sans-serif"),
                y.textContent = C,
                f.appendChild(y)
            }
        }
        ),
        e.children.forEach(g => {
            ka(a, g, p).setAttribute("data-id", g.id)
        }
        ),
        i
    }
    function ht(e, a, i, n) {
        let s = document.createElementNS(e, "marker");
        s.setAttribute("id", n),
        s.setAttribute("markerWidth", "6"),
        s.setAttribute("markerHeight", "4"),
        s.setAttribute("refX", "6"),
        s.setAttribute("refY", "2"),
        s.setAttribute("orient", "auto");
        let o = document.createElementNS(e, "polygon");
        o.setAttribute("points", "0 0, 6 2, 0 4"),
        o.setAttribute("fill", i),
        s.appendChild(o),
        a.appendChild(s)
    }
    function ka(e, a, i) {
        let n = document.createElementNS(e, "g");
        n.classList.add("node");
        let s = a.x
          , o = a.y
          , u = a.width
          , l = a.height
          , m = a.data.color ?? "#ddd"
          , d = lt(m)
          , {headerLines: h, bodyLines: p, runs: f} = a.data
          , g = document.createElementNS(e, "rect");
        g.classList.add("node-bg"),
        g.setAttribute("x", String(s)),
        g.setAttribute("y", String(o)),
        g.setAttribute("width", String(u)),
        g.setAttribute("height", String(l)),
        g.setAttribute("fill", m),
        g.setAttribute("rx", "10"),
        g.setAttribute("ry", "10"),
        g.setAttribute("stroke", "rgba(255,255,255,0.1)"),
        g.setAttribute("stroke-width", "1"),
        n.appendChild(g);
        let T = h.length * Be + re * 2
          , S = s + u / 2
          , C = h.length === 1
          , y = C ? o + l / 2 : o + re
          , v = C ? "middle" : "hanging"
          , I = document.createElementNS(e, "text");
        if (I.setAttribute("x", String(S)),
        I.setAttribute("y", String(y)),
        I.setAttribute("text-anchor", "middle"),
        I.setAttribute("fill", d),
        I.setAttribute("font-family", "'Segoe UI', Arial, sans-serif"),
        I.setAttribute("font-size", "13"),
        I.setAttribute("font-weight", "600"),
        I.setAttribute("dominant-baseline", v),
        h.forEach( (w, P) => {
            let b = document.createElementNS(e, "tspan");
            b.setAttribute("x", String(S)),
            b.setAttribute("dy", P === 0 ? "0" : `${Be}px`),
            b.textContent = w || " ",
            I.appendChild(b)
        }
        ),
        n.appendChild(I),
        f) {
            let w = f
              , P = Ct()
              , _ = ae(P, w, yt) + St * 2
              , R = 10 + fa * 2
              , x = s + u - _ - Ae
              , B = o + Ae
              , A = document.createElementNS(e, "rect");
            A.setAttribute("x", String(x)),
            A.setAttribute("y", String(B)),
            A.setAttribute("width", String(_)),
            A.setAttribute("height", String(R)),
            A.setAttribute("fill", "rgba(0,0,0,0.3)"),
            A.setAttribute("rx", "6"),
            A.setAttribute("ry", "6"),
            n.appendChild(A);
            let F = document.createElementNS(e, "text");
            F.setAttribute("x", String(x + _ / 2)),
            F.setAttribute("y", String(B + R / 2 + 1.5)),
            F.setAttribute("text-anchor", "middle"),
            F.setAttribute("dominant-baseline", "middle"),
            F.setAttribute("fill", "#fff"),
            F.setAttribute("font-family", "'Segoe UI', Arial, sans-serif"),
            F.setAttribute("font-size", "10"),
            F.setAttribute("font-weight", "600"),
            F.textContent = w,
            n.appendChild(F)
        }
        if (p.length > 0) {
            let w = o + T
              , P = Tt / 2
              , b = document.createElementNS(e, "rect");
            b.classList.add("node-divider"),
            b.setAttribute("x", String(s + P)),
            b.setAttribute("y", String(w)),
            b.setAttribute("width", String(u - P * 2)),
            b.setAttribute("height", String(De)),
            b.setAttribute("fill", "rgba(255,255,255,0.4)"),
            b.setAttribute("rx", "0.5"),
            n.appendChild(b);
            let _ = w + De + re
              , R = document.createElementNS(e, "text");
            R.setAttribute("x", String(S)),
            R.setAttribute("y", String(_)),
            R.setAttribute("text-anchor", "middle"),
            R.setAttribute("fill", d),
            R.setAttribute("font-family", "'Segoe UI', Arial, sans-serif"),
            R.setAttribute("font-size", "11"),
            R.setAttribute("font-weight", "400"),
            R.setAttribute("dominant-baseline", "hanging"),
            R.setAttribute("opacity", "0.85"),
            p.forEach( (x, B) => {
                let A = document.createElementNS(e, "tspan");
                A.setAttribute("x", String(S)),
                A.setAttribute("dy", B === 0 ? "0" : `${ft}px`),
                A.textContent = x || " ",
                R.appendChild(A)
            }
            ),
            n.appendChild(R)
        }
        return i.appendChild(n),
        n
    }
    function Ra(e, a, i, n="#888") {
        if (!a.sections || a.sections.length === 0)
            return null;
        let s = document.createElementNS(e, "g");
        return s.classList.add("edge"),
        a.sections.forEach(o => {
            let u = document.createElementNS(e, "path")
              , l = `M ${o.startPoint.x} ${o.startPoint.y}`;
            o.bendPoints && o.bendPoints.length > 0 && o.bendPoints.forEach(m => {
                l += ` L ${m.x} ${m.y}`
            }
            ),
            l += ` L ${o.endPoint.x} ${o.endPoint.y}`,
            u.setAttribute("d", l),
            u.setAttribute("stroke", n),
            u.setAttribute("stroke-width", "2.5"),
            u.setAttribute("fill", "none"),
            u.setAttribute("stroke-linecap", "round"),
            u.setAttribute("stroke-linejoin", "round"),
            u.setAttribute("opacity", "0.7"),
            u.setAttribute("marker-end", `url(#arrowhead-${n.replace("#", "")})`),
            s.appendChild(u)
        }
        ),
        i.appendChild(s),
        s
    }
    var Ia = ["trailerlarge"];
    var va = "crafted_concrete";
    var Rt = "https://tycoon-2epova.users.cfx.re/status/"
      , wa = "https://d.ttstats.eu/public-main/status/";
    var _a = {
        STORAGE_DATA_VERSION: 2,
        MAX_LOGS: 1e3,
        ZOOM_SENSITIVITY: .1,
        PANNING_DETECTION_SENSITIVITY: 3,
        DEFAULT_SCALE: 1,
        DEFAULT_TRANSLATE_X: 0,
        DEFAULT_TRANSLATE_Y: 0,
        DEFAULT_NODE_OPACITY: 100,
        DEFAULT_BG_OPACITY: 100,
        DEFAULT_PIN_PANEL_OPACITY: 0,
        REFRESH_IMMEDIATE_DELAY: 25,
        DEFAULT_AMOUNT: 500,
        DEFAULT_VEHICLES: Ia,
        DEFAULT_USE_INVENTORY: !0,
        DEFAULT_USE_OPTIMAL_LOADING: !0,
        DEFAULT_USE_ITEMS: !0,
        DEFAULT_ITEM_TYPE: va,
        DEFAULT_CONSOLE_FILTER: "all",
        DEFAULT_API_URL: Rt,
        ALTERNATIVE_API_URL: wa,
        NUI_TIMEOUT: 10,
        NUI_RETRIES: 300,
        NUI_SUBMIT_TIMEOUT: 5,
        NUI_SUBMIT_RETRIES: 200,
        NUI_EXTRA_DELAY: 10,
        NUI_AUTO_RECIPE_INTERVAL: 50,
        logs: [],
        cache: {},
        scale: 1,
        translateX: 0,
        translateY: 0,
        isPanning: !1,
        wasPanning: !1,
        hasMoved: !1,
        startPanX: 0,
        startPanY: 0,
        lastMouseX: 0,
        lastMouseY: 0,
        storages: [],
        currentNodeOpacity: 100,
        currentBgOpacity: 100,
        currentPinPanelOpacity: 0,
        runningInGame: !1,
        pendingRefresh: !1,
        refreshTimeout: null,
        storagesUpdatedSinceLastRefresh: !1,
        isRefreshing: !1,
        pinnedNodeId: null,
        pinnedNodePosition: null,
        boundWheel: null,
        boundMouseDown: null,
        boundMouseMove: null,
        boundMouseUp: null,
        boundClick: null,
        boundDblClick: null,
        boundBlurActive: null,
        elk: new window.ELK,
        currentRouteData: null,
        pinPanelPosition: {
            x: null,
            y: null
        },
        pinPanelSize: {
            width: 300,
            height: 300
        },
        defaultRecipePriorities: {},
        selectedItems: [],
        customRecipeIngredients: [],
        customRecipeProducts: [],
        updatingTrunks: !1,
        loggedVisit: !1,
        lastPotentialTransfer: null,
        apiUrl: Rt,
        autoRecipeInterval: null,
        executingNuiActions: !1,
        executingNuiAutoRecipe: !1,
        keybindsEnabled: !1
    }
      , r = _a;
    function K(e) {
        let a = document.getElementById("premium").checked
          , i = document.getElementById("farmersMilk").checked
          , n = document.getElementById("perk").value
          , s = e ? [Z] : [];
        if (document.getElementById("mk15").checked) {
            let d = W("mk15");
            d ? s.push(d) : console.error("Storage not found for mk15")
        }
        let o = document.getElementById("trailer").value;
        if (o) {
            let d = W(o);
            d ? s.push(d) : console.error(`Storage not found for trailer: ${o}`)
        }
        let u = 1 + (a ? .15 : 0) + (i ? .2 : 0) + (n === "postop" ? .15 : 0)
          , l = 1 + (a ? .15 : 0) + (i ? .5 : 0) + (n === "strength" ? 1 : 0)
          , m = [];
        for (let d of s) {
            let h = d.id
              , p = r.storages.find(f => f.storage.id === h);
            p ? m.push({
                ...p,
                storage: {
                    ...p.storage,
                    size: p.storage.type === k.Inventory ? Math.round((p.storage.size ?? 0) * l) : Math.round((p.storage.size ?? 0) * u)
                }
            }) : (console.warn(`Active storage not found in state: ${h}, creating custom`),
            m.push({
                items: [],
                storage: {
                    ...d,
                    size: d.type === k.Inventory ? Math.round((d.size ?? 0) * l) : Math.round((d.size ?? 0) * u)
                }
            }))
        }
        return m.sort( (d, h) => (h.storage.size ?? 0) - (d.storage.size ?? 0))
    }
    function Na() {
        let e = document.querySelector(".console-content")
          , a = {
            log: console.log,
            warn: console.warn,
            error: console.error,
            info: console.info
        }
          , i = localStorage.getItem("consoleVisible") === "true"
          , n = document.getElementById("console-container");
        n && n.classList.toggle("hidden", !i);
        let s = document.querySelectorAll(".console-filter")
          , o = localStorage.getItem("consoleFilter") || r.DEFAULT_CONSOLE_FILTER;
        s.forEach(m => {
            m.addEventListener("click", () => {
                s.forEach(h => h.classList.remove("active")),
                m.classList.add("active");
                let d = m.getAttribute("data-type") ?? "all";
                e.classList.remove("filter-log", "filter-info", "filter-warn", "filter-error"),
                d !== "all" && e.classList.add(`filter-${d}`),
                localStorage.setItem("consoleFilter", d)
            }
            ),
            m.getAttribute("data-type") === o && m.click()
        }
        );
        function u(m, d) {
            if (!e)
                return;
            let h = document.createElement("div");
            h.className = m;
            let p = new Date().toLocaleTimeString()
              , f = Array.from(d).map(g => g instanceof Error ? `${g.message}
${g.stack}` : typeof g == "object" ? JSON.stringify(g) : String(g)).join(" ");
            if (h.innerHTML = `<span class="timestamp">[${p}]</span> ${f}`,
            e.appendChild(h),
            e.scrollTop = e.scrollHeight,
            r.logs.push(h),
            r.logs.length > r.MAX_LOGS) {
                let g = r.logs.shift();
                g && g.parentNode && g.parentNode.removeChild(g)
            }
        }
        console.log = function() {
            u("log", arguments),
            a.log.apply(console, arguments)
        }
        ,
        console.warn = function() {
            u("warn", arguments),
            a.warn.apply(console, arguments)
        }
        ,
        console.error = function() {
            u("error", arguments),
            a.error.apply(console, arguments)
        }
        ,
        console.info = function() {
            u("info", arguments),
            a.info.apply(console, arguments)
        }
        ,
        window.onerror = function(m, d, h, p, f) {
            let g = [`Error: ${m}`, `at ${d}:${h}:${p}`, f ? f.stack : ""];
            return u("error", g),
            !1
        }
        ,
        window.addEventListener("unhandledrejection", function(m) {
            let d = ["Unhandled Promise Rejection:", m.reason];
            u("error", d)
        });
        let l = document.getElementById("console-code-input");
        l && l.addEventListener("keydown", function(m) {
            (m.ctrlKey || m.metaKey) && m.key === "Enter" && (m.preventDefault(),
            It())
        }),
        console.info("Console initialized")
    }
    function ba() {
        let a = !document.getElementById("console-container").classList.toggle("hidden");
        localStorage.setItem("consoleVisible", a ? "true" : "false")
    }
    function Ea() {
        let e = document.querySelector(".console-content");
        for (; e.firstChild; )
            e.removeChild(e.firstChild);
        r.logs.length = 0
    }
    function It() {
        let e = document.getElementById("console-code-input")
          , a = e.value.trim();
        if (a) {
            console.log(`> ${a}`);
            try {
                let i = new Blob([a],{
                    type: "text/javascript"
                })
                  , n = URL.createObjectURL(i);
                import(n).then(s => {
                    if (s.default !== void 0)
                        console.log("< ", s.default);
                    else {
                        let o = Object.keys(s);
                        o.length > 0 && (console.log("< Exported:", o.join(", ")),
                        o.forEach(u => {
                            console.log(`< ${u}:`, s[u])
                        }
                        ))
                    }
                    URL.revokeObjectURL(n)
                }
                ).catch(s => {
                    console.error(`Error: ${s.message}`),
                    URL.revokeObjectURL(n)
                }
                )
            } catch (i) {
                console.error(`Error: ${i.message}`)
            }
            e.select()
        }
    }
    window.toggleConsole = ba;
    window.clearConsole = Ea;
    window.executeConsoleCode = It;
    Na();
    function Pa() {
        window.location.reload()
    }
    window.reloadApp = Pa;
    document.getElementById("amount").addEventListener("change", e => {
        localStorage.setItem("amount", e.target.value),
        E()
    }
    );
    document.getElementById("itemType").addEventListener("change", e => {
        localStorage.setItem("itemType", e.target.value),
        E()
    }
    );
    document.getElementById("premium").addEventListener("change", e => {
        localStorage.setItem("premium", e.target.checked ? "true" : "false"),
        E()
    }
    );
    document.getElementById("alternativeApi").addEventListener("change", e => {
        localStorage.setItem("alternativeApi", e.target.checked ? "true" : "false"),
        e.target.checked ? r.apiUrl = r.ALTERNATIVE_API_URL : r.apiUrl = r.DEFAULT_API_URL
    }
    );
    document.getElementById("farmersMilk").addEventListener("change", e => {
        localStorage.setItem("farmersMilk", e.target.checked ? "true" : "false"),
        E()
    }
    );
    document.getElementById("mk15").addEventListener("change", () => {
        Le(),
        E()
    }
    );
    document.getElementById("trailer").addEventListener("change", () => {
        Le(),
        E()
    }
    );
    document.getElementById("useOptimalLoading").addEventListener("change", e => {
        localStorage.setItem("useOptimalLoading", e.target.checked ? "true" : "false"),
        E()
    }
    );
    document.getElementById("useItems").addEventListener("change", e => {
        localStorage.setItem("useItems", e.target.checked ? "true" : "false"),
        E()
    }
    );
    document.getElementById("useInventory").addEventListener("change", e => {
        localStorage.setItem("useInventory", e.target.checked ? "true" : "false"),
        E()
    }
    );
    document.getElementById("perk").addEventListener("change", e => {
        localStorage.setItem("perk", e.target.value),
        E()
    }
    );
    document.getElementById("takeMax").addEventListener("change", e => {
        localStorage.setItem("takeMax", e.target.checked ? "true" : "false")
    }
    );
    document.getElementById("dumpBeforeExecuting").addEventListener("change", e => {
        localStorage.setItem("dumpBeforeExecuting", e.target.checked ? "true" : "false")
    }
    );
    document.getElementById("autoOpenTrunk").addEventListener("change", e => {
        localStorage.setItem("autoOpenTrunk", e.target.checked ? "true" : "false")
    }
    );
    document.getElementById("autoCloseTrunk").addEventListener("change", e => {
        localStorage.setItem("autoCloseTrunk", e.target.checked ? "true" : "false")
    }
    );
    document.getElementById("autoRecipe").addEventListener("change", e => {
        localStorage.setItem("autoRecipe", e.target.checked ? "true" : "false"),
        E()
    }
    );
    document.getElementById("useHighestMultiplier").addEventListener("change", e => {
        localStorage.setItem("useHighestMultiplier", e.target.checked ? "true" : "false"),
        E()
    }
    );
    document.getElementById("truckingItemToTake").addEventListener("change", e => {
        localStorage.setItem("truckingItemToTake", e.target.value)
    }
    );
    document.getElementById("custom-recipe-ingredient-type").addEventListener("change", e => {
        localStorage.setItem("custom-recipe-ingredient-type", e.target.value)
    }
    );
    document.getElementById("custom-recipe-ingredient-amount").addEventListener("change", e => {
        localStorage.setItem("custom-recipe-ingredient-amount", e.target.value)
    }
    );
    document.getElementById("custom-recipe-product-type").addEventListener("change", e => {
        localStorage.setItem("custom-recipe-product-type", e.target.value)
    }
    );
    document.getElementById("custom-recipe-product-amount").addEventListener("change", e => {
        localStorage.setItem("custom-recipe-product-amount", e.target.value)
    }
    );
    var vt = !1;
    function xa() {
        U.forEach(e => {
            let a = e.defaultPriority ?? G;
            if (a !== void 0) {
                e.priority = a;
                let i = document.getElementById(`storage-priority-${e.id}`);
                i && (i.value = a.toString())
            }
        }
        ),
        localStorage.setItem("storagePriorities", JSON.stringify({})),
        E()
    }
    function Ma(e) {
        let a = document.getElementById(`storage-priority-${e}`)
          , i = U.find(n => n.id === e);
        if (i) {
            let n = i.defaultPriority ?? G;
            a && (a.value = n.toString()),
            i.priority = n
        } else
            console.warn(`Storage with ID ${e} not found.`);
        de(),
        E()
    }
    function wt(e, a) {
        let i = parseInt(a.toString());
        if (!isNaN(i)) {
            let n = U.find(s => s.id === e);
            n ? (n.priority = i,
            de(),
            E()) : console.warn(`Storage with ID ${e} not found.`)
        }
    }
    function Ba(e, a) {
        let i = document.getElementById(`storage-priority-${e}`)
          , s = (parseInt(i.value) ?? G) + a;
        i.value = s.toString(),
        wt(e, s)
    }
    function ge() {
        vt || (vt = !0,
        U.forEach(e => {
            e.priority === void 0 && (console.warn(`Storage ${e.id} has no priority set. Setting to default.`),
            e.priority = G),
            e.defaultPriority = e.priority
        }
        ));
        try {
            let e = JSON.parse(localStorage.getItem("storagePriorities") ?? "{}");
            U.forEach(a => {
                e[a.id] !== void 0 ? a.priority = e[a.id] : a.priority === void 0 && (a.priority = a.defaultPriority)
            }
            )
        } catch (e) {
            console.error("Failed to load storage priorities:", e),
            localStorage.removeItem("storagePriorities")
        }
    }
    function de() {
        let e = {};
        U.forEach(a => {
            let i = a.defaultPriority ?? G;
            a.priority !== void 0 && a.priority !== i && (e[a.id] = a.priority)
        }
        ),
        localStorage.setItem("storagePriorities", JSON.stringify(e))
    }
    window.resetAllStoragePriorities = xa;
    window.resetStoragePriority = Ma;
    window.changeStoragePriority = Ba;
    window.updateStoragePriority = wt;
    function Da() {
        let e = document.getElementById("storage-list");
        if (e.innerHTML = "",
        r.storages.length === 0) {
            e.innerHTML = '<div class="no-storages">No storages found. Please make sure you have entered your API key and refreshed your data.</div>';
            return
        }
        ge(),
        [...r.storages].sort( (i, n) => {
            let s = (n.priority ?? G) - (i.priority ?? G);
            return s !== 0 ? s : n.items.length - i.items.length
        }
        ).forEach(i => {
            let n = document.createElement("div");
            n.className = "storage-group";
            let s = i.storage.id
              , o = document.createElement("div");
            o.className = "storage-header";
            let u = document.createElement("span");
            u.className = `storage-type-badge badge-${i.storage.type.toLowerCase()}`,
            u.textContent = i.storage.type.charAt(0).toUpperCase() + i.storage.type.slice(1),
            o.innerHTML = `
            <span style="color: white;">${i.storage.name} ${`(${i.items.length} items)`}</span>
            <span class="storage-toggle">\u25BC</span>
        `,
            o.insertBefore(u, o.firstChild.nextSibling),
            o.addEventListener("click", () => {
                let d = n.querySelector(".storage-content")
                  , h = o.querySelector(".storage-toggle");
                d.classList.toggle("collapsed"),
                h.classList.toggle("collapsed")
            }
            );
            let l = document.createElement("div");
            l.className = "storage-content";
            let m = document.createElement("div");
            if (m.className = "storage-priority-section",
            m.innerHTML = `
			<div class="priority-label">Priority:</div>
			<div class="priority-controls">
				<button onclick="changeStoragePriority('${s}', -1)">-</button>
				<input type="number" value="${i.storage.priority ?? G}" 
					onchange="updateStoragePriority('${s}', this.value)" 
					id="storage-priority-${s}" />
				<button onclick="changeStoragePriority('${s}', 1)">+</button>
			</div>
			<button class="reset-storage" title="Reset to default priority" onclick="resetStoragePriority('${s}')">
				Reset (${i.storage.defaultPriority ?? G})
			</button>
		`,
            l.appendChild(m),
            i.items.length === 0) {
                let d = document.createElement("div");
                d.className = "storage-empty",
                d.textContent = "This storage is empty.",
                l.appendChild(d)
            } else {
                let d = document.createElement("table");
                d.className = "storage-table";
                let h = document.createElement("tbody");
                [...i.items].sort( (f, g) => g.amount - f.amount).forEach( ({item: f, amount: g}) => {
                    let T = document.createElement("tr");
                    T.dataset.name = f.name.toLowerCase(),
                    T.dataset.isTruckingItem = f.isTruckingItem ? "true" : "false";
                    let S = document.createElement("td");
                    S.className = f.isTruckingItem ? "item-name trucking-item" : "item-name",
                    S.innerHTML = `${f.name}${f.isTruckingItem ? '<span class="trucking-badge">T</span>' : ""}`;
                    let C = f.weight * g
                      , y = document.createElement("td");
                    y.className = "item-amount",
                    y.textContent = `${g.toLocaleString()} (${C.toLocaleString()} kg)`,
                    T.appendChild(S),
                    T.appendChild(y),
                    h.appendChild(T)
                }
                ),
                d.appendChild(h),
                l.appendChild(d)
            }
            n.appendChild(o),
            n.appendChild(l),
            e.appendChild(n),
            i.items.length === 0 && o.click()
        }
        )
    }
    function Aa() {
        document.getElementById("storage-ui-modal").classList.remove("hidden"),
        document.getElementById("storage-search").value = "",
        document.getElementById("trucking-items-only").checked = !1,
        Da()
    }
    function La() {
        document.getElementById("storage-ui-modal").classList.add("hidden"),
        de()
    }
    function Fa() {
        let e = document.getElementById("storage-search").value.toLowerCase()
          , a = document.getElementById("trucking-items-only").checked
          , i = document.querySelectorAll(".storage-table tr")
          , n = document.querySelectorAll(".storage-group")
          , s = new Map;
        i.forEach(o => {
            let u = o.dataset.name
              , l = o.dataset.isTruckingItem === "true";
            if ((!e || (u ?? "").includes(e)) && (!a || l)) {
                o.style.display = "";
                let h = o.closest(".storage-group");
                if (h) {
                    let p = s.get(h) ?? 0;
                    s.set(h, p + 1)
                }
            } else
                o.style.display = "none"
        }
        ),
        n.forEach(o => {
            let u = s.get(o) ?? 0
              , l = o.querySelector(".storage-empty:not(.no-matches)")
              , m = o.querySelector(".storage-content")
              , d = o.querySelector(".storage-header").querySelector("span:nth-child(2)");
            if (d?.textContent) {
                let p = d.textContent.split("(")[0].trim();
                d.textContent = `${p} (${u} items)`
            }
            let h = o.querySelector(".no-matches");
            if (h && h.remove(),
            u === 0 && !l) {
                let p = document.createElement("div");
                p.className = "storage-empty no-matches",
                p.textContent = "No items match your filter criteria.",
                m.appendChild(p)
            }
            o.style.display = ""
        }
        )
    }
    window.openStoragesUI = Aa;
    window.filterStorageItems = Fa;
    window.closeStoragesUI = La;
    function Fe(e, a, i) {
        if (!["in", "out"].includes(e)) {
            console.error("Invalid transfer type:", e);
            return
        }
        if (!i || !i.length) {
            console.warn("No items to log in transfer");
            return
        }
        let n = _t();
        n.unshift({
            type: e,
            player: a,
            items: i,
            timestamp: Date.now()
        }),
        localStorage.setItem("transferLogs", JSON.stringify(n))
    }
    function _t() {
        try {
            return JSON.parse(localStorage.getItem("transferLogs") || "[]")
        } catch (e) {
            return console.error("Failed to parse transfer logs:", e),
            []
        }
    }
    function Va() {
        localStorage.setItem("transferLogs", "[]")
    }
    function Nt(e="all", a="") {
        return _t().filter(n => {
            if (e !== "all" && n.type !== e)
                return !1;
            if (a) {
                let s = a.toLowerCase()
                  , o = n.player.toLowerCase().includes(s)
                  , u = n.items.some(l => l.name.toLowerCase().includes(s));
                return o || u
            }
            return !0
        }
        )
    }
    window.clearTransferLogs = Va;
    function Oa() {
        document.getElementById("transfers-ui-modal").classList.remove("hidden"),
        document.getElementById("transfer-search").value = "",
        document.getElementById("transfer-type-filter").value = "all",
        bt()
    }
    function he() {
        document.getElementById("transfers-ui-modal").classList.add("hidden")
    }
    function bt() {
        let e = document.getElementById("transfers-list");
        e.innerHTML = "";
        let a = document.getElementById("transfer-search").value
          , i = document.getElementById("transfer-type-filter").value
          , n = Nt(i, a);
        if (n.length === 0) {
            e.innerHTML = '<div class="no-transfers">No transfers found.</div>';
            return
        }
        let s = {};
        n.forEach(o => {
            let l = new Date(o.timestamp).toLocaleDateString();
            s[l] || (s[l] = []),
            s[l].push(o)
        }
        ),
        Object.entries(s).forEach( ([o,u]) => {
            let l = document.createElement("div");
            l.className = "transfer-day-group";
            let m = document.createElement("div");
            m.className = "transfer-day-header",
            m.textContent = o,
            l.appendChild(m),
            u.forEach(d => {
                let h = document.createElement("div");
                h.className = `transfer-entry transfer-${d.type}`;
                let f = new Date(d.timestamp).toLocaleTimeString()
                  , g = d.items.reduce( (w, P) => w + P.amount, 0)
                  , T = document.createElement("div");
                T.className = "transfer-header";
                let S = document.createElement("span");
                S.className = `transfer-icon transfer-${d.type}-icon`,
                S.innerHTML = d.type === "in" ? "\u2190" : "\u2192";
                let C = document.createElement("div");
                C.className = "transfer-info";
                let y = document.createElement("div");
                y.className = "transfer-title",
                y.innerHTML = d.type === "in" ? `<strong>${d.player}</strong> sent you ${g} items` : `You sent <strong>${d.player}</strong> ${g} items`;
                let v = document.createElement("div");
                v.className = "transfer-time",
                v.textContent = f,
                C.appendChild(y),
                C.appendChild(v),
                T.appendChild(S),
                T.appendChild(C),
                h.appendChild(T);
                let I = document.createElement("div");
                I.className = "transfer-items",
                d.items.forEach(w => {
                    let P = document.createElement("div");
                    P.className = "transfer-item",
                    P.innerHTML = `<span class="item-name">${w.name}</span> <span class="item-amount">${w.amount.toLocaleString()}</span>`,
                    I.appendChild(P)
                }
                ),
                h.appendChild(I),
                l.appendChild(h)
            }
            ),
            e.appendChild(l)
        }
        )
    }
    function Ga() {
        bt()
    }
    window.openTransfersUI = Oa;
    window.closeTransfersUI = he;
    window.filterTransfers = Ga;
    function Ua() {
        O.forEach(e => {
            e.recipes.forEach(a => {
                let i = `${e.name}:${a.name}`
                  , n = r.defaultRecipePriorities[i] ?? 0;
                if (n !== void 0) {
                    a.priority = n;
                    let s = document.getElementById(`priority-${i}`);
                    s && (s.value = n.toString())
                }
            }
            )
        }
        ),
        localStorage.setItem("recipePriorities", JSON.stringify({}))
    }
    function Et(e) {
        let a = r.defaultRecipePriorities[e] ?? 0
          , i = document.getElementById(`priority-${e}`);
        i && (i.value = a.toString());
        for (let n of O)
            for (let s of n.recipes)
                if (`${n.name}:${s.name}` === e) {
                    s.priority = a;
                    return
                }
        console.warn(`Could not find recipe ${e} to reset the priority of.`)
    }
    function za(e) {
        let[a,i] = e.split(":");
        if (a !== "Custom Recipes") {
            console.warn(`Delete custom recipe with invalid recipe: ${e}`);
            return
        }
        let n = O.find(s => s.name === "Custom Recipes");
        if (n) {
            let s = n.recipes.findIndex(o => o.name === i);
            s !== -1 ? (n.recipes.splice(s, 1),
            Et(e),
            Oe(),
            E(),
            xt()) : console.warn("Could not find custom recipe in Custom Recipes")
        } else
            console.warn("Could not find Custom Recipes location to delete recipe from")
    }
    function Pt(e, a) {
        let i = parseInt(a.toString());
        if (!isNaN(i)) {
            for (let n of O)
                for (let s of n.recipes)
                    if (`${n.name}:${s.name}` === e) {
                        s.priority = i;
                        return
                    }
        }
        console.warn(`Failed to find recipe ${e} to set priority`)
    }
    function Ha(e, a) {
        let i = document.getElementById(`priority-${e}`)
          , s = (parseInt(i.value) || 0) + a;
        i.value = s.toString(),
        Pt(e, s)
    }
    function Ve() {
        Object.keys(r.defaultRecipePriorities).length === 0 && O.forEach(e => {
            e.recipes.forEach(a => {
                let i = `${e.name}:${a.name}`;
                r.defaultRecipePriorities[i] = a.priority
            }
            )
        }
        );
        try {
            let e = JSON.parse(localStorage.getItem("recipePriorities") || "{}");
            O.forEach(a => {
                a.recipes.forEach(i => {
                    let n = `${a.name}:${i.name}`;
                    e[n] !== void 0 && (i.priority = e[n])
                }
                )
            }
            )
        } catch (e) {
            console.error("Failed to load recipe priorities:", e)
        }
    }
    function Wa() {
        document.getElementById("recipe-settings-modal").classList.remove("hidden"),
        Ve(),
        document.getElementById("recipe-search").value = "",
        xt()
    }
    function xt() {
        let e = document.getElementById("recipe-list");
        e.innerHTML = "";
        let a = [];
        O.forEach(i => {
            let n = i.name
              , s = i.recipes.map(o => {
                let u = `${n}:${o.name}`;
                return {
                    id: u,
                    name: o.name,
                    locationName: i.name,
                    locationColor: i.color,
                    type: o.type,
                    currentPriority: o.priority,
                    defaultPriority: r.defaultRecipePriorities[u] ?? 0,
                    recipe: o
                }
            }
            );
            a.push({
                location: i.name,
                color: i.color,
                recipes: s
            })
        }
        ),
        a.sort( (i, n) => i.location.localeCompare(n.location)),
        a.forEach(i => {
            let n = i.color || "#808080"
              , s = document.createElement("div");
            s.className = "location-group";
            let o = document.createElement("div");
            o.className = "location-header",
            o.innerHTML = `
			<span style="color: ${n}">${i.location}</span>
			<span class="location-toggle">\u25BC</span>
		`,
            o.addEventListener("click", () => {
                let l = s.querySelector(".location-recipes")
                  , m = o.querySelector(".location-toggle");
                l.classList.toggle("collapsed"),
                m.classList.toggle("collapsed")
            }
            );
            let u = document.createElement("div");
            u.className = "location-recipes",
            i.recipes.sort( (l, m) => l.name.localeCompare(m.name)),
            i.recipes.forEach(l => {
                let m = document.createElement("div");
                m.className = "recipe-item",
                m.dataset.id = l.id,
                m.dataset.name = l.name.toLowerCase(),
                m.dataset.location = l.locationName.toLowerCase();
                let d = Ka(l)
                  , h = document.createElement("div");
                h.className = "recipe-priority-section",
                h.innerHTML = `
				<div class="priority-label">Priority:</div>
				<div class="priority-controls">
					<button onclick="changePriority('${l.id}', -1)">-</button>
					<input type="number" value="${l.currentPriority}" 
						onchange="updatePriority('${l.id}', this.value)" 
						id="priority-${l.id}" />
					<button onclick="changePriority('${l.id}', 1)">+</button>
				</div>
				<button class="reset-recipe" title="Reset to default priority" onclick="resetRecipePriority('${l.id}')">
					Reset (${l.defaultPriority})
				</button>${i.location === "Custom Recipes" ? `
				<button class="delete-recipe" title="Delete" onclick="deleteCustomRecipe('${l.id}')">
					Delete
				</button>` : ""}
			`,
                m.appendChild(d),
                m.appendChild(h),
                u.appendChild(m)
            }
            ),
            s.appendChild(o),
            s.appendChild(u),
            e.appendChild(s)
        }
        )
    }
    function Ka(e) {
        let a = e.recipe
          , i = document.createElement("div");
        i.className = "recipe-node";
        let n = document.createElement("div");
        n.className = "recipe-node-header";
        let s = document.createElement("span");
        s.className = "recipe-type-badge",
        s.textContent = e.type === "export" ? "Export" : e.type === "import" ? "Import" : "Recipe",
        s.classList.add(e.type === "export" ? "export-badge" : e.type === "import" ? "import-badge" : "recipe-badge");
        let o = document.createElement("h3");
        o.className = "recipe-node-name",
        o.textContent = e.name,
        n.appendChild(o),
        n.appendChild(s);
        let u = document.createElement("div");
        u.className = "recipe-cost";
        let l = a.cost;
        u.innerHTML = l < 0 ? `Revenue: <span class="profit">$${Math.abs(l).toLocaleString()}</span>` : `Cost: <span class="expense">$${l.toLocaleString()}</span>`;
        let m = document.createElement("div");
        m.className = "recipe-details-container";
        let d = a.ingredients.length > 0
          , h = null;
        if ((a.type === "recipe" || a.type === "import") && a.products.length > 0) {
            h = document.createElement("div"),
            h.className = "recipe-products";
            let p = document.createElement("h4");
            p.textContent = "Products:",
            h.appendChild(p);
            let f = document.createElement("ul");
            a.products.forEach(g => {
                let T = document.createElement("li");
                T.innerHTML = `<span class="item-amount">${g.amount}\xD7</span> <span class="item-name">${g.item.name}</span>`,
                f.appendChild(T)
            }
            ),
            h.appendChild(f)
        }
        if (!d && h && m.appendChild(h),
        d) {
            let p = document.createElement("div");
            p.className = "recipe-ingredients";
            let f = document.createElement("h4");
            f.textContent = "Ingredients:",
            p.appendChild(f);
            let g = document.createElement("ul");
            a.ingredients.forEach(T => {
                let S = document.createElement("li");
                S.innerHTML = `<span class="item-amount">${T.amount}\xD7</span> <span class="item-name">${T.item.name}</span>`,
                g.appendChild(S)
            }
            ),
            p.appendChild(g),
            m.appendChild(p),
            h && m.appendChild(h)
        }
        return i.appendChild(n),
        i.appendChild(u),
        i.appendChild(m),
        i
    }
    function fe() {
        let e = {};
        O.forEach(a => {
            a.recipes.forEach(i => {
                let n = `${a.name}:${i.name}`
                  , s = r.defaultRecipePriorities[n];
                i.priority !== s && (e[n] = i.priority)
            }
            )
        }
        ),
        localStorage.setItem("recipePriorities", JSON.stringify(e)),
        Mt(),
        E()
    }
    function Mt() {
        document.getElementById("recipe-settings-modal").classList.add("hidden")
    }
    window.resetPriorities = Ua;
    window.resetRecipePriority = Et;
    window.deleteCustomRecipe = za;
    window.changePriority = Ha;
    window.updatePriority = Pt;
    window.openRecipeSettings = Wa;
    window.saveRecipeSettings = fe;
    window.closeRecipeSettings = Mt;
    function Bt() {
        return r.selectedItems
    }
    function $a() {
        let e = document.getElementById("itemType")
          , a = document.getElementById("amount")
          , i = e.value
          , n = parseInt(a.value) || 0;
        if (!i || n <= 0) {
            let o = document.getElementById("error");
            o.textContent = "Please select an item and enter a valid amount";
            return
        }
        let s = r.selectedItems.findIndex(o => o.itemId === i);
        s !== -1 ? r.selectedItems[s].amount += n : r.selectedItems.push({
            itemId: i,
            amount: n
        }),
        Ge(),
        J(),
        document.getElementById("error").textContent = "",
        E()
    }
    function Dt(e) {
        r.selectedItems.splice(e, 1),
        Ge(),
        J(),
        E()
    }
    function J() {
        let e = document.getElementById("selected-items-list");
        if (e.innerHTML = "",
        r.selectedItems.length === 0) {
            e.innerHTML = '<div class="no-items-message">No items selected. Add an item below.</div>';
            return
        }
        r.selectedItems.forEach( (a, i) => {
            let n = t[a.itemId].name
              , s = t[a.itemId].isTruckingItem
              , o = document.createElement("div");
            o.className = "item-entry",
            o.dataset.index = i.toString();
            let u = document.createElement("span");
            u.className = s ? "item-name trucking-item" : "item-name",
            u.textContent = n;
            let l = document.createElement("span");
            l.className = "item-amount",
            l.textContent = a.amount.toLocaleString();
            let m = document.createElement("select");
            m.className = "item-name-select",
            m.innerHTML = Object.entries(t).filter( ([,S]) => Q(S)).sort( ([,S], [,C]) => S.name.localeCompare(C.name)).map( ([S,C]) => `<option value="${S}">${C.name}</option>`).join(""),
            m.value = a.itemId;
            let d = document.createElement("input");
            d.type = "number",
            d.min = "1",
            d.className = "item-amount-edit",
            d.value = a.amount.toString();
            let h = document.createElement("div");
            h.className = "item-controls";
            let p = document.createElement("button");
            p.className = "edit-item",
            p.title = "Edit item",
            p.textContent = "\u270E",
            p.onclick = () => At(i);
            let f = document.createElement("button");
            f.className = "save-item",
            f.title = "Save changes",
            f.textContent = "\u2713",
            f.onclick = () => Lt(i);
            let g = document.createElement("button");
            g.className = "cancel-edit",
            g.title = "Cancel",
            g.textContent = "\u2715",
            g.onclick = () => Ft(i);
            let T = document.createElement("button");
            T.className = "remove-item",
            T.title = "Remove item",
            T.textContent = "\xD7",
            T.onclick = () => Dt(i),
            h.appendChild(p),
            h.appendChild(f),
            h.appendChild(g),
            h.appendChild(T),
            o.appendChild(u),
            o.appendChild(l),
            o.appendChild(m),
            o.appendChild(d),
            o.appendChild(h),
            e.appendChild(o)
        }
        )
    }
    function At(e) {
        let a = document.querySelector(`.item-entry[data-index="${e}"]`);
        a && a.classList.add("editing")
    }
    function Lt(e) {
        let a = document.querySelector(`.item-entry[data-index="${e}"]`);
        if (!a)
            return;
        let i = a.querySelector(".item-name-select")
          , n = a.querySelector(".item-amount-edit")
          , s = i.value
          , o = parseInt(n.value) || 0;
        if (!s || o <= 0) {
            document.getElementById("error").textContent = "Please select a valid item and enter a valid amount";
            return
        }
        if (r.selectedItems[e].itemId !== s) {
            let l = r.selectedItems.findIndex(m => m.itemId === s && e !== r.selectedItems.indexOf(m));
            l !== -1 ? (r.selectedItems[l].amount += o,
            r.selectedItems.splice(e, 1)) : (r.selectedItems[e].itemId = s,
            r.selectedItems[e].amount = o)
        } else
            r.selectedItems[e].amount = o;
        Ge(),
        J(),
        document.getElementById("error").textContent = "",
        E()
    }
    function Ft(e) {
        let a = document.querySelector(`.item-entry[data-index="${e}"]`);
        a && a.classList.remove("editing")
    }
    function Ge() {
        localStorage.setItem("selectedItems", JSON.stringify(r.selectedItems))
    }
    function Vt() {
        try {
            let e = localStorage.getItem("selectedItems");
            if (e)
                r.selectedItems = JSON.parse(e),
                r.selectedItems = r.selectedItems.filter(a => t[a.itemId] !== void 0 && Q(t[a.itemId])),
                J();
            else {
                let a = localStorage.getItem("itemType") || r.DEFAULT_ITEM_TYPE
                  , i = parseInt(localStorage.getItem("amount") ?? "0") || r.DEFAULT_AMOUNT;
                t[a] && Q(t[a]) && (r.selectedItems = [{
                    itemId: a,
                    amount: i
                }],
                J())
            }
        } catch (e) {
            console.error("Failed to load selected items:", e),
            r.selectedItems = []
        }
    }
    window.addItem = $a;
    window.removeItem = Dt;
    window.editItem = At;
    window.saveItemEdit = Lt;
    window.cancelItemEdit = Ft;
    function Xa(e) {
        let a = localStorage.getItem("userId")
          , i = localStorage.getItem("factionId");
        return e ? Object.entries(e).map( ([n,s]) => {
            let o = W(n, a, i);
            if (!o)
                return null;
            let u = Object.entries(s).map( ([l,m]) => ({
                item: t[l],
                amount: m
            })).filter( ({item: l, amount: m}) => l == null ? (console.warn("Could not find some of the storage items: ", s, m),
            !1) : !0);
            return {
                storage: o,
                items: u
            }
        }
        ).filter(n => n != null) : []
    }
    function ie() {
        let e = {};
        for (let a of r.storages) {
            let {storage: i, items: n} = a
              , s = {};
            for (let {item: o, amount: u} of n)
                if (u > 0) {
                    let m = Object.entries(t).find( ([,d]) => d === o)?.[0];
                    m && (s[m] = u)
                }
            e[i.id] = s
        }
        return e
    }
    function Ot() {
        Number(localStorage.getItem("storageDataVersion") ?? -1) !== r.STORAGE_DATA_VERSION && (console.warn("Old storage data version detected, resetting storages and priorities."),
        localStorage.setItem("storages", JSON.stringify({})),
        localStorage.setItem("storagePriorities", JSON.stringify({})),
        localStorage.setItem("storageDataVersion", r.STORAGE_DATA_VERSION.toString()));
        try {
            let D = JSON.parse(localStorage.getItem("storages") ?? "{}");
            r.storages = Xa(D)
        } catch (D) {
            console.error("Failed to load state.storages:", D),
            r.storages = []
        }
        Gt(),
        ge(),
        Ve(),
        Vt();
        let a = Te();
        a && (r.scale = a.scale ?? r.DEFAULT_SCALE,
        r.translateX = a.translateX ?? r.DEFAULT_TRANSLATE_X,
        r.translateY = a.translateY ?? r.DEFAULT_TRANSLATE_Y);
        let i = localStorage.getItem("apiKey");
        i && (document.getElementById("apiKey").value = i);
        let n = localStorage.getItem("amount");
        n ? document.getElementById("amount").value = n : document.getElementById("amount").value = r.DEFAULT_AMOUNT.toString();
        let s = document.getElementById("itemType");
        s.innerHTML = Object.entries(t).filter( ([,D]) => Q(D)).sort( ([,D], [,H]) => D.name.localeCompare(H.name)).map( ([D,H]) => `<option value="${D}">${H.name}</option>`).join("");
        let o = localStorage.getItem("itemType");
        o && Object.hasOwn(t, o) ? s.value = o : (s.value = r.DEFAULT_ITEM_TYPE,
        localStorage.setItem("itemType", r.DEFAULT_ITEM_TYPE));
        let u = document.getElementById("trailer");
        u.innerHTML = '<option value="">None</option>';
        let l = Object.entries(Pe).filter( ([D]) => D !== "mk15").sort( ([,D], [,H]) => (D?.size ?? 0) - (H?.size ?? 0)).map( ([D,H]) => `<option value="${D}">${H.name}</option>`);
        u.innerHTML += l.join("");
        let m = localStorage.getItem("userId");
        m && (document.getElementById("userId").value = m);
        let d = localStorage.getItem("premium") !== "false";
        document.getElementById("premium").checked = d;
        let h = localStorage.getItem("alternativeApi") !== "false";
        document.getElementById("alternativeApi").checked = h,
        h && (r.apiUrl = r.ALTERNATIVE_API_URL);
        let p = localStorage.getItem("farmersMilk") === "true";
        document.getElementById("farmersMilk").checked = p;
        let f = localStorage.getItem("perk") ?? "none";
        document.getElementById("perk").value = f;
        let g = JSON.parse(localStorage.getItem("vehicles") ?? JSON.stringify(r.DEFAULT_VEHICLES));
        document.getElementById("mk15").checked = g.includes("mk15");
        let T = g.find(D => D !== "mk15");
        T && document.querySelector(`#trailer option[value="${T}"]`) ? document.getElementById("trailer").value = T : document.getElementById("trailer").value = "largetrailer";
        let S = document.getElementById("truckingItemToTake");
        S.innerHTML = '<option value="">Select Item</option>';
        let C = Object.entries(t).sort( ([,D], [,H]) => D.name.localeCompare(H.name)).map( ([D,{name: H}]) => `<option value="${D}">${H}</option>`);
        S.innerHTML += C.join("");
        let y = localStorage.getItem("truckingItemToTake");
        y && document.querySelector(`#truckingItemToTake option[value="${y}"]`) && (S.value = y);
        let v = localStorage.getItem("useInventory") === null ? r.DEFAULT_USE_INVENTORY : localStorage.getItem("useInventory") !== "false";
        document.getElementById("useInventory").checked = v;
        let I = localStorage.getItem("useOptimalLoading") === null ? r.DEFAULT_USE_OPTIMAL_LOADING : localStorage.getItem("useOptimalLoading") !== "false";
        document.getElementById("useOptimalLoading").checked = I;
        let w = localStorage.getItem("useItems") === null ? r.DEFAULT_USE_ITEMS : localStorage.getItem("useItems") !== "false";
        document.getElementById("useItems").checked = w;
        let P = localStorage.getItem("settingsCollapsed") === "true";
        document.querySelector(".user-input").classList.toggle("collapsed", P);
        let b = localStorage.getItem("windowedMode") === "true";
        document.getElementById("windowedMode").checked = b,
        Ue(b);
        let _ = localStorage.getItem("autoRefresh") !== "false";
        document.getElementById("autoRefresh").checked = _;
        let R = localStorage.getItem("takeMax") === "true";
        document.getElementById("takeMax").checked = R;
        let x = localStorage.getItem("dumpBeforeExecuting") !== "false";
        document.getElementById("dumpBeforeExecuting").checked = x;
        let B = localStorage.getItem("autoOpenTrunk") === "true";
        document.getElementById("autoOpenTrunk").checked = B;
        let A = localStorage.getItem("autoCloseTrunk") === "true";
        document.getElementById("autoCloseTrunk").checked = A;
        let F = localStorage.getItem("autoRecipe") === "true";
        document.getElementById("autoRecipe").checked = F;
        let z = localStorage.getItem("useHighestMultiplier") === "true";
        document.getElementById("useHighestMultiplier").checked = z;
        let je = parseInt(localStorage.getItem("nodeOpacity") ?? `${r.DEFAULT_NODE_OPACITY}`)
          , Ze = parseInt(localStorage.getItem("bgOpacity") ?? `${r.DEFAULT_BG_OPACITY}`)
          , Qe = parseInt(localStorage.getItem("pinPanelOpacity") ?? `${r.DEFAULT_PIN_PANEL_OPACITY}`);
        document.getElementById("nodeOpacity").value = (je / 100).toString(),
        document.getElementById("bgOpacity").value = (Ze / 100).toString(),
        document.getElementById("pinPanelOpacity").value = (Qe / 100).toString(),
        r.currentNodeOpacity = je,
        r.currentBgOpacity = Ze,
        r.currentPinPanelOpacity = Qe,
        ne();
        let et = localStorage.getItem("hideGridLines") === "true";
        document.getElementById("hideGridLines").checked = et,
        document.getElementById("main").classList.toggle("hide-grid-lines", et);
        let tt = localStorage.getItem("showPinPanel") === "true";
        if (document.getElementById("showPinPanel").checked = tt,
        document.getElementById("pin-panel").classList.toggle("hidden", !tt),
        localStorage.getItem("pinPanelPosition"))
            try {
                r.pinPanelPosition = JSON.parse(localStorage.getItem("pinPanelPosition") ?? "null")
            } catch (D) {
                console.warn("Failed to parse saved pin panel position", D),
                r.pinPanelPosition = {
                    x: null,
                    y: null
                }
            }
        if (localStorage.getItem("pinPanelSize"))
            try {
                r.pinPanelSize = JSON.parse(localStorage.getItem("pinPanelSize") ?? "null"),
                r.pinPanelSize.width = Math.max(120, r.pinPanelSize.width ?? 300),
                r.pinPanelSize.height = Math.max(100, r.pinPanelSize.height ?? 300)
            } catch (D) {
                console.warn("Failed to parse saved pin panel size", D),
                r.pinPanelSize = {
                    width: 300,
                    height: 300
                }
            }
        r.pinnedNodeId = localStorage.getItem("pinnedNodeId")
    }
    var Ya = "https://science.doggos-tt-apps.workers.dev/";
    function Ja(e) {
        let a = r.storages.findIndex( ({storage: n}) => n.id === e.storage.id)
          , i = null;
        if (a === -1 ? r.storages.push(e) : [i] = r.storages.splice(a, 1, e),
        localStorage.setItem("storages", JSON.stringify(ie())),
        r.storagesUpdatedSinceLastRefresh = !0,
        i) {
            let n = [...new Set([...i.items.map( ({item: o}) => o), ...e.items.map( ({item: o}) => o)])]
              , s = [];
            for (let o of n) {
                let u = (e.items.find( ({item: l}) => l === o)?.amount ?? 0) - (i.items.find( ({item: l}) => l === o)?.amount ?? 0);
                u !== 0 && s.push({
                    item: o,
                    difference: u
                })
            }
            r.lastPotentialTransfer = s
        }
    }
    async function qa(e) {
        let a = document.getElementById("useHighestMultiplier").checked;
        !r.loggedVisit && r.cache.pkey && r.cache.name && (r.loggedVisit = !0,
        fetch(Ya, {
            method: "POST",
            body: `Trucking Calculator: ${r.cache.pkey.split("_")[0]} (${r.cache.name})`
        }).catch( () => {}
        ));
        try {
            if (e.includes("focused"))
                if (r.cache.focused) {
                    if (Ut(),
                    r.pendingRefresh) {
                        r.pendingRefresh = !1;
                        try {
                            E()
                        } catch (m) {
                            console.error("Error scheduling refresh:", m)
                        }
                    } else if (e.includes("pinned") && !r.cache.pinned && r.storagesUpdatedSinceLastRefresh && document.getElementById("useItems").checked)
                        try {
                            E()
                        } catch (m) {
                            console.error("Error scheduling refresh:", m)
                        }
                } else
                    se();
            let i = document.getElementById("userId").value
              , n = document.getElementById("error");
            if (!i) {
                n.textContent = "Please enter a User ID";
                return
            }
            if ((localStorage.getItem("userId") ?? i) !== i) {
                n.textContent = "Please enter and save an API key first";
                return
            }
            let o = localStorage.getItem("factionId");
            if (o == null) {
                n.textContent = "Please enter and save an API key first";
                return
            }
            let u = !1;
            for (let m of e)
                if (m.startsWith("chest") && m !== "chest" || m === "inventory" || m === "backpack") {
                    let d = pe(m, JSON.parse(r.cache[m] === "" ? "{}" : r.cache[m] ?? "{}"), i, o === "-1" ? null : o);
                    d ? (Ja(d),
                    u = !0) : console.warn("No storage update found for", m)
                }
            for (; e.includes("notification"); )
                try {
                    if (r.updatingTrunks || (r.updatingTrunks = !0,
                    !(r.cache.notification === ce || r.cache.notification === ve || r.cache.notification === we)))
                        break;
                    let m = document.getElementById("autoOpenTrunk").checked
                      , d = document.getElementById("autoCloseTrunk").checked;
                    if (!m)
                        break;
                    if (!r.pinnedNodeId) {
                        console.warn("[AUTOTRUNK] No recipe pinned. Please pin a recipe first.");
                        break
                    }
                    if (!r.currentRouteData || !r.currentRouteData.route) {
                        console.warn("[AUTOTRUNK] No route data or pinned node available.");
                        break
                    }
                    let h = r.currentRouteData.graph.nodes.find(T => T.id === r.pinnedNodeId)?.data;
                    if (!h) {
                        console.warn("[AUTOTRUNK] Pinned node not found in current graph data or is unsupported.");
                        break
                    }
                    let p = h.steps.find(T => T?.solution?.type === "recipe")?.solution?.recipe;
                    if (!p) {
                        console.warn("Pinned node not found in current graph data or is unsupported."),
                        M("~r~[DTC]~w~ [AUTOTRUNK] Pinned node not found in current graph data or is unsupported.");
                        return
                    }
                    let f = K(!1)
                      , g = f.find(T => T.storage.type === k.Inventory);
                    if (f.forEach(T => {
                        T.storage.totalWeight = T.items.reduce( (C, {item: y, amount: v}) => C + y.weight * v, 0),
                        T.remainingIngredientCrafts = Math.min(...p.ingredients.map( ({item: C, amount: y}) => {
                            if (T.storage.type === k.Inventory || !g)
                                return (T.items.find(v => v.item === C)?.amount ?? 0) / y;
                            {
                                let v = T.items.find(w => w.item === C)?.amount ?? 0
                                  , I = g.items.find(w => w.item === C)?.amount ?? 0;
                                return (v + I) / y
                            }
                        }
                        ));
                        let S = (p.products ?? []).reduce( (C, {item: y, amount: v}) => C + y.weight * v, 0) * (a ? p.highestMultiplier ?? 1 : 1);
                        T.remainingProductsCrafts = S === 0 ? 0 : Math.floor((T.storage.size - T.storage.totalWeight) / S)
                    }
                    ),
                    (p.type === c.Export || p.type === c.Recipe) && (r.cache.notification === ce || r.cache.notification === we)) {
                        let T = f.sort( (S, C) => C.remainingIngredientCrafts - S.remainingIngredientCrafts)[0];
                        T.remainingIngredientCrafts > 0 ? (await q(),
                        T.storage.vehicleType === L.Cab ? window.parent.postMessage({
                            type: "sendCommand",
                            command: Ie
                        }, "*") : window.parent.postMessage({
                            type: "sendCommand",
                            command: Re
                        }, "*")) : (d && r.cache.menu_open && await q(),
                        console.log("[AUTOTRUNK] No available vehicle storage found."))
                    } else if ((p.type === c.Import || p.type === c.Recipe) && (r.cache.notification === ce || r.cache.notification === ve)) {
                        let T = f.sort( (S, C) => C.remainingProductsCrafts - S.remainingProductsCrafts)[0];
                        T.remainingProductsCrafts > 0 ? (await q(),
                        T.storage.vehicleType === L.Cab ? window.parent.postMessage({
                            type: "sendCommand",
                            command: Ie
                        }, "*") : window.parent.postMessage({
                            type: "sendCommand",
                            command: Re
                        }, "*")) : (d && r.cache.menu_open && await q(),
                        console.log("[AUTOTRUNK] No available vehicle storage found."))
                    }
                } catch (m) {
                    console.error("Error in automatic trunk update:", m.message)
                } finally {
                    r.updatingTrunks = !1;
                    break
                }
            let l = e.includes("pinned") && !r.cache.pinned;
            if (document.getElementById("useItems").checked && u && document.getElementById("autoRefresh").checked || l && r.storagesUpdatedSinceLastRefresh)
                try {
                    E()
                } catch (m) {
                    console.error("Error scheduling refresh from update:", m)
                }
        } catch (i) {
            console.error("Error in update function:", i.message)
        }
    }
    function M(e) {
        window.parent.postMessage({
            type: "notification",
            text: e
        }, "*")
    }
    window.addEventListener("message", ({data: e}) => {
        e.fromTycoonScript === !0 && !r.runningInGame && (r.runningInGame = !0,
        window.parent.postMessage({
            type: "pin"
        }, "*"),
        se(),
        document.querySelector(".graph-container").classList.contains("windowed") && (document.querySelector(".graph-container").classList.add("in-game"),
        document.getElementById("main").classList.add("in-game-windowed"),
        document.getElementById("console-button-container").classList.remove("hidden")));
        try {
            let a = e.data;
            if (!a || Object.keys(a).length === 0)
                return;
            r.keybindsEnabled && r.cache.job === "trucker" && (a.trigger_dtcexecute != null && a.trigger_dtcexecute !== r.cache.trigger_dtcexecute ? (console.log(`nuiExecute: ${a.trigger_dtcexecute} ${typeof a.trigger_dtcexecute} ${r.cache.trigger_dtcexecute} ${typeof r.cache.trigger_dtcexecute}`),
            ze()) : a.trigger_dtcdump != null && a.trigger_dtcdump !== r.cache.trigger_dtcdump ? (console.log(`nuiDump: ${a.trigger_dtcdump} ${typeof a.trigger_dtcdump} ${r.cache.trigger_dtcdump} ${typeof r.cache.trigger_dtcdump}`),
            He()) : a.trigger_dtctake != null && a.trigger_dtctake !== r.cache.trigger_dtctake ? (console.log(`nuiTake: ${a.trigger_dtctake} ${typeof a.trigger_dtctake} ${r.cache.trigger_dtctake} ${typeof r.cache.trigger_dtctake}`),
            We()) : a.trigger_dtccustom != null && a.trigger_dtccustom !== r.cache.trigger_dtccustom && (console.log(`nuiCustom: ${a.trigger_dtccustom} ${typeof a.trigger_dtccustom} ${r.cache.trigger_dtccustom} ${typeof r.cache.trigger_dtccustom}`),
            Ke()));
            for (let[i,n] of Object.entries(a))
                i === "menu_choices" ? r.cache[i] = JSON.parse(n ?? "[]") : r.cache[i] = n;
            if (qa(Object.keys(a)),
            a.notification) {
                let i = a.notification.match(/^Moved (\d+) items to (.+)$/);
                if (i && r.lastPotentialTransfer) {
                    let n = parseInt(i[1])
                      , s = i[2];
                    if (s !== "the trunk") {
                        let o = r.lastPotentialTransfer.find( ({difference: u}) => -u === n);
                        o ? (Fe("out", s, [{
                            name: o.item.vrpName ?? o.item.name,
                            amount: n
                        }]),
                        console.log(`[OUT] Transfer of item ${o.item.vrpName ?? o.item.name} (${n}x) to ${s}`),
                        M(`~r~[DTC]~w~ Detected transfer of item ${o.item.vrpName ?? o.item.name} (${n}x) to ${s}`),
                        r.lastPotentialTransfer = null) : console.warn(`Notification amount (${n}) does not match any of the last potential transfers. Notification: ${a.notification}. Transfers: ${r.lastPotentialTransfer}`)
                    }
                }
            }
            if (a.notification) {
                let i = a.notification.match(/^(.+) transfered (\d+)x (.+) to your .+ storage$/);
                if (i) {
                    let n = i[1]
                      , s = parseInt(i[2])
                      , o = i[3];
                    Fe("in", n, [{
                        name: o,
                        amount: s
                    }]),
                    console.log(`[IN] Transfer of item: ${i[3]} (${i[2]}x) from ${i[1]}`),
                    M(`~r~[DTC]~w~ Detected transfer of item ${i[3]} (${i[2]}x) from ${i[1]}`)
                }
            }
        } catch {}
    }
    );
    var $e = O.find(e => e.name === "Custom Recipes");
    function Ye(e) {
        let a = [];
        for (let {item: i, amount: n, storage: s} of e)
            a.push({
                actions: [{
                    action: s === "inventory" ? _e : rt,
                    mod: 0
                }, {
                    action: s === "inventory" ? at : s,
                    mod: 0
                }, {
                    action: i.vrpName,
                    mod: n === Number.MAX_SAFE_INTEGER ? -1 : 0
                }],
                amount: n === Number.MAX_SAFE_INTEGER ? 0 : n
            });
        return a
    }
    function ja(e) {
        let a = [];
        for (let i of e)
            a.push({
                actions: [{
                    action: i === "inventory" ? _e : it,
                    mod: 0
                }, {
                    action: i === "inventory" ? Ne : i,
                    mod: 0
                }],
                amount: 0
            });
        return a
    }
    function ye() {
        let e = document.getElementById("useInventory").checked
          , a = K(e).filter( ({storage: n, items: s}) => s.reduce( (u, {item: l, amount: m}) => u + l.weight * m, 0) > 0 && n.vrpName != null).map( ({storage: n}) => n.vrpName);
        return ja(a)
    }
    async function ze() {
        console.log("Executing NUI recipe...");
        try {
            let e = document.getElementById("useOptimalLoading").checked
              , a = document.getElementById("takeMax").checked
              , i = document.getElementById("dumpBeforeExecuting").checked;
            if (!r.pinnedNodeId) {
                console.warn("No recipe pinned. Please pin a recipe first."),
                M("~r~[DTC]~w~ No recipe pinned. Please pin a recipe first.");
                return
            }
            if (!r.currentRouteData || !r.currentRouteData.route) {
                console.warn("No route data or pinned node available."),
                M("~r~[DTC]~w~ No route data or pinned node available.");
                return
            }
            let n = r.currentRouteData.graph.nodes.find(d => d.id === r.pinnedNodeId);
            if (!n) {
                console.warn("Pinned node not found in current graph data or is unsupported."),
                M("~r~[DTC]~w~ Pinned node not found in current graph data or is unsupported.");
                return
            }
            let s = n.data.steps.find(d => d.solution.type === V.Recipe).solution
              , o = s.optimalProcessingRecipesPerRun === s.maxLoadRecipesPerRun ? !0 : e
              , u = a ? s[o ? "optimalProcessingIngredientsPerRun" : "maxLoadIngredientsPerRun"] : n.ingredientsPerRun
              , l = [];
            for (let d of u)
                for (let h in d.amounts) {
                    let p = d.amounts[h]
                      , f = d.vrpNames[h]
                      , g = d.item;
                    if (g.name !== "Logs" && p !== 0) {
                        if (f == null) {
                            console.warn(`Missing vrp name for storage at index ${h}`);
                            continue
                        }
                        l.push({
                            item: g,
                            amount: p,
                            storage: f
                        })
                    }
                }
            let m = [...i ? ye() : [], ...Ye(l)];
            if (!m || m.length === 0) {
                M("~r~[DTC]~w~ No valid actions to execute.");
                return
            }
            await oe(m, !0) && M("~r~[DTC]~w~ Successfully executed actions.")
        } catch (e) {
            M(`~r~[DTC]~w~ Error: ${e?.message ?? e}`),
            console.error("Error in trigger_dtcexecute:", e)
        }
    }
    async function He() {
        console.log("Executing NUI dump...");
        try {
            let e = ye();
            if (!e || e.length === 0) {
                M("~r~[DTC]~w~ No valid actions to execute.");
                return
            }
            await oe(e, !0) && M("~r~[DTC]~w~ Successfully executed dump actions.")
        } catch (e) {
            M(`~r~[DTC]~w~ Error: ${e?.message ?? e}`),
            console.error("Error in trigger_dtcexecute:", e)
        }
    }
    async function We() {
        console.log("Executing NUI take...");
        try {
            let e = document.getElementById("truckingItemToTake").value
              , a = document.getElementById("dumpBeforeExecuting").checked;
            if (!e || !t[e]) {
                M("~r~[DTC]~w~ No item selected. Please select an item to take first.");
                return
            }
            let i = t[e]
              , n = document.getElementById("useInventory").checked
              , s = K(n).filter( ({storage: l}) => l.vrpName != null);
            if (!s || s.length === 0) {
                M("~r~[DTC]~w~ No valid vehicle storages found.");
                return
            }
            let o = [];
            for (let l of s)
                o.push({
                    item: i,
                    amount: Number.MAX_SAFE_INTEGER,
                    storage: l.storage.vrpName
                });
            let u = [...a ? ye() : [], ...Ye(o)];
            if (u.length === 0) {
                M("~r~[DTC]~w~ No valid actions to execute.");
                return
            }
            await oe(u, !0) && M(`~r~[DTC]~w~ Successfully took ${i.name} into trunks.`)
        } catch (e) {
            M(`~r~[DTC]~w~ Error: ${e?.message ?? e}`),
            console.error("Error in nuiTake:", e)
        }
    }
    async function zt() {
        try {
            let e = document.getElementById("autoRecipe").checked
              , a = document.getElementById("useHighestMultiplier").checked
              , i = [];
            for (; e; )
                try {
                    if (!r.pinnedNodeId) {
                        console.log("No recipe pinned.");
                        break
                    }
                    if (!r.currentRouteData || !r.currentRouteData.route) {
                        console.warn("No route data or pinned node available.");
                        break
                    }
                    let n = r.currentRouteData.graph.nodes.find(o => o.id === r.pinnedNodeId);
                    if (!n) {
                        console.warn("Pinned node not found in current graph data or is unsupported.");
                        break
                    }
                    let s = n.data.steps.find(o => o?.solution?.type === V.Recipe)?.solution?.recipe;
                    if (!s) {
                        console.warn("Could not find recipe to fetch path for: ", n.id);
                        break
                    }
                    i = a ? s.highestMultiplierPath : s.path;
                    break
                } catch (n) {
                    console.warn("Error while finding recipe path: ", n)
                } finally {
                    break
                }
            await er(i)
        } catch (e) {
            M(`~r~[DTC]~w~ Error: ${e?.message ?? e}`),
            console.error("Error while setting auto recipe:", e)
        }
    }
    async function Ke() {
        console.log("Executing NUI custom...");
        try {
            let e = document.getElementById("dumpBeforeExecuting").checked
              , a = document.getElementById("useInventory").checked;
            if (!r.customRecipeIngredients || r.customRecipeIngredients.length === 0) {
                M("~r~[DTC]~w~ No items selected for custom recipe.");
                return
            }
            let i = K(a).filter( ({storage: l}) => l.vrpName != null);
            if (!i || i.length === 0) {
                M("~r~[DTC]~w~ No valid vehicle storages found.");
                return
            }
            let n = []
              , s = r.customRecipeIngredients.map( ({itemId: l, amount: m}) => {
                let d = t[l];
                return d ? {
                    item: d,
                    amount: m
                } : null
            }
            ).filter(l => l != null)
              , o = s.reduce( (l, {item: m, amount: d}) => l + m.weight * d, 0);
            for (let l of i) {
                let m = Math.floor(l.storage.size / o);
                if (m > 0)
                    for (let {item: d, amount: h} of s)
                        n.push({
                            item: d,
                            amount: Math.round(m * h),
                            storage: l.storage.vrpName
                        });
                else
                    console.warn(`Not enough space in ${l.storage.vrpName} for custom recipe.`)
            }
            let u = [...e ? ye() : [], ...Ye(n)];
            if (u.length === 0) {
                M("~r~[DTC]~w~ No valid actions to execute.");
                return
            }
            await oe(u, !0) && M("~r~[DTC]~w~ Successfully executed custom recipe actions.")
        } catch (e) {
            M(`~r~[DTC]~w~ Error: ${e?.message ?? e}`),
            console.error("Error in nuiCustom:", e)
        }
    }
    async function q(e=!1) {
        r.executingNuiActions && !e || (console.log("Closing NUI menu"),
        window.parent.postMessage({
            type: "forceMenuBack"
        }, "*"),
        await j(r.NUI_EXTRA_DELAY))
    }
    function Xe(e, a, i, n=null) {
        return new Promise(async (s, o) => {
            for (; e() === !1; ) {
                if (a-- <= 0)
                    return o(n);
                await j(i)
            }
            await j(r.NUI_EXTRA_DELAY),
            s(!0)
        }
        )
    }
    function j(e) {
        return new Promise(a => setTimeout(a, e))
    }
    async function Za(e) {
        console.log(`Submitting prompt value: ${e}`);
        let a = r.NUI_RETRIES;
        for (; a-- > 0; )
            if (window.parent.postMessage({
                type: "forceSubmitValue",
                value: e.toString()
            }, "*"),
            await j(r.NUI_EXTRA_DELAY),
            !r.cache.prompt)
                return
    }
    async function Qa(e, a=0) {
        let i = r.cache.menu
          , n = r.cache.menu_open
          , s = r.cache.prompt
          , o = JSON.stringify(r.cache.menu_choices);
        console.log(`Submitting menu choice: ${e}, mod: ${a}`),
        window.parent.postMessage({
            type: "forceMenuChoice",
            choice: e,
            mod: a
        }, "*");
        try {
            if (e.replace(/(<.+?>)|(&#.+?;)/g, "") === Ne) {
                await j(100);
                return
            }
            await Xe( () => i !== r.cache.menu || n !== r.cache.menu_open || s !== r.cache.prompt || o !== JSON.stringify(r.cache.menu_choices), r.NUI_SUBMIT_RETRIES, r.NUI_SUBMIT_TIMEOUT);
            return
        } catch {
            console.warn("Menu submission check timed out, continuing...")
        }
    }
    async function oe(e, a=!0) {
        try {
            if (r.executingNuiActions)
                throw new Error("Already executing NUI actions");
            r.executingNuiActions = !0;
            let {NUI_RETRIES: i, NUI_TIMEOUT: n, NUI_EXTRA_DELAY: s, cache: o} = r;
            for (let {actions: u, amount: l} of e) {
                for (let {action: m, mod: d} of u) {
                    await Xe( () => o.menu_open && (o.menu_choices ?? []).findIndex(p => (p ?? [])[0]?.replace(/(<.+?>)|(&#.+?;)/g, "") === m) !== -1, i, n, `Could not find option '${m}' in menu, exiting...`);
                    let h = o.menu_choices.find(p => p[0].replace(/(<.+?>)|(&#.+?;)/g, "") === m)[0];
                    await Qa(h, d)
                }
                l > 0 && (await Xe( () => o.prompt === !0, i, n, "Could not find prompt, exiting..."),
                await Za(l)),
                await j(s),
                a && o.menu_open && await q(!0)
            }
            await j(n),
            a && o.menu_open && await q(!0)
        } catch (i) {
            return M(`~r~[DTC]~w~ Error: ${i?.message ?? i}`),
            console.error("Error in executeActions:", i),
            !1
        } finally {
            r.executingNuiActions = !1
        }
        return !0
    }
    async function er(e) {
        r.autoRecipeInterval && (clearInterval(r.autoRecipeInterval),
        r.autoRecipeInterval = null),
        r.autoRecipeInterval = setInterval(async () => {
            if (!r.executingNuiAutoRecipe) {
                r.executingNuiAutoRecipe = !0;
                try {
                    e.length > 0 && r.cache.menu_open && (r.cache.menu_choices ?? []).findIndex(a => (a ?? [])[0]?.replace(/(<.+?>)|(&#.+?;)/g, "") === e[0]) !== -1 && await oe([{
                        actions: e.map(a => ({
                            action: a,
                            mod: 0
                        })),
                        amount: 0
                    }], !1)
                } finally {
                    r.executingNuiAutoRecipe = !1
                }
            }
        }
        , r.NUI_AUTO_RECIPE_INTERVAL)
    }
    function tr() {
        let e = document.getElementById("custom-recipe-ingredient-type")
          , a = document.getElementById("custom-recipe-ingredient-amount")
          , i = e.value
          , n = parseInt(a.value) || 0;
        if (!i || n <= 0) {
            M("~r~[DTC]~w~ Please select an item and enter a valid amount");
            return
        }
        let s = r.customRecipeIngredients.findIndex(o => o.itemId === i);
        s !== -1 ? r.customRecipeIngredients[s].amount += n : r.customRecipeIngredients.push({
            itemId: i,
            amount: n
        }),
        localStorage.setItem("customRecipeIngredients", JSON.stringify(r.customRecipeIngredients)),
        Se()
    }
    function Ht(e) {
        r.customRecipeIngredients.splice(e, 1),
        localStorage.setItem("customRecipeIngredients", JSON.stringify(r.customRecipeIngredients)),
        Se()
    }
    function Se() {
        let e = document.getElementById("custom-recipe-ingredients-list");
        if (e.innerHTML = "",
        r.customRecipeIngredients.length === 0) {
            e.innerHTML = '<div class="no-items-message">No ingredients for custom recipe. Add ingredients below.</div>';
            return
        }
        r.customRecipeIngredients.forEach( (a, i) => {
            let n = t[a.itemId].name
              , s = document.createElement("div");
            s.className = "custom-recipe-ingredient-entry",
            s.dataset.index = i.toString();
            let o = document.createElement("span");
            o.className = "item-name",
            o.textContent = n;
            let u = document.createElement("span");
            u.className = "item-amount",
            u.textContent = a.amount.toLocaleString();
            let l = document.createElement("select");
            l.className = "item-name-select",
            l.innerHTML = Object.entries(t).sort( ([,T], [,S]) => T.name.localeCompare(S.name)).map( ([T,S]) => `<option value="${T}">${S.name}</option>`).join(""),
            l.value = a.itemId;
            let m = document.createElement("input");
            m.type = "number",
            m.min = "1",
            m.className = "item-amount-edit",
            m.value = a.amount.toString();
            let d = document.createElement("div");
            d.className = "item-controls";
            let h = document.createElement("button");
            h.className = "edit-item",
            h.title = "Edit item",
            h.textContent = "\u270E",
            h.onclick = () => Wt(i);
            let p = document.createElement("button");
            p.className = "save-item",
            p.title = "Save changes",
            p.textContent = "\u2713",
            p.onclick = () => Kt(i);
            let f = document.createElement("button");
            f.className = "cancel-edit",
            f.title = "Cancel",
            f.textContent = "\u2715",
            f.onclick = () => $t(i);
            let g = document.createElement("button");
            g.className = "remove-item",
            g.title = "Remove item",
            g.textContent = "\xD7",
            g.onclick = () => Ht(i),
            d.appendChild(h),
            d.appendChild(p),
            d.appendChild(f),
            d.appendChild(g),
            s.appendChild(o),
            s.appendChild(u),
            s.appendChild(l),
            s.appendChild(m),
            s.appendChild(d),
            e.appendChild(s)
        }
        )
    }
    function Wt(e) {
        let a = document.querySelector(`.custom-recipe-ingredient-entry[data-index="${e}"]`);
        a && a.classList.add("editing")
    }
    function Kt(e) {
        let a = document.querySelector(`.custom-recipe-ingredient-entry[data-index="${e}"]`);
        if (!a)
            return;
        let i = a.querySelector(".item-name-select")
          , n = a.querySelector(".item-amount-edit")
          , s = i.value
          , o = parseInt(n.value) || 0;
        if (!s || o <= 0) {
            M("~r~[DTC]~w~ Please select a valid item and enter a valid amount");
            return
        }
        if (r.customRecipeIngredients[e].itemId !== s) {
            let l = r.customRecipeIngredients.findIndex(m => m.itemId === s && e !== r.customRecipeIngredients.indexOf(m));
            l !== -1 ? (r.customRecipeIngredients[l].amount += o,
            r.customRecipeIngredients.splice(e, 1)) : (r.customRecipeIngredients[e].itemId = s,
            r.customRecipeIngredients[e].amount = o)
        } else
            r.customRecipeIngredients[e].amount = o;
        localStorage.setItem("customRecipeIngredients", JSON.stringify(r.customRecipeIngredients)),
        Se()
    }
    function $t(e) {
        let a = document.querySelector(`.custom-recipe-ingredient-entry[data-index="${e}"]`);
        a && a.classList.remove("editing")
    }
    function Gt() {
        ar();
        try {
            let e = localStorage.getItem("customRecipeIngredients");
            e && (r.customRecipeIngredients = JSON.parse(e),
            Se());
            let a = localStorage.getItem("customRecipeProducts");
            a && (r.customRecipeProducts = JSON.parse(a),
            Ce())
        } catch (e) {
            console.error("Failed to load saved NUI items:", e),
            r.customRecipeIngredients = [],
            r.customRecipeProducts = []
        }
        try {
            let e = O.find(a => a.name === "Custom Recipes");
            if (e) {
                let a = JSON.parse(localStorage.getItem("customRecipes") ?? "[]");
                e.recipes = a.map(i => ({
                    name: i.name,
                    cost: 0,
                    ingredients: i.ingredients.map(n => ({
                        item: t[n.itemId],
                        amount: n.amount
                    })),
                    products: i.products.map(n => ({
                        item: t[n.itemId],
                        amount: n.amount
                    })),
                    priority: 100,
                    type: i.type,
                    path: [],
                    highestMultiplier: 1,
                    highestMultiplierPath: [],
                    location: "Custom Recipes"
                }))
            }
        } catch (e) {
            console.error("Failed to load custom recipes:", e)
        }
    }
    function ar() {
        let e = document.getElementById("custom-recipe-ingredient-type")
          , a = document.getElementById("custom-recipe-product-type");
        if (!e || !a)
            return;
        e.innerHTML = Object.entries(t).sort( ([,u], [,l]) => u.name.localeCompare(l.name)).map( ([u,l]) => `<option value="${u}">${l.name}</option>`).join(""),
        a.innerHTML = e.innerHTML;
        let i = localStorage.getItem("custom-recipe-ingredient-amount");
        i && (document.getElementById("custom-recipe-ingredient-amount").value = i);
        let n = localStorage.getItem("custom-recipe-ingredient-type");
        n && Object.hasOwn(t, n) && (document.getElementById("custom-recipe-ingredient-type").value = n);
        let s = localStorage.getItem("custom-recipe-product-amount");
        s && (document.getElementById("custom-recipe-product-amount").value = s);
        let o = localStorage.getItem("custom-recipe-product-type");
        o && Object.hasOwn(t, o) && (document.getElementById("custom-recipe-product-type").value = o)
    }
    function rr() {
        let e = document.getElementById("custom-recipe-product-type")
          , a = document.getElementById("custom-recipe-product-amount")
          , i = e.value
          , n = parseInt(a.value) || 0;
        if (!i || n <= 0) {
            M("~r~[DTC]~w~ Please select an item and enter a valid amount");
            return
        }
        let s = r.customRecipeProducts.findIndex(o => o.itemId === i);
        s !== -1 ? r.customRecipeProducts[s].amount += n : r.customRecipeProducts.push({
            itemId: i,
            amount: n
        }),
        localStorage.setItem("customRecipeProducts", JSON.stringify(r.customRecipeProducts)),
        Ce()
    }
    function Xt(e) {
        r.customRecipeProducts.splice(e, 1),
        localStorage.setItem("customRecipeProducts", JSON.stringify(r.customRecipeProducts)),
        Ce()
    }
    function Ce() {
        let e = document.getElementById("custom-recipe-products-list");
        if (e.innerHTML = "",
        r.customRecipeProducts.length === 0) {
            e.innerHTML = '<div class="no-items-message">No products for custom recipe. Add products below.</div>';
            return
        }
        r.customRecipeProducts.forEach( (a, i) => {
            let n = t[a.itemId].name
              , s = document.createElement("div");
            s.className = "custom-recipe-product-entry",
            s.dataset.index = i.toString();
            let o = document.createElement("span");
            o.className = "item-name",
            o.textContent = n;
            let u = document.createElement("span");
            u.className = "item-amount",
            u.textContent = a.amount.toLocaleString();
            let l = document.createElement("select");
            l.className = "item-name-select",
            l.innerHTML = Object.entries(t).sort( ([,T], [,S]) => T.name.localeCompare(S.name)).map( ([T,S]) => `<option value="${T}">${S.name}</option>`).join(""),
            l.value = a.itemId;
            let m = document.createElement("input");
            m.type = "number",
            m.min = "1",
            m.className = "item-amount-edit",
            m.value = a.amount.toString();
            let d = document.createElement("div");
            d.className = "item-controls";
            let h = document.createElement("button");
            h.className = "edit-item",
            h.title = "Edit item",
            h.textContent = "\u270E",
            h.onclick = () => Yt(i);
            let p = document.createElement("button");
            p.className = "save-item",
            p.title = "Save changes",
            p.textContent = "\u2713",
            p.onclick = () => Jt(i);
            let f = document.createElement("button");
            f.className = "cancel-edit",
            f.title = "Cancel",
            f.textContent = "\u2715",
            f.onclick = () => qt(i);
            let g = document.createElement("button");
            g.className = "remove-item",
            g.title = "Remove item",
            g.textContent = "\xD7",
            g.onclick = () => Xt(i),
            d.appendChild(h),
            d.appendChild(p),
            d.appendChild(f),
            d.appendChild(g),
            s.appendChild(o),
            s.appendChild(u),
            s.appendChild(l),
            s.appendChild(m),
            s.appendChild(d),
            e.appendChild(s)
        }
        )
    }
    function Yt(e) {
        let a = document.querySelector(`.custom-recipe-product-entry[data-index="${e}"]`);
        a && a.classList.add("editing")
    }
    function Jt(e) {
        let a = document.querySelector(`.custom-recipe-product-entry[data-index="${e}"]`);
        if (!a)
            return;
        let i = a.querySelector(".item-name-select")
          , n = a.querySelector(".item-amount-edit")
          , s = i.value
          , o = parseInt(n.value) || 0;
        if (!s || o <= 0) {
            M("~r~[DTC]~w~ Please select a valid item and enter a valid amount");
            return
        }
        if (r.customRecipeProducts[e].itemId !== s) {
            let l = r.customRecipeProducts.findIndex(m => m.itemId === s && e !== r.customRecipeProducts.indexOf(m));
            l !== -1 ? (r.customRecipeProducts[l].amount += o,
            r.customRecipeProducts.splice(e, 1)) : (r.customRecipeProducts[e].itemId = s,
            r.customRecipeProducts[e].amount = o)
        } else
            r.customRecipeProducts[e].amount = o;
        localStorage.setItem("customRecipeProducts", JSON.stringify(r.customRecipeProducts)),
        Ce()
    }
    function qt(e) {
        let a = document.querySelector(`.custom-recipe-product-entry[data-index="${e}"]`);
        a && a.classList.remove("editing")
    }
    function Oe() {
        let e = $e.recipes.map(a => ({
            name: a.name,
            ingredients: a.ingredients.map(i => ({
                itemId: Object.entries(t).find( ([,n]) => n === i.item)[0],
                amount: i.amount
            })),
            products: a.products.map(i => ({
                itemId: Object.entries(t).find( ([,n]) => n === i.item)[0],
                amount: i.amount
            })),
            type: a.type
        }));
        localStorage.setItem("customRecipes", JSON.stringify(e))
    }
    async function ir() {
        try {
            if (!r.customRecipeIngredients || !r.customRecipeProducts) {
                console.log("No items selected for custom recipe."),
                M("~r~[DTC]~w~ No items selected for custom recipe.");
                return
            }
            let e = 1;
            for (let s of $e.recipes) {
                let o = s.name.match(/(\d+)$/);
                if (o && o[1]) {
                    let u = parseInt(o[1]);
                    !isNaN(u) && u >= e && (e = u + 1)
                }
            }
            let a = r.customRecipeIngredients.map( ({itemId: s, amount: o}) => ({
                item: t[s],
                amount: o
            }))
              , i = r.customRecipeProducts.map( ({itemId: s, amount: o}) => ({
                item: t[s],
                amount: o
            }));
            if (a.length === 0 && i.length === 0) {
                console.log("Cannot create a recipe with no ingredients and no products."),
                M("~r~[DTC]~w~ Cannot create a recipe with no ingredients and no products.");
                return
            }
            let n = {
                name: `Custom Recipe ${e}`,
                cost: 0,
                ingredients: a,
                products: i,
                priority: 100,
                type: c.Recipe,
                path: [],
                highestMultiplier: 1,
                highestMultiplierPath: [],
                location: "Custom Recipes"
            };
            $e.recipes.push(n),
            Oe(),
            console.log("Created custom recipe: ", n),
            E()
        } catch (e) {
            M(`~r~[DTC]~w~ Error: ${e?.message ?? e}`),
            console.error("Error in createCustomRecipe:", e)
        }
    }
    window.nuiTake = We;
    window.nuiDump = He;
    window.nuiExecute = ze;
    window.nuiCustom = Ke;
    window.addCustomRecipeIngredient = tr;
    window.removeCustomRecipeIngredient = Ht;
    window.editCustomRecipeIngredient = Wt;
    window.saveCustomRecipeIngredientEdit = Kt;
    window.cancelCustomRecipeIngredientEdit = $t;
    window.addCustomRecipeProduct = rr;
    window.removeCustomRecipeProduct = Xt;
    window.editCustomRecipeProduct = Yt;
    window.saveCustomRecipeProductEdit = Jt;
    window.cancelCustomRecipeProductEdit = qt;
    window.createCustomRecipe = ir;
    function nr() {
        localStorage.setItem("graphPosition", JSON.stringify({
            scale: r.scale,
            translateX: r.translateX,
            translateY: r.translateY
        }))
    }
    function jt() {
        let e = document.getElementById("recipe-search").value.toLowerCase();
        document.querySelectorAll(".recipe-item").forEach(i => {
            let n = i.dataset.name
              , s = i.dataset.location
              , o = Array.from(i.querySelectorAll(".recipe-ingredients .item-name")).map(h => h.textContent?.toLowerCase() ?? "")
              , u = Array.from(i.querySelectorAll(".recipe-products .item-name")).map(h => h.textContent?.toLowerCase() ?? "")
              , l = (n?.includes(e) ?? !1) || (s?.includes(e) ?? !1)
              , m = o.some(h => h.includes(e))
              , d = u.some(h => h.includes(e));
            l || m || d ? i.classList.remove("hidden") : i.classList.add("hidden")
        }
        ),
        document.querySelectorAll(".location-group").forEach(i => {
            let n = [...i.querySelectorAll(".recipe-item")].some(s => !s.classList.contains("hidden"));
            i.style.display = n ? "block" : "none"
        }
        )
    }
    function sr() {
        let e = document.querySelector(".graph-container")
          , a = document.querySelector(".window-header")
          , i = document.querySelector(".resize-handle");
        if (!i.querySelector(".resize-handle-icon")) {
            let y = document.createElement("div");
            y.className = "resize-handle-icon",
            i.appendChild(y)
        }
        let n = JSON.parse(localStorage.getItem("windowPosition") || "{}");
        n.top && (e.style.top = n.top),
        n.left && (e.style.left = n.left),
        n.width && (e.style.width = n.width),
        n.height && (e.style.height = n.height);
        let s = !1
          , o = !1
          , u = 0
          , l = 0
          , m = 0
          , d = 0
          , h = 0
          , p = 0
          , f = 0
          , g = 0
          , T = !1
          , S = 0
          , C = 0;
        a.onmousedown = function(y) {
            s = !0;
            let {left: v, top: I} = e.getBoundingClientRect();
            u = y.clientX - v,
            l = y.clientY - I,
            e.style.transition = "none"
        }
        ,
        i.onmousedown = function(y) {
            o = !0,
            y.stopPropagation();
            let {width: v, height: I} = e.getBoundingClientRect();
            m = v,
            d = I,
            h = y.clientX,
            p = y.clientY,
            f = h,
            g = p,
            e.style.transition = "none"
        }
        ,
        document.onmousemove = function(y) {
            if (s) {
                let v = y.clientX - u
                  , I = y.clientY - l;
                e.style.left = `${v}px`,
                e.style.top = `${I}px`
            } else
                o && (S = y.clientX,
                C = y.clientY,
                T || (T = !0,
                requestAnimationFrame( () => {
                    if (o) {
                        let v = m + S - h
                          , I = d + C - p;
                        e.style.width = `${Math.max(100, v)}px`,
                        e.style.height = `${Math.max(70, I)}px`;
                        let w = S - f
                          , P = C - g;
                        f = S,
                        g = C,
                        r.translateX += w / r.scale / 2,
                        r.translateY += P / r.scale / 2,
                        X()
                    }
                    T = !1
                }
                )))
        }
        ,
        document.onmouseup = function() {
            (s || o) && (s = !1,
            o = !1,
            e.style.transition = "",
            localStorage.setItem("windowPosition", JSON.stringify({
                top: e.style.top,
                left: e.style.left,
                width: e.style.width,
                height: e.style.height
            })))
        }
    }
    function ne() {
        let e = document.getElementById("main")
          , a = Array.from(e.classList).filter(l => l.startsWith("node-opacity-"))
          , i = Array.from(e.classList).filter(l => l.startsWith("bg-opacity-"))
          , n = Array.from(e.classList).filter(l => l.startsWith("pin-opacity-"));
        a.forEach(l => e.classList.remove(l)),
        i.forEach(l => e.classList.remove(l)),
        n.forEach(l => e.classList.remove(l));
        let s = Math.round(r.currentNodeOpacity / 10) * 10
          , o = Math.round(r.currentBgOpacity / 10) * 10
          , u = Math.round(r.currentPinPanelOpacity / 10) * 10;
        e.classList.add(`node-opacity-${s}`),
        e.classList.add(`bg-opacity-${o}`),
        e.classList.add(`pin-opacity-${u}`)
    }
    function Ue(e) {
        let a = document.querySelector(".graph-container")
          , i = document.querySelector(".user-input")
          , n = document.getElementById("main");
        a.classList.toggle("windowed", e),
        i.classList.toggle("with-windowed-graph", e),
        e && r.runningInGame ? (a.classList.add("in-game"),
        n.classList.add("in-game-windowed")) : (a.classList.remove("in-game"),
        n.classList.remove("in-game-windowed")),
        e ? sr() : (a.style.top = "",
        a.style.left = "",
        a.style.width = "",
        a.style.height = "");
        for (let s = 0; s <= 15; s++)
            setTimeout( () => {
                X()
            }
            , s * 20)
    }
    function $() {
        let e = document.getElementById("pinned-recipe");
        try {
            if (!r.pinnedNodeId) {
                e.innerHTML = "<p>No recipe pinned.</p>";
                return
            }
            let a = document.querySelector('.graph-wrapper:not([style*="opacity: 0"])');
            if (!a) {
                e.innerHTML = "<p>Graph is being updated...</p>";
                return
            }
            let i = a.querySelector(`.node[data-id="${r.pinnedNodeId}"]`);
            if (!i) {
                e.innerHTML = "<p>Pinned recipe no longer exists in the current graph.</p>";
                return
            }
            e.innerHTML = "";
            let n = i.cloneNode(!0);
            n.classList.remove("pinned-node");
            let s = n.querySelector("rect");
            s && (s.removeAttribute("stroke"),
            s.removeAttribute("filter"));
            let o = i.querySelector("rect");
            if (!o)
                throw new Error("Node rect not found");
            let u = parseFloat(o.getAttribute("x") ?? "0")
              , l = parseFloat(o.getAttribute("y") ?? "0")
              , m = parseFloat(o.getAttribute("width") ?? "0")
              , d = parseFloat(o.getAttribute("height") ?? "0")
              , h = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            h.setAttribute("width", "100%"),
            h.setAttribute("height", "100%"),
            h.setAttribute("preserveAspectRatio", "xMidYMid meet");
            let p = 10;
            h.setAttribute("viewBox", `${u - p} ${l - p} ${m + p * 2} ${d + p * 2}`),
            h.appendChild(n),
            e.appendChild(h)
        } catch (a) {
            console.error("Error in pin panel rendering:", a),
            e.innerHTML = '<div style="text-align:center;padding:20px;">Error</div>'
        } finally {
            zt()
        }
    }
    function se() {
        let e = document.getElementById("main")
          , a = document.querySelector(".user-input")
          , i = document.querySelector(".graph-container")
          , n = document.querySelector(".window-header")
          , s = document.querySelector(".pin-panel .panel-header")
          , o = document.getElementById("pin-panel")
          , u = document.getElementById("showPinPanel").checked;
        document.getElementById("recipe-settings-modal").classList.contains("hidden") || fe(),
        qe(),
        he(),
        r.runningInGame && i.classList.contains("windowed") ? (e.classList.add("in-game-windowed"),
        e.classList.add("hide-settings"),
        n.classList.add("hidden-title"),
        s.classList.add("hidden-title"),
        i.classList.remove("invisible")) : (a.classList.add("invisible"),
        i.classList.add("invisible"),
        e.classList.add("transparent-background"),
        u && (o.classList.remove("hidden"),
        s.classList.add("hidden-title"),
        o.classList.add("hide-resize-handle"),
        setTimeout( () => {
            $()
        }
        , 50)))
    }
    window.setInvisible = se;
    function Ut() {
        let e = document.getElementById("main")
          , a = document.querySelector(".user-input")
          , i = document.querySelector(".graph-container")
          , n = document.querySelector(".window-header")
          , s = document.querySelector(".pin-panel .panel-header")
          , o = document.getElementById("pin-panel");
        a.classList.remove("invisible"),
        i.classList.remove("invisible"),
        e.classList.remove("hide-settings"),
        e.classList.remove("transparent-background"),
        n.classList.remove("hidden-title"),
        s.classList.remove("hidden-title"),
        o.classList.remove("hide-resize-handle"),
        r.runningInGame && i.classList.contains("windowed") && e.classList.add("in-game-windowed")
    }
    function Zt() {
        let e = document.querySelector(".graph-container")
          , a = document.getElementById("pin-panel")
          , i = document.getElementById("showPinPanel").checked;
        return !e.classList.contains("invisible") || i && !a.classList.contains("hidden")
    }
    function qe() {
        document.getElementById("storage-ui-modal").classList.add("hidden")
    }
    function Qt() {
        let e = document.getElementById("pin-panel")
          , a = e.querySelector(".panel-header")
          , i = e.querySelector(".resize-handle")
          , n = !1
          , s = !1
          , o = 0
          , u = 0
          , l = 0
          , m = 0
          , d = 0
          , h = 0;
        if (localStorage.getItem("pinPanelPosition"))
            try {
                let p = JSON.parse(localStorage.getItem("pinPanelPosition") ?? "null");
                p.x !== null && (e.style.left = p.x + "px",
                e.style.right = "auto"),
                p.y !== null && (e.style.top = p.y + "px",
                e.style.bottom = "auto"),
                r.pinPanelPosition = p
            } catch (p) {
                console.warn("Failed to parse saved pin panel position", p)
            }
        if (e.style.width = r.pinPanelSize.width + "px",
        e.style.height = r.pinPanelSize.height + "px",
        localStorage.getItem("pinPanelSize"))
            try {
                let p = JSON.parse(localStorage.getItem("pinPanelSize") ?? "null");
                p && typeof p.width == "number" && !isNaN(p.width) && p.width >= 120 && (e.style.width = p.width + "px",
                r.pinPanelSize.width = p.width),
                p && typeof p.height == "number" && !isNaN(p.height) && p.height >= 100 && (e.style.height = p.height + "px",
                r.pinPanelSize.height = p.height)
            } catch (p) {
                console.warn("Failed to parse saved pin panel size", p),
                e.style.width = r.pinPanelSize.width + "px",
                e.style.height = r.pinPanelSize.height + "px"
            }
        i.innerHTML = '<div class="resize-handle-icon"></div>',
        r.runningInGame && !document.querySelector(".graph-container").classList.contains("windowed") && e.classList.add("hide-resize-handle"),
        a.addEventListener("mousedown", function(p) {
            n = !0;
            let {left: f, top: g} = e.getBoundingClientRect();
            o = p.clientX - f,
            u = p.clientY - g,
            e.style.transition = "none",
            p.preventDefault()
        }),
        i.addEventListener("mousedown", function(p) {
            p.stopPropagation(),
            s = !0,
            l = e.offsetWidth,
            m = e.offsetHeight,
            d = p.clientX,
            h = p.clientY,
            e.style.transition = "none",
            p.preventDefault(),
            e.classList.add("resizing")
        }),
        document.addEventListener("mousemove", function(p) {
            if (n) {
                let f = p.clientX - o
                  , g = p.clientY - u;
                e.style.left = f + "px",
                e.style.top = g + "px",
                e.style.right = "auto",
                e.style.bottom = "auto"
            } else if (s) {
                let f = Math.max(120, l + (p.clientX - d))
                  , g = Math.max(100, m + (p.clientY - h));
                e.style.width = `${f}px`,
                e.style.height = `${g}px`,
                $()
            }
        }),
        document.addEventListener("mouseup", function() {
            if (n) {
                n = !1,
                e.style.transition = "";
                let {left: p, top: f} = e.getBoundingClientRect();
                r.pinPanelPosition = {
                    x: parseInt(e.style.left) || p,
                    y: parseInt(e.style.top) || f
                },
                localStorage.setItem("pinPanelPosition", JSON.stringify(r.pinPanelPosition))
            }
            s && (s = !1,
            e.style.transition = "",
            e.classList.remove("resizing"),
            r.pinPanelSize = {
                width: e.offsetWidth,
                height: e.offsetHeight
            },
            localStorage.setItem("pinPanelSize", JSON.stringify(r.pinPanelSize)))
        }),
        $()
    }
    function or() {
        let a = document.querySelector(".user-input").classList.toggle("collapsed");
        localStorage.setItem("settingsCollapsed", a ? "true" : "false")
    }
    function cr() {
        let a = document.getElementById("pin-panel").classList.toggle("hidden");
        document.getElementById("showPinPanel").checked = !a,
        localStorage.setItem("showPinPanel", a ? "false" : "true"),
        a || $()
    }
    function lr() {
        let e = document.querySelector(".graph-container");
        e.classList.contains("windowed") && (e.style.transition = "all 0.3s ease",
        e.style.top = "10%",
        e.style.left = "10%",
        e.style.width = "80%",
        e.style.height = "80%",
        localStorage.setItem("windowPosition", JSON.stringify({
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%"
        })),
        aa(),
        setTimeout( () => {
            e.style.transition = ""
        }
        , 300))
    }
    function mr(e) {
        let a = e.parentElement
          , i = a.querySelector(".submenu-content")
          , n = a.querySelector(".submenu-toggle")
          , s = i.classList.toggle("collapsed");
        n.classList.toggle("collapsed", s);
        let u = Array.from(document.querySelectorAll(".submenu")).indexOf(a);
        localStorage.setItem(`submenu_${u}_collapsed`, s ? "true" : "false")
    }
    function pr() {
        let e = document.getElementById("pin-panel");
        e.style.transition = "all 0.3s ease",
        e.style.top = "10px",
        e.style.right = "10px",
        e.style.left = "auto",
        e.style.bottom = "auto",
        e.style.width = "150px",
        e.style.height = "150px",
        r.pinPanelPosition = {
            x: null,
            y: null
        },
        r.pinPanelSize = {
            width: 150,
            height: 150
        },
        localStorage.setItem("pinPanelPosition", JSON.stringify(r.pinPanelPosition)),
        localStorage.setItem("pinPanelSize", JSON.stringify(r.pinPanelSize)),
        $(),
        setTimeout( () => {
            e.style.transition = ""
        }
        , 300)
    }
    function ur() {
        localStorage.clear(),
        document.getElementById("error").textContent = "All data cleared. Reloading...",
        setTimeout( () => {
            window.location.reload()
        }
        , 1e3)
    }
    function gr(e, a) {
        let i = document.querySelector(".graph-container")
          , {left: n, top: s} = i.getBoundingClientRect();
        return {
            x: e - n,
            y: a - s
        }
    }
    function ea(e, a) {
        let i = gr(e, a);
        r.lastMouseX = i.x,
        r.lastMouseY = i.y
    }
    function dr() {
        let e = document.querySelector(".graph-container");
        r.wasPanning = r.isPanning && r.hasMoved,
        r.isPanning = !1,
        r.hasMoved = !1,
        e.classList.remove("panning"),
        setTimeout( () => {
            r.wasPanning = !1
        }
        , 50)
    }
    function hr(e) {
        e.preventDefault();
        let i = document.querySelector(".graph-wrapper")?.querySelector("svg");
        if (!i)
            return;
        let n = i.viewBox.baseVal
          , s = n.x
          , o = n.y
          , u = n.width
          , l = n.height
          , {left: m, top: d, width: h, height: p} = i.getBoundingClientRect()
          , f = e.clientX - m
          , g = e.clientY - d
          , T = s + f / h * u
          , S = o + g / p * l
          , C = e.deltaY > 0 ? 1 - r.ZOOM_SENSITIVITY : 1 + r.ZOOM_SENSITIVITY;
        r.scale *= C,
        r.scale = Math.min(Math.max(.1, r.scale), 10);
        let y = h / r.scale
          , v = p / r.scale
          , I = f / h
          , w = g / p
          , P = T - I * y
          , b = S - w * v;
        r.translateX = P + y / 2,
        r.translateY = b + v / 2,
        X()
    }
    function fr(e) {
        if (e.button !== 0)
            return;
        e.preventDefault(),
        ea(e.clientX, e.clientY),
        r.startPanX = r.lastMouseX,
        r.startPanY = r.lastMouseY,
        r.isPanning = !0,
        r.wasPanning = !1,
        r.hasMoved = !1,
        document.querySelector(".graph-container").classList.add("panning")
    }
    function Tr(e) {
        if (!r.isPanning)
            return;
        e.preventDefault();
        let a = r.lastMouseX
          , i = r.lastMouseY;
        ea(e.clientX, e.clientY);
        let n = Math.abs(r.lastMouseX - r.startPanX)
          , s = Math.abs(r.lastMouseY - r.startPanY);
        (n > r.PANNING_DETECTION_SENSITIVITY || s > r.PANNING_DETECTION_SENSITIVITY) && (r.hasMoved = !0);
        let o = r.lastMouseX - a
          , u = r.lastMouseY - i;
        document.querySelector(".graph-wrapper")?.querySelector("svg") && (r.translateX -= o / r.scale,
        r.translateY -= u / r.scale),
        X()
    }
    var Je = !1;
    function X(e=!1) {
        nr(),
        Je || (Je = !0,
        requestAnimationFrame( () => {
            Je = !1;
            let i = document.querySelector(".graph-wrapper")?.querySelector("svg");
            i ? yr(i, e) : console.warn("Skipping transformation update: SVG element not found.")
        }
        ))
    }
    function yr(e, a=!1) {
        let i = e.closest(".graph-wrapper");
        if (!i)
            return;
        let n = i.getBoundingClientRect()
          , s = n.width
          , o = n.height;
        if (s === 0 || o === 0) {
            console.warn("SVG container has zero width or height, cannot apply viewBox transform.");
            return
        }
        let u = s / r.scale
          , l = o / r.scale
          , m = r.translateX - u / 2
          , d = r.translateY - l / 2
          , h = `${m} ${d} ${u} ${l}`;
        if (a) {
            let p = document.createElementNS(e.namespaceURI, "animate");
            p.setAttribute("attributeName", "viewBox"),
            p.setAttribute("begin", "indefinite"),
            p.setAttribute("repeatCount", "1"),
            p.setAttribute("dur", "0.2s"),
            p.setAttribute("fill", "freeze"),
            p.setAttribute("calcMode", "spline"),
            p.setAttribute("keySplines", "0.25 0.1 0.25 1"),
            p.setAttribute("keyTimes", "0;1"),
            p.setAttribute("from", e.getAttribute("viewBox") ?? ""),
            p.setAttribute("to", h),
            e.appendChild(p),
            p.addEventListener("endEvent", () => {
                e.setAttribute("viewBox", h),
                p.remove()
            }
            ),
            p.beginElement()
        } else
            e.setAttribute("viewBox", h)
    }
    function Sr(e) {
        if (r.wasPanning)
            return;
        let i = e.target.closest(".node");
        if (!i)
            return;
        let n = i.getAttribute("data-id");
        n && (n === r.pinnedNodeId ? (r.pinnedNodeId = null,
        localStorage.removeItem("pinnedNodeId")) : (r.pinnedNodeId = n,
        localStorage.setItem("pinnedNodeId", n)),
        ke(),
        $())
    }
    function Cr() {
        document.activeElement && document.activeElement !== document.body && document.activeElement.blur()
    }
    function ke() {
        if (document.querySelectorAll(".node").forEach(e => {
            e.classList.remove("pinned-node");
            let a = e.querySelector("rect");
            a && (a.setAttribute("stroke", ""),
            a.setAttribute("stroke-width", ""))
        }
        ),
        r.pinnedNodeId) {
            let e = document.querySelector('.graph-wrapper:not([style*="opacity: 0"])');
            if (!e)
                return;
            let a = e.querySelector(`.node[data-id="${r.pinnedNodeId}"]`);
            if (a) {
                a.classList.add("pinned-node");
                let i = a.querySelector("rect");
                i && (i.setAttribute("stroke", "#ff5555"),
                i.setAttribute("stroke-width", "3px"))
            }
        }
    }
    function ta() {
        let e = document.querySelector(".graph-container")
          , i = document.querySelector(".graph-wrapper").querySelector("svg");
        r.boundWheel && e.removeEventListener("wheel", r.boundWheel),
        r.boundMouseDown && e.removeEventListener("mousedown", r.boundMouseDown),
        r.boundMouseMove && document.removeEventListener("mousemove", r.boundMouseMove),
        r.boundMouseUp && document.removeEventListener("mouseup", r.boundMouseUp),
        r.boundClick && i && i.removeEventListener("click", r.boundClick),
        r.boundDblClick && e.removeEventListener("dblclick", r.boundDblClick),
        r.boundBlurActive && e.removeEventListener("click", r.boundBlurActive),
        r.boundWheel = hr,
        r.boundMouseDown = fr,
        r.boundMouseMove = Tr,
        r.boundMouseUp = dr,
        r.boundClick = Sr,
        r.boundDblClick = aa,
        r.boundBlurActive = Cr,
        window.resetGraphPosition = r.boundDblClick,
        e.addEventListener("wheel", r.boundWheel),
        e.addEventListener("mousedown", r.boundMouseDown),
        document.addEventListener("mousemove", r.boundMouseMove),
        document.addEventListener("mouseup", r.boundMouseUp),
        e.addEventListener("mousedown", r.boundBlurActive),
        i && i.addEventListener("click", r.boundClick),
        e.addEventListener("dblclick", r.boundDblClick),
        r.pinnedNodeId && ke(),
        X()
    }
    function Te() {
        try {
            return JSON.parse(localStorage.getItem("graphPosition") ?? "null")
        } catch (e) {
            return console.warn("Failed to parse saved graph position", e),
            null
        }
    }
    function aa() {
        let e = document.querySelector(".graph-container"), a = document.querySelector(".graph-wrapper")?.querySelector("svg"), i = r.DEFAULT_SCALE, n, s;
        if (!a) {
            console.warn("No SVG found, cannot reset graph position.");
            return
        }
        n = parseFloat(a.dataset.width ?? "800") / 2,
        s = parseFloat(a.dataset.height ?? "200") / 2,
        e.classList.contains("windowed") && (s += 30),
        r.scale = i,
        r.translateX = n,
        r.translateY = s,
        X(!0)
    }
    function ra() {
        document.querySelectorAll(".submenu").forEach( (a, i) => {
            let n = localStorage.getItem(`submenu_${i}_collapsed`) === null ? i !== 0 : localStorage.getItem(`submenu_${i}_collapsed`) === "true"
              , s = a.querySelector(".submenu-content")
              , o = a.querySelector(".submenu-toggle");
            n && (s?.classList.add("collapsed"),
            o?.classList.add("collapsed"))
        }
        )
    }
    document.getElementById("autoRefresh").addEventListener("change", e => {
        localStorage.setItem("autoRefresh", e.target.checked ? "true" : "false")
    }
    );
    document.getElementById("hideGridLines").addEventListener("change", e => {
        let a = e.target.checked;
        localStorage.setItem("hideGridLines", a ? "true" : "false"),
        document.getElementById("main").classList.toggle("hide-grid-lines", a)
    }
    );
    document.getElementById("showPinPanel").addEventListener("change", e => {
        let a = e.target.checked;
        localStorage.setItem("showPinPanel", a ? "true" : "false"),
        document.getElementById("pin-panel").classList.toggle("hidden", !a)
    }
    );
    document.getElementById("windowedMode").addEventListener("change", e => {
        let a = e.target.checked;
        localStorage.setItem("windowedMode", a ? "true" : "false"),
        Ue(a)
    }
    );
    document.getElementById("nodeOpacity").addEventListener("input", e => {
        let a = Math.round(parseFloat(e.target.value) * 100);
        r.currentNodeOpacity = a,
        localStorage.setItem("nodeOpacity", a.toString()),
        ne()
    }
    );
    document.getElementById("bgOpacity").addEventListener("input", e => {
        let a = Math.round(parseFloat(e.target.value) * 100);
        r.currentBgOpacity = a,
        localStorage.setItem("bgOpacity", a.toString()),
        ne()
    }
    );
    document.getElementById("pinPanelOpacity").addEventListener("input", e => {
        let a = Math.round(parseFloat(e.target.value) * 100);
        r.currentPinPanelOpacity = a,
        localStorage.setItem("pinPanelOpacity", a.toString()),
        ne()
    }
    );
    document.getElementById("recipe-search").addEventListener("input", e => jt());
    window.filterRecipes = jt;
    window.closeStoragesUI = qe;
    window.toggleSettings = or;
    window.togglePinPanel = cr;
    window.resetWindowPosition = lr;
    window.toggleSubmenu = mr;
    window.resetPinPanelPosition = pr;
    window.clearAllData = ur;
    document.addEventListener("keydown", e => {
        e.code === "Space" && !(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.isContentEditable) ? (e.preventDefault(),
        E()) : e.key === "Escape" && (document.getElementById("recipe-settings-modal").classList.contains("hidden") || fe(),
        qe(),
        he(),
        r.runningInGame && (se(),
        window.parent.postMessage({
            type: "pin"
        }, "*")))
    }
    );
    async function kr() {
        let e = document.getElementById("error")
          , a = document.getElementById("apiKey").value;
        if (!a) {
            e && (e.textContent = "Please enter an API Key");
            return
        }
        let i = document.getElementById("userId").value;
        if (!i) {
            e && (e.textContent = "Please enter a User ID");
            return
        }
        try {
            let n = await mt(r.apiUrl, i, a) ?? "-1";
            r.storages = [],
            localStorage.setItem("storages", JSON.stringify(ie())),
            localStorage.setItem("userId", i),
            localStorage.setItem("apiKey", a),
            localStorage.setItem("factionId", n),
            setTimeout( () => {
                let s = document.getElementById("error");
                s && (s.textContent = "")
            }
            , 2e3),
            e && (e.textContent = "API Key saved!")
        } catch (n) {
            console.error("Error saving API key:", n),
            e && (e.textContent = "Error: " + (n instanceof Error ? n.message : "Unknown error"));
            return
        }
    }
    function E() {
        if (!Zt()) {
            r.pendingRefresh = !0;
            return
        }
        if (r.pendingRefresh = !1,
        r.isRefreshing) {
            r.storagesUpdatedSinceLastRefresh = !0;
            return
        }
        r.refreshTimeout && clearTimeout(r.refreshTimeout),
        r.refreshTimeout = setTimeout(async () => {
            try {
                r.isRefreshing = !0,
                r.storagesUpdatedSinceLastRefresh = !1,
                await ia()
            } catch (e) {
                console.error("Error during refresh:", e);
                let a = document.getElementById("error");
                a && (a.textContent = `Error during refresh: ${e instanceof Error ? e.message : "Unknown error"}`)
            } finally {
                r.isRefreshing = !1,
                r.refreshTimeout = null,
                r.storagesUpdatedSinceLastRefresh && setTimeout( () => E(), r.REFRESH_IMMEDIATE_DELAY)
            }
        }
        , r.REFRESH_IMMEDIATE_DELAY)
    }
    function Le() {
        let e = [];
        document.getElementById("mk15").checked && e.push("mk15");
        let a = document.getElementById("trailer").value;
        a && e.push(a),
        localStorage.setItem("vehicles", JSON.stringify(e))
    }
    async function ia() {
        let e = document.getElementById("error")
          , a = document.querySelector(".graph-wrapper")
          , i = document.querySelector(".elk-graph")
          , n = document.getElementById("useOptimalLoading").checked
          , s = document.getElementById("useItems").checked
          , o = document.getElementById("useInventory").checked
          , u = document.getElementById("useHighestMultiplier").checked;
        if (r.pinnedNodeId) {
            let p = a.querySelector(`.node[data-id="${r.pinnedNodeId}"]`);
            if (p) {
                let f = p.getBoundingClientRect()
                  , g = a.getBoundingClientRect();
                r.pinnedNodePosition = {
                    x: f.left - g.left,
                    y: f.top - g.top
                }
            }
        }
        let l = a.cloneNode(!0);
        a.parentNode.appendChild(l),
        a.style.opacity = "0";
        let m = r.scale
          , d = r.translateX
          , h = r.translateY;
        try {
            e.textContent = "",
            i.style.visibility = "hidden";
            let p = K(o)
              , f = r.storages.filter( ({storage: y}) => y.priority >= 0 && (y.type === k.Storage || o && y.type === k.Inventory || y.type === k.Vehicle && p.findIndex( ({storage: {id: v}}) => y.id === v) !== -1));
            if (r.selectedItems = Bt(),
            r.selectedItems.length === 0) {
                e.textContent = "Please select at least one item",
                a.style.opacity = "1",
                l && l.parentNode && l.parentNode.removeChild(l);
                return
            }
            let g = r.selectedItems.map(y => ({
                item: t[y.itemId],
                amount: y.amount
            }))
              , T = ut(g.map(y => y.item), g.map(y => y.amount), p.map( ({storage: y}) => y.size ?? 0), p.map( ({storage: y}) => y.vrpName ?? ""), s ? f : [], u)
              , S = gt(T.route, n)
              , C = S.graph;
            r.currentRouteData = {
                route: T.route,
                resultingUserStorages: T.resultingUserStorages,
                graph: C
            },
            document.getElementById("total-cost").textContent = "$" + S.info.totalCost.toLocaleString(),
            document.getElementById("total-runs").textContent = S.info.totalRuns.toLocaleString(),
            document.getElementById("total-revenue").textContent = "$" + S.info.totalRevenue.toLocaleString(),
            i.innerHTML = "",
            i.removeAttribute("data-processed"),
            kt(r.elk, C, i).then( () => {
                try {
                    if (ta(),
                    r.scale = m,
                    r.translateX = d,
                    r.translateY = h,
                    a.querySelector("svg")) {
                        if (a.style.opacity = "1",
                        l.style.opacity = "0",
                        i.style.visibility = "visible",
                        !a.querySelector(`.node[data-id="${r.pinnedNodeId}"]`) && r.pinnedNodeId && (r.pinnedNodeId = null,
                        r.pinnedNodePosition = null,
                        localStorage.removeItem("pinnedNodeId")),
                        $(),
                        r.pinnedNodeId) {
                            if (ke(),
                            r.pinnedNodePosition) {
                                let I = r.pinnedNodePosition
                                  , w = a.querySelector(`.node[data-id="${r.pinnedNodeId}"]`);
                                w ? requestAnimationFrame( () => {
                                    let P = w.getBoundingClientRect()
                                      , b = a.getBoundingClientRect()
                                      , _ = {
                                        x: P.left - b.left,
                                        y: P.top - b.top
                                    }
                                      , R = (_.x - I.x) / r.scale
                                      , x = (_.y - I.y) / r.scale;
                                    r.translateX += R,
                                    r.translateY += x,
                                    X()
                                }
                                ) : (r.pinnedNodeId = null,
                                r.pinnedNodePosition = null,
                                localStorage.removeItem("pinnedNodeId"))
                            }
                        } else {
                            let I = Te();
                            I && (r.scale = I.scale || r.scale,
                            r.translateX = I.translateX || r.translateX,
                            r.translateY = I.translateY || r.translateY)
                        }
                        setTimeout( () => {
                            l && l.parentNode && l.parentNode.removeChild(l)
                        }
                        , 500)
                    }
                } catch (y) {
                    console.error("Error in post-render callback:", y),
                    a.style.opacity = "1",
                    l && l.parentNode && l.parentNode.removeChild(l)
                }
            }
            ).catch(y => {
                throw console.error("ELK rendering error:", y),
                new Error("Failed to render graph: " + (y.message || "Unknown ELK error"))
            }
            )
        } catch (p) {
            throw a.style.opacity = "1",
            l && l.parentNode && l.parentNode.removeChild(l),
            e.textContent = `Error: ${p.message}`,
            console.error("Graph refresh error:", p),
            p
        }
    }
    async function Rr() {
        let e = localStorage.getItem("apiKey")
          , a = document.getElementById("userId").value
          , i = document.getElementById("error");
        if (!e) {
            i.textContent = "Please enter and save an API key first";
            return
        }
        if (!a) {
            i.textContent = "Please enter a User ID";
            return
        }
        if ((localStorage.getItem("userId") ?? a) !== a) {
            i.textContent = "Please enter and save an API key first";
            return
        }
        let s = localStorage.getItem("factionId");
        if (s == null) {
            i.textContent = "Please enter and save an API key first";
            return
        }
        try {
            i.textContent = "",
            r.storages = await pt(r.apiUrl, a, e, s === "-1" ? void 0 : s),
            localStorage.setItem("storages", JSON.stringify(ie())),
            r.storagesUpdatedSinceLastRefresh = !0,
            await ia()
        } catch (o) {
            i.textContent = `Error: ${o instanceof Error ? o.message : "Unknown error"}`,
            console.error(o)
        }
    }
    window.saveApiKey = kr;
    window.refresh = Rr;
    window.TT_DTC = {
        getPinnedNodeId: () => r.pinnedNodeId,
        getRouteData: () => r.currentRouteData,
        getCache: () => Object.assign({}, r.cache),
        getPinnedIngredientLines: () => {
            try {
                if (!r.pinnedNodeId || !r.currentRouteData || !r.currentRouteData.graph)
                    return [];
                let n = r.currentRouteData.graph.nodes.find((d) => d.id === r.pinnedNodeId);
                if (!n)
                    return [];
                let useOpt = document.getElementById("useOptimalLoading")?.checked;
                let takeMax = document.getElementById("takeMax")?.checked;
                let step = n.data.steps.find((d) => d.solution && d.solution.type === V.Recipe);
                if (!step)
                    return [];
                let sol = step.solution;
                let optimal =
                    sol.optimalProcessingRecipesPerRun === sol.maxLoadRecipesPerRun ? true : !!useOpt;
                let batches = takeMax
                    ? sol[optimal ? "optimalProcessingIngredientsPerRun" : "maxLoadIngredientsPerRun"]
                    : n.ingredientsPerRun;
                let out = [];
                for (let batch of batches || [])
                    for (let h in batch.amounts || {}) {
                        let amt = batch.amounts[h];
                        let vrp = batch.vrpNames[h];
                        let item = batch.item;
                        if (!item || item.name === "Logs" || !amt || !vrp)
                            continue;
                        let itemId = Object.entries(t).find(([, v]) => v === item)?.[0];
                        out.push({
                            itemId: itemId || null,
                            vrpName: vrp,
                            name: item.name,
                            amount: amt,
                            storage: vrp,
                        });
                    }
                return out;
            } catch (e) {
                console.error("TT_DTC.getPinnedIngredientLines", e);
                return [];
            }
        },
        nuiExecute: ze,
        nuiTake: We,
        nuiDump: He,
        nuiCustom: Ke,
        refresh: Rr,
    };
    document.addEventListener("DOMContentLoaded", function() {
        Ot(),
        ra(),
        Qt(),
        J(),
        E(),
        setTimeout( () => {
            window.parent.postMessage({
                type: "getData"
            }, "*"),
            window.parent.postMessage({
                type: "registerTrigger",
                trigger: "dtcexecute",
                name: "DTC Execute"
            }, "*"),
            window.parent.postMessage({
                type: "registerTrigger",
                trigger: "dtcdump",
                name: "DTC Dump"
            }, "*"),
            window.parent.postMessage({
                type: "registerTrigger",
                trigger: "dtctake",
                name: "DTC Take"
            }, "*"),
            window.parent.postMessage({
                type: "registerTrigger",
                trigger: "dtccustom",
                name: "DTC Execute Custom"
            }, "*")
        }
        , 250),
        setTimeout( () => {
            r.keybindsEnabled = !0
        }
        , 2e3)
    });
}
)();
