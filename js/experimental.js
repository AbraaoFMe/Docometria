// Dev. by Vinícius C. Freitas :)
function exfatorac() 
{
exfatorAC.exfc28.value = (exfatorAC.exfck.value*1) + 1.65 * (exfatorAC.exsd.value*1) + " MPa";
}
function qcimento() 
{
detCag.qcc.value = (detCag.cag.value*1) / (detCag.acexp.value*1);
detCag.qc.value = ((detCag.qmcub.value*1) * (detCag.qcc.value*1)).toFixed(2) + " kg de cimento";
detCag.consaguaa.value = ((detCag.qmcub.value*1) * (detCag.cag.value*1)).toFixed(2) + " litro(s) de água";
}
function qagexppp() 
{
detQag.qagg.value = (detQag.mua.value*1) * (detQag.vcs.value*1);
detQag.qaggg.value = (detQag.qagg.value*1) * (detQag.qmcub2.value*1);
detQag.qagg1.value = ((detQag.qaggg.value*1) * (detQag.qagexp.value/100)).toFixed(2) + " kg de Agregado Graúdo 1";
detQag.qagg2.value = ((detQag.qaggg.value*1) * (detQag.qagexpp.value/100)).toFixed(2) + " kg de Agregado Graúdo 2";
}
function quantareia() 
{
detAreia.volc.value = (detAreia.qciment.value*1) / (detAreia.mespc.value*1);
detAreia.somag.value = (detAreia.qag1z.value*1) + (detAreia.qag2z.value*1);
detAreia.volag.value = (detAreia.somag.value*1) / (detAreia.mespag.value*1);
detAreia.volzx.value = (detAreia.volc.value*1) + (detAreia.volag.value*1) + (detAreia.consagua.value/1000);
detAreia.volf.value = (detAreia.qmcub3.value*1) - (detAreia.volzx.value);
detAreia.qareiay.value = Math.ceil(((detAreia.volf.value*1) * (detAreia.mespareia.value*1)).toFixed(2)) + " kg de areia";
}
function tracorr()
{
tracoexp.qcexpr.value = ((tracoexp.qcexp.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
tracoexp.qaexpr.value = ((tracoexp.qaexp.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
tracoexp.qagexp1r.value = ((tracoexp.qagexp1.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
tracoexp.qagexp2r.value = ((tracoexp.qagexp2.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
tracoexp.qagexpr.value = ((tracoexp.qagexp.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
}
function tracocrr()
{
tracocc.testt2.value = ((tracocc.w2.value/100) * (tracocc.tarc2.value*1) + (tracocc.tarc2.value*1)).toFixed(2);
tracocc.testtt2.value = ((tracocc.tarc2.value*1) - (tracocc.testt2.value*1) + (tracocc.taguac2.value*1)).toFixed(2);
tracocc.trpcc2.value = ((tracocc.tpcc2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
tracocc.trarc2.value = ((tracocc.testt2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
tracocc.tragc2.value = ((tracocc.tagc2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
tracocc.trag2c2.value = ((tracocc.tag2c2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
tracocc.traguac2.value = ((tracocc.testtt2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
}
function padiolapormc()
{
padiolasporm.qsacocimentom32.value = Math.ceil(((padiolasporm.qcimentom32.value*1) / 50).toFixed(2)) + " saco(s) de cimento de 50kg";
padiolasporm.qaguam32.value = Math.ceil(((padiolasporm.laguam32.value*1)).toFixed(2)) + " litro(s) de água";
padiolasporm.calcavulso1.value = (padiolasporm.qareiam32.value*1) / (padiolasporm.muam32.value*1);
padiolasporm.calcavulso2.value = (padiolasporm.im32.value/100+1) * (padiolasporm.calcavulso1.value*1);
padiolasporm.calcavulso3.value = (padiolasporm.cpadiolam32.value*1) * (padiolasporm.lpadiolam32.value*1);
padiolasporm.calcavulso4.value = (padiolasporm.calcavulso2.value*1) / (padiolasporm.calcavulso3.value*1);
padiolasporm.calcavulso5.value = (padiolasporm.calcavulso4.value*1) / (padiolasporm.hpadiolam32.value*1);
padiolasporm.calcavulso6.value = Math.ceil((padiolasporm.calcavulso5.value*1));
padiolasporm.calcavulso7.value = (padiolasporm.calcavulso4.value*1) / (padiolasporm.calcavulso6.value*1);
padiolasporm.qpadiolasareiam32.value = (padiolasporm.calcavulso6.value*1) + " pad. de areia com " + ((padiolasporm.calcavulso7.value*1)).toFixed(2) + " m de h";
padiolasporm.calcavulso8.value = (padiolasporm.qag1m32.value*1) / (padiolasporm.muag1m32.value*1);
padiolasporm.calcavulso9.value = (padiolasporm.calcavulso8.value*1) / (padiolasporm.calcavulso3.value*1);
padiolasporm.calcavulso10.value = (padiolasporm.calcavulso9.value*1) / (padiolasporm.hpadiolam32.value*1);
padiolasporm.calcavulso11.value = Math.ceil((padiolasporm.calcavulso10.value*1));
padiolasporm.calcavulso12.value = ((padiolasporm.calcavulso9.value*1) / (padiolasporm.calcavulso11.value*1)).toFixed(2);
padiolasporm.qpadiolaag1m32.value = (padiolasporm.calcavulso11.value*1) + " pad. de AG1 com " + (padiolasporm.calcavulso12.value*1) + " m de h";

padiolasporm.calcavulso13.value = (padiolasporm.qag2m32.value*1) / (padiolasporm.muag2m32.value*1);
padiolasporm.calcavulso14.value = (padiolasporm.calcavulso13.value*1) / (padiolasporm.calcavulso3.value*1);
padiolasporm.calcavulso15.value = (padiolasporm.calcavulso14.value*1) / (padiolasporm.hpadiolam32.value*1);
padiolasporm.calcavulso16.value = Math.ceil((padiolasporm.calcavulso15.value*1));
padiolasporm.calcavulso17.value = ((padiolasporm.calcavulso14.value*1) / (padiolasporm.calcavulso16.value*1)).toFixed(2);
padiolasporm.qpadiolaag2m32.value = (padiolasporm.calcavulso16.value*1) + " pad. de AG2 com " + (padiolasporm.calcavulso17.value*1) + " m de h";
}
function porsc()
{
quantporsc.quantmcexp.value = ((quantporsc.mtcexp.value*1) * (quantporsc.pcexp.value*1)).toFixed(2) + " kg de cimento";
quantporsc.quantmaexp.value = ((quantporsc.mtaexp.value*1) * (quantporsc.pcexp.value*1)).toFixed(2) + " kg de areia";
quantporsc.quantmag1exp.value = ((quantporsc.mtag1exp.value*1) * (quantporsc.pcexp.value*1)).toFixed(2) + " kg de AG1";
quantporsc.quantmag2exp.value = ((quantporsc.mtag2exp.value*1) * (quantporsc.pcexp.value*1)).toFixed(2) + " kg de AG2";
quantporsc.quantmaguaexp.value = ((quantporsc.mtaguaexo.value*1) * (quantporsc.pcexp.value*1)).toFixed(2) + " litro(s) de água";
}
function padiolaexp()
{
quantpexp.qsacocimimentoexp.value = Math.ceil(((quantpexp.qcimentopad.value*1) / 50).toFixed(2)) + " saco(s) de cimento de 50kg";
quantpexp.qaguaexp.value = Math.ceil(((quantpexp.qaguapad.value*1)).toFixed(2)) + " litro(s) de água";
quantpexp.calculoavulso1.value = 1 + (quantpexp.umidadepad.value/100);
quantpexp.calculoavulso2.value = (quantpexp.qareiapad.value*1) / (quantpexp.calculoavulso1.value*1) / (quantpexp.muapad.value*1);
quantpexp.calculoavulso3.value = (quantpexp.calculoavulso2.value*1) * (quantpexp.inchamentopad.value/100) + (quantpexp.calculoavulso2.value*1);
quantpexp.calculoavulso4.value = (quantpexp.comprimentopad.value*1) * (quantpexp.largurapad.value*1);
quantpexp.calculoavulso5.value = (quantpexp.calculoavulso3.value*1) / (quantpexp.calculoavulso4.value*1);
quantpexp.calculoavulso6.value = ((quantpexp.calculoavulso5.value*1) / (quantpexp.hmaxpadiola.value*1)).toFixed(2);
quantpexp.calculoavulso7.value = Math.ceil((quantpexp.calculoavulso6.value*1));
quantpexp.qpadiolasareiaexp.value = (quantpexp.calculoavulso7.value*1) + " pad. de areia com " + (quantpexp.calculoavulso6.value/10) + " m de h";

quantpexp.calculoavulso8.value = (quantpexp.qag1pad.value*1) / (quantpexp.muag1pad.value*1);
quantpexp.calculoavulso9.value = ((quantpexp.calculoavulso8.value*1) / (quantpexp.calculoavulso4.value*1)).toFixed(2);
quantpexp.calculoavulso10.value = Math.ceil((quantpexp.calculoavulso8.value*1));
quantpexp.qpadiolaag1exp.value = (quantpexp.calculoavulso10.value*1) + " pad. de AG1 com " + (quantpexp.calculoavulso9.value/10) + " m de h";

quantpexp.calculoavulso11.value = (quantpexp.qag2pad.value*1) / (quantpexp.muag2pad.value*1);
quantpexp.calculoavulso12.value = ((quantpexp.calculoavulso11.value*1) / (quantpexp.calculoavulso4.value*1)).toFixed(2);
quantpexp.calculoavulso13.value = Math.ceil((quantpexp.calculoavulso11.value*1));
quantpexp.qpadiolaag2exp.value = (quantpexp.calculoavulso13.value*1) + " pad. de AG2 com " + (quantpexp.calculoavulso12.value/10) + " m de h";

}
function tabelaexp()
{
tabelaexpp.tabelasexpcc.value = ((quantporsc.mtcexp.value*1) * (quantporsc.pcexp.value*1)).toFixed(2);
tabelaexpp.tabelasexpccc.value = ((quantporsc.mtaexp.value*1) * (quantporsc.pcexp.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccc.value = ((quantporsc.mtag1exp.value*1) * (quantporsc.pcexp.value*1)).toFixed(2);
tabelaexpp.tabelasexpccccc.value = ((quantporsc.mtag2exp.value*1) * (quantporsc.pcexp.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccccc.value = ((quantporsc.mtaguaexo.value*1) * (quantporsc.pcexp.value*1)).toFixed(2) + " litro(s)";

tabelaexpp.tabelasexpcc2.value = ((tracoexp.qcexp.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
tabelaexpp.tabelasexpccc2.value = ((tracoexp.qaexp.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccc2.value = ((tracoexp.qagexp1.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
tabelaexpp.tabelasexpccccc2.value = ((tracoexp.qagexp2.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccccc2.value = ((tracoexp.qagexp.value*1) / (tracoexp.qcexp.value*1)).toFixed(2);

tabelaexpp.tabelasexpcc3.value = (((tracocc.tpcc2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2) * (detAreia.qciment.value*1)).toFixed(2);
tabelaexpp.tabelasexpccc3.value = (((tracocc.testt2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2) * (detAreia.qciment.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccc3.value = (((tracocc.tagc2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2) * (detAreia.qciment.value*1)).toFixed(2);
tabelaexpp.tabelasexpccccc3.value = (((tracocc.tag2c2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2) * (detAreia.qciment.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccccc3.value = (((tracocc.testtt2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2) * (detAreia.qciment.value*1).toFixed(2));

tabelaexpp.tabelasexpcc4.value = ((tracocc.tpcc2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
tabelaexpp.tabelasexpccc4.value = ((tracocc.testt2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccc4.value = ((tracocc.tagc2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
tabelaexpp.tabelasexpccccc4.value = ((tracocc.tag2c2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccccc4.value = ((tracocc.testtt2.value*1) / (tracocc.tpcc2.value*1)).toFixed(2);

tabelaexpp.tabelasexpccc5.value = ((quantpexp.inchamentopad.value/100) * (quantpexp.calculoavulso2.value*1) + (quantpexp.calculoavulso2.value*1)).toFixed(4);
tabelaexpp.tabelasexpcccc5.value = ((quantpexp.qag1pad.value*1) / (quantpexp.muag1pad.value*1)).toFixed(4);
tabelaexpp.tabelasexpccccc5.value = ((quantpexp.qag2pad.value*1) / (quantpexp.muag2pad.value*1)).toFixed(4);
tabelaexpp.tabelasexpcccccc5.value = Math.ceil(((quantpexp.qaguapad.value*1)).toFixed(2)) + " litro(s)";

tabelaexpp.tabelasexpccc6.value = (quantpexp.calculoavulso7.value*1) + " pad. " + (quantpexp.comprimentopad.value*1) + " x " + (quantpexp.largurapad.value*1) + " x " + ((quantpexp.calculoavulso6.value/10)).toFixed(2);
tabelaexpp.tabelasexpcccc6.value = (quantpexp.calculoavulso10.value*1) + " pad. " + (quantpexp.comprimentopad.value*1) + " x " + (quantpexp.largurapad.value*1) + " x " + ((quantpexp.calculoavulso9.value/10)).toFixed(2);
tabelaexpp.tabelasexpccccc6.value = (quantpexp.calculoavulso13.value*1) + " pad. " + (quantpexp.comprimentopad.value*1) + " x " + (quantpexp.largurapad.value*1) + " x " + ((quantpexp.calculoavulso12.value/10)).toFixed(2);
tabelaexpp.tabelasexpcccccc6.value = Math.ceil(((quantpexp.qaguapad.value*1)).toFixed(2)) + " litro(s)";

tabelaexpp.tabelasexpcc7.value = (detCag.qmcub.value*1) * (detCag.qcc.value*1);
tabelaexpp.tabelasexpccc7.value = Math.ceil(((detAreia.volf.value*1) * (detAreia.mespareia.value*1)).toFixed(2));
tabelaexpp.tabelasexpcccc7.value = ((detQag.qaggg.value*1) * (detQag.qagexp.value/100)).toFixed(2);
tabelaexpp.tabelasexpccccc7.value = ((detQag.qaggg.value*1) * (detQag.qagexpp.value/100)).toFixed(2);
tabelaexpp.tabelasexpcccccc7.value = (detCag.qmcub.value*1) * (detCag.cag.value*1) + " litro(s)";

tabelaexpp.tabelasexpccc8.value = ((padiolasporm.im32.value/100+1) * (padiolasporm.calcavulso1.value*1)).toFixed(4);
tabelaexpp.tabelasexpcccc8.value = ((padiolasporm.calcavulso8.value*1) / (padiolasporm.calcavulso3.value*1)).toFixed(4);
tabelaexpp.tabelasexpccccc8.value = ((padiolasporm.calcavulso13.value*1) / (padiolasporm.calcavulso3.value*1)).toFixed(4);
tabelaexpp.tabelasexpcccccc8.value = Math.ceil(((quantpexp.qaguapad.value*1)).toFixed(2)) + " litro(s)";

tabelaexpp.tabelasexpcc9.value = Math.ceil(((padiolasporm.qcimentom32.value*1) / 50).toFixed(2)) + " saco(s)";
tabelaexpp.tabelasexpccc9.value = (padiolasporm.calcavulso6.value*1) + " pad. " + (padiolasporm.cpadiolam32.value*1) + " x " + (padiolasporm.lpadiolam32.value*1) + " x " + ((padiolasporm.calcavulso7.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccc9.value = (padiolasporm.calcavulso11.value*1) + " pad. " + (padiolasporm.cpadiolam32.value*1) + " x " + (padiolasporm.lpadiolam32.value*1) + " x " + ((padiolasporm.calcavulso12.value*1)).toFixed(2);
tabelaexpp.tabelasexpccccc9.value = (padiolasporm.calcavulso16.value*1) + " pad. " + (padiolasporm.cpadiolam32.value*1) + " x " + (padiolasporm.lpadiolam32.value*1) + " x " + ((padiolasporm.calcavulso17.value*1)).toFixed(2);
tabelaexpp.tabelasexpcccccc9.value = Math.ceil(((padiolasporm.laguam32.value*1)).toFixed(2)) + " litro(s)";
}