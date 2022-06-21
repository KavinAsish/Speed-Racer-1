class Form {
  constructor() {
  this.input=createInput("")
  this.button=createButton("Proceed")
  this.title=createImg("assets/title.png")
  this.element=createElement("h1")

  }
  display(){
this.input.position(650,300)
this.button.position(700,350)
this.title.position(500,200)
this.title.size(500,70)

this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()

this.element.html("Hi Welcome "+this.input.value())
this.element.position(650,300)
})



  }
}

