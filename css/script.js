$("document").ready(function(){
	$(".save").click(function(){
		var id= $('input[name="ID"]').val();
		var name= $('input[name="NAME"]').val();
		var city= $('input[name="CITY"]').val();
		var phone= $('input[name="PHONE"]').val();

		 var tr= '<tr><td>'+id+'</td><td>'+name+'</td><td>'+city+'</td><td>'+phone+'</td><td><button class="dlt">dlt</button><button class="edit">edit</td></tr>';
		 if(id!="" && name != ""  && city != ""  && phone != ""){
		$('tbody').append(tr);
		$('input').css("border-color","#dee2e6")
		$('input').val("");
	    }
	    else if(id==""){
			$('input[name="ID"]').css("border-color","red");
		}
		else if(name==""){
			$('input[name="NAME"]').css("border-color","red");
		}
		else if(city==""){
			$('input[name="CITY"]').css("border-color","red");
		}
		else if(phone==""){
			$('input[name="PHONE"]').css("border-color","red");
		}
		$(".add").click(function(){
   	$('input').show();

   })
   $(".ok").click(function(){
   	$('input').hide();
   })
   $(".dlt").click(function(){
   	var a= confirm("you want to remove this row")
   	if(a==true){
   	
   		$(this).parents('tr').remove();
   	}
   	$(".edit").click(function(){

   	})
   	})

	});
});