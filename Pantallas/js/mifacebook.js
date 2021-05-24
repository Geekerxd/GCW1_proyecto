var facebook = '';
var nombref = '';
var apellidof = '';
window.fbAsyncInit = function () {
    FB.init({
        appId: '495801004802514',
        cookie: true,
        xfbml: true,
        version: 'v2.1'
    });

    FB.AppEvents.logPageView();

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log(JSON.stringify(response));
        }
    });
    FB.api('/me', function (response) {
        console.log(JSON.stringify(response));
        facebook = JSON.parse(JSON.stringify(response));
        array = facebook.name.split(' ');
        (function (nombref, apellidof) {
            nombref; // 1
            apellidof; // 2
        }).apply(null, array);
        document.getElementById('nombre').value =facebook.name;
        document.getElementById('email2').value = "gag_g249A@hotmail.com";
    });
}



