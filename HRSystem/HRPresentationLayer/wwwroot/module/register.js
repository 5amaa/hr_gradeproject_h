﻿

Edit = (id,name, email,roleName,username,password) => {
    document.getElementById("title").innerHTML = "تعديل مستخدم";
    document.getElementById("btnsave").value = "تعديل";
    document.getElementById("idUser").value = id;
    document.getElementById("uName").value = name;
    document.getElementById("email").value = email;
    document.getElementById("username").value = username;
    document.getElementById("roleName").value = roleName;
/*    document.getElementById("idUser").hide*/
    $('#idUser').hide();
    $('#fgpassword').hide();
    $('#cfgpassword').hide();

    document.getElementById("passw").value = password;
    document.getElementById("passwconfirm").value = password;
}

Reset = () => {
    document.getElementById("title").innerHTML = " أضافة مستخدم";
    document.getElementById("btnsave").innerHTML = "حفظ";
    document.getElementById("uName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    document.getElementById("roleName").value = "";
    document.getElementById("idUser").value = "";
    $('#fgpassword').show();
    $('#cfgpassword').show();
    document.getElementById("passw").value = "";
    document.getElementById("passwconfirm").value = "";
}