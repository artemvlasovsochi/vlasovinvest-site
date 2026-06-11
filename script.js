function setLanguage(lang){

const content = {

ru: {
name: "Артем Власов",
title: "Private Investment & Asset Manager",
subtitle: "Управление инвестициями • Недвижимость • Family Office Support",

aboutTitle: "Обо мне",

aboutText: "Инвестиционный и операционный менеджер с более чем 16-летним опытом работы в сфере инвестиционного анализа, недвижимости, управления активами и сопровождения частных инвесторов.",

expertiseTitle: "Ключевые компетенции",

experienceTitle: "Профессиональный опыт",
contactTitle: "Контакты",
meetingButton: "Запланировать встречу",

expertise: [
"Управление активами",
"Инвестиции в недвижимость",
"Due Diligence",
"Инвестиционный анализ",
"Поддержка Family Office",
"Стратегическое планирование",
"Управление проектами",
"Сохранение капитала"
]
},

en: {
name: "Artem Vlasov",
title: "Private Investment & Asset Manager",
subtitle: "Investment Management • Real Estate Investments • Family Office Support",

aboutTitle: "About",

aboutText: "Investment and asset management professional with more than 16 years of experience in investment analysis, real estate investments, asset management and private investor advisory.",

expertiseTitle: "Core Expertise",

experienceTitle: "Professional Experience",
contactTitle: "Contact",
meetingButton: "Schedule a Meeting",

expertise: [
"Asset Management",
"Real Estate Investments",
"Due Diligence",
"Investment Analysis",
"Family Office Support",
"Strategic Planning",
"Project Management",
"Wealth Preservation"
]
}

};

document.getElementById("name").innerText =
content[lang].name;

document.getElementById("subtitle").innerText =
content[lang].subtitle;

document.getElementById("about-title").innerText =
content[lang].aboutTitle;

document.getElementById("about-text").innerText =
content[lang].aboutText;

document.getElementById("expertise-title").innerText =
content[lang].expertiseTitle;

document.getElementById("experience-title").innerText =
content[lang].experienceTitle;

const meetingBtn = document.querySelector(".btn-gold");

if(meetingBtn){
meetingBtn.innerText = content[lang].meetingButton;
}

const expertiseItems = document.querySelectorAll(".expertise-grid div");

expertiseItems.forEach((item,index)=>{
item.innerText = content[lang].expertise[index];
});

}
