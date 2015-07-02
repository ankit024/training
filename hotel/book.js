function formValidation()
{
    var uid = document.booking.firstname;
    var passid = document.booking.surname;
    var ucountry = document.booking.telephone;
    var uname = document.booking.country;
    var uadd = document.booking.city;
    var uemail = document.booking.pincode;
    var uzip = document.booking.address;
    var umsex = document.booking.email;
    var uarrival = document.booking.arrival;
    var ustay = document.booking.stay;
    var uadults = document.booking.adults;
    var ukids = document.booking.kids;
    if(allLetter(uid)) {
        if (lname_validation(passid)) {
            if (tel_validation(ucountry, 8, 12)) {
                if(test_validation(uname)){
                    if (city_validation(uadd)) {
                        if (pin_validation(uemail)) {
                            if (add_validation(uzip)) {
                                if (email_validation(umsex)){
                                    if( arrival_validation(uarrival)){
                                        if (stay_validation(ustay,1,2)){
                                            if (adults_validation(uadults,1,2)){
                                                if (kids_validation(ukids,1,2)){

                                                }
                                            }
                                        }
                                    }
                                }


                            }
                        }
                    }
                }
            }
        }
    }
    else
    {
        return false;
    }
}
function allLetter(uid)
{
    var letters = /^[A-Za-z]+$/;
    if(uid.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('firstname must have alphabet characters only');
        uid.focus();
        return false;
    }
}
function lname_validation(passid)
{
    var letters = /^[A-Za-z]+$/;
    if(passid.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('lastname must have alphabet characters only');
        passid.focus();
        return false;
    }
}
function tel_validation(ucountry,mx,my)
{
    var ucountry_len = ucountry.value.length;
    if (ucountry_len == 0 || ucountry_len >= my || ucountry_len < mx)
    {
        alert("telephone should not be empty / length be between "+mx+" to "+my);
        ucountry.focus();
        return false;
    }
    return true;
}
function test_validation(uname)
{

    return true;
}
function city_validation(uadd)
{
    var letters = /^[A-Za-z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('city must have alphabet characters only');
        uadd.focus();
        return false;
    }
}
function pin_validation(uemail)
{

    var numbers = /^[0-9]+$/;
    if(uemail.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('zipcode must have numeric characters only');
        uemail.focus();
        return false;
    }
}

function add_validation(uzip)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(uzip.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uzip.focus();
        return false;
    }
}
function email_validation(umsex)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(umsex.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        umsex.focus();
        return false;
    }
}
function arrival_validation(uarrival)
{

    return true;
}


function stay_validation(ustay,mx,my)
{

    return true;
}
function adult_validation(uadults,mx,my)
{
    var uadults_len = uadults.value.length;
    if (uadults_len == 0 || uadults_len >= my || uadults_len < mx)
    {
        alert("invalid persons");
        uadults.focus();
        return false;
    }
    return true;
}

function kids_validation(ukids,mx,my) {
    var ukids_len = ukids.value.length;
    if (ukids_len == 0 || ukids_len >= my || ukids_len < mx) {
        alert("invalid no.");
        ukids.focus();
        return false;
    }
    else
    {
        alert('form successfully submitted');

        return true


    }
}