// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent("recipes", event => {
	unwantedRecipes(event);
	metalSheets(event);
	computers(event);
	storageNetwork(event);
	strainers(event);
	fixMissingRecipes(event);
});

// Make computer-related recipes more expensive.
function computers(event) {
	// Make computers more expensive.
	event.remove({ output: "computercraft:computer_advanced" });
	event.shaped("computercraft:computer_advanced", [
		"BBB",
		"BCB",
		"B B"
	], {
		B: "create:brass_sheet",
		C: "computercraft:computer_normal"
	});
	event.shaped("computercraft:computer_advanced", [
		"BBB",
		"BEB",
		"BGB"
	], {
		B: "create:brass_sheet",
		E: "create:electron_tube",
		G: "#forge:glass_panes"
	});
	event.remove({ output: "computercraft:computer_command" });
	event.shaped("computercraft:computer_command", [
		"BBB",
		"BCB",
		"BGB"
	], {
		B: "create:brass_sheet",
		C: "minecraft:command_block",
		G: "#forge:glass_panes"
	});
	event.remove({ output: "computercraft:computer_normal" });
	event.shaped("computercraft:computer_normal", [
		"AIA",
		"IEI",
		"AGA"
	], {
		A: "create:andesite_alloy",
		E: "create:electron_tube",
		I: "create:iron_sheet",
		G: "#forge:glass_panes"
	});

	// Make peripherals more expensive.
	event.remove({ output: "computercraft:cable" });
	event.shaped("6x computercraft:cable", [
		" A ",
		"ARA",
		" A "
	], {
		A: "create:andesite_alloy",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:disk_drive" });
	event.shaped("computercraft:disk_drive", [
		"AIA",
		"IRI",
		"ARA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:monitor_advanced" });
	event.shaped("2x computercraft:monitor_advanced", [
		"BBB",
		"BGB",
		"BBB"
	], {
		B: "create:brass_sheet",
		G: "#forge:glass_panes"
	});
	event.remove({ output: "computercraft:monitor_normal" });
	event.shaped("2x computercraft:monitor_normal", [
		"AIA",
		"IGI",
		"AIA"
	], {
		A: "create:andesite_alloy",
		G: "#forge:glass_panes",
		I: "create:iron_sheet"
	});
	event.remove({ output: "computercraft:printer" });
	event.shaped("computercraft:printer", [
		"AIA",
		"IRI",
		"ADA"
	], {
		A: "create:andesite_alloy",
		D: "#forge:dyes",
		I: "create:iron_sheet",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:speaker" });
	event.shaped("computercraft:speaker", [
		"AIA",
		"INI",
		"ARA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		N: "minecraft:note_block",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:wired_modem" });
	event.shapeless("computercraft:wired_modem", ["computercraft:wired_modem_full"]);
	event.shaped("2x computercraft:wired_modem", [
		"AIA",
		"IRI",
		"AIA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:wireless_modem_advanced" });
	event.shaped("computercraft:wireless_modem_advanced", [
		"BBB",
		"BEB",
		"BBB"
	], {
		B: "create:brass_sheet",
		E: "minecraft:ender_eye"
	});
	event.remove({ output: "computercraft:wireless_modem_normal" });
	event.shaped("computercraft:wireless_modem_normal", [
		"AIA",
		"IPI",
		"AIA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		P: "minecraft:ender_pearl"
	});

	// Make pocket computers more expensive.
	event.remove({ output: "computercraft:pocket_computer_advanced" });
	event.shaped("computercraft:pocket_computer_advanced", [
		"BBB",
		"BPB",
		"BGB"
	], {
		B: "create:brass_sheet",
		G: "#forge:glass_panes",
		P: "minecraft:golden_apple"
	});
	event.shaped("computercraft:pocket_computer_advanced", [
		"BBB",
		"BCB",
		"B B"
	], {
		B: "create:brass_sheet",
		C: "computercraft:pocket_computer_normal"
	});
	event.remove({ output: "computercraft:pocket_computer_normal" });
	event.shaped("computercraft:pocket_computer_normal", [
		"AIA",
		"IPI",
		"AGA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		G: "#forge:glass_panes",
		P: "minecraft:golden_apple"
	});

	// Make turtles more expensive.
	event.remove({ output: "computercraft:turtle_advanced" });
	event.shaped("computercraft:turtle_advanced", [
		"BBB",
		"BCB",
		" L "
	], {
		B: "create:brass_sheet",
		C: "computercraft:computer_normal",
		L: "create:brass_block"
	});
	event.shaped("computercraft:turtle_advanced", [
		"BBB",
		"BCB",
		"BHB"
	], {
		B: "create:brass_sheet",
		C: "computercraft:computer_advanced",
		H: "#forge:chests/wooden"
	});
	event.remove({ output: "computercraft:turtle_normal" });
	event.shaped("computercraft:turtle_normal", [
		"AIA",
		"ICI",
		"AHA"
	], {
		A: "create:andesite_alloy",
		C: "computercraft:computer_normal",
		H: "#forge:chests/wooden",
		I: "create:iron_sheet"
	});
}

// Recreate any recipes that are missing.
function fixMissingRecipes(event) {
	event.shapeless("minecraft:trapped_chest", ["minecraft:chest", "minecraft:tripwire_hook"]);
}

// Make recipes use metal sheets instead of ingots.
function metalSheets(event) {
	// Tweak Farmer's Delight recipes.
	replaceIron(event, "farmersdelight:cooking_pot");
	replaceIron(event, "farmersdelight:skillet");
	replaceIron(event, "farmersdelight:stove");

	// Tweak miscellaneous recipes.
	replaceIron(event, "minecraft:bucket");
	replaceIron(event, "minecraft:cauldron");
	replaceIron(event, "minecraft:chest_minecart");
	replaceIron(event, "minecraft:furnace_minecart");
	replaceIron(event, "minecraft:heavy_weighted_pressure_plate");
	replaceIron(event, "minecraft:hopper");
	replaceIron(event, "minecraft:hopper_minecart");
	replaceIron(event, "minecraft:iron_door");
	replaceIron(event, "minecraft:iron_trapdoor");
	replaceGold(event, "minecraft:light_weighted_pressure_plate");
	replaceIron(event, "minecraft:minecart");
	replaceIron(event, "minecraft:stonecutter");
	replaceIron(event, "minecraft:tnt_minecart");
	replaceIron(event, "quark:iron_plate");
	replaceIron(event, "quark:rusty_iron_plate");
	replaceIron(event, "supplementaries:bomb");
	replaceIron(event, "supplementaries:cage");
	replaceGold(event, "supplementaries:gold_door");
	replaceGold(event, "supplementaries:gold_trapdoor");
	replaceIron(event, "supplementaries:spring_launcher");

	// Tweak vanilla armor recipes.
	replaceGold(event, "minecraft:golden_boots");
	replaceGold(event, "minecraft:golden_chestplate");
	replaceGold(event, "minecraft:golden_helmet");
	replaceGold(event, "minecraft:golden_leggings");
	replaceIron(event, "minecraft:iron_boots");
	replaceIron(event, "minecraft:iron_chestplate");
	replaceIron(event, "minecraft:iron_helmet");
	replaceIron(event, "minecraft:iron_leggings");
}

// Replace gold ingots with gold sheets in a recipe.
function replaceGold(event, output) {
	event.replaceInput({ output: output }, "minecraft:gold_ingot", "create:golden_sheet");
}

// Replace iron ingots with iron sheets in a recipe.
function replaceIron(event, output) {
	event.replaceInput({ output: output }, "minecraft:iron_ingot", "create:iron_sheet");
}

// Make Simple Storage Network recipes more expensive.
function storageNetwork(event) {
	event.replaceInput({ output: "storagenetwork:collector" }, "minecraft:iron_nugget", "create:brass_nugget");
	event.replaceInput({ output: "storagenetwork:crafting_remote" }, "minecraft:gold_block", "create:brass_block");
	event.replaceInput({ output: "storagenetwork:exchange" }, "minecraft:iron_nugget", "create:brass_nugget");
	event.replaceInput({ output: "storagenetwork:inventory" }, "minecraft:iron_nugget", "create:brass_nugget");
	event.replaceInput({ output: "storagenetwork:inventory_remote" }, "minecraft:gold_ingot", "create:brass_ingot");
	event.replaceInput({ output: "storagenetwork:kabel" }, "minecraft:stone_slab", "create:andesite_alloy");
	event.replaceInput({ output: "storagenetwork:master" }, "minecraft:quartz_block", "create:brass_casing");
	event.replaceInput({ output: "storagenetwork:request" }, "minecraft:gold_ingot", "create:brass_ingot");	
}

// Get rid of unwanted recipes.
function unwantedRecipes(event) {
	// Remove Quark stone variants.
    event.remove({ output: "quark:andesite_bricks_slab" });
    event.remove({ output: "quark:andesite_bricks_vertical_slab" });
    event.remove({ output: "quark:andesite_vertical_slab" });
    event.remove({ output: "quark:calcite_bricks_slab" });
    event.remove({ output: "quark:calcite_bricks_vertical_slab" });
    event.remove({ output: "quark:calcite_slab" });
    event.remove({ output: "quark:calcite_vertical_slab" });
    event.remove({ output: "quark:diorite_bricks_slab" });
	event.remove({ output: "quark:diorite_bricks_vertical_slab" });
    event.remove({ output: "quark:dripstone_bricks_slab" });
    event.remove({ output: "quark:dripstone_bricks_vertical_slab" });
    event.remove({ output: "quark:granite_bricks_slab" });
	event.remove({ output: "quark:granite_bricks_vertical_slab" });
    event.remove({ output: "quark:polished_calcite_slab" });
	event.remove({ output: "quark:polished_calcite_vertical_slab" });
    event.remove({ output: "quark:polished_dripstone_slab" });
    event.remove({ output: "quark:polished_dripstone_vertical_slab" });
    event.remove({ output: "quark:polished_tuff_slab" });
	event.remove({ output: "quark:polished_tuff_vertical_slab" });
	event.remove({ output: "quark:tuff_bricks_slab" });
	event.remove({ output: "quark:tuff_bricks_vertical_slab" });

    // Remove duplicate rope.
	event.remove({ output: "farmersdelight:rope" });

	// Remove Waystone recipes.
	event.remove({ mod: "waystones" });
}

// Make Water Strainer recipes use Farmer's Delight items.
function strainers(event) {
	event.replaceInput({ output: "waterstrainer:string_mesh" }, "minecraft:string", "farmersdelight:canvas");
}
