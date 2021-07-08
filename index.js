function spotEachRebel(rebels) {
  let spottedRebelCalls = []
  let i = 0

  while (i < rebels.length) {
    spottedRebelCalls.push('Look! Rebel scum!')
    i++
  }

  return spottedRebelCalls
}

function seeRebelsEscape(rebels) {
  let escapedRebelCalls = []
  let i = 0

  while (rebels[i] && rebels[i]['plotArmor']) {
    escapedRebelCalls.push('Oh no! They\'re getting away!')
    i++
  }
  // do {
  // escapedRebelCalls.push('Oh no! They\'re getting away!')
  // i++
  // } while (rebels[i] && rebels[i]['plotArmor'])

  return escapedRebelCalls
}

function shootAtNothing() {
  let shotsAtNothing = []

  for (let i = 0; i < 4; i++) {
    shotsAtNothing.push('pew')
  }

  return shotsAtNothing
}

function deliverStormTroopersEscapeScene(rebels) {
  let sceneSequence = []

  const spottedRebelCalls = spotEachRebel(rebels)

  sceneSequence = sceneSequence.concat(spottedRebelCalls)

  const escapedRebelCalls = seeRebelsEscape(rebels)

  sceneSequence = sceneSequence.concat(escapedRebelCalls)

  const shotsAtNothing = shootAtNothing()

  sceneSequence = sceneSequence.concat(shotsAtNothing)

  return sceneSequence
}

module.exports = deliverStormTroopersEscapeScene
