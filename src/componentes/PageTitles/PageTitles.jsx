import './PageTitles.css'


function PageTitles({mainText, orangeText}) {
    return (
    <>
        <h1>{mainText} <span>{orangeText}</span></h1>
    </>
    )
}

export default PageTitles

// fazendo utilizando arrow function
// const PageTitles = () => {
// }