import React, { useEffect, useRef } from 'react';
import './index.less';

export type ClockProps = {
  width?: number;
  height?: number;
  value?: Date;
  run?: boolean
} & React.SVGProps<SVGSVGElement>;

const rotations = [0, 0, 0]; // [seconds, minutes, hours]

export default function Clock(props: ClockProps = {}) {
  const { width= 140, height =140, value, run = true, ...svgProps } = props;
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

    const secondsDeg = ((seconds / 60) * 360) + (rotations[0] * 360);
    const minutesDeg = ((minutes / 60) * 360) + (rotations[1] * 360);
    const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + (rotations[2] * 360);
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
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <svg className="u-clock" viewBox="0 0 100 100" {...svgProps} style={{ ...props.style, width, height }}>
      <g className="u-clock-marks">
        <line className="u-clock-marks u-clock-mark1" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark2" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark3" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark4" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark5" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark6" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark7" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark8" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark9" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark10" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark11" x1="50" y1="5" x2="50" y2="10" />
        <line className="u-clock-marks u-clock-mark12" x1="50" y1="5" x2="50" y2="10" />
      </g>
      <line ref={handHour} className="u-clock-hand u-clock-hour" x1="50" y1="25" x2="50" y2="50" />
      <line ref={handMinute} className="u-clock-hand u-clock-minute" x1="50" y1="10" x2="50" y2="50" />
      <circle cx="50" cy="50" r="3" />
      <g ref={handSecond} className="u-clock-hand u-clock-second">
        <line x1="50" y1="10" x2="50" y2="60" />
        <circle cx="50" cy="50" r="1.5" />
      </g>
    </svg>
  );
}