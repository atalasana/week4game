const AXES_BY_LANG = {
  sr: [
      ["Suvo", "Mokro"],
  ["Vruce", "Hladno"],
  ["Dosadno", "Uzbudljivo"],
  ["Haos", "Red"],
  ["Mirno", "Haoticno"],
  ["Jeftino", "Luksuzno"],
  ["Neukusno", "Umetnicki"],
  ["Malo verovatno", "Sigurno"],
  ["Mekan", "Tvrd"],
  ["Praznik", "Radni dan"],
  ["Smesno", "Ozbiljno"],
  ["Brzo", "Sporo"],
  ["Neprakticno", "Prakticno"],
  ["Staromodno", "Moderno"],
  ["Slatko", "Slano"],
  ["Opasno", "Bezbedno"],
  ["Introvertno", "Ekstrovertno"],
  ["Domace", "Strano"],
  ["Spontano", "Planirano"],
  ["Impulsivno", "Promisljeno"],
  ["Rizicno", "Oprezno"],
  ["Iskreno", "Folirantski"],
  ["Minimalisticki", "Prenatrpano"],
  ["Lezerno", "Elegantno"],
  ["Jasno", "Zbunjujuce"],
  ["Direktno", "Uvijeno"],
  ["Kreativno", "Rutinsko"],
  ["Originalno", "Kopija"],
  ["Retro", "Futuristicki"],
  ["Prirodno", "Vestacko"],
  ["Lokalno", "Globalno"],
  ["Dnevno", "Nocno"],
  ["Aktivno", "Pasivno"],
  ["Zdravo", "Nezdravo"],
  ["Blago", "Ljuto"],
  ["Kiselo", "Slatko"],
  ["Domaca kuhinja", "Fast food"],
  ["Planina", "More"],
  ["Grad", "Selo"],
  ["Online", "Uzivo"],
  ["Timski", "Individualno"],
  ["Razumno", "Emotivno"],
  ["Optimisticno", "Pesimisticno"],
  ["Knjiga", "Film"],
  ["Film", "Serija"],
  ["Akcija", "Drama"],
  ["Komedija", "Tragedija"],
  ["Mainstream", "Underground"],
  ["Normalno", "Bizarno"],
  ["Simpaticno", "Iritantno"],
  ["Sreca", "Vestina"],
  ["Lako", "Tesko"],
  ["Dobar", "Los"],
  ["Jako zarazno", "Blago zarazno"],
  ["Sareno", "Bezbojno"],
  ["Visokokaloricno", "Niskokaloricno"],
  ["Prija", "Ne prija"],
  ["Esencijalno", "Neesencijalno"],
  ["Precenjeno oruzje", "Potcenjeno oruzje"],
  ["Cesto", "Retko"],
  ["Tezak predmet", "Lak predmet"],
  ["Poznato", "Nepoznato"],
  ["Lako za koriscenje", "Tesko za koriscenje"],
  ["Cisto", "Prljavo"],
  ["Trazi vestinu", "Trazi srecu"],
  ["Pun ukusa", "Bez ukusa"],
  ["Fascinantna tema", "Dosadna tema"],
  ["Dobar glumac", "Los glumac"],
  ["Hipsterski", "Bazican"],
  ["Bezbedan posao", "Opasan posao"],
  ["Naucna fantastika", "Fantazija"],
  ["Preplacen", "Nedovoljno placen"],
  ["Precenjena vestina", "Potcenjena vestina"],
  ["Pozeljno", "Zabranjeno"],
  ["Vesela pesma", "Tuzna pesma"],
  ["Izdrzljivo", "Krhko"],
  ["Dobra navika", "Losa navika"],
  ["Ljubitelj pasa", "Ljubitelj macaka"],
  ["Otvoreno volis", "Tajno zadovoljstvo"],
  ["Talentovan", "Netalentovan"],
  ["Svetlo", "Tamno"],
  ["Precenjen glumac", "Potcenjen glumac"],
  ["Lako se nalazi", "Tesko se nalazi"],
  ["Lako za pamcenje", "Tesko za pamcenje"],
  ["Visoka kultura", "Niska kultura"],
  ["Istorijski nebitno", "Istorijski vazno"],
  ["Dlakavo", "Bez dlaka"],
  ["Fleksibilno", "Nefleksibilno"],
  ["Egzotican ljubimac", "Uobicajen ljubimac"],
  ["Dobar film", "Los film"],
  ["Desava se naglo", "Desava se sporo"],
  ["Dobar prilog za picu", "Los prilog za picu"],
  ["Utopija", "Distopija"],
  ["Nezrela osoba", "Zrela osoba"],
  ["Dobra osoba", "Zla osoba"],
  ["Seksi", "Neseksi"],
  ["Uverljivo", "Neuverljivo"],
  ["Otmjeno", "Kicasto"],
  ["Trajno", "Privremeno"],
  ["Ukusno", "Neukusno"],
  ["Igra", "Sport"],
  ["Kul", "Nekul"],
  ["Eticki", "Neeticki"],
  ["Dobar poklon", "Los poklon"],
  ["Moderno", "Nemoderno"],
  ["Stetno", "Bezopasno"],
  ["Higijenski", "Nehigijenski"],
  ["Dobra muzika", "Losa muzika"],
  ["Vrlina", "Porok"],
  ["Pouzdano", "Nepouzdano"],
  ["Stabilno", "Nestabilno"],
  ["Dobra serija", "Losa serija"],
  ["Klasik", "Pomodarstvo"],
  ["Briljantno", "Glupo"],
  ["Koristan izum", "Beskoristan izum"],
  ["Heroj", "Zlikovac"],
  ["Za odrasle", "Za decu"],
  ["Tesko za uraditi", "Lako za uraditi"],
  ["Demokratija", "Diktatura"],
  ["Cudan pozdrav", "Normalan pozdrav"],
  ["Formalan dogadjaj", "Lezerni dogadjaj"],
  ["Dobra investicija", "Losa investicija"],
  ["Teska tema", "Caskanje"],
  ["Javno poznato", "Tajna"],
  ["Preveliko", "Premalo"],
  ["Najbolja godina u istoriji", "Najgora godina u istoriji"],
  ["Opste poznata cinjenica", "Slabo poznata cinjenica"],
  ["Globalni problem", "Lokalni problem"],
  ["Netacno", "Tacno"],
  ["Lazna osoba", "Iskrena osoba"],
  ["Koristi svima", "Koristi tebi"],
  ["Pseudonauka", "Nauka"],
  ["Vesti", "Tracevi"],
  ["Previse", "Nedovoljno"],
  ["Vertikalno", "Horizontalno"],
  ["Mirisljavo", "Bez mirisa"],
  ["Ekskluzivno", "Inkluzivno"],
  ["Dobar savet", "Los savet"],
  ["Dobar slatkis", "Los slatkis"],
  ["Radikalno", "Tradicionalno"],
  ["Legalno", "Ilegalno"],
  ["Povrsna misao", "Duboka misao"],
  ["Dobra skola", "Losa skola"],
  ["Uvek na vreme", "Nikad na vreme"],
  ["Dobar predsednik", "Los predsednik"],
  ["Zabavna osoba", "Dosadna osoba"],
  ["Precenjena knjiga", "Potcenjena knjiga"],
  ["Najbolji kucni posao", "Najgori kucni posao"],
  ["Prenamnozena vrsta", "Ugrozena vrsta"],
  ["Zastrasujuce", "Uzbudjujuce"],
  ["Neocekivano", "Ocekivano"],
  ["Precenjena igra", "Potcenjena igra"],
  ["Sportista", "Nerd"]
  ],
  en: [
        ["Wet", "Dry"],
    ["Hot", "Cold"],
    ["Boring", "Exciting"],
    ["Chaos", "Order"],
    ["Calm", "Chaotic"],
    ["Cheap", "Luxurious"],
    ["Tacky", "Artistic"],
    ["Unlikely", "Certain"],
    ["Soft", "Hard"],
    ["Holiday", "Workday"],
    ["Funny", "Serious"],
    ["Fast", "Slow"],
    ["Impractical", "Practical"],
    ["Old-fashioned", "Modern"],
    ["Sweet", "Salty"],
    ["Dangerous", "Safe"],
    ["Introverted", "Extroverted"],
    ["Domestic", "Foreign"],
    ["Spontaneous", "Planned"],
    ["Impulsive", "Thoughtful"],
    ["Risky", "Cautious"],
    ["Honest", "Fake"],
    ["Minimalist", "Overloaded"],
    ["Casual", "Elegant"],
    ["Clear", "Confusing"],
    ["Direct", "Indirect"],
    ["Creative", "Routine"],
    ["Original", "Copy"],
    ["Retro", "Futuristic"],
    ["Natural", "Artificial"],
    ["Local", "Global"],
    ["Daytime", "Nighttime"],
    ["Active", "Passive"],
    ["Healthy", "Unhealthy"],
    ["Mild", "Spicy"],
    ["Sour", "Sweet"],
    ["Home Cooking", "Fast Food"],
    ["Mountain", "Sea"],
    ["City", "Village"],
    ["Online", "In-person"],
    ["Team-based", "Individual"],
    ["Rational", "Emotional"],
    ["Optimistic", "Pessimistic"],
    ["Book", "Movie"],
    ["Movie", "Series"],
    ["Action", "Drama"],
    ["Comedy", "Tragedy"],
    ["Mainstream", "Underground"],
    ["Normal", "Bizarre"],
    ["Likeable", "Annoying"],
    ["Luck", "Skill"],
    ["Easy", "Hard"],
    ["Good", "Bad"],
    ["Highly addictive", "Mildly addictive"],
    ["Colorful", "Colorless"],
    ["High calorie", "Low calorie"],
    ["Feels good", "Feels bad"],
    ["Essential", "Inessential"],
    ["Overrated weapon", "Underrated weapon"],
    ["Common", "Rare"],
    ["Hard subject", "Easy subject"],
    ["Famous", "Unknown"],
    ["Easy to use", "Difficult to use"],
    ["Clean", "Dirty"],
    ["Requires skill", "Requires luck"],
    ["Flavorful", "Flavorless"],
    ["Fascinating topic", "Boring topic"],
    ["Good actor", "Bad actor"],
    ["Hipster", "Basic"],
    ["Safe job", "Dangerous job"],
    ["Sci-Fi", "Fantasy"],
    ["Overpaid", "Underpaid"],
    ["Overrated skill", "Underrated skill"],
    ["Encouraged", "Forbidden"],
    ["Happy song", "Sad song"],
    ["Durable", "Fragile"],
    ["Good habit", "Bad habit"],
    ["Dog person", "Cat person"],
    ["Openly love", "Guilty pleasure"],
    ["Talented", "Untalented"],
    ["Light", "Dark"],
    ["Overrated actor", "Underrated actor"],
    ["Easy to find", "Hard to find"],
    ["Easy to remember", "Hard to remember"],
    ["Highbrow", "Lowbrow"],
    ["Historically irrelevant", "Historically important"],
    ["Hairy", "Hairless"],
    ["Flexible", "Inflexible"],
    ["Exotic pet", "Normal pet"],
    ["Good movie", "Bad movie"],
    ["Happens suddenly", "Happens slowly"],
    ["Good pizza topping", "Bad pizza topping"],
    ["Utopia", "Dystopia"],
    ["Immature person", "Mature person"],
    ["Nice person", "Mean person"],
    ["Sexy", "Unsexy"],
    ["Believable", "Unbelievable"],
    ["Classy", "Trashy"],
    ["Permanent", "Temporary"],
    ["Tastes good", "Tastes bad"],
    ["Game", "Sport"],
    ["Cool", "Uncool"],
    ["Ethical", "Unethical"],
    ["Good gift", "Bad gift"],
    ["Fashionable", "Unfashionable"],
    ["Harmful", "Harmless"],
    ["Hygienic", "Unhygienic"],
    ["Good music", "Bad music"],
    ["Virtue", "Vice"],
    ["Reliable", "Unreliable"],
    ["Stable", "Unstable"],
    ["Good TV show", "Bad TV show"],
    ["Classic", "Fad"],
    ["Brilliant", "Stupid"],
    ["Useful invention", "Useless invention"],
    ["Hero", "Villain"],
    ["For adults", "For kids"],
    ["Hard to do", "Easy to do"],
    ["Democracy", "Dictatorship"],
    ["Weird greeting", "Normal greeting"],
    ["Formal event", "Casual event"],
    ["Good investment", "Bad investment"],
    ["Heavy topic", "Small talk"],
    ["Public knowledge", "Secret"],
    ["Too big", "Too small"],
    ["Best year in history", "Worst year in history"],
    ["Well known fact", "Little known fact"],
    ["Global issue", "Local issue"],
    ["False", "True"],
    ["Phony person", "Genuine person"],
    ["Benefits everyone", "Benefits you"],
    ["Pseudoscience", "Science"],
    ["News", "Gossip"],
    ["Too much", "Not enough"],
    ["Vertical", "Horizontal"],
    ["Scented", "Unscented"],
    ["Exclusive", "Inclusive"],
    ["Good advice", "Bad advice"],
    ["Good candy", "Bad candy"],
    ["Radical", "Traditional"],
    ["Legal", "Illegal"],
    ["Shallow thought", "Deep thought"],
    ["Good school", "Bad school"],
    ["Always on time", "Never on time"],
    ["Good president", "Bad president"],
    ["Fun person", "Boring person"],
    ["Overrated book", "Underrated book"],
    ["Best chore", "Worst chore"],
    ["Overpopulated species", "Endangered species"],
    ["Terrifying", "Thrilling"],
    ["Unexpected", "Expected"],
    ["Overrated game", "Underrated game"],
    ["Jock", "Nerd"]
  ]
};

