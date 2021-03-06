import { Project } from '../model/project';
import { Gallery } from '../model/gallery';

export const Projects: Project[] = [
  new Project('deminage',
    'projects.deminage.title',
    'projects.deminage.description',
    'assets/projects/deminage/deminage_MAG_Fada-13.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/deminage/deminage_HI_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_3'
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_HI_Fada-4.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_4',
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_MAG_Fada-3_video.jpg',
        author: '',
        isVideo: true,
        videoURL: 'projects.deminage.videos.video1'
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_HI_Fada-5.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_5'
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_HI_Fada-7.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_7'
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_liaison communautaire_MAG_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.liaison_fada_6_3'
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_liaison communautaire_MAG_Fada-6.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.liaison_fada_6_3'
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_MAG_Fada-1.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.mag_fada_1'
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_MAG_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.mag_fada_3'
      }),
      new Gallery({
        url: 'assets/projects/deminage/6_HI-Depart_des_demineurs_HI_pour_le_terrain 3.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_6'
      }),
      new Gallery({
        url: 'assets/projects/deminage/13_HI-Rassemblement_pour_des_consignes_de_securite.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_13'
      }),
      new Gallery({
        url: 'assets/projects/deminage/22_HI-Jason-Zone_de_destruction_des_mines.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_22'
      }),
      new Gallery({
        url: 'assets/projects/deminage/32_HI-Retour_des_d??mineurs_HI_de_la_zone_de_deminage.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_32'
      }),
      new Gallery({
        url: 'assets/projects/deminage/41_MAG-Programme_deminage-NGOM_ADRIEN_TFM-TL.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_41'
      }),
      new Gallery({
        url: 'assets/projects/deminage/49_Mag_EQUIPE _TERRAIN _MAG _ENNEDI _OUEST _SITE HARIGNALAI.CR2.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_49'
      }),
      new Gallery({
        url: 'assets/projects/deminage/51_Activite_MAG-Equipe_Mag_sur_le_terrain.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_51'
      }),
      new Gallery({
        url: 'assets/projects/deminage/deminage_MAG_Fada-13.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.mag_fada_13'
      }),
      new Gallery({
        url: 'assets/projects/deminage/portrait beneficiaire_Fada-1.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_1'
      }),
    ],
    ['projects.deminage.p1', 'projects.deminage.p2']
  ),
  new Project('assistance',
    'projects.assistance.title',
    'projects.assistance.description',
    'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_Fada-2.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_Fada-5.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.victimes_fada_5'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_Fada-7.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.victimes_fada_7'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-2.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.victimes_ndjamena_2_3'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-8_video.jpg',
        author: '',
        isVideo: true,
        videoURL: 'projects.assistance.videos.video1'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-5.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.victimes_ndjamena_5'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-8.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.victimes_ndjamena_8'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/2.SECADEV-Djedouboum_m??canicien3.jpg',
        author: 'Debora Edith Ngaba',
        description: 'debora.fada_2'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/3.SECADEV-Rachel_la_commercante 2.jpg',
        author: 'Debora Edith Ngaba',
        description: 'debora.fada_3'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/4. SECADEV-Rosine_la_souriante_1.jpg',
        author: 'Debora Edith Ngaba',
        description: 'debora.fada_4'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/5. SECADEV-Neloumta_la_reine2.jpg',
        author: 'Debora Edith Ngaba',
        description: 'debora.fada_5'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-3.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.victimes_ndjamena_2_3'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_Fada-2.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.victimes_fada_2'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/PRODECO_assistance_aux_victimes_NDjamena-10.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.victimes_ndjamena_10'
      }),
      new Gallery({
        url: 'assets/projects/assistance_aux_victimes/1.SECADEV-Anatole_aide_proth??siste.jpg',
        author: 'Debora Edith Ngaba',
        description: 'debora.fada_1'
      })
    ], ['projects.assistance.p0']),

  new Project('insertion',
    'projects.insertion.title',
    'projects.insertion.description',
    'assets/projects/insertion_socio_economique/PRODECO_insertion_socio-economique_portrait_beneficaire_Fada-6.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/1 . Activit?? HI - Achat de mouton par les b??neficiaires.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_1_5'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/5. Activit?? HI - Programme ISE - Brahim accompagne sa maman qui est b??n??ficaire du programme ISE.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_1_5'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/8. Activit?? HI - Programme ISE - Ach?? - Commer??ante au march?? fada-.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_8'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_portrait b??n??ficaire_Fada-3.jpg',
        author: '',
        isVideo: true,
        videoURL: 'projects.insertion.videos.video1'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/16. Activit?? HI - Programme ISE - Recensement d_un b??n??ficiaire du programme ISE 1.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_16'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/insertion socio-economique_portrait b??n??ficaire_Fada-5.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.beneficiaire_fada_5'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_AVEC_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_4_3'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_AVEC_Fada-4.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_4_3'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_distribution m??dicaments_Fada-1.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.medicaments_fada_1'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_filets sociaux_Fada-1.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.sociaux_fada_1'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_foire agricole_Fada-8.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.agricole_fada_8_10'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_foire agricole_Fada-10.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.agricole_fada_8_10'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_portrait b??n??ficaire_Fada-2.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.beneficiaire_fada_2'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion socio-??conomique_portrait b??n??ficaire_Fada-3.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.beneficiaire_fada_3'
      }),
      new Gallery({
        url: 'assets/projects/insertion_socio_economique/PRODECO_insertion_socio-economique_portrait_beneficaire_Fada-6.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.beneficiaire_fada_6'
      })
    ], ['projects.insertion.p0', 'projects.insertion.p1', 'projects.insertion.p2', 'projects.insertion.p3', 'projects.insertion.p4']
  ),
  new Project('institutionnel',
    'projects.institutionnel.title',
    'projects.institutionnel.description',
    'assets/projects/appui_institutionnel/17. PRODECO_renforcement institutionnel_NDjamena-16.jpg',
    new Date(),
    [
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel _Fada-1.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_1_2_4'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel _Fada-2.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_1_2_4'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel _Fada-4.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_1_2_4'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel _Fada-6.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.fada_6'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-1.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.ndjamena_1_2'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-2.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.ndjamena_1_2'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-2_video.jpg',
        author: '',
        isVideo: true,
        videoURL: 'projects.institutionnel.videos.video1'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-8.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.ndjamena_8_9_11_14'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-9.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.ndjamena_8_9_11_14'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-11.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.ndjamena_8_9_11_14'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-14.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.ndjamena_8_9_11_14'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/PRODECO_renforcement institutionnel_NDjamena-15.jpg',
        author: 'Gwenn Dubourthoumieu',
        description: 'gwenn.ndjamena_15'
      }),
      new Gallery({
        url: 'assets/projects/appui_institutionnel/17. PRODECO_renforcement institutionnel_NDjamena-16.jpg',
        author: 'Dj??rab?? Ndigngar',
        description: 'djerabe.fada_17'
      })
    ], ['projects.institutionnel.p0']
  ),
  // new Project('recherche',
  //   'Recherche',
  //   'Description Recherche',
  //   'assets/projects/1/1.jpg',
  //   new Date(),
  //   []
  // ),
];
