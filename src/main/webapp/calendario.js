var fechaActual = new Date();
generaCalendario(fechaActual);

function generaCalendario(fechaActual) {
    var fechaActual2 = fechaActual;
    fechaActual2.setDate(1);
    var primerDiaSemana = fechaActual2.getDay();
    var anyo = fechaActual.getFullYear();
    var mes = fechaActual.getMonth();
    var diasMes = 0;
    if (mes == 0 || mes % 2 != 0) {
        diasMes = 31;
    } else if (mes != 1) {
        diasMes = 30;
    } else if ((anyo % 4 == 0) && (anyo % 100 == 0) || (anyo % 400 == 0)) {
        diasMes = 29;
    } else {
        diasMes = 28;
    }
    var aux = 0;
    var cont = 1;
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var semana = ["L", "M", "X", "J", "V", "S", "D"];
    var tabla = "<h1>" + meses[mes] + " de " + anyo + "</h1>";
    tabla += "<table border='1'>";

    for (i = 0; i < semana.length; i++) {
        tabla += "<th>" + semana[i] + "</th>";
    }
    for (i = 0; i < diasMes / 7; i++) {

        tabla += "<tr>";
        for (j = 0; j < semana.length; j++) {
            tabla += "<td>";
            aux++;
            if (aux >= primerDiaSemana && cont <= diasMes) {
                tabla += cont;
                cont++;
            }
            tabla += "</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table> <button onclick=nextMonth(" + fechaActual + ")>Anterior</button><button onclick=prevMonth(" + fechaActual + ")>Siguiente</button>";

    document.getElementById("resultado").innerHTML = tabla;
}
function nextMonth() {
    if (this.date.getMonth() >= 11) {
        this.date = new Date((this.date.getFullYear() + 1), 00, 01);
    } else {
        this.date = new Date(this.date.getFullYear(), (this.date.getMonth() + 1), 01);
    }
    generaCalendario(this.date);
}

function prevMonth(Date) {

}
