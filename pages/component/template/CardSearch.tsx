import {
  Card,
  Group,
  Image,
  Text,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import { IconCheck, IconLocation, IconStar } from "@tabler/icons-react";
import Button from "../atoms/Button";

import { Carousel } from "@mantine/carousel";
import Link from "next/link";

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
      },
    },
  },
  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },
  carouselIndicator: {
    width: rem(4),
    height: rem(4),
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

  body: {
    padding: theme.spacing.md,
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

export function CardSearch({
  image,
  category,
  title,
  date,
  author,
}: CardSearchProps) {
  const { classes } = useStyles();

  const slides = image.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} alt="img" height={230} />
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
        <Link href="/search/[DetailsProductID]" as="/search/123">
          <div className="grid grid-cols-12">
            <div className="col-span-4 md:col-span-3">
              <Carousel
                withIndicators
                loop
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
              className={`${classes.body} py-0 px-1 col-span-8 md:col-span-6`}
            >
              <div className="p-2">
                <Group className="flex gap-1">
                  <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconStar className="text-xs text-[#5d22d5] fill-bg_banfsgy w-[12px] md:w-[15px] " />
                    <p className="text-[#5d22d5] font-bold px-1 text-[9px] md:text-[13px]">
                      Luxury
                    </p>
                  </div>
                  <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconStar className="text-xs text-[#5d22d5] fill-bg_banfsgy w-[12px] md:w-[15px] " />
                    <p className="text-[#5d22d5] font-bold px-1 text-[9px] md:text-[13px]">
                      Spa and Wellness
                    </p>
                  </div>
                  <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconStar className="text-xs text-[#5d22d5] fill-bg_banfsgy w-[12px] md:w-[15px] " />
                    <p className="text-[#5d22d5] font-bold px-1 text-[9px] md:text-[13px]">
                      Best Deal
                    </p>
                  </div>
                </Group>
                <Text
                  transform="uppercase"
                  color="black"
                  weight={700}
                  className=" text-sm md:text-xl cursor-pointer hover:text-[#5d22d5] "
                >
                  {category}
                </Text>
                <Text
                  className={`${classes.title} m-0 md:mt-2 flex items-center`}
                  mt="xs"
                  mb="md"
                >
                  <IconLocation
                    className="mx-2 text-xs fill-[#5d22d5] text-[#5d22d5]"
                    width="12px"
                    height="12px"
                  />
                  <p className="text-[#5d22d5] text-xs">{title}</p>
                </Text>
                <Group noWrap spacing="xs">
                  <Group spacing="xs" className="flex flex-col items-center">
                    <Text size="xs" className="flex items-center gap-.0">
                      <IconCheck className="text-[#00aa00] text-xs" />
                      <p className="text-xs ">
                        Free Internet Access, Free Parking{" "}
                      </p>
                    </Text>
                    <Text size="xs" className="flex items-center">
                      <IconCheck className="text-[#00aa00] text-xs" />
                      <p className="text-xs ">
                        Free Internet Access, Free Parking{" "}
                      </p>
                    </Text>
                  </Group>
                </Group>
                <Group className="mt-4">
                  <p className="text-[#00aa00] text-xs font-bold px-4">
                    Travel Sustainable
                  </p>
                </Group>
                <Group className="flex md:mt-2">
                  <h3 className="font-bold text-white bg-[#f68013] text-xs p-1 px-3 rounded">
                    8.5
                  </h3>
                  <p className="text-xs md:text-sm">
                    1,426 Reviews | 4-Star Hotel
                  </p>
                </Group>
              </div>
            </div>
            <div
              className={`${classes.body} p-1  border-l border-t md:border-l-gray-500-500  col-span-12 md:col-span-3`}
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

                <div className=" text-end md:text-center">
                  {/* تعمل الخصم  */}
                  <p className="text-sm">50$</p>
                  <h1 className="text-[#5d22d5] font-bold text-lg md:text-2xl">
                    30$
                  </h1>
                  <p className="text-xs text-gray-500">price per night</p>
                  <Button className="p-2 rounded-full bg-[#05ac05] hidden md:block">
                    <Link href="/checkout">Choose your room</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Group>
    </Card>
  );
}
