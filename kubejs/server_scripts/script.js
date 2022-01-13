// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent("recipes", event => {	
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
});
