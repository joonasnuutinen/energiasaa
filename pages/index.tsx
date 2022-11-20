import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface EnergyWeather {
  id: string;
  text: string;
  created_at: string;
  image: {
    media_key: string,
    url: string,
    alt_text: string,
    width: number,
    height: number,
  }
}

interface HomeProps {
  energyWeather: EnergyWeather;
}

export default function Home({ energyWeather }: HomeProps) {
  const { text, image } = energyWeather
  const { url, alt_text, width, height } = image
  return (
    <>
      <Head>
        <title>Energiasää</title>
      </Head>
      <main>
        <h1>Energiasää</h1>
        <Image
          src={url}
          alt={alt_text}
          width={width}
          height={height}
        />
        <p>{text}</p>
        
        <h2>Mikä energiasää?</h2>

        <p>Ilmatieteen laitos julkaisee joka maanantai ja torstai <a href="https://twitter.com/meteorologit">Twitter-tilillään</a> katsauksen tulevien päivien säähän energiankäytön ja -tuotannon näkökulmasta.</p>

        <p>Hyvä energiasää vallitsee leudossa ja tuulisessa tilanteessa, huono kovalla pakkasella ja tyynellä säällä.</p>

        <p>Tämä sivu hakee automaattisesti uusimman energiasääennusteen Ilmatieteen laitoksen Twitter-tililtä.</p>

        <p><a href="https://www.ilmatieteenlaitos.fi/saa-ja-energia-kysymyksia-ja-vastauksia">Lue lisää energiasäästä</a></p>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ energyWeather: EnergyWeather }> = async () => {
  const energyWeather: EnergyWeather = {
    id: '1593182200874569728',
    text: '#Energiasää on aluksi huono heikon tuulen ja korkeapaineen vuoksi,  mutta muuttuu tilapäisesti tavanomaiseksi huomenna ja lauantaina tuulen voimistumisen myötä https://t.co/jjVD1jXhhK',
    created_at: '2022-11-17T10:00:11.000Z',
    image: {
      media_key: '3_1593182142292541440',
      url: 'https://pbs.twimg.com/media/Fhwet6XXwAAxImt.jpg',
      alt_text: 'Tänään energiasää on huono.  Perjantaina ja lauantaina energiasää on tavanomainen ja sunnuntaista alkaen huono',
      width: 1265,
      height: 711
    }
  }
  return {
    props: {
      energyWeather
    }
  }
}
