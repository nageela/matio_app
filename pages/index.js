import Head from 'next/head';
import Buttonnew from '../comps/Buttonnew';
import Buttons from '../comps/Buttons';
import MenuStepper from '../comps/panels/MenuStepper';
export default function Home() {
  return (
    <div>
      <MenuStepper />
      <div
        className={
          'xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center'
        }> Matio App! </div>

      <p className="xs:text-lg sm:text-xl md:text-2xl mt-2 text-center">
        What's featured in your video:
      </p>
      <Buttonnew />
    </div>
  )
}
