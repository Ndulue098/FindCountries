"use strict";
const grid=document.querySelector(".grid")

const countryDataContainer=document.querySelector(".aside-div")
const back=document.querySelector(".aside-b");


const border=document.querySelector(".border-l")

const dropDown=document.querySelector(".title-continent")
const svgUp=document.querySelector(".drop-svg")
const continent= document.querySelector(".continents")

const darkmode=document.querySelector(".dark-mod")
const theme=document.querySelector(".change")
const lightIcon=document.querySelector(".light-icon");
const darkIcon=document.querySelector(".dark-icon");
// const flag=document.querySelectorAll(".flag")
const search=document.querySelector(".search")
const btnPagination=document.querySelector(".btn-bottom");

// const animate=document.querySelector(".anime")
// console.log(animate); 

const errorContainer=document.querySelector(".error")
const errorMessage=document.querySelector(".error-body")
const errorText=document.querySelector(".errortext")


const navigation=document.querySelector(".nav-co")

const countryData = {
    AllTheCountry:[],
    page:1,
    countries:{},
    countryINfo:{},
};


const searchAnimation=`
<div id="wifi-loader" class="anime" style="position: absolute;">
            <svg class="circle-outer" viewBox="0 0 86 86">
              <circle class="back" cx="43" cy="43" r="40"></circle>
              <circle class="front" cx="43" cy="43" r="40"></circle>
              <circle class="new" cx="43" cy="43" r="40"></circle>
            </svg>
            <svg class="circle-middle" viewBox="0 0 60 60">
              <circle class="back" cx="30" cy="30" r="27"></circle>
              <circle class="front" cx="30" cy="30" r="27"></circle>
            </svg>
            <svg class="circle-inner" viewBox="0 0 34 34">
              <circle class="back" cx="17" cy="17" r="14"></circle>
              <circle class="front" cx="17" cy="17" r="14"></circle>
            </svg>
            <div class="text" data-text="Searching"></div>
          </div> 
`

const insert=`
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
<div class="card">
<div class="cover"></div>
<div class="info">
  <ul class="listA">
    <h2 class="square"></h2>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </ul>
</div>
</div>
   
`



const MarkUP=function(){
        const currentPage=countryData.page;

         const numPage=Math.ceil(countryData.AllTheCountry.length/20)
        console.log(numPage);
      console.log(countryData.AllTheCountry);
        // the first page
        console.log("the first page");
        if(currentPage===1 && numPage>1){
            return ` 
            <button data-goto="${currentPage+1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage+1}</span>
            <svg
              class="btn-R"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#3c77d8"
              viewBox="0 0 256 256"
            >
              <path d="M176,128,96,208V48Z" opacity="0.2"></path>
              <path
                d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"
              ></path>
            </svg>
          </button>`
        }

        // for the last page
        if(currentPage===numPage){
            console.log("for last page");
            return `
            
            <button data-goto="${currentPage-1}" class="btn--inline pagination__btn--prev">
            <svg
              class="btn-l"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#3c77d8"
              viewBox="0 0 256 256"
            >
              <path d="M160,48V208L80,128Z" opacity="0.2"></path>
              <path
                d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"
              ></path>
            </svg>
            <span>Page  ${currentPage-1}</span>
          </button>`
        }

        // for the other 
        if(currentPage<numPage){
          console.log("this for other pages");
            return `<button data-goto="${currentPage-1}" class="btn--inline pagination__btn--prev">
            <svg
              class="btn-l"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#3c77d8"
              viewBox="0 0 256 256"
            >
              <path d="M160,48V208L80,128Z" opacity="0.2"></path>
              <path
                d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"
              ></path>
            </svg>
            <span>Page  ${currentPage-1}</span>
          </button>
          <button data-goto="${currentPage+1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage+1}</span>
            <svg
              class="btn-R"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#3c77d8"
              viewBox="0 0 256 256"
            >
              <path d="M176,128,96,208V48Z" opacity="0.2"></path>
              <path
                d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"
              ></path>
            </svg>
          </button>
          `
        }

        // for page 1
        // console.log("this is for page 1");
        else{
          return ""
        }
                
    } 
    

