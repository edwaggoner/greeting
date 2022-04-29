function Greet(name) {
  if (name === null || name === undefined) return 'Hello there!';
  if (typeof name === 'object') {
    let response = '';
    name.forEach((element) => {
      response += ', ' + element
    });
    return 'Hello' + response;
  }
  if (name === name.toUpperCase()) {
    return 'HELLO ' + name + '!';
    }
    return 'Hello, ' + name;
}