import { data } from "./data.js";

export function renderSertificate() {
  const container = document.querySelector("#certificate .container");
  const containerImage = document.createElement("div");
  containerImage.classList.add(
    "image",
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-2",
    "xl:grid-cols-3",
    "justify-items-center",
    "gap-y-7"
  );
  
  for (const d of data) {
    const img = document.createElement("img");
    img.setAttribute("id", `${d.id}`);
    img.setAttribute("src", `${d.urlImg}`);
    img.setAttribute("alt", `${d.title}`);
    img.setAttribute("data-update", `${d.date}`)

    img.classList.add(
      "max-w-full",
      "mobileMini:max-w-60",
      "sm:max-w-72",
      "lg:max-w-80",
      "xl:max-w-96",
      "justify-self-center",
      "cursor-zoom-in",
    );

    containerImage.appendChild(img);
  }

  container.appendChild(containerImage);

  const Images = document.querySelectorAll(
    "#certificate .container .image img"
  );

  Images.forEach((img) => {
    img.addEventListener('mouseover', () => {
      img.classList.add('brightness-50');
    })
    img.addEventListener('mouseout', () => {
      img.classList.remove('brightness-50');
    })
    img.addEventListener("click", (e) => {
      showModal(e.target.src, e.target.alt);
      console.log(e.target.dataset.update);
    });
  });
}

function showModal(url, title) {
  const modal = `
          <div class="bg-modal card w-full h-full fixed inset-0 bg-[rgba(0,0,0,.65)] z-[99992] flex justify-center items-center">
        <div class="content-modal w-10/12 h-1/2 lg:w-1/2 lg:h-1/2 sm:max-w-md lg:max-w-xl xl:max-w-2xl relative p-3">
           <a href="#" id="button-close" class="md:py-[.3em] md:px-[.6em] mobileMini:py-[.2em] mobileMini:px-[.5em] py-[3px] px-[8px] rounded-[50%] bg-slate-600 z-10 absolute -top-3 -right-5 mobileMini:-top-2 mobileMini:-right-3 sm:-top-1 sm:-right-2 md:-top-3  md:-right-5"><i class="fa-solid fa-xmark text-gray-200 text-[16px] mobileMini:text-md sm:text-xl lg:text-2xl"></i></a>
          <img src="${url}" class="scale-[1.35] mobileMini:scale-110 w-full h-auto rounded-lg" alt="${title}">
        </div>
      </div>
    `;

    
    const container = document.getElementById("show");
    container.innerHTML = modal;

    const close = document.getElementById("button-close");
    const bgModal = document.querySelector("#show .bg-modal");
    const contentModal = document.querySelector("#show .content-modal");
  
    close.addEventListener("click", (e) => {
      bgModal.classList.remove("fixed");
      bgModal.classList.add('hidden');
      e.preventDefault();
    });

    bgModal.addEventListener('click', (e) => {
      if (!contentModal.contains(e.target)) {
        bgModal.classList.add("hidden");
      }
    })
  return container;
}
