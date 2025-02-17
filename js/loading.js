let height = 100;
function keepLoading(){
    setTimeout(function(){
        height -= Math.random() * height;
        $(".fake-loading").css("height", height+"%");
        if (height > 0)
            keepLoading();
    }, Math.random() * 800);
}

keepLoading();