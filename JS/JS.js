
function jQueryF1(){

	$(".menu-parent").click(function(){
		var id=$(this).attr("id");
		var classs1=$("#"+id).attr("class");
		var classs2=$("#"+id+"-menu").attr("class");
		var existed=classs2.indexOf("show-b");


		var id2=$("#nav").attr("role");
		if($("#nav").attr("role")!=""){
			$("#"+id2).attr("style", "color: rgba(0,0,0,.4);");

			$("#"+id2+"-menu").attr("style", $("#"+id2+"-menu").attr("style").replace(" display: none;", ""));
			classs2=classs2.replace(" show-b", "");
			$("#"+id2+"-menu").attr("class", classs2);
		}

		$("#nav").attr("role", id);

		var id3=$("#nav").attr("role2");
		if($("#nav").attr("role2")!=""){
			classs2=$("#"+id3+"-menu").attr("class");

			$("#"+id3+"-menu").attr("style", $("#"+id3+"-menu").attr("style")+" display: none;");
			classs2=classs2.replace(" show-b", "");
			$("#"+id3+"-menu").attr("class", classs2);
		}

		$("#nav").attr("role2", "");


		if (existed==-1) {
			$("#"+id).attr("style", "color: rgba(0,0,0,1)");

			$("#"+id+"-menu").attr("style", $("#"+id+"-menu").attr("style").replace(" display: none;", ""));
			classs2=classs2+" show-b";
			$("#"+id+"-menu").attr("class", classs2);
		}
		else{
			$("#"+id).attr("style", "color: rgba(0,0,0,.4);");

			$("#"+id+"-menu").attr("style", $("#"+id+"-menu").attr("style")+" display: none;");
			classs2=classs2.replace(" show-b", "");
			$("#"+id+"-menu").attr("class", classs2);

			$("#nav").attr("role", "");
		}
	});


	$(".sub-parent").click(function(){
		var id=$(this).attr("id");
		var classs1=$("#"+id).attr("class");
		var classs2=$("#"+id+"-menu").attr("class");
		var existed=classs2.indexOf("show-b");

		$("#nav").attr("role2", id);

		if (existed==-1) {
			$("#"+id+"-menu").attr("style", $("#"+id+"-menu").attr("style").replace(" display: none;", ""));
			classs2=classs2+" show-b";
			$("#"+id+"-menu").attr("class", classs2);
		}
		else{
			$("#"+id+"-menu").attr("style", $("#"+id+"-menu").attr("style")+" display: none;");
			classs2=classs2.replace(" show-b", "");
			$("#"+id+"-menu").attr("class", classs2);
		}
	});

	//hadi bach mli nbrk 3la chi nav-link 3adi itjm3o dok les dropdown *(khass nzid fihom class="simple-nav-link")
	$(".simple-nav-link").click(function(){
		var id2=$("#nav").attr("role");
		if($("#nav").attr("role")!=""){
			var classs2=$("#"+id2+"-menu").attr("class");

			$("#"+id2).attr("style", "color: rgba(0,0,0,.4);");

			$("#"+id2+"-menu").attr("style", $("#"+id2+"-menu").attr("style")+" display: none;");
			classs2=classs2.replace(" show-b", "");
			$("#"+id2+"-menu").attr("class", classs2);
		}

		$("#nav").attr("role", "");


		var id3=$("#nav").attr("role2");
		if($("#nav").attr("role2")!=""){
			classs2=$("#"+id3+"-menu").attr("class");

			$("#"+id3+"-menu").attr("style", $("#"+id3+"-menu").attr("style")+" display: none;");
			classs2=classs2.replace(" show-b", "");
			$("#"+id3+"-menu").attr("class", classs2);
		}

		$("#nav").attr("role2", "");
	});

	//hadi bach mlli nbrk fchi blasa brra itjm3o dok les dropdown
	$(document).click(function(){
		var id2=$("#nav").attr("role");
		if($("#nav").attr("role")!=""){
			var classs2=$("#"+id2+"-menu").attr("class");

			$("#"+id2).attr("style", "color: rgba(0,0,0,.4);");

			$("#"+id2+"-menu").attr("style", $("#"+id2+"-menu").attr("style")+" display: none;");
			classs2=classs2.replace(" show-b", "");
			$("#"+id2+"-menu").attr("class", classs2);
		}

		$("#nav").attr("role", "");


		var id3=$("#nav").attr("role2");
		if($("#nav").attr("role2")!=""){
			classs2=$("#"+id3+"-menu").attr("class");

			$("#"+id3+"-menu").attr("style", $("#"+id3+"-menu").attr("style")+" display: none;");
			classs2=classs2.replace(" show-b", "");
			$("#"+id3+"-menu").attr("class", classs2);
		}

		$("#nav").attr("role2", "");
	});
}




function mo_code_copy(){
	$(document).ready(function(){
		var button="<div class='mo_tooltip'><span class='mo_tooltiptext'>Copy</span><button class='btn btn-link mo_code_copy_EnlighterJS'><i class='fas fa-copy fa-lg'></i></button></div>";

		$(".mo_code_copy").next().find("ol").prepend(button);

		$(".mo_code_copy_EnlighterJS").click(function(){
			var code=$(this).parents(".enlighterEnlighterJSWrapper").prev().html();
			code=code.replace("&lt;","<");
			code=code.replace("&gt;",">");
			code=code.trim();

			var $temp = $("<textarea>");
			$("body").append($temp);
			$temp.val(code).select();
			document.execCommand("copy");
			$temp.remove();

			$(".mo_tooltiptext").text("Copied");
			$(".mo_tooltiptext").css({"margin-left": "-85px"});
		});

		$(".mo_code_copy_EnlighterJS").mouseout(function(){
			$(".mo_tooltiptext").text("Copy");
			$(".mo_tooltiptext").css({"margin-left": "-70px"});
		});	



	});


	function myFunction() {
	 
	  var tooltip = document.getElementById("myTooltip");
	  tooltip.innerHTML = "Copied";
	}

	function outFunc() {
	  var tooltip = document.getElementById("myTooltip");
	  tooltip.innerHTML = "Copy";
	}


}

