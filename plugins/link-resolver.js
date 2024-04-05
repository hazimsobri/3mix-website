export default function (doc) {
    if (doc.isBroken) {
      return '/not-found';
    }
  
    if (doc.type === 'home') {
      return '/';
    }
    if (doc.type === 'about') {
      return '/about/';
    }
    if (doc.type === 'team') {
      return '/team/';
    }
    if (doc.type === 'web') {
      return '/web';
    }
    if (doc.type === 'job') {
      return '/job/' + doc.uid;
    }
  
    return '/not-found';
  };