// Splash Screen Fade Out
setTimeout(() => {
    const splashScreen = document.getElementById("splashScreen");
    splashScreen.style.animation = "fadeOut 1s ease-in-out"; // Apply fade-out animation
    splashScreen.style.opacity = "0"; // Set opacity to 0 after animation

    // Remove the splash screen from the DOM after the animation completes
    setTimeout(() => {
        splashScreen.style.display = "none";
    }, 1000); // Wait for the animation to finish (1 second)
}, 1000); // Wait 1 second before starting the fade-out

// Random Background Selection
const backgroundImages = [
    "../images/backgrounds/bg2.png",
    "../images/backgrounds/bg3.png",
    "../images/backgrounds/bg4.png",
    "../images/backgrounds/bg5.png",
    "../images/backgrounds/bg6.png",
    "../images/backgrounds/bg7.png",
    "../images/backgrounds/bg8.png",
    "../images/backgrounds/bg9.png",
    "../images/backgrounds/bg10.png",
    "../images/backgrounds/bg11.png",
    "../images/backgrounds/bg12.png",
    "../images/backgrounds/bg13.png",
    "../images/backgrounds/bg14.png",
    "../images/backgrounds/bg15.png",
    "../images/backgrounds/bg16.png",
    "../images/backgrounds/bg17.png",
    "../images/backgrounds/bg18.png",
    "../images/backgrounds/bg19.png",
    "../images/backgrounds/bg20.png"
];

function getRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
}

document.body.style.backgroundImage = `url(${getRandomBackgroundImage()})`;

