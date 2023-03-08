import './index.css';

interface GradientCircle {
  percentage: number;
}

export const SellCircle = ({ percentage }: GradientCircle) => {
  return (
    <svg
      viewBox="0 0 232 232"
      className="-rotate-90"
      style={{ '--percentage': percentage } as React.CSSProperties}
    >
      <circle
        cx="50%"
        cy="50%"
        r="98.5"
        fill="none"
        opacity="0.1"
        stroke="#D9D9D9"
      />
      <circle cx="50%" cy="50%" r="98.5" stroke="url(#sell_circle)" />
      <defs>
        <linearGradient
          id="sell_circle"
          x1="-9"
          y1="82"
          x2="145"
          y2="178"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CE9FFC" />
          <stop offset="1" stopColor="#7367F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TargetCircle = ({ percentage }: GradientCircle) => {
  return (
    <svg
      viewBox="0 0 232 232"
      className="-rotate-90"
      style={{ '--percentage': percentage } as React.CSSProperties}
    >
      <circle
        cx="50%"
        cy="50%"
        r="98.5"
        fill="none"
        opacity="0.1"
        stroke="#D9D9D9"
      />
      <circle cx="50%" cy="50%" r="98.5" stroke="url(#target_circle)" />
      <defs>
        <linearGradient
          id="target_circle"
          x1="1.97421e-07"
          y1="82"
          x2="154"
          y2="178"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DF9780" />
          <stop offset="1" stopColor="#A66DE9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
