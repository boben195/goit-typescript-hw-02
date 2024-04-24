interface Prop {
  message?: string;
}

const ErrorMessage: React.FC<Prop> = ({ message = "" }) => {
  return (
    <p>
      {message.length > 0
        ? message
        : "Ohooopsi Dooooopsi, we have a bullshit server. Boo"}
      
    </p>
  );
};

export default ErrorMessage;
