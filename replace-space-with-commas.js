navigator.clipboard.readText()
  .then((clipText) => clipText = clipText.replace(/\n/g, ","))
  .then((replaced) => navigator.clipboard.writeText(replaced)
  .then((copied) => alert('copied！\n\n' + replaced))
)

//Convert to bookmarklet
//javascript:navigator.clipboard.readText().then((e=>e.replace(/\n/g,","))).then((e=>navigator.clipboard.writeText(e).then((a=>alert("copied！\n\n"+e)))));void(0);
