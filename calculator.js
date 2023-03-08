function clearS() {
    document.getElementById("res").value = "";
    }
function show(ip) {
    document.getElementById("res").value += ip;
    }   
function calculate() {
    document.getElementById("res").value = eval(document.getElementById("res").value);
    }
function deleteN() {
        document.getElementById("res").value =  document.getElementById("res").value.toString().slice(0, -1)
      }