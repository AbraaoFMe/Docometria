// Dev. by Vinícius C. Freitas :)
function granulometria() 
{
massa.resultado.value = (massa.campo1.value*1) + (massa.campo2.value*1) + (massa.campo3.value*1) + 
(massa.campo4.value*1) + (massa.campo5.value*1) + (massa.campo6.value*1) + (massa.campo7.value*1) + 
(massa.campo8.value*1) + (massa.campo9.value*1) + (massa.campo10.value*1) +  (massa.campo11.value*1) + 
(massa.campo12.value*1) + (massa.campo13.value*1) + (massa.campo14.value*1) + (massa.campo15.value*1) + 
(massa.campo16.value*1) + (massa.campo17.value*1);

acumulada.campo1.value = (massa.campo1.value*1);
acumulada.campo2.value = (acumulada.campo1.value*1) + (massa.campo2.value*1);
acumulada.campo3.value = (acumulada.campo2.value*1) + (massa.campo3.value*1);
acumulada.campo4.value = (acumulada.campo3.value*1) + (massa.campo4.value*1);
acumulada.campo5.value = (acumulada.campo4.value*1) + (massa.campo5.value*1);
acumulada.campo6.value = (acumulada.campo5.value*1) + (massa.campo6.value*1);
acumulada.campo7.value = (acumulada.campo6.value*1) + (massa.campo7.value*1);
acumulada.campo8.value = (acumulada.campo7.value*1) + (massa.campo8.value*1);
acumulada.campo9.value = (acumulada.campo8.value*1) + (massa.campo9.value*1);
acumulada.campo10.value = (acumulada.campo9.value*1) + (massa.campo10.value*1);
acumulada.campo11.value = (acumulada.campo10.value*1) + (massa.campo11.value*1);
acumulada.campo12.value = (acumulada.campo11.value*1) + (massa.campo12.value*1);
acumulada.campo13.value = (acumulada.campo12.value*1) + (massa.campo13.value*1);
acumulada.campo14.value = (acumulada.campo13.value*1) + (massa.campo14.value*1);
acumulada.campo15.value = (acumulada.campo14.value*1) + (massa.campo15.value*1);
acumulada.campo16.value = (acumulada.campo15.value*1) + (massa.campo16.value*1);
acumulada.campo17.value = (acumulada.campo16.value*1) + (massa.campo17.value*1);

porcenAcumulada.campo1.value = (acumulada.campo1.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo2.value = (acumulada.campo2.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo3.value = (acumulada.campo3.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo4.value = (acumulada.campo4.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo5.value = (acumulada.campo5.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo6.value = (acumulada.campo6.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo7.value = (acumulada.campo7.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo8.value = (acumulada.campo8.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo9.value = (acumulada.campo9.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo10.value = (acumulada.campo10.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo11.value = (acumulada.campo11.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo12.value = (acumulada.campo12.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo13.value = (acumulada.campo13.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo14.value = (acumulada.campo14.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo15.value = (acumulada.campo15.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo16.value = (acumulada.campo16.value*1) / (massa.resultado.value*1) * 100;
porcenAcumulada.campo17.value = (acumulada.campo17.value*1) / (massa.resultado.value*1) * 100;

detMassa.resultado.value = (detMassa.campo1.value*1) + (detMassa.campo2.value*1) + (detMassa.campo3.value*1) +
(detMassa.campo4.value*1) + (detMassa.campo5.value*1) + (detMassa.campo6.value*1) +
(detMassa.campo7.value*1) + (detMassa.campo8.value*1) + (detMassa.campo9.value*1) + (detMassa.campo10.value*1) +
(detMassa.campo11.value*1) + (detMassa.campo12.value*1) + (detMassa.campo13.value*1) + (detMassa.campo14.value*1) +
(detMassa.campo15.value*1) + (detMassa.campo16.value*1) + (detMassa.campo17.value*1);

detAcumulada.campo1.value = (detMassa.campo1.value*1);
detAcumulada.campo2.value = (detAcumulada.campo1.value*1) + (detMassa.campo2.value*1);
detAcumulada.campo3.value = (detAcumulada.campo2.value*1) + (detMassa.campo3.value*1);
detAcumulada.campo4.value = (detAcumulada.campo3.value*1) + (detMassa.campo4.value*1);
detAcumulada.campo5.value = (detAcumulada.campo4.value*1) + (detMassa.campo5.value*1);
detAcumulada.campo6.value = (detAcumulada.campo5.value*1) + (detMassa.campo6.value*1);
detAcumulada.campo7.value = (detAcumulada.campo6.value*1) + (detMassa.campo7.value*1);
detAcumulada.campo8.value = (detAcumulada.campo7.value*1) + (detMassa.campo8.value*1);
detAcumulada.campo9.value = (detAcumulada.campo8.value*1) + (detMassa.campo9.value*1);
detAcumulada.campo10.value = (detAcumulada.campo9.value*1) + (detMassa.campo10.value*1);
detAcumulada.campo11.value = (detAcumulada.campo10.value*1) + (detMassa.campo11.value*1);
detAcumulada.campo12.value = (detAcumulada.campo11.value*1) + (detMassa.campo12.value*1);
detAcumulada.campo13.value = (detAcumulada.campo12.value*1) + (detMassa.campo13.value*1);
detAcumulada.campo14.value = (detAcumulada.campo13.value*1) + (detMassa.campo14.value*1);
detAcumulada.campo15.value = (detAcumulada.campo14.value*1) + (detMassa.campo15.value*1);
detAcumulada.campo16.value = (detAcumulada.campo15.value*1) + (detMassa.campo16.value*1);
detAcumulada.campo17.value = (detAcumulada.campo16.value*1) + (detMassa.campo17.value*1);

detporcenAcumulada.campo1.value = (detAcumulada.campo1.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo2.value = (detAcumulada.campo2.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo3.value = (detAcumulada.campo3.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo4.value = (detAcumulada.campo4.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo5.value = (detAcumulada.campo5.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo6.value = (detAcumulada.campo6.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo7.value = (detAcumulada.campo7.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo8.value = (detAcumulada.campo8.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo9.value = (detAcumulada.campo9.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo10.value = (detAcumulada.campo10.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo11.value = (detAcumulada.campo11.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo12.value = (detAcumulada.campo12.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo13.value = (detAcumulada.campo13.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo14.value = (detAcumulada.campo14.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo15.value = (detAcumulada.campo15.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo16.value = (detAcumulada.campo16.value*1) / (detMassa.resultado.value*1) * 100;
detporcenAcumulada.campo17.value = (detAcumulada.campo17.value*1) / (detMassa.resultado.value*1) * 100;

porcenMedia.campo1.value = (detporcenAcumulada.campo1.value*1) / 2 + (porcenAcumulada.campo1.value*1) / 2;
porcenMedia.campo2.value = (detporcenAcumulada.campo2.value*1) / 2 + (porcenAcumulada.campo2.value*1) / 2;
porcenMedia.campo3.value = (detporcenAcumulada.campo3.value*1) / 2 + (porcenAcumulada.campo3.value*1) / 2;
porcenMedia.campo4.value = (detporcenAcumulada.campo4.value*1) / 2 + (porcenAcumulada.campo4.value*1) / 2;
porcenMedia.campo5.value = (detporcenAcumulada.campo5.value*1) / 2 + (porcenAcumulada.campo5.value*1) / 2;
porcenMedia.campo6.value = (detporcenAcumulada.campo6.value*1) / 2 + (porcenAcumulada.campo6.value*1) / 2;
porcenMedia.campo7.value = (detporcenAcumulada.campo7.value*1) / 2 + (porcenAcumulada.campo7.value*1) / 2;
porcenMedia.campo8.value = (detporcenAcumulada.campo8.value*1) / 2 + (porcenAcumulada.campo8.value*1) / 2;
porcenMedia.campo9.value = (detporcenAcumulada.campo9.value*1) / 2 + (porcenAcumulada.campo9.value*1) / 2;
porcenMedia.campo10.value = (detporcenAcumulada.campo10.value*1) / 2 + (porcenAcumulada.campo10.value*1) / 2;
porcenMedia.campo11.value = (detporcenAcumulada.campo11.value*1) / 2 + (porcenAcumulada.campo11.value*1) / 2;
porcenMedia.campo12.value = (detporcenAcumulada.campo12.value*1) / 2 + (porcenAcumulada.campo12.value*1) / 2;
porcenMedia.campo13.value = (detporcenAcumulada.campo13.value*1) / 2 + (porcenAcumulada.campo13.value*1) / 2;
porcenMedia.campo14.value = (detporcenAcumulada.campo14.value*1) / 2 + (porcenAcumulada.campo14.value*1) / 2;
porcenMedia.campo15.value = (detporcenAcumulada.campo15.value*1) / 2 + (porcenAcumulada.campo15.value*1) / 2;
porcenMedia.campo16.value = (detporcenAcumulada.campo16.value*1) / 2 + (porcenAcumulada.campo16.value*1) / 2;
porcenMedia.campo17.value = (detporcenAcumulada.campo17.value*1) / 2 + (porcenAcumulada.campo17.value*1) / 2;

mff.modulo.value = (porcenMedia.campo1.value*1) / 100 + (porcenMedia.campo2.value*1) / 100 + (porcenMedia.campo3.value*1) / 100
+ (porcenMedia.campo5.value*1) / 100 + (porcenMedia.campo6.value*1) / 100 + (porcenMedia.campo7.value*1) / 100
+ (porcenMedia.campo8.value*1) / 100 + (porcenMedia.campo9.value*1) / 100 + (porcenMedia.campo9.value*1) / 100 + (porcenMedia.campo11.value*1) / 100 +
+ (porcenMedia.campo14.value*1) / 100 + (porcenMedia.campo17.value*1) / 100;
}