const PHASE_TEXT = {
  sr: {
    guessing: "Faza: Pogadjanje",
    locked: "Faza: Zakljucano",
    revealed: "Faza: Rezultat"
  },
  en: {
    guessing: "Phase: Guessing",
    locked: "Phase: Locked",
    revealed: "Phase: Result"
  }
};

const DEFAULT_TEAM_NAMES = {
  sr: ["Ljubicast tim", "Narandzasti tim"],
  en: ["Purple Team", "Orange Team"]
};

const SOLO_TEAM_NAME = {
  sr: "Tim",
  en: "Team"
};

const TEAM_COLOR_PALETTES = {
  0: ["#8b6f9e", "#5c7d9a", "#6b9b86", "#c17f4a", "#b85c5c"],
  1: ["#c9783d", "#9a6b4f", "#7a8eb8", "#8f7a5c", "#6b8a7d"]
};

const UI_TEXT = {
  sr: {
    kicker: "DRUSTVENA IGRA",
    newGame: "Nova partija",
    roundLabel: "Runda",
    activeTeamPrefix: "Na potezu:",
    goalLabel: "Cilj za pobedu:",
    axisTitle: "Skala za ovu rundu",
    startKicker: "DOBRODOSLI",
    startTitle: "Izaberi rezim igre",
    startSubtitle:
      "Odaberi rezim: jedan tim (sa AI tragom) ili mec dva tima.",
    startSingle: "Igra jednog tima",
    startTwo: "Igra dva tima",
    startRulesBtn: "Pravila igre",
    startRulesTitle: "Kako se igra",
    startRulesText:
      "Cilj: timski priblizite kazaljku sredini skrivene mete.\n\nTok runde:\n1) Pojavi se skala sa dva suprotna pojma.\n2) Osoba koja zna metu daje trag na toj skali (npr. izmedju Vruce i Hladno moze da kaze Kafa).\n3) Ostali diskutujete i pomerate kazaljku vucenjem.\n4) Klik na Pogodi otkriva zonu i rezultat.\n\nBodovanje:\n4 poena: centar mete\n3 poena: blizu centra\n2 poena: siri pogodak\n0 poena: promasaj\n\nNastavak: Sledeca runda za nastavak ili Nova partija za reset.",
    controlNote: "Kazaljku pomeras direktno: povuci je misem ili prstom.",
    peekBtn: "Prikazi tajnu osobi koja zadaje rec",
    guessBtn: "Pogodi",
    resultTitle: "Rezultat runde",
    nextRound: "Sledeca runda",
    secretOverlay: "Tajna zona je prikazana samo osobi koja zadaje rec.",
    roundResultIdle: "Pomeri kazaljku i pritisni Pogodi za resenje i rezultat.",
    roundResultPoints: (points) => `Osvojeno: ${points} poena.`,
    roundResultWinner: (teamName) => `Pobeda: ${teamName}! Pokreni novu partiju za nastavak.`,
    botHintPrefix: "AI hint:",
    botHintLoading: "AI smislja hint...",
    hintErrorIntro: "Greška:",
    hintErrorConfigMissing: "API adresa nije podešena (HINT_API_BASE u .env ili na hostingu).",
    hintErrorNeedServer: "Otvori stranicu preko servera (npr. npm start), ne kao lokalni fajl (file://).",
    hintErrorEmptyResponse: "Prazan odgovor od modela.",
    hintErrorRateLimit: "429 — prekoracen limit zahteva ka API-ju.",
    phaseGuessHint: "Osoba koja zadaje rec daje trag. Ostatak tima okrece kazaljku.",
    phaseRevealedHint: "Zona je otkrivena. Poeni su obracunati za ovu rundu.",
    perfectShot: "Savrsen pogodak!",
    greatShot: "Sjajan pogodak!",
    modalTeam1Title: "Promeni naziv Tima 1",
    modalTeam2Title: "Promeni naziv Tima 2",
    modalNamePlaceholder: "Naziv tima",
    modalTeamColor: "Boja tima",
    modalSave: "Sacuvaj",
    modalCancel: "Otkazi",
    muteOnLabel: "Iskljuci zvuk",
    muteOffLabel: "Ukljuci zvuk",
    muteOnTitle: "Zvuk ukljucen",
    muteOffTitle: "Zvuk iskljucen",
    themeDarkLabel: "Prebaci na dark temu",
    themeLightLabel: "Prebaci na light temu",
    themeDarkTitle: "Dark tema",
    themeLightTitle: "Light tema",
    langToggleLabel: "Prebaci na engleski jezik",
    langToggleTitle: "Srpski",
    langToggleButton: "EN",
    editTeam1Aria: "Promeni naziv tima 1",
    editTeam2Aria: "Promeni naziv tima 2"
  },
  en: {
    kicker: "PARTY GAME",
    newGame: "New Game",
    roundLabel: "Round",
    activeTeamPrefix: "Active team:",
    goalLabel: "Goal to win:",
    axisTitle: "Scale for this round",
    startKicker: "WELCOME",
    startTitle: "Choose game mode",
    startSubtitle: "Pick one team (with an AI hint) or a two-team match.",
    startSingle: "1 Team Game",
    startTwo: "2 Teams Game",
    startRulesBtn: "Game rules",
    startRulesTitle: "How to play",
    startRulesText: "Goal: move the dial as close as possible to the center of a hidden target.\n\nRound flow:\n1) You get a spectrum with two opposite concepts.\n2) The clue giver knows the target and gives one clue on that spectrum.\n3) Teammates discuss while the clue giver stays quiet.\n4) Drag the needle to your final guess and press Guess to reveal.\n\nScoring:\n4 points: bull's eye\n3 points: close\n2 points: near\n0 points: miss\n\nContinue with Next round, or reset with New game.",
    controlNote: "Move the needle directly: drag it with mouse or finger.",
    peekBtn: "Show secret to clue giver",
    guessBtn: "Guess",
    resultTitle: "Round result",
    nextRound: "Next round",
    secretOverlay: "The secret zone is visible only to the clue giver.",
    roundResultIdle: "Move the needle and press Guess to reveal the answer and score.",
    roundResultPoints: (points) => `Scored: ${points} points.`,
    roundResultWinner: (teamName) => `Winner: ${teamName}! Start a new game to continue.`,
    botHintPrefix: "AI hint:",
    botHintLoading: "AI is preparing a hint...",
    hintErrorIntro: "Error:",
    hintErrorConfigMissing: "API base URL is not set (HINT_API_BASE in .env or hosting env).",
    hintErrorNeedServer: "Open the site via the server (e.g. npm start), not as a local file (file://).",
    hintErrorEmptyResponse: "Empty response from the model.",
    hintErrorRateLimit: "429 — API rate limit exceeded.",
    phaseGuessHint: "The clue giver gives a hint. The rest of the team moves the needle.",
    phaseRevealedHint: "Zone revealed. Points were calculated for this round.",
    perfectShot: "Perfect hit!",
    greatShot: "Great hit!",
    modalTeam1Title: "Rename Team 1",
    modalTeam2Title: "Rename Team 2",
    modalNamePlaceholder: "Team name",
    modalTeamColor: "Team color",
    modalSave: "Save",
    modalCancel: "Cancel",
    muteOnLabel: "Mute sound",
    muteOffLabel: "Unmute sound",
    muteOnTitle: "Sound on",
    muteOffTitle: "Sound off",
    themeDarkLabel: "Switch to dark theme",
    themeLightLabel: "Switch to light theme",
    themeDarkTitle: "Dark theme",
    themeLightTitle: "Light theme",
    langToggleLabel: "Switch to Serbian language",
    langToggleTitle: "English",
    langToggleButton: "SRB",
    editTeam1Aria: "Change team 1 name",
    editTeam2Aria: "Change team 2 name"
  }
};
const VIEWBOX_CENTER = { x: 210, y: 230 };
const MIN_ANGLE = -90;
const MAX_ANGLE = 90;
const ANGLE_SPAN = MAX_ANGLE - MIN_ANGLE;
const CENTER_BAND_HALF_WIDTH = 4;
const OUTER_BAND_HALF_WIDTH = 20;
const CORE_TARGET_MIN = MIN_ANGLE + OUTER_BAND_HALF_WIDTH;
const CORE_TARGET_MAX = MAX_ANGLE - OUTER_BAND_HALF_WIDTH;
const EDGE_WRAP_CENTERS = [
  MIN_ANGLE + CENTER_BAND_HALF_WIDTH,
  MIN_ANGLE + 12,
  MAX_ANGLE - 12,
  MAX_ANGLE - CENTER_BAND_HALF_WIDTH
];
const STORAGE_KEYS = {
  theme: "wavelengthTheme",
  language: "wavelengthLanguage"
};
const ENABLE_LOCAL_PERSISTENCE = false;

