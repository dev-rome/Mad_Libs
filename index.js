function madLibs() {
  const storyOne = "Story One";
  const storyTwo = "Story Two";

  const player = prompt("Would you like Story One or Story Two?");

  if (player === storyOne) {
    const adjective = prompt("Type an adjective");
    const place = prompt("Type a general place");
    const vehicleName = prompt("Type a vehicle name (plural)");
    const gameName = prompt("Type the name of a game");
    const pluralNoun = prompt("Type a plural noun");
    const verbIng = prompt("Type an 'ing' verb");
    const verbIngTwo = prompt("Type another 'ing' verb");
    const foodName = prompt("Type a food name (plural)");
    const sport = prompt("Type the name of a sport");
    const verbIngthree = prompt("Type another 'ing' verb");
    const emotion = prompt("Type an emotion");
    const number = Number(prompt("Type a number"));

    const displayStoryOne = `A vacation is when you take a trip to some ${adjective} place near an amazing ${place}. 
    A good vacation place is one where you can ride ${vehicleName} or play ${gameName} or go hunting for ${pluralNoun}.
    I like to spend my time ${verbIng} or ${verbIngTwo}. When parents go on a vacation, they spend their
    time eating three ${foodName} a day. Usually, fathers play ${sport}, and mothers spend their
    time ${verbIngthree}. Adults need vacations more than kids because adults are always very ${emotion}
    because they have to work ${number} hours every day all year just to afford their vacations!`

    document.write(displayStoryOne);

  } else if (player === storyTwo) {
    const adjectiveTwo = prompt("Type an adjective");
    const famousPlace = prompt("Type a famous place");
    const pluralNounTwo = prompt("Type a plural noun");
    const adjectiveThree = prompt("Type another adjective");
    const foodTwo = prompt("Type a food (plural)");
    const emotionTwo = prompt("Type an emotion");
    const verbIngFour = prompt("Type an 'ing' verb");
    const commonPlace = prompt("Type a common plac");
    const adjectiveFour = prompt("Type another adjective");
    const noun = prompt("Type a noun");
    const adjectiveFive = prompt("Type another adjective");
    const nounTwo = prompt("Type another noun");
    const familyMember = prompt("Type a family member");
    const adjectiveSix = prompt("Type another adjective");
    const displayStoryTwo = `Today we took a ${adjectiveTwo} fieldtrip to ${famousPlace}. They're famous for making ${pluralNounTwo} and for cooking ${adjectiveThree} ${foodTwo}. Eating all that food made me 
    feel ${emotionTwo}. Next we enjoyed the local tradition of ${verbIngFour} in the middle of the ${commonPlace}! Finally, we went shopping for souvenirs. I bought a ${adjectiveFour} ${noun} for
    myself, and a ${adjectiveFive} ${nounTwo} for my favorite ${familyMember}. I'll definitely never forget this ${adjectiveSix} trip!`

    document.write(displayStoryTwo);
  } else {
    alert("Please refresh page and choose a story");
  }

}

madLibs()