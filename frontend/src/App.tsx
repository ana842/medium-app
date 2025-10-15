import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"
import { Blog } from "./pages/Blog"
import { AddBlog } from "./pages/AddBlog"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blog/id/:id" element={<Blog/>}/>
        <Route path="/addBlog" element={<AddBlog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