// Character Generator Logic
const ancestriesRaces = [
        { "Name": "Dwarf", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=59", "Description": "Dwarves are a short, stocky people who are often stubborn, fierce, and devoted.", "Image": "../images/ancestriesRaces/dwarf.png", "normals" : ["Ancient-Blooded", "Anvil", "Death Warden", "Elemental Heart", "Forge", "Forge-Blessed", "Oathkeeper", "Rock", "Strong-Blooded"]},
        { "Name": "Elf", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=60", "Description": "Elves are a tall, long-lived people with a strong tradition of art and magic.", "Image": "../images/ancestriesRaces/Elf.png", "normals" : ["Ancient", "Arctic", "Cavern", "Desert", "Seer", "Whisper", "Woodland"]},
        { "Name": "Gnome", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=61", "Description": "Gnomes are short and hardy folk, with an unquenchable curiosity and eccentric habits.", "Image": "../images/ancestriesRaces/Gnome.png", "normals" : ["Chameleon", "Fey-Touched", "Sensate", "Umbral", "Vivacious", "Wellspring"]},
        { "Name": "Goblin", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=62", "Description": "Goblins are a short, scrappy, energetic people who have spent millennia maligned and feared.", "Image": "../images/ancestriesRaces/Goblin.png", "normals" : ["Charhide", "Irongut", "Razortooth", "Snow", "Tailed", "Treedweller", "Unbreakable"]    },
        { "Name": "Halfling", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=63", "Description": "Halflings are a short, resilient people who exhibit remarkable curiosity and humor.", "Image": "../images/ancestriesRaces/Halfling.png", "normals" : ["Gutsy", "Hillock", "Jinxed", "Nomadic", "Observant", "Twilight", "Woodland"]  },
        { "Name": "Human", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=64", "Description": "Humans are diverse and adaptable people with wide potential and deep ambitions.", "Image": "../images/ancestriesRaces/Human.png", "normals" : ["Skilled", "Versatile (Human)", "Wintertouched", "Half-Elf", "Half-Orc"] },
        { "Name": "Leshy", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=65", "Description": "Leshies are immortal nature spirits placed in small plant bodies, seeking to experience the world.", "Image": "../images/ancestriesRaces/Leshy.png", "normals" : ["Cactus", "Fruit", "Fungus", "Gourd", "Leaf", "Lotus", "Pine", "Root", "Seaweed", "Vine"]    },
        { "Name": "Orc", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=66", "Description": "Orcs are proud, strong people with hardened physiques who value physical might and glory in combat.", "Image": "../images/ancestriesRaces/Orc.png", "normals" : ["Badlands", "Battle-Ready", "Deep", "Grave", "Hold-Scarred", "Rainfall", "Winter"]},
        { "Name": "Athamaru", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=71", "Description": "Athamarus are fish-like humanoids who form tight-knit communities underseas, with villages of siblings led by a common matriarch.", "Image": "../images/ancestriesRaces/Athamaru.png", "normals" : ["Coral", "Hopeful", "Kaleidoscopic", "Quilled"] },
        { "Name": "Azarketi", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=41", "Description": "Azarketis, inheritors of a shattered empire's legacy, hold their proud traditions close but still surface to interact with the rest of the world.", "Image": "../images/ancestriesRaces/Azarketi.png", "normals" : ["Ancient Scale", "Benthic", "Inured", "Mistbreath", "Murkeye", "River", "Spined", "Tactile", "Thalassic"] },
        { "Name": "Catfolk", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=77", "Description": "Catfolks are highly social, feline humanoids prone to curiosity and wandering.", "Image": "../images/ancestriesRaces/Catfolk.png", "normals" : ["Clawed", "Flexible", "Hunting", "Jungle", "Liminal", "Nine Lives", "Sharp-Eared", "Winter"]  },
        { "Name": "Centaur", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=73", "Description": "Centaurs are half-human, half-horse nomads who range wild and free across their ancestral lands.", "Image": "../images/ancestriesRaces/Centaur.png", "normals" : ["Budding Speaker", "Fleetwind", "Ironhoof", "Mottle-Coat", "Ponygait", "Stouheart"] },
        { "Name": "Fetchling", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=30", "Description": "Once human and now something apart, fetchlings display the Shadow Plane's ancient influence through monochrome complexions, glowing eyes, and supernatural shadows.", "Image": "../images/ancestriesRaces/Fetchling.png", "normals" : ["Bright", "Deep", "Liminal", "Resolute", "Wisp"] },
        { "Name": "Hobgoblin", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=78", "Description": "Hobgoblins are taller and stronger than their goblin kin, often arranging themselves into military structures.", "Image": "../images/ancestriesRaces/Hobgoblin.png", "normals" : ["Elfbane", "Runtboss", "Shortshanks", "Smokeworker", "Steelskin", "Warmarch", "Warrenbred"] },
        { "Name": "Kholo", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=79", "Description": "Kholos are hyena-headed humanoids who embrace practicality and pragmatism.", "Image": "../images/ancestriesRaces/Kholo.png", "normals" : ["Ant", "Cave", "Dog", "Great", "Sweetbreath", "Winter", "Witch"] },
        { "Name": "Kitsune", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=38", "Description": "Kitsune are a charismatic and witty people with a connection to the spiritual that grants them many magical abilities, chiefly the power to shapechange into other forms.", "Image": "../images/ancestriesRaces/Kitsune.png", "normals" : ["Celestial Envoy", "Dark Fields", "Earthly Wilds", "Empty Sky", "Frozen Wind"] },
        { "Name": "Kobold", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=80", "Description": "Kobolds are small and reptilian, with features marked by the power they choose to follow.", "Image": "../images/ancestriesRaces/Kobold.png", "normals" : ["Caveclimber", "Cavern", "Dragonscaled", "Spellscale", "Strongjaw", "Tunnelflood", "Venomtail"] },
        { "Name": "Lizardfolk", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=81", "Description": "Lizardfolk are scaled humanoids with a history that stretches into the distant past.", "Image": "../images/ancestriesRaces/Lizardfolk.png", "normals" : ["Cliffscale", "Cloudleaper", "Frilled", "Sandstrider", "Unseen", "Wetlander", "Woodstalker"]},
        { "Name": "Minotaur", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=75", "Description": "Minotaurs are horned, bovine humanoids who originate from an ancient divine curse. They are large, strong, and masters of crafts and puzzles.", "Image": "../images/ancestriesRaces/Minotaur.png", "normals" : ["Ghost Bull", "Glacier Cavern", "Littlehorn", "Roaming", "Slabsoul", "Stalker"] },
        { "Name": "Merfolk", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=74", "Description": "Merfolk are a half-human, half-fish aquatic people who live in every ocean and sea of Golarion.", "Image": "../images/ancestriesRaces/Merfolk.png", "normals" : ["Abyssal", "Carcharodon", "Pelagic", "Reef", "Sailfish"] },
        { "Name": "Nagaji", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=54", "Description": "With humanoid figures and serpentine heads, nagaji are heralds, companions, and servitors of powerful nagas.", "Image": "../images/ancestriesRaces/Nagaji.png", "normals" : ["Hooded", "Sacred", "Titan", "Venomfang", "Whipfang"]},
        { "Name": "Ratfolk", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=82", "Description": "Ratfolk are small, clever, and adaptable humanoids with ratlike features and a love of community.", "Image": "../images/ancestriesRaces/Ratfolk.png", "normals" : ["Deep", "Desert", "Longsnout", "Sewer", "Shadow", "Snow", "Tunnel"] },
        { "Name": "Samsaran", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=88", "Description": "Blue-skinned people who reincarnate upon death and recall pieces of their past lives.", "Image": "../images/ancestriesRaces/Samsaran.png", "normals" : ["Healer", "Mountaineer", "Oracular", "Sanctuary", "Wilderness"] },
        { "Name": "Tanuki", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=90", "Description": "Raccoon-like shapeshifters known for their mischief and magical transformations.", "Image": "../images/ancestriesRaces/Tanuki.png", "normals" : ["Ascetic", "Corageous", "Even-Tempered", "Steadfast", "Virtuous"] },
        { "Name": "Tengu", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=83", "Description": "Tengus are gregarious and resourceful avian humanoids who collect knowledge and treasures alike.", "Image": "../images/ancestriesRaces/Tengu.png", "normals" : ["Dogtooth", "Jinxed", "Mountainkeeper", "Skyborn", "Stormtossed", "Taloned", "Wavediver"] },
        { "Name": "Tripkee", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=84", "Description": "Tripkees are froglike humanoids whose spirit often exceeds their stature.", "Image": "../images/ancestriesRaces/Tripkee.png", "normals" : ["Poisonhide", "Riverside", "Snaptongue", "Stickytoe", "Thickskin", "Windweb"] },
        { "Name": "Vanara", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=55", "Description": "Vanaras are inquisitive and mischievous monkey-like humanoids with long, prehensile tails.", "Image": "../images/ancestriesRaces/Vanara.png", "normals" : ["Bandaagee", "Lahkgyan", "Ragdyan", "Wajaghand"] },
        { "Name": "Wayang", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=91", "Description": "Small people native to the Netherworld, immigrated to Golarion after Earthfall.", "Image": "../images/ancestriesRaces/Wayang.png", "normals" : ["Shadow Of The Courtier", "Shadow Of The Heart", "Shadow Of The Sailor", "Shadow Of The Smith", "Shadow Of The Wanderer"] },
        { "Name": "Anadi", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=42", "Description": "Reclusive, sapient spiders who hail from the jungles of southern Garund.", "Image": "../images/ancestriesRaces/Anadi.png", "normals" : ["Adaptive", "Polychromatic", "Snaring", "Spindly", "Venomous"] },
        { "Name": "Android", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=27", "Description": "Technological wonders from another world, androids have synthetic bodies and living souls.", "Image": "../images/ancestriesRaces/Android.png", "normals" : ["Artisan", "Impersonator", "Laborer", "Polyglot", "Warrior"] },
        { "Name": "Automation", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=48", "Description": "Automatons are intelligent constructs housing actual souls, remnants of a dying empire's final attempt at greatness, blending technological ingenuity with magical power into a unique existence on Golarion.", "Image": "../images/ancestriesRaces/Automation.png", "normals" : ["Hunter", "Mage", "Sharpshooter", "Warrior"] },
        { "Name": "Awakened Animal", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=72", "Description": "Awakened animals were once ordinary creatures until they gained sapience, bridging nature and society, with nearly any species capable of awakening, leading to diverse characters.", "Image": "../images/ancestriesRaces/AwakenedAnimal.png", "normals" : ["Animal Attacks", "Climbing Animal", "Flying Animal", "Running Animal", "Swimming Animal"] },
        { "Name": "Conrasu", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=43", "Description": "Conrasus are shards of cosmic force given consciousness, constructing intricate exoskeletons to interact with the mortal world, both integral to the universe's processes and yet strangely set apart, seeking guidance from aeons to understand their existence.", "Image": "../images/ancestriesRaces/Conrasu.png", "normals" : ["Rite of Invocation", "Rite of Knowing", "Rite of Light", "Rite of Passage", "Rite of Reinforcement"] },
        { "Name": "Fleshwarp", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=31", "Description": "Fleshwarps are individuals whose bodies have been radically transformed by magic, alchemy, or unnatural energies, often struggling to find acceptance due to their unorthodox appearance.", "Image": "../images/ancestriesRaces/Fleshwarp.png", "normals" : ["Cataphract", "Created", "Discarded", "Mutated", "Shapewrought", "Surgewise", "Technological"] },
        { "Name": "Ghoran", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=52", "Description": "These intelligent plant beings, created by a long-dead druid, possess a form of immortality through their seeds—unless destroyed by external forces beyond time's decay.", "Image": "../images/ancestriesRaces/Ghoran.png", "normals" : ["Ancient Ash", "Enchanting Lily", "Strong Oak", "Thorned Rose"] },
        { "Name": "Goloma", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=45", "Description": "Golomas fear most people and use their unusual biology to deter perceived predators; rarely seen and poorly understood, their many-eyed, wooden-faced visages instill terror in those they encounter.", "Image": "../images/ancestriesRaces/Goloma.png", "normals" : ["Farsight", "Frightful", "Insightful", "Vicious", "Vigilant"] },
        { "Name": "Kashrishi", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=53", "Description": "Kashrishi are quiet, stout beings with durable frames and distinctive crystalline horns, living in remote areas; their inherent psychic abilities make them natural empaths but sometimes burden them with the unceasing thoughts of others.", "Image": "../images/ancestriesRaces/Kashrishi.png", "normals" : ["Athamasi", "Lethoci", "Nascent", "Trogloshi", "Xyloshi"] },
        { "Name": "Poppet", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=49", "Description": "Poppets are small constructs that assist with simple tasks, but some gain sapience, independence, and a spark of life, allowing them to chart their own destinies.", "Image": "../images/ancestriesRaces/Poppet.png", "normals" : ["Ghost", "Stuffed", "Toy", "Windup", "Wishborn"] },
        { "Name": "Sarangay", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=89", "Description": "Powerful carabao-headed warriors from the isles of Minata, known for the magical gems in their foreheads said to contain their souls.", "Image": "../images/ancestriesRaces/Sarangay.png", "normals" : ["Full Moon Sarangay", "Half Moon Sarangay", "New Moon Sarangay", "Waning Moon Sarangay", "Waxing Moon Sarangay"] },
        { "Name": "Shisk", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=47", "Description": "Shisks are secretive, bone-feathered humanoids who dwell in mountains and lurk underground in dark tunnels and caverns, venturing into the outside world only to collect and protect esoteric knowledge.", "Image": "../images/ancestriesRaces/Shisk.png", "normals" : ["Lorekeeper", "Quillcoat", "Spellkeeper", "Stonestep", "Stronggut"] },
        { "Name": "Shoony", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=16", "Description": "Diminutive humanoids resembling squat, bipedal dogs, shoonies are often mistaken for weak pacifists, but their perseverance, work ethic, and resourceful diplomacy make them far from helpless.", "Image": "../images/ancestriesRaces/Shoony.png", "normals" : ["Bloodhound", "Fishseeker", "Paddler", "Thickcoat"] },
        { "Name": "Skeleton", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=50", "Description": "Skeletons are among the lowest types of undead, typically mindless and lacking many abilities that make other undead a serious threat, but the animated bones of dragons, giants, and great beasts can be dangerous foes; powerful creatures may retain some might and intellect upon returning as skeletons, and necromancers often turn strong enemies into skeletal servants—if they can maintain control.", "Image": "../images/ancestriesRaces/Skeleton.png", "normals" : ["Compact", "Fodder", "Monstrous", "Sturdy"] },
        { "Name": "Sprite", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=39", "Description": "Sprites are diminutive, whimsical, and exuberant creatures from the fey realm known as the First World, loving pranks, exploration, and all things magic.", "Image": "../images/ancestriesRaces/Sprite.png", "normals" : ["Draxie", "Grig", "Luminous Sprite", "Melixie", "Nyktera", "Pixie"] },
        { "Name": "Strix", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=40", "Description": "Known as Itarii in their own language, strix are reclusive avian humanoids devoted to their homelands and tribes, defending their precious communities with broad wingspans and razor talons.", "Image": "../images/ancestriesRaces/Strix.png", "normals" : ["Nightglider", "Predator", "Scavenger", "Shoreline", "Songbird"] },
        { "Name": "Surki", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=76", "Description": "Surkis are only now emerging from the subterranean Darklands in a generational dig to the surface. This insectile and highly metamorphic species subsists on the latent magic in the world around them. Once they have refined enough, Surkis are capable of developing unique adaptations that allow them to project magic in diverse ways, from digging claws to energized wings.", "Image": "../images/ancestriesRaces/Surki.png", "normals" : ["Breaker", "Elytron", "Hardshell", "Lantern"] },
        { "Name": "Vishkanya", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=56", "Description": "Vishkanyas are ophidian(snakelike) humanoids who carry potent venom within their blood and saliva. Largely misunderstood due to old tales of their toxicity and natural finesse, vishkanyas work to grow into more than just what stories paint them to be.", "Image": "../images/ancestriesRaces/Vishkanyas.png", "normals" : ["Elusive Vishkanya", "Keen-Venom Vishkanya", "Old-Blood Vishkanya", "Prismatic Vishkanya", "Scalekeeper Vishkanya", "Venom-Resistant Vishkanya"] },
        { "Name": "Yaksha", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=92", "Description": "Divine spirits who emigrated to Golarion from the first world.", "Image": "../images/ancestriesRaces/Yaksha.png", "normals" : ["Deny Lady Nanbyo's Charity", "Deny The Firstborn Pursuit", "Deny The Traitor Rebirth", "Respite Of A Thousand Roofs", "Respite Of Cloudless Paths", "Respite Of Loam And Leaf"] },
        { "Name": "Yaoguai", "Link":"https://2e.aonprd.com/Ancestries.aspx?ID=93", "Description": "Beings who usually begin their existence as simple animals, objects, or plants, but have found a means to transcend their original forms through the power of cultivation.", "Image": "../images/ancestriesRaces/Yaoguai.png", "normals" : ["Born Of Animal", "Born Of Celestial", "Born Of Elements", "Born Of Item", "Born Of Vegetation"] }
];

const versatileHeritage = [
    "Ardande", "Aasimar", "Aphorite", "Beastkin", "Changeling", "Dhampir", "Duskwalker", "Ganzi", "Naari (formerly Ifrit)", "Reflection", "Suli", "Sylph", "Talos", "Tiefling", "Undine"
];

const soundForRandom = new Audio("../audios/soundForRandomVal.mp3");

//Choose random ancestry and return its index
function getRandomAncestry() {
    const randomIndex = Math.floor(Math.random() * ancestriesRaces.length);
    return ancestriesRaces[randomIndex];
}

//Normals or Versatile Heritage
function getRandomCategory() {
    const randomNum = Math.random();
    return randomNum < 0.75 ? "Normal" : "Versatile Heritage"; // 75% Normal, 25% Versatile
}

//Type of Normals/Versatile Heritage
function getRandomItem(sublist) {
    const randomIndex = Math.floor(Math.random() * sublist.length);
    return sublist[randomIndex];
}

// Generate Character
document.getElementById("generateButton").addEventListener("click", function () {
    const button = this;
    button.disabled = true; // Disable the button during generation

    // Clear previous results
    document.getElementById("ancestryResult").textContent = "";
    document.getElementById("categoryResult").textContent = "";
    document.getElementById("itemResult").textContent = "";
    document.getElementById("ancestryImageContainer").style.display = "none";

    // Generate Ancestry
    setTimeout(() => {
        const ancestry = getRandomAncestry();//index of chosen ancestry
        document.getElementById("ancestryResult").textContent = `Ancestry: ${ancestry.Name}`;

        soundForRandom.play();

        // Generate Category
        setTimeout(() => {
            const category = getRandomCategory();
            document.getElementById("categoryResult").textContent = `Category: ${category}`;

            soundForRandom.pause();
            soundForRandom.currentTime = 0;
            soundForRandom.play();

            // Generate Item
            setTimeout(() => {
                if (category === "versatile") {
                    const item = getRandomItem(versatileHeritage);
                    document.getElementById("itemResult").textContent = `Versatile Heritage: ${item}`;
                } else {
                    const sublist = ancestry.normals;
                    const item = getRandomItem(sublist);
                    document.getElementById("itemResult").textContent = `Normal: ${item}`;
                }

                soundForRandom.pause();
                soundForRandom.currentTime = 0;
                soundForRandom.play();

                // Display Ancestry Image, Link, and Description
                document.getElementById("ancestryImage").src = ancestry.Image;
                document.getElementById("ancestryLink").href = ancestry.Link;
                document.getElementById("ancestryDescription").textContent = ancestry.Description;
                document.getElementById("ancestryImageContainer").style.display = "block";

                // Re-enable the button
                button.disabled = false;
            }, 500); // 1-second delay for item
        }, 500); // 1-second delay for category
    }, 500); // 1-second delay for ancestry
});