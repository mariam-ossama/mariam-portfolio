type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="btn-primary"
    >
      {text}
    </button>
  );
}

export function ButtonSecondary({text, onClick}: ButtonProps) {
    return (
        <button className="btn-secondary" onClick={onClick}>
              {text}
            </button>
    );
}