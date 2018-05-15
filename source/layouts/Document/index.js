import React from 'react'
import stringify from 'json-stringify-safe'
import styles from './styles.css'

const renderStyles = (styles) => (
  styles.map((style, index) => <link key={index} rel='stylesheet' href={style} />)
)

const renderScripts = (scripts) => (
  scripts.map((script, index) => <script key={index} src={script} />)
)

export default ({ title, content, state, assets }) => {
  const stylesheets = assets.filter((asset) => asset.match(/.css$/))
  const scripts = assets.filter((asset) => asset.match(/.js$/))

  return <html>
    <head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-shim.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-sham.min.js' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css' />
      <script src='https://use.typekit.net/bie7ufg.js'></script>
      <script
        dangerouslySetInnerHTML={{
          __html: 'try{Typekit.load({ async: true });}catch(e){}'
        }}
      />
      {renderStyles(stylesheets)}
    </head>
    <body className={styles.body}>
      <main
        id='mount'
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />

      <script
        id='initial-state'
        type='application/json'
        dangerouslySetInnerHTML={{
          __html: stringify(state)
        }}
      />
      <script src='https://code.jquery.com/jquery-2.2.2.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.min.js' />
      {renderScripts(scripts)}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <!-- Google Tag Manager -->
          <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KM4PPR"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KM4PPR');</script>
          <!-- End Google Tag Manager -->`
        }}
      />
      <script src='https://cdn.optimizely.com/js/41869106.js' />
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <!-- Crazy Egg -->
          <script type="text/javascript">
          setTimeout(function()
          {var a=document.createElement("script"); var b=document.getElementsByTagName("script")[0]; a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0017/8322.js?"+Math.floor(new Date().getTime()/3600000); a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}
          , 1);
          </script>`
        }}
      />
    </body>
  </html>
}
