"use client";
import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  rem,
} from "@mantine/core";
import image from "../../../public/assets/image.969ed1dc.svg";
import useFetch from "@/hooks/useFetch";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    gap: "140px",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
      gap: "10px",
    },
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "80%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.sm,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: "10px",
    
  },
}));

export default function Subscribe() {
  const { classes } = useStyles();

  const { data: NewsSection } = useFetch({
    endpoint: `api/dashboard/part/show/News_page`,
    queryKey: [`News_page`],
  });
  return (
    <div
      className={`${classes.wrapper} border-0 p-5 md:px-20 md:py-10 m-auto subscribtion`}
    >
      <div className={`${classes.body} justify-between`}>
        <Title className="relative  mt-5 py-5 text-3xl font-bold  after:w-[50px] after:absolute after:left-[0px] after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px]">
          {
            //@ts-ignore

            NewsSection?.data?.parts[0]?.News_title
          }
        </Title>
        <Text pt="md" fw={500} fz="lg" mb={5}>
          {
            //@ts-ignore

            NewsSection?.data?.parts[1]?.News_body
          }
        </Text>
        <Text fz="sm" c="dimmed">
          {
            //@ts-ignore

            NewsSection?.data?.parts[2]?.News_sup_title
          }
        </Text>

        <div className={classes.controls}>
          
          <TextInput
             
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={`${classes.control} bg-bg_banfsgy  hover:bg-bg_banfsgy border `}>
            Subscribe
          </Button>
        </div>
      </div>
      <Image src={image.src} className={classes.image} alt="img" />
    </div>
  );
}
