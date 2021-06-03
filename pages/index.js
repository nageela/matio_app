import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
    <Head>
      <title>Matio App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
 
        <button>
            <Image 
              src='/assets/vlog.png' 
              alt = "vlog "
              width = {200} 
              height = {200} 
              />
        </button>

        <button>
            <Image 
                src='/assets/interview.png' 
                alt = "interview "
                width = {200} 
                height = {200} 
            />
        </button>

        <button>
            <Image 
                src='/assets/presentation.png' 
                alt = "presentation "
                width = {200} 
                height = {200} 
            />
        </button>

        <button>
            <Image 
                src='/assets/demo.png' 
                alt = "demo "
                width = {200} 
                height = {200} 
            />
        </button>
      </div>

      

  )
}
