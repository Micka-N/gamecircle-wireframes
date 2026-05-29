import React from "react";

const pages = [
  {
    title: "Dashboard",
    subtitle: "Vue utilisateur · Accueil après connexion",
    role: "utilisateur",
    phase: "socle",
    nav: "Accueil",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Bonjour Micka 👋", text: "Prêt pour la prochaine partie ?" },
      {
        type: "dark",
        title: "Soirée en cours",
        lines: ["Noël famille 2026", "Cercle : Famille & amis", "Jeu actuel : Blind test"],
        action: "Rejoindre le live",
      },
      {
        type: "section",
        title: "Prochaines soirées",
        cards: [
          { title: "Noël famille 2026", meta: "Ce soir · soirée en cours", badge: "Live", action: "Entrer" },
          { title: "Soirée anniversaire", meta: "24 juin · 8 participants", badge: "Préparation", action: "Voir" },
        ],
      },
      {
        type: "section",
        title: "Mes cercles récents",
        cards: [
          { title: "Famille & amis", meta: "12 membres · prochaine édition ce soir", badge: "Organisateur", action: "Entrer" },
          { title: "Collègues", meta: "6 membres · 1 édition passée", badge: "Membre", action: "Entrer" },
        ],
      },
      { type: "info", text: "Le dashboard sert à reprendre rapidement une soirée, un cercle ou une édition en cours." },
    ],
  },
  {
    title: "Mes cercles",
    subtitle: "Vue utilisateur · Onglet cercles",
    role: "utilisateur",
    phase: "socle",
    nav: "Cercles",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Mes cercles", text: "Retrouve les cercles auxquels tu appartiens ou crée un nouveau cercle." },
      {
        type: "section",
        title: "Cercles actifs",
        cards: [
          { title: "Famille & amis", meta: "12 membres · rôle organisateur", badge: "Organisateur", action: "Entrer" },
          { title: "Collègues", meta: "6 membres · rôle membre", badge: "Membre", action: "Entrer" },
        ],
      },
      { type: "actions", title: "Actions", actions: ["Créer un cercle"] },
      { type: "info", text: "Un cercle est un espace durable. Une édition est une soirée précise organisée dans ce cercle." },
    ],
  },
  {
    title: "Mes soirées",
    subtitle: "Vue utilisateur · Onglet soirées",
    role: "utilisateur",
    phase: "socle",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Mes soirées", text: "Toutes les éditions à venir, en préparation, en cours ou clôturées." },
      {
        type: "section",
        title: "À venir / en préparation",
        cards: [
          { title: "Noël famille 2026", meta: "Famille & amis · préparation", badge: "À préparer", action: "Ouvrir" },
          { title: "Soirée anniversaire", meta: "Famille & amis · 24 juin", badge: "Prévue", action: "Voir" },
        ],
      },
      {
        type: "section",
        title: "En cours",
        cards: [
          { title: "Blind test en cours", meta: "Noël famille 2026 · jeu 1 sur 10", badge: "Live", action: "Rejoindre" },
        ],
      },
      {
        type: "section",
        title: "Clôturées",
        cards: [
          { title: "Anniversaire Julie", meta: "12 octobre · résultats disponibles", badge: "Historique", action: "Résultats" },
        ],
      },
    ],
  },
  {
    title: "Invitation cercle",
    subtitle: "Vue utilisateur · Lien d’invitation",
    role: "utilisateur",
    phase: "socle",
    nav: "Accueil",
    scroll: false,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Rejoindre un cercle", text: "Julie t’a invité à rejoindre le cercle Famille & amis." },
      { type: "circleHeader", title: "Famille & amis", text: "12 membres · cercle privé" },
      { type: "info", text: "Après validation, tu deviendras membre de ce cercle. Tu pourras ensuite être invité aux éditions du cercle." },
      { type: "primary", action: "Rejoindre le cercle" },
    ],
  },
  {
    title: "Invitation expirée",
    subtitle: "Vue utilisateur · Lien invalide",
    role: "utilisateur",
    phase: "socle",
    nav: "Accueil",
    scroll: false,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Invitation expirée", text: "Ce lien ne permet plus de rejoindre le cercle Famille & amis." },
      { type: "warning", title: "Lien inutilisable", text: "Demande à Julie ou à un organisateur du cercle de générer une nouvelle invitation." },
      { type: "primary", action: "Retour au dashboard" },
    ],
  },
  {
    title: "Invitation édition",
    subtitle: "Vue membre · Invitation à une soirée",
    role: "membre",
    phase: "socle",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Invitation à une édition", text: "Julie t’a invité à participer à Noël famille 2026." },
      {
        type: "section",
        title: "Détails de l’édition",
        cards: [
          { title: "Cercle", meta: "Famille & amis", badge: "Cercle" },
          { title: "Date", meta: "24 décembre · 20h30", badge: "Prévue" },
          { title: "Participants", meta: "7 personnes prévues", badge: "Info" },
        ],
      },
      {
        type: "choiceList",
        title: "Ta réponse",
        choices: [
          { title: "Je participe", meta: "Tu seras compté comme confirmé.", selected: true },
          { title: "Je suis incertain", meta: "Tu seras compté dans l’estimation, mais à confirmer.", selected: false },
          { title: "Je refuse", meta: "Tu ne seras pas compté dans l’édition.", selected: false },
        ],
      },
      { type: "primary", action: "Envoyer ma réponse" },
    ],
  },
  {
    title: "Créer cercle",
    subtitle: "Vue utilisateur · Nouveau cercle",
    role: "utilisateur",
    phase: "socle",
    nav: "Cercles",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Créer un cercle", text: "Un cercle sert à organiser plusieurs éditions avec les mêmes proches." },
      { type: "form", title: "Obligatoire", fields: ["Nom du cercle *"] },
      { type: "form", title: "Facultatif", fields: ["Logo", "Description longue"] },
      { type: "info", text: "Tu deviendras automatiquement organisateur de ce cercle." },
      { type: "primary", action: "Créer le cercle" },
    ],
  },
  {
    title: "Profil",
    subtitle: "Vue utilisateur · Compte",
    role: "utilisateur",
    phase: "socle",
    nav: "Profil",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "profileHeader", name: "Micka", meta: "micka_dev · membre de 2 cercles" },
      {
        type: "section",
        title: "Informations",
        cards: [
          { title: "Email", meta: "micka@example.com", badge: "Compte" },
          { title: "Avatar", meta: "Image de profil actuelle", badge: "Profil" },
        ],
      },
      {
        type: "section",
        title: "Récompenses obtenues",
        cards: [
          { title: "Tasse de Noël", meta: "1re place · Noël famille 2026", badge: "Lot" },
          { title: "Jeux à gratter", meta: "2 lots gagnés en 2026", badge: "Historique" },
        ],
      },
      { type: "actions", title: "Actions", actions: ["Modifier le profil", "Paramètres du compte"] },
    ],
  },
  {
    title: "Paramètres compte",
    subtitle: "Vue utilisateur · Sécurité",
    role: "utilisateur",
    phase: "socle",
    nav: "Profil",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Paramètres", text: "Gère ton compte, ton email et ton mot de passe." },
      { type: "actions", title: "Compte", actions: ["Modifier email", "Changer mot de passe"] },
      { type: "warning", title: "Zone sensible", text: "La suppression du compte devra préserver l’historique des anciennes éditions sous forme anonymisée." },
      { type: "primary", action: "Demander la suppression" },
    ],
  },
  {
    title: "Accueil cercle",
    subtitle: "Vue membre / organisateur · Cercle",
    role: "membre",
    phase: "socle",
    nav: "Cercles",
    scroll: false,
    showBottomNav: true,
    blocks: [
      { type: "circleHeader", title: "Famille & amis", text: "12 membres · 3 éditions" },
      {
        type: "dark",
        title: "Prochaine édition",
        lines: ["Noël famille 2026", "Statut : préparation", "7 participants · 10 jeux"],
        action: "Préparer la soirée",
      },
      {
        type: "gridDetailed",
        items: [
          { title: "Éditions", text: "Soirées du cercle" },
          { title: "Membres", text: "Joueurs et rôles" },
          { title: "Mini-jeux", text: "Jeux du cercle" },
          { title: "Stats", text: "Scores et historique" },
        ],
      },
      { type: "actions", title: "Organisateur", actions: ["Créer une édition", "Gérer les invitations"] },
    ],
  },
  {
    title: "Créer édition",
    subtitle: "Vue organisateur · Infos de base",
    role: "organisateur",
    phase: "preparation",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Nouvelle soirée", text: "On commence simple. Le reste sera guidé étape par étape." },
      { type: "form", title: "Obligatoire", fields: ["Nom de l’édition *", "Date *"] },
      { type: "form", title: "Facultatif", fields: ["Lieu", "Thème", "Description longue"] },
      { type: "primary", action: "Créer et préparer" },
    ],
  },
  {
    title: "Préparation",
    subtitle: "Vue organisateur · Dashboard de préparation",
    role: "organisateur",
    phase: "preparation",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Noël famille 2026", text: "Préparation en cours · avance dans l’ordre que tu veux." },
      {
        type: "prepProgress",
        steps: [
          { title: "Infos", meta: "Nom, date et lieu renseignés", status: "Validé" },
          { title: "Participants", meta: "7 prévus · invitations envoyées", status: "Validé" },
          { title: "Jeux", meta: "10 jeux choisis · durée 2h10", status: "Validé" },
          { title: "Ordre", meta: "Ordre défini selon vos préférences", status: "Validé" },
          { title: "Récompenses", meta: "4 lots prévus", status: "Validé" },
          { title: "Matériel", meta: "14 éléments · 10 cochés", status: "À finir" },
          { title: "Validation", meta: "Dernier contrôle avant lancement", status: "À faire" },
        ],
      },
      { type: "helpBox", title: "Mode préparation", text: "Tu peux préparer dans l’ordre conseillé ou revenir sur une étape quand tu veux. Les étapes validées restent visibles." },
      { type: "primary", action: "Continuer la préparation" },
    ],
  },
  {
    title: "Participants",
    subtitle: "Vue organisateur · Édition précise",
    role: "organisateur",
    phase: "preparation",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Qui participe à cette édition ?", text: "Ajoute les membres du cercle ou les invités sans compte pour cette soirée précise." },
      { type: "actions", title: "Ajouter", actions: ["Inviter un membre du cercle", "Ajouter un invité sans compte"] },
      {
        type: "section",
        title: "Participants prévus",
        cards: [
          { title: "Julie", meta: "Membre du cercle · réponse confirmée", badge: "Confirmée" },
          { title: "Lenny", meta: "Membre du cercle · invitation envoyée", badge: "Invité" },
          { title: "Benoît", meta: "Invité sans compte · ajouté par l’organisateur", badge: "Invité" },
        ],
      },
      { type: "helpBox", title: "Comment les participants sont prévenus ?", text: "Un membre du cercle peut recevoir une invitation à l’édition et répondre : participe, incertain ou refuse. Un invité sans compte est ajouté directement par l’organisateur." },
      { type: "info", text: "Invités, confirmés et incertains comptent pour vérifier les jeux. Les refusés ne comptent pas." },
    ],
  },
  {
    title: "Sélection jeux",
    subtitle: "Vue organisateur · Choix visuel",
    role: "organisateur",
    phase: "preparation",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Choisis les mini-jeux", text: "7 participants prévus · durée cible libre" },
      { type: "filters", items: ["Durée", "Catégorie", "Joueurs", "Note"] },
      {
        type: "gameCarousel",
        cards: [
          { title: "Blind test", meta: "15 min · 3–12 joueurs", badge: "Officiel", action: "Ajouter" },
          { title: "Défi puzzle", meta: "20 min · 4–8 joueurs", badge: "Cercle", action: "Ajouter" },
          { title: "Duel chrono", meta: "Non recommandé · vous êtes 7", badge: "Grisé", action: "Voir pourquoi" },
        ],
      },
      { type: "summary", text: "10 jeux sélectionnés · durée estimée 2h10" },
      { type: "primary", action: "Valider les jeux" },
    ],
  },
  {
    title: "Ordre des jeux",
    subtitle: "Vue organisateur · Préparation édition",
    role: "organisateur",
    phase: "preparation",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Dans quel ordre jouer ?", text: "Réorganise les mini-jeux selon vos préférences." },
      {
        type: "orderedGames",
        games: [
          { order: 1, title: "Blind test", meta: "15 min · Officiel" },
          { order: 2, title: "Défi puzzle", meta: "20 min · Cercle" },
          { order: 3, title: "Mime chrono", meta: "10 min · Officiel" },
          { order: 4, title: "Quiz famille", meta: "25 min · Cercle" },
        ],
      },
      { type: "summary", text: "10 jeux · durée estimée 2h10" },
      { type: "primary", action: "Valider l’ordre" },
    ],
  },
  {
    title: "Récompenses",
    subtitle: "Vue organisateur · Lots de l’édition",
    role: "organisateur",
    phase: "preparation",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Récompenses", text: "Associe les lots aux places du podium final." },
      {
        type: "rewardList",
        rewards: [
          { rank: 1, title: "Tasse de Noël", meta: "1re place · quantité 1" },
          { rank: 1, title: "Jeux à gratter", meta: "1re place · quantité 3" },
          { rank: 2, title: "Jeux à gratter", meta: "2e place · quantité 2" },
          { rank: 3, title: "Jeux à gratter", meta: "3e place · quantité 1" },
        ],
      },
      { type: "actions", title: "Actions", actions: ["Ajouter une récompense"] },
      { type: "primary", action: "Valider les récompenses" },
    ],
  },
  {
    title: "Matériel",
    subtitle: "Vue organisateur · Checklist édition",
    role: "organisateur",
    phase: "preparation",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Checklist matériel", text: "Dernière vérification avant lancement. La liste vient des jeux sélectionnés." },
      {
        type: "materialList",
        items: [
          { title: "Gobelets", meta: "25 nécessaires · réutilisable", note: "Dans le placard du garage", checked: true },
          { title: "Feuilles papier", meta: "30 nécessaires · consommable", note: "Prévoir un paquet complet", checked: true },
          { title: "Feutres", meta: "8 nécessaires · réutilisable", note: "", checked: false },
          { title: "Chronomètre", meta: "1 nécessaire · réutilisable", note: "Téléphone possible si besoin", checked: false },
        ],
      },
      { type: "info", text: "Les quantités sont fusionnées selon les jeux choisis." },
      { type: "primary", action: "Valider le matériel" },
    ],
  },
  {
    title: "Validation",
    subtitle: "Vue organisateur · Avant lancement",
    role: "organisateur",
    phase: "preparation",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Dernier contrôle", text: "Vérifie que tout est prêt avant de lancer la soirée." },
      {
        type: "launchChecklist",
        items: [
          { title: "Participants", meta: "7 prévus · minimum atteint", status: "OK" },
          { title: "Mini-jeux", meta: "10 jeux sélectionnés", status: "OK" },
          { title: "Récompenses", meta: "4 récompenses prévues", status: "OK" },
          { title: "Matériel", meta: "10 / 14 éléments cochés", status: "Alerte" },
        ],
      },
      { type: "helpBox", title: "Que signifie lancer la soirée ?", text: "L’édition passe en cours, le live s’active et le premier mini-jeu devient le jeu actuel." },
      { type: "warning", title: "Matériel incomplet", text: "Tu peux lancer la soirée, mais certains éléments ne sont pas encore cochés." },
      { type: "primary", action: "Lancer la soirée" },
    ],
  },
  {
    title: "Mode soirée",
    subtitle: "Vue organisateur · Soirée en cours",
    role: "organisateur",
    phase: "live",
    nav: "Soirées",
    scroll: false,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Soirée lancée", text: "Noël famille 2026 · 7 participants" },
      {
        type: "dark",
        title: "Jeu actuel",
        lines: ["Blind test", "Jeu 1 sur 10", "15 min · plus haut score gagne"],
        action: "Ouvrir le jeu actuel",
      },
      { type: "liveActions", actions: ["Gérer participants", "Écran TV", "Live joueur"] },
      { type: "summary", text: "Classement général : en attente des premiers résultats" },
      { type: "helpBox", title: "Déroulé", text: "Les résultats se saisissent depuis la vue du jeu actuel. Après validation, l’application passe au jeu suivant." },
    ],
  },
  {
    title: "Jeu actuel",
    subtitle: "Vue organisateur · Pendant la soirée",
    role: "organisateur",
    phase: "live",
    nav: "Soirées",
    scroll: true,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Blind test", text: "Jeu 1 sur 10 · plus haut score gagne" },
      {
        type: "section",
        title: "Matériel rapide",
        cards: [
          { title: "Téléphone ou enceinte", meta: "1 nécessaire · prêt", badge: "OK" },
          { title: "Feuilles réponse", meta: "1 par joueur · à distribuer", badge: "À faire" },
        ],
      },
      {
        type: "gameRules",
        title: "Règles rapides",
        lines: ["Chaque joueur répond aux extraits musicaux.", "1 bonne réponse = 1 score brut.", "Le plus haut score gagne le mini-jeu."],
      },
      {
        type: "gameRules",
        title: "Système de points",
        lines: [
          "L’app peut gérer un score simple, plusieurs essais ou un classement manuel.",
          "Pour un jeu par élimination, l’organisateur renseigne le classement final.",
          "Les points gagnés alimentent ensuite le classement général.",
        ],
      },
      { type: "primary", action: "Saisir les résultats" },
    ],
  },
  {
    title: "Saisie résultats",
    subtitle: "Vue organisateur · Fin d’un mini-jeu",
    role: "organisateur",
    phase: "live",
    nav: "Soirées",
    scroll: true,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Résultats · Blind test", text: "Saisis les scores bruts ou le classement selon le type de jeu." },
      { type: "actions", title: "Raccourci", actions: ["Retour aux règles du jeu"] },
      {
        type: "scoreEntryAdvanced",
        players: [
          { name: "Julie", scores: ["3", "2", "3"], total: "8", status: "Joué" },
          { name: "Micka", scores: ["2", "2", "2"], total: "6", status: "Joué" },
          { name: "Lenny", scores: ["1", "2", "2"], total: "5", status: "Joué" },
          { name: "Benoît", scores: ["-", "-", "-"], total: "-", status: "Non joué" },
        ],
      },
      {
        type: "rankingPreview",
        title: "Classement actuel du jeu",
        rows: ["1. Julie · score brut total 8", "2. Micka · score brut total 6", "3. Lenny · score brut total 5", "Benoît · non joué"],
      },
      { type: "info", text: "Après validation, l’application calcule les points classement et passe au jeu suivant." },
      { type: "primary", action: "Valider les résultats" },
    ],
  },
  {
    title: "Live membre",
    subtitle: "Vue joueur · Soirée en cours",
    role: "membre",
    phase: "live",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Noël famille 2026", text: "Vue joueur · soirée en cours" },
      {
        type: "dark",
        title: "Jeu actuel",
        lines: ["Blind test", "Jeu 1 sur 10", "Plus haut score gagne"],
        action: "Voir règles du jeu actuel",
      },
      { type: "rankingPreview", title: "Classement général live", rows: ["1. Julie · 18 pts classement", "2. Micka · 15 pts classement", "3. Lenny · 11 pts classement"] },
      {
        type: "section",
        title: "Repères rapides",
        cards: [
          { title: "Jeu précédent", meta: "Aucun pour le moment", badge: "Début" },
          { title: "Prochain jeu", meta: "Défi puzzle · 20 min", badge: "À venir" },
        ],
      },
    ],
  },
  {
    title: "Live joueur détaillé",
    subtitle: "Vue joueur · Détails de soirée",
    role: "membre",
    phase: "live",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Détail live", text: "Consulte les règles du jeu actuel, le classement général et les derniers résultats." },
      { type: "gameRules", title: "Jeu actuel · Blind test", lines: ["Plus haut score gagne.", "Les résultats seront visibles après validation par l’organisateur."] },
      { type: "rankingPreview", title: "Dernier résultat validé", rows: ["Aucun jeu terminé pour le moment", "Les scores bruts apparaîtront ici après validation"] },
      { type: "primary", action: "Retour au live" },
    ],
  },
  {
    title: "Gérer participants",
    subtitle: "Vue organisateur · Pendant la soirée",
    role: "organisateur",
    phase: "live",
    nav: "Soirées",
    scroll: true,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Participants en direct", text: "Gère les absences, retards, départs ou invités ajoutés en cours." },
      {
        type: "participantLiveList",
        players: [
          { name: "Julie", meta: "Présente · joue les prochains jeux", status: "Présente" },
          { name: "Micka", meta: "Présent · joue les prochains jeux", status: "Présent" },
          { name: "Benoît", meta: "Arrivé en retard · jeux précédents non joués", status: "Retard" },
          { name: "Lenny", meta: "Parti · garde ses points déjà gagnés", status: "Parti" },
        ],
      },
      { type: "helpBox", title: "À quoi servent ces statuts ?", text: "Absent = ne joue pas le jeu concerné. Parti = garde ses points déjà gagnés, mais ne joue plus les jeux suivants. Forfait = classé dernier sur le jeu en cours." },
      { type: "actions", title: "Actions", actions: ["Ajouter un invité", "Marquer absent", "Marquer parti"] },
    ],
  },
  {
    title: "Clôture",
    subtitle: "Vue organisateur · Fin de soirée",
    role: "organisateur",
    phase: "live",
    nav: "Soirées",
    scroll: true,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Clôturer l’édition", text: "Vérifie les résultats avant de figer la soirée." },
      {
        type: "launchChecklist",
        items: [
          { title: "Jeux joués", meta: "9 jeux avec résultats validés", status: "OK" },
          { title: "Jeux non joués", meta: "1 jeu marqué annulé", status: "OK" },
          { title: "Participants", meta: "1 absent · 1 parti en cours", status: "OK" },
          { title: "Égalités", meta: "Aucune égalité à départager", status: "OK" },
        ],
      },
      { type: "helpBox", title: "Que se passe-t-il à la clôture ?", text: "Les résultats sont figés, le podium final est généré et l’édition passe dans l’historique. Après clôture, une correction devra être exceptionnelle." },
      { type: "warning", title: "Résultats bientôt verrouillés", text: "Après clôture, les corrections devront passer par une demande exceptionnelle." },
      { type: "primary", action: "Clôturer l’édition" },
    ],
  },
  {
    title: "Podium final",
    subtitle: "Vue joueur · Édition clôturée",
    role: "membre",
    phase: "post",
    nav: "Soirées",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Podium final", text: "Noël famille 2026 · édition clôturée" },
      {
        type: "podium",
        winners: [
          { rank: 1, name: "Julie", points: "42 pts", reward: "Tasse de Noël + 3 jeux à gratter" },
          { rank: 2, name: "Micka", points: "36 pts", reward: "2 jeux à gratter" },
          { rank: 3, name: "Lenny", points: "31 pts", reward: "1 jeu à gratter" },
        ],
      },
      { type: "primary", action: "Voir tous les résultats" },
    ],
  },
  {
    title: "Historique",
    subtitle: "Vue membre · Éditions passées",
    role: "membre",
    phase: "post",
    nav: "Cercles",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Historique du cercle", text: "Entre dans une édition clôturée pour voir le podium, les scores et les détails." },
      {
        type: "section",
        title: "Éditions clôturées",
        cards: [
          { title: "Noël famille 2026", meta: "24 décembre · 7 participants · 10 jeux", badge: "Clôturée", action: "Voir résultats" },
          { title: "Anniversaire Julie", meta: "12 octobre · 6 participants · 8 jeux", badge: "Clôturée", action: "Voir résultats" },
        ],
      },
      { type: "summary", text: "Les éditions annulées ne sont pas comptées comme soirées jouées." },
    ],
  },
  {
    title: "Résultats édition",
    subtitle: "Vue membre · Édition clôturée",
    role: "membre",
    phase: "post",
    nav: "Cercles",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Noël famille 2026", text: "Résultats complets · édition clôturée" },
      { type: "rankingPreview", title: "Classement final", rows: ["1. Julie · 42 pts classement", "2. Micka · 36 pts classement", "3. Lenny · 31 pts classement", "4. Benoît · 18 pts classement"] },
      {
        type: "section",
        title: "Explorer l’édition",
        cards: [
          { title: "Tous les mini-jeux", meta: "Scores bruts, rangs et points par jeu", badge: "Détail", action: "Ouvrir" },
          { title: "Mes performances", meta: "Tes scores dans cette édition", badge: "Perso", action: "Voir" },
          { title: "Comparer joueurs", meta: "Comparer les résultats de l’édition", badge: "Stats", action: "Comparer" },
        ],
      },
      {
        type: "section",
        title: "Résultats par mini-jeu",
        cards: [
          { title: "Blind test", meta: "Julie gagne · meilleur score brut 8", badge: "Joué", action: "Détail" },
          { title: "Défi puzzle", meta: "Micka gagne · meilleur temps 42s", badge: "Joué", action: "Détail" },
        ],
      },
    ],
  },
  {
    title: "Détail mini-jeu joué",
    subtitle: "Vue membre · Scores bruts",
    role: "membre",
    phase: "post",
    nav: "Cercles",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Blind test", text: "Détail du mini-jeu joué pendant Noël famille 2026." },
      {
        type: "rankingPreview",
        title: "Scores du jeu",
        rows: [
          "1. Julie · score brut 8 · +5 pts classement",
          "2. Micka · score brut 6 · +3 pts classement",
          "3. Lenny · score brut 5 · +1 pt classement",
          "Benoît · non joué · 0 pt classement",
        ],
      },
      { type: "info", text: "Le score brut est conservé pour comparer les performances d’une édition à l’autre." },
    ],
  },
  {
    title: "Stats cercle",
    subtitle: "Vue membre · Statistiques",
    role: "membre",
    phase: "post",
    nav: "Cercles",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Stats du cercle", text: "Choisis une entrée : classement, joueurs, éditions ou mini-jeux." },
      {
        type: "gridDetailed",
        items: [
          { title: "Classement all-time", text: "Points cumulés" },
          { title: "Joueurs", text: "Stats individuelles" },
          { title: "Éditions", text: "Historique détaillé" },
          { title: "Mini-jeux", text: "Scores bruts par jeu" },
        ],
      },
      {
        type: "statsGrid",
        stats: [
          { label: "Éditions jouées", value: "8" },
          { label: "Mini-jeux joués", value: "74" },
          { label: "Meilleur joueur", value: "Julie" },
          { label: "Jeu favori", value: "Blind test" },
        ],
      },
      { type: "rankingPreview", title: "Classement all-time", rows: ["1. Julie · 312 pts", "2. Micka · 284 pts", "3. Lenny · 240 pts"] },
    ],
  },
  {
    title: "Stats joueur",
    subtitle: "Vue membre · Performances cercle",
    role: "membre",
    phase: "post",
    nav: "Cercles",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Stats de Micka", text: "Performances dans le cercle Famille & amis." },
      {
        type: "statsGrid",
        stats: [
          { label: "Éditions jouées", value: "8" },
          { label: "Total points", value: "284" },
          { label: "Podiums", value: "5" },
          { label: "Lots gagnés", value: "3" },
        ],
      },
      {
        type: "section",
        title: "Récompenses",
        cards: [
          { title: "2e place", meta: "Noël famille 2026 · 2 jeux à gratter", badge: "Lot" },
          { title: "3e place", meta: "Anniversaire Julie · 1 jeu à gratter", badge: "Lot" },
        ],
      },
      { type: "rankingPreview", title: "Meilleurs scores bruts", rows: ["Blind test · meilleur score 9", "Défi puzzle · meilleur temps 42s", "Quiz famille · meilleur score 12"] },
    ],
  },
  {
    title: "Comparer joueurs",
    subtitle: "Vue membre · Comparaison",
    role: "membre",
    phase: "post",
    nav: "Cercles",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Comparer les joueurs", text: "Compare les performances dans ce cercle." },
      {
        type: "comparePlayers",
        players: [
          { name: "Julie", stats: ["312 pts", "8 victoires", "18 mini-jeux gagnés"] },
          { name: "Micka", stats: ["284 pts", "5 podiums", "14 mini-jeux gagnés"] },
        ],
      },
      { type: "info", text: "Les invités sans compte ne sont pas inclus dans les statistiques longues tant qu’ils ne sont pas rattachés à un compte." },
    ],
  },
  {
    title: "Catalogue officiel",
    subtitle: "Vue membre · Mini-jeux",
    role: "membre",
    phase: "catalogue",
    nav: "Jeux",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Catalogue officiel", text: "Des mini-jeux prêts à utiliser dans tes éditions." },
      { type: "filters", items: ["Catégorie", "Durée", "Joueurs", "Note"] },
      {
        type: "gameCarousel",
        cards: [
          { title: "Blind test", meta: "15 min · 3–12 joueurs", badge: "Officiel", action: "Voir" },
          { title: "Mime chrono", meta: "10 min · 4–12 joueurs", badge: "Officiel", action: "Voir" },
          { title: "Quiz rapide", meta: "20 min · 2–10 joueurs", badge: "Officiel", action: "Voir" },
        ],
      },
    ],
  },
  {
    title: "Fiche mini-jeu",
    subtitle: "Vue membre · Catalogue officiel",
    role: "membre",
    phase: "catalogue",
    nav: "Jeux",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Blind test", text: "Mini-jeu officiel · 15 min · 3–12 joueurs" },
      { type: "gameRules", title: "Règles", lines: ["L’organisateur lance des extraits musicaux.", "Chaque bonne réponse donne 1 point brut.", "Le plus haut score gagne le mini-jeu."] },
      {
        type: "section",
        title: "Matériel nécessaire",
        cards: [
          { title: "Téléphone ou enceinte", meta: "1 nécessaire · réutilisable", badge: "Matériel" },
          { title: "Feuilles réponse", meta: "1 par joueur · consommable", badge: "Matériel" },
        ],
      },
      { type: "rankingPreview", title: "Avis rapides", rows: ["Note moyenne : 4.7 / 5", "Souvent joué en début de soirée"] },
    ],
  },
  {
    title: "Mini-jeux du cercle",
    subtitle: "Vue membre · Jeux du cercle",
    role: "membre",
    phase: "catalogue",
    nav: "Jeux",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Jeux du cercle", text: "Jeux créés ou adaptés par Famille & amis." },
      {
        type: "gameCarousel",
        cards: [
          { title: "Quiz famille", meta: "25 min · créé pour ce cercle", badge: "Cercle", action: "Voir" },
          { title: "Blind test Disney", meta: "15 min · adapté depuis officiel", badge: "Cercle", action: "Voir" },
        ],
      },
      { type: "actions", title: "Proposer", actions: ["Proposer un mini-jeu"] },
    ],
  },
  {
    title: "Proposer mini-jeu",
    subtitle: "Vue membre · Proposition au cercle",
    role: "membre",
    phase: "catalogue",
    nav: "Jeux",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Proposer un mini-jeu", text: "Propose une idée au cercle. Un organisateur devra la valider avant utilisation." },
      { type: "form", title: "Informations du jeu", fields: ["Nom du mini-jeu *", "Durée estimée", "Joueurs min", "Joueurs max"] },
      { type: "form", title: "Règles et matériel", fields: ["Règles longues", "Matériel nécessaire", "Type de score"] },
      {
        type: "choiceList",
        title: "Crédit auteur",
        choices: [
          { title: "Afficher mon nom", meta: "Ton pseudo pourra apparaître sur la fiche du jeu.", selected: true },
          { title: "Rester anonyme", meta: "Le jeu sera proposé sans afficher ton nom.", selected: false },
        ],
      },
      { type: "primary", action: "Envoyer la proposition" },
    ],
  },
  {
    title: "Propositions cercle",
    subtitle: "Vue organisateur · Jeux à valider",
    role: "organisateur",
    phase: "catalogue",
    nav: "Jeux",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Propositions à valider", text: "Les jeux proposés ne sont pas utilisables tant qu’ils ne sont pas acceptés." },
      {
        type: "section",
        title: "En attente",
        cards: [
          { title: "Quiz famille", meta: "Proposé par Julie · 25 min · 4–12 joueurs", badge: "En attente", action: "Examiner" },
          { title: "Défi objets mystères", meta: "Proposé anonymement · 15 min", badge: "À modifier", action: "Voir" },
        ],
      },
      { type: "helpBox", title: "Que peut faire l’organisateur ?", text: "Il peut accepter, refuser, demander une modification ou corriger lui-même avant validation." },
    ],
  },
  {
    title: "Détail proposition",
    subtitle: "Vue organisateur · Validation",
    role: "organisateur",
    phase: "catalogue",
    nav: "Jeux",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Quiz famille", text: "Proposition de mini-jeu · statut en attente" },
      { type: "gameRules", title: "Règles proposées", lines: ["Chaque joueur répond à une question sur la famille.", "1 bonne réponse = 1 score brut.", "Le plus haut score gagne le mini-jeu."] },
      {
        type: "section",
        title: "Informations",
        cards: [
          { title: "Durée", meta: "25 minutes", badge: "Info" },
          { title: "Participants", meta: "4 à 12 joueurs", badge: "Info" },
          { title: "Score", meta: "Plus haut score gagne", badge: "Info" },
        ],
      },
      { type: "decisionActions", actions: ["Accepter", "Demander modification", "Refuser"] },
    ],
  },
  {
    title: "Jeu du cercle",
    subtitle: "Vue membre · Mini-jeu local",
    role: "membre",
    phase: "catalogue",
    nav: "Jeux",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Quiz famille", text: "Mini-jeu du cercle · créé pour Famille & amis" },
      { type: "gameRules", title: "Règles", lines: ["Questions personnalisées sur les membres du cercle.", "Chaque bonne réponse donne 1 point brut.", "Le plus haut score gagne le mini-jeu."] },
      {
        type: "section",
        title: "Matériel",
        cards: [
          { title: "Cartes questions", meta: "30 cartes · consommable", badge: "Matériel" },
          { title: "Stylo", meta: "1 nécessaire · réutilisable", badge: "Matériel" },
        ],
      },
      { type: "actions", title: "Actions organisateur", actions: ["Modifier le jeu", "Proposer au catalogue officiel"] },
    ],
  },
  {
    title: "Proposer officiel",
    subtitle: "Vue organisateur · Catalogue officiel",
    role: "organisateur",
    phase: "catalogue",
    nav: "Jeux",
    scroll: true,
    showBottomNav: true,
    blocks: [
      { type: "hero", title: "Proposer au catalogue officiel", text: "Le jeu du cercle sera envoyé à l’admin global pour validation." },
      { type: "section", title: "Jeu concerné", cards: [{ title: "Quiz famille", meta: "Jeu du cercle Famille & amis", badge: "Cercle" }] },
      { type: "helpBox", title: "Important", text: "Si le jeu est accepté, une version officielle propre sera créée. Le jeu du cercle d’origine ne sera pas écrasé." },
      { type: "primary", action: "Envoyer la proposition officielle" },
    ],
  },
  {
    title: "Admin",
    subtitle: "Vue admin · Tableau de bord",
    role: "admin",
    phase: "admin",
    nav: "Profil",
    scroll: false,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Admin global", text: "Gestion du catalogue officiel et des propositions." },
      {
        type: "gridDetailed",
        items: [
          { title: "Catalogue", text: "Jeux officiels" },
          { title: "Catégories", text: "Types de jeux" },
          { title: "Propositions", text: "À valider" },
          { title: "Corrections", text: "V2" },
        ],
      },
    ],
  },
  {
    title: "Admin catalogue",
    subtitle: "Vue admin · Catalogue officiel",
    role: "admin",
    phase: "admin",
    nav: "Jeux",
    scroll: true,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Catalogue officiel", text: "Créer, modifier ou archiver les mini-jeux officiels." },
      { type: "actions", title: "Actions", actions: ["Créer un jeu officiel", "Gérer les catégories"] },
      {
        type: "section",
        title: "Jeux officiels",
        cards: [
          { title: "Blind test", meta: "Actif · 15 min · 3–12 joueurs", badge: "Officiel", action: "Modifier" },
          { title: "Mime chrono", meta: "Actif · 10 min · 4–12 joueurs", badge: "Officiel", action: "Modifier" },
        ],
      },
    ],
  },
  {
    title: "Admin propositions",
    subtitle: "Vue admin · Propositions officielles",
    role: "admin",
    phase: "admin",
    nav: "Jeux",
    scroll: true,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Propositions officielles", text: "Valide les jeux envoyés par les organisateurs de cercles." },
      {
        type: "section",
        title: "En attente",
        cards: [
          { title: "Quiz famille", meta: "Envoyé par cercle Famille & amis", badge: "En attente", action: "Examiner" },
          { title: "Défi objets mystères", meta: "Envoyé par cercle Collègues", badge: "À modifier", action: "Voir" },
        ],
      },
    ],
  },
  {
    title: "Détail officiel",
    subtitle: "Vue admin · Validation catalogue",
    role: "admin",
    phase: "admin",
    nav: "Jeux",
    scroll: true,
    showBottomNav: false,
    blocks: [
      { type: "hero", title: "Quiz famille", text: "Proposition officielle à examiner." },
      { type: "gameRules", title: "Règles proposées", lines: ["Chaque joueur répond à une question personnalisée.", "L’admin doit généraliser les règles si elles sont trop spécifiques.", "Le plus haut score gagne."] },
      { type: "helpBox", title: "Après acceptation", text: "Une version officielle propre sera créée dans le catalogue officiel. Le jeu du cercle reste inchangé." },
      { type: "decisionActions", actions: ["Accepter", "Demander modification", "Refuser"] },
    ],
  },
];

