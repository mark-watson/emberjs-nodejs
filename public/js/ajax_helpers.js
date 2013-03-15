RecipeTracker.GetRecipeItems = function() {
    $.ajax({
        url: '/recipes/',
        dataType: 'json',
        success : function(data) {
            for (var i = 0, len = data.length; i < len; i++) {
                RecipeTracker.recipesController.addItem(RecipeTracker.Recipe.create({
                    title: data[i]['title'],
                    directions: data[i]['directions'],
                    ingredients: data[i]['ingredients']
                }));
            }
        } });
};
