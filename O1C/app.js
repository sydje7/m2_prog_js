class App
{
    runApplication()
        { 
            //code gaat hier//
            this.greeting = "starting up"



            console.log("hello world")
             this. appNaam = "demoApp"; // string
             this. versienummer = 0.1; // double
             this. versiedatum = new Date("2023-11-23"); // Datum (voor extra uitdaging)
             this. auteur = "Sydney Cairo"; // string
             this. copyright = "Sydney BV"; // string
             this. distributeur = "Leerling soft"; // string
             this.  darkmode = false; // boolean
           
             
                let isBoolean = true; // boolean variabele
                let textString = "Dit is een voorbeeldtekst."; // string variabele
                let someNumber = 42; // nummer variabele
              
                console.log("Boolean variabele:", isBoolean);
                console.log("String variabele:", textString);
                console.log("Nummer variabele:", someNumber);

                class MyClass {
                    constructor() {
                      this.isBoolean = true; // boolean variabele
                      this.textString = "Dit is een voorbeeldtekst."; // string variabele
                      this.someNumber = 42; // nummer variabele
                    }
                }
                  
               
                    const myObject = new MyClass();
                  
                    console.log("Boolean variabele:", myObject.isBoolean);
                    console.log("String variabele:", myObject.textString);
                    console.log("Nummer variabele:", myObject.someNumber);
                  }
                  
              
                  
            
              
              // Roep de functie runApplication aan om de variabelen te loggen
             
              
            
          
        }
          
              

let app = new App()
 app.runApplication();

            console.log(app.greeting);
            console.log("appNaam: " + app.appNaam);
            console.log("versienummer " + app.versienummer);
            console.log("versiedatum " + app.versiedatum);
            console.log("auteur " + app.auteur );
            console.log("copyright " + app.copyright);
            console.log("distributeur " + app.distributeur);
            console.log("darkmode " + darkmode);