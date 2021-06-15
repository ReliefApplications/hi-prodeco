import { Project } from '../model/project';
import { Gallery } from '../model/gallery';

export const Projects: Project[] = [
  new Project('deminage',
    'Déminage (MAG et HI) au nord du Tchad',
    'Description Déminage (MAG et HI) au nord du Tchad',
    'assets/projects/deminage/deminage_MAG_Fada-13.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/deminage/deminage_HI_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dui quis magna finibus dapibus. Aenean rhoncus urna in venenatis congue. Morbi sit amet lacus nec ligula ultrices ornare id ac neque. Integer eget accumsan turpis. Fusce sodales turpis nec diam volutpat, vel laoreet lacus elementum. Nullam finibus non tellus eu dignissim. Etiam lobortis purus at erat finibus, at condimentum nulla hendrerit. Pellentesque aliquam nisl ut lorem posuere, nec hendrerit risus fermentum. Aliquam pharetra dui felis, vitae finibus elit tempor et. Fusce ante lorem, ultricies nec euismod rutrum, blandit ornare lorem. Fusce eleifend neque neque, vitae consequat enim blandit id. Donec at imperdiet felis.'
      }),
      new Gallery({url: 'assets/projects/deminage/deminage_HI_Fada-4.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_HI_Fada-5.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_HI_Fada-7.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_liaison communautaire_MAG_Fada-3.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_liaison communautaire_MAG_Fada-6.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_MAG_Fada-1.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/deminage_MAG_Fada-3.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/6_HI-Depart_des_demineurs_HI_pour_le_terrain 3.jpg', author: 'Louani Com'}),
      new Gallery({url: 'assets/projects/deminage/13_HI-Rassemblement_pour_des_consignes_de_securite.jpg', author: 'Louani Com'}),
      new Gallery({url: 'assets/projects/deminage/22_HI-Jason-Zone_de_destruction_des_mines.jpg', author: 'Louani Com'}),
      new Gallery({url: 'assets/projects/deminage/32_HI-Retour_des_démineurs_HI_de_la_zone_de_deminage.jpg', author: 'Louani Com'}),
      new Gallery({url: 'assets/projects/deminage/41_MAG-Programme_deminage-NGOM_ADRIEN_TFM-TL.jpg', author: 'Louani Com'}),
      new Gallery({
        url: 'assets/projects/deminage/49_Mag_EQUIPE _TERRAIN _MAG _ENNEDI _OUEST _SITE HARIGNALAI.CR2.jpg',
        author: 'Louani Com'
      }),
      new Gallery({url: 'assets/projects/deminage/51_Activite_MAG-Equipe_Mag_sur_le_terrain.jpg', author: 'Louani Com'}),
      new Gallery({url: 'assets/projects/deminage/deminage_MAG_Fada-13.jpg', author: 'Gwenn Dubourthoumieu'}),
      new Gallery({url: 'assets/projects/deminage/portrait beneficiaire_Fada-1.jpg', author: 'Gwenn Dubourthoumieu'}),
    ]
  ),
  new Project('assistance',
    'Assistance aux victimes',
    'Description Assistance aux victimes',
    'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_Fada-2.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_Fada-5.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_Fada-7.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-2.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-5.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-8.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/2.SECADEV-Djedouboum_mécanicien3.jpg',
        author: 'Louani Com'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/3.SECADEV-Rachel_la_commercante 2.jpg',
        author: 'Louani Com'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/4. SECADEV-Rosine_la_souriante_1.jpg',
        author: 'Louani Com'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/5. SECADEV-Neloumta_la_reine2.jpg',
        author: 'Louani Com'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-3.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_Fada-2.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-10.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/1.SECADEV-Anatole_aide_prothésiste.jpg',
        author: 'Louani Com'
      })
    ]),
  new Project('insertion',
    'Insertion socio-économiques',
    'Description Insertion socio-économiques',
    'assets/projects/insertion_socio_economique/PRODECO_insertion_socio-economique_portrait_beneficaire_Fada-6.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/1 . Activité HI - Achat de mouton par les béneficiaires.jpg',
        author: 'Louani Com'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/5. Activité HI - Programme ISE - Brahim accompagne sa maman qui est bénéficaire du programme ISE.jpg',
        author: 'Louani Com'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/8. Activité HI - Programme ISE - Aché - Commerçante au marché fada-.jpg',
        author: 'Louani Com'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/16. Activité HI - Programme ISE - Recensement d_un bénéficiaire du programme ISE 1.jpg',
        author: 'Louani Com'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/insertion socio-economique_portrait bénéficaire_Fada-5.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-économique_AVEC_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-économique_AVEC_Fada-4.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-économique_distribution médicaments_Fada-1.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-économique_filets sociaux_Fada-1.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-économique_foire agricole_Fada-8.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-économique_foire agricole_Fada-10.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-économique_portrait bénéficaire_Fada-2.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-économique_portrait bénéficaire_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion_socio-economique_portrait_beneficaire_Fada-6.jpg',
        author: 'Gwenn Dubourthoumieu'
      })
    ]
  ),
  new Project('institutionnel',
    'Appui institutionnel',
    'Description Appui institutionnel',
    'assets/projects/appui_institutionnel/17. PRODECO_renforcement institutionnel_NDjamena-16.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel _Fada-1.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel _Fada-2.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel _Fada-4.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel _Fada-6.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-1.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-2.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-8.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-9.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-11.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-14.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-15.jpg',
        author: 'Gwenn Dubourthoumieu'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/17. PRODECO_renforcement institutionnel_NDjamena-16.jpg',
        author: 'Louani Com'
      })
    ]
  ),
  new Project('recherche',
    'Recherche',
    'Description Recherche',
    'assets/projects/1/1.jpg',
    new Date(),
    []
  ),
];
