
import './App.css'
import Button from './Button'
function App() {

  return (
    <div>
    <div className='btn1'>
      <Button text={"Button 1"} border ="solid 1px black" width = "120px" height= "40px" textAlign = "center" paddingTop = "20px" backgroundColor= "#f5f5f5"/>
      <Button text={"Button 2"} border ="solid 1px black" width = "120px" height= "40px" textAlign = "center" paddingTop = "20px" backgroundColor= "#f5f5f5"/>
      <Button text={"Button 3"} border ="solid 1px black" width = "120px" height= "40px" textAlign = "center" paddingTop = "20px" backgroundColor= "#f5f5f5"/>
    </div>
      <div className='ground'>
      <div className='btn2'>
        <Button color="white" border ="solid 1px black" borderRadius="5px" text=" Button 1" backgroundColor="blue" width="200px" height="40px" textAlign="center" paddingTop="20px" />
        <Button color="white" border ="solid 1px black" borderRadius="5px" text="Button 2" backgroundColor="green" width="200px" height="40px" textAlign="center" paddingTop="20px" />
        <Button color="white" border ="solid 1px black" borderRadius="5px" text="Button 3" backgroundColor="orange" width="200px" height="40px" textAlign="center" paddingTop="20px" />
        <Button color="white" border ="solid 1px black" borderRadius="5px" text="Button 4" backgroundColor="red" width="200px" height="40px" textAlign="center" paddingTop="20px" />
      </div>
      <div className='btn3'>
      <Button text={"Button 1"} width = "200px" height= "40px" textAlign = "center" paddingTop = "20px" marginBottom ="5px" backgroundColor= "#D3D3D3"/>
      <Button text={"Button 2"} width = "200px" height= "40px" textAlign = "center" paddingTop = "20px" marginBottom ="5px" color= "#94cc80" borderTop="1px solid #D3D3D3" borderBottom ="1px solid #D3D3D3"/>
      <Button text={"Button 3"} width = "200px" height= "40px" textAlign = "center" paddingTop = "20px" color="#0080ff"/>
    </div>
      </div>
    </div>
    
  )
}

export default App