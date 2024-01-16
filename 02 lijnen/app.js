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

            g.beginPath()
            g.moveTo(20,20);
            g.lineTo(300,300);
            g.closePath();
            g.stroke();

            g.beginPath()
            g.fillStyle = "yellow"
            g.moveTo(20,20);
            g.lineTo(300,300)
            g.lineTo(580,20);
            g.closePath();
            g.stroke();
            g.fill()
           
            
            console.log("hello world");
            console.log("canvas");
            // code gaat hier
           

        }
    }
    
    let app = new App();
    app.runApplication();
             