/** Filled from GET /api/config over http(s). Base URL must be set only via server env (`HINT_API_BASE`). */
let hintRuntime = {
  hintApiBase: "",
  hintModel: "deepseek-r1",
  hintApiKey: "dummy"
};

function getHintChatUrl() {
  const b = String(hintRuntime.hintApiBase || "").trim().replace(/\/$/, "");
  if (!b) return "";
  return `${b}/chat/completions`;
}

let hintConfigLoadError = "";

async function hydrateHintConfig() {
  hintConfigLoadError = "";
  try {
    const { protocol, origin } = window.location;
    if (protocol !== "http:" && protocol !== "https:") return;
    const response = await fetch(`${origin}/api/config`, { credentials: "same-origin" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      hintConfigLoadError =
        extractApiErrorDetail(data) || response.statusText || String(response.status);
      return;
    }
    if (!data || typeof data !== "object") return;
    if (typeof data.hintApiBase === "string" && data.hintApiBase.trim()) {
      hintRuntime.hintApiBase = data.hintApiBase.trim().replace(/\/$/, "");
    }
    if (typeof data.hintModel === "string" && data.hintModel.trim()) {
      hintRuntime.hintModel = data.hintModel.trim();
    }
    if (typeof data.hintApiKey === "string") {
      hintRuntime.hintApiKey = data.hintApiKey;
    }
  } catch (err) {
    hintConfigLoadError = err instanceof Error ? err.message : String(err);
  }
}

const state = {
  scores: [0, 0],
  gameMode: null,
  language: "sr",
  teamNames: [...DEFAULT_TEAM_NAMES.sr],
  teamColors: ["#8b6f9e", "#c9783d"],
  activeTeam: 0,
  round: 1,
  goal: 10,
  axisIndex: 0,
  axis: AXES_BY_LANG.sr[0],
  editingTeamIndex: null,
  modalTeamColor: null,
  targetCenter: 0,
  guess: 0,
  lastPoints: 0,
  locked: false,
  revealed: false,
  winner: null,
  botHint: "",
  hintRequestId: 0,
  dragging: false,
  audioUnlocked: false,
  botHintHadError: false
};

const el = {
  startGate: document.getElementById("startGate"),
  startKicker: document.getElementById("startKicker"),
  startTitle: document.getElementById("startTitle"),
  startSubtitle: document.getElementById("startSubtitle"),
  startSingleBtn: document.getElementById("startSingleBtn"),
  startTwoBtn: document.getElementById("startTwoBtn"),
  startRulesBtn: document.getElementById("startRulesBtn"),
  startRulesBox: document.getElementById("startRulesBox"),
  startRulesTitle: document.getElementById("startRulesTitle"),
  startRulesText: document.getElementById("startRulesText"),
  kickerLabel: document.getElementById("kickerLabel"),
  team0NameLabel: document.getElementById("team0NameLabel"),
  team1NameLabel: document.getElementById("team1NameLabel"),
  editTeam0Btn: document.getElementById("editTeam0Btn"),
  editTeam1Btn: document.getElementById("editTeam1Btn"),
  team0Score: document.getElementById("team0Score"),
  team1Score: document.getElementById("team1Score"),
  team0Card: document.getElementById("team0Card"),
  team1Card: document.getElementById("team1Card"),
  scoreboard: document.querySelector(".scoreboard"),
  roundLabel: document.getElementById("roundLabel"),
  roundNum: document.getElementById("roundNum"),
  activeTeamPrefix: document.getElementById("activeTeamPrefix"),
  activeTeamLabel: document.getElementById("activeTeamLabel"),
  goalLabel: document.getElementById("goalLabel"),
  goalScore: document.getElementById("goalScore"),
  axisTitle: document.getElementById("axisTitle"),
  axisLeft: document.getElementById("axisLeft"),
  axisRight: document.getElementById("axisRight"),
  phaseHint: document.getElementById("phaseHint"),
  botHint: document.getElementById("botHint"),
  phaseBadge: document.getElementById("phaseBadge"),
  controlNote: document.getElementById("controlNote"),
  guessBtn: document.getElementById("guessBtn"),
  peekBtn: document.getElementById("peekBtn"),
  roundResultTitle: document.getElementById("roundResultTitle"),
  nextRoundBtn: document.getElementById("nextRoundBtn"),
  newGameBtn: document.getElementById("newGameBtn"),
  langBtn: document.getElementById("langBtn"),
  themeBtn: document.getElementById("themeBtn"),
  roundResult: document.getElementById("roundResult"),
  logPanel: document.querySelector(".log-panel"),
  secretBands: document.getElementById("secretBands"),
  needle: document.getElementById("needle"),
  needleGrab: document.getElementById("needleGrab"),
  baseArcs: document.getElementById("baseArcs"),
  dialSvg: document.getElementById("dialSvg"),
  dialShell: document.querySelector(".dial-shell"),
  directionZones: document.querySelectorAll(".zone"),
  secretOverlay: document.getElementById("secretOverlay"),
  secretOverlayText: document.getElementById("secretOverlayText"),
  teamNameModal: document.getElementById("teamNameModal"),
  teamModalTitle: document.getElementById("teamModalTitle"),
  teamNameInput: document.getElementById("teamNameInput"),
  teamColorLabel: document.getElementById("teamColorLabel"),
  teamColorOptions: document.getElementById("teamColorOptions"),
  teamModalCancelBtn: document.getElementById("teamModalCancelBtn"),
  teamModalSaveBtn: document.getElementById("teamModalSaveBtn")
};

let audioContext = null;
let masterGain = null;
let lastTickAt = 0;

function initQuestionBackground() {
  const host = document.getElementById("bgQuestions");
  if (!host) return;

  const chipsCount = 52;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < chipsCount; i += 1) {
    const chip = document.createElement("span");
    chip.className = "question-chip";
    chip.textContent = "\u25C6";

    const size = rand(30, 56);
    const left = rand(0, 98);
    const delay = -rand(0, 140) / 10;
    const duration = rand(95, 155) / 10;

    chip.style.setProperty("--chip-size", `${size}px`);
    chip.style.setProperty("--chip-left", `${left}%`);
    chip.style.setProperty("--chip-delay", `${delay}s`);
    chip.style.setProperty("--chip-duration", `${duration}s`);

    fragment.appendChild(chip);
  }

  host.replaceChildren(fragment);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  if (value.length !== 6) return `rgba(201, 162, 39, ${alpha})`;
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getText(lang = state.language) {
  return UI_TEXT[lang] || UI_TEXT.sr;
}

function phaseText(phase) {
  return (PHASE_TEXT[state.language] || PHASE_TEXT.sr)[phase];
}

function axisList(lang = state.language) {
  return AXES_BY_LANG[lang] || AXES_BY_LANG.sr;
}

function updateRoundResultText() {
  const t = getText();
  if (state.winner !== null) {
    el.roundResult.textContent = t.roundResultWinner(state.teamNames[state.winner]);
    return;
  }

  if (state.revealed) {
    el.roundResult.textContent = t.roundResultPoints(state.lastPoints);
    return;
  }
  el.roundResult.textContent = t.roundResultIdle;
}

function updateNextRoundButtonText() {
  const t = getText();
  el.nextRoundBtn.textContent = state.winner !== null ? t.newGame : t.nextRound;
}

function updatePhaseText() {
  const t = getText();
  if (state.revealed) {
    el.phaseBadge.textContent = phaseText("revealed");
    el.phaseHint.textContent = t.phaseRevealedHint;
    return;
  }

  el.phaseBadge.textContent = phaseText("guessing");
  el.phaseHint.textContent = t.phaseGuessHint;
}

function updateBotHintView() {
  if (!el.botHint) return;
  const isSinglePlayer = state.gameMode === 1;
  el.botHint.classList.toggle("hidden", !isSinglePlayer);
  el.botHint.classList.toggle("bot-hint--error", Boolean(isSinglePlayer && state.botHintHadError));
  if (!isSinglePlayer) {
    el.botHint.textContent = "";
    return;
  }

  el.botHint.textContent = state.botHint;
}

function extractApiErrorDetail(data) {
  if (!data || typeof data !== "object") return "";
  if (typeof data.detail === "string") return data.detail.trim();
  if (Array.isArray(data.detail) && data.detail.length > 0) {
    const first = data.detail[0];
    if (typeof first === "string") return first.trim();
    if (first && typeof first.msg === "string") return first.msg.trim();
  }
  if (data.error) {
    const e = data.error;
    if (typeof e === "string") return e.trim();
    if (typeof e.message === "string") return e.message.trim();
  }
  if (typeof data.message === "string") return data.message.trim();
  return "";
}

function formatBotHintError(t, detail, httpStatus) {
  let d = String(detail || "").trim();
  if (!d) d = state.language === "en" ? "Unknown error." : "Nepoznata greška.";
  const maxLen = 420;
  if (d.length > maxLen) d = `${d.slice(0, maxLen - 1)}…`;
  const statusPart =
    typeof httpStatus === "number" && httpStatus > 0 ? ` (HTTP ${httpStatus})` : "";
  return `${t.botHintPrefix} ${t.hintErrorIntro} ${d}${statusPart}`;
}

function hintPositionPercentFromAngle(angleDeg) {
  return Math.round(((Number(angleDeg) + 90) / 180) * 100);
}

function buildHintChatMessages(axisLeft, axisRight, positionPct, language) {
  const langLabel = language === "en" ? "English" : "Serbian";
  const system = [
    `You are the clue giver ("psychic") in the party game Wavelength.`,
    `The team only sees the two opposite poles of a spectrum. You know a secret target position from 0 (fully left pole) to 100 (fully right pole).`,
    ``,
    `OUTPUT: exactly ONE clue in ${langLabel}, 1–3 words only. No punctuation except what is inside a proper name. No quotes. No labels like "Clue:". Single line.`,
    ``,
    `CLUE QUALITY (critical):`,
    `- Must be ONE concrete anchor: a real or well-known person, brand, object, place, movie/book title, event, or clear trope — something players can argue about WHERE it sits on the spectrum.`,
    `- Do NOT output vague hedges or probability fluff (e.g. English: "maybe", "somehow", "probably", "sort of"; Serbian: "nekako", "možda", "verovatno", "valjda", "dosta", "prilike", "uglavnom").`,
    `- Do NOT output generic filler sentences or abstract process phrases (bad Serbian example to NEVER imitate: "Nekako će se desiti").`,
    `- If the poles are about likelihood / certainty / confidence, do not use extra probability adverbs — encode the position with a concrete situation or thing whose frequency or strength players understand.`,
    `- Match strength to target: near 0 → strongly aligned with the LEFT pole concept; near 100 → strongly with the RIGHT; mid → a balanced or famously "in-between" example.`,
    ``,
    `FORBIDDEN in the clue:`,
    `- The exact left/right pole strings you were given, their inflections, obvious synonyms, or shared roots.`,
    `- Numbers, percentages, ordinals, or words "left", "right", "center", "middle", "halfway" (and Serbian equivalents).`,
    `- Conjunctions that glue two unrelated ideas ("and", "but" / "i", "ali"). One image only.`,
    ``,
    `Never write explanations, planning, contradictions, or sentences about the task.`,
    `Output must be ONLY the clue words — zero other characters before or after.`
  ].join("\n");

  const user = [
    `LEFT pole (0%): "${axisLeft}"`,
    `RIGHT pole (100%): "${axisRight}"`,
    `Secret target: ${positionPct} (0=left pole, 100=right pole).`,
    `Write the clue in ${langLabel} now.`
  ].join("\n");

  return [
    { role: "system", content: system },
    { role: "user", content: user }
  ];
}

function hintMaxTokensForModel(modelId) {
  const id = String(modelId || "").toLowerCase();
  if (id.includes("r1") || id.includes("reasoner")) return 400;
  return 48;
}

function stripThinkingWrappersFromModelText(text) {
  let s = String(text || "").trim();
  if (!s) return "";
  const closeThink = ["<", "/", "think", ">"].join("");
  const idxThink = s.lastIndexOf(closeThink);
  if (idxThink !== -1) {
    s = s.slice(idxThink + closeThink.length).trim();
  }
  const closeRedacted = ["<", "/", "redacted_thinking", ">"].join("");
  const idxRed = s.lastIndexOf(closeRedacted);
  if (idxRed !== -1) {
    s = s.slice(idxRed + closeRedacted.length).trim();
  }
  return s;
}

function lineLooksLikeInternalMonologue(line) {
  const t = String(line || "").trim();
  if (!t) return true;
  const lower = t.toLowerCase();
  if (t.length > 90) return true;
  const wordCount = t.split(/\s+/).filter(Boolean).length;
  if (wordCount > 10) return true;
  if (/^(okay|ok[, ]|alright|so[, ]|well[, ]|hmm+|umm+|let'?s |let us |we need |i need |i'?ll |i will |first[, ]|wait[, ]|the target|the secret|here'?s |note:?|answer:?)/i.test(t)) {
    return true;
  }
  if (
    /\b(which is very|i think |we should |in order to |that means |tackle this|left pole|right pole)\b/i.test(
      lower
    )
  ) {
    return true;
  }
  if (/\b(the|a) (left|right) (pole|side)\b/i.test(lower)) return true;
  return false;
}

function hintCandidateChunksFromBody(body) {
  const raw = String(body || "")
    .replace(/\r/g, "")
    .trim();
  if (!raw) return [];
  let chunks = raw
    .split(/\n+/)
    .map((c) => c.trim())
    .filter(Boolean);
  if (chunks.length === 1 && chunks[0].length > 110) {
    const bySentence = chunks[0]
      .split(/\.\s+/)
      .map((c) => c.trim())
      .filter(Boolean)
      .map((c) => (/[.!?]$/.test(c) ? c : `${c}.`));
    if (bySentence.length > 1) chunks = bySentence;
  }
  return chunks;
}

function lastNonMonologueWordTail(text, maxWords) {
  const words = String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!words.length) return "";
  const badSingle = new Set([
    "that",
    "this",
    "it",
    "a",
    "an",
    "the",
    "is",
    "at",
    "to",
    "or",
    "so",
    "if",
    "of",
    "on",
    "in",
    "as",
    "be",
    "and",
    "but"
  ]);
  const hi = Math.min(maxWords, words.length);
  for (let n = hi; n >= 1; n -= 1) {
    const tail = words.slice(-n).join(" ");
    if (n === 1 && badSingle.has(tail.toLowerCase())) continue;
    if (lineLooksLikeInternalMonologue(tail)) continue;
    if (tail.split(/\s+/).filter(Boolean).length > 12) continue;
    if (/\b(i need|we need|let's |going to |tackle this)\b/i.test(tail)) continue;
    if (/\b(that|which|what)\s*$/i.test(tail)) continue;
    return tail;
  }
  return "";
}

function pickShortClueLineFromBody(body) {
  const lines = hintCandidateChunksFromBody(body);

  for (let i = lines.length - 1; i >= 0; i -= 1) {
    let line = lines[i];
    line = line.replace(/^[\s*—\-–]+/, "");
    line = line.replace(/^(clue|hint|trag|odgovor|answer)\s*:\s*/i, "").trim();
    line = line.replace(/^["'„«»]+|["'„«»]+$/g, "").trim();
    if (!line) continue;
    const wc = line.split(/\s+/).filter(Boolean).length;
    if (wc < 1 || wc > 12) continue;
    if (lineLooksLikeInternalMonologue(line)) continue;
    return line.slice(0, 96);
  }

  const flat = lines.join(" ").trim();
  if (flat.length > 48) {
    const tail = lastNonMonologueWordTail(flat, 6);
    if (tail) return tail.slice(0, 96);
  }

  return "";
}

/** OpenAI-compatible APIs may use a string or an array of { type, text } parts. */
function messageContentToPlainString(content) {
  if (content == null) return "";
  if (typeof content === "string") return content.trim();
  if (Array.isArray(content)) {
    const parts = [];
    for (const part of content) {
      if (typeof part === "string") parts.push(part);
      else if (part && typeof part === "object" && typeof part.text === "string") {
        parts.push(part.text);
      }
    }
    return parts.join("\n").trim();
  }
  return "";
}

function extractHintFromChatCompletion(data) {
  if (!data || typeof data !== "object") return "";
  if (data.error && typeof data.error.message === "string") return "";
  const msg = data.choices?.[0]?.message;
  if (!msg || typeof msg !== "object") return "";

  let raw = messageContentToPlainString(msg.content);
  if (!raw && typeof msg.reasoning_content === "string") {
    raw = msg.reasoning_content.trim();
  }
  if (!raw && typeof data.choices?.[0]?.text === "string") {
    raw = data.choices[0].text.trim();
  }
  const visible = stripThinkingWrappersFromModelText(raw);
  const guess = pickShortClueLineFromBody(visible || raw);
  if (guess) return guess;

  return "";
}

async function fetchSinglePlayerHint() {
  if (state.gameMode !== 1) return;

  const requestId = state.hintRequestId + 1;
  state.hintRequestId = requestId;
  const t = getText();
  state.botHintHadError = false;
  state.botHint = `${t.botHintPrefix} ${t.botHintLoading}`;
  updateBotHintView();

  const chatUrl = getHintChatUrl();
  if (!chatUrl) {
    if (requestId !== state.hintRequestId || state.gameMode !== 1) return;
    const protocol = window.location?.protocol || "";
    let detail = t.hintErrorConfigMissing;
    if (protocol === "file:") detail = t.hintErrorNeedServer;
    else if (hintConfigLoadError) detail = hintConfigLoadError;
    state.botHintHadError = true;
    state.botHint = formatBotHintError(t, detail, null);
    updateBotHintView();
    return;
  }

  const axisLeft = state.axis[0];
  const axisRight = state.axis[1];
  const positionPct = hintPositionPercentFromAngle(state.targetCenter);

  const body = {
    model: hintRuntime.hintModel,
    messages: buildHintChatMessages(axisLeft, axisRight, positionPct, state.language),
    temperature: 0.62,
    max_tokens: hintMaxTokensForModel(hintRuntime.hintModel)
  };

  try {
    const response = await fetch(chatUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${hintRuntime.hintApiKey}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (requestId !== state.hintRequestId || state.gameMode !== 1) return;
      state.botHintHadError = true;
      if (response.status === 429) {
        state.botHint = t.hintErrorRateLimit;
      } else {
        const detail =
          extractApiErrorDetail(data) || response.statusText || String(response.status);
        state.botHint = formatBotHintError(t, detail, response.status);
      }
      updateBotHintView();
      return;
    }

    const hint = extractHintFromChatCompletion(data);
    if (!hint.trim()) {
      if (requestId !== state.hintRequestId || state.gameMode !== 1) return;
      state.botHintHadError = true;
      const emptyExtra = extractApiErrorDetail(data);
      state.botHint = formatBotHintError(
        t,
        emptyExtra || t.hintErrorEmptyResponse,
        response.status
      );
      updateBotHintView();
      return;
    }

    if (requestId !== state.hintRequestId || state.gameMode !== 1) return;
    state.botHintHadError = false;
    state.botHint = hint;
  } catch (err) {
    if (requestId !== state.hintRequestId || state.gameMode !== 1) return;
    state.botHintHadError = true;
    const net = err instanceof Error ? err.message : String(err);
    state.botHint = formatBotHintError(
      t,
      net || (state.language === "en" ? "Network or CORS error." : "Mrežna greška ili CORS."),
      null
    );
  }

  updateBotHintView();
}

function renderTeamColorOptions() {
  if (state.editingTeamIndex === null || !el.teamColorOptions) return;

  const colors = TEAM_COLOR_PALETTES[state.editingTeamIndex] || [];
  const fragment = document.createDocumentFragment();

  colors.forEach((color) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "color-chip";
    chip.dataset.color = color;
    chip.style.setProperty("--chip-color", color);
    chip.classList.toggle("selected", color === state.modalTeamColor);
    fragment.appendChild(chip);
  });

  el.teamColorOptions.replaceChildren(fragment);
}

function animatePointsGain(points, teamIndex) {
  const scoreEl = teamIndex === 0 ? el.team0Score : el.team1Score;
  const badge = document.createElement("span");

  badge.className = "points-float";
  badge.textContent = points > 0 ? `+${points}` : "0";
  badge.style.color = state.teamColors[teamIndex] || "#c9a227";

  scoreEl.classList.remove("score-pop");
  void scoreEl.offsetWidth;
  scoreEl.classList.add("score-pop");

  document.body.appendChild(badge);
  window.setTimeout(() => {
    badge.remove();
    scoreEl.classList.remove("score-pop");
  }, 920);
}

function applyLanguage(nextLanguage, options = {}) {
  const next = nextLanguage === "en" ? "en" : "sr";
  const prev = state.language;
  const prevDefaults = DEFAULT_TEAM_NAMES[prev] || DEFAULT_TEAM_NAMES.sr;
  const nextDefaults = DEFAULT_TEAM_NAMES[next] || DEFAULT_TEAM_NAMES.sr;

  state.teamNames = state.teamNames.map((name, idx) => {
    if (name === prevDefaults[idx]) return nextDefaults[idx];
    return name;
  });

  state.language = next;
  state.axis = axisList(next)[state.axisIndex] || axisList(next)[0];

  const t = getText(next);
  document.documentElement.lang = next;
  el.kickerLabel.textContent = t.kicker;
  el.newGameBtn.textContent = t.newGame;
  el.roundLabel.textContent = t.roundLabel;
  el.activeTeamPrefix.textContent = t.activeTeamPrefix;
  el.goalLabel.textContent = t.goalLabel;
  el.axisTitle.textContent = t.axisTitle;
  el.startKicker.textContent = t.startKicker;
  el.startTitle.textContent = t.startTitle;
  el.startSubtitle.textContent = t.startSubtitle;
  el.startSingleBtn.textContent = t.startSingle;
  el.startTwoBtn.textContent = t.startTwo;
  el.startRulesBtn.textContent = t.startRulesBtn;
  el.startRulesTitle.textContent = t.startRulesTitle;
  el.startRulesText.textContent = t.startRulesText;
  el.controlNote.textContent = t.controlNote;
  el.peekBtn.textContent = t.peekBtn;
  el.guessBtn.textContent = t.guessBtn;
  el.roundResultTitle.textContent = t.resultTitle;
  el.secretOverlayText.textContent = t.secretOverlay;
  el.teamNameInput.setAttribute("placeholder", t.modalNamePlaceholder);
  el.teamColorLabel.textContent = t.modalTeamColor;
  el.teamModalCancelBtn.textContent = t.modalCancel;
  el.teamModalSaveBtn.textContent = t.modalSave;
  el.editTeam0Btn.setAttribute("aria-label", t.editTeam1Aria);
  el.editTeam1Btn.setAttribute("aria-label", t.editTeam2Aria);

  if (state.editingTeamIndex !== null) {
    el.teamModalTitle.textContent = state.editingTeamIndex === 0 ? t.modalTeam1Title : t.modalTeam2Title;
    renderTeamColorOptions();
  }

  if (el.langBtn) {
    el.langBtn.textContent = t.langToggleButton;
    el.langBtn.setAttribute("aria-label", t.langToggleLabel);
    el.langBtn.setAttribute("title", t.langToggleTitle);
  }

  updatePhaseText();
  updateRoundResultText();
  updateNextRoundButtonText();
  if (state.gameMode === 1) {
    fetchSinglePlayerHint();
  } else {
    updateBotHintView();
  }
  renderStatic();

  if (!options.skipPersist && ENABLE_LOCAL_PERSISTENCE) {
    try {
      window.localStorage.setItem(STORAGE_KEYS.language, next);
    } catch {
      // Ignore storage errors in restricted modes.
    }
  }
}

function toT(angle) {
  return (angle + 90) / 180;
}

function pointOnArc(t, radius = 170) {
  const cx = 210;
  const cy = 230;
  const phi = Math.PI - t * Math.PI;
  return {
    x: cx + radius * Math.cos(phi),
    y: cy - radius * Math.sin(phi)
  };
}

function arcPath(startAngle, endAngle, radius = 170) {
  const start = pointOnArc(toT(startAngle), radius);
  const end = pointOnArc(toT(endAngle), radius);
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius} ${radius} 0 0 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

function semicircleFillPath(startAngle, endAngle, radius = 170) {
  const start = pointOnArc(toT(startAngle), radius);
  const end = pointOnArc(toT(endAngle), radius);
  return [
    `M ${VIEWBOX_CENTER.x} ${VIEWBOX_CENTER.y}`,
    `L ${start.x.toFixed(2)} ${start.y.toFixed(2)}`,
    `A ${radius} ${radius} 0 0 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`,
    `L ${VIEWBOX_CENTER.x} ${VIEWBOX_CENTER.y}`,
    "Z"
  ].join(" ");
}

function drawBaseSegments() {
  const ns = "http://www.w3.org/2000/svg";
  el.baseArcs.innerHTML = "";

  const rails = [
    { radius: 188, cls: "dial-rail outer" },
    { radius: 170, cls: "dial-rail inner" },
    { radius: 152, cls: "dial-rail inner" }
  ];

  for (const rail of rails) {
    const ring = document.createElementNS(ns, "path");
    ring.setAttribute("d", arcPath(-90, 90, rail.radius));
    ring.setAttribute("class", rail.cls);
    el.baseArcs.appendChild(ring);
  }

  const dialFace = document.createElementNS(ns, "path");
  dialFace.setAttribute("d", semicircleFillPath(-90, 90, 186));
  dialFace.setAttribute("class", "dial-face");
  el.baseArcs.appendChild(dialFace);

}

function fanBandPath(startAngle, endAngle, outerRadius = 188) {
  const start = clamp(startAngle, MIN_ANGLE, MAX_ANGLE);
  const end = clamp(endAngle, MIN_ANGLE, MAX_ANGLE);
  const outerStart = pointOnArc(toT(start), outerRadius);
  const outerEnd = pointOnArc(toT(end), outerRadius);

  return [
    `M ${VIEWBOX_CENTER.x} ${VIEWBOX_CENTER.y}`,
    `L ${outerStart.x.toFixed(2)} ${outerStart.y.toFixed(2)}`,
    `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x.toFixed(2)} ${outerEnd.y.toFixed(2)}`,
    `L ${VIEWBOX_CENTER.x} ${VIEWBOX_CENTER.y}`,
    "Z"
  ].join(" ");
}

function wrapAngle(angle) {
  if (angle === MAX_ANGLE) return MAX_ANGLE;
  const wrapped = ((angle - MIN_ANGLE) % ANGLE_SPAN + ANGLE_SPAN) % ANGLE_SPAN + MIN_ANGLE;
  return wrapped;
}

function wrapBandSegments(startAngle, endAngle) {
  const start = Number(startAngle);
  const end = Number(endAngle);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    return [];
  }

  const segments = [];
  for (let k = -2; k <= 2; k += 1) {
    const shiftedStart = start + k * ANGLE_SPAN;
    const shiftedEnd = end + k * ANGLE_SPAN;
    const clippedStart = Math.max(shiftedStart, MIN_ANGLE);
    const clippedEnd = Math.min(shiftedEnd, MAX_ANGLE);

    if (clippedEnd - clippedStart > 0.0001) {
      segments.push({ start: clippedStart, end: clippedEnd });
    }
  }

  segments.sort((a, b) => a.start - b.start);
  const unique = [];
  for (const segment of segments) {
    const prev = unique[unique.length - 1];
    if (prev && Math.abs(prev.start - segment.start) < 0.0001 && Math.abs(prev.end - segment.end) < 0.0001) {
      continue;
    }
    unique.push(segment);
  }

  return unique;
}

function circularDistance(a, b) {
  const direct = Math.abs(a - b);
  return Math.min(direct, ANGLE_SPAN - direct);
}

function updateNeedle() {
  const p = pointOnArc(toT(state.guess), 166);
  el.needle.setAttribute("x2", p.x.toFixed(2));
  el.needle.setAttribute("y2", p.y.toFixed(2));
  el.needleGrab.setAttribute("x2", p.x.toFixed(2));
  el.needleGrab.setAttribute("y2", p.y.toFixed(2));
}

function setGuess(angle, withTick = false) {
  state.guess = clamp(angle, MIN_ANGLE, MAX_ANGLE);
  updateNeedle();

  if (withTick) {
    const now = performance.now();
    if (now - lastTickAt > 100) {
      playTinyTick();
      lastTickAt = now;
    }
  }
}

function updateSecretBands(visible) {
  const scoreBands = [
    { points: 2, start: -20, end: -12, color: "#3d4f63" },
    { points: 3, start: -12, end: -4, color: "#4a6b52" },
    { points: 4, start: -4, end: 4, color: "#b8942e" },
    { points: 3, start: 4, end: 12, color: "#4a6b52" },
    { points: 2, start: 12, end: 20, color: "#3d4f63" }
  ];

  el.secretBands.innerHTML = "";

  for (const band of scoreBands) {
    const start = state.targetCenter + band.start;
    const end = state.targetCenter + band.end;
    const segments = wrapBandSegments(start, end);
    if (segments.length === 0) continue;
    const centerAngle = wrapAngle(state.targetCenter + (band.start + band.end) / 2);
    const labelPoint = pointOnArc(toT(centerAngle), 166);

    for (const segment of segments) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", fanBandPath(segment.start, segment.end));
      path.setAttribute("class", "secret-band");
      path.setAttribute("fill", band.color);
      path.setAttribute("fill-opacity", band.points === 4 ? "0.92" : "0.82");
      el.secretBands.appendChild(path);
    }

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", labelPoint.x.toFixed(2));
    label.setAttribute("y", labelPoint.y.toFixed(2));
    label.setAttribute("class", "secret-band-label");
    label.setAttribute("pointer-events", "none");
    label.setAttribute("style", "user-select:none");
    label.textContent = String(band.points);
    el.secretBands.appendChild(label);
  }

  const boundaries = [-20, -12, -4, 4, 12, 20];
  const drawnBoundaryAngles = new Set();
  for (const offset of boundaries) {
    const angle = wrapAngle(state.targetCenter + offset);
    const key = angle.toFixed(3);
    if (drawnBoundaryAngles.has(key)) continue;
    drawnBoundaryAngles.add(key);

    const end = pointOnArc(toT(angle), 188);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(VIEWBOX_CENTER.x));
    line.setAttribute("y1", String(VIEWBOX_CENTER.y));
    line.setAttribute("x2", end.x.toFixed(2));
    line.setAttribute("y2", end.y.toFixed(2));
    line.setAttribute("class", "secret-boundary");
    el.secretBands.appendChild(line);
  }

  el.secretBands.classList.toggle("visible", visible);
}

function hideSecretBandsInstantly() {
  el.secretBands.classList.add("no-transition");
  el.secretBands.classList.remove("visible");
  void el.secretBands.getBoundingClientRect();
  window.requestAnimationFrame(() => {
    el.secretBands.classList.remove("no-transition");
  });
}

function rotateActiveTeam() {
  if (state.gameMode === 1) {
    state.activeTeam = 0;
    return;
  }
  state.activeTeam = state.activeTeam === 0 ? 1 : 0;
}

function randomAxisIndex() {
  const list = axisList();
  return rand(0, list.length - 1);
}

function randomTargetCenter() {
  const useEdgeWrap = Math.random() < 0.2;
  if (useEdgeWrap) {
    return EDGE_WRAP_CENTERS[rand(0, EDGE_WRAP_CENTERS.length - 1)];
  }
  return rand(CORE_TARGET_MIN, CORE_TARGET_MAX);
}

async function setNewRound() {
  hideSecretBandsInstantly();
  state.axisIndex = randomAxisIndex();
  state.axis = axisList()[state.axisIndex];
  state.targetCenter = randomTargetCenter();
  state.guess = 0;
  state.lastPoints = 0;
  state.locked = false;
  state.revealed = false;

  el.guessBtn.disabled = false;
  el.peekBtn.disabled = false;
  el.nextRoundBtn.disabled = true;
  setDirectionButtonsState(false);
  updateSecretBands(false);
  updateNeedle();

  updatePhaseText();
  updateRoundResultText();
  updateNextRoundButtonText();

  if (state.gameMode === 1) {
    fetchSinglePlayerHint();
  } else {
    updateBotHintView();
  }

  renderStatic();
}

function pointsForDistance(distance) {
  if (distance <= 4) return 4;
  if (distance <= 12) return 3;
  if (distance <= 20) return 2;
  return 0;
}

function showCelebration(points) {
  if (points < 3) return;
  const t = getText();

  const badge = document.createElement("div");
  badge.className = "celebration-badge";
  badge.textContent = points === 4 ? t.perfectShot : t.greatShot;
  document.body.appendChild(badge);

  el.dialShell.classList.remove("celebrate");
  el.logPanel.classList.remove("celebrate");
  window.requestAnimationFrame(() => {
    el.dialShell.classList.add("celebrate");
    el.logPanel.classList.add("celebrate");
  });

  window.setTimeout(() => {
    el.dialShell.classList.remove("celebrate");
    el.logPanel.classList.remove("celebrate");
  }, 900);

  window.setTimeout(() => {
    badge.remove();
  }, 1200);
}

function evaluateRound() {
  const distance = circularDistance(state.guess, state.targetCenter);
  const mainPoints = pointsForDistance(distance);
  state.lastPoints = mainPoints;
  state.scores[state.activeTeam] += mainPoints;

  animatePointsGain(mainPoints, state.activeTeam);

  updateRoundResultText();
  playSuccessSound(mainPoints);
  showCelebration(mainPoints);

  const winner = state.scores.findIndex((s) => s >= state.goal);
  if (winner !== -1) {
    state.winner = winner;
    el.nextRoundBtn.disabled = false;
    el.guessBtn.disabled = true;
    el.peekBtn.disabled = true;
    setDirectionButtonsState(true);
    updateRoundResultText();
    updateNextRoundButtonText();
    return;
  }

  el.nextRoundBtn.disabled = false;
  updateNextRoundButtonText();
}

function renderStatic() {
  el.team0NameLabel.textContent = state.teamNames[0];
  el.team1NameLabel.textContent = state.teamNames[1];
  el.team0Score.textContent = String(state.scores[0]);
  el.team1Score.textContent = String(state.scores[1]);
  el.roundNum.textContent = String(state.round);
  el.goalScore.textContent = String(state.goal);
  el.activeTeamLabel.textContent = state.teamNames[state.activeTeam];
  el.axisLeft.textContent = state.axis[0];
  el.axisRight.textContent = state.axis[1];

  const isSinglePlayer = state.gameMode === 1;
  el.team1Card.style.display = isSinglePlayer ? "none" : "block";
  el.scoreboard.classList.toggle("single-player", isSinglePlayer);
  el.peekBtn.disabled = isSinglePlayer || state.revealed || state.winner !== null;

  el.team0Card.style.setProperty("--team-accent-strong", state.teamColors[0]);
  el.team0Card.style.setProperty("--team-accent-soft", hexToRgba(state.teamColors[0], 0.24));
  el.team1Card.style.setProperty("--team-accent-strong", state.teamColors[1]);
  el.team1Card.style.setProperty("--team-accent-soft", hexToRgba(state.teamColors[1], 0.24));

  el.team0Card.classList.toggle("active", state.activeTeam === 0);
  el.team1Card.classList.toggle("active", state.activeTeam === 1);
}

function startGame(mode) {
  const nextMode = mode === 1 ? 1 : 2;
  const defaults = DEFAULT_TEAM_NAMES[state.language];
  const soloName = SOLO_TEAM_NAME[state.language];

  if (state.gameMode !== nextMode) {
    state.teamNames = nextMode === 1 ? [soloName, defaults[1]] : [...defaults];
  }

  state.gameMode = nextMode;
  state.hintRequestId += 1;
  state.botHint = "";
  el.startGate.classList.add("hidden");
  newGame();
}

async function newGame() {
  state.scores = [0, 0];
  state.activeTeam = 0;
  state.round = 1;
  state.winner = null;
  state.botHint = "";
  updateNextRoundButtonText();
  await setNewRound();
}

function editTeamName(teamIndex) {
  const t = getText();
  state.editingTeamIndex = teamIndex;
  state.modalTeamColor = state.teamColors[teamIndex];
  el.teamModalTitle.textContent = teamIndex === 0 ? t.modalTeam1Title : t.modalTeam2Title;
  el.teamNameInput.value = state.teamNames[teamIndex];
  renderTeamColorOptions();
  el.teamNameModal.classList.remove("hidden");
  window.setTimeout(() => {
    el.teamNameInput.focus();
  }, 0);
}

function closeTeamNameModal() {
  state.editingTeamIndex = null;
  state.modalTeamColor = null;
  el.teamNameModal.classList.add("hidden");
}

function saveTeamNameFromModal() {
  if (state.editingTeamIndex === null) return;

  const cleaned = el.teamNameInput.value.trim();
  const teamIndex = state.editingTeamIndex;
  state.teamNames[teamIndex] = cleaned || DEFAULT_TEAM_NAMES[state.language][teamIndex];
  if (state.modalTeamColor) {
    state.teamColors[teamIndex] = state.modalTeamColor;
  }
  closeTeamNameModal();
  renderStatic();
}

function setDirectionButtonsState(disabled) {
  el.directionZones.forEach((zone) => {
    zone.disabled = disabled;
  });
}

function interactionLocked() {
  return state.locked || state.revealed || state.winner !== null;
}

function eventToSvgPoint(event) {
  const point = el.dialSvg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(el.dialSvg.getScreenCTM().inverse());
}

function pointToAngle(point) {
  if (point.y > VIEWBOX_CENTER.y + 1) {
    if (point.x < VIEWBOX_CENTER.x - 1) return MIN_ANGLE;
    if (point.x > VIEWBOX_CENTER.x + 1) return MAX_ANGLE;
    return state.guess;
  }

  const dx = point.x - VIEWBOX_CENTER.x;
  const dy = VIEWBOX_CENTER.y - point.y;
  const phi = Math.atan2(dy, dx);
  const t = (Math.PI - phi) / Math.PI;
  return clamp(t * 180 - 90, MIN_ANGLE, MAX_ANGLE);
}

function startDrag(event) {
  if (interactionLocked()) return;
  if (event.target.closest(".zone")) return;

  unlockAudio();
  state.dragging = true;
  el.dialShell.classList.add("dragging");
  if (typeof el.dialSvg.setPointerCapture === "function") {
    el.dialSvg.setPointerCapture(event.pointerId);
  }

  const angle = pointToAngle(eventToSvgPoint(event));
  setGuess(angle, true);
}

function dragMove(event) {
  if (!state.dragging || interactionLocked()) return;
  const angle = pointToAngle(eventToSvgPoint(event));
  setGuess(angle, true);
}

function endDrag(event) {
  if (!state.dragging) return;
  state.dragging = false;
  el.dialShell.classList.remove("dragging");
  if (typeof el.dialSvg.releasePointerCapture === "function") {
    el.dialSvg.releasePointerCapture(event.pointerId);
  }
}

function jumpNeedle(direction) {
  if (interactionLocked()) return;

  const targetByDirection = {
    left: -60,
    center: 0,
    right: 60
  };

  const next = targetByDirection[direction];
  if (typeof next === "number") {
    unlockAudio().catch(() => {});
    setGuess(next, true);
  }
}

function createAudio() {
  if (audioContext) return;
  const Ctor = window.AudioContext || window.webkitAudioContext;
  if (!Ctor) return;

  audioContext = new Ctor();
  masterGain = audioContext.createGain();
  masterGain.gain.value = 0.22;
  masterGain.connect(audioContext.destination);
}

async function unlockAudio() {
  createAudio();
  if (!audioContext) return;
  if (!state.audioUnlocked) {
    state.audioUnlocked = true;
  }
  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }
}

