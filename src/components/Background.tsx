// GradientBlurBackground.tsx
// Tailwind + your gradient, blurred, content stays sharp.

type Props = {
  blurStrength?: string; // Tailwind blur size e.g. 'blur-3xl'
  opacity?: number; // 0..1
  children?: React.ReactNode;
};

const GradientBlurBackground: React.FC<Props> = ({
  blurStrength = "blur-3xl",
  opacity = 1,
  children,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 -z-30 ${blurStrength}`}
        style={{
          background:
            "radial-gradient(circle farthest-corner at 7.5% 14.2%, #fff 0%, #fff 50%, rgba(254,243,240,0.85) 70%, rgba(250,236,252,0.25) 85%, rgba(180,255,210,0.10) 100%)",
          opacity,
          filter: "blur(60px)", // heavy softness
        }}
      />

      {/* Optional translucent overlay to tone it down */}
      <div className="absolute inset-0 -z-20 bg-white/10" />

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBlurBackground;
