// ! Yeni Başlayanlar İçin REACT : 13 : MAP Fonksiyonu, Listelemek, Neden KEY Kullanırız? Arin Yazilim channel
// 1- her seyden once bir react projesinde index.js olmali ve react,react dom import edilmeli.
// ?  import React from 'react',
// ?  import ReactDom from 'react-dom'
// !  ReactDOM.render(<App />, document.getElementById('root'));

// 2- Hocam bize gelen api deki bilgileri paylasmak icin ilk once Ana(Parent) classda objeyi movies={this.state.movies} movies  degiskenine atadi ve sonra
// ? =>>    <MovieList movies={this.state.movies} />
// ? =>>    mapliyoruz  {this.props.movies.map((movie) =>(....codlar))}
// ? =>>    onu childrenda chagirdi yani Movies.jsde
// todo:    src={movie.imageURL},  {movie.name}, {movie.overview}, {movie.rating}.

// 3- key olay key koymamizin yada vermemizin sebebi her hangi bir objede degisiklik yapildiginda ornek: silindiginde reactin hangi objenin silindiginin bilmesini sagliyor ornek: ide gore mesala.
// ? =>> <div className="col-lg-4" key={movie.id}>   verdik
// ? =>> ve sonra class componenti functional component yaptik cunku state kullanmadik props kullandik ve o yuzden biz fonksiyonel koponente cevirdik ve  artik bize this lazim degil. o yuzden artik {props.movies.map((movie) =>(....codlar))} this kaldiririz
/********************************************************************************************************************************************* */

// ! Yeni Başlayanlar İçin REACT : 14 : onClick Event, "Item" Silmek
// 1-event atiyoruz delete butonuna onClick={handleClick}  handleClick isminde bir fonksiyon ismi veriyoruz ve bu fonksiyonu yukarda yaziyoruz
// 2- onClick={handleClick}  dikkat ederseniz handClick "()invoksuz" cunku eger biz onClick={handleClick()} invok atarsak sayfa her return edildiginde bu fonksiyonu cagirir. invok atamamanin sebebi bizim istedigimiz zaman bu fonksiyonun calismasidir.
// 3 - (event) bunlarin verme sebebimiz eger evnetlerle calisirsak normalde sart degil
// ?  function handleClick(event){console.log(event)}  yada e de verebiliriz
// todo: yada fonksyion tanimlamdan her seyi " onClick={() => console.log("hello")} " callback ile de yapabilirz bana kalirsa fonksiyon yazmak mantikli
// 4-sonra biz App.jsde filimleri silmek icin deleteMovie adinda calback fonksiyon yazdik ve bize artik handleClick adinda fonksiyona gerek kalmadi.  onClick={(event)=> props.deleteMovieProp(movie)} diye cagirdik
/********************************************************************************************************************* */

// !Yeni Başlayanlar İçin REACT : 15 : Controlled Component, State Güncelleme, Prevent Default
// 1- inputun valuesini almak. nerde cagirdiysak orayi ilgilendirir
// ? =>> <input onChange={(event) => console.log(event.target.value)} />
// 2- input valuesina ulastik ve listeyi guncellemek icin bir state olusturduk ve inputdan gelen degisikler sonucunda state guncellenmesini istiyoruz.
// ? =>> <input onChange={(event) => this.setState({searchQuery: event.target.value})}/>
// 3- sonra biz inputa preventdefault verdik
// ? =>> <form onSubmit={(event) => event.preventDefault()}> boyle yapsakda olur yada bir fonksiyon tanimlariz
// ? =>> <form onSubmit={this.handleFormSubmit}> ve ayri bi fonksiyon yazariz.
/********************************************************************************************************************************* */

// ! Yeni Başlayanlar İçin REACT : 16 : "ITEM" Aramak - Search
// ? =>> SearchBar.js den  SearchBar steyti kaldirdik ve onu datanin icine attik ve sonrada SearchBardaki inputdan
// todo: onChange={(event) =>this.setState({ searchQuery: event.target.value })} bunuda sildik artik onun yerine props verdik.
// ilk once bir tane property olusturduk SearchQuery: "" diye sonra bu propertyie bir state tanimladik  ve bu statide biz searchMovie() fonksiyonun icinde yazdik . searchQueryi de state icinde inputdan gelen value esitledik. sonrada filterMovies() icinde value ile filimlerin isimlerini karsilastirdik ve bir fonksiyon yazdik filterMovies adinda ve onlardida props araci ile yerlerine koyduk.
