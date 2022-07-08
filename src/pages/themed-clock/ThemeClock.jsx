import { useEffect, useState } from "react";
import {
  StyledTime,
  CenterDot,
  SecondNeedle,
  MinutesNeedle,
  ThemedButton,
  HourNeedle,
  ThemedWrapper,
  Circle,
  Loading,
} from "./clockStyle";
import { months, days, initTime, getTime } from "./timeHelperFunction";
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function ThemeClock(props) {
  const [lightTheme, setLightTheme] = useState(true);
  const [time, setTime] = useState(null);
  const handleSwitchTheme = () => {
    setLightTheme(!lightTheme);
    console.log(lightTheme);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTime();
      setTime(time);
      console.log(time);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <ThemedWrapper isLight={lightTheme}>
      <div className="flex flex-col">
        <ThemedButton isLight={lightTheme} onClick={handleSwitchTheme}>
          Light Mode
        </ThemedButton>

        {!time && <Loading isLight={lightTheme}>Loading..</Loading>}
        {time && (
          <div className="">
            {/* clock */}
            <div className="w-[200px] h-[200px]">
              {/* hour */}
              <HourNeedle
                isLight={lightTheme}
                hour={scale(time.hoursForClock, 0, 12, 0, 360)}
              />
              {/* Minius */}
              <MinutesNeedle
                isLight={lightTheme}
                minutes={scale(time.minutes, 0, 60, 0, 360)}
              />
              {/* seconds */}
              <SecondNeedle
                isLight={lightTheme}
                seconds={scale(time.seconds, 0, 60, 0, 360)}
              />
              <CenterDot isLight={lightTheme} />
            </div>
            {/* time */}
            <StyledTime isLight={lightTheme}>{`${time.hoursForClock}:${
              time.minutes < 10 ? `0${time.minutes}` : time.minutes
            } ${time.ampm}`}</StyledTime>
            {/* date */}
            <div className="text-center text-[#aaa] flex justify-center items-center">
              {`${days[time.day]}, ${months[time.month]}`}
              <Circle isLight={lightTheme}>{time.date}</Circle>
            </div>
          </div>
        )}
      </div>
    </ThemedWrapper>
  );
}

export default ThemeClock;
