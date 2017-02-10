
var app = angular.module('bodineChronicles', ['ngRoute','ngDialog', 'simplePagination', 'youtube-embed']);



app.controller('homeController', function($scope, $location, ngDialog, Pagination) {
	
	var vm = this;
	vm.name ="Michael Bodine";
	vm.gitHubLink = "https://github.com/mbodine/PortfolioWebsite";
	vm.videos = [{url: "https://www.youtube.com/embed/dgirWrBNgh4",
				  title:"CSU Department of Recreation & Wellness",
				 description:"This was a project defined by the department to increase the total number of participants into the recreational facility. Whether it being in the Gym, Zumba Classes, Outdoor Adventure, or intramural programs, this video explains everything the department has to offer its' students."},
				{url: "https://www.youtube.com/watch?v=AMOVGLK_iVI",
				 title:"CSU Outdoor Adventure",
				 description: "The purpose of this video is to get more students involved in the Department of Recreation & Wellness, specifically the Outdoor Adventure program. This video highlights a variety of trips the department participates in so students can have fun and get outdoors!"},
				{url: "https://www.youtube.com/watch?v=LSQFI3Vkf_c",
				 title:"Edit Stock Free Sample",
				 description: "This is a free download from EditStock.com of HD Footage. I downloaded and edited this video just as a showcase of my skillset with professional shot footage."},
				 {url: "https://www.youtube.com/watch?v=32nN-8zHrYI",
				  title:"Halo Montage",
				 description: "This montage combines my love for gaming with my love for editing. This also doubled as a school project with added effects and typography coming onto the screen. This montage includes some of my moments while playing Halo 3, Halo Reach, and Halo 4. Get ready for a punch at the end with some After Effects!"},
				 {url: "https://www.youtube.com/watch?v=XVtcncbQMH8",
				  title:"Stop Clowning Around",
				 description: "This was a creation made in a video class in college. Hope you enjoy the story and fun quirks it has. This is a story about Jolly Molly who hangs with a group of clowns who cause nothing but trouble in Jolly's parents eyes'. Her parents want her to get a life and grow up. Watch to find out if she can overcome her obstacles. Special thanks to everyone involved!"},
				 {url: "https://www.youtube.com/watch?v=T4dzTcd4qPQ",
				  title:"Professor Mom",
				 description: "This was shot for a class project and this particular concept is a 'chase' film built around school. The idea of this story is that a young girl hasn't seen her mother since she ran away, and turns out her mother is actually teaching the class. Will she catch her to 'talk'? Find out! Special thanks to everyone involved!"},
				 {url: "https://www.youtube.com/watch?v=U0qjBCCR_EE",
				  title:"Destination Market",
				 description: "This is an editing project for class where we took stock footage and had to edit it together to tell the story about the market."},
				 {url: "https://www.youtube.com/watch?v=Dgwh4gOE5dM",
				  title:"True to Myself Tyopgraphy",
				 description:"This is a project I started in After Effects and thought it'd be a cool way to get into Typography. I learned a little through school and thought this would make for a nice showcase." },
				 {url: "https://www.youtube.com/watch?v=NKMV-Qz1L_o",
				  title:"Sword Fight",
				 description: "This is an editing project for class where we took stock footage and had to edit it together to tell a story, but with your own little twist."}
				];
	
    vm.testFunction = function () {
    return $http.get(url, {})
        .then(function (response) { // success is deprecated, use then instead
          console.log(url);
            
        })
        .catch(function (error) {   // use catch instead of error
            // error
        });
};
	
	vm.openLinkedinNewTab = function(url){
		console.log("New Tab is being created");
		var win = window.open(url, '_blank');
    	win.focus();	
	};
	
	vm.emailModal = function(){
	console.log("Inside Email Modal");
		ngDialog.open({ template: 'views/emailModal.html'});
	};
	
	
	vm.resumeModal = function(){
		console.log("Inside the Resume Modal");
		ngDialog.open({ template: 'views/resumeModal.html'});
	};
	
	vm.openNav = function(){
	    document.getElementById("mySidenav").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	};
	
	vm.closeNav = function(){
		document.getElementById("mySidenav").style.display = "none";
    	document.getElementById("myOverlay").style.display = "none";
	};
	
	

});

	//routes
	
	app.config(function($routeProvider) {
    $routeProvider
	.when('/', {
        templateUrl : 'home.html',
		controller: 'homeController'
    })
    .when('/FilmExamples', {		
        templateUrl : 'views/videos.html',
		controller: 'homeController'
    })
	.when('/home', {		
        templateUrl : 'home.html',
		controller: 'homeController'
    })
	.when('/success', {
        templateUrl : 'onSuccess.html',
		controller: 'homeController'
    })
	.otherwise({
			redirectTo: '/'
		});
});

