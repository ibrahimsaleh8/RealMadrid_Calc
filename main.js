let burger = document.getElementById("special");
burger.onclick = function () {
  let theLinks = document.getElementsByTagName("nav")[0];
  theLinks.classList.toggle("active");
};
let preloader = document.getElementById("preLoader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});
//calc
window.onload = function () {
  let madridista = document.getElementById("madridista");
  madridista.play();
};
let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll("button"));
let specialChars = ["%", "*", "/", "-", "+"];
let output = "";
let suiVoice = document.getElementById("sui");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        output = "";
        display.innerText = output;
        break;
      case "DEL":
        if (display.innerText) {
          output = display.innerText.slice(0, -1);
          display.innerText = output;
        }
        break;
      case "=":
        try {
          output = eval(display.innerText);
          display.innerText = output;
        } catch {
          display.innerText = "ماينفعش العبث ده ";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
    if (display.innerText === "undefined") {
      display.innerText = "بطل عبط";
    }
    //*************************************************************** */
    //*************************************************************** */
    //*************************************************************** */
    //*************************************************************** */
    else if (output === 7) {
      let vini = document.getElementById("vini");
      let viniSound = document.getElementById("viniSound");
      vini.style.display = "block";
      viniSound.play();
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 3000);

      setTimeout(() => {
        vini.style.display = "none";
      }, 3000);
      // suiVoice.play();
    } else if (output === 1) {
      let COURTOIS = document.getElementById("COURTOIS");
      let COURTOISSound = document.getElementById("COURTOISSound");
      COURTOIS.style.display = "block";
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 3000);
      setTimeout(() => {
        COURTOIS.style.display = "none";
      }, 2000);

      COURTOISSound.play();
    } else if (output === 11) {
      let Rodrygo = document.getElementById("Rodrygo");
      let RodrygoSound = document.getElementById("RodrygoSound");
      Rodrygo.style.display = "block";
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 10000);
      RodrygoSound.play();
      setTimeout(() => {
        Rodrygo.style.display = "none";
      }, 12000);
    } else if (output === 18) {
      let Tchouaméni = document.getElementById("Tchouaméni");
      let TchouaméniSound = document.getElementById("TchouaméniSound");
      Tchouaméni.style.display = "block";
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 2000);
      TchouaméniSound.play();
      setTimeout(() => {
        Tchouaméni.style.display = "none";
      }, 2000);
    } else if (output === 10) {
      let Luka = document.getElementById("Luka");
      let LukaSound = document.getElementById("LukaSound");
      Luka.style.display = "block";
      LukaSound.play();
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 17000);
      setTimeout(() => {
        Luka.style.display = "none";
      }, 17000);
    } else if (output === 8) {
      let kross = document.getElementById("kross");
      let krossSound = document.getElementById("krossSound");
      kross.style.display = "block";
      krossSound.play();
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 5000);
      setTimeout(() => {
        kross.style.display = "none";
      }, 5000);
    } else if (output === 15) {
      let Valverde = document.getElementById("Valverde");
      let ValverdeSound = document.getElementById("ValverdeSound");
      Valverde.style.display = "block";
      ValverdeSound.play();
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 6000);
      setTimeout(() => {
        Valverde.style.display = "none";
      }, 6000);
    } else if (output === 12) {
      let Camavinga = document.getElementById("Camavinga");
      let CamavingaSound = document.getElementById("CamavingaSound");
      Camavinga.style.display = "block";
      CamavingaSound.play();
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 3000);
      setTimeout(() => {
        Camavinga.style.display = "none";
      }, 3000);
    } else if (output === 3) {
      let Militão = document.getElementById("Militão");
      let MilitãoSound = document.getElementById("MilitãoSound");
      Militão.style.display = "block";
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 2000);
      setTimeout(() => {
        Militão.style.display = "none";
      }, 2000);
      MilitãoSound.play();
    } else if (output === 22) {
      let Rüdiger = document.getElementById("Rüdiger");
      let RüdigerSound = document.getElementById("RüdigerSound");
      Rüdiger.style.display = "block";
      RüdigerSound.play();
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 2000);
      setTimeout(() => {
        Rüdiger.style.display = "none";
      }, 2000);
    } else if (output === 4) {
      let alaba = document.getElementById("alaba");
      let alabaSound = document.getElementById("alabaSound");
      alaba.style.display = "block";
      alabaSound.play();
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 4000);
      setTimeout(() => {
        alaba.style.display = "none";
      }, 3500);
    } else if (output === 2) {
      let carva = document.getElementById("carva");
      let carvaSound = document.getElementById("carvaSound");
      carva.style.display = "block";
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 2000);
      carvaSound.play();
      setTimeout(() => {
        carva.style.display = "none";
      }, 2000);
    } else if (output === 23) {
      let mendy = document.getElementById("mendy");
      let mendySound = document.getElementById("mendySound");
      mendy.style.display = "block";
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 2000);
      mendySound.play();
      setTimeout(() => {
        mendy.style.display = "none";
      }, 2000);
    } else if (output === 14) {
      let champions = document.getElementById("champions");
      let championssui = document.getElementById("sui");
      champions.style.display = "block";
      championssui.play();
      setTimeout(() => {
        output = "";
        display.innerText = output;
      }, 2000);
      setTimeout(() => {
        champions.style.display = "none";
      }, 2000);
    }
  });
});
