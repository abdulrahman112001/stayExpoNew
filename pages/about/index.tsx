"use client"
import { Image, Tabs, createStyles, rem } from '@mantine/core';
import { useState } from 'react';
import HeaderCustom from '../component/mucles/HeaderAboutUs';
import aboutImg from "./../../public/assets/aboutUsBg.283634d46aaffe882099641c82cb1b7c.webp";
import careerImg from "./../../public/assets/career.png";
import shape from "./../../public/assets/primary-shape.png";
const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.md} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : "transparent",
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '80%',
    marginRight:'-130px',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : "text-slate-950",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
    
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));


 const AboutUs = () => {
  const { classes } = useStyles();
  const [showShape,setShowShape] = useState(false)
  return (
    <>
     <div className='w-[100%] h-auto relative overflow-hidden' >
      <HeaderCustom 
        HeaderImage={aboutImg.src} label='About Us'
        description='We offer over 2 million accommodation options, FIT & group reservations, car rental,
        transfers, and other travel-related services for both leisure and business travel.' />
    
           <div className="absolute shapeOne">
              
              <Image alt="shape" src={shape.src} width={100} height={100} />
            </div>
            <div className="absolute shapTwo">
              
              <Image alt="shape" src={shape.src} className="w-1/2"  width={100} height={100}/>
            </div>
            {/* <div className="absolute lg:bottom-[15%] lg:right-[35%] z-10">
              
              <Image width={150} height={150} alt="shape" src={shape.src} />
            </div> */}
    </div>
   
    <div className='p-5 ' >
        <div className='grid gap-5 lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 '>
        <div className='rounded-md lg:col-span-6 md:col-span-1 sm:col-span-1'>
              
              <Image src={careerImg.src} alt='img' height={500} width={500}  />
             
          </div>
            <div className='lg:col-span-6 md:col-span-1 sm:col-span-1'>
               <h2 className=' font-extrabold text-[28px] mb-5'>Career</h2>
                <p className=' lg:text-xl lg:mb-[40px] font-[500] py-3 '> 
                  RateHawk is one of the fastest-growing platforms for travel professionals in the world; hence we constantly search for talents in Europe, Asia, North and South America, and Africa.
                </p>
                <p className=' lg:text-xl lg:mb-[40px] font-[500]  py-3  '> 
                  We want to fill people’s lives with memories of their journeys throughout the world with the help of advanced technology and irreproachable service.
                </p>
                <p className=' lg:text-xl lg:mb-[40px] font-[500]  py-3  '> 
                  Our team develops the platform, grows the business, and supports B2С and B2B clients in eight languages. And we all share the same principles and values — this distinguishes us from the rest of the market.
                </p>
            </div>
            {/* <div className="absolute lg:-bottom-[5%]  sm:hidden md:hidden left-[15%] z-10">
                  
                  <Image width={150} height={150} alt="shape"  src={shape.src} />
              </div> */}
       
           
        </div>
           
          
    </div> 

    <div className='container my-5 p-7'>
        <Tabs color="violet" variant="pills" radius="lg" defaultValue="2022">
        <Tabs.List>
          <Tabs.Tab value="2022" className='text-lg font-semibold '>2022</Tabs.Tab>
          <Tabs.Tab value="2021"  className='text-lg font-semibold '>2021</Tabs.Tab>
          <Tabs.Tab value="2020"  className='text-lg font-semibold '>2020</Tabs.Tab>
          <Tabs.Tab value="2019"  className='text-lg font-semibold '>2019</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="2022" pt="xs">
          <ul className='mx-5 list-disc '>
            <li className='p-1 text-lg font-semibold'>became a member of SMAL</li>
            <li className='p-1 text-lg font-semibold '>hired more staff – there are now more than 1,000 people on our team</li>
            <li className='p-1 text-lg font-semibold'>added a new payment method – by payment link</li>
            <li className='p-1 text-lg font-semibold'>entered the Latin American market</li>
          </ul>
        </Tabs.Panel>

        <Tabs.Panel value="2021" pt="xs">
        <ul className='mx-5 list-disc '>
            <li className='p-1 text-lg font-semibold'>launched online service for booking flights and transfers</li>
            <li className='p-1 text-lg font-semibold'>hired more staff – there are now more than 1,000 people on our team</li>
            <li className='p-1 text-lg font-semibold'>added a new payment method – by payment link</li>
            <li className='p-1 text-lg font-semibold'>entered the Latin American market</li>
          </ul>
        </Tabs.Panel>

        <Tabs.Panel value="2020" pt="xs">
        <ul className='mx-5 list-disc '>
            <li className='p-1 text-lg font-semibold'>opened legal entities in Kazakhstan, Great Britain, and Germany</li>
            <li className='p-1 text-lg font-semibold'>hired more staff – there are now more than 1,000 people on our team</li>
            <li className='p-1 text-lg font-semibold'>added a new payment method – by payment link</li>
            <li className='p-1 text-lg font-semibold'>entered the Latin American market</li>
          </ul>
        </Tabs.Panel>
          <Tabs.Panel value="2019" pt="xs">
        <ul className='mx-5 list-disc '>
            <li className='p-1 text-lg font-semibold'>added a new payment method – by payment link</li>
            <li className='p-1 text-lg font-semibold'>hired more staff – there are now more than 1,000 people on our team</li>
            <li className='p-1 text-lg font-semibold'>added a new payment method – by payment link</li>
            <li className='p-1 text-lg font-semibold'>entered the Latin American market</li>
          </ul>
        </Tabs.Panel>
      </Tabs>
    </div>      
    
     </>
  )
}
export default AboutUs
