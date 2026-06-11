function setLanguage(lang){

const content = {

ru: {
name: "Артем Власов",
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
],

experienceItems: [
"16+ лет профессионального опыта",
"Инвестиционный анализ и оценка проектов",
"Управление активами и недвижимостью",
"Работа с частными инвесторами",
"Корпоративный инвестиционный опыт"
]

},

en: {

name: "Artem Vlasov",

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
],

experienceItems: [
"16+ years of professional experience",
"Investment analysis and project evaluation",
"Asset and real estate management",
"Private investor advisory",
"Corporate investment experience"
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

document.getElementById("contact-title").innerText =
content[lang].contactTitle;

const meetingButtons =
document.querySelectorAll(".btn-gold");

meetingButtons.forEach(btn => {
btn.innerText = content[lang].meetingButton;
});

const expertiseItems =
document.querySelectorAll(".expertise-grid div");

expertiseItems.forEach((item,index)=>{
item.innerText = content[lang].expertise[index];
});

const expList =
document.getElementById("experience-list");

if(expList){

expList.innerHTML = "";

content[lang].experienceItems.forEach(item => {

const li = document.createElement("li");

li.innerText = item;

expList.appendChild(li);

});

}

}
