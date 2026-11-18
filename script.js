// PASSWORT HIER ÄNDERN
const SITE_PASSWORD = "MAMA50";

// HIER DIE 50 KLEINEN GRÜNDE ANPASSEN
const reasons = [
"Dein Lachen","Deine Umarmungen","Dein Humor","Deine Stärke","Deine Geduld",
"Deine Geschichten","Deine Kochkünste","Deine Ehrlichkeit","Deine Energie","Deine Herzlichkeit",
"Wie du zuhörst","Deine Spontanität","Deine Ratschläge","Dein Mut","Deine Kreativität",
"Deine verrückten Ideen","Deine Fürsorge","Deine Lebensfreude","Deine Art zu feiern","Deine Stimme",
"Deine kleinen Gesten","Dein grosses Herz","Deine Offenheit","Deine Wärme","Deine Begeisterung",
"Wie du andere aufmunterst","Dein Durchhaltevermögen","Deine lustigen Sprüche","Deine Neugier","Deine Persönlichkeit",
"Deine Hilfsbereitschaft","Deine Lebensweisheit","Deine Abenteuerlust","Deine positive Art","Deine Erinnerungen",
"Deine Liebe","Dein Vertrauen","Deine Geduld mit uns","Dein Lächeln","Deine Einzigartigkeit",
"Wie du Dinge besonders machst","Deine Lieblingslieder","Dein mexikanisches Herz","Deine kleinen Traditionen","Deine Unterstützung",
"Dein Optimismus","Deine Grosszügigkeit","Dein Sinn für Familie","Einfach alles an dir","Dass du DU bist"
];
const reasonsGrid = document.getElementById("reasonsGrid");
reasons.forEach((reason, i) => {
  const b = document.createElement("button");
  b.className = "reason";
  b.innerHTML = `<span>GRUND ${String(i+1).padStart(2,"0")}</span>♡`;
  b.title = "Anklicken, um den Grund zu lesen";
  b.addEventListener("click", () => {
    b.classList.toggle("open");
    b.innerHTML = b.classList.contains("open")
      ? `<span>GRUND ${String(i+1).padStart(2,"0")}</span>${reason}`
      : `<span>GRUND ${String(i+1).padStart(2,"0")}</span>♡`;
  });
  reasonsGrid.appendChild(b);
});

// PASSWORT-EINGANG
document.getElementById("gateForm").addEventListener("submit", e => {
  e.preventDefault();
  if (document.getElementById("gatePassword").value === SITE_PASSWORD) {
    document.getElementById("gate").style.display = "none";
    document.getElementById("site").classList.remove("hidden");
    window.scrollTo(0,0);
  } else {
    document.getElementById("gateError").textContent = "Das Passwort stimmt noch nicht.";
    document.getElementById("gatePassword").value = "";
  }
});

// FOTO-JAHRESZAHLEN-RÄTSEL – richtige Jahre und Optionen hier bearbeiten
const quizzes = [
  {img:"assets/photos/quiz-1.jpg",year:"1996",options:["1986","1996","2006","2016"]},
  {img:"assets/photos/quiz-2.jpg",year:"2006",options:["1996","2001","2006","2011"]},
  {img:"assets/photos/quiz-3.jpg",year:"2016",options:["2006","2011","2016","2021"]}
];
let q = 0;
function renderQuiz(){
  const quiz = quizzes[q], img = document.getElementById("quizImage");
  img.style.display = "block"; img.src = quiz.img;
  document.getElementById("quizCount").textContent = `RÄTSEL ${q+1} / ${quizzes.length}`;
  document.getElementById("quizFeedback").textContent = "Wähle deine Antwort.";
  document.getElementById("quizNext").hidden = true;
  const box = document.getElementById("quizChoices"); box.innerHTML = "";
  quiz.options.forEach(year => {
    const btn = document.createElement("button"); btn.textContent = year;
    btn.addEventListener("click", () => {
      if(box.dataset.done) return; box.dataset.done = "1";
      box.querySelectorAll("button").forEach(x=>x.disabled=true); btn.classList.add("chosen");
      document.getElementById("quizFeedback").textContent = year===quiz.year ? "Richtig! Was für ein gutes Gedächtnis! ♡" : `Es war ${quiz.year} – eine schöne Erinnerung!`;
      document.getElementById("quizNext").hidden = false;
    }); box.appendChild(btn);
  }); box.dataset.done = "";
}
renderQuiz();
document.getElementById("quizNext").addEventListener("click",()=>{q=(q+1)%quizzes.length;renderQuiz();});

// KLEINE GEBURTSTAGSNACHRICHTEN
document.querySelectorAll(".message-card").forEach(card=>card.addEventListener("click",()=>{
  document.getElementById("messageReveal").textContent=card.dataset.message;
}));

// UMSCHLÄGE / NACHRICHTEN VON FAMILIE UND FREUNDEN
document.querySelectorAll(".envelope").forEach(env=>env.addEventListener("click",()=>{
  document.getElementById("letterPop").textContent=env.dataset.letter;
}));

// MINI-FRAGE
document.querySelectorAll(".fact-options button").forEach(btn=>btn.addEventListener("click",()=>{
  document.getElementById("factAnswer").textContent=`Gute Wahl: ${btn.textContent} ♡`;
}));

// ÜBERRASCHUNG + KONFETTI-EFFEKT
document.getElementById("surpriseBtn").addEventListener("click",()=>{
  document.getElementById("surpriseReveal").hidden=false;
  document.getElementById("surpriseBtn").hidden=true;
  document.getElementById("surpriseReveal").scrollIntoView({behavior:"smooth",block:"center"});
});

// Musik-Schaltfläche: spielt die eingebundene Audiodatei ab, sofern vorhanden
const audio = document.querySelector("audio");
document.getElementById("soundToggle").addEventListener("click",async()=>{
  if(!audio) return;
  if(audio.paused){try{await audio.play();document.getElementById("soundToggle").textContent="Ⅱ";}catch(e){document.getElementById("soundToggle").textContent="♫";}}
  else{audio.pause();document.getElementById("soundToggle").textContent="♫";}
});
if(audio){audio.addEventListener("ended",()=>document.getElementById("soundToggle").textContent="♫");}
