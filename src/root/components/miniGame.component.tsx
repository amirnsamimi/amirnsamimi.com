import { useEffect } from "react"

const MiniGame = () => {

    let myGameArea = {
        canvas: 
        start: () => {
            this.canvas.width = 480;
            this.canvas.height = 270;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        }
    }


    useEffect(()=>{
        myGameArea.start();
    },[])



  return (
    <div>
      
    </div>
  )
}

export default MiniGame
