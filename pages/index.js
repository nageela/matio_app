import Head from 'next/head';
import Image from 'next/image';
import { Container } from 'postcss';
import Button from '../comps/Buttons';
import { motion } from 'framer-motion';
import Dash from '../comps/Dash';

export default function Home() {
  return (
    <div>
    <Head>
      <title>Matio App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div
            className={
              'xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center'
            }> Matio App! </div>

    <p className="xs:text-lg sm:text-xl md:text-2xl mt-2 text-center">
            What's featured in your video:
          </p>
    <Button />
    {/* <Dash /> */}
    </div>
  )
}
