type EstruturaGameProps = {
    pais: string;
  }
  
  const EstruturaGame: React.FC<EstruturaGameProps> = ({ pais }) => {
    return (
      <div>
        <img
        src={pais}
        srcSet={pais}
        width="256"
        height="162"
        alt="Um país a ser adivinhado"></img>
      </div>
    )
  }
  
  export default EstruturaGame