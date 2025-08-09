import ParallaxLayer from "../Parallax/ParallaxLayer";

export default function Decor() {
  return (
    <>
      <ParallaxLayer
        mode="fixed"
        speed={0.1}
        translateMax={160}
        className="absolute inset-0 -z-10"
      >
        <div className="h-full w-full bg-[radial-gradient(circle,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />
      </ParallaxLayer>
      <ParallaxLayer
        mode="fixed"
        speed={0.16}
        translateMax={200}
        className="absolute -z-10 -top-24 -right-24 h-[42vmax] w-[42vmax]"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-transparent blur-3xl" />
      </ParallaxLayer>
      <ParallaxLayer
        mode="fixed"
        speed={0.14}
        translateMax={200}
        className="absolute -z-10 -bottom-28 -left-28 h-[48vmax] w-[48vmax]"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-tr from-sky-400/20 via-sky-300/10 to-transparent blur-3xl" />
      </ParallaxLayer>
    </>
  );
}
