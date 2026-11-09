'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../docs/analytics.js'), 'utf8');
function boot(consent, pathname = '/pt/pro.html', options = {}) {
  const handlers = {}, scripts = [];
  const window = {
    CLOUDBOOST_ANALYTICS: { measurementId: 'G-TEST123' },
    localStorage: { getItem: () => { if (options.blockStorage) throw Error('blocked'); return consent; }, setItem: () => { if (options.blockStorage) throw Error('blocked'); } },
    location: { pathname, hostname: 'getcloudboost.site', href: `https://getcloudboost.site${pathname}` },
    addEventListener() {},
  };
  let prompt;
  const document = {
    readyState: options.readyState || 'loading', documentElement: { lang: 'pt-BR' }, head: { appendChild: node => scripts.push(node) },
    body: { appendChild: node => { prompt = node; } }, getElementById: () => prompt,
    createElement: () => ({setAttribute() {},remove() {},addEventListener(name, handler) { this[name] = handler; }}), querySelectorAll: () => [],
    addEventListener: (name, handler) => (handlers[name] ||= []).push(handler),
  };
  vm.runInNewContext(source, { window, document, URL });
  function click(href, explicitEvent) {
    const link = { href, dataset: { analyticsEvent: explicitEvent } };
    for (const handler of handlers.click || []) handler({target:{closest: selector => selector==='a[href]' ? link : null}});
  }
  const events = () => (window.dataLayer || []).filter(args => args[0]==='event').map(args => args[1]);
  return { window, scripts, handlers, click, events, document, prompt: () => prompt };
}
for (const consent of [null, 'deny']) {
  const app = boot(consent); app.click('https://payhip.com/b/Jb0XO');
  assert.equal(app.scripts.length,0); assert.equal(app.handlers.click,undefined); assert.equal(app.window.dataLayer,undefined);
}
const app = boot('allow');
assert.equal(app.scripts.length,1);
assert.equal(app.window.dataLayer.find(a => a[0]==='config')[2].content_group,'pro_pricing');
app.click('https://getcloudboost.site/pt/pro.html#compare');
app.click('https://getcloudboost.site/download.html#trial','pro_trial_download_clicked');
app.click('https://github.com/victorbrandaao/CloudBoost/releases/tag/v4.4.5');
app.click('https://github.com/victorbrandaao/CloudBoost/releases/download/v4.4.5/CloudBoost_v4.4.5.dmg');
app.click('https://payhip.com/b/Jb0XO?utm_source=test');
assert.deepEqual(Array.from(app.events()),['pro_details_clicked','pro_trial_download_clicked','release_page_opened','download_clicked','buy_pro_clicked']);
assert.equal(boot('allow','/download.html').window.dataLayer.find(a=>a[0]==='config')[2].content_group,'download');
console.log('PASS: consent gating, PRO attribution and archive vs release-page clicks');

const v5 = boot('allow', '/pt/pro-v5.html');
assert.equal(v5.window.dataLayer.find(a=>a[0]==='config')[2].content_group,'pro_v5_pricing');
v5.click('https://payhip.com/b/Lu0qc?utm_source=website');
assert.deepEqual(Array.from(v5.events()), ['buy_pro_clicked']);
v5.click('https://getcloudboost.site/pt/start.html');
v5.click('https://github.com/victorbrandaao/CloudBoost/releases/download/v5.1.0/CloudBoost_v5.1.0.dmg', 'trial_download_clicked');
assert.deepEqual(Array.from(v5.events()).slice(1), ['first_session_guide_opened','trial_download_clicked','download_clicked']);
const downloadEvent = v5.window.dataLayer.filter(a=>a[0]==='event' && a[1]==='download_clicked')[0][2];
assert.equal(downloadEvent.product_generation,'5');
assert.equal(downloadEvent.link_path.includes('?'),false);
const explicit = boot('allow');
explicit.click('https://payhip.com/b/Lu0qc','buy_pro_clicked');
assert.deepEqual(Array.from(explicit.events()),['buy_pro_clicked']);
for (const lang of ['', 'pt/', 'es/']) {
 const guide = boot('allow', '/' + lang + 'start.html');
 assert.equal(guide.window.dataLayer.find(a=>a[0]==='config')[2].content_group,'first_session');
 const page = fs.readFileSync(path.join(__dirname,'../docs',lang,'pro-v5.html'),'utf8');
 assert.equal((page.match(/src="\/analytics\.js/g)||[]).length,1);
 assert.ok(page.includes('data-analytics-impression="pro_v5_price_viewed"'));
 const denied = boot('deny','/'+lang+'pro-v5.html');
 denied.click('https://payhip.com/b/Lu0qc');
 assert.equal(denied.window.dataLayer,undefined);
}
vm.runInNewContext(source, {window:v5.window,document:v5.document,URL});
assert.equal(v5.scripts.length,1);
console.log('PASS: v5 offer clicks, trial download, localized first session, consent and duplicate initialization');

const restricted = boot(null, '/pt/start.html', {blockStorage:true,readyState:'complete'});
assert.equal(restricted.scripts.length,0);
assert.ok(restricted.prompt().innerHTML.includes('/pt/privacidade.html'));
restricted.prompt().click({target:{closest:()=>({dataset:{analyticsChoice:'allow'}})}});
assert.equal(restricted.scripts.length,1);
const refused = boot(null, '/es/start.html', {blockStorage:true,readyState:'complete'});
refused.prompt().click({target:{closest:()=>({dataset:{analyticsChoice:'deny'}})}});
assert.equal(refused.scripts.length,0);
console.log('PASS: privacy links and explicit consent work when local storage is unavailable');

const discord = boot('allow');
discord.click('https://discord.gg/KdxtPQRSB');
assert.deepEqual(Array.from(discord.events()),['discord_clicked']);
const redirect = fs.readFileSync(path.join(__dirname,'../docs/discord/index.html'),'utf8');
assert.equal((redirect.match(/https:\/\/discord\.gg\/KdxtPQRSB/g)||[]).length,3);
assert.equal(redirect.includes('YMAg8tpUG'),false);
console.log('PASS: current Discord invite and canonical support redirect');
