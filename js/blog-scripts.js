function startApp() {
    showView('banner');

    $('#linkLogin').click(showLoginForm);
    $('#linkRegister').click(showRegisterForm);

    function showLoginForm(){
        showView('viewLogin');
    }
    function showRegisterForm(){
        showView('viewRegister');
    }
   function showView(viewName){
       $('main > section').hide();
       $('#'+ viewName).show();
   }

}