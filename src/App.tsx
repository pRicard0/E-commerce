import Header from "./components/Header"
import Product from "./components/Product"
import TextArea from "./components/TextArea"

function App() {

  return (
    <div className="w-full min-h-screen lg:px-36 lg:box-border">
      <Header></Header>
      <div className="lg:mx-12 lg:mt-20 lg:flex lg:space-x-imgTextAreaSpacing">
        <Product></Product>
        <TextArea></TextArea>
      </div>
    </div>
  )
}

export default App
