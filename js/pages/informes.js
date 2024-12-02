let informes = JSON.parse(localStorage.getItem('informes'));//transforma en array el tecto q recibe
console.log(informes)

if(informes.length > 0){//si hay informes guardados

    let informe = document.getElementById("informe")
    informe.innerHTML =
    `<thead>
    <tr>
        <th>PROVINCIA</th>
        <th>ELECCIÓN</th>
        <th>DATOS GENERALES</th>
        <th>DATOS POR AGRUPACIÓN</th>
    </tr>
    </thead>`

    let agrupaciones = ``


    for(var i = 0; i < informes.length; i++){

        agrupaciones = ``//para no acumular

        for(var j = 0; j < informes[i].datos.valoresTotalizadosPositivos.length; j++){
            agrupaciones += 
            `<div class="agrupacion">
                <div>
                    <b>${informes[i].datos.valoresTotalizadosPositivos[j].nombreAgrupacion}</b>
                    <div>
                        <b>></b> ${informes[i].datos.valoresTotalizadosPositivos[j].votosPorcentaje}% 
                        <br>
                        <b>></b> ${informes[i].datos.valoresTotalizadosPositivos[j].votos} votos
                    </div>
                </div>
                
            </div>`
        }

        informe.innerHTML +=
        `<tbody>
            <tr>
                <td id="mapaSvg">
                    ${informes[i].svgDistrito}
                </td>
                <td id="eleccionesTexto">
                    <!--titulos-->
                    <p class="texto-elecciones-chico">Elecciones ${informes[i].anio} | ${informes[i].tipo}</p>
                    <p class="texto-path-chico">${informes[i].anio} > ${informes[i].tipo} > ${informes[i].cargo} > ${informes[i].distrito} > ${informes[i].seccion}</p>
                    <!---->
                </td>
                <td>
                    <!---->
                    <div class="datos" id="datos">
                        <!---->
                        <div id="mesas-escrutadas">
                            <img src="img/icons/img1.png" style="width: 50px; margin-right: 10px;" />
                            Mesas escrutadas
                            ${informes[i].datos.estadoRecuento.mesasTotalizadas}
                        </div>
                        <!---->
                        <!---->
                        <div id="electores">
                            <img src="img/icons/img3.png" style="width: 50px; margin-right: 10px;" />
                            Electores
                            ${informes[i].datos.estadoRecuento.cantidadElectores}
                        </div>
                        <!---->
                        <!---->
                        <div id="part-escrutado" style="width: 130px; padding-right: 3px;">
                            <img src="img/icons/img4.png" style="width: 50px; margin-right: 5px;" />
                            Participación sobre escrutado
                            ${informes[i].datos.estadoRecuento.participacionPorcentaje}%
                        </div>
                        <!---->
                    </div>
                </td>
                <td class="datos-agrupacion" id="div-agrupacion">
                    <div>
                        ${agrupaciones}
                    </div> 
                </td>
            </tr>
        </tbody>
        <hr>`
    }
}
else{
    let txtAmarillo = document.getElementById("texto-amarillo")
    txtAmarillo.innerHTML = `<i class="fa fa-exclamation"></i> No existen informes realizados por el usuario`
    txtAmarillo.style.visibility = "visible"

    let contenido = document.getElementById("contenido")
    contenido.style.visibility = "hidden"
}