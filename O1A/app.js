class App
{
    runApplication()
        { 
            console.log("hello world")
            let appNaam = "demoApp"; // string
            let versienummer = 0.1; // double
            let versiedatum = new Date("2023-11-23"); // Datum (voor extra uitdaging)
            let auteur = "Sydney Cairo"; // string
            let copyright = "Sydney BV"; // string
            let distributeur = "Leerling soft"; // string
            let darkmode = false; // boolean
          
            console.log(appNaam);
            console.log(versienummer);
            console.log(versiedatum);
            console.log(auteur);
            console.log(copyright);
            console.log(distributeur);
            console.log(darkmode);
          
          }
          
              }

let app = new App()
app.runApplication();
