function startApp() {

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_ryWxxKize";
    const kinveyAppSecret =
        "23955c96343e4a35b067d2edb28da329";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " +
        btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    sessionStorage.clear();
    showView('banner');

    $('#linkLogin').click(showLoginForm);
    $('#linkRegister').click(showRegisterForm);
    $('#linkHome').click(showHomeView);

    function showHomeView(){
        showView('banner');
    }
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