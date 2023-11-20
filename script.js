//1
function apskaiciuotiKaina() {
    let KainaBePVM = prompt("Įveskite prekės kainą");
    if (isNaN(KainaBePVM) || KainaBePVM === '' || KainaBePVM === null) {
      console.log("Neteisingai įvedėte. Prašome įvesti skaičių.");
      apskaiciuotiKaina();
      return;
    }
  
    KainaBePVM = parseFloat(KainaBePVM);
    let PVM = 0.21;
    let PVMsuma = KainaBePVM * PVM;
    let KainaSuPVM = KainaBePVM + PVMsuma;
  
    KainaBePVM = KainaBePVM.toFixed(2);
    PVMsuma = PVMsuma.toFixed(2);
    KainaSuPVM = KainaSuPVM.toFixed(2);
  
    console.log("Prekės kaina su PVM: " + KainaSuPVM + " €");
    console.log("PVM: " + PVMsuma + " €");
    console.log("Prekės kaina be PVM: " + KainaBePVM + " €");
  }
  
  

  //2

  var kaina = prompt("Įveskite prekės kainą")
  var pristatymas = prompt("Ar reikalingas pristatymas į namus? (taip/ne)")
  if (kaina >= 50 || prompt("Į kurį miestą reiks pristatyti?") === "Vilnius") {
    console.log("Pristatymas nemokamas");
  } else if (pristatymas === "taip") {
    console.log("Pristatymo kaina kitur 20€");
  } else {
    console.log("Pristatymas nereikalingas");
  }


  
  