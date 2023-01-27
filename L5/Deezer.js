
  const songsList = async function () {
    try {
      let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=snarky+puppy+royal+albert+hall')
      console.log(res)
      if (res.ok) {
        let spliverah = await res.json()
        console.log('spliverah', spliverah)
  
        let listReference = document.querySelector('#listsongs')
        spliverah.data.forEach((song) => {
          listReference.innerHTML =
            listReference.innerHTML +
            `


              <div class="card m-5" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${song.title}</h5>
    <p class="card-text">${song.artist.name}</p>
  </div>
</div>
          `
        })
      } else {
        console.log('problems occurred')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  songsList()

  const songFav = async function () {
    try {
      let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=iron+sky')
      console.log(res)
      if (res.ok) {
        let fav = await res.json()
        console.log('fav', fav)
        let firstfav=fav.data[0];
        console.log(firstfav)

        
  
        let listFav = document.querySelector('#favouritesong')

          listFav.innerHTML =
          listFav.innerHTML +
            `


              <div class="card" style="width: 100%;">
              <img class="card-img-top" src="${firstfav.artist.picture}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${firstfav.title}</h5>
    <p class="card-text">${firstfav.artist.name}</p>
    <a href="${firstfav.link}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          `

      } else {
        console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  songFav()
  
  
  const albumCarousel = async function () {
    try {
      let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=atom+heart+mother')
      console.log(res)
      if (res.ok) {
        let ahm = await res.json()
        console.log('ahm', ahm)
        let atomheartmother=ahm.data[0];
        console.log(atomheartmother)


        let aHm = document.querySelector('.carousel-inner')

          aHm.innerHTML =
          aHm.innerHTML +
            `


      


<div class="carousel-item active">
                <img src="${atomheartmother.artist.picture}" class="d-block w-100" alt="Slide">
                <h5>Atom Heart Mother-Pink Floyd</h5>
            </div>
`
  
       
      } else {
        console.log('problems  occurred')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  albumCarousel()

  const albumCarousel1 = async function () {
    try {
      let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=animals+pink')
      console.log(res)
      if (res.ok) {
        let animals = await res.json()
        console.log('animals', animals)
        let animalsalbum=animals.data[0];
        console.log(animalsalbum)


        let aNa = document.querySelector('.carousel-inner')

          aNa.innerHTML =
          aNa.innerHTML +
            `


      


<div class="carousel-item ">
                <img src="${animalsalbum.artist.picture}" class="d-block w-100" alt="Slide">
                <h5>Animals-Pink Floyd</h5>
            </div>
`
  
       
      } else {
        console.log('Problems occured')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  albumCarousel1()



  const oldestAlbum = async function () {
   

    alert("mancano le date?");
  }
  


  

