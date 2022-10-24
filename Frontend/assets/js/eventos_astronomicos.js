var events = [
    {'Date': new Date(2022, 9, 2), 'Title': 'Luna en cuarto creciente', 'Link': 'https://planetario.buenosaires.gob.ar/sites/default/files/inline-images/02_10_22_fases.png'},
    {'Date': new Date(2022, 9, 4), 'Title': 'Luna en Perigeo', 'Link': 'https://youtu.be/_If804L-SiM'},
    {'Date': new Date(2022, 9, 5), 'Title': 'Conjunción Luna-Saturno', 'Link': 'https://planetario.buenosaires.gob.ar/sites/default/files/inline-images/05_10_22_vistas.png'},
    {'Date': new Date(2022, 9, 8), 'Title': 'Conjunción Luna-Júpiter.', 'Link': 'https://https://planetario.buenosaires.gob.ar/sites/default/files/inline-images/08_10_22_vistas.png'},
    {'Date': new Date(2022, 9, 9), 'Title': 'Luna Llena.', 'Link': 'https://planetario.buenosaires.gob.ar/sites/default/files/inline-images/09_10_22_fases.png'},
    {'Date': new Date(2022, 9, 12), 'Title': 'Conjunción Luna-Urano', 'Link': 'https://starwalk.space/es/news/moon-in-conjunction-with-mars-venus-saturn-jupiter#12-de-octubre-conjunción-luna-urano'},
    {'Date': new Date(2022, 9, 15), 'Title': 'Conjunción de la Luna y Marte.', 'Link': 'https://planetario.buenosaires.gob.ar/sites/default/files/inline-images/14_10_22_destacada_ok%20%281%29.png'},
    {'Date': new Date(2022, 9, 17), 'Title': 'Luna en Apogeo.', 'Link': 'pbs.twimg.com/media/Fd6i03IXgAEEZ__?format=jpg&name=small'},
    {'Date': new Date(2022, 9, 21), 'Title': 'Lluvia de estrellas Oriónidas', 'Link': 'https://youtu.be/g0h57_f9acs?t=47'},
    {'Date': new Date(2022, 9, 24), 'Title': 'Conjunción Luna-Mercurio.', 'Link': 'https://starwalk.space/es/news/moon-in-conjunction-with-mars-venus-saturn-jupiter#24-de-octubre-conjunción-luna-mercurio'},
    {'Date': new Date(2022, 9, 25), 'Title': 'Conjunción Luna-Venus.', 'Link': 'https://starwalk.space/es/news/moon-in-conjunction-with-mars-venus-saturn-jupiter#25-de-octubre-conjunción-luna-venus'},
  ];
  var settings = {};
  var element = document.getElementById('caleandar');
  caleandar(element, events, settings);