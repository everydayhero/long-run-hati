export const scrollToHash = (hash, document, scrollTo) => {
  if (hash) {
    let target = document.querySelector(hash)
    if (target) target.scrollIntoView()
  } else {
    scrollTo(0, 0)
  }
}

export const scrollToCurrentHash = ({ location, document, scrollTo }) => () => {
  scrollToHash(location.hash, document, scrollTo)
}
