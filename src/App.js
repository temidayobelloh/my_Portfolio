import NavBar from './Components/NavigationBar/navbar';
import Home from './Components/Home/home';
import Services from './Components/Services/services';
import Skills from './Components/MySkills/skills';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div>
      <div>
      <NavBar/>
      <Home/>
      <Services/>
      <Skills/>
      <Footer/>
      </div>
    </div>
  );
}
export default App;
