(function () {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initGTM, 2500);
  });
  document.addEventListener('scroll', initGTMOnEvent);
  document.addEventListener('mousemove', initGTMOnEvent);
  document.addEventListener('touchstart', initGTMOnEvent);

  function initGTMOnEvent(event) {
    initGTM();
    event.currentTarget.removeEventListener(event.type, initGTMOnEvent); // remove the event listener that got triggered
  }

  function initGTM() {
    if (window.gtmDidInit) { return false; }
    window.gtmDidInit = true; // flag to ensure script does not get added to DOM more than once.

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    // ensure PageViews is always tracked (on script load)
    script.onload = () => {
      dataLayer.push({ event: 'gtm.js', 'gtm.start': new Date().getTime(), 'gtm.uniqueEventId': 0 });
    };
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PR7LKWJ';
    document.head.appendChild(script);
  }
})();

(
  function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l!= 'dataLayer' ? '&l=' + l :'';
    j.defer=true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR7LKWJ');


<!-- Google Tag Manager -->
<script defer>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR7LKWJ');</script>
<!-- End Google Tag Manager -->