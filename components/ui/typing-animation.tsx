"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingAnimation({
  words,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
         fullText.substring(0, text.length + (isDeleting ? -1 : 1))
      );

      setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTypingDelay(pauseDuration);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500); // pause before tying next word
      }
    };

    timer = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseDuration, typingDelay]);

  return (
    <span className="inline-flex items-center">
      <span className={className}>{text || "\u200b"}</span>
      <span className="animate-pulse ml-1 w-[3px] h-[0.9em] bg-primary rounded-full animate-caret-blink"></span>
    </span>
  );
}
