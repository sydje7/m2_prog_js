class App
{
    runApplication()
        { 
            let canvas = document.getElementById("canvasId")
            let g = canvas.getContext("2d");
            g.fillRect(0,0,10,10);
            g.fillStyle = "red";
            g.fillRect(0,0,canvas.width,canvas.height);

            g.fillStyle = "#000000";
            g.fillRect(0,0,10,10);
            
            console.log("hello world");
            console.log("canvas");
            // code gaat hier
        }
    }
    
    let app = new App();
    app.runApplication();
             

                