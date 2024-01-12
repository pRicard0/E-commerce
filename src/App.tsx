import Header from "./components/Header"
import Product from "./components/Product"
import TextArea from "./components/TextArea"

function App() {

  return (
    <div className="w-full min-h-screen lg:px-36 lg:box-border overflow-x-hidden lg:mb-4">
      <Header></Header>
      <div className="lg:mx-productMarginLeft lg:mt-productMarginTop lg:flex lg:space-x-imgTextAreaSpacing lg:mr-12">
        <Product></Product>
        <TextArea></TextArea>
      </div>
    </div>
  )
}

export default App