///////////////////////////////////////
// 1-----to start a new project
//      npm init
// ----->it will create package.json file
//------>remove the main
//------>on the script do:
// -----------"start":parcel index.html
//------------"build":parcel build index.html
//2------install parcel
//      npm install --save-dev parcel@2
//------>it will create the node_modules file and package-lock.json
//3-----install sass
//      npm install --save-dev sass
//4-----run the build command
//      npm start
//------> it will create the dist folder
//5-----add polifill
//      npm i core-js regenerator-runtime

//----------window.location:: gives u the url



// to deploy 
////------> 1st delete the parcel cache and the dist folder
////------> on the build in the package.json file
//       parcel build index.html --dist-dir ./dist
//------> npm run build
//      it will create the parcel-catche and the dist folder
//      this is the folder that will be deployed 
//      to upload it drag the folder and drop 
//------> now that we have git 
//      git init
///----->withe the git init we created a local repository
//      git config --global user.name Ndulue47

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// BASICS OF GIT 
/* 
in the git ignore file we can put all the folder and file we want git to ignore 
----->we should ignore all the file below
/////node_modules
/////dist
/////.parcel-cache

/////----->git status
      tell us the untracked file 
/////----->git add -A
      for them to be tracked we do or to add them to the staging area
----->git commit -m "initial commit" 
      to commit the file, like a snapshort 
----->git commit -m "new fiture"
// take not that after we added our file to the staging area 
// if we type any thing we will need to do this again git add -A

// if u have already commited and u made an error 
// u can undo what ever changes u have made with
// git reset --hard HEAD

// if u commit your code with a bug u can do 
----->git log 
      to seee the previous commit
      **then u can copy the initial commit id 
      **then type :q to quit the terminal
      finally do ------> git reset --hard then the id u copied

// instead u should u 
----->git branch 
      ** it will list all the branches u have 
      ** to close u need to write q
  // now we can create a new branch which will be the copy fot the master branch
  to develop new code without affecting the old code we have before
  **(to create new branch)-----> git branch new-feature 
      ** to switch to the new branch do 
    -----> git checkout new-feature
      **--->then git add --A
      **---> git commit -m "Added new welcome feature"
      ** we have created a new feature 
  
  ** to switch back to the master branch 
  ------->git checkout master
  then the changes will go away 
  to merge the master branch to the new featur branch we do 
  ------> git merge new-feature


///////// creating a new repository on git hub
------> click on the + icon 
------> then new repository 
------> give it a name
------> make it private so no one will be able to see it 
------->creating repository
---------->in the  push an existinf repository from the command line section
------> copy the first code 
-------> and past in ur terminal 
-------> so u can push ur code to the branch on the link with...the name origine
////////to push use >
-------> git push origin master
------->

////////to start working on another computer 
////////u will need to pull the code from git hub
-------> go the the code 
-------> copy the url link 
------->  origin master pull git
------->

// then copy ur build on the package .json 
    
*/






class Appi{
  #data;
  #filteredData;
  constructor(){
      this._listernes()
      this.countryApp()
  }


    getJson(url, errorMessage = "something went wrong ") {
      return fetch(url).then((response) => {
        
       if (!response.ok) {
         throw new Error(`${errorMessage}`);
       }
       return response.json();
      });
    
    };
 
    async searchResult(search){
      try{
       const response= await this.getJson(`https://restcountries.com/v3.1/name/${search}`,"No country found!!")

      if(response){ 
        grid.innerHTML="" 
        errorContainer.classList.add("hidden")
      }
      this.renderCountries(response)

      }catch(error){
        grid.innerHTML=""
        btnPagination.innerHTML=""  
        errorContainer.classList.remove("hidden")
        
        if(error.message==="Failed to fetch"){
          errorText.textContent=`${error.message}, check your internet connection and try again`
        }
        
        errorText.textContent=`${error.message}`

        console.log(error); 
      }
    }

     async countryApp(region=""){
      
      try{
      this.#data=await this.getJson(`https://restcountries.com/v3.1/all`,"something went wrong!!, check your internet connection and try again")
       
  
      let filteredData=this.#data.filter((el)=>{
        return el.region===region 
      }) 
      const newData=filteredData.length>0?filteredData:this.#data


      countryData.AllTheCountry=newData


      if(this.#data){ 
        grid.innerHTML="" 
        errorContainer.classList.add("hidden")
      }


