RecipeTracker = Ember.Application.createWithMixins({
	ready: function() {
		RecipeTracker.GetRecipeItems();   // this triggers an AJAX call to Clojure REST interface
	}
});

