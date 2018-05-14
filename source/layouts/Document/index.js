import React from 'react'
import styles from './styles.css'

export default ({ title, content, state }) => (
  <html className={styles.html}>
    <head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='description' content='No matter where you live or where you ride, you can make a difference this September by cycling and fundraising for your favourite cause in the Great Southern Crossing.' />
      <meta property='og:image' content={`${process.env.BASE_URL || ''}/layouts/Document/default.jpg`} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' href='/assets/favicons/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='/assets/favicons/favicon-16x16.png' sizes='16x16' />
      <link rel='manifest' href='/assets/favicons/manifest.json' />
      <link rel='mask-icon' href='/assets/favicons/safari-pinned-tab.svg' color='#1a88cc' />
      <meta name='theme-color' content='#ffffff' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' />
      <link href='https://fonts.googleapis.com/css?family=Raleway:400,700,900|Lato:400,700,900' rel='stylesheet' type='text/css' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-shim.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-sham.min.js' />
      <script src='/leaflet.js' />
      <link rel='stylesheet' href='/leaflet.css' />
      <link rel='stylesheet' href='/vendor.css' />
      <link rel='stylesheet' href='/main.css' />
    </head>
    <body className={styles.body}>
      <main
        id='mount'
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />

      <script src='https://code.jquery.com/jquery-2.2.2.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.min.js' />
      <script
        id='initial-state'
        type='application/json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(state)
        }}
      />
      <script src='/main.js' />

      <script
        data-cfasync='false'
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
            /*<![CDATA[*/window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
            f[z]=function(){
            (a.s=a.s||[]).push(arguments)};var a=f[z]._={
            },q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
            f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
            0:+new Date};a.P=function(u){
            a.p[u]=new Date-a.p[0]};function s(){
            a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
            hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
            return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
            b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
            b.contentWindow[g].open()}catch(w){
            c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
            var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
            b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
            loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
            /* custom configuration goes here (www.olark.com/documentation) */
            olark.identify('8300-296-10-1077');/*]]>*/
          `
        }}
      />
      <noscript><a href='https://www.olark.com/site/8300-296-10-1077/contact' title='Contact us' target='_blank'>Questions? Feedback?</a> powered by <a href='http://www.olark.com?welcome' title='Olark live chat software'>Olark live chat software</a></noscript>

      <noscript><iframe src='//www.googletagmanager.com/ns.html?id=GTM-PN6K34'
        height='0' width='0' style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(

          {'gtm.start': new Date().getTime(),event:'gtm.js'}
          );var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PN6K34');
          `
        }}
      />
    </body>
  </html>
)
