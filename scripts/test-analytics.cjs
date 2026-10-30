'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../docs/analytics.js'), 'utf8');
function boot(consent, pathname = '/pt/pro.html') {
  const handlers = {}, scripts = [];
  const window = {
    CLOUDBOOST_ANALYTICS: { measurementId: 'G-TEST123' },
    localStorage: { getItem: () => consent },
    location: { pathname, hostname: 'getcloudboost.site', href: `https://getcloudboost.site${pathname}` },
    addEventListener() {},
  };
  const document = {
    documentElement: { lang: 'pt-BR' }, head: { appendChild: node => scripts.push(node) },
    createElement: () => ({}), querySelectorAll: () => [],
    addEventListener: (name, handler) => (handlers[name] ||= []).push(handler),
  };
  vm.runInNewContext(source, { window, document, URL });
  function click(href, explicitEvent) {
    const link = { href, dataset: { analyticsEvent: explicitEvent } };
    for (const handler of handlers.click || []) handler({target:{closest: selector => selector==='a[href]' ? link : null}});
  }
  const events = () => (window.dataLayer || []).filter(args => args[0]==='event').map(args => args[1]);
  return { window, scripts, handlers, click, events };
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
assert.deepEqual(Array.from(app.events()),['pro_details_clicked','pro_trial_download_clicked','release_page_opened','download_clicked','buy_pro_clicked','pro_checkout_opened']);
assert.equal(boot('allow','/download.html').window.dataLayer.find(a=>a[0]==='config')[2].content_group,'download');
console.log('PASS: consent gating, PRO attribution and archive vs release-page clicks');
