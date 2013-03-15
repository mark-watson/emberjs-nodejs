RecipeTracker.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

RecipeTracker.RecipeListingsView = Ember.View.extend({
    click: function(event) {
        var content = this.get('content');
        RecipeTracker.selectedRecipeController.select(content);
    },
    nextRecipe: function(event) {
        RecipeTracker.selectedRecipeController.next();
    }
});

RecipeTracker.SelectedRecipeView = Ember.View.extend({});

RecipeTracker.RecipeDetailsView = Ember.View.extend({
    contentBinding: 'RecipeTracker.selectedRecipeController.selectedRecipe'
});