const tvScreens = [
  {
    title: "Écran TV · attente",
    subtitle: "Vue publique · Avant lancement",
    blocks: [
      { type: "tvHero", title: "Noël famille 2026", text: "La soirée va bientôt commencer" },
      { type: "tvStatus", items: ["7 participants prévus", "10 mini-jeux sélectionnés", "Durée estimée : 2h10", "Statut : préparation"] },
      {
        type: "tvGameProgress",
        done: 0,
        total: 10,
        games: [
          { name: "Blind test", status: "next" },
          { name: "Défi puzzle", status: "todo" },
          { name: "Mime chrono", status: "todo" },
          { name: "Quiz famille", status: "todo" },
          { name: "Duel dessin", status: "todo" },
        ],
      },
    ],
  },
  {
    title: "Écran TV · live",
    subtitle: "Vue publique · Pendant la soirée",
    blocks: [
      { type: "tvHero", title: "Blind test", text: "Jeu 4 sur 10 · plus haut score gagne" },
      {
        type: "tvGameProgress",
        done: 3,
        total: 10,
        games: [
          { name: "Quiz", status: "done" },
          { name: "Puzzle", status: "done" },
          { name: "Mime", status: "done" },
          { name: "Blind test", status: "current" },
          { name: "Dessin", status: "todo" },
          { name: "Défi final", status: "todo" },
        ],
      },
      {
        type: "tvDoubleRanking",
        generalTitle: "Classement général",
        gameTitle: "Classement du jeu en cours",
        generalRows: ["1. Julie · 18 pts", "2. Micka · 15 pts", "3. Lenny · 11 pts"],
        gameRows: ["1. Micka · score brut 6", "2. Julie · score brut 5", "3. Lenny · score brut 3"],
      },
      { type: "tvStatus", items: ["Jeux faits : 3", "Jeux restants : 6", "Prochain jeu : Dessin", "Résultats : en cours"] },
    ],
  },
  {
    title: "Écran TV · podium",
    subtitle: "Vue publique · Édition clôturée",
    blocks: [
      { type: "tvHero", title: "Podium final", text: "Noël famille 2026 · édition clôturée" },
      { type: "tvCelebration", title: "Bravo Julie !", text: "Grande gagnante de Noël famille 2026" },
      {
        type: "tvRanking",
        title: "Top 3",
        rows: [
          "1. Julie · 42 pts · Tasse + 3 jeux à gratter",
          "2. Micka · 36 pts · 2 jeux à gratter",
          "3. Lenny · 31 pts · 1 jeu à gratter",
        ],
      },
      { type: "tvStatus", items: ["10 jeux terminés", "Résultats verrouillés", "Historique disponible", "Bravo à tous"] },
    ],
  },
];

