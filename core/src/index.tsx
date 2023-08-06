import React, { useEffect, useRef } from 'react';
import './index.less';

export interface ClockProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  value?: Date;
  run?: boolean;
}

const rotations = [0, 0, 0]; // [seconds, minutes, hours]

export default function Clock(props: ClockProps = {}) {
  const { width = 140, height = 140, value, run = true, ...svgProps } = props;
  const interval = useRef<NodeJS.Timeout>();
  const handHour = React.createRef<SVGLineElement>();
  const handMinute = React.createRef<SVGLineElement>();
  const handSecond = React.createRef<SVGGElement>();
  function handleTime() {
    const now = new Date(value || new Date());
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    if (seconds === 0) {
      rotations[0] += 1;
    }

    if (minutes === 0 && seconds === 0) {
      rotations[1] += 1;
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      rotations[2] += 1;
    }

    const secondsDeg = (seconds / 60) * 360 + rotations[0] * 360;
    const minutesDeg = (minutes / 60) * 360 + rotations[1] * 360;
    const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + rotations[2] * 360;
    if (handHour.current) {
      handHour.current.style.transform = `rotate(${hoursDeg}deg)`;
    }
    if (handMinute.current) {
      handMinute.current.style.transform = `rotate(${minutesDeg}deg)`;
    }
    if (handSecond.current) {
      handSecond.current.style.transform = `rotate(${secondsDeg}deg)`;
    }
  }
  useEffect(() => {
    handleTime();
    if (run) {
      interval.current = setInterval(() => handleTime(), 1000);
    }
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = undefined;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <svg
      className="u-clock"
      viewBox="0 0 100 100"
      color="#212121"
      fill="currentColor"
      width={width}
      height={height}
      {...svgProps}
    >
      <g className="u-clock-marks">
        {[...Array(12)].map((_, idx) => (
          <line
            key={idx}
            stroke="currentColor"
            opacity={0.7}
            strokeWidth={1}
            transform={`rotate(${30 * idx})`}
            strokeLinecap="round"
            x1="50"
            y1="5"
            x2="50"
            y2="10"
          />
        ))}
      </g>
      <line
        ref={handHour}
        stroke="currentColor"
        className="u-clock-hour"
        strokeLinecap="round"
        strokeWidth="1.5"
        x1="50"
        y1="25"
        x2="50"
        y2="50"
      />
      <line
        ref={handMinute}
        stroke="currentColor"
        className="u-clock-minute"
        strokeLinecap="round"
        strokeWidth="1.5"
        x1="50"
        y1="10"
        x2="50"
        y2="50"
      />
      <circle cx="50" cy="50" r="3" />
      <g ref={handSecond} className="u-clock-second" stroke="currentColor" color="#F44336" strokeWidth="1">
        <line x1="50" y1="10" x2="50" y2="60" strokeLinecap="round" />
        <circle cx="50" cy="50" r="1.5" />
      </g>
    </svg>
  );
}
