import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Intro.css';

const lines = [
  { text: `Hi, I'm <span style="color: var(--accent)">Jung Woo Hyun</span>`, html: true },
  { text: 'Creative Frontend Developer' },
  { text: '"쓰는 코드가 나를 말한다."', small: true }
];

export default function Intro({ onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // 텍스트 애니메이션
    const spans = container.querySelectorAll('span[data-letter]');
    gsap.to(spans, {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      stagger: 0.05,
      delay: 0.5,
      duration: 1.2,
      ease: 'power3.out'
    });

    // 텍스트 사라짐 애니메이션
    gsap.to(spans, {
      x: -100,
      opacity: 0,
      filter: 'blur(8px)',
      stagger: 0.05,
      delay: 4,
      duration: 1.2,
      ease: 'power3.in'
    });

    // 전체 인트로 위로 이동
    gsap.to(container, {
      y: '-100vh',
      delay: 7.5,
      duration: 1.5,
      ease: 'power3.inOut',
      onComplete
    });
  }, [onComplete]);

  return (
    <div className="intro" ref={containerRef}>
      {lines.map((line, i) => (
        <div className={`line ${line.small ? 'small' : ''}`} key={i}>
          <TextLine line={line} />
        </div>
      ))}
    </div>
  );
}

function TextLine({ line }) {
  const parser = new DOMParser();
  const content = line.html
    ? [...parser.parseFromString(line.text, 'text/html').body.childNodes]
    : [document.createTextNode(line.text)];

  return content.map((node, idx) => {
    if (node.nodeType === 3) {
      return node.textContent.split('').map((char, i) => (
        <span
          key={`${idx}-${i}`}
          data-letter
          style={{
            display: 'inline-block',
            transform: 'translateX(100px)',
            opacity: 0,
            filter: 'blur(8px)'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (node.nodeType === 1) {
      const style = node.getAttribute('style');
      return (
        <span key={idx} style={parseStyle(style)}>
          {node.textContent.split('').map((char, i) => (
            <span
              key={`${idx}-${i}`}
              data-letter
              style={{
                display: 'inline-block',
                transform: 'translateX(100px)',
                opacity: 0,
                filter: 'blur(8px)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      );
    }
    return null;
  });
}

function parseStyle(styleStr = '') {
  return styleStr
    .split(';')
    .filter(Boolean)
    .reduce((acc, cur) => {
      const [key, value] = cur.split(':');
      if (key && value) acc[key.trim()] = value.trim();
      return acc;
    }, {});
}
