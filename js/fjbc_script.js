//JQUERY FUNCTIONS
$(document).ready(function() {
	$("h2#pi").click(function () {
		$("div#personal_info > div").toggle("slide", 1000);
		$("hr#separator").toggle("slide", 1000);
		$("div#desire_job").toggle("slide", 1000);
	});
	$("h2#we").click(function () {
		$("div#work_1 > div").toggle("slide", 1000);
		$("div#work_2 > div").toggle("slide", 1000);
		$.scrollTo('div#work_experience', 800);
	});
	$("h2#edu").click(function () {
		$("div#edu1 > div").toggle("slide", 1000);
		$.scrollTo('div#education', 800);
	});
	$("h2#sk").click(function () {
		$("div#skills > div").toggle("slide", 1000);
		$.scrollTo('div#skills', 800);
	});
	$("h2#pj").click(function () {
		$("div#projects > div").toggle("clip", 1000);
		$.scrollTo('div#projects', 800);
	});
});
