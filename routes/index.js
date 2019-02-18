var moviesJSON = require('../movies.json');

// Home Route
exports.home = function(req, res) {

	var movies = moviesJSON.movies;

	res.render('home', {
		title: "Star Wars Movies",
		movies : movies
	});
};

// Movie-single route
exports.movie_single = function(req, res) {
	var episode_number = 1;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 1) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single2 = function(req, res) {
	var episode_number = 2;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 2) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single2', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single3 = function(req, res) {
	var episode_number = 3;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 3) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single3', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single4 = function(req, res) {
	var episode_number = 4;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 4) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single4', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single5 = function(req, res) {
	var episode_number = 5;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 5) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single5', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single6 = function(req, res) {
	var episode_number = 6;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 6) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single7 = function(req, res) {
	var episode_number = 7;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 7) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single8 = function(req, res) {
	var episode_number = 8;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 8) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single9 = function(req, res) {
	var episode_number = 9;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 9) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single10 = function(req, res) {
	var episode_number = 10;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 10) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single11 = function(req, res) {
	var episode_number = 11;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 11) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single12 = function(req, res) {
	var episode_number = 12;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 12) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single13 = function(req, res) {
	var episode_number = 13;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 13) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single14 = function(req, res) {
	var episode_number = 14;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 14) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single15 = function(req, res) {
	var episode_number = 15;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 15) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single16 = function(req, res) {
	var episode_number = 16;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 16) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single17 = function(req, res) {
	var episode_number = 17;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 17) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single18 = function(req, res) {
	var episode_number = 18;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 18) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single19 = function(req, res) {
	var episode_number = 19;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 19) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single20 = function(req, res) {
	var episode_number = 20;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 20) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single21 = function(req, res) {
	var episode_number = 21;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 21) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single22 = function(req, res) {
	var episode_number = 22;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 22) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single23 = function(req, res) {
	var episode_number = 23;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 23) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single24 = function(req, res) {
	var episode_number = 24;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 24) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single25 = function(req, res) {
	var episode_number = 25;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 25) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single26 = function(req, res) {
	var episode_number = 26;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 26) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single27 = function(req, res) {
	var episode_number = 27;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 27) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single28 = function(req, res) {
	var episode_number = 28;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 28) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single29 = function(req, res) {
	var episode_number = 29;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 29) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single30 = function(req, res) {
	var episode_number = 30;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 30) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single31 = function(req, res) {
	var episode_number = 31;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 31) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single32 = function(req, res) {
	var episode_number = 32;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 32) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

exports.movie_single33 = function(req, res) {
	var episode_number = 33;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (episode_number == 33) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		var graph = movie.graph;

		var html = movie.html;
		
		res.render('movie_single6', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters,
			graph : graph,
			html : html
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};


// Route for all other page requests
exports.notFound = function(req, res) {
	var movies = moviesJSON.movies;
	res.render('notFound', {
		movies : movies,
		title : "Oops, this page doesn't exist"
	});
};