const PHASES = [
  {
    id: "socle",
    label: "01 · Socle utilisateur & cercles",
    description: "Entrée dans l’application, profil, invitations, cercles et tableau de bord.",
  },
  {
    id: "preparation",
    label: "02 · Préparation d’édition",
    description: "Création de soirée, participants, jeux, ordre, récompenses, matériel et validation.",
  },
  {
    id: "live",
    label: "03 · Soirée en cours",
    description: "Mode organisateur, live membre, scores, présence et clôture.",
  },
  {
    id: "post",
    label: "04 · Après-soirée & statistiques",
    description: "Podium, historique, résultats, scores bruts, récompenses et comparaisons.",
  },
  {
    id: "catalogue",
    label: "05 · Mini-jeux & catalogue",
    description: "Catalogue officiel, jeux de cercle, propositions et validation locale.",
  },
  {
    id: "admin",
    label: "06 · Administration globale",
    description: "Gestion du catalogue officiel et validation des propositions officielles.",
  },
];

const PHASE_STYLES = {
  socle: "bg-slate-50 border-slate-200",
  preparation: "bg-amber-50 border-amber-200",
  live: "bg-emerald-50 border-emerald-200",
  post: "bg-sky-50 border-sky-200",
  catalogue: "bg-purple-50 border-purple-200",
  admin: "bg-rose-50 border-rose-200",
};

