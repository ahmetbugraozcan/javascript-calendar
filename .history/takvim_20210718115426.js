import('./sinif.js')
  .then((module) => {
    let sinif  = await import('./sinif.js');

    console.log(sinif)
  });
