import Squares from "./Suqares";

export function Background() {
  return <div className='fixed top-0 left-0 w-dvw h-dvh bg-black'>
    <Squares
      speed={0.2}
      squareSize={40}
      direction='diagonal'
      borderColor='#1C1C1E'
      hoverFillColor='#000'
    />
  </div>
}