

const notes = ['Nada', 'Docker', 'Commands', 'Docker commands'];


const regex = RegExp('docker', 'i');

console.log(notes.filter(element => regex.test(element)));