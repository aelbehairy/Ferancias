(function(){
  'use strict';

  var fullPresentation = [
    ['Présentation', 'Je m’appelle Ahmed, j’ai quarante et un ans et je suis d’origine égyptienne. Je suis né le 22 août 1984 en Égypte, où j’ai grandi et fait mes études. Aujourd’hui, mon parcours professionnel m’amène à partager mon temps entre l’Arabie saoudite et les États-Unis.'],
    ['Profession', 'Je suis professeur d’université spécialisé en intelligence artificielle. Je travaille principalement dans l’enseignement supérieur et la recherche scientifique. J’aime beaucoup mon métier, car il me permet de transmettre mes connaissances et de contribuer à la formation des nouvelles générations. Même s’il demande beaucoup de temps et d’efforts, je le trouve très enrichissant.'],
    ['Famille', 'Sur le plan familial, je suis marié et ma famille se compose de quatre personnes : ma femme, mes deux enfants et moi. Ma femme s’appelle Aya et elle est dentiste. Notre fille Malk, l’aînée, a deux ans, et notre fils Aly, le benjamin, a un an. Nous sommes une famille très unie et nous aimons passer du temps ensemble. Le week-end, nous faisons souvent des promenades, nous allons au restaurant ou nous faisons du shopping.'],
    ['Projets d’avenir', 'Pour l’avenir, je compte immigrer au Canada avec ma famille et préparer ma thèse de doctorat à l’Université de Montréal. J’aimerais y vivre, car j’apprécie le calme et la qualité de vie dans ce pays. Sur le plan professionnel, j’ai l’intention de créer ma propre entreprise dans le domaine de l’intelligence artificielle.'],
    ['Amis', 'Concernant mes amis, j’en ai beaucoup : des amis d’enfance, des camarades d’école et d’université, ainsi que des collègues. Mes deux amis les plus proches sont Iman et Amr. Nous sommes amis depuis quinze ans. Nous nous entendons très bien et ils sont toujours à mes côtés quand j’en ai besoin.'],
    ['Loisirs', 'Pour mes loisirs, je préfère l’activité physique. Je fais régulièrement de la musculation et de la course à pied, et j’aime jouer au football avec mes amis. J’aime aussi voyager, découvrir de nouveaux endroits et apprendre de nouvelles choses. Je m’intéresse également à la diplomatie et j’aime lire des livres sur ce sujet.'],
    ['Vacances', 'Pour mes dernières vacances, je suis allé au Canada avec ma famille. Nous y sommes restés une semaine. Nous avons visité plusieurs endroits touristiques, fait du shopping, mangé dans de bons restaurants et pris beaucoup de photos. Nous sommes également allés à la plage pour nager et profiter du beau temps. J’ai beaucoup aimé ces vacances et j’aimerais y retourner un jour.']
  ];

  var oralQuestions = [
    ['1. Présentation', [
      ['Pouvez-vous vous présenter ?', 'Je m’appelle Ahmed, j’ai quarante et un ans et je suis d’origine égyptienne. Je suis né le 22 août 1984 en Égypte, où j’ai grandi et fait mes études. Aujourd’hui, mon parcours professionnel m’amène à partager mon temps entre l’Arabie saoudite et les États-Unis.']
    ]],
    ['2. Profession', [
      ['Que faites-vous dans la vie ?', 'Je suis professeur d’université spécialisé en intelligence artificielle. Je travaille principalement dans l’enseignement supérieur et la recherche scientifique.'],
      ['Est-ce que vous aimez votre métier ? Pourquoi ?', 'Oui, j’aime beaucoup mon métier, car il me permet de transmettre mes connaissances et de contribuer à la formation des nouvelles générations. Même s’il demande beaucoup de temps et d’efforts, je le trouve très enrichissant.']
    ]],
    ['3. Famille', [
      ['Parlez-moi de votre famille.', 'Sur le plan familial, je suis marié et ma famille se compose de quatre personnes : ma femme, mes deux enfants et moi. Ma femme s’appelle Aya et elle est dentiste.'],
      ['Avez-vous des enfants ?', 'Oui, nous avons deux enfants. Notre fille Malk, l’aînée, a deux ans, et notre fils Aly, le benjamin, a un an.'],
      ['Comment est votre relation avec votre famille ?', 'Nous sommes une famille très unie et nous aimons passer du temps ensemble. Ma famille est très importante pour moi.'],
      ['Que faites-vous ensemble le week-end ?', 'Le week-end, nous faisons souvent des promenades, nous allons au restaurant ou nous faisons du shopping.']
    ]],
    ['4. Projets d’avenir', [
      ['Quels sont vos projets pour l’avenir ?', 'Pour l’avenir, je compte immigrer au Canada avec ma famille et préparer ma thèse de doctorat à l’Université de Montréal.'],
      ['Pourquoi souhaitez-vous vivre au Canada ?', 'J’aimerais y vivre, car j’apprécie le calme et la qualité de vie dans ce pays.'],
      ['Avez-vous également des projets professionnels ?', 'Oui. J’ai l’intention de créer ma propre entreprise dans le domaine de l’intelligence artificielle.']
    ]],
    ['5. Amis', [
      ['Avez-vous beaucoup d’amis ?', 'Oui, bien sûr, j’en ai beaucoup : des amis d’enfance, des camarades d’école et d’université, ainsi que des collègues.'],
      ['Qui sont vos amis les plus proches ?', 'Mes deux amis les plus proches sont Iman et Amr.'],
      ['Depuis combien de temps êtes-vous amis ?', 'Nous sommes amis depuis quinze ans, depuis l’école.'],
      ['Comment est votre relation ?', 'Nous nous entendons très bien. Ils sont toujours à mes côtés et me soutiennent quand j’en ai besoin.']
    ]],
    ['6. Loisirs', [
      ['Quels sont vos loisirs ?', 'Pour mes loisirs, je préfère l’activité physique. Je fais régulièrement de la musculation et de la course à pied, et j’aime jouer au football avec mes amis.'],
      ['Qu’est-ce que vous aimez faire d’autre ?', 'J’aime aussi voyager, découvrir de nouveaux endroits et apprendre de nouvelles choses.'],
      ['Est-ce que vous aimez lire ?', 'Oui. Je m’intéresse à la diplomatie et j’aime lire des livres sur ce sujet.']
    ]],
    ['7. Vacances', [
      ['Où avez-vous passé vos dernières vacances ?', 'J’ai passé mes dernières vacances au Canada avec ma famille. Nous y sommes restés une semaine.'],
      ['Qu’avez-vous fait pendant votre séjour ?', 'Nous avons visité plusieurs endroits touristiques, fait du shopping, mangé dans de bons restaurants et pris beaucoup de photos.'],
      ['Êtes-vous allés à la plage ?', 'Oui, nous sommes également allés à la plage pour nager et profiter du beau temps.'],
      ['Avez-vous aimé vos vacances ?', 'Oui, j’ai beaucoup aimé ces vacances. C’était une très belle expérience pour toute la famille.'],
      ['Aimeriez-vous retourner au Canada ?', 'Oui, bien sûr. J’aimerais y retourner un jour pour découvrir d’autres endroits.']
    ]]
  ];

  function escapeHtml(value){
    return String(value).replace(/[&<>"']/g, function(char){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char];
    });
  }

  function renderFull(){
    return '<section class="tcf-oral-document" aria-label="Présentation complète">' +
      '<h2>Présentation complète</h2>' +
      '<div class="tcf-oral-document-grid tcf-oral-full-list">' + fullPresentation.map(function(item){
        return '<article class="tcf-oral-topic tcf-oral-full-row"><h3>' + escapeHtml(item[0]) + '</h3><p>' + escapeHtml(item[1]) + '</p></article>';
      }).join('') + '</div></section>';
  }

  function renderQuestions(){
    return '<section class="tcf-oral-document" aria-label="Questions et réponses">' +
      '<h2>Questions et réponses</h2>' +
      '<div class="tcf-oral-document-grid tcf-oral-questions-list">' + oralQuestions.map(function(group){
        return '<article class="tcf-oral-topic"><h3>' + escapeHtml(group[0]) + '</h3>' + group[1].map(function(item){
          return '<div class="tcf-oral-qa"><p><strong>Examinateur :</strong> ' + escapeHtml(item[0]) + '</p><p><strong>Réponse :</strong> ' + escapeHtml(item[1]) + '</p></div>';
        }).join('') + '</article>';
      }).join('') + '</div></section>';
  }

  function renderPicture(){
    return '<figure class="tcf-exam-image-card tcf-oral-picture">' +
      '<img src="./assets/tcf/examen-oral-questions-reponses.jpeg" alt="Examen oral : questions et réponses" loading="lazy">' +
      '<figcaption>Examen oral — Questions et réponses</figcaption>' +
    '</figure>';
  }

  window.renderTcfExamOralLesson = function(key){
    if(key === 'oral-full') return renderFull();
    if(key === 'oral-questions') return renderQuestions();
    if(key === 'oral-picture') return renderPicture();
    return '';
  };
})();
