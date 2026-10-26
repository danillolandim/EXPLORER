// Parágrafo "Receba todo mês...": cada palavra em destaque acende o trecho dela e mostra um ícone.
// No protótipo o estado fica salvo depois do primeiro hover, então a classe nunca é removida.
const chunks = document.querySelectorAll(".about .chunk")
const icons = document.querySelectorAll(".about .about-icon")

function reveal(index) {
  chunks[index].classList.add("revealed")
  icons[index]?.classList.add("show")
}

chunks.forEach((chunk, index) => {
  const word = chunk.querySelector("strong")
  word.addEventListener("mouseenter", () => reveal(index))
  word.addEventListener("focus", () => reveal(index))
})

// Telas de toque não têm hover: revela os trechos em sequência quando o parágrafo aparece.
const canHover = window.matchMedia("(hover: hover)").matches

const aboutObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) return
    chunks.forEach((_, index) => setTimeout(() => reveal(index), index * 600))
    aboutObserver.disconnect()
  },
  { threshold: 0.6 }
)

if (!canHover) {
  aboutObserver.observe(document.querySelector(".about p"))
}

// Kit e preços trocam do estado "before" para o "after" quando entram na tela (Smart Animate do Figma).
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add("is-visible")
      sectionObserver.unobserve(entry.target)
    })
  },
  { threshold: 0.35 }
)

document.querySelectorAll("[data-observe]").forEach((section) => sectionObserver.observe(section))