function setTheme(nextTheme) {
  const t = getText();
  const theme = nextTheme === "dark" ? "dark" : "light";
  document.body.dataset.theme = theme;

  if (!el.themeBtn) return;

  const isDark = theme === "dark";
  el.themeBtn.setAttribute("aria-pressed", String(isDark));
  el.themeBtn.setAttribute("aria-label", isDark ? t.themeLightLabel : t.themeDarkLabel);
  el.themeBtn.setAttribute("title", isDark ? t.themeDarkTitle : t.themeLightTitle);

  if (ENABLE_LOCAL_PERSISTENCE) {
    try {
      window.localStorage.setItem(STORAGE_KEYS.theme, theme);
    } catch {
      // Ignore storage errors in restricted modes.
    }
  }
}

function hydratePreferences() {
  let theme = "dark";
  let language = "sr";

  if (ENABLE_LOCAL_PERSISTENCE) {
    try {
      const savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);
      const savedLanguage = window.localStorage.getItem(STORAGE_KEYS.language);
      if (savedTheme === "light" || savedTheme === "dark") {
        theme = savedTheme;
      }
      if (savedLanguage === "sr" || savedLanguage === "en") {
        language = savedLanguage;
      }
    } catch {
      // Fall back to defaults if storage is unavailable.
    }
  }

  applyLanguage(language, { skipPersist: true });
  setTheme(theme);
}

