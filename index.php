<html>
<head>
<title>Bodine Chronicles</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/w3.css">

<link rel="stylesheet" href="css/ngDialog.min.css">
<link rel="stylesheet" href="css/ngDialog-theme-default.min.css">
<link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" src="css/home.css">
	<script type="text/javascript" src="js/angular-1.6.1/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-1.6.1/angular.js"></script>
	<script type="text/javascript" src="js/angular-1.6.1/angular-route.js"></script>
	<script type="text/javascript" src="js/angular-1.6.1/angular-sanitize.js"></script>
	<script type="text/javascript" src="js/ngDialog.min.js"></script>
	<script type="text/javascript" src="js/controllers/homeController.js"/></script>
	<script type="text/javascript" src="js/simplePagination.js"/></script>
	<script src="https://www.youtube.com/iframe_api"></script>
	<script type="text/javascript" src="js/angular-youtube-embed.js"/></script>
	<script type="text/javascript" src="js/angular-youtube-embed.min.js"/></script>
</head>


<body ng-app="bodineChronicles" class="w3-light-gray">

<!-- CONTAINER-->
<div ng-controller="homeController as vm" class="w3-content" style="max-width:1400px">

<div ng-view></div>

<!-- END CONTAINER -->
</div>

</body>
</html>
