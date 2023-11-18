import './App.css'
import PageTitles from './componentes/pageTitles/pageTitles'
import Button from './componentes/Button/button'
import Cards from './componentes/Cards/Cards'

function App() {

  return (
    <>
      <PageTitles mainText="About" orangeText="Me"/>
      <div class="b"> 
        
        <Button buttonText="Download CV" />
        <Button buttonText="Read me.." />
        <Button buttonText="Send" />


        <Cards figure="" cardTitle="Web Development" cardText="This is the first card text"/>

      </div>
    </>
  )
}

export default App
