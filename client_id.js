function() {
try {
    var trackers = ga.getAll();
    var i, len;
    for (i = 0, len = trackers.length; i < len; i += 1) {
      if (trackers[i].get('trackingId') ==={{CS_GA_UA_PropertyID}}) {
         return trackers[i].get('clientId');
      }
    }
} catch(e) {}
  return 'false';
}