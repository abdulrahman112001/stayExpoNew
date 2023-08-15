import {
  Card,
  Group,
  Image,
  Text,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import { IconArrowLeft, IconCheck, IconFileLike, IconLink, IconLocation, IconStar, IconStarFilled } from "@tabler/icons-react";
import Button from "../atoms/Button";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import like from './../../../public/assets/Like.svg'
import { IconChevronLeft } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {

    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
      opacity: 1,
      height:"100%",
      top:0
      },
    },
  },
  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    height:"100%",
    opacity: 0,
  },
  carouselIndicator: {
    height:'100%',
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },
}));

interface CardSearchProps {
  image: string[];
  category?: string;
  title?: string;
  date?: string;
  author?: {
    name?: string;
    avatar?: string;
  };
}

export default function CardSearch({
  image,
  category,
  title,
  date,
  author,
}: CardSearchProps) {
  const { classes } = useStyles();

  const slides = image?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} alt="img" height={250} />
    </Carousel.Slide>
  ));

  return (
    <Card
      withBorder
      radius="lg"
      p={0}
      className={`${classes.card}  mt-4 hover:shadow-xl  hover:transition-shadow cursor-pointer`}
    >
      <Group noWrap spacing={0}>
        
          <div className="grid grid-cols-12">
            <div className="col-span-4 md:col-span-3 Carousel-container">
              <Carousel
                withIndicators
                loop
                nextControlIcon={<div className="nextIcon"> <IconChevronRight className=" absolute top-[50%] right-[10px] text-white " /></div>}
                previousControlIcon={<div className="prevIcon"><IconChevronLeft className=" absolute top-[50%] left-[10px] text-white " /> </div>}
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                 {slides}
              </Carousel>
            </div>
            
            <div
              className={`py-0 px-1 col-span-8 md:col-span-6`}
            >
              <Link href="/search/[DetailsProductID]" as="/search/123">
              <div className="p-2">
                <Group className="flex gap-1">
                  <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconStar className="text-xs text-[#5d22d5] fill-bg_banfsgy w-[12px] md:w-[15px] " />
                    <p className="text-[#5d22d5] font-semibold px-1 text-[9px] md:text-[13px]">
                      Luxury
                    </p>
                  </div>
                  <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconStar className="text-xs text-[#5d22d5] fill-bg_banfsgy w-[12px] md:w-[15px] " />
                    <p className="text-[#5d22d5] font-semibold px-1 text-[9px] md:text-[13px]">
                      Spa and Wellness
                    </p>
                  </div>
                  <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconStar className="text-xs text-[#5d22d5] fill-bg_banfsgy w-[12px] md:w-[15px] " />
                    <p className="text-[#5d22d5] font-semibold px-1 text-[9px] md:text-[13px]">
                      Best Deal
                    </p>
                  </div>
                </Group>
                <Text
                  transform="uppercase"
                  color="black"
                  pt='xs'
                  weight={700}
                  className=" text-sm md:text-xl cursor-pointer  hover:text-[#5d22d5] "
                >
                  {category}
                </Text>
                <span className=" inline-flex items-center">
                     <IconStarFilled size={15}  className=" text-yellow-400" />
                     <IconStarFilled size={15}  className=" text-yellow-400" />
                     <IconStarFilled size={15}  className=" text-yellow-400" />
                     <IconStarFilled size={15}  className=" text-yellow-400" /> 
                      <span className="bg-yellow-400 w-[18px] h-[18px]  p-[.15rem] rounded ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg"  data-name="Layer 1" viewBox="0 0 100 125"><path width="10px" height='10px' fill="#fff" d="M96.56,55.31A13.7,13.7,0,0,0,100,46,12.16,12.16,0,0,0,88,34H70.69a15.74,15.74,0,0,1,.5-1.5,10.46,10.46,0,0,1,.69-1.38q0.44-.75.62-1.12,1.12-2.12,1.72-3.5a25.54,25.54,0,0,0,1.19-3.75A19.48,19.48,0,0,0,76,18c0-1,0-1.81,0-2.44a26.88,26.88,0,0,0-.31-2.81,15.78,15.78,0,0,0-.75-3.12,14.56,14.56,0,0,0-1.5-2.81,8.76,8.76,0,0,0-2.5-2.53,13.7,13.7,0,0,0-3.75-1.62A18.67,18.67,0,0,0,62,2a3.84,3.84,0,0,0-2.81,1.19,10.85,10.85,0,0,0-2.13,3.12,18.6,18.6,0,0,0-1.22,3.25q-0.34,1.37-.78,3.81Q54.5,16,54.22,17.16a20,20,0,0,1-1.09,3,9.58,9.58,0,0,1-1.94,3,92.41,92.41,0,0,0-6.31,7.5q-3.06,4-6.31,7.56t-4.75,3.69a4.1,4.1,0,0,0-2.69,1.28A3.77,3.77,0,0,0,30,45.94V86a3.74,3.74,0,0,0,1.19,2.78A4.13,4.13,0,0,0,34,90q2.19,0.06,9.88,2.75,4.81,1.62,7.53,2.47T59,97a46.44,46.44,0,0,0,9,1h8.06q8.31-.12,12.31-4.87Q92,88.81,91.43,81.81a12.16,12.16,0,0,0,3.37-5.87,12.85,12.85,0,0,0,0-7.31,13,13,0,0,0,2.69-8.56A14.9,14.9,0,0,0,96.56,55.31Z"/><path fill="#fff" d="M26,46V86a4.06,4.06,0,0,1-4,4H4a3.85,3.85,0,0,1-2.81-1.19A3.85,3.85,0,0,1,0,86V46a3.85,3.85,0,0,1,1.19-2.81A3.85,3.85,0,0,1,4,42H22A4.06,4.06,0,0,1,26,46Z"/></svg>
                     </span>
                </span>
                <Text
                  className={`${classes.title}  flex items-center`}
                  my='xs'
                >
                  <IconLocation
                    className=" text-xs fill-[#5d22d5] text-[#5d22d5]"
                    width="12px"
                    height="12px"
                  />
                  <Link href='/' className="mx-2 hover:underline text-[#5d22d5] text-xs">{title}</Link>
                </Text>
                <Group noWrap >
                  <div className="flex flex-col items-center">
                    <Text size="xs" className=" inline-flex items-center ">
                      <IconCheck className="text-[#00aa00] mr-2" size={20} />
                      <p className="text-xs ">
                        Free Internet Access, Free Parking{" "}
                      </p>
                    </Text>
                    <Text size="xs" className=" inline-flex items-center">
                      <IconCheck className="text-[#00aa00] mr-2" size={20} />
                      <p className="text-xs ">
                        Free Internet Access, Free Parking{" "}
                      </p>
                    </Text>
                  </div>
                </Group>
                <Group className="mt-2">
                  <p className="text-[#00aa00] text-xs font-bold px-4">
                    Travel Sustainable
                  </p>
                </Group>
                <Group className=" inline-flex items-center ">
                  <h3 className="font-bold text-white bg-yellow-400 text-xs p-1 mt-2 px-3 rounded">
                    8.5
                  </h3>
                  <p className="text-xs md:text-sm mt-2">
                    1,426 Reviews 
                    
                  </p>
                </Group>
              </div>
              </Link>
             </div>
            <div
              className={` p-1  border-l border-t md:border-l-gray-500-500  col-span-12 md:col-span-3`}
            >
              <div className="flex  md:flex-col items-center justify-between md:text-center md:gap-[68px]">
                <div>
                  <p className="text-[#5e22d5bd] font-bold text-sm ">
                    Stay Expo
                  </p>
                  <p className="text-[#481e9bce] font-bold text-sm">
                    Sign in for a VIP-only discount
                  </p>
                </div>

                <div className=" text-end md:text-center px-2">
                  {/* تعمل الخصم  */}
                  <p className="text-sm">50$</p>
                  <h1 className="text-[#5d22d5] font-bold text-lg md:text-2xl">
                    30$
                  </h1>
                  <p className="text-xs text-gray-500">price per night</p>
                  <Button className="px-2 py-1 my-2 rounded-full bg-[#05ac05] hidden md:block">
                    <Link href="/checkout">Choose your room</Link>
                  </Button>
                </div>
              </div>
            </div>
           
          </div>
     
      </Group>
    </Card>
  );
}
