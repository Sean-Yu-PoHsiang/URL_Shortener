function copyText() {
  let TextToCopy = document.querySelector('#myInput')
  TextToCopy.setAttribute('type', 'text') // 不是 hidden 才能複製
  TextToCopy.select()

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    alert('Copied ' + msg);
  } catch (err) {
    alert('Oops, unable to copy');
  }

  /* unselect the range */
  TextToCopy.setAttribute('type', 'hidden')
  window.getSelection().removeAllRanges()
}