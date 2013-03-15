
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

var data =   /* sample recipe data */
    [
        {"title": "Gazpacho",
            "ingredients": "Ingredients: 2 onions, 2 garlic cloves peeled and minced, 1 cup of chopped green pepper, 2 cups water, 2 teaspoons salt, 1/3 teaspoon black pepper, 1/3 cup red wine vinegar, 1 cup peeled and chopped cucumber, 5 tablespoons olive oil",
            "directions": "Combine the onions, garlic, green peppers and tomatoes. Force through a sieve or puree in a blender. Add the salt, pepper and paprika. Add the olive oil gradually, beating steadily. Add the vinegar and water and stir well. Season to taste. Refrigerate and chill for at least two hours"},
        {"title": "Balsamic Mushrooms",
            "directions": "Place all ingredients in a (preferably nonstick) pan and let sit for a few minutes. Then cook covered over medium heat for about three minutes until they are soft. Remove the cover and cook until the liquid is almost gone, then serve.",
            "ingredients": "12 mushrooms, 1/4 cup balsamic vinegar, 1/8 cup red wine"}
    ];

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //app.use(express.cookieParser('your secret here'));
  //app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.get('/recipes', function(req, res) {
    res.send(data);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
