
    var SEA = require('./root');
    try{ if(SEA.window){
      if((!navigator.userAgent.includes('AgregoreDesktop/') && !navigator.userAgent.includes('HybridDesktop/')) && !isSecureContext){
        console.warn('HTTPS needed for WebCrypto in SEA, redirecting...');
        location.protocol = 'https:'; // WebCrypto does NOT work without HTTPS!
      }
    } }catch(e){}
  