const ROLE_STYLES = {
  utilisateur: "bg-neutral-100 text-neutral-900 border-neutral-300",
  membre: "bg-sky-100 text-sky-900 border-sky-300",
  organisateur: "bg-amber-100 text-amber-900 border-amber-300",
  admin: "bg-rose-100 text-rose-900 border-rose-300",
};

function roleLabel(role) {
  if (role === "organisateur") return "Vue organisateur";
  if (role === "membre") return "Vue joueur / membre";
  if (role === "admin") return "Vue admin";
  return "Vue utilisateur";
}

function Phone({ page }) {
  return (
    <div className="space-y-2">
      <div className="text-center space-y-1">
        <span className={`inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-wide ${ROLE_STYLES[page.role]}`}>
          {roleLabel(page.role)}
        </span>

        <p className="text-[10px] uppercase tracking-wide text-neutral-700 font-bold">
          {page.subtitle}
        </p>

        <h2 className="text-sm font-black text-black leading-tight">
          {page.title}
        </h2>
      </div>

      <div className="relative w-[260px] h-[560px] rounded-[28px] bg-neutral-950 p-2 shadow-xl border border-neutral-800 shrink-0">
        <div className="h-full rounded-[22px] bg-neutral-100 overflow-hidden flex flex-col">
          <div className="h-6 bg-neutral-100 flex justify-center items-center shrink-0">
            <div className="w-20 h-3 rounded-full bg-neutral-950" />
          </div>

          <main className="relative flex-1 overflow-hidden bg-neutral-100">
            <div className="h-full overflow-y-auto px-3 py-3 space-y-3 pr-4">
              {page.blocks.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>

            {page.scroll && <ScrollIndicator />}
          </main>

          {page.showBottomNav && (
            <footer className="h-12 bg-white border-t border-neutral-300 grid grid-cols-5 text-[8px] text-neutral-500 shrink-0">
              {["Accueil", "Cercles", "Soirées", "Jeux", "Profil"].map((item) => (
                <div
                  key={item}
                  className={`flex flex-col items-center justify-center gap-0.5 ${
                    page.nav === item ? "font-bold text-neutral-950" : ""
                  }`}
                >
                  <span>{page.nav === item ? "●" : "○"}</span>
                  <span>{item}</span>
                </div>
              ))}
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute right-1 top-3 bottom-3 w-1 rounded-full bg-neutral-300">
      <div className="w-1 h-16 rounded-full bg-neutral-700" />
    </div>
  );
}

function Block({ block }) {
  if (block.type === "hero") {
    return (
      <div>
        <p className="text-lg font-black leading-tight text-black">{block.title}</p>
        <p className="text-[11px] text-neutral-700 mt-1">{block.text}</p>
      </div>
    );
  }

  if (block.type === "dark") {
    return (
      <section className="rounded-2xl bg-neutral-900 text-white p-3">
        <p className="text-sm font-bold mb-1">{block.title}</p>

        {block.lines.map((line, index) => (
          <p key={index} className="text-[10px] text-neutral-200">
            {line}
          </p>
        ))}

        <button className="mt-3 w-full h-9 rounded-xl bg-white text-neutral-950 text-[11px] font-bold">
          {block.action}
        </button>
      </section>
    );
  }

  if (block.type === "section") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">{block.title}</p>

        <div className="space-y-2">
          {block.cards.map((card, index) => (
            <MiniCard key={index} {...card} />
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "actions") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">{block.title}</p>

        <div className="space-y-2">
          {block.actions.map((action) => (
            <button
              key={action}
              className="w-full h-9 rounded-xl border border-neutral-400 bg-white text-[11px] font-bold text-neutral-900"
            >
              {action}
            </button>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "circleHeader") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3 flex gap-3 items-center">
        <div className="w-12 h-12 rounded-2xl bg-neutral-300" />

        <div>
          <p className="text-lg font-black leading-tight text-black">{block.title}</p>
          <p className="text-[11px] text-neutral-600">{block.text}</p>
        </div>
      </section>
    );
  }

  if (block.type === "profileHeader") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3 flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-neutral-300 shrink-0" />

        <div className="min-w-0">
          <p className="text-lg font-black text-black leading-tight">{block.name}</p>
          <p className="text-[10px] text-neutral-600 mt-1">{block.meta}</p>
        </div>
      </section>
    );
  }

  if (block.type === "gridDetailed") {
    return (
      <div className="grid grid-cols-2 gap-2">
        {block.items.map((item) => (
          <button
            key={item.title}
            className="h-20 rounded-2xl bg-white border border-neutral-300 p-2 text-left"
          >
            <p className="text-xs font-black text-neutral-950">{item.title}</p>
            <p className="text-[9px] text-neutral-600 mt-1">{item.text}</p>
          </button>
        ))}
      </div>
    );
  }

  if (block.type === "form") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">{block.title}</p>

        <div className="space-y-2">
          {block.fields.map((field) => (
            <label key={field} className="block">
              <span className="text-[10px] font-semibold text-neutral-700">{field}</span>
              <div className={`${field.includes("Description") || field.includes("Règles") ? "h-16" : "h-9"} rounded-xl border border-neutral-300 bg-neutral-100 mt-1`} />
            </label>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "primary") {
    return (
      <button className="w-full h-10 rounded-xl bg-neutral-900 text-white text-xs font-black">
        {block.action}
      </button>
    );
  }

  if (block.type === "prepProgress") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Étapes de préparation</p>

        <div className="space-y-2">
          {block.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-center gap-2 rounded-xl bg-neutral-50 border border-neutral-200 p-2"
            >
              <span className={`w-6 h-6 rounded-full text-[10px] flex items-center justify-center shrink-0 ${
                step.status === "Validé"
                  ? "bg-emerald-700 text-white"
                  : step.status === "À finir"
                  ? "bg-amber-500 text-white"
                  : "bg-neutral-300 text-neutral-700"
              }`}>
                {step.status === "Validé" ? "✓" : index + 1}
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-neutral-950">{step.title}</p>
                <p className="text-[9px] text-neutral-600">{step.meta}</p>
              </div>

              <span className="text-[8px] px-2 py-1 rounded-full bg-neutral-200 text-neutral-800 whitespace-nowrap">
                {step.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "info") {
    return (
      <div className="rounded-xl bg-neutral-200 border border-neutral-300 p-3 text-[10px] text-neutral-800">
        {block.text}
      </div>
    );
  }

  if (block.type === "helpBox") {
    return (
      <div className="rounded-2xl bg-white border border-dashed border-neutral-400 p-3">
        <p className="text-[12px] font-black text-black">? {block.title}</p>
        <p className="text-[10px] text-neutral-700 mt-1">{block.text}</p>
      </div>
    );
  }

  if (block.type === "warning") {
    return (
      <div className="rounded-2xl bg-neutral-300 border border-neutral-400 p-3">
        <p className="text-[12px] font-black text-black">{block.title}</p>
        <p className="text-[10px] text-neutral-800 mt-1">{block.text}</p>
      </div>
    );
  }

  if (block.type === "filters") {
    return (
      <div className="flex gap-2 overflow-hidden">
        {block.items.map((item) => (
          <button
            key={item}
            className="shrink-0 px-3 h-8 rounded-full bg-white border border-neutral-300 text-[10px] font-bold text-neutral-900"
          >
            {item}
          </button>
        ))}
      </div>
    );
  }

  if (block.type === "gameCarousel") {
    return (
      <section className="space-y-2">
        <p className="text-sm font-bold text-black">Mini-jeux disponibles</p>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {block.cards.map((card) => (
            <div
              key={card.title}
              className={`w-36 shrink-0 rounded-2xl border p-2 ${
                card.badge === "Grisé" ? "bg-neutral-200 border-neutral-300 opacity-70" : "bg-white border-neutral-300"
              }`}
            >
              <div className="h-20 rounded-xl bg-neutral-300 mb-2" />
              <div className="flex items-center justify-between gap-1">
                <p className="text-[11px] font-black text-neutral-950 truncate">{card.title}</p>
                <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-neutral-200 text-neutral-800 shrink-0">
                  {card.badge}
                </span>
              </div>
              <p className="text-[9px] text-neutral-600 mt-1 min-h-7">{card.meta}</p>
              <button className="mt-2 w-full h-8 rounded-lg border border-neutral-400 bg-white text-[10px] font-bold text-neutral-900">
                {card.action}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "summary") {
    return (
      <div className="rounded-xl bg-white border border-neutral-300 p-3 text-[11px] font-bold text-neutral-900">
        {block.text}
      </div>
    );
  }

  if (block.type === "orderedGames") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Ordre de passage</p>
        <div className="space-y-2">
          {block.games.map((game) => (
            <div key={game.order} className="flex items-center gap-2 rounded-xl bg-neutral-50 border border-neutral-200 p-2">
              <span className="w-7 h-7 rounded-full bg-neutral-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                {game.order}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-neutral-950">{game.title}</p>
                <p className="text-[9px] text-neutral-600">{game.meta}</p>
              </div>
              <span className="text-neutral-500 text-sm">↕</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "materialList") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Matériel à préparer</p>
        <div className="space-y-2">
          {block.items.map((item) => (
            <div key={item.title} className="flex items-start gap-2 rounded-xl bg-neutral-50 border border-neutral-200 p-2">
              <span className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center text-[10px] shrink-0 ${item.checked ? "bg-neutral-900 text-white border-neutral-900" : "bg-white border-neutral-400 text-transparent"}`}>
                ✓
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-neutral-950">{item.title}</p>
                <p className="text-[9px] text-neutral-600">{item.meta}</p>
                {item.note && (
                  <p className="text-[9px] text-neutral-800 mt-1 rounded-lg bg-neutral-200 px-2 py-1">
                    Note : {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "rewardList") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Lots prévus</p>
        <div className="space-y-2">
          {block.rewards.map((reward, index) => (
            <div key={`${reward.rank}-${reward.title}-${index}`} className="flex items-center gap-2 rounded-xl bg-neutral-50 border border-neutral-200 p-2">
              <span className="w-7 h-7 rounded-full bg-neutral-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                {reward.rank}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-neutral-950">{reward.title}</p>
                <p className="text-[9px] text-neutral-600">{reward.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "launchChecklist") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Contrôle avant lancement</p>
        <div className="space-y-2">
          {block.items.map((item) => (
            <div key={item.title} className="flex items-center gap-2 rounded-xl bg-neutral-50 border border-neutral-200 p-2">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-neutral-950">{item.title}</p>
                <p className="text-[9px] text-neutral-600">{item.meta}</p>
              </div>
              <span className="text-[8px] px-2 py-1 rounded-full bg-neutral-200 text-neutral-800 whitespace-nowrap">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "liveActions") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Actions soirée</p>
        <div className="grid grid-cols-2 gap-2">
          {block.actions.map((action) => (
            <button key={action} className="h-14 rounded-2xl bg-neutral-50 border border-neutral-300 text-[10px] font-bold px-2 text-neutral-900">
              {action}
            </button>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "gameRules") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">{block.title}</p>
        <div className="space-y-1">
          {block.lines.map((line) => (
            <p key={line} className="text-[10px] text-neutral-700">• {line}</p>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "scoreEntryAdvanced") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Saisie des scores</p>
        <div className="space-y-2">
          {block.players.map((player) => (
            <div key={player.name} className="rounded-xl bg-neutral-50 border border-neutral-200 p-2">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] font-bold text-neutral-950">{player.name}</p>
                  <p className="text-[9px] text-neutral-600">Statut : {player.status}</p>
                </div>
                <div className="rounded-lg bg-neutral-900 text-white px-2 py-1 text-[10px] font-bold">
                  Total {player.total}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1 mt-2">
                {player.scores.map((score, index) => (
                  <div key={index} className="h-8 rounded-lg bg-white border border-neutral-300 flex items-center justify-center text-[10px] font-bold text-neutral-800">
                    Essai {index + 1} : {score}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "rankingPreview") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">{block.title}</p>
        <div className="space-y-1">
          {block.rows.map((row) => (
            <p key={row} className="rounded-lg bg-neutral-50 border border-neutral-200 px-2 py-1.5 text-[10px] text-neutral-800">
              {row}
            </p>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "participantLiveList") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Présences</p>
        <div className="space-y-2">
          {block.players.map((player) => (
            <div key={player.name} className="flex items-center gap-2 rounded-xl bg-neutral-50 border border-neutral-200 p-2">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-neutral-950">{player.name}</p>
                <p className="text-[9px] text-neutral-600">{player.meta}</p>
              </div>
              <span className="text-[8px] px-2 py-1 rounded-full bg-neutral-200 text-neutral-800 whitespace-nowrap">
                {player.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "podium") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Classement final</p>
        <div className="space-y-2">
          {block.winners.map((winner) => (
            <div key={winner.rank} className="rounded-xl bg-neutral-50 border border-neutral-200 p-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-neutral-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {winner.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-neutral-950">{winner.name}</p>
                  <p className="text-[9px] text-neutral-600">{winner.points}</p>
                </div>
              </div>
              <p className="mt-2 text-[9px] text-neutral-800 rounded-lg bg-neutral-200 px-2 py-1">
                Lot : {winner.reward}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "statsGrid") {
    return (
      <section className="grid grid-cols-2 gap-2">
        {block.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white border border-neutral-300 p-3">
            <p className="text-[9px] text-neutral-600">{stat.label}</p>
            <p className="text-sm font-black text-neutral-950 mt-1">{stat.value}</p>
          </div>
        ))}
      </section>
    );
  }

  if (block.type === "choiceList") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">{block.title}</p>
        <div className="space-y-2">
          {block.choices.map((choice) => (
            <div key={choice.title} className={`rounded-xl border p-2 ${choice.selected ? "bg-neutral-900 text-white border-neutral-900" : "bg-neutral-50 border-neutral-200 text-neutral-950"}`}>
              <p className="text-[11px] font-bold">{choice.title}</p>
              <p className={`text-[9px] mt-1 ${choice.selected ? "text-neutral-200" : "text-neutral-600"}`}>{choice.meta}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "decisionActions") {
    return (
      <section className="rounded-2xl bg-white border border-neutral-300 p-3">
        <p className="text-sm font-bold mb-2 text-black">Décision</p>
        <div className="space-y-2">
          {block.actions.map((action, index) => (
            <button key={action} className={`w-full h-9 rounded-xl text-[11px] font-bold border ${index === 0 ? "bg-neutral-900 text-white border-neutral-900" : "bg-white text-neutral-900 border-neutral-400"}`}>
              {action}
            </button>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "comparePlayers") {
    return (
      <section className="grid grid-cols-2 gap-2">
        {block.players.map((player) => (
          <div key={player.name} className="rounded-2xl bg-white border border-neutral-300 p-3">
            <p className="text-sm font-black text-neutral-950">{player.name}</p>
            <div className="space-y-1 mt-2">
              {player.stats.map((stat) => (
                <p key={stat} className="rounded-lg bg-neutral-100 border border-neutral-200 px-2 py-1 text-[9px] text-neutral-800">
                  {stat}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  }

  return null;
}

function MiniCard({ title, meta, badge, action, faded }) {
  return (
    <div className={`rounded-xl border p-2 ${faded ? "bg-neutral-200 border-neutral-300 opacity-70" : "bg-neutral-50 border-neutral-300"}`}>
      <div className="flex justify-between gap-2">
        <div>
          <p className="text-[11px] font-bold text-neutral-950">{title}</p>
          <p className="text-[9px] text-neutral-600 mt-0.5">{meta}</p>
        </div>

        {badge && (
          <span className="h-5 px-2 rounded-full bg-neutral-200 text-[8px] flex items-center text-neutral-800 whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>

      {action && (
        <button className="mt-2 w-full h-8 rounded-lg border border-neutral-400 bg-white text-[10px] font-bold text-neutral-900">
          {action}
        </button>
      )}
    </div>
  );
}

function TVScreen({ screen }) {
  return (
    <div className="space-y-2 w-full">
      <div className="text-center space-y-1">
        <span className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-wide bg-violet-100 text-violet-900 border-violet-300">
          Écran public
        </span>
        <p className="text-[10px] uppercase tracking-wide text-neutral-700 font-bold">
          {screen.subtitle}
        </p>
        <h2 className="text-sm font-black text-black leading-tight">{screen.title}</h2>
      </div>

      <div className="w-full max-w-[760px] h-[430px] mx-auto rounded-3xl bg-neutral-950 border border-neutral-800 p-3 shadow-xl">
        <div className="h-full rounded-2xl bg-neutral-100 p-4 overflow-hidden">
          <div className="h-full grid grid-rows-[auto_auto_1fr_auto] gap-3">
            {screen.blocks.map((block, index) => (
              <TVBlock key={index} block={block} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TVBlock({ block }) {
  if (block.type === "tvHero") {
    return (
      <div>
        <p className="text-3xl font-black text-black leading-tight">{block.title}</p>
        <p className="text-base text-neutral-700 mt-1">{block.text}</p>
      </div>
    );
  }

  if (block.type === "tvStatus") {
    return (
      <div className="grid grid-cols-4 gap-2">
        {block.items.slice(0, 4).map((item) => (
          <div key={item} className="rounded-xl bg-white border border-neutral-300 p-2 text-[11px] font-bold text-neutral-800 text-center leading-tight">
            {item}
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "tvGameProgress") {
    return (
      <div className="rounded-2xl bg-white border border-neutral-300 p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-black text-neutral-950">Avancement des jeux</p>
          <p className="text-[11px] font-bold text-neutral-600">{block.done} faits · {block.total - block.done} restants</p>
        </div>

        <div className="grid grid-cols-6 gap-2">
          {block.games.slice(0, 6).map((game) => (
            <div
              key={game.name}
              className={`min-w-0 rounded-xl border p-1.5 text-center ${
                game.status === "done"
                  ? "bg-neutral-200 border-neutral-300 opacity-60"
                  : game.status === "current"
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : game.status === "next"
                  ? "bg-white border-neutral-900"
                  : "bg-white border-neutral-300"
              }`}
            >
              <div className={`mx-auto mb-1 h-6 w-6 rounded-lg ${game.status === "done" ? "bg-neutral-400" : game.status === "current" ? "bg-white" : "bg-neutral-300"}`} />
              <p className="truncate text-[9px] font-bold">{game.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "tvDoubleRanking") {
    return (
      <div className="grid grid-cols-2 gap-3 min-h-0 overflow-hidden">
        <div className="rounded-2xl bg-white border border-neutral-300 p-3 min-h-0 overflow-hidden">
          <p className="text-xs font-black mb-2 text-black">{block.generalTitle}</p>
          <div className="space-y-1.5">
            {block.generalRows.slice(0, 3).map((row) => (
              <p key={row} className="rounded-lg bg-neutral-100 border border-neutral-300 px-2 py-1.5 text-xs font-bold text-neutral-800 truncate">
                {row}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-neutral-300 p-3 min-h-0 overflow-hidden">
          <p className="text-xs font-black mb-2 text-black">{block.gameTitle}</p>
          <div className="space-y-1.5">
            {block.gameRows.slice(0, 3).map((row) => (
              <p key={row} className="rounded-lg bg-neutral-100 border border-neutral-300 px-2 py-1.5 text-xs font-bold text-neutral-800 truncate">
                {row}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (block.type === "tvRanking") {
    return (
      <div className="rounded-2xl bg-white border border-neutral-300 p-3 min-h-0 overflow-hidden">
        <p className="text-sm font-black mb-2 text-black">{block.title}</p>
        <div className="space-y-1.5">
          {block.rows.slice(0, 3).map((row) => (
            <p key={row} className="rounded-xl bg-neutral-100 border border-neutral-300 px-3 py-1.5 text-sm font-bold text-neutral-900 truncate">
              {row}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "tvCelebration") {
    return (
      <div className="rounded-2xl bg-neutral-900 text-white border border-neutral-900 p-3 text-center">
        <p className="text-2xl font-black leading-tight">{block.title}</p>
        <p className="text-sm text-neutral-200 mt-1">{block.text}</p>
      </div>
    );
  }

  return null;
}

export default function GameCircleWireframesCompact() {
  return (
    <div className="min-h-screen bg-neutral-200 p-5 text-neutral-950 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="rounded-3xl bg-white border border-neutral-300 p-4 shadow-sm">
          <p className="text-[11px] uppercase tracking-wide text-neutral-700 font-bold">
            GameCircle — Wireframes mobile-first · basse fidélité
          </p>
          <h1 className="text-2xl font-black mt-1 text-black">Parcours front — vues regroupées par usage</h1>
          <p className="text-sm text-neutral-700 mt-1 max-w-4xl">
            Les couleurs servent uniquement à se repérer : socle, préparation, soirée en cours, après-soirée, catalogue et administration. Elles ne représentent pas la charte graphique finale.
          </p>
        </header>

        <div className="flex flex-wrap gap-2 text-[11px] font-bold">
          <span className="rounded-full border border-amber-300 bg-amber-100 text-amber-900 px-3 py-1">Rôle : Organisateur</span>
          <span className="rounded-full border border-sky-300 bg-sky-100 text-sky-900 px-3 py-1">Rôle : Joueur / membre</span>
          <span className="rounded-full border border-neutral-300 bg-neutral-100 text-neutral-900 px-3 py-1">Rôle : Utilisateur</span>
          <span className="rounded-full border border-rose-300 bg-rose-100 text-rose-900 px-3 py-1">Rôle : Admin</span>
          <span className="rounded-full border border-slate-300 bg-slate-100 text-slate-900 px-3 py-1">Phase : Socle</span>
          <span className="rounded-full border border-amber-300 bg-amber-50 text-amber-900 px-3 py-1">Phase : Préparation édition</span>
          <span className="rounded-full border border-emerald-300 bg-emerald-50 text-emerald-900 px-3 py-1">Phase : Soirée en cours</span>
          <span className="rounded-full border border-sky-300 bg-sky-50 text-sky-900 px-3 py-1">Phase : Après-soirée / stats</span>
          <span className="rounded-full border border-purple-300 bg-purple-50 text-purple-900 px-3 py-1">Phase : Mini-jeux / catalogue</span>
          <span className="rounded-full border border-violet-300 bg-violet-100 text-violet-900 px-3 py-1">Écran public TV</span>
        </div>

        {PHASES.map((phase) => {
          const phasePages = pages.filter((page) => page.phase === phase.id);
          const phaseStyle = PHASE_STYLES[phase.id];

          if (phasePages.length === 0) return null;

          return (
            <section key={phase.id} className={`rounded-3xl border p-4 space-y-4 ${phaseStyle}`}>
              <div>
                <h2 className="text-lg font-black text-black">{phase.label}</h2>
                <p className="text-sm text-neutral-700">{phase.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center items-start">
                {phasePages.map((page) => <Phone key={page.title} page={page} />)}
              </div>
            </section>
          );
        })}

        <section className="rounded-3xl border p-4 space-y-5 bg-violet-50 border-violet-200">
          <div>
            <h2 className="text-lg font-black text-black">07 · Écran public TV</h2>
            <p className="text-sm text-neutral-700">Affichage grand écran séparé : attente, live et podium final.</p>
          </div>

          <div className="space-y-8">
            {tvScreens.map((screen) => <TVScreen key={screen.title} screen={screen} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
