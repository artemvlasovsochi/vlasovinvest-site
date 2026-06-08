function setLanguage(lang){

const content = {

ru: {
subtitle: "Управление инвестициями • Недвижимость • Family Office Support",
aboutTitle: "Обо мне",
aboutText: "Инвестиционный и операционный менеджер с более чем 16-летним опытом работы в сфере инвестиционного анализа, недвижимости, управления активами и сопровождения частных инвесторов.",
expertiseTitle: "Ключевые компетенции",
experienceTitle: "Профессиональный опыт"
},

en: {
subtitle: "Investment Management • Real Estate Investments • Family Office Support",
aboutTitle: "About",
aboutText: "Investment and asset management professional with more than 16 years of experience in investment analysis, real estate investments, asset management and private investor advisory.",
expertiseTitle: "Core Expertise",
experienceTitle: "Professional Experience"
}

};

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

}
