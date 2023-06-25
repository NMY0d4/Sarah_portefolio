import Button from '@/components/ui/button/Button';
import Image from 'next/image';

function About() {
  // STYLE ------------
  const textItemStyle = 'flex-1 mt-12 flex flex-col gap-7';
  // --------------------
  return (
    <div className=''>
      <div className='relative w-full h-[300px]'>
        <Image
          src='/assets/img_about.jpg'
          fill={true}
          alt='Sarah portfolio A propos de mois'
          className='object-cover filter grayscale'
        />
        <div className='absolute bottom-5 left-5 bg-primaryDark p-2 rounded text-tertiary'>
          <h1 className='text-4xl'>Créations graphiques inspirantes</h1>
          <h2 className='text-lg font-semibold'>
            Laissez-moi vous emmener dans mon univers artistique
          </h2>
        </div>
      </div>
      <div className='flex gap-24'>
        <div className={textItemStyle}>
          <h2 className='text-2xl'>Qui je suis?</h2>
          <p className='text-md text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quaerat suscipit similique animi illo eligendi, quos dolorem non
            quis cupiditate iste cumque aperiam maxime repudiandae magni tenetur
            vero quibusdam nobis.
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            consectetur assumenda perspiciatis recusandae repellat sapiente! Eos
            voluptas, ipsam aperiam dicta maiores nesciunt animi similique?
            Illum porro debitis facere soluta id! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Commodi, vitae. Dolorem tenetur, nihil
            placeat, esse, repudiandae accusamus natus numquam.
          </p>
        </div>
        <div className={textItemStyle}>
          <h2 className='text-2xl'>Je fais...</h2>
          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            hic est quae alias dicta, animi esse officia dolores cumque,
            doloremque nemo pariatur ex veritatis laudantium!
            <br />
            <br /> - Créations original
            <br />
            <br /> - Entièrement personnaliser
            <br />
            <br /> - Créations graphiques et vidéos
            <br />
          </p>
          <div className='m-1 p-1 ml-auto'>
            <Button text='Contact' url='contact' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
