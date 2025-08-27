import { blogs } from "./data.js";

console.log(blogs);
export function renderBlogs() {
  const container = document.querySelector("#blog .container");
  const blogsContainer = document.createElement("div");
  blogsContainer.classList.add(
    "blogs",
    "flex",
    "gap-5",
    "flex-wrap",
    "justify-center"
  );
  for (const blog of blogs) {
    const blogContainer = document.createElement("div");
    blogContainer.classList.add(
      "blog",
      "w-96",
      "border-[2px]",
      "border-gray-200",
      "rounded-md",
      "overflow-hidden"
    );

    const blogHTML = `
        <div class="image-blog border-b-2">
              <img src="${blog.urlImage}" class="w-full" alt="${
      blog.title
    }" loading="lazy">
            </div>
            <div class="body-blog pl-3 py-3">
            <p class="text-gray-400 italic">${blog.updateAt}</p>
              <h2 class="title text-[16px] tablet:text-xl font-semibold">${
                blog.title
              }</h2>
              <p class="description text-sm tablet:text-md text-secondary mb-3 mr-1">${
                blog.description
              }</p>
              <div class="tags">
                <p class="font-light text-[10px] tablet:text-[16px]">Tags :</p>
                ${loopTags(blog.tags)}
              </div>
            </div>
            <div class="btn-container flex gap-x-4 my-4 mx-2 justify-center">
                ${
                  blog.isCode
                    ? `<button class="btn-preview px-2 py-1 text-[12px] tablet:text-[16px] bg-slate-600 text-gray-200 rounded-sm">
          <a href="${blog.urlSourceCode}" target="_blank"><i class="fa-solid fa-code"></i> Source code</a>
        </button>`
                    : `<button class="btn-preview px-2 py-1 text-[12px] tablet:text-[16px] bg-gray-400 text-white rounded-sm cursor-not-allowed" disabled>
          <i class="fa-solid fa-code"></i> Source code
        </button>`
                }
            <button class="btn-preview px-2 py-1 bg-primary text-[12px] tablet:text-[16px] rounded-sm"><a href="${
              blog.urlWeb
            }" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visited</a></button>
            </div>
        `;

    blogContainer.innerHTML = blogHTML;
    blogsContainer.appendChild(blogContainer);
  }

  container.appendChild(blogsContainer);
}

function loopTags(tags) {
  const tagColors = {
    HTML: "bg-orange-500",
    CSS: "bg-blue-500",
    JavaScript: "bg-yellow-500",
    "Express.js": "bg-[#2C2C2C]",
    "Next.js": "bg-[#111111]",
    MongoDB: "bg-[#13AA52]",
    Phyton: "bg-[#3776AB]",
  };

  return tags
    .map((tag) => {
      // Ambil warna sesuai tag, default ke bg-gray-500 jika tidak ada di mapping
      const bgColor = tagColors[tag] || "bg-gray-500";

      return `<button class="btn-tags px-[6px] py-1 mb-1 mx-[2px] text-[8px] tablet:text-[12px] rounded-sm ${bgColor}">#${tag}</button>`;
    })
    .join("");
}
