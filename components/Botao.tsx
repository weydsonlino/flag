// components/MeuBotao.js
type BotaoProps = {
    buttonName: string;
    onClick: () => void;
  }
  const Botao: React.FC<BotaoProps> = ({ buttonName }) => {
    return <button>{buttonName}</button>;
  }
  
  export default Botao;
  