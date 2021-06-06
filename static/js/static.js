// added from stackoverflow
// https://stackoverflow.com/questions/52540974/show-dice-element-corresponding-to-random-number-generated-on-click
$('#roll').click(() => {
  let num = Math.floor(Math.random() * 6) + 1;
  let num2= Math.floor(Math.random() * 6) + 1;
  let cls = 'odd-';
  let cls1= 'odd-';
  let sum1= num + num2;
  let m1= 96;
  if (num % 2 === 0) {
    cls= 'even-'
  }
  if (num2 % 2 === 0) {
      cls1= 'even-'
  }
  // console.log(num);
  // console.log(num2);
  // console.log(cls);
  // console.log(cls1);

  $('#die').empty();
  $('#die2').empty();
  for (let i = 1; i <= num; i++) {
    $('#die').append('<div class="dot ' + cls + i + '"></div>');
  }
  for (let i = 1; i <= num2; i++) {
    $('#die2').append('<div class="dot ' + cls1 + i + '"></div>');
  }
  switch(sum1) {
      case 2:
      m1= 96;
      console.log(m1);
      break
      case 3:
      m1= 32;
      console.log(m1);
      break
      case 4:
      m1= 69;
      console.log(m1);
      break
      case 5:
      m1= 40;
      console.log(m1);
      break
      case 6:
      m1= 148;
      console.log(m1);
      break
      case 7:
      m1= 104;
      console.log(m1);
      break
      case 8:
      m1= 152;
      console.log(m1);
      break
      case 9:
      m1= 119;
      console.log(m1);
      break
      case 10:
      m1= 98;
      console.log(m1);
      break
      case 11:
      m1= 3;
      console.log(m1);
      break
      case 12:
      m1= 54;
      console.log(m1);
      break
  }
  // player.("M${m1}.MID")

  const player = new core.Player();
const melodyCheckpoint = 'https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn';
const musicRnn = new music_rnn.MusicRNN(melodyCheckpoint);
musicRnn.initialize().then(() => {
  core.urlToNoteSequence('MIDIFiles/M1.MID').then((note_seq) => {
    console.log(note_seq)
    const quantized = core.sequences.quantizeNoteSequence(note_seq, note_seq.tempos[0].qpm);
    console.log(quantized)
    musicRnn.continueSequence(quantized, 1200, 0.8).then((new_seq) => {
      console.log(new_seq)
      const combined = core.sequences.concatenate([quantized, new_seq])
      console.log(combined)
      player.start(combined);
    })
  })
});
});

// save roll in variable
// connect variable to midi File
// pull midi file from library of files (measure from mozart)
// midi file will be passed into model
// model will generate new sequence based on primer
//
