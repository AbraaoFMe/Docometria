// Dev. by Vinícius C. Freitas :)
function fatorac() 
{
fatorAC.fc28.value = (fatorAC.fck.value*1) + 1.65 * (fatorAC.sd.value*1) + " MPa";
}
function detagua()
{
detAgua.pag.value = (detAgua.ac.value*1) * (detAgua.pc.value*1) + " litro(s)";
}
function pesoagregados()
{
detPm.pm.value = ((detPm.pag2.value*1) / (detPm.a.value/100) - (detPm.pc2.value*1) * (detPm.a.value/100) / (detPm.a.value/100)).toFixed(2) + " kg";
}
function quantareiaa()
{
quantAreia.pa.value = ((quantAreia.porcAreia.value/100) * (quantAreia.pesoAgregados.value*1)).toFixed(2) + " kg de areia";
quantAreia.pamudado.value = ((quantAreia.porcAreia.value/100) * (quantAreia.pesoAgregados.value*1)).toFixed(2);
quantAreia.brita.value = ((quantAreia.pesoAgregados.value*1) - (quantAreia.pamudado.value*1)).toFixed(2) + " kg de AG";
quantAreia.britamudado.value = ((quantAreia.pesoAgregados.value*1) - (quantAreia.pamudado.value*1)).toFixed(2);
quantAreia.b1.value = ((quantAreia.porcb1.value/100) * (quantAreia.britamudado.value*1)).toFixed(2) + " kg de agregado graúdo 1";
quantAreia.b2.value = ((quantAreia.porcb2.value/100) * (quantAreia.britamudado.value*1)).toFixed(2) + " kg de agregado graúdo 2";
}
function tracor()
{
traco.trpc.value = ((traco.tpc.value*1) / (traco.tpc.value*1)).toFixed(2);
traco.trar.value = ((traco.tar.value*1) / (traco.tpc.value*1)).toFixed(2);
traco.trag.value = ((traco.tag.value*1) / (traco.tpc.value*1)).toFixed(2);
traco.trag2.value = ((traco.tag2.value*1) / (traco.tpc.value*1)).toFixed(2);
traco.tragua.value = ((traco.tagua.value*1) / (traco.tpc.value*1)).toFixed(2);
}
function tracocr()
{
tracoc.testt.value = ((tracoc.w.value/100) * (tracoc.tarc.value*1) + (tracoc.tarc.value*1)).toFixed(2);
tracoc.testtt.value = ((tracoc.tarc.value*1) - (tracoc.testt.value*1) + (tracoc.taguac.value*1)).toFixed(2);
tracoc.trpcc.value = ((tracoc.tpcc.value*1) / (tracoc.tpcc.value*1)).toFixed(2);
tracoc.trarc.value = ((tracoc.testt.value*1) / (tracoc.tpcc.value*1)).toFixed(2);
tracoc.tragc.value = ((tracoc.tagc.value*1) / (tracoc.tpcc.value*1)).toFixed(2);
tracoc.trag2c.value = ((tracoc.tag2c.value*1) / (tracoc.tpcc.value*1)).toFixed(2);
tracoc.traguac.value = ((tracoc.testtt.value*1) / (tracoc.tpcc.value*1)).toFixed(2);
}
function volumesc()
{
volumepc.vareiaseca.value = ((volumepc.qareia.value*1) / (volumepc.mua.value*1)).toFixed(4) + " m³ areia seca";
volumepc.vareiasecat.value = ((volumepc.qareia.value*1) / (volumepc.mua.value*1)).toFixed(4);
volumepc.vareiaumida.value = ((volumepc.vareiasecat.value*1) * (volumepc.i.value/100 + 1)).toFixed(4) + " m³ areia umida";
volumepc.vag1.value = ((volumepc.qag1.value*1) / (volumepc.muag1.value*1)).toFixed(4) + " m³ agregado graúdo 1";
volumepc.vag2.value = ((volumepc.qag2.value*1) / (volumepc.muag2.value*1)).toFixed(4) + " m³ agregado graúdo 2";
}
function padiolasc()
{
padiolas.dimensaopadiola.value = ((padiolas.cpadiola.value*1) * (padiolas.lpadiola.value*1)).toFixed(4);
padiolas.qpadiolasareiat.value = ((padiolas.pvau.value*1) / (padiolas.dimensaopadiola.value*1) / Math.ceil((padiolas.pvau.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(4));
padiolas.pvag1t.value = ((padiolas.pvag1.value*1) / (padiolas.dimensaopadiola.value*1) / Math.ceil((padiolas.pvag1.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(4));
padiolas.pvag2t.value = ((padiolas.pvag2.value*1) / (padiolas.dimensaopadiola.value*1) / Math.ceil((padiolas.pvag2.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(4));
padiolas.qpadiolasareia.value = Math.ceil(((padiolas.pvau.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(1)) + " pad. de areia com " + ((padiolas.qpadiolasareiat.value*1)).toFixed(2) + " m de h";
padiolas.qpadiolaag1.value =  Math.ceil(((padiolas.pvag1.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(1)) + " pad. de AG 1 com " + ((padiolas.pvag1t.value*1)).toFixed(2) + " m de h";
padiolas.qpadiolaag2.value =  Math.ceil(((padiolas.pvag2.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(1)) + " pad. de AG 2 com " + ((padiolas.pvag2t.value*1)).toFixed(2) + " m de h";
}
function quantpormetro()
{
quantporm.quantmct.value = ((quantporm.mtc.value*1) / (quantporm.mespc.value*1) + (quantporm.mta.value*1) / (quantporm.mespa.value*1) + (quantporm.mtag1.value*1) / (quantporm.mespag.value*1) + (quantporm.mtag2.value*1) / (quantporm.mespag.value*1) + (quantporm.mtagua.value*1)).toFixed(4);
quantporm.quantmc.value = Math.ceil(((quantporm.mcubico.value*1000) / (quantporm.quantmct.value*1)).toFixed(2)) + " kg de cimento";
quantporm.quantmctt.value = Math.ceil(((quantporm.mcubico.value*1000) / (quantporm.quantmct.value*1)).toFixed(4));
quantporm.quantma.value = ((quantporm.quantmctt.value*1) * (quantporm.mta.value*1)).toFixed(2) + " kg de areia";
quantporm.quantmag1.value = ((quantporm.quantmctt.value*1) * (quantporm.mtag1.value*1)).toFixed(2) + " kg de AG 1";
quantporm.quantmag2.value = ((quantporm.quantmctt.value*1) * (quantporm.mtag2.value*1)).toFixed(2) + " kg de AG 2";
quantporm.quantmagua.value = ((quantporm.quantmctt.value*1) * (quantporm.mtagua.value*1)).toFixed(2) + " litro(s) de água";
}
function padiolam()
{
padiolasm3.qsacocimentom3t.value = ((padiolasm3.qcimentom3.value*1) / 50).toFixed(1);
padiolasm3.qsacocimentom3.value = Math.ceil(((padiolasm3.qsacocimentom3t.value*1)).toFixed(2)) + " saco(s) de cimento de 50kg";
padiolasm3.qaguam3t.value = ((padiolasm3.laguam3.value*1)).toFixed(1);
padiolasm3.qaguam3.value = Math.ceil(((padiolasm3.qaguam3t.value*1)).toFixed(2)) + " litro(s) de água";
padiolasm3.qareiasecat.value = ((padiolasm3.qareiam3.value*1) / (padiolasm3.um3.value / 100 + 1)).toFixed(2);
padiolasm3.vast.value = ((padiolasm3.qareiasecat.value*1) / (padiolasm3.muam3.value*1)).toFixed(4);
padiolasm3.vaht.value = ((padiolasm3.im3.value/100) * (padiolasm3.vast.value*1) + (padiolasm3.vast.value*1)).toFixed(4);
padiolasm3.vpadiolam3.value = (padiolasm3.cpadiolam3.value/100) * (padiolasm3.lpadiolam3.value*1);
padiolasm3.padiolasm3areia.value = ((padiolasm3.vaht.value*1) / (padiolasm3.vpadiolam3.value*1) / 100 / (padiolasm3.hpadiolam3.value*1)).toFixed(4);
padiolasm3.padiolasm3areiatt.value = Math.ceil(((padiolasm3.padiolasm3areia.value*1)).toFixed(4));
padiolasm3.padiolasm3areiattt.value = (padiolasm3.padiolasm3areiatt.value*1);
padiolasm3.padiolasm3areiat.value = ((padiolasm3.vaht.value*1) / (padiolasm3.vpadiolam3.value*1) / 100 / (padiolasm3.padiolasm3areiattt.value*1)).toFixed(4);
padiolasm3.qpadiolasareiam3.value = Math.ceil(((padiolasm3.padiolasm3areia.value*1)).toFixed(2)) + " pad. de areia com " + ((padiolasm3.padiolasm3areiat.value*1)).toFixed(2) + " m de h";
padiolasm3.qpadiolaag1m3t.value = ((padiolasm3.qag1m3.value*1) / (padiolasm3.muag1m3.value*1)).toFixed(4);
padiolasm3.qpadiolaag1m3tt.value = ((padiolasm3.qpadiolaag1m3t.value*1) / (padiolasm3.vpadiolam3.value*1) / 100 / (padiolasm3.hpadiolam3.value*1)).toFixed(4);
padiolasm3.qpadiolaag1m3ttt.value = Math.ceil(((padiolasm3.qpadiolaag1m3tt.value*1)).toFixed(4));
padiolasm3.qpadiolaag1m3tttt.value = (padiolasm3.qpadiolaag1m3t.value*1) / (padiolasm3.vpadiolam3.value*1) / 100 / (padiolasm3.qpadiolaag1m3ttt.value*1);
padiolasm3.qpadiolaag1m3.value = Math.ceil(((padiolasm3.qpadiolaag1m3tt.value*1)).toFixed(2)) + " pad. de AG 1 com " + ((padiolasm3.qpadiolaag1m3tttt.value*1)).toFixed(2) + " m de h";
padiolasm3.qpadiolaag2m3t.value = ((padiolasm3.qag2m3.value*1) / (padiolasm3.muag2m3.value*1)).toFixed(4);
padiolasm3.qpadiolaag2m3tt.value = ((padiolasm3.qpadiolaag2m3t.value*1) / (padiolasm3.vpadiolam3.value*1) / 100 / (padiolasm3.hpadiolam3.value*1)).toFixed(4);
padiolasm3.qpadiolaag2m3ttt.value = Math.ceil(((padiolasm3.qpadiolaag2m3tt.value*1)).toFixed(4));
padiolasm3.qpadiolaag2m3tttt.value = (padiolasm3.qpadiolaag2m3t.value*1) / (padiolasm3.vpadiolam3.value*1) / 100 / (padiolasm3.qpadiolaag2m3ttt.value*1);
padiolasm3.qpadiolaag2m3.value = Math.ceil(((padiolasm3.qpadiolaag2m3tt.value*1)).toFixed(2)) + " pad. de AG 2 com " + ((padiolasm3.qpadiolaag2m3tttt.value*1)).toFixed(2) + " m de h";
}
function tabela() {
tabelasc.tabelascc.value = (detAgua.pc.value*1);
tabelasc.tabelasccc.value = ((quantAreia.porcAreia.value/100) * (quantAreia.pesoAgregados.value*1)).toFixed(2);
tabelasc.tabelascccc.value = ((quantAreia.porcb1.value/100) * (quantAreia.britamudado.value*1)).toFixed(2);
tabelasc.tabelasccccc.value = ((quantAreia.porcb2.value/100) * (quantAreia.britamudado.value*1)).toFixed(2);
tabelasc.tabelascccccc.value = (detAgua.ac.value*1) * (detAgua.pc.value*1) + " litro(s)";

tabelasc.tabelascc2.value = (traco.trpc.value*1);
tabelasc.tabelasccc2.value = (traco.trar.value*1);
tabelasc.tabelascccc2.value = (traco.trag.value*1);
tabelasc.tabelasccccc2.value = (traco.trag2.value*1);
tabelasc.tabelascccccc2.value = (traco.tragua.value*1);

tabelasc.tabelascc3.value = ((detAgua.pc.value*1)).toFixed(2);
tabelasc.tabelasccc3.value = ((tracoc.testt.value*1)).toFixed(2);
tabelasc.tabelascccc3.value = ((quantAreia.porcb1.value/100) * (quantAreia.britamudado.value*1)).toFixed(2);
tabelasc.tabelasccccc3.value = ((quantAreia.porcb2.value/100) * (quantAreia.britamudado.value*1)).toFixed(2);
tabelasc.tabelascccccc3.value = (tracoc.testtt.value*1) + " litro(s)";

tabelasc.tabelascc4.value = (tracoc.trpcc.value*1);
tabelasc.tabelasccc4.value = (tracoc.trarc.value*1);
tabelasc.tabelascccc4.value = (tracoc.tragc.value*1);
tabelasc.tabelasccccc4.value = (tracoc.trag2c.value*1);
tabelasc.tabelascccccc4.value = (tracoc.traguac.value*1);

tabelasc.tabelasccc5.value = ((volumepc.vareiasecat.value*1) * (volumepc.i.value/100 + 1)).toFixed(4);
tabelasc.tabelascccc5.value = ((volumepc.qag1.value*1) / (volumepc.muag1.value*1)).toFixed(4);
tabelasc.tabelasccccc5.value = ((volumepc.qag2.value*1) / (volumepc.muag2.value*1)).toFixed(4);
tabelasc.tabelascccccc5.value = (tracoc.testtt.value*1) + " litro(s)";

tabelasc.tabelasccc6.value = Math.ceil(((padiolas.pvau.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(1)) + " pad. " + (padiolas.cpadiola.value*1) + " x "  + (padiolas.lpadiola.value*1) + " x " + ((padiolas.qpadiolasareiat.value*1)).toFixed(2);
tabelasc.tabelascccc6.value = Math.ceil(((padiolas.pvag1.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(1)) + " pad. " + (padiolas.cpadiola.value*1) + " x "  + (padiolas.lpadiola.value*1) + " x " + ((padiolas.pvag1t.value*1)).toFixed(2);
tabelasc.tabelasccccc6.value = Math.ceil(((padiolas.pvag2.value*1) / (padiolas.dimensaopadiola.value*1) / (padiolas.hpadiola.value*1)).toFixed(1)) + " pad. " + (padiolas.cpadiola.value*1) + " x "  + (padiolas.lpadiola.value*1) + " x " + ((padiolas.pvag2t.value*1)).toFixed(2);
tabelasc.tabelascccccc6.value = (tracoc.testtt.value*1) + " litro(s)";

tabelasc.tabelascc7.value = Math.ceil(((quantporm.mcubico.value*1000) / (quantporm.quantmct.value*1)).toFixed(2));
tabelasc.tabelasccc7.value = ((quantporm.quantmctt.value*1) * (quantporm.mta.value*1)).toFixed(2);
tabelasc.tabelascccc7.value = ((quantporm.quantmctt.value*1) * (quantporm.mtag1.value*1)).toFixed(2);
tabelasc.tabelasccccc7.value = ((quantporm.quantmctt.value*1) * (quantporm.mtag2.value*1)).toFixed(2);
tabelasc.tabelascccccc7.value = ((quantporm.quantmctt.value*1) * (quantporm.mtagua.value*1)).toFixed(2) + " litro(s)";

tabelasc.tabelascc8.value = Math.ceil(((padiolasm3.qsacocimentom3t.value*1)).toFixed(2)) + " saco(s)";
tabelasc.tabelasccc8.value = ((padiolasm3.vaht.value*1)).toFixed(4);
tabelasc.tabelascccc8.value = ((padiolasm3.qpadiolaag1m3t.value*1)).toFixed(4);
tabelasc.tabelasccccc8.value = ((padiolasm3.qpadiolaag2m3t.value*1)).toFixed(4); 
tabelasc.tabelascccccc8.value = ((quantporm.quantmctt.value*1) * (quantporm.mtagua.value*1)).toFixed(2) + " litro(s)";

tabelasc.tabelascc9.value = Math.ceil(((padiolasm3.qsacocimentom3t.value*1)).toFixed(2)) + " saco(s)";
tabelasc.tabelasccc9.value = Math.ceil(((padiolasm3.padiolasm3areia.value*1)).toFixed(2)) + " pad. " + (padiolasm3.cpadiolam3.value*1) + " x "  + (padiolasm3.lpadiolam3.value*1) + " x " + ((padiolasm3.padiolasm3areiat.value*1)).toFixed(2);
tabelasc.tabelascccc9.value = Math.ceil(((padiolasm3.qpadiolaag1m3tt.value*1)).toFixed(2)) + " pad. " + (padiolasm3.cpadiolam3.value*1) + " x "  + (padiolasm3.lpadiolam3.value*1) + " x " + ((padiolasm3.qpadiolaag1m3tttt.value*1)).toFixed(2);
tabelasc.tabelasccccc9.value = Math.ceil(((padiolasm3.qpadiolaag2m3tt.value*1)).toFixed(2)) + " pad. " + (padiolasm3.cpadiolam3.value*1) + " x "  + (padiolasm3.lpadiolam3.value*1) + " x " + ((padiolasm3.qpadiolaag2m3tttt.value*1)).toFixed(2);
tabelasc.tabelascccccc9.value = (padiolasm3.laguam3.value*1) + " litro(s)";
}