function playTone({ frequency, duration, type = "triangle", volume = 0.08, attack = 0.002 }) {
  if (!audioContext || !masterGain) return;

  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = type;
  osc.frequency.value = frequency;

  gain.gain.value = 0.0001;
  osc.connect(gain);
  gain.connect(masterGain);

  const t0 = audioContext.currentTime;
  gain.gain.linearRampToValueAtTime(volume, t0 + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

function playTinyTick() {
  playTone({ frequency: 420, duration: 0.06, type: "square", volume: 0.03 });
}

function playLockSound() {
  playTone({ frequency: 210, duration: 0.1, type: "square", volume: 0.06 });
  window.setTimeout(() => {
    playTone({ frequency: 160, duration: 0.12, type: "triangle", volume: 0.05 });
  }, 40);
}

function playRevealSound() {
  playTone({ frequency: 360, duration: 0.16, type: "triangle", volume: 0.07 });
  window.setTimeout(() => {
    playTone({ frequency: 520, duration: 0.2, type: "triangle", volume: 0.06 });
  }, 90);
}

function playSuccessSound(points) {
  if (points <= 0) return;

  const patternByPoints = {
    2: [392, 494, 587],
    3: [440, 554, 659],
    4: [523, 659, 784]
  };

  const notes = patternByPoints[points] || patternByPoints[2];
  notes.forEach((frequency, index) => {
    window.setTimeout(() => {
      playTone({ frequency, duration: 0.14, type: "triangle", volume: 0.07 });
    }, index * 95);
  });
}

el.peekBtn.addEventListener("click", () => {
  if (state.winner !== null) return;
  updateSecretBands(true);
  el.secretOverlay.classList.remove("hidden");

  window.setTimeout(() => {
    if (!state.revealed) {
      updateSecretBands(false);
    }
    el.secretOverlay.classList.add("hidden");
  }, 3000);
});

el.guessBtn.addEventListener("click", async () => {
  if (interactionLocked()) return;
  await unlockAudio();
  playLockSound();
  playRevealSound();
  state.locked = true;
  state.revealed = true;
  el.guessBtn.disabled = true;
  el.peekBtn.disabled = true;
  setDirectionButtonsState(true);
  el.secretOverlay.classList.add("hidden");
  updateSecretBands(true);
  updatePhaseText();
  evaluateRound();
  renderStatic();
});

el.nextRoundBtn.addEventListener("click", async () => {
  if (state.winner !== null) {
    await newGame();
    return;
  }
  state.round += 1;
  rotateActiveTeam();
  await setNewRound();
});

el.newGameBtn.addEventListener("click", async () => {
  await unlockAudio();
  await newGame();
});

if (el.themeBtn) {
  el.themeBtn.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

if (el.langBtn) {
  el.langBtn.addEventListener("click", () => {
    const nextLanguage = state.language === "sr" ? "en" : "sr";
    applyLanguage(nextLanguage);

    if (state.gameMode === 1 && state.teamNames[0] === SOLO_TEAM_NAME[state.language === "sr" ? "en" : "sr"]) {
      state.teamNames[0] = SOLO_TEAM_NAME[nextLanguage];
      renderStatic();
    }

    setTheme(document.body.dataset.theme || "light");
  });
}

if (el.startSingleBtn) {
  el.startSingleBtn.addEventListener("click", () => {
    startGame(1);
  });
}

if (el.startTwoBtn) {
  el.startTwoBtn.addEventListener("click", () => {
    startGame(2);
  });
}

if (el.startRulesBtn) {
  el.startRulesBtn.addEventListener("click", () => {
    el.startRulesBox.classList.toggle("hidden");
  });
}

if (el.editTeam0Btn) {
  el.editTeam0Btn.addEventListener("click", () => {
    editTeamName(0);
  });
}
if (el.editTeam1Btn) {
  el.editTeam1Btn.addEventListener("click", () => {
    editTeamName(1);
  });
}

if (el.teamModalCancelBtn) {
  el.teamModalCancelBtn.addEventListener("click", closeTeamNameModal);
}

if (el.teamModalSaveBtn) {
  el.teamModalSaveBtn.addEventListener("click", saveTeamNameFromModal);
}

if (el.teamNameModal) {
  el.teamNameModal.addEventListener("click", (event) => {
    if (event.target === el.teamNameModal) {
      closeTeamNameModal();
    }
  });
}

if (el.teamNameInput) {
  el.teamNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveTeamNameFromModal();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeTeamNameModal();
    }
  });
}

if (el.teamColorOptions) {
  el.teamColorOptions.addEventListener("click", (event) => {
    const chip = event.target.closest(".color-chip");
    if (!chip) return;
    state.modalTeamColor = chip.dataset.color;
    renderTeamColorOptions();
  });
}

el.dialSvg.addEventListener("pointerdown", startDrag);
el.dialSvg.addEventListener("pointermove", dragMove);
el.dialSvg.addEventListener("pointerup", endDrag);
el.dialSvg.addEventListener("pointercancel", endDrag);

document.addEventListener("pointerup", endDrag);

el.directionZones.forEach((zone) => {
  zone.addEventListener("click", () => {
    jumpNeedle(zone.dataset.jump);
  });
});

(async function boot() {
  await hydrateHintConfig();
  drawBaseSegments();
  initQuestionBackground();
  hydratePreferences();
  renderStatic();
  updateNeedle();
  setDirectionButtonsState(true);
})();
