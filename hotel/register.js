function formValidation()
{
    var uid = document.registration.firstname;
    var passid = document.registration.lastname;
    var uname = document.registration.pwd;
    var uadd = document.registration.bday;
    var ucountry = document.registration.telephone;
    var uzip = document.registration.address;
    var uemail = document.registration.pincode;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    if(allLetter(uid)) {
        if (lname_validation(passid)) {
            if (pwd_validation(uname, 5, 12)) {
                if(bday_validation(uadd)){
                    if (allnumeric(ucountry)) {
                        if (add_validation(uzip)) {
                            if (pin_validation(uemail)) {

                                if (validsex(umsex, ufsex)) {
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
function pwd_validation(uname,mx,my)
{
    var uname_len = uname.value.length;
    if (uname_len == 0 || uname_len >= my || uname_len < mx)
    {
        alert("password should not be empty / length be between "+mx+" to "+my);
        uname.focus();
        return false;
    }
    return true;
}
function bday_validation(uadd)
{

    return true;
}
function allnumeric(ucountry)
{
    var numbers = /^[0-9]+$/;
    if(ucountry.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('telephone must have numeric characters only');
        ucountry.focus();
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
function pin_validation(uemail)
{
    var numbers = /^[0-9]+$/;
    if(uemail.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('pincode must have numeric characters only');
        uemail.focus();
        return false;
    }
}

 function validsex(umsex,ufsex)
{
    x=0;

    if(umsex.checked)
    {
        x++;
    } if(ufsex.checked)
{
    x++;
}
    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        alert('Form Succesfully Submitted');
        window.location.reload();
        return true;
    }
}