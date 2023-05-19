const subjects = [
    "You",
    "Your dreams",
    "Your efforts",
    "Your journey",
    "Your potential",
  ];
  
  const verbs = [
    "have",
    "can",
    "will",
    "are capable of",
    "possess",
  ];
  
  const objects = [
    "achieving greatness",
    "making a difference",
    "creating success",
    "inspiring others",
    "overcoming challenges",
  ];
  
  const getRandomMessage = () => {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
  
    return `${randomSubject} ${randomVerb} ${randomObject}.`;
  };
  
  console.log(getRandomMessage());
  