import { techs } from './data.js';

console.log(techs);
export function renderTech() {
    const container = document.querySelector('#tech .container');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content','flex', 'md:justify-evenly', 'md:gap-x-3', 'overflow-x-auto', 'scrollbar-x-hide');
    for (const t of techs) {
        const myTech = document.createElement('div');
        myTech.classList.add('my-tech','scale-50', 'tablet:scale-75', 'md:scale-100');
        myTech.innerHTML = t.urlSvg;
        contentContainer.appendChild(myTech);
    }
    container.append(contentContainer);
}
