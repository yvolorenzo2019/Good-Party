// This is a JavaScript file
$(document).on("click","#logar",function(){
     var form_data = new FormData();
     form_data.append("senha",$("#senha").val());
     form_data.append("email",$("#email").val());

        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/login.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(data){
          location.reload(); 
         }
     });
});