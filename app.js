var express = require('express');

var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');

var path = require('path');
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', routes.home);

app.get('/visualization/1', routes.movie_single);
app.get('/visualization/2', routes.movie_single2);
app.get('/visualization/3', routes.movie_single3);
app.get('/visualization/4', routes.movie_single4);
app.get('/visualization/5', routes.movie_single5);
app.get('/visualization/6', routes.movie_single6);
app.get('/visualization/7', routes.movie_single7);
app.get('/visualization/8', routes.movie_single8);
app.get('/visualization/9', routes.movie_single9);
app.get('/star_wars_episode/10', routes.movie_single10);
app.get('/star_wars_episode/11', routes.movie_single11);
app.get('/star_wars_episode/12', routes.movie_single12);
app.get('/star_wars_episode/13', routes.movie_single13);
app.get('/star_wars_episode/14', routes.movie_single14);
app.get('/star_wars_episode/15', routes.movie_single15);
app.get('/star_wars_episode/16', routes.movie_single16);
app.get('/star_wars_episode/17', routes.movie_single17);
app.get('/star_wars_episode/18', routes.movie_single18);
app.get('/star_wars_episode/19', routes.movie_single19);
app.get('/star_wars_episode/20', routes.movie_single20);
app.get('/star_wars_episode/21', routes.movie_single21);
app.get('/star_wars_episode/22', routes.movie_single22);
app.get('/star_wars_episode/23', routes.movie_single23);
app.get('/star_wars_episode/24', routes.movie_single24);
app.get('/star_wars_episode/25', routes.movie_single25);
app.get('/star_wars_episode/26', routes.movie_single26);
app.get('/star_wars_episode/27', routes.movie_single27);
app.get('/star_wars_episode/28', routes.movie_single28);
app.get('/star_wars_episode/29', routes.movie_single29);
app.get('/star_wars_episode/30', routes.movie_single30);
app.get('/star_wars_episode/31', routes.movie_single31);
app.get('/star_wars_episode/32', routes.movie_single30);
app.get('/star_wars_episode/33', routes.movie_single31);





app.get('*', routes.notFound);


// Listen on port 3000
app.listen(process.env.PORT || 3000);