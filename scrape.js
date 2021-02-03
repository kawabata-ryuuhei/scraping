const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const scrape = async () => {
  const res = await fetch('https://www.joyfull.co.jp/menu/grand/grill/');
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
/**/
  const nodes = document.querySelectorAll('p.ttl.icon01 font');
  const hamburg = Array.from(nodes).map((td) => td.textContent.trim());

//   all_text_list=all_text_split("\n")

//   for text in all_text_list:
//     if "ハンバーグ" in text:
  console.log(hamburg);
};
scrape();