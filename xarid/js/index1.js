function xisoblash() {
    let Yoshi = document.getElementById("number-input").value;
    let Jinsi = document.getElementById("Jinsi").value;
    let davlat = document.getElementById("text-input").value;
    let result;

    if (Yoshi >= 7 && Yoshi <= 60) {
      if (Jinsi === "Male") {
        if (davlat === "USA" || davlat === "Amerika") {
          result = "60$";
        } else {
          if (davlat === "Uzbekistan" || davlat === "Uzbekiston") {
            result = "70$"
          } else {
            result = "50$"
          }
        }
      }
      if (Jinsi === "Female") {
        if (davlat === "USA" || davlat === "Amerika") {
          result = "55$";
        } else {
          if (davlat === "Uzbekistan" || davlat === "Uzbekiston") {
            result = "65$"
          } else {
            result = "45$"
          }
        }
      } else if (Yoshi >= 31 && Yoshi <= 59) {
        if (Jinsi === "Male") {
          if (davlat === "USA" || davlat === "Amerika") {
            result = "70$";
          } else {
            if (davlat === "Uzbekistan" || davlat === "Uzbekiston") {
              result = "80$"
            } else {
              result = "60$"
            }
          }
        }
        if (Jinsi === "Female") {
          if (davlat === "USA" || davlat === "Amerika") {
            result = "65$";
          } else {
            if (davlat === "Uzbekistan" || davlat === "Uzbekiston") {
              result = "75$"
            } else {
              result = "55$"
            }
          }

        }}
        
    } else {
          result = "FREE"
    }





        return document.getElementById("result").value = result;
      
}
