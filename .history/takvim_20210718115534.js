import('./sinif.js')
  .then((module) => {
   console.log(module)
   var sinif = new module()
  });
