function BeatlesLoops() {
var theBeatlesPlay = []
  for (let i = 0; i < musicians.length; i++) {
    theBeatlesPlay.push(`${musicians [i]} plays ${instruments [i]}`)
  }
  return theBeatlesPlay
}
