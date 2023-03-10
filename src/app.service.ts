import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

const toSend = {
  codeart: '0000030557',
  codefab: 'BML',
  codefam: 'C',
  codemagasin: '002',
  codematiere: '99',
  codeproduit: 'KC01088165',
  coderayon: 'K',
  codessfam: '01',
  codestat5: 'KC293',
  codetypehbjo: '2',
  codetypeproduit: 'K',
  coeff: '3.35749',
  coeffreprise: '0',
  coursmatiere: '0.00',
  coursmatierereprise: '0',
  datecdeachat: new Date(),
  datederniereutilisationchequecadeau: new Date(),
  dateutilisationchequecadeau: new Date(),
  datevente: new Date(),
  dateventereprise: new Date(),
  ligneid: '2739',
  idclient: '1527',
  idsociete: '1',
  idsocietereprise: '0',
  idvente: '2157',
  idventereprise: '0',
  indacompterepris: false,
  indacomptereprisreprise: false,
  indconfie: false,
  indconfiereprise: false,
  indrocontreachat: false,
  indrocontreachatreprise: false,
  indselection: false,
  indselectionfusion: false,
  indtpb: true,
  indtpbreprise: false,
  indtrtdivers: false,
  indutilisationuniqueanimcommerciale: false,
  ischequecadeauinvalide: false,
  isencoursclientinvalide: false,
  isgestionlot: false,
  islignereprise: false,
  issav: false,
  lib: 'EMERAUDE AVEC OU SS P.BLANCHE',
  libfab: 'BIJOUX ML',
  libfam: 'BIJOUX DE COU',
  libmagasin: "CD'OR FONTENAY",
  libmatiere: 'SANS GAMME',
  librayon: 'OR 750',
  libssfam: 'COLLIER',
  libtypehbjo: 'BIJOUTERIE',
  libtypeproduit: 'OR 750',
  montantacompteht: '0',
  montantacomptettc: '0',
  mtchequecadeau: '0',
  mtencoursclient: '0',
  mtrestantavoir: '0',
  mtrestantchequecadeau: '0',
  mtrestantencoursclient: '0',
  mttpb: '1.10',
  mttpbreprise: '0',
  mttva: '115.83',
  mttvareprise: '0',
  mtutiliseavoir: '0',
  mtutilisechequecadeau: '0',
  poids: '1.350',
  poidsbrut: '0.000',
  poidsbrutreprise: '0',
  poidsreprise: '0',
  pourcremise: '0.00',
  pourcremiseanimcommerciale: '0',
  pourcremisereprise: '0',
  pourctpb: '0.19',
  pourctpbreprise: '0',
  pourctva: '20.00',
  pourctvareprise: '0',
  pxachat: '207.00',
  pxachatreprise: '0',
  pxmp: '207.00',
  pxmpreprise: '0',
  pxtheo: '695.00',
  pxtheoreprise: '0',
  pxventeht: '578.07',
  pxventehtreprise: '0',
  pxventettc: '695.00',
  pxventettcreprise: '0',
  qte: '1',
  qtedisponible: '0',
  qtereprise: '0',
  qtestock: '0',
  reffab: 'C5308EG',
  taille: '000',
  typeligne: 'VE',
  userId: 'clbmre3qg00005l8tqtljvacq',
};

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  async repro(): Promise<string> {
    // Create a record
    const createRecord = await this.prisma.salesLignes.create({
      data: {
        ...toSend,
      },
      select: {
        id: true,
      },
    });

    // update the record this throws an error in atlas
    await this.prisma.salesLignes.update({
      where: {
        id: createRecord.id,
      },
      data: {
        ...toSend,
      },
    });
    return 'Hello Cruel World!';
  }
}
