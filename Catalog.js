function catalog(s, article) {
  return s.match(new RegExp(`name.+${article}.+\/qty`,'g'))?s.match(new RegExp(`name.+${article}.+\/qty`,'g'))
  .map(v=>v.replace(/<\/name><prx>/,' > prx: $'))
  .map(v=>v.replace(/name>/,''))
  .map(v=>v.replace(/<\/prx><qty>/,' qty: '))
  .map(v=>v.replace(/<\/qty/,'')).join`\r\n`
  :'Nothing'
}
