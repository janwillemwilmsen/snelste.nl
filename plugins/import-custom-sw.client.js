// Test of servericeworker wel werkt:
  console.log('serviceworker werkt π');

  // install event
  self.addEventListener('install', evt => {
    console.log('service worker geinstalleerd π');
  });
  
  // activate event
  self.addEventListener('activate', evt => {
    console.log('service worker geactiveerd π₯ π π π ππππ');
  });
  
  // fetch event
  self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    console.log("π π π πΈπΊππ΄ππΆπ΄π»πΈπΉπΊ π π π ");
    // console.log("π π π πΈπΊππ΄ππΆπ΄π»πΈπΉπΊ π π π ","background-color:#c0282d;text-align:center;font-weight: bold padding:0px;color:#fdf7f7;");

  });