      btnPagination.innerHTML= MarkUP()

      this.#filteredData=this.getSearchResultPage()

      // this.renderCountries(newData)
      this.renderCountries(this.#filteredData)

      }catch(error){
        grid.innerHTML=""
        btnPagination.innerHTML=""  
        errorContainer.classList.remove("hidden")
        
        if(error.message==="Failed to fetch"){
          errorText.textContent=`${error.message}, check your internet connection and try again`
        }
        
        errorText.textContent=`${error.message}`

      }  
    }

    // this will returned the cut pages THE PAGINATIONS
    getSearchResultPage(page=countryData.page){
      countryData.page=page;
  
      const start=(page-1)*20;
      const end=page*20;
       
      if(countryData.AllTheCountry.slice(start,end).length===0)return
      return countryData.AllTheCountry.slice(start,end);
    }

    // THIS IS THE PAGINATION BUTTONS 
    paginationButton(e){
        e.preventDefault()

        navigation.scrollIntoView({behavior:"smooth"})

        const btn=e.target.closest(".btn--inline")
        if(!btn)return
        
        const gotoPage=+btn.dataset.goto
         
        this.#filteredData=this.getSearchResultPage(gotoPage)
        
        
        if(this.#filteredData.length===0)return

        this.renderCountries(this.#filteredData)

        btnPagination.innerHTML="";
        btnPagination.innerHTML= MarkUP()
    }

     renderCountries(data){
      grid.innerHTML="" 

      data.map((el,i) => {
        countryData.countries.name=el.name.common
        countryData.countries.population = el.population.toLocaleString('en-US');;
        countryData.countries.region = el.region;
        countryData.countries.id=el.area;
        countryData.countries.capital = el.capital;
        countryData.countries.flag= el.flags.svg


        const {name,population,region,id,capital,flag}=countryData.countries
        const countryTab = `
          <a href="#${el.cca3}" class="countries"> 
          <div class="blur-load">
            <img
              class="flag" 
              src="${flag}"
              loading="lazy"
              alt=""
            />
            <!-- <div class="img-con"></div> -->
          </div>
          <div class="countey-details">
            <h2 class="country-name" data-numb="${id}">${name}</h2>
            <ul class="country-list">
            
              <li><span>population:</span>${population}</li>
              <li><span>Region:</span>${region}</li>
              <li><span>capital:</span>${capital}</li>
            </ul>
          </div>
        </a>
          `;
          grid.insertAdjacentHTML("afterbegin",countryTab)          
      });

    }

    _showCountryInfo(){
      const id = window.location.hash.slice(1); 

      console.log(id);   
      const countryInfo=this.#data.find((el)=>{

        if(el.cca3===id){ 
          return el     
        } 
      })   

      console.log(countryInfo);

      if(!countryInfo){
        console.log("no result found");
      }

      function hid(){  
      countryDataContainer.classList.add("hidden")
      grid.classList.remove("hidden"); 
     }

      id?console.log("value de oh"):console.log("no value for here");
      id?this.renderCountriesInfo(countryInfo):hid();
      this.renderCountriesInfo(countryInfo)
    }


    renderCountriesInfo(countryInfo){
        countryData.countryINfo.nativeName=countryInfo.name.nativeName?Object.values(countryInfo.name?.nativeName)[0].common:Object.values(countryInfo.name)[0] 
        countryData.countryINfo.population=countryInfo.population.toLocaleString('en-US')
        countryData.countryINfo.region=countryInfo.region
        countryData.countryINfo.subregion= countryInfo.subregion;
        countryData.countryINfo.capital=countryInfo.capital?countryInfo.capital:""
        countryData.countryINfo.domain=`.${countryInfo.cca2.toLowerCase()}`
        countryData.countryINfo.currencies=countryInfo.currencies?Object.values(countryInfo.currencies)[0].name:"Antarctic dollar"
        countryData.countryINfo.languages=countryInfo.languages?Object.values(countryInfo.languages).join(", "):"No native language"
        countryData.countryINfo.flags=countryInfo.flags.svg
        countryData.countryINfo.commonName=countryInfo.name.common
        countryData.countryINfo.regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

      const {nativeName,population,region,subregion,capital,domain,currencies,languages,flags,commonName,regionNamesInEnglish}=countryData.countryINfo

      let valu
      if(countryInfo.borders){
        valu= countryInfo.borders.map((el)=> {
          console.log(el);
          return this.#data.find((ca)=> ca.cca3===el);
        });
        console.log(valu);      
      }
 


     const displayCountryData=`
      <aside class="aside-c">
      
      <div class="aside-b">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="#3c77d8"
        viewBox="0 0 256 256"
      >
        <path
          d="M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"
        ></path>
      </svg>
      <p>back</p>
    </div>
    
    <div class="img-aside">
      <img class="flag-aside" src="${flags}" loading="lazy" alt="country flag" />
    </div>
    
    <div class="country-info"> 
      <h2 class="countryHead">${commonName}</h2>
    
      <ul class="country-data">
        <li>Native Name: <span>${nativeName}</span></li>
        <li>Population: <span>${population}</span></li>
        <li>Region: <span>${region}</span></li>
        <li>Sub Region: <span>${subregion}</span></li>
        <li>Capital: <span>${capital}</span></li>
        <li>Top level domain: <span>${domain}</span></li>
        <li>Currencies: <span>${currencies}</span></li>
        <li>languages: <span>${languages}</span></li>
      </ul>
    
      <div class="border-detail">
        <p class="border-h">border countries:</p>
        <div class="border-l">
        ${
        countryInfo.borders?valu.map((el)=>{
          console.log(el);
          return `<a href="#${el.cca3}"> ${el.name.common}</a>`

           }):""

       }
      
        </div> 
        
      </div>  
    </div>  
    </aside>
      `
      countryDataContainer.classList.remove("hidden");
      countryDataContainer.innerHTML="" 
      countryDataContainer.insertAdjacentHTML("afterbegin",displayCountryData)
      grid.classList.add("hidden");  

    }


    /////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
    _dropDownContenents(e){
      const data=e.target.closest(".title-continent-t");
      svgUp.classList.toggle("up")  
      continent.classList.toggle("hidden") 
    }

    // the continent list 
    _continentData(e){
      const data=e.target;
      if(!data.classList.contains("c"))return
      continent.classList.toggle("hidden") 
      svgUp.classList.toggle("up")  
      grid.innerHTML=insert
      errorContainer.classList.add("hidden")   
      // grid.innerHTML="" 

      this.countryApp(data.textContent)
    }

     // this is for the borders data and the back
     _countryDataContainer(e){
          const previous=e.target.closest(".aside-b");

        if(!previous)return
      let x= window.location.href.split('#')[0]
      console.log(x);
      console.log(window.location.href);
      history.replaceState(null, null, x);
      console.log(previous);
         countryDataContainer.classList.add("hidden")
          grid.classList.remove("hidden"); 
     }
    
     // this is for the search section
      _searchSection(e){
      e.preventDefault()
      const query= search.querySelector(".search__field").value.trim()
      search.querySelector(".search__field").value="" 
      if(+query || query==="" || query===" " ){
        search.querySelector(".search__field").value="" 
        console.log("no numbers allowed");
        return
      } 
      grid.innerHTML="" 
      btnPagination.innerHTML=""
      grid.innerHTML=searchAnimation
      errorContainer.classList.add("hidden")
      
      // animate.style.display="flex"   
      this.searchResult(query)  
       console.log(query);
    }

    _darkmode(e){
      if(!e.target.classList.contains("dark-mod"))return
      theme.classList.toggle("color")
      lightIcon.classList.toggle("transperent");
      darkIcon.classList.toggle("transperent");
    }

    _listernes(){
      // grid.addEventListener("click",this._getCountryInfo.bind(this));
      dropDown.addEventListener("click",this._dropDownContenents.bind(this))
      continent.addEventListener("click",this._continentData.bind(this))
      countryDataContainer.addEventListener("click",this._countryDataContainer.bind(this))
      search.addEventListener("submit",this._searchSection.bind(this))
      darkmode.addEventListener("click",this._darkmode.bind(this))
      // this is for the pagination clicks
      btnPagination.addEventListener("click",this.paginationButton.bind(this))
      window.addEventListener('hashchange',this._showCountryInfo.bind(this));
//-----------then listen for the load event
      window.addEventListener('load', this._showCountryInfo.bind(this));
    }
}




const run=new Appi()



































































































































