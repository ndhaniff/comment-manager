const fuzzy = (term, text) => {
  // Build Regex String
  var matchTerm = ".*"
  // Escape non-word character in keyword
  term.replace(/(\W)/g, "\\$1")
  // Split all the search terms
  var terms = term.split(" ")

  for (var i = 0; i < terms.length; i++) {
    matchTerm += "(?=.*" + terms[i] + ".*)"
  }

  matchTerm += ".*"
  console.log(matchTerm)
  // Convert to Regex
  // => /.*(?=.*TERM1.*)(?=.*TERM2.*).*/
  var matchRegex = new RegExp(matchTerm.toUpperCase())

  return text.toUpperCase().match(matchRegex)
}

export default fuzzy
