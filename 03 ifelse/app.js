class App
{
    runApplication()
    {
        console.log("hello World")
       
        let title = document.getElementById("newstitle");
        console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 0,2)
        {
            title.style.backgroundColor = "#FF0000"
        }

        else if(random > 0,75)
        {
            title.style.backgroundColor = "blue"
        }

        else(random = 0,2-0,6-0,75)
    

    let newsitem1 = document.getElementsByClassName("gamenews")[0];
    let newsitem2 = document.getElementsByClassName("gamenews")[1];

    if(newsitem1 > 0)
    {
        newsitem1.style.backgroundColor = "orange"
    }
    else(newsitem1 < 0)
    {
        newsitem1.style.backgroundColor = "purple"
    }
    if(newsitem2 > 1)
    {
        newsitem2.style.backgroundColor = "blue"
    }
    else(newsitem2 < 1)
    {
        newsitem2.style.backgroundColor = "green"
    }
    }
}

let app = new App();
app.runApplication();

//var element = document.getElementById('jouwElementId');//
//var elementen = document.getElementsByClassName('jouwKlasse');//
