class Cylon{
  constructor(model){
  this.model=model
  }
  attack(){
  return "Destroy all humans!"
  }
}

class HumanSkin extends Cylon{
  constructor(model){
  super(model)
  this.model=model
  }
  infiltrate(){
  return "Infiltrate the colonies"
  }
}
