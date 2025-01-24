import { useState, useEffect } from "react";

interface EncryptedTextProps {
  text: string;
  duration?: number;
  trigger?: boolean; // Wyzwalacz do resetowania animacji
}

const EncryptedText: React.FC<EncryptedTextProps> = ({ text, duration = 300, trigger = false }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const encrypt = (finalText: string) => {
      const characters = "011001001";
      const textArray = finalText.split("");
      let currentText = Array(Math.min(textArray.length, 50)).fill("");

      let frame = 0;
      const totalFrames = Math.ceil(duration / 50);
      const intervalTime = 80;
      interval = setInterval(() => {
        frame++;
        currentText = currentText.map((_, index) =>
          frame < totalFrames ? characters.charAt(Math.floor(Math.random() * characters.length)) : textArray[index]
        );

        setDisplayedText(currentText.join(""));
        if (frame >= totalFrames) {
          clearInterval(interval!);
          setDisplayedText(finalText);
        }
      }, intervalTime);
    };

    encrypt(text);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [text, trigger]); // Animacja resetuje się na zmianę triggera

  return <span>{displayedText}</span>;
};

export default EncryptedText;
