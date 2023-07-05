function firstNonRepeatedCharacter(text: string) {
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);
    if (text.indexOf(c) == i && text.indexOf(c, i + 1) == -1) {
        console.log(c);
      return c;
      
    }
  }
  console.log("");
  return null;
}
firstNonRepeatedCharacter("terence")
