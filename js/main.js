$(document).ready(function()
{
	$("#hide").click(function()
	{
		$("p").hide("fast");
	});

	$("#show").click(function()
	{
		//$("p").show(1000);

		$("p").toggle();
	});
});