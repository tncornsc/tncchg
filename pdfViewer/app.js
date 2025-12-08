// ====== PDF LIST DATA ======
const pdfList = [
  { name: "Example Document 1", file: "example1.pdf" },
  { name: "Example Document 2", file: "example2.pdf" },
  { name: "Example Document 3", file: "example3.pdf" }
];

const app = document.getElementById("app");
const title = document.getElementById("page-title");
const backLink = document.getElementById("back-link");

// ====== ROUTER ======
function router() {
  const hash = location.hash.replace("#", "");
  const match = pdfList.find(p => p.file === hash);

  if (!hash || !match) {
    showList();
  } else {
    showPDF(match);
  }
}

// ====== LIST VIEW ======
function showList() {
  title.textContent = "PDF Library";
  backLink.classList.add("hidden");

  app.innerHTML = `
    <div class="pdf-list">
      ${pdfList.map(pdf => `
        <div class="pdf-item">
          <h3>${pdf.name}</h3>
          <a href="#${pdf.file}">Open PDF</a>
        </div>
      `).join("")}
    </div>
  `;
}

// ====== PDF VIEW ======
function showPDF(pdf) {
  title.textContent = pdf.name;
  backLink.classList.remove("hidden");

  app.innerHTML = `
    <p>
      <a href="./pdfs/${pdf.file}" download>⬇ Download PDF</a>
    </p>

    <button id="toggleBtn">Show PDF</button>

    <div id="viewer" class="hidden">
      <iframe src="./pdfs/${pdf.file}"></iframe>
    </div>
  `;

  const btn = document.getElementById("toggleBtn");
  const viewer = document.getElementById("viewer");

  btn.onclick = () => {
    viewer.classList.toggle("hidden");
    btn.textContent = viewer.classList.contains("hidden")
      ? "Show PDF"
      : "Hide PDF";
  };
}

// ====== EVENTS